
function fetchWeather(){
    const request=new XMLHttpRequest();
    document.getElementById("dis").innerHTML=""
city=document.getElementById("temp").value;
API='da2c2b04eefbebf1234c8c9ac3944ff7';
url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API}`;
request.open("GET",url,true);
request.send();
request.onload=function(){
    console.log(city);
        res=JSON.parse(this.response);
        console.log(res);
        res.list.forEach(day=>{
                let x=day.dt_txt.split(' ')
                document.getElementById("dis").innerHTML+="The temperature  on "+x[0]+" at "+x[1]+" in "+city+" is : "+day.main.temp+"<br>";
        })
        
    }
}