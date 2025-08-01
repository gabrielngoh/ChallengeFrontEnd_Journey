fetch('./data.json')
.then(response=>response.json())
.then(data => {
    filterAccordingToButton(data)
  
// permet de filrer l'ensemble des datas , 
//return l'ensemble des datas
} )
.catch(err => console.error("Erreur de chargement :", err));
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

const setLogo = document.querySelectorAll('#AllFilter,#ActiveFilter,#InactiveFilter')
const grid = document.querySelector('#grid')
function filterAccordingToButton (data){
  setLogo.forEach(element=> element.addEventListener('click',(event)=>{
  switch (event.target.id) {
    case 'ActiveFilter':addCardToGrid(data.filter(card=> card.isActive == true));
      
      break;
    case 'InactiveFilter':addCardToGrid(data.filter(card=> card.isActive == false));
      break;
  
    default:
      addCardToGrid(data.filter(card=> card.isActive == true || card.isActive== false))

      break;
  }
}
))
}
function display (card){
   return `<div class="card p-[5%] bg-white text-Neutral900 rounded-xl">
        <div class="logo-paragrap h-2/3 flex gap-[4%]">
          <img class="h-1/2 " src="${card.logo}" alt="DevLens logo">
          <div class="Text ">
            <h1 class=" font-NotoBold  text-[18px]">${card.name}</h1>
            <p class=" ">${card.description}</p>
          </div>
        </div>
        <div class="buttonsession h-fit flex justify-between items-center sm:mt-[10%] mt-[10%]">
          <button type="button" class="block  sm:w-1/4 w-1/3 bg-transparent  border-Neutral300 border-2 rounded-full ">Remove</button>
          <span class="relative block rounded-full bg-Red700  md:w-[12%] w-[11.5%] md:h-3 h-5"><span class="block absolute top-1/2 -translate-y-1/2  ml-[7.5%] rounded-full  h-[85%] w-[45%] bg-white "></span></span>
        </div>
       </div>`
}

// creer une fonction pour ajouter a la grid les elements selectionnes
// creer une fonction pour afficher les elements au clic :
//- On va utiliser event.target-id pour recuperer l'id et faire ce qui est en bas ====>
// cette fonction verifie l'indication sur le boutton et modifie le bool du filtre avec switch()
function addCardToGrid(cardTable){
  grid.innerHTML=''
  cardTable.forEach(element=>{
     const div = document.createElement('div')
     div.innerHTML= display(element)
     grid.append(div)
  })
}


