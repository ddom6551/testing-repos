const scriptURL = "https://script.google.com/macros/s/AKfycbzCScHdC9A89s6sbf5en8SCjfspdM9mlnNWMn9_LjqkgJqPGoOgYEk1fomBJsZebKxjVg/exec";
const form = document.getElementById("grievance-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      alert("Your message has been sent 💌");
      form.reset();
    })
    .catch((error) => {
      alert("Something went wrong. Please try again later.");
      console.error("Error:", error);
    });
});
