param([int]$Port = 3000)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:${Port}/")
$listener.Start()
Write-Host "Server running at http://localhost:${Port}/"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $path = $ctx.Request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    $fp = Join-Path $root $path.TrimStart("/")

    if (Test-Path $fp) {
        $ext = [System.IO.Path]::GetExtension($fp)
        $ct = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
        $ctx.Response.ContentType = $ct
        $b = [System.IO.File]::ReadAllBytes($fp)
        $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    } else {
        $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
}
