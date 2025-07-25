Mini Projeto: Demonstrando CSS ModulesEste repositório contém o código-fonte de um mini projeto desenvolvido para a disciplina de Desenvolvimento WEB, com o objetivo de demonstrar na prática o funcionamento e os benefícios dos CSS Modules.🎯 Descrição do ObjetivoO objetivo deste projeto é ilustrar como os CSS Modules resolvem o problema de conflito de estilos em CSS, criando escopos locais para as classes. Para isso, criamos dois componentes de botão distintos que, intencionalmente, utilizam o mesmo nome de classe (.button) em seus respectivos arquivos de estilo. A aplicação demonstrará que, graças aos CSS Modules, os estilos de um não interferem no outro.🛠️ Instalação dos Softwares NecessáriosPara replicar este projeto, você precisará ter os seguintes softwares instalados em sua máquina:Node.js: Essencial para rodar o ambiente de desenvolvimento. Ele já vem com o npm (gerenciador de pacotes).Baixe o Node.js aqui (recomenda-se a versão LTS).Editor de Código: Qualquer editor de sua preferência.VS Code é uma excelente recomendação.🚀 Passo-a-Passo para o DesenvolvimentoSiga os passos abaixo para criar o projeto do zero.1. Criar o Projeto ReactAbra seu terminal e execute o comando abaixo para criar um novo projeto React com o create-react-app.c

Acesse a pasta do projeto:cd css-modules-demo

2. Estruturar as PastasDentro da pasta src, crie uma nova pasta chamada components. É aqui que nossos componentes reutilizáveis irão ficar./src
  /components
  App.css
  App.js
  ...

3. Criar o Componente PrimaryButtonDentro de src/components, crie uma pasta PrimaryButton.Dentro de PrimaryButton, crie dois arquivos: PrimaryButton.js e PrimaryButton.module.css.PrimaryButton.module.css (Adicione o CSS do botão primário)/* Note o nome do arquivo com .module.css */
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
}

.button:hover {
  background-color: #0056b3;
}

PrimaryButton.js (Crie o componente React)import React from 'react';
// Importe o CSS Module. O 'styles' é um objeto.
import styles from './PrimaryButton.module.css';

function PrimaryButton({ children }) {
  // Use a classe do objeto 'styles'
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

export default PrimaryButton;

4. Criar o Componente DangerButtonDentro de src/components, crie uma pasta DangerButton.Dentro dela, crie os arquivos: DangerButton.js e DangerButton.module.css.DangerButton.module.css (Adicione o CSS do botão de perigo. Note que usamos a mesma classe .button!).button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
}

.button:hover {
  background-color: #c82333;
}

DangerButton.js (Crie o componente React)import React from 'react';
import styles from './DangerButton.module.css';

function DangerButton({ children }) {
  // A classe .button aqui será mapeada para o CSS do DangerButton
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

export default DangerButton;

5. Usar os Componentes no App PrincipalAgora, vamos editar o arquivo src/App.js para usar os dois botões que criamos.import React from 'react';
import PrimaryButton from './components/PrimaryButton/PrimaryButton';
import DangerButton from './components/DangerButton/DangerButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demonstração de CSS Modules</h1>
        <p>
          Ambos os botões foram estilizados com a classe <code>.button</code>,
          mas seus estilos não entram em conflito.
        </p>
        <div>
          <PrimaryButton>Botão Primário</PrimaryButton>
          <DangerButton>Botão de Perigo</DangerButton>
        </div>
      </header>
    </div>
  );
}

export default App;

6. Rodar a AplicaçãoNo terminal, na raiz do projeto, execute:npm start

Seu navegador abrirá em http://localhost:3000 e você verá os dois botões, cada um com seu estilo correto.🖼️ Imagens para Ilustrar (Resultados)Resultado Final na Tela:(Aqui você deve colocar um print da tela do navegador mostrando os dois botões lado a lado, um azul e um vermelho).Inspeção no Navegador (A Prova):(Aqui você deve colocar um print da ferramenta de desenvolvedor do navegador, inspecionando um dos botões e destacando o nome da classe com hash).Este resultado comprova que os CSS Modules geraram nomes de classe únicos para cada componente, evitando qualquer colisão de estilos.