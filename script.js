//your JS code here. If required.
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
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