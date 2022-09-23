// gera um numero aleatorio entre um valor minimo e maximo
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// retorna o tipo de separador das frases de acordo com o idioma atual
const getSplitProp = (lang) => (lang === "en" ? "or" : "ou");

// atualiza as opções de escolha disponiveis para o usuário
const updateOptions = () => {
  const currLanguage = localStorage.getItem("language");

  const { questions } = JSON.parse(localStorage.getItem("app-content"));
  const currQuestions = questions[currLanguage];

  const randomPos = randomInt(0, currQuestions.length - 1);

  const [leftText, rightText] = currQuestions[randomPos].split(
    getSplitProp(currLanguage)
  );

  document.querySelector("#choose-left").innerText = leftText;
  document.querySelector("#choose-right").innerText = rightText;
};

// função chamada ao alterar a linguagem do app
// caso a linguagem atual seja "br", define como "en"
// e vice versa
const changeLanguage = () => {
  const currLanguage = localStorage.getItem("language");

  const language = currLanguage === "en" ? "br" : "en";

  localStorage.setItem("language", language);

  setAppTextContent();
  updateOptions();
};

// atualiza os textos da aplicação de acordo com o idioma atual
const setAppTextContent = () => {
  const currLanguage = localStorage.getItem("language");
  const { texts } = JSON.parse(localStorage.getItem("app-content"));

  document.querySelector("#add-question-span").innerText =
    texts[currLanguage].addQuestionSpan;

  document.querySelector("#add-question-button").innerText =
    texts[currLanguage].addButton;

  document.querySelector("#add-options-desc").innerText =
    texts[currLanguage].addOptionsDesc;
};
// abre a tela de adicionar novas opções
// fecha a tela principal
const showAddOptionsArea = () => {
  document.querySelector("#choose-left").style.display = "none";
  document.querySelector("#choose-right").style.display = "none";
  document.querySelector("#add-question-area").style.display = "none";
  document.querySelector("#add-options-form-area").style.display = "flex";
};

// fecha a tela de adicionar novas opções
// abre a tela principal
const closeAddOptionsArea = () => {
  document.querySelector("#choose-left").style.display = "block";
  document.querySelector("#choose-right").style.display = "block";
  document.querySelector("#add-question-area").style.display = "flex";
  document.querySelector("#add-options-form-area").style.display = "none";
};

// função chamada ao clicar no botão de "confirma"
// ao adicionar novas opções de escolha à lista
const confirmAddOptions = () => {
  const currLanguage = localStorage.getItem("language");
  const { texts } = JSON.parse(localStorage.getItem("app-content"));

  const { questions } = JSON.parse(localStorage.getItem("app-content"));

  const valueOption1 = document.querySelector("#option-1-input").value;
  const valueOption2 = document.querySelector("#option-2-input").value;

  if (!valueOption1 || !valueOption2) {
    alert(texts[currLanguage].fillOptionsAlert);
    return;
  }

  questions[currLanguage].push(
    `${valueOption1} ${getSplitProp(currLanguage)} ${valueOption2}`
  );

  localStorage.setItem("app-content", JSON.stringify({ texts, questions }));

  closeAddOptionsArea();

  document.querySelector("#option-1-input").value = "";
  document.querySelector("#option-2-input").value = "";

  updateOptions();
};

// inicializa os recursos da aplicação
// adiciona as funções dos botões e demais elementos da aplicação
onload = () => {
  localStorage.setItem("language", "en");

  document.querySelector("#choose-left").onclick = updateOptions;
  document.querySelector("#choose-right").onclick = updateOptions;
  document.querySelector("#cancel-button").onclick = closeAddOptionsArea;
  document.querySelector("#confirm-button").onclick = confirmAddOptions;
  document.querySelector("#change-language").onclick = changeLanguage;
  document.querySelector("#add-question-button").onclick = showAddOptionsArea;

  setAppTextContent();
  updateOptions();
};
