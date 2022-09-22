let $leftButton, $rightButton;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSplitProp = (lang) => (lang === "en" ? "or" : "ou");

const updateOptions = () => {
  const currLanguage = localStorage.getItem("language");

  const { questions } = JSON.parse(localStorage.getItem("app-content"));
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
  const { texts } = JSON.parse(localStorage.getItem("app-content"));

  document.querySelector("#add-question-span").innerText =
    texts[currLanguage].addQuestionSpan;

  document.querySelector("#add-question-button").innerText =
    texts[currLanguage].addButton;

  document.querySelector("#add-options-desc").innerText =
    texts[currLanguage].addOptionsDesc;
};

const showAddOptionsArea = () => {
  document.querySelector("#choose-left").style.display = "none";
  document.querySelector("#choose-right").style.display = "none";
  document.querySelector("#add-question-area").style.display = "none";
  document.querySelector("#add-options-form-area").style.display = "flex";
};

const closeAddOptionsArea = () => {
  document.querySelector("#choose-left").style.display = "block";
  document.querySelector("#choose-right").style.display = "block";
  document.querySelector("#add-question-area").style.display = "flex";
  document.querySelector("#add-options-form-area").style.display = "none";
};

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

onload = () => {
  localStorage.setItem("language", "en");

  document.querySelector("#change-language").onclick = changeLanguage;
  document.querySelector("#confirm-button").onclick = confirmAddOptions;
  document.querySelector("#cancel-button").onclick = closeAddOptionsArea;
  document.querySelector("#add-question-button").onclick = showAddOptionsArea;

  $leftButton = document.querySelector("#choose-left");
  $rightButton = document.querySelector("#choose-right");

  $leftButton.onclick = updateOptions;

  $rightButton.onclick = updateOptions;

  setAppTextContent();
  updateOptions();
};
