var weatherButton=document.getElementById("weatherButton")
var termInput=document.getElementById("termInput")
var APIkey="dbce5920d86b77601def40ffb677edb7"
weatherButton.addEventListener("click",function(){
    var cityname=termInput.value
    console.log(cityname)
var latnlon=`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${APIkey}`
fetch(`${latnlon}`).then(response => {
    return response.json()})
    .then(data => {
        console.log(data)
        var lat=data[0].lat
        var lon=data[0].lon
        var apiWeather=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
        fetch(apiWeather).then(response=>{
            return response.json()
            
        })
        .then(data=>{
            console.log(data)
            var weather=data.list[0]
            var temp=document.getElementById("temp")
            temp.textContent="temp: "+weather.main.temp

            var humidity=document.getElementById("humidity")
            humidity.textContent="humidity:"+weather.main.humidity
            
            var speed=document.getElementById("speed")
            speed.textContent="speed:"+weather.wind.speed

            var date=document.getElementById("date")
            date.textContent="date:"+new Date(weather.dt*1000).toLocaleDateString()
            var icon=document.getElementById("icon")
            icon.setAttribute("src","http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png")
            
            for(var i=0;i<data.list.length;i=i+8){
                var item=data.list[i]
            var forecast= document.getElementById("forecast")
            var ptag=document.createElement("p")
            ptag.textContent="temp: "+item.main.temp

            forecast.appendChild(ptag)
            var ptag=document.createElement("p")
            ptag.textContent="temp: "+item.main.humidity

            forecast.appendChild(ptag)
            
            }
        })
    })
})
