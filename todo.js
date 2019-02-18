const toDoForm = document.querySelector(".js-toDoFrom"),
toDoInput =  toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

//할일 저장
//const toDos=[]; //const는 상수라 한번저장되면 값을 변경못함, let로 바꿈.
let toDos=[];
//필터는 forEach와 비슷함.
//배열안에서 모든배열을 대상으로 조건이 true인 아이템들만 가지고
//새로운 배열만듦.
// function filterFn(toDo) {
//     return toDo.id === 1
//     //이걸지우고  deleteTodo() 함수안에있는 필터에다가 펑션으로 줄수도 있음.
// }


//삭제기능
function deleteTodo() {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
      //li.id는 문자, toDo.id는 숫자로 되어있어서 형변환해줘야함.
      return toDo.id !== parseInt(li.id);

  }); //위에서 말한 새로운 배열
  toDos = cleanToDos;
  saveToDos();
  console.log(cleanToDos);

}


//데이터 저장.
function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
  const li =document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.addEventListener("click",deleteTodo);
  const span = document.createElement("span");
  const newId = toDos.length+1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id =newId;
  toDoList.appendChild(li);
  //할일을 배열에 저장하려면 obj가 필요함
  const toDoObj={
    text: text,
    id:newId
  };
  toDos.push(toDoObj);
  saveToDos();
}



function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value ="";
}


function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });

  }
}


function init(){
  loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
