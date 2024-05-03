
const apiURL=`http://api.openweathermap.org/data/2.5/weather?q=Baku&appid=0688fd031b2dfd134dc5a747bff9d99e&units=metric`
const input=document.getElementById('input')
const main=document.getElementById('mainCard')
const searchBtn=document.getElementById('btn')
const late=document.getElementById('latest')
searchBtn.addEventListener('click',getData)


const storedJSON = localStorage.getItem('latest');
const storedArray = JSON.parse(storedJSON);
var latestSearch=storedArray && Array.isArray(storedArray)?storedArray:[]
class Data{
    constructor(name,temp,humid) {
        this.name = name;
        this.temp = temp;
        this.humid=humid;
      }
}

function getData(){
    console.log(input.value.trim());
    if(input.value.trim()!==''){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=0688fd031b2dfd134dc5a747bff9d99e&units=metric`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            main.innerHTML=`
            <div class="card-body">
                <h5 class="card-title">City: ${result.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Temp: ${result.main.temp}C</h6>
                <p class="card-text">Humidity: ${result.main.humidity}</p>
            </div>
            `
            var weatherData= new Data(result.name,result.main.temp,result.main.humidity)
            // console.log(weatherData);
            latestSearch.push(weatherData)
            localStorage.setItem('latest', JSON.stringify(latestSearch));
        })
        .catch((error) => console.error(error));
        var storedData = JSON.parse(localStorage.getItem('latest'));
        late.innerHTML=''
        console.log(storedData[0])
        

    };
    latestSearch.map((el, index) => 
    
        late.innerHTML+=`
        <div id="mainCard" class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">City: ${el.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Temp: ${el.temp}C</h6>
        <p class="card-text">Humidity: ${el.humid}</p>
        </div></div>
        `)
    input.value=''

}
window.onload = function() {
    latestSearch.map((el, index) => 
    
        late.innerHTML+=`
        <div id="mainCard" class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">City: ${el.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Temp: ${el.temp}C</h6>
        <p class="card-text">Humidity: ${el.humid}</p>
        </div></div>
        `)
}

