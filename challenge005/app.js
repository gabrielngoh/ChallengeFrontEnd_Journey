const Nav_bar = document.querySelector("#header #nav-bar");
const menu_btn = document.querySelector("#Burger_icon");

const menu_close_btn = document.querySelector(".close-img")
const features = document.querySelector('.features>a')
const features_lnk = document.querySelector('.features ul')
const company = document.querySelector('.company>a')
const arrow_iconFt = document.querySelector(".arrow__")
const arrow_iconCo = document.querySelector(".arrow__cmp")
const company_lmk = document.querySelector('.company ul')
menu_btn.addEventListener('click',()=>{
    Nav_bar.style.display="block";
    })
menu_close_btn.addEventListener('click',()=>{
    Nav_bar.style.display="none";
    
    })
features.addEventListener('click',()=>{
   features_lnk.classList.toggle('display')
   isElememt_InClass(company_lmk,'display')
   arrow_iconFt.classList.toggle('rotata_attribute')
    isElememt_InClass(arrow_iconCo,'rotata_attribute')
})
company.addEventListener('click',()=>{
       company_lmk.classList.toggle('display')
       isElememt_InClass(features_lnk,'display')
       arrow_iconCo.classList.toggle('rotata_attribute')
       isElememt_InClass(arrow_iconFt,'rotata_attribute')

    
    
})
const isElememt_InClass=(element,classe)=>
{
    if(element.classList.contains(classe)){
      element.classList.remove(classe) 
    }
}