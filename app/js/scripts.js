var body = document.querySelector("body");

document.addEventListener("click", show);
 
function show(e){
  e.preventDefault();
  if(e.target.matches(".map")){
    body.classList.add("showme");
  } else {
    body.classList.remove("showme");
  }
};
