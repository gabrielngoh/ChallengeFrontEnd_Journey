// let extensionList =[]
// fetch('./data.json')
// .then(response=>response.json())
// .then(data => {
//     extensionList=data
//     console.log(extensionList[1])
// } )
// .catch(err => console.error("Erreur de chargement :", err));
let count= 0;
const mode_toggle_btn = document.querySelector('#icon_sun')
mode_toggle_btn.addEventListener('click',()=>{
    document.querySelector('html').classList.toggle('dark')
    change_mode_toggle_icon()
})
function change_mode_toggle_icon(){
     
     if (count<1){
        mode_toggle_btn.src="../browser-extensions-manager-ui-main/assets/images/icon-moon.svg"
        count+=1
     }
     else{
        mode_toggle_btn.src="../browser-extensions-manager-ui-main/assets/images/icon-sun.svg"
        count=0
     }
}

