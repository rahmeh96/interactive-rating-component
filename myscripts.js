const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  const sub = document.querySelector(".sub-btn");

  sub.addEventListener("click", () => {
    const selectedBtn = document.querySelector(".btn.selected");
    const selectedRate = selectedBtn ? selectedBtn.textContent : null;

    const container = document.getElementById("container");

    if (selectedRate) {
      container.innerHTML = `
      <section style="text-align: center;">
        <img src="./images/illustration-thank-you.svg">
        <article>
          <p style="color:  hsl(25, 97%, 53%); font-weight:100px; background-color: hsl(212, 13%, 20%); padding: 10px 20px; border-radius: 10px;">
          You selected ${selectedRate} out of 5</p>
          <h3>Thank you !</h3>
          <p>
            we appreiciate you taking the time to give a rating.
            If you ever need more support, don't hesistate to get in touch.
          </p>
        </article>
        </section>
      `;
    } else {
      alert("Please select a rating before submitting.");
    }
  });