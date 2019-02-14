const form = document.querySelector(".js-form"), //쿼리셀렉터 all은 모든 요소를 배열로 가져옴. 심지어 1개인데도 배열로 가져온다.
input = form.querySelector("input"),  // getElementBy네임도 있음.
greeting = document.querySelector(".js-greetings");

//유저네임 저장은 웹에 로컬 스토리지 이용해서 저장할껏임. 안드로이드에서 shared preference랑 유사한 기능.
const USER_LS = "currentUser", //로컬스토리지 키값저장
SHOWING_CN = "showing";


//이름저장기능
function saveName(text){
  localStorage.setItem(USER_LS,text);
}
//제출기능
function handleSubmit(event) {
  //form으로 제출하면 event는 document까지 올라가고 새로고침 되는 것이 기본값이니 그걸 변경하기위해 만듦.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); //기존 input창에 글입력하면 그거 지우고
    greeting.classList.add(SHOWING_CN); //js파일에 써놓은거 보여지게
    greeting.innerText = `Hello ${text}`; //그리고 반영하기. 이름저장할 곳이 없으니 저장기능만들어야함.
}


function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //he is not
   askForName();
  }else{
    //he is
    paintGreeting(currentUser);
  }
}


function init(){
  loadName();
}

init();
