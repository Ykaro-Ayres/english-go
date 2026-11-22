$ErrorActionPreference = 'Stop'
$project = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $project 'src/styles/app.css'
if (-not (Test-Path $target)) { throw 'Nao encontrei src/styles/app.css. Copie este script para a raiz do projeto english-go.' }
$original = [System.IO.File]::ReadAllText($target)
if ($original.Contains('Android status-bar overlap fix')) { Write-Host 'Correcao ja aplicada.'; exit 0 }
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
[System.IO.File]::AppendAllText($target, $patch, (New-Object System.Text.UTF8Encoding($false)))
Write-Host 'Cabecalho corrigido em src/styles/app.css'
