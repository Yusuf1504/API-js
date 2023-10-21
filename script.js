let cardSection = document.getElementById("cards");

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();

  // Counter to keep track of the number of cards created
  let cardCount = 0;

  data.forEach((item) => {
    if (cardCount >= 30) {
      return; // Stop creating cards when 30 cards have been created
    }

    let card = document.createElement("div");
    card.classList.add("card", "m-1", "text-center", "col-lg-3", "p-3");
    cardSection.appendChild(card);

    let cardTitle = document.createElement("div");
    let heading = document.createElement("h3");
    cardTitle.appendChild(heading);
    heading.classList.add("card-title", "text-danger");
    heading.innerText = item.name;
    card.appendChild(cardTitle);

    let email = document.createElement("div");
    email.classList.add("card-text", "text-info");
    email.innerText = item.email;
    card.appendChild(email);

    let body = document.createElement("div");
    body.classList.add("card-text", "text-success");
    body.innerText = item.body;
    card.appendChild(body);

    cardCount++; // Increment the card count
  });
}

getData();
