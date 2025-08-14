// - Open a lightbox gallery by clicking on the large product image(done)
/**
 * Select large product image done
 * Add click event done
 * show caroussel done
 * select previous and next image done
 * add click event to switch button done
 * 
 */
const url = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]
const body = document.querySelector('body')
const large_img = document.querySelector('#large_image')
const large_dialogue= document.querySelector('#large_IMG')
const next_previous = document.querySelectorAll('#prev, #Next')
const thumbnail = document.querySelectorAll('dialog #product-thumbnail img')
console.log(thumbnail)

/**#### Display Caroussel */
large_img.addEventListener('click',()=>{
    showCarroussel()
})
/**#### Change image #### */
let countPrevious = 0
Array.from(next_previous).forEach( button =>{
    button.addEventListener('click', (e)=>{

        e.target.id =='Next' ? MoveNextImg() : MovePreviousImg()

    })
} 
)
Array.from(thumbnail).forEach( (thumb, index) =>{
    thumb.addEventListener('click', ()=>{

       countPrevious = index;
       large_dialogue.setAttribute('src',url[countPrevious])

    })
} 
)

function MoveNextImg(){
    if(countPrevious < (url.length - 1) ){
            countPrevious += 1;
            large_dialogue.setAttribute('src',url[countPrevious])
        }
    
}
function MovePreviousImg(){
 if(countPrevious>0){
            countPrevious -=1;
            large_dialogue.setAttribute('src',url[countPrevious])  
          }
}


/** Close caroussel */
const dialog = document.querySelector('dialog')
const close_icon = document.querySelector('#closed')
close_icon.addEventListener('click',()=>{
    dialog.close();
})

function showCarroussel (){
    dialog.showModal();
}
// - Switch the large product image by clicking on the small thumbnail images(in progress)
/**
 * Select thumbnail 
 * add click event 
 * change large product image
 */
// - Add items to the cart
// - View the cart and remove items from it