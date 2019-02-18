//만든 목적은 배경화면 입히기.
//배경화면에 번호 부여해서 바뀌게 해야함.

const body = document.querySelector("body"); //바디부분에 그림이 들어가니까 body. 웹에서 우리눈에 보이는 부분이 body임

const IMG_NUMBER = 5;

//지금 실습에서는 API를 사용한게 아니어서 이거써도 의미없음. API사용할때 쓰면됨.
// function handleImgLoad(){
//   console.log("finished loading");
// }

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber +1}.jpg`; //+1은 밑에 함수에서 0나오면 1나오게 해주기 위함.
  //이미지가 너무커서 HTML에 클래스이름 넣어서 편집할예정
  image.classList.add("bgImage");

  body.appendChild(image); //넣어야 그림나옴
  //table 리스너를 이미지화 하기 위해 event 리스너를 연결.
  //지금 실습에서는 API를 사용한게 아니어서 이거써도 의미없음. API사용할때 쓰면됨.
  // image.addEventListener("loaded",handleImgLoad);
}

//랜덤발생시키기
function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}


function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
