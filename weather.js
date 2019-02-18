const weather = document.querySelector(".js-weather");

//API키 좌표가져오기
const API_KEYS ="139e87807c6e8d8e16099f700a6d54ec";
//날씨정보 가져오기
const COORDS= 'coords';

function getWeather(lat, lng){
 //fetch() 안에는 가져올 데이터 `` 이걸로 써서 가져오면됨.
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
  ).then(function (response) {
    return response.json()  //api사용을 위해 request 하면 거기서 제이슨 형식으로 받아와야함.
  }).then(function (json) { //웹에서 가져온 json데이터 콘솔에 뿌려주는거.
      console.log(json);
      const temperature = json.main.temp; //화씨를 섭씨로.
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
  });

}


function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj)); //개발자모드에서 application보면 제이슨으로 저장된거 볼수 있음.
}

function handleGeoSucces(position) {
  console.log(position); //이거는 position이 어떤정보 가지고 있는지 보는거.
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, //latitude: latitude, 저렇게 작성가능.
    longitude //longitude: longitude
  };
  //정보불러왔으면 저장
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoError(position) {
  console.log("Cant access geo location");
}

//내 좌표가져오기, 내 좌표토대로 그지역 날씨정보 가져올 수 있음.
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);

}


//위치정보 불러오기
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();

  }else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}

function init() {

  loadCoords();

}
init();
