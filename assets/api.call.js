const searchButton = document.querySelector('#submitButton');
const searchBar = document.querySelector('#search-bar');
const locationElement = document.querySelector('#location');
const temperatureElement = document.querySelector('#temperature');
const descriptionElement = document.querySelector('#description');
const humidityElement = document.querySelector('#humidity');

searchButton.addEventListener('click', () => {
    const apiKey = 'b923c3b4dd66a87f8cc6b5f34163a829';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            locationElement.innerText = location;
            temperatureElement.innerText = `${temperature}°C`;
            descriptionElement.innerText = description;
            humidityElement.innerText = `Humidity: ${humidity}%`;
        })
        .catch(error => console.log(error));
});


