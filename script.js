const inputValue = document.querySelector(".inputValue")
console.log(inputValue)
const search = document.querySelector(".search")

const locationsDiv = document.querySelector(".locations")

const submitBtn = document.querySelector('.search')

window.addEventListener("DOMContentLoaded",() => weatherDetails())

submitBtn.addEventListener("click",() => weatherDetails())

inputValue.addEventListener("keypress",(e) =>{
    if(e.key === "Enter"){
        weatherDetails()
    }
})

function weatherDetails(){
    let inputBoxValue = inputValue.value
    let link = inputBoxValue == "" ? 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=816366c90cdddb7e620a6932c7df52ff' : `https://api.openweathermap.org/data/2.5/weather?q=${inputBoxValue}&appid=816366c90cdddb7e620a6932c7df52ff` ;
    fetch(link)
    .then(jsonVal => jsonVal.json())
    .then(allDatas => {
        let city  = allDatas.name
        let weatherImage = allDatas.weather[0].icon
        let temperature = Math.round(allDatas.main.temp - 273.15)
        let minimumTemperature = Math.round(allDatas.main.temp_min - 273.15)
        let maximumTemperature = Math.round(allDatas.main.temp_max - 273.15)
        let district = `<p>Temperature :${temperature}°c</p><p>Minimum Temperature :${minimumTemperature}°c</p><p>Maximum Temperature :${maximumTemperature}°c</p><h4>${city}</h4><img src="http://openweathermap.org/img/w/${weatherImage}.png" >`
        locationsDiv.innerHTML = district
    })
    .catch(err => console.log(err));    
}
