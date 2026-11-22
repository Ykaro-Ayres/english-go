$ErrorActionPreference = "Stop"
$project = Join-Path $PSScriptRoot "android"
if (!(Test-Path (Join-Path $project "app\src\main\res"))) { throw "Pasta Android nao encontrada. Execute npx cap add android uma unica vez." }
Copy-Item -Path (Join-Path $PSScriptRoot "android-icon-fix\res\*") -Destination (Join-Path $project "app\src\main\res") -Recurse -Force
Write-Host "Icones Android atualizados. Gere novamente o APK no Android Studio." -ForegroundColor Green
