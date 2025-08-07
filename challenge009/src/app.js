//  DOM SELECTORS 
const setLogo = document.querySelectorAll('#AllFilter, #ActiveFilter, #InactiveFilter');
const mode_toggle_btn = document.querySelector('#icon_sun');
const grid = document.querySelector('#grid');

// FETCH AND INITIALIZE 
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    addCardToGrid(data); 
    filterAccordingToButton(data);
  })
  .catch(err => console.error("Loading error:", err));

// DARK MODE TOGGLE 
mode_toggle_btn.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark');
  change_mode_toggle_icon();
});

function change_mode_toggle_icon() {
  document.querySelector('html').classList.contains('dark')
    ? mode_toggle_btn.src = "./assets/images/icon-sun.svg"
    :mode_toggle_btn.src = "./assets/images/icon-moon.svg"

  }

//  FILTER BUTTON HANDLING 
function filterAccordingToButton(data) {
  setLogo.forEach((element, index) =>
    element.addEventListener('click', (event) => {
      state_clicked(setLogo, index); 
      switch (event.target.id) {
        case 'ActiveFilter':
          addCardToGrid(data.filter(card => card.isActive == true && card.isRemoved == false), data);
          break;
        case 'InactiveFilter':
          addCardToGrid(data.filter(card => card.isActive == false && card.isRemoved == false), data);
          break;
        default:
          addCardToGrid(data.filter(card => (card.isActive == true || card.isActive == false) && card.isRemoved == false), data);
          break;
      }
    })
  );
}


// FILTER BUTTON STATE TOGGLING 
function state_clicked(setBtn, index) {
  setBtn[index].classList.add('mod');
  Array.from(setBtn)
    .filter(element => Array.from(setBtn).indexOf(element) != index)
    .forEach(elt => elt.classList.remove('mod'));
}

// RETURN CARD TEMPLATE HTML
function display(card) {
  return `<div  class="card px-[5%] pt-[5%] pb-4 bg-white text-Neutral900 rounded-xl">
    <div class="logo-paragrap h-2/3 flex gap-[4%]">
      <img class="h-1/2 " src="${card.logo}" alt="${card.name}">
      <div class="Text ">
        <h1 class=" font-NotoBold  text-[18px]">${card.name}</h1>
        <p class=" ">${card.description}</p>
      </div>
    </div>
    <div class="buttonsession h-fit flex justify-between items-center sm:mt-[2.5%] mt-[5%]">
      <button type="button" id="remove-${card.id}" class="block py-1 sm:w-1/4 w-1/3 bg-transparent  border-Neutral300 border-2 rounded-full ">Remove</button>
      <span class="relative block rounded-full   md:w-[12.5%] w-[15%] md:h-4 h-5" id="tube_ball${card.id}">
        <span  class="block absolute top-1/2 -translate-y-1/2 sm:ml-1- rounded-full  h-[85%] w-[45%] bg-white "></span>
      </span>
    </div>
  </div>`;
}

// RENDER CARDS TO GRID 
function addCardToGrid(cardTable, data) {
  grid.innerHTML = '';
  cardTable.forEach(card => {
    const div = document.createElement('div');
    div.innerHTML = display(card);

    // Remove button
    const removeBtn = div.querySelector(`#remove-${card.id}`);
    removeBtn.addEventListener('click', () => {
      setisremovedtoFalse(data, card.id);
      addCardToGrid(data.filter(c => !c.isRemoved), data);
    });

    // Toggle switch
    const toggle = div.querySelector(`#tube_ball${card.id}`);
    const toggleBall = div.querySelector(`#tube_ball${card.id} > span`);

    if (card.isActive) {
      toggle.classList.add('bg-Red700');
      toggleBall.classList.add('translate-x-[95%]');
    } else {
      toggle.classList.add('bg-Neutral600');
      toggleBall.classList.add('translate-x-0');
    }

    toggle.addEventListener('click', () => {
      card.isActive = !card.isActive;

      toggle.classList.toggle('bg-Red700', card.isActive);
      toggleBall.classList.toggle('translate-x-[95%]', card.isActive);

      toggleBall.classList.toggle('translate-x-0', !card.isActive);
      toggle.classList.toggle('bg-Neutral600', !card.isActive);
    });

    grid.append(div);
  });
}

// SET CARD REMOVED FLAG TO TRUE 
function setisremovedtoFalse(data, id) {
  for (let element of data) {
    if (element.id === id) {
      element.isRemoved = true;
      break;
    }
  }
}
