const Iss_Url ="https://api.wheretheiss.at/v1/satellites/25544";
const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
const tileUrl ='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

const myIcon = L.icon({
    iconUrl: './iss.png',
    iconSize: [50, 25],
    iconAnchor: [10,16],
    popupAnchor: [1,3],
    
});

const issMap = L.map('issmap').setView([0,0],1);

const titles = L.tileLayer(tileUrl,{ attribution})
titles.addTo(issMap)




const marker = L.marker([0, 0],{icon:myIcon}).addTo(issMap);

async function getIss(){
    const response = await fetch(Iss_Url);
    const data =  await response.json();
    const {latitude,longitude} = data;
   // console.log(latitude,longitude);

    marker.setLatLng([latitude,longitude]);
    document.getElementById("lat").textContent =latitude;
    document.getElementById("log").textContent=longitude;
    

}



setInterval(getIss,3000)
