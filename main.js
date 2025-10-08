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
            <div class="is-flex is-justify-content-space-between is-align-items-center">
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
          </div>
        </div>
      </div>
    `;

    contentJs.insertAdjacentHTML("beforeend", newCardHTML);
  });
};

renderCard(questionMassJs);

const falseStatus = questionMassJs.filter((q) => q.status == false);
const OffCheck = document.getElementById("OffCheck");
function offBtn() {
  contentJs.innerHTML = "";
  const checkOffBox = OffCheck.checked ? falseStatus : questionMassJs;
  renderCard(checkOffBox);
}

const trueStatus = questionMassJs.filter((q) => q.status == true);

const onCheck = document.getElementById("OnCheck");
function onBtn() {
  contentJs.innerHTML = "";
  const checkOnBox = onCheck.checked ? trueStatus : questionMassJs;
  renderCard(checkOnBox);
}

const writeText = document.getElementById("writeText");

function addNew() {
  const newText = writeText.value;

  const newQuestion = {
    question: newText,
  };
  questionMassJs.unshift(newQuestion);
  renderCard(questionMassJs);
}
