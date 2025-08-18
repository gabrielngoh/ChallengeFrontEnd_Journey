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
Array.from(next_previous).forEach( button=>{
    button.addEventListener('click', (e)=>{
        
        e.target.id =='Next' ? MoveNextImg() : MovePreviousImg()


    })
} 
)


function MoveNextImg(){
    if(countPrevious < (url.length - 1) ){
            countPrevious += 1;
            large_dialogue.setAttribute('src',url[countPrevious])

              if (thumbnail[countPrevious - 1].classList.contains('set_outline_Orange'))
              {
                thumbnail[countPrevious - 1].classList.remove('set_outline_Orange')
              }
            thumbnail[countPrevious].classList.add('set_outline_Orange')

        }
    
}
function MovePreviousImg(){
 if(countPrevious>0)
    {
            countPrevious -=1;
            large_dialogue.setAttribute('src',url[countPrevious])
             if (thumbnail[countPrevious+1].classList.contains('set_outline_Orange'))
              {
                thumbnail[countPrevious+1].classList.remove('set_outline_Orange')
              }
            thumbnail[countPrevious].classList.add('set_outline_Orange')
        }
}


/** Close caroussel */
const dialog = document.querySelector('dialog')
const close_icon = document.querySelector('#closed')
close_icon.addEventListener('click',()=>{
    dialog.close();
})

function showCarroussel (){
    thumbnail[0].classList.add('set_outline_Orange')
    dialog.showModal();
}
// - Switch the large product image by clicking on the small thumbnail images(in progress)

Array.from(thumbnail).forEach( (thumb, index) =>{
    thumb.addEventListener('click', ()=>{

       countPrevious = index;
       large_dialogue.setAttribute('src',url[countPrevious])
      

    })
} 
)

//  Add items to the cart

const plusMinusIconsArray = document.querySelectorAll('#plus,#minus')
const priceScreen = document.querySelector('#priceScreen')
const totalPriceBucket = document.querySelector('#pricePrev')
const totalProductBucket = document.querySelector('#qtyPrev')
const bucket = document.querySelector('.bucket_previsualiser')
const addToChartBtn = document.querySelector('#addTocart')
const bucketQteHead = document.querySelector('#etiquette_style')

addToChartBtn.addEventListener('click', ()=>{
      // parseInt(priceScreen) > 0 ? bucket.style.display= 'flex' : emptYState()
        bucket.style.display= 'flex'
        chartModifier()
})

plusMinusIconsArray.forEach(
    (btn)=>{
    btn.addEventListener('click',(e)=>
        {
        e.target.id == 'plus' ? increment_Prod_Qte():decrement_Prod_Qte()
    })
})

function increment_Prod_Qte (){

 if(parseInt(priceScreen.textContent)>=0){
    priceScreen.textContent=parseInt(priceScreen.textContent) + 1
    totalProductBucket.textContent=priceScreen.textContent
    totalPriceBucket.textContent=parseFloat(totalProductBucket.textContent) * 125.00 
    bucketQteHead.textContent=priceScreen.textContent

 }    
}
function decrement_Prod_Qte (){
 if (parseInt(priceScreen.textContent)>0){
    priceScreen.textContent=parseInt(priceScreen.textContent) - 1
    totalProductBucket.textContent=priceScreen.textContent
    totalPriceBucket.textContent=parseFloat(totalProductBucket.textContent) * 125.00 
    bucketQteHead.textContent=priceScreen.textContent
 }
}

// Afficher le bucket vide lorsque la quantite est de 0 
// Afficher le nombre de produit dans le bucket icon du head 
// Supprimer un element dans le bucket avec dustbin icon
const bucketMain = document.querySelector('.basket')
const icon_delete = document.querySelector('#icon_delete')
icon_delete.addEventListener('click',()=>{
    emptYState()
    priceScreen.textContent = 0;
})
function emptYState(){
bucketMain.innerHTML=
    `<header>
        <span class=" font-bold ml-2 my-4">Cart</span>
     </header>
    <main class = "h-full flex justify-center items-center">
        <span class =" text-darkGrayishBlue font-bold">Your cart is empty</span>
    </main>`;
        bucketQteHead.style.display='none'  

}

function chartModifier(){

    bucketQteHead.style.display='block'  
}