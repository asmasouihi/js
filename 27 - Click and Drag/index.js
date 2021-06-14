let items=document.querySelector(".items");
let startx=0;
function moveHandler(e){
  if(this.classList.contains("active")){
    let move=e.pageX-startx;
    startx=e.pageX;
    this.scrollLeft=this.scrollLeft-move*3;

  };

};

function downHandler(e){
  this.classList.add("active");
  startx=e.pageX
  
};

function leaveHandler(){
  this.classList.remove("active")
  
};

items.addEventListener("mousemove",moveHandler);
items.addEventListener("mousedown",downHandler);
items.addEventListener("mouseup",leaveHandler);
