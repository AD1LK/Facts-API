function displayfactsLoops(factList) {
  let html = "";
  for (let fact of factList) {
    html += `
      <div class="fact-container">
      <h2>${fact}</h2>
      </div>
    `;
  }
  document.querySelector(".js-results").innerHTML = html;
}

function formSubmitted(event) {
  event.preventDefault();
  let factcount = document.querySelector(".js-fact-count").value;
  fetch(`https://api.aakhilv.me/fun/facts?num=${factcount}`)
    .then((data) => data.json())
    .then(displayfactsLoops);
}

document.querySelector(".js-form").addEventListener("submit", formSubmitted);
