$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$javaDir = Join-Path $root "android\app\src\main\java\com\englishgo\app"
if (!(Test-Path (Join-Path $root "android\app\src\main"))) { throw "Pasta android ausente. Execute npx cap add android uma unica vez." }
New-Item -ItemType Directory -Force -Path $javaDir | Out-Null
Copy-Item (Join-Path $root "android-audio-fix\EnglishGoSpeechPlugin.java") (Join-Path $javaDir "EnglishGoSpeechPlugin.java") -Force
$main = Join-Path $javaDir "MainActivity.java"
if (!(Test-Path $main)) { throw "MainActivity.java nao encontrado em $main. Verifique o package Android antes de continuar." }
$content = Get-Content $main -Raw
if ($content -notmatch 'registerPlugin\(EnglishGoSpeechPlugin.class\)') {
  if ($content -match 'public class MainActivity extends BridgeActivity\s*\{') {
    $needle = [regex]::Match($content, 'public class MainActivity extends BridgeActivity\s*\{').Value
    $replacement = $needle + "`r`n  @Override public void onCreate(android.os.Bundle savedInstanceState) {`r`n    registerPlugin(EnglishGoSpeechPlugin.class);`r`n    super.onCreate(savedInstanceState);`r`n  }"
    $content = $content.Replace($needle, $replacement)
  } else { throw "Estrutura inesperada de MainActivity.java. Nao foi modificado." }
  Set-Content -Path $main -Value $content -Encoding UTF8
}
Write-Host "Plugin nativo de voz instalado. Agora execute npm run build e npx cap sync android." -ForegroundColor Green
