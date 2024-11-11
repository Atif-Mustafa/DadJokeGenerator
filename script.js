let sj = document.getElementById("status-joke");
let btn = document.getElementById("button");


const apiKey = "9HcRGm7QSDkCTkHvwA+N3A==VICimFufqQYBADUt";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    sj.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btn.disabled = false;
    btn.innerText = "Tell me a joke";

    sj.innerText = data[0].joke;
  } catch (error) {
    sj.innerText = "An error happened, try again later";
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    console.log(error);
  }
}

btn.addEventListener("click", getJoke);

