$ErrorActionPreference = 'Stop'
$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$project = 'C:\Projetos\english-go'
if (-not (Test-Path (Join-Path $project 'package.json'))) { throw "Projeto nao encontrado em $project" }
Set-Location $project
if (-not (Test-Path '.git')) { throw 'Git nao foi inicializado nesta pasta.' }

$cssPath = Join-Path $project 'src/styles/app.css'
$css = [System.IO.File]::ReadAllText($cssPath)
if (-not $css.Contains('Android status-bar overlap fix')) {
  $patch = @'

/* Android status-bar overlap fix: keep the app header below system indicators. */
@media (max-width:650px) {
  .top {
    box-sizing: content-box;
    padding-top: max(32px, env(safe-area-inset-top, 0px));
    min-height: 65px;
    height: 65px;
  }
}
'@
  [System.IO.File]::AppendAllText($cssPath, $patch, (New-Object System.Text.UTF8Encoding($false)))
}

$imagesDest = Join-Path $project 'docs/screenshots'
New-Item -ItemType Directory -Force -Path $imagesDest | Out-Null
Copy-Item -Path (Join-Path $source 'README.md') -Destination (Join-Path $project 'README.md') -Force

git add -- README.md src/styles/app.css docs/screenshots
if ($LASTEXITCODE -ne 0) { throw 'git add falhou.' }
git diff --cached --check
if ($LASTEXITCODE -ne 0) { throw 'Ha problemas no diff. Corrija antes de publicar.' }
git diff --cached --stat
if ((git diff --cached --name-only).Length -eq 0) { Write-Host 'Nada novo para publicar.'; exit 0 }

git commit -m 'fix: respect Android status bar and document app screenshots'
if ($LASTEXITCODE -ne 0) { throw 'git commit falhou.' }
git push origin main
if ($LASTEXITCODE -ne 0) { throw 'git push falhou. Envie a mensagem de erro.' }
Write-Host 'Atualizacao enviada ao GitHub com sucesso.'
