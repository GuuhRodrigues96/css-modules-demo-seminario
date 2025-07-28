
# Demonstração de CSS Modules em React

Um mini projeto prático que demonstra o principal benefício dos **CSS Modules**: o isolamento de estilos para evitar conflitos em aplicações React.

**Autores:** Gustavo Rodrigues, Jefferson Eduardo, Victor Martins, Mateus Martins Peres.


-----

## Sobre o Projeto

O objetivo deste repositório é provar visualmente como os CSS Modules criam um **escopo local** para os estilos. Isso garante que as classes CSS de um componente não afetem acidentalmente os estilos de outro, mesmo que os nomes das classes sejam idênticos.

Para isso, o projeto contém dois componentes de botão:

  * `PrimaryButton` (Botão Primário - Azul)
  * `DangerButton` (Botão de Perigo - Vermelho)

Ambos foram intencionalmente estilizados com a mesma classe (`.button`) em seus respectivos arquivos `.module.css`.

### O Resultado

Ao executar a aplicação, os dois botões aparecem com seus estilos corretos e distintos, sem nenhum conflito visual. Isso ocorre porque os CSS Modules geram nomes de classe únicos nos bastidores (ex: `PrimaryButton_button__a1b2c`), provando o isolamento dos estilos.

## Tecnologias Utilizadas

  * **React**
  * **Create React App**
  * **CSS Modules**

## Como Executar o Projeto

Siga os passos abaixo para rodar a demonstração em sua máquina.

**Pré-requisitos:**

  * [Node.js](https://nodejs.org/) (versão \>= 14)
  * npm ou Yarn

<!-- end list -->

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/GuuhRodrigues96/css-modules-demo-seminario.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd css-modules-demo-seminario/css-modules-demo
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie a aplicação:**

    ```bash
    npm start
    ```

5.  **Visualize no navegador:**
    Acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para ver os botões renderizados.

-----

## 📄 Licença

Este projeto está distribuído sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.
