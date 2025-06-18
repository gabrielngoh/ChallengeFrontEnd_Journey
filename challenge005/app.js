const Nav_bar = document.querySelector("#header #nav-bar");
const menu_btn = document.querySelector("#Burger_icon");
const menu_close_btn = document.querySelector(".close-img")
const features = document.querySelector('.features>a')
const features_lnk = document.querySelector('.features ul')
const company = document.querySelector('.company>a')
const arrow_iconFt = document.querySelector(".arrow__")
const arrow_iconCo = document.querySelector(".arrow__cmp")
const company_lnk = document.querySelector('.company ul')

/*
*** My Own fonction !!! ***
*/
 const Toggle=(element, classname)=>{
    if(element.classList.contains(classname))
{
      element.style.display='none'
      element.classList.remove(classname)

}
else{
     element.style.display='block'
     element.classList.add(classname)

}

 }
const removeElement = (element,className,arrow__)=>{
    element.style.display="none"
    element.classList.remove(className)
    rotateArrowIcon(arrow__)
}
const rotateArrowIcon = (arrow_image)=>{
    arrow_image.classList.toggle('rotata_attribute')

}

/**
 *  Eventlistener for open and close menu buttons ,
 *  Dropdowns for  features and company option 
 */
menu_btn.addEventListener('click',()=>{
    Nav_bar.style.display="flex";
    })

menu_close_btn.addEventListener('click',()=>{
    Nav_bar.style.display="none";
    })

features.addEventListener('click',()=>{
    Toggle(features_lnk,"clicked")
    rotateArrowIcon(arrow_iconFt)
    if(company_lnk.classList.contains('clicked'))
     {
        removeElement(company_lnk,"clicked",arrow_iconCo)
     }
})

company.addEventListener('click',()=>{
    Toggle(company_lnk,"clicked")
    rotateArrowIcon(arrow_iconCo)
    if(features_lnk.classList.contains('clicked'))
     {
        removeElement(features_lnk,"clicked",arrow_iconFt)
     }
})

