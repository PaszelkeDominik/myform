const checkBox =document.querySelector(`.devices__check--js`);


checkBox.addEventListener("click",()=>{
  document.querySelector(`.devices__check--other`).classList.toggle(`devices__check--other--js`);
})
