const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b76b6b2d6msh512b98ba32dc8e5p1de407jsn613e515b5afa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

function getWeather() {
    let city = $("#location-data").val();
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            $("#temp").html(response.temp + "&#176;C");
            $("#humidity").html(response.humidity + " %");
            $("#wind-speed").html(response.wind_speed + " km/h");
            $("#cloud-pct").html(response.cloud_pct + " mm");
        })
        .catch(err => console.error(err));
}

// function getWeather() {
//     let city = $("#location-data").val();
//     fetch('http://api.weatherapi.com/v1/current.json?key=8956c7019a614fec8b9175258231302&q='+city+'&aqi=yes')
//         .then(response => response.json())
//         .then(data => {
//             $("#temp").html(data.current.temp_c + "&#176;C");
//             $("#humidity").html(data.current.humidity + " %");
//             $("#wind-speed").html(data.current.wind_kph + " km/h");
//             $("#cloud-pct").html(data.current.precip_mm + " mm");
//         })
//         .catch(error => console.error(error));
// }
