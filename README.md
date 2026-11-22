# English GO 1.0 — Base funcional offline

Aplicativo React + TypeScript, com interface responsiva, currículo inicial, correção determinística, trilhas por objetivo e armazenamento local.

## Executar no VS Code

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra a URL local exibida pelo Vite.

## Build de produção

```bash
npm run build
```

## Android (próxima integração)

O projeto foi preparado para web e futura integração com Capacitor. **Ainda não inclui um projeto Android ou APK**. Para integrar depois:

```bash
npm install @capacitor/core @capacitor/android
npm install -D @capacitor/cli
npx cap init "English GO" "com.englishgo.app" --web-dir dist
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

## Estrutura

- `src/data/curriculum.ts`: esquema de currículo, lições e dicionário demonstrativos.
- `src/engine/progress.ts`: respostas, pontuação, desbloqueio, persistência e revisão.
- `src/main.tsx`: interface funcional, onboarding, navegação e lições.
- `src/styles/app.css`: layout responsivo.

## Limitações declaradas

- Esta é uma **fundação funcional**, não um curso completo A1–C2. Inclui 9 lições e 8 verbetes de demonstração.
- Voz utiliza SpeechSynthesis do sistema/navegador. Funciona offline **somente quando houver voz inglesa instalada localmente**; o navegador pode não garantir isso. Nenhum áudio é enviado pelo aplicativo a uma API própria.
- Ainda não há reconhecimento de fala, avaliação fonética, IA local, sincronização, teste de nivelamento, agendamento real de repetição espaçada ou pacotes offline de áudio.
- A correção escrita é exata, ignorando maiúsculas, pontuação simples e espaços. Respostas semanticamente equivalentes podem ser rejeitadas.
- Os níveis A2–C2 possuem apenas exemplos introdutórios e não certificam proficiência.
- Fontes Google Fonts são opcionais; sem conexão, a interface usa fontes locais de sistema.
- O armazenamento local pode ser apagado ao limpar dados do navegador; não há backup remoto.

## Próximas etapas recomendadas

1. Separar componentes e migrar currículo para JSON versionado com validação de esquema.
2. Criar banco SQLite e repositórios para perfis, lições, resultados e revisões.
3. Desenvolver gerador de revisão espaçada e testes de nivelamento.
4. Adicionar áudio offline empacotado e TTS nativo Android.
5. Integrar reconhecimento de voz offline e depois um modelo conversacional local, após benchmarks em dispositivo real.
6. Produzir e revisar conteúdo pedagógico amplo A1–C2 por especialistas.
7. Implementar testes automatizados, acessibilidade e publicação Android.


## Atualização 1.1 — provas e identidade visual
- Provas finais A1, A2, B1, B2, C1, C2, com 4 questões de demonstração por nível.
- É necessário concluir as lições disponíveis do nível e acertar ao menos 80% na prova para liberar o nível seguinte.
- Resultados das provas são persistidos localmente. As provas podem ser refeitas.
- Logo selecionada integrada ao cabeçalho, menu, onboarding, favicon e manifesto PWA.
- **Limitações:** banco de provas é demonstrativo e pequeno, não é exame CEFR validado; avaliação oral e rubricas de escrita ainda não foram implementadas. Reconhecimento de voz offline requer integração nativa futura.
- Selecionar nível inicial avançado no onboarding é uma escolha do aluno, ainda sem prova de nivelamento validada.


## Atualização visual e vocabulário
Identidade azul/violeta, logo UK/US, 312 palavras em 52 grupos, 20 ilustrações SVG offline e exercícios alternados de áudio, tradução e imagem. O reconhecimento de fala e a IA conversacional local ainda não estão implementados.
