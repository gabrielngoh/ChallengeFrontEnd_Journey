const price_Monthly_Array = document.querySelectorAll("section .Price")
const price_yearly_Array=[199.99,249.99,39.99]
const switch_btn =document.querySelector(".switch_btn")
const switch_btn_cicrcle =document.querySelector(".switch_btn_Circ")
const taille = switch_btn.clientWidth
//Bouton switch
switch_btn.addEventListener('click',()=>{
    switch_btn_cicrcle.classList.toggle('slide')
    if (switch_btn_cicrcle.classList.contains(slide)){
      
    }

})
console.log(taille)
//Change price 
price_Monthly_Array.forEach(Price=>Price)