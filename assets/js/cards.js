/*
const form = document.getElementById("my-form");
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");
const cardContainer = document.getElementById("card-container");
*/
function displayCards(eventoTitlo, dasVenue, leExcerpto, localDate, localTime, eventImageUrl, weatherIconUrl, weatherTempo, weatherDescriptiono) {
  // create new card element
  const eventTitle = eventoTitlo;
  const eventVenue = dasVenue;
  const eventExcerpt = leExcerpto;
  const eventDate = localDate;
const eventTime = localTime;
const eventImg = eventImageUrl;
const weatherIcon = weatherIconUrl;
const weatherTemp = weatherTempo;
const weatherDescription = weatherDescriptiono;



  const card = document.createElement("div");
  card.classList.add("column", "is-4", "card");

  // create card image element
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const figure = document.createElement("figure");
  figure.classList.add("image", "is-4by3");
  const img = document.createElement("img");
  img.setAttribute("src", eventImg);
  img.setAttribute("alt", eventTitle);
  figure.appendChild(img);
  cardImage.appendChild(figure);

  // create card content element
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // create media element
  const media = document.createElement("div");
  media.classList.add("media");

  // create media left element
 const mediaLeft = document.createElement("div");
  mediaLeft.classList.add("media-left");
  const figure2 = document.createElement("figure");
  figure2.classList.add("image", "is-48x48");
  const img2 = document.createElement("img");
  img2.setAttribute("src", weatherIcon);
  img2.setAttribute("alt", weatherTemp + "°");
  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = weatherTemp + '"°"'+'<br>'+ '<span>'+weatherDescription+'</span>';
  figure2.appendChild(img2);
  figure2.appendChild(figcaption);
  mediaLeft.appendChild(figure2);
 media.appendChild(mediaLeft);

  // create media content element
  const mediaContent = document.createElement("div");
  mediaContent.classList.add("media-content");
  const title = document.createElement("p");
  title.classList.add("title", "is-4");
  title.textContent = eventTitle;
  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle", "is-6");
  subtitle.textContent = eventVenue;
  mediaContent.appendChild(title);
  mediaContent.appendChild(subtitle);
  media.appendChild(mediaContent);
  cardContent.appendChild(media);

  // create card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("content");
  cardBody.innerHTML = '<a class="button is-primary" href="'+ eventExcerpt +'"> Get Tickets</a>';
  const time = document.createElement("time");
  time.setAttribute("datetime", eventDate);
  time.textContent = eventTime +" - " + eventDate;
  cardBody.appendChild(time);
  cardContent.appendChild(cardBody);

  // add card to the DOM
  const cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
}
/*
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("my-form");
  const titleInput = document.getElementById("title-input");
  const bodyInput = document.getElementById("body-input");
  const cardContainer = document.getElementById("card-container");
});
*/
const formSubmitButton = document.getElementById("submitButton");
formSubmitButton.addEventListener("click", (event) => {
//This shows the map which has been hidden
mapElement.style.display = 'initial';
 // event.preventDefault();
  //displayCards();
  
});
