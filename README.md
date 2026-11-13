# Assim que as Flores Crescem 🌸

Jogo de navegador de cultivo, exploração, sobrevivência e restauração ambiental, inspirado no universo artístico de **Assim que as Flores Crescem**.

Você começa em um deserto e trabalha para recuperar as nascentes, preencher os leitos de rios secos e fazer a floresta voltar a crescer. Construa sua fazenda, cuide dos animais e proteja as plantações das criaturas noturnas.

## Jogar

A página principal do jogo é `index.html`. Depois de ativar o GitHub Pages, acesse:

**https://francothesir.github.io/assim-que-as-flores-crescem/**

Também é possível abrir `index.html` diretamente em um navegador moderno. O jogo está contido em um arquivo HTML, sem servidor nem dependências externas obrigatórias.

## Ativar GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Em **Branch**, selecione `main` e `/(root)`, depois **Save**.
4. Após a publicação, a URL acima ficará disponível. Cada commit em `main` atualizará o site.

## Controles

- **WASD / setas:** mover
- **E:** coletar e interagir
- **Espaço:** usar ferramenta selecionada
- **1 a 8:** selecionar item da barra
- **I:** inventário
- **B:** construir e fabricar
- **J:** diário de missões
- **Esc:** ajuda/controles
- **Celular:** botões na tela

## Progresso e saves

O jogo usa o armazenamento local do navegador. Seus saves **não são sincronizados automaticamente** entre domínios, dispositivos ou navegadores. Antes de migrar de arquivo local para o GitHub Pages, **exporte seu save em JSON** no menu; depois importe na página publicada.

## Organização

- `index.html` — build jogável publicada pelo GitHub Pages
- `README.md` — instruções e contexto
- `.nojekyll` — evita processamento desnecessário pelo Jekyll

## Estado do projeto

Protótipo em desenvolvimento. A versão online mantém os sistemas presentes no HTML publicado (criação de personagem, missões, exploração, cultivo, construções, rios, animais, sobrevivência e saves). Um conjunto de animações low-poly foi criado separadamente; **não confundir esse pacote com animações já integradas ao jogo**. A integração dos sprites novos e revisões adicionais precisam ser testadas em novas versões.

## Como atualizar o site

Altere `index.html` na branch `main` e envie um novo commit. O GitHub Pages recompilará a publicação automaticamente. Faça uma cópia de segurança do save antes de atualizar versões importantes.
