const clearHtml = () => {
  contentJs.innerHTML = "";
};

const renderCard = function renderMass(questions) {
  questions.forEach(function (q, index) {
    const indexNum = index + 1;
    const iconTrue = q.status == true ? "fas fa-check-square" : "fas fa-ban";
    const textTrue = q.status == true ? "Понятно" : "Не понятно";
    const iconColor = q.status == true ? "has-text-success" : "has-text-danger";

    const newCardHTML = `
    <div class="card mt-4">
     <div class="card-content">
       <div class="content">
         <div
        class="is-flex is-justify-content-space-between is-align-items-center">
        <p class="is-size-5 has-text-weight-semibold mb-0">
          ${indexNum}. ${q.question}
        </p>
        <span class="tag is-medium ${iconColor}">
          <span class="icon is-small mr-1">
            <i class="fas ${iconTrue}"></i>
          </span>
          ${textTrue}
        </span>
      </div>
         <div id="lol" class=" mt-3">
        <button id="second" class="btnchange  button is-link is-light" data-index = "${index}" >Поменять статус</button>
        
        </div>
      </div>
     </div>
  </div>
   `;

    contentJs.insertAdjacentHTML("beforeend", newCardHTML);
  });
};

renderCard(questionMassJs);

contentJs.addEventListener("click", function (event) {
  const clickBtn = event.target.closest(".btnchange");

  event.stopPropagation();
  if (!clickBtn) {
    return;
  }
  console.log("clickBtn");
  const btnIndex = clickBtn.dataset.index;
  questionMassJs[btnIndex].status = questionMassJs[btnIndex].status
    ? false
    : true;

  clearHtml();
  renderCard(questionMassJs);
});

// ======================1111111111111111111==========================
const offCheck = document.getElementById("OffCheck");
const onCheck = document.getElementById("OnCheck");
function offBtn() {
  const falseStatus = questionMassJs.filter((q) => q.status == false);

  if (offCheck.checked) {
    onCheck.checked = false;
  }
  clearHtml();
  const checkOffBox = OffCheck.checked ? falseStatus : questionMassJs;
  renderCard(checkOffBox);
}

function onBtn() {
  if (onCheck.checked) {
    offCheck.checked = false;
  }

  const trueStatus = questionMassJs.filter((q) => q.status == true);
  clearHtml();
  const checkOnBox = onCheck.checked ? trueStatus : questionMassJs;
  renderCard(checkOnBox);
}

const writeText = document.getElementById("writeText");

function addNew() {
  const newText = writeText.value;

  const newQuestion = {
    question: newText,
    status: false,
  };
  clearHtml();
  questionMassJs.unshift(newQuestion);
  renderCard(questionMassJs);
}
