const setLogo = document.querySelectorAll('#AllFilter,#ActiveFilter,#InactiveFilter')

fetch('./data.json')
.then(response=>response.json())
.then(data => {
   addCardToGrid(data);
   filterAccordingToButton(data)

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


const grid = document.querySelector('#grid')
function filterAccordingToButton (data){
  setLogo.forEach(element=> element.addEventListener('click',(event)=>{
  switch (event.target.id) {
    case 'ActiveFilter':addCardToGrid(data.filter(card=> card.isActive == true && card.isRemoved == false),data);
      
      break;
    case 'InactiveFilter':addCardToGrid(data.filter(card=> card.isActive == false && card.isRemoved == false ),data);
      break;
  
    default:
      addCardToGrid(data.filter(card=> (card.isActive == true || card.isActive== false)  && card.isRemoved == false ),data)

      break;
  }
}
))
}
function display (card){
   return `<div  class=" card p-[5%] bg-white text-Neutral900 rounded-xl">
        <div class="logo-paragrap h-2/3 flex gap-[4%]">
          <img class="h-1/2 " src="${card.logo}" alt="DevLens logo">
          <div class="Text ">
            <h1 class=" font-NotoBold  text-[18px]">${card.name}</h1>
            <p class=" ">${card.description}</p>
          </div>
        </div>
        <div class="buttonsession h-fit flex justify-between items-center sm:mt-[10%] mt-[10%]">
          <button type="button" id="remove-${card.id}" class="block  sm:w-1/4 w-1/3 bg-transparent  border-Neutral300 border-2 rounded-full ">Remove</button>
          <span class="relative block rounded-full   md:w-[12%] w-[11.5%] md:h-3 h-5" id="tube_ball${card.id}"><span  class="block absolute top-1/2 -translate-y-1/2  ml-[7.5%] rounded-full  h-[85%] w-[45%] bg-white "></span></span>
        </div>
       </div>`
}
function addCardToGrid(cardTable, data) {
  grid.innerHTML = ''
  cardTable.forEach(card => {
    const div = document.createElement('div')
    div.innerHTML = display(card)

    // REMOVE button
    const removeBtn = div.querySelector(`#remove-${card.id}`)
    removeBtn.addEventListener('click', () => {
      setisremovedtoFalse(data, card.id)
      addCardToGrid(data.filter(c => !c.isRemoved), data)
    })

    // TOGGLE switch
    const toggle = div.querySelector(`#tube_ball${card.id}`)
    const toggleBall = div.querySelector(`#tube_ball${card.id} > span`)

    if (card.isActive) {
      toggle.classList.add('bg-Red700')
      toggleBall.classList.add('translate-x-[95%]')
    } else {
      toggle.classList.add('bg-Neutral600')
      toggleBall.classList.add('translate-x-0')
    }

    
    toggle.addEventListener('click', () => {
      card.isActive = !card.isActive
      // Activate state 
      toggle.classList.toggle('bg-Red700', card.isActive)
      toggleBall.classList.toggle('translate-x-[95%]', card.isActive)
      
      // Unactive state
      toggleBall.classList.toggle('translate-x-0', !card.isActive)
      toggle.classList.toggle('bg-Neutral600', !card.isActive)
    })

    grid.append(div)
  })
}


function setisremovedtoFalse(data, id) {
  for (let element of data) {
    if (element.id === id) {
      element.isRemoved = true;
      break;
    }
  }
}



