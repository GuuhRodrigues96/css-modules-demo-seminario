# Autores: Gustavo Rodrigues, Jefferson Eduardo, Victor Martins, 

Este tutorial é um guia passo a passo para criar um mini projeto em React que demonstra o principal benefício dos CSS Modules: resolver conflitos de estilo.

O resumo é o seguinte:

Objetivo: Provar que os CSS Modules criam um "escopo local" para os estilos, evitando que o CSS de um componente afete o outro.

Método: O tutorial ensina a criar dois componentes de botão (PrimaryButton e DangerButton). Intencionalmente, ambos os botões são estilizados com a mesma classe (.button) em seus respectivos arquivos de estilo (.module.css).

Resultado: Ao rodar a aplicação, os dois botões aparecem com seus estilos corretos e distintos (um azul e um vermelho). Isso acontece porque os CSS Modules renomeiam as classes automaticamente nos bastidores, garantindo que elas sejam únicas e não entrem em conflito, mesmo que o desenvolvedor tenha usado o mesmo nome.

Em suma, é um exercício prático para visualizar como os CSS Modules garantem que os estilos de um componente fiquem "trancados" dentro dele.

6. Rodar a AplicaçãoNo terminal, na raiz do projeto, execute:npm start

Seu navegador abrirá em http://localhost:3000 e você verá os dois botões, cada um com seu estilo correto.🖼️ Imagens para Ilustrar (Resultados)Resultado Final na Tela:(Aqui você deve colocar um print da tela do navegador mostrando os dois botões lado a lado, um azul e um vermelho).Inspeção no Navegador (A Prova):(Aqui você deve colocar um print da ferramenta de desenvolvedor do navegador, inspecionando um dos botões e destacando o nome da classe com hash).Este resultado comprova que os CSS Modules geraram nomes de classe únicos para cada componente, evitando qualquer colisão de estilos.
