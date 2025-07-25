import React from 'react';
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