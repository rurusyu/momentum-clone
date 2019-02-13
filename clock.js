const clockContainer = document.querySelector(".js-clock"),  //쿼리셀렉터는 해당 클래스의 자식을 탐색하고 싶은것.
 clockTitle =clockContainer.querySelector("h1");

//현재시간을 먼저 가져와야함.
function getTime(){
  const date = new Date();
  const minutes =date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //시간 10미만일때 한자리수 삼항연산자로 고쳐줌 그게 더 깔끔.
  clockTitle.innerText = `${hours <10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();
