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
        .catch(err => {
            console.error(err);
            getWeather2();
        });
}

function getWeather2() {
    let city = $("#location-data").val();
    fetch('http://api.weatherapi.com/v1/current.json?key=8956c7019a614fec8b9175258231302&q='+city+'&aqi=yes')
        .then(response => response.json())
        .then(data => {
            $("#temp").html(data.current.temp_c + "&#176;C");
            $("#humidity").html(data.current.humidity + " %");
            $("#wind-speed").html(data.current.wind_kph + " km/h");
            $("#cloud-pct").html(data.current.precip_mm + " mm");
        })
        .catch(error => console.error(error));
}

var slideIndex = 1;
function rightSlide() {
    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 1;
    }
    if (slideIndex == 1) {
        $("#wind-card").removeClass("d-none");
        $("#cloud-card").addClass("d-none");
        $("#humidity-card").addClass("d-none");
    }
    else if (slideIndex == 2) {
        $("#wind-card").addClass("d-none");
        $("#cloud-card").removeClass("d-none");
        $("#humidity-card").addClass("d-none");
    }
    else {
        $("#wind-card").addClass("d-none");
        $("#cloud-card").addClass("d-none");
        $("#humidity-card").removeClass("d-none");
    }
}

function leftSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = 3;
    }
    if (slideIndex == 1) {
        $("#wind-card").removeClass("d-none");
        $("#cloud-card").addClass("d-none");
        $("#humidity-card").addClass("d-none");
    }
    else if (slideIndex == 2) {
        $("#wind-card").addClass("d-none");
        $("#cloud-card").removeClass("d-none");
        $("#humidity-card").addClass("d-none");
    }
    else {
        $("#wind-card").addClass("d-none");
        $("#cloud-card").addClass("d-none");
        $("#humidity-card").removeClass("d-none");
    }
}