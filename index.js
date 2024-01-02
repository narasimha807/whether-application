const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    console.log(latitude);
    console.log(longitude);
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5642061b7cmsh88cc556a9ca4d72p139c19jsn451ef9bfb4a7',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            let reading = result.data[0];
            aqiResult.textContent =reading.aqi;
            coResult.textContent =reading.co;
            no2Result.textContent =reading.no2;
            pm2Result.textContent =reading.pm2;
            pm10Result.textContent =reading.pm10;
            so2Result.textContent =reading.so2;
            resultContainer.style.display = 'flex'
        })
});


