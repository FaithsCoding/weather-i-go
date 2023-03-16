/*
const form = document.getElementById("my-form");
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");
const cardContainer = document.getElementById("card-container");
*/
function displayCards(eventoTitlo, evventoINFO, dasVenue, leExcerpto, localDate, localTime, eventImageUrl, weatherIconUrl, weatherTempo, weatherDescriptiono) {
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
const eventInfoo = evventoINFO;


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
  figure2.classList.add("image", "is-64x64");
  const img2 = document.createElement("img");
  img2.setAttribute("src", weatherIcon);
  img2.setAttribute("alt", weatherTemp + "°");
  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = weatherTemp + '<b>°</b>'+'<br>'+ '<span>'+weatherDescription+'</span>';
  figure2.appendChild(img2);
//var alternivativeIMG = '<div class="field is-grouped is-grouped-multiline"> <div class="control"> <div class="tags has-addons"><span class="tag is-grey-lighter"><img src="'+ weatherIcon+'"></span><span class="tag is-info">' + weatherTemp + '<b>°</b></span> </div></div>'
//figure2.innerHTML = alternivativeIMG;
  mediaLeft.appendChild(figure2);
  mediaLeft.appendChild(figcaption);
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
  cardBody.innerHTML = '<div class="card-info-box">'+ eventInfoo +'</div><a class="button is-primary glightbox4" href="'+ eventExcerpt +'"> Get Tickets</a>';
  const time = document.createElement("time");
  time.setAttribute("datetime", eventDate);
  time.innerHTML = "<div class='timed'>"+eventTime +"</div><div class='dated'>" + eventDate +"</div>";
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
