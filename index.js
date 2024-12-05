document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const numberIn = document.getElementById("number");
  const submitBtn = document.querySelector("button");

  form.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const number = numberIn.value.trim();
    const areNumbers = /^\d+$/.test(number);

    console.log(number);
    if (!areNumbers) {
      window.alert("Please enter a number!");
    } else {
      if (number <= 10) {
        window.alert("Please enter a number bigger than 10!");
      } else {
        window.alert("Form Submited !!");
      }
    }
  });
});
