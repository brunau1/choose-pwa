let $leftButton, $rightButton;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSplitProp = (lang) => (lang === "en" ? "or" : "ou");

const updateOptions = () => {
  const currLanguage = localStorage.getItem("language");

  const questions = JSON.parse(localStorage.getItem("questions"));
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
  const currAppContent = JSON.parse(localStorage.getItem("app-content"));

  document.querySelector("#add-question-span").innerText =
    currAppContent[currLanguage].addQuestionSpan;

  document.querySelector("#add-question-button").innerText =
    currAppContent[currLanguage].addButton;
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
