$port = 3005
$baseDir = "E:\parkash-tt\tour-travels"
$screenDir = "$baseDir\public\screenshots"

if (-not (Test-Path $screenDir)) {
  New-Item -ItemType Directory -Force -Path $screenDir | Out-Null
}

# Start next start on port 3005
$server = Start-Process -FilePath "node" -ArgumentList "node_modules/next/dist/bin/next start -p $port" -PassThru -NoNewWindow
Start-Sleep -Seconds 5

$browser = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $browser)) {
  $browser = "C:\Program Files\Google\Chrome\Application\chrome.exe"
}

try {
  Write-Output "Capturing Desktop Screenshot..."
  & $browser --headless --disable-gpu --hide-scrollbars --window-size=1440,1080 --screenshot="$screenDir\desktop.png" "http://localhost:$port"
  Start-Sleep -Seconds 2

  Write-Output "Capturing Tablet Screenshot..."
  & $browser --headless --disable-gpu --hide-scrollbars --window-size=768,1024 --screenshot="$screenDir\tablet.png" "http://localhost:$port"
  Start-Sleep -Seconds 2

  Write-Output "Capturing Mobile Screenshot..."
  & $browser --headless --disable-gpu --hide-scrollbars --window-size=390,844 --screenshot="$screenDir\mobile.png" "http://localhost:$port"
  Start-Sleep -Seconds 2

  Get-ChildItem -Path $screenDir
} finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
  taskkill /F /IM node.exe /T 2>$null
}
