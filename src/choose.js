let $leftButton, $rightButton;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSplitProp = (lang) => (lang === "en" ? "or" : "ou");

const updateOptions = () => {
  const currLanguage = localStorage.getItem("language");

  const {questions} = JSON.parse(localStorage.getItem("app-content"));
  const currQuestions = questions[currLanguage];

  const randomPos = randomInt(0, currQuestions.length - 1);

  const [leftText, rightText] = currQuestions[randomPos].split(
    getSplitProp(currLanguage)
  );

  $leftButton.innerText = leftText;
  $rightButton.innerText = rightText;
};

const changeLanguage = () => {
  const currLanguage = localStorage.getItem("language");

  const language = currLanguage === "en" ? "br" : "en";

  localStorage.setItem("language", language);

  setAppTextContent();
  updateOptions();
};

const setAppTextContent = () => {
  const currLanguage = localStorage.getItem("language");
  const {texts} = JSON.parse(localStorage.getItem("app-content"));

  document.querySelector("#add-question-span").innerText =
    texts[currLanguage].addQuestionSpan;

  document.querySelector("#add-question-button").innerText =
    texts[currLanguage].addButton;
};

onload = () => {
  localStorage.setItem("language", "en");

  document.querySelector("#change-language").onclick = changeLanguage;

  $leftButton = document.querySelector("#choose-left");
  $rightButton = document.querySelector("#choose-right");

  $leftButton.onclick = updateOptions;

  $rightButton.onclick = updateOptions;

  setAppTextContent();
  updateOptions();
};
