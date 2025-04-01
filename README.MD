Vou criar um arquivo README detalhado com instruções claras para o Claude 3.7 (usado via Cursor) desenvolver o site do vereador Tadeuzinho, com base na estrutura da imagem fornecida e nas especificações dadas. O README será organizado para facilitar o desenvolvimento em HTML, CSS e JavaScript, incluindo a galeria com efeitos em JS.

---

# README: Desenvolvimento do Site do Vereador Tadeuzinho

## Visão Geral
Este projeto consiste no desenvolvimento de um site para o vereador **Tadeuzinho**, da cidade de **Gravatá**, utilizando **HTML**, **CSS** e **JavaScript**. O site deve seguir a estrutura visual fornecida na imagem de referência, com foco em um design limpo, moderno e funcional. O site deve incluir uma galeria de imagens bem estruturada com efeitos interativos implementados em JavaScript.

## Especificações do Projeto

### Informações do Cliente
- **Nome do Vereador**: Tadeuzinho
- **Cidade**: Gravatá

### Paleta de Cores
- **Cor Principal (Header, etc.)**: Laranja
  - CMYK: C 0%, M 67%, Y 100%, K 0%
  - RGB: R 243, G 117, B 32
  - HEX: #F37520
- **Cor Secundária (Botões, efeitos em cards, etc.)**: Verde-Água
  - CMYK: C 80%, M 10%, Y 30%, K 0%
  - RGB: R 18, G 200, B 200
  - HEX: #12C8C8

### Estrutura do Site
O site deve seguir a estrutura visual da imagem de referência, com as seguintes seções e características:

#### 1. **Header (Cabeçalho)**
- **Logo**: No canto superior esquerdo, exibir de forma coesa o arquivo logo.jpg
- **Navegação**: Links de navegação no canto superior direito, incluindo:
  - "Sobre"
  - "Projetos"
  - "Galeria"
  - "Contato"
- **Estilo**: O fundo do header deve ser na cor Laranja (#F37520), com texto em branco para contraste.

#### 2. **Hero Section (Seção Principal)**
- **Imagem de Fundo**: Uma imagem de Tadeuzinho com um fundo que remeta à cidade de Gravatá (ex.: paisagem local ou bandeira da cidade). A imagem deve ter um leve overlay na cor Laranja (#F37520) com opacidade de 20% para harmonizar com o design.
- **Texto Principal**: 
  - Título: "Juntos Podemos Transformar Gravatá"
  - Subtítulo: "Tadeuzinho - Compromisso com o Futuro"
  - Estilo: Título em branco com destaque em Laranja (#F37520) para a palavra "Gravatá". Subtítulo em branco.
- **Botão**: Um botão "Saiba Mais" com fundo na cor Verde-Água (#12C8C8) e texto branco. Ao passar o mouse, o botão deve ter um efeito de hover (ex.: leve escurecimento ou sombra).

#### 3. **Call-to-Action Cards**
- **Quatro Cards** abaixo da Hero Section, com as seguintes funções:
  - **Card 1**: "Registre-se para Acompanhar" (ícone de pessoa)
  - **Card 2**: "Participe dos Eventos" (ícone de calendário)
  - **Card 3**: "Fique por Dentro" (ícone de megafone)
  - **Card 4**: "Contribua Hoje" (ícone de coração)
- **Estilo**:
  - Fundo dos cards em branco com borda sutil.
  - Títulos dos cards em Laranja (#F37520).
  - Ícones e botões com detalhes em Verde-Água (#12C8C8).
  - Efeito de hover: leve elevação (box-shadow) e mudança de cor do botão para um tom mais escuro de Verde-Água.

#### 4. **Seção Sobre**
- **Título**: "Conheça Tadeuzinho"
- **Texto**: Um parágrafo sobre Tadeuzinho, como: "Tadeuzinho é um vereador dedicado que acredita no potencial de Gravatá para se tornar uma cidade mais justa e próspera. Com foco em projetos sociais e infraestrutura, ele trabalha para ouvir a população e transformar ideias em ações concretas."
- **Imagem**: Uma foto de Tadeuzinho à esquerda, com o texto à direita.
- **Botão**: "Saiba Mais" com fundo Verde-Água (#12C8C8).
- **Estilo**: Fundo da seção em branco, com detalhes (título e botão) nas cores especificadas.

#### 5. **Seção de Projetos**
- **Título**: "Projetos para Gravatá"
- **Subtítulo**: "Compromisso com o Desenvolvimento"
- **Imagem de Fundo**: Uma imagem do prédio da Câmara Municipal de Gravatá com overlay em Laranja (#F37520) com opacidade de 20%.
- **Lista de Projetos**:
  - "Infraestrutura e Mobilidade"
  - "Educação e Cultura"
  - "Saúde e Bem-Estar"
  - "Sustentabilidade"
- **Estilo**: Títulos em Laranja (#F37520), texto em branco, botão "Ver Todos os Projetos" em Verde-Água (#12C8C8).

#### 6. **Galeria**
- **Título**: "Galeria de Momentos"
- **Estrutura**:
  - Uma grade de imagens (3 colunas em desktop, 1 coluna em mobile) com fotos de Tadeuzinho em eventos, reuniões e projetos.
  - **Efeitos em JavaScript**:
    - Ao passar o mouse sobre uma imagem, ela deve ter um efeito de zoom (scale 1.1) e um overlay em Verde-Água (#12C8C8) com opacidade de 30%.
    - Ao clicar, a imagem deve abrir em um modal/lightbox com navegação (setas para próxima/anterior).
- **Estilo**: Título em Laranja (#F37520), bordas das imagens com sombra sutil.

#### 7. **Seção de Missão e Visão**
- **Título**: "Nossa Missão e Visão"
- **Texto Principal**: "Nossa missão é trabalhar por uma Gravatá mais justa, com oportunidades para todos. Acreditamos em um futuro sustentável e inclusivo."
- **Três Cards**:
  - **Card 1**: "Infraestrutura" - "Melhorar a mobilidade e a qualidade de vida."
  - **Card 2**: "Educação" - "Investir em escolas e cultura para o futuro."
  - **Card 3**: "Sustentabilidade" - "Proteger o meio ambiente e promover o desenvolvimento sustentável."
- **Estilo**:
  - Título em Laranja (#F37520).
  - Ícones e detalhes dos cards em Verde-Água (#12C8C8).
  - Fundo da seção em branco.

#### 8. **Footer (Rodapé)**
- **Conteúdo**:
  - Logo (logo.jpg).
  - Links de navegação: "Sobre", "Projetos", "Galeria", "Contato".
  - Ícones de redes sociais (ex.: Instagram, Facebook, WhatsApp) com links.
- **Estilo**: Fundo em Laranja (#F37520), texto e ícones em branco.

### Requisitos Técnicos
- **HTML**: Estruture o site de forma semântica, usando tags como `<header>`, `<nav>`, `<section>`, `<footer>`, etc.
- **CSS**:
  - Use Flexbox ou Grid para layouts responsivos.
  - Garanta que o site seja responsivo para dispositivos móveis (mobile-first approach).
  - Aplique as cores especificadas (Laranja #F37520 e Verde-Água #12C8C8) conforme indicado.
- **JavaScript**:
  - Implemente a galeria com efeitos de hover (zoom e overlay) e um modal/lightbox para visualização das imagens.
  - Adicione interatividade aos botões (ex.: hover com transição suave).
- **Imagens**:
  - Use imagens placeholder para a galeria e seções (ex.: de bancos de imagens como Unsplash, com temas relacionados a Gravatá e política).
  - Otimize as imagens para carregamento rápido.

### Entregáveis
1. Arquivo `index.html` com a estrutura completa do site.
2. Arquivo `styles.css` com todos os estilos.
3. Arquivo `script.js` com a lógica da galeria e interatividades.
4. Pasta `assets/` com imagens e outros recursos (ex.: ícones).

### Instruções para o Claude 3.7
- Siga rigorosamente a estrutura e o design descritos acima, baseando-se na imagem de referência.
- Use as cores especificadas (Laranja #F37520 e Verde-Água #12C8C8) para manter a identidade visual.
- Priorize um código limpo e bem comentado.
- Teste a responsividade em diferentes tamanhos de tela (desktop, tablet, mobile).
- Implemente a galeria com os efeitos em JavaScript conforme descrito.

---

## Exemplo de Estrutura de Arquivos
```
tadeuzinho-site/
│
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── images/
    │   ├── hero-bg.jpg
    │   ├── tadeuzinho.jpg
    │   ├── logo.jpg
    │   ├── gallery/
    │   │   ├── image1.jpg
    │   │   ├── image2.jpg
    │   │   └── ...
    └── icons/
        ├── person.svg
        ├── calendar.svg
        ├── megaphone.svg
        ├── heart.svg
        └── ...
```

---

## Observações Finais
- Certifique-se de que o site seja visualmente atraente e funcional, com foco na experiência do usuário.
- Caso precise de mais detalhes sobre Gravatá ou Tadeuzinho, pesquise informações genéricas sobre a cidade e o papel de um vereador para preencher o conteúdo.
- Entregue o projeto pronto para visualização em um navegador, com todos os arquivos devidamente organizados.

--- 

Esse README fornece uma base sólida para o Claude 3.7 desenvolver o site via Cursor, com instruções claras e detalhadas. Se precisar de ajustes ou mais detalhes, é só avisar!