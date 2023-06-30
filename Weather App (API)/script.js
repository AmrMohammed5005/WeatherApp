const apiKey = "8ed8a72b9c5fb1e0e0a568267dc31360";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {
    let data = await response.json();
  
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
    //Change Background Depending On Weather Condition
    if (data.main.temp >= 40) {
      card.style.background = " linear-gradient(160deg, #d74a49 0%, #f37324 100%)";
    }
    else if(data.main.temp >= 35) {
      card.style.background = "linear-gradient(160deg, #ff6361 0%, #ffa600 100%)";
    }
    else if (data.main.temp >= 30) {
      card.style.background = " linear-gradient(160deg, #f37324 0%, #ffa600 100%)";
    }
    else if (data.main.temp >= 20) {
      card.style.background = " linear-gradient(160deg, #72b043 0%, #007f4e 100%)";
    }
    else if (data.main.temp >= 16) {
      card.style.background = " linear-gradient(160deg,  #43b0f1 0%,#007f4e 100%)";
    }
    else if (data.main.temp >= 10) {
      card.style.background = " linear-gradient(160deg, #057dcd 0%, #43b0f1 100%)";
    }
    else if (data.main.temp >= 5) {
      card.style.background = " linear-gradient(160deg, #057dcd 0%, #194a7a 100%)";
    }
    else if (data.main.temp >= 0) {
      card.style.background = " linear-gradient(160deg, #057dcd 0%, #c095e4 100%)";
    }
    else if (data.main.temp <= -10) {
      card.style.background = " linear-gradient(160deg, #660e60 0%, #057dcd 100%)";
    }
    
    //Change Weather Icon Condition
    if(data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      
    }
    else if(data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      
    }
    else if(data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      
    }
    else if(data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      
    } 
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display = "none";
    
  }
}
searchBtn.addEventListener("click" , () => {
  checkWeather(searchBox.value);
});
