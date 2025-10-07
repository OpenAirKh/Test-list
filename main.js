function renderMass(questions) {
  questions.forEach(function (q, index) {
    const indexNum = index + 1;
    const iconTrue = q.status == true ? "fas fa-check-square" : "fas fa-ban";
    const textTrue = q.status == true ? "Понятно" : "Не понятно";
    const iconColor = q.status == true ? "has-text-success" : "has-text-danger";

    const newCardHTML = `
      <div class="card mt-4">
        <div class="card-content">
          <div class="content">
            <p class="is-size-5 has-text-weight-semibold">
              ${indexNum}. ${q.question}
                  <span class="icon has-text-success">
          <i class="fas ${iconTrue} ${iconColor}"></i>
          <p>${textTrue}</p>
          </span>
          
            </p>
          </div>
        </div>
      </div>
    `;

    contentJs.insertAdjacentHTML("beforeend", newCardHTML);
  });
}

renderMass(questionMassJs);

