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

    const number = numberIn.value.trim();
    const areNumbers = /^\d+$/.test(number);

    if (!areNumbers) {
      e.preventDefault();
      window.alert("Please enter a number!");
    } else {
      if (number <= 10) {
        e.preventDefault();
        window.alert("Please enter a number bigger than 10!");
      } else {
        window.alert("Form Submited !!");
      }
    }
  });
});
