const apiKey = '9f190f8ac77ae614c6ef8bf57b3d2399';

document.getElementById('submit-button').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=fr`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-info').innerText = `Il fait ${(data.main.temp - 273.15).toFixed(2)} degrés Celsius à ${cityName}. La météo est ${data.weather[0].description}.`;
        })
        .catch(error => console.error('Une erreur est survenue lors de la récupération des données météo:', error));

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}&lang=fr`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('geo-info').innerText = `Les coordonnées de ${cityName} sont : Latitude ${data[0].lat}, Longitude ${data[0].lon}.`;
        })
        .catch(error => console.error('Une erreur est survenue lors de la récupération des coordonnées:', error));
});