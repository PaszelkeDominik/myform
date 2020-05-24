const checkBox = document.querySelector(`.devices__check--js`);


console.log(document.querySelector(`.devices__check--js:checked`));

checkBox.addEventListener("click", () => {
  if (document.querySelector(`.devices__check--js:checked`) == null) {
    console.log(`if`);
    document.querySelector(`.devices__check--other`).classList.remove(`devices__check--other--js`);
  } else {
    console.log(`else`);
    document.querySelector(`.devices__check--other`).classList.toggle(`devices__check--other--js`);
  }
});


