
function fetchData()
{
const request=new XMLHttpRequest();

country=document.getElementById("country").value;
url=`https://api.covid19api.com/live/country/${country}`;
request.open("GET",url,true);
request.send();
request.onload=()=>{

        var res=JSON.parse(request.responseText);
        console.log(res);
        var table=document.createElement("table");
        table.align="center"
        table.border="2";
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell4=row.insertCell(-1);
        cell5=row.insertCell(-1);
        cell1.innerHTML="City";
        cell2.innerHTML="Confirmed Cases";
        cell3.innerHTML="Active Cases";
        cell4.innerHTML="Recovered Cases";
        cell5.innerHTML="Deaths";
      
        res.forEach(rep=>{
        row=table.insertRow(-1);
        cell1=row.insertCell(-1);
        cell2=row.insertCell(-1);
        cell3=row.insertCell(-1);
        cell4=row.insertCell(-1);
        cell5=row.insertCell(-1);
        cell1.innerHTML=rep.Province;
        cell2.innerHTML=rep.Confirmed;
        cell3.innerHTML=rep.Active;
        cell4.innerHTML=rep.Recovered;
        cell5.innerHTML=rep.Deaths;
       
        })
         document.body.appendChild(table);
      
}
}