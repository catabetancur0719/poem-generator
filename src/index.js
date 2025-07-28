function displayPoem(response) {
  const poemOutput = document.querySelector("#poem-output");
  poemOutput.innerHTML = ""; // limpia lo anterior

  const typewriter = new Typewriter(poemOutput, {
    autoStart: true,
    delay: 100,
    cursor: "",
  });

  typewriter.typeString(response.data.answer).start();
  console.log(response.data.answer);
}

function generatePoem(event) {
  event.preventDefault();


  const instructionInput = document.querySelector("#user-instructions");
  const apiKey = "fb3o96aeef26e064f124eb8cta459256";
  const prompt = `user instructions: generate latin poems ${instructionInput.value}`;
  const context =
    "You are a Colombian expert in creating popular poems and sayings. Write a short saying or poem in Spanish that has a wise, funny, or thoughtful tone. It must contain the word the user gives you, be a maximum of 5 lines long.";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
