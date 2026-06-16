const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const ageValue = document.getElementById("age").value;
  const nameValue = document.getElementById("name").value;

  if (ageValue === "" || nameValue === "") {
    alert("Please enter valid details");
    return;
  }

  const age = Number(ageValue);
  const name = nameValue.trim();

  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  votingPromise
    .then(message => alert(message))
    .catch(message => alert(message));
});