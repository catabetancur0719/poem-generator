function displayPoem(response) {
  new Typewriter("#poem-output", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {


  const instructionInput = document.querySelector("#user-instructions");
  const apiKey = "fb3o96aeef26e064f124eb8cta459256";
  const prompt = `user instructions: generate latin poems ${instructionInput.value}`;
  const context =
    "Eres un colombiano experto en dichos, por favor crea un dicho en español, que sea maximo de 5 renglones y con la palabra que te da el usuario";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
