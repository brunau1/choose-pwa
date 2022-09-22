# Choose!

Este repositório contém o projeto da aplicação Web `Choose!`, que
consiste em um jogo simples onde o usuário deve escolher uma das opções
que aparecem nos botões. <br>
🟥Café ou 🟦Chá ?

# Como utilizar

Basta abrir o arquivo `index.html` em um navegador web ou mobile compatível.

# Sobre

A aplicação gerencia uma lista de questões que são sorteadas aleatoriamente e exibidas para o usuário como duas opções que ele pode escolher. Ao escolher uma opção, outra é sorteada e exibida nos botões.<br>
No canto superior direito, o botão [ <img style="width: 20px" src="./src/public/assets/language-icon.png"> ] permite alterar a linguagem do site, onde o cotrolador da aplicação altera os textos exibidos de acordo com o idioma atual. Por exemplo, se a linguagem for definida como `"br"`, os textos do app serão traduzidos para o português, se for definida como `"en"`, serão traduzidos para o inglês. <br>
Os textos e as questões para sorteio são organizados em um objeto e filtrados pelo idioma para exibição de acordo com a linguagem do site. Os dados de textos e as questões são armazenados no `Storage` da aplicação.<br>
Também é possível adicionar novas opções que serão sorteadas junto às demais existentes.

# Telas

<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
<div>
<h3>Tela inicial</h3>
<img style="width: 250px" src="./src/public/assets/print1.png">
</div>
<div>
<h3>Adicionar opções</h3>
<img style="width: 250px" src="./src/public/assets/print2.png">
</div>
</div>
