# PRD - PWA Mini Entulho Tambores

## 1. Visao Geral

O PWA da Mini Entulho Tambores sera o principal canal digital da empresa para apresentar o servico, explicar a locacao de tambores de 200 litros e gerar pedidos de orcamento pelo WhatsApp.

A direcao visual atual do produto e um site escuro, moderno e impactante, com fundo preto em toda a experiencia, destaque forte para a logomarca e uso do laranja como cor principal de acao.

Referencia de estrutura comercial:

- Site CWB Entulhos como inspiracao de fluxo, simulador e organizacao das secoes.
- A identidade visual, textos, logo e cores devem ser proprios da Mini Entulho Tambores.

## 2. Objetivo do Produto

Objetivo principal:

- Converter visitantes em pedidos de orcamento pelo WhatsApp.

Objetivos secundarios:

- Explicar rapidamente o que a empresa faz.
- Mostrar que os tambores substituem a cacamba em pequenas reformas.
- Destacar a solucao para apartamentos, condominios, casas, lojas e salas comerciais.
- Usar videos para demonstrar o servico de forma visual.
- Funcionar como PWA instalavel em celular.

## 3. Marca

Nome:

- Mini Entulho Tambores

Logo oficial:

- `imagens/logo-transparente.png`

Diretrizes da logo:

- Usar a logo transparente como marca principal.
- Exibir a logo em destaque no topo do site, em uma area propria de palco visual.
- Nao repetir texto ao lado da logo no cabecalho, pois a logo ja contem o nome.
- Usar sombra/brilho laranja para destacar a logo no fundo preto.

## 4. Identidade Visual

Direcao:

- Site todo com fundo preto.
- Aparencia moderna, forte e direta.
- Sensacao visual de servico robusto, limpo e profissional.

Paleta:

- Preto principal: `#070707` / `#121212`.
- Preto secundario: `#1f211f`.
- Laranja principal: `#f37016`.
- Laranja escuro: `#c9550e`.
- Branco: `#ffffff`.
- Cinzas para apoio, linhas e textos secundarios.

Regras visuais:

- O laranja deve ser usado para botoes, chamadas, selos, bordas de destaque e numeros.
- O preto deve dominar o fundo de todas as secoes.
- Branco deve ser usado para titulos e textos principais.
- Cinza claro deve ser usado para textos secundarios.
- Evitar verde ou outras cores fora da paleta da logo.
- Cards devem ter fundo preto/cinza escuro, borda sutil e contraste alto.

## 5. Publico-Alvo

Publico principal:

- Moradores fazendo pequenas reformas.
- Pessoas reformando apartamentos.
- Sindicos e administradores de condominio.
- Lojas e salas comerciais em manutencao.
- Pedreiros, empreiteiros e profissionais de reforma.

Regiao inicial:

- Fazenda Rio Grande - PR.
- Possivel atendimento em cidades proximas conforme disponibilidade.

## 6. Proposta de Valor

Texto base:

"Locacao de tambores de 200 litros para retirada de entulho de pequenas obras e reformas. Voce recebe os tambores, preenche com os residuos permitidos e a Mini Entulho Tambores faz a retirada e destinacao correta."

Mensagens principais:

- Sem cacamba grande parada na rua.
- Ideal para pequenos volumes.
- Cabe em locais apertados.
- Mais organizado para condominios.
- Pedido rapido pelo WhatsApp.
- Visualmente facil de entender com fotos e videos.

## 7. Estrutura da Pagina

### 7.1 Cabecalho

Elementos:

- Logo transparente no canto esquerdo.
- Menu: Planos, Como funciona, Videos, Materiais, FAQ.
- Botao: Falar Agora.

Layout:

- Fundo preto translucidado.
- Cabecalho fixo no topo.
- Borda inferior laranja sutil.
- Em mobile, esconder menu e manter logo + botao.

### 7.2 Palco da Logo

Objetivo:

- Destacar fortemente a logomarca logo no inicio.

Elementos:

- Logo `imagens/logo-transparente.png` centralizada.
- Fundo preto.
- Brilho radial laranja atras da logo.
- Sombra/drop-shadow para dar profundidade.

Comportamento:

- A logo deve ser grande no desktop.
- Em mobile, deve reduzir proporcionalmente sem cortar.

### 7.3 Hero Principal

Objetivo:

- Explicar o servico e levar o usuario para o simulador de orcamento.

Conteudo:

- Selo: Atendimento em Fazenda Rio Grande e regiao.
- Titulo: Locacao de Tambores para Entulho.
- Texto explicativo curto.
- Lista de 3 beneficios.
- Botoes: Simular Orcamento e Falar Agora.

Visual:

- Fundo preto com imagem escurecida de caçamba/tambores.
- Texto branco.
- Destaques em laranja.

Imagem principal:

- `assets/entulho-tambores-padrao-logo.png`

### 7.4 Simulador de Orcamento

Objetivo:

- Fazer o visitante escolher a quantidade de tambores e enviar a solicitacao pelo WhatsApp.

Layout:

- Card escuro com borda laranja.
- Posicionado ao lado direito do hero no desktop.
- Posicionado abaixo do texto no mobile.

Elementos:

- Abas visuais: Residencial e Comercial.
- Titulo: Residencial.
- Descricao curta.
- Botoes rapidos: 1x, 2x, 3x, 4x, 5x.
- Select com quantidade.
- Resumo automatico.
- Prazo.
- Total estimado.
- Botao: Fazer Pedido.

Comportamento:

- Ao clicar na quantidade, atualizar:
  - quantidade;
  - capacidade aproximada;
  - valor estimado;
  - mensagem do WhatsApp.

Observacao:

- Os valores exibidos sao referencia e devem ser confirmados antes da publicacao oficial.

### 7.5 Secao Visual

Titulo:

"Onde a cacamba atrapalha, o tambor resolve."

Objetivo:

- Explicar visualmente a diferenca entre cacamba e tambor.

Elementos:

- Imagem `assets/entulho-tambores-padrao-logo.png`.
- Texto curto explicando pequenos volumes, condominios e locais com pouco espaco.

### 7.6 Secao de Videos

Titulo:

"Videos da operacao"

Objetivo:

- Mostrar o servico de forma pratica e gerar confianca.

Quantidade:

- 2 videos do YouTube.

Video 1:

- Tema: Entrega dos tambores.
- Conteudo esperado: chegada dos tambores, posicionamento no local, exemplo de obra.

Video 2:

- Tema: Retirada e descarte.
- Conteudo esperado: retirada dos tambores cheios, organizacao da coleta, destinacao correta.

Layout:

- Dois cards lado a lado no desktop.
- Um abaixo do outro no mobile.
- Iframes em proporcao 16:9.
- Borda laranja nos videos.
- Fundo preto/cinza escuro.

Estado atual:

- Usar links temporarios ate receber os links reais.

### 7.7 Beneficios

Cards:

- Nao precisa de vaga.
- Descarte responsavel.
- Entrega pratica.

Visual:

- Fundo preto.
- Cards escuros com bordas sutis.
- Numeros em circulos laranja.

### 7.8 CTA Intermediario

Titulo:

"Solicite, receba e pronto."

Objetivo:

- Reforcar a chamada para o simulador.

Acao:

- Botao: Simular preco.

### 7.9 Planos

Cards:

1. Residencial: 1 a 2 tambores.
2. Mais popular: 3 a 5 tambores.
3. Obra recorrente: 6+ tambores.

Visual:

- Cards escuros.
- Card mais popular em laranja.
- Botoes de pedido em cada card.

### 7.10 Como Funciona

Fluxo em 5 passos:

1. Solicite pelo WhatsApp.
2. Receba os tambores.
3. Preencha com entulho permitido.
4. Agende retirada ou troca.
5. Descarte correto.

Visual:

- Fundo preto.
- Cards escuros.
- Numeracao laranja.

### 7.11 Materiais Aceitos

Pode descartar:

- Concreto, tijolo, piso e azulejo.
- Argamassa, gesso e revestimentos.
- Madeira, papelao, plastico e metais leves.
- Residuos comuns de pequenas reformas.

Nao coletamos:

- Lixo domestico, organico ou hospitalar.
- Produtos quimicos, toxicos ou inflamaveis.
- Tinta liquida, oleo, solvente e contaminantes.
- Materiais especiais sem consulta previa.

### 7.12 CTA Regional

Titulo:

"Base em Fazenda Rio Grande."

Objetivo:

- Confirmar regiao de atendimento.

Acao:

- Botao para verificar atendimento pelo WhatsApp.

### 7.13 FAQ

Perguntas:

- O servico inclui mao de obra para carregar?
- Quanto tempo posso ficar com o tambor?
- Serve para apartamento?
- O que acontece se encher antes do prazo?

Visual:

- Fundo preto.
- Cards escuros.
- Texto branco/cinza.

## 8. Requisitos Funcionais

- Usuario deve conseguir abrir o site no desktop e no mobile.
- Usuario deve conseguir ver a logo em destaque.
- Usuario deve conseguir escolher quantidade de tambores.
- Simulador deve atualizar resumo automaticamente.
- Botao de WhatsApp deve gerar mensagem com:
  - quantidade;
  - capacidade aproximada;
  - valor estimado;
  - cidade.
- Usuario deve conseguir assistir ou abrir os videos do YouTube.
- Todos os CTAs principais devem levar para WhatsApp ou simulador.

## 9. Requisitos PWA

Arquivos:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`

Assets essenciais:

- `imagens/logo-transparente.png`
- `assets/entulho-tambores-padrao-logo.png`

Manifest:

- Nome: Mini Entulho Tambores.
- Short name: Mini Entulho.
- Theme color: preto.
- Background color: preto ou cinza muito escuro.
- Icone: logo transparente.

Service worker:

- Cachear arquivos principais.
- Cachear logo e imagem principal.
- Atualizar versao do cache quando houver mudancas visuais.

## 10. Requisitos Nao Funcionais

- Site rapido e leve.
- Sem dependencia obrigatoria de framework.
- HTML, CSS e JavaScript simples.
- Layout responsivo.
- Alto contraste.
- Textos curtos e diretos.
- Sem copiar textos da CWB Entulhos.
- Fundo preto predominante em todas as secoes.

## 11. Conteudos Pendentes

Antes da publicacao oficial, definir:

- Numero real do WhatsApp.
- Links reais dos 2 videos do YouTube.
- Valores reais por quantidade de tambores.
- Prazo padrao de locacao.
- Bairros/cidades atendidos.
- Politica de retirada, troca e atraso.
- Se havera carregamento com mao de obra.
- Local de descarte licenciado.
- Fotos e videos reais da operacao.

## 12. Indicadores de Sucesso

Metrica principal:

- Cliques no WhatsApp.

Metricas secundarias:

- Cliques no simulador.
- Quantidade de pedidos por semana.
- Cliques nos videos.
- Tempo de permanencia na pagina.
- Conversao de contato em locacao.

## 13. Proximas Melhorias

- Substituir videos temporarios por videos reais da empresa.
- Trocar imagem gerada por foto real da operacao.
- Adicionar depoimentos de clientes.
- Adicionar mapa/regiao de atendimento.
- Adicionar Google Analytics ou Pixel.
- Criar pagina de obrigado ou evento de conversao.
- Criar painel simples para editar precos.
- Publicar em dominio proprio.
