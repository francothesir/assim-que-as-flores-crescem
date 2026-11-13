# Guia de atualizações — Assim que as Flores Crescem

## Publicação inicial

1. Entre em **Settings → Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.
4. Após a implantação, o endereço será: https://francothesir.github.io/assim-que-as-flores-crescem/

**A configuração do Pages é manual e precisa ser feita somente uma vez.** A partir daí, commits em `main` atualizam o site automaticamente.

## Fluxo recomendado

1. Trabalhe em uma branch, como `feature/novos-sprites`.
2. Preserve um backup da versão estável em `versions/`.
3. Teste o jogo no navegador antes de juntar as alterações.
4. Abra um Pull Request e verifique se a ação **Verificar jogo** terminou sem erros.
5. Faça merge na `main`. O Pages publicará o `index.html` atualizado.

## Checklist antes de publicar

- [ ] Criador de personagem: aparência, roupas e chapéus
- [ ] Movimentação e coleta com E
- [ ] Inventário, troca de slots e baú
- [ ] Ferramentas, durabilidade e fabricação
- [ ] Construção livre e cercados
- [ ] Animais de criação: alimentação e água
- [ ] Inimigos: ataques e dano na noite
- [ ] Seta e diário de missões
- [ ] **Rios começam secos** e se enchem **progressivamente** ao recuperar as fontes
- [ ] Árvores permanentes crescem com a regeneração
- [ ] Exportação e importação de progresso JSON
- [ ] Layout de computador e celular

## Sprites

O atlas original extraído do HTML atual está em `assets/sprites/atlas-base.png`. O jogo usa sprites e elementos visuais incorporados ao próprio `index.html`; portanto, esse PNG serve como fonte de referência, não é uma dependência obrigatória.

A versão mais recente dos novos sprites animados em PNG transparente foi produzida separadamente, mas **a integração dessas animações ainda não está concluída no jogo hospedado**. Ao integrar novos arquivos, coloque-os em `assets/sprites/`, use caminhos relativos e confirme que carregam pelo Pages.

## Saves e compatibilidade

Os saves atuais usam `localStorage`. Como o domínio `github.io` é diferente do arquivo HTML aberto localmente, o progresso anterior não migra automaticamente. Antes de trocar para a versão online, use o botão **Exportar save**, guarde o JSON e depois use **Importar save** na página.

Não mude a chave de salvamento nem o formato JSON sem criar uma rotina de migração.
