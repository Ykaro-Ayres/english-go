# English GO — Android

## Requisitos
Node 20+, Android Studio, Android SDK e JDK 21.

## Gerar projeto Android
```bash
npm install
npm run android:add
npm run android:sync
npm run android:open
```
No Android Studio, aguarde o Gradle sincronizar e use Build > Build APK(s) ou Run com o celular conectado.

Após modificar o aplicativo web, rode `npm run android:sync` para atualizar os arquivos Android.

## Offline e voz
O conteúdo, os testes e o progresso usam arquivos locais e localStorage do WebView. A voz usa o mecanismo de síntese instalado no Android: para ouvir sem internet, instale e selecione uma voz inglesa que permita uso offline em Configurações > Texto para fala. O botão 'Ouvir devagar' usa velocidade 0,52 (a velocidade efetiva depende do mecanismo instalado). Não há professor conversacional de IA local nesta entrega.

## Limitações conhecidas
O catálogo contém 240 palavras em 40 grupos e as lições de frases/provas A1–C2 são protótipos, não um currículo validado completo. A geração do projeto nativo depende do SDK Android local. Ainda não há avaliação automática confiável de pronúncia, nem teste CEFR oficial. Os dados ficam no dispositivo; não limpe os dados do app sem backup.
