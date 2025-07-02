 
/*
  Mes Notes : 
 
 Apres un clic sur un boutton Add to Cart le systeme doit :
 * 1-Changer la couleur  des bordures des bouttons et du produit  (done)
 * 2-Changer le contenu du boutton et le background (done)
 * 3- Faire la MAJ sur la liste des produits  
 * 
 */
 
const Desserts_image_set = document.querySelectorAll('.Card1>img,.Card2>img,.Card3>img,.Card4>img,.Card5>img,.Card6>img,.Card7>img,.Card8>img,.Card9>img')
const btn = document.querySelectorAll('.Card1 .Add_to_cart_btn,.Card2 .Add_to_cart_btn,.Card3 .Add_to_cart_btn, .Card4 .Add_to_cart_btn, .Card5 .Add_to_cart_btn,.Card6 .Add_to_cart_btn,.Card7 .Add_to_cart_btn,.Card8 .Add_to_cart_btn,.Card9 .Add_to_cart_btn')
const overlay_array = document.querySelectorAll('.Card1>.overlay,.Card2 .overlay, .Card3>.overlay, .Card4>.overlay, .Card5>.overlay,.Card6>.overlay,.Card7>.overlay,.Card8>.overlay,.Card9>.overlay')
const plus_array = document.querySelectorAll('.Card1 .add_items,.Card2 .add_items, .Card3 .add_items, .Card4 .add_items, .Card5 .add_items,.Card6 .add_items,.Card7 .add_items,.Card8 .add_items,.Card9 .add_items')
const minus_array = document.querySelectorAll('.Card1 .remove,.Card2 .remove, .Card3 .remove, .Card4 .remove, .Card5 .remove,.Card6 .remove,.Card7 .remove,.Card8 .remove,.Card9 .remove')
const order_quantity = document.querySelectorAll('.Card1 .Quantity,.Card2 .Quantity, .Card3 .Quantity, .Card4 .Quantity, .Card5 .Quantity,.Card6 .Quantity,.Card7 .Quantity,.Card8 .Quantity,.Card9 .Quantity')
const Aside__orderList= document.querySelector('aside')
var order=1

/**Afficher un overlay (done )
 * clique sur l'image + ou - pour ajouter augmenter ou reduire le nombre de produits commende
 * Ajouter ce produit a la side bar 
 */
btn.forEach((button,index_btn)=>{
  button.addEventListener('click',()=>{
      Array.from(overlay_array)[index_btn].classList.add('overlay_state')
      Desserts_image_set[index_btn].style.border= "3px solid orange"

  })
})
plus_array.forEach((plus_image,index_img)=>{
  let span = Array.from(order_quantity)[index_img]
  plus_image.addEventListener('click',()=>{
    is_plus_or_minus(plus_image,span)
  })
  
})
minus_array.forEach((minus_image,index_img)=>{
  let span = Array.from(order_quantity)[index_img]
  minus_image.addEventListener('click',()=>{
    is_plus_or_minus(minus_image,span)
  })
  
})
// arrow function to determine btn nature (plus or minus) and update count
const is_plus_or_minus =(incre_decre_btn,span)=>{
  if(incre_decre_btn.classList.contains('add_items'))
  {
     increment__(span)
  }
 else{
     decrement__(span)
 }  
}
const increment__=(overlay__span)=>{
  let actual_quantity = parseInt(overlay__span.textContent)
  overlay__span.textContent= ++actual_quantity
}
const decrement__=(overlay__span)=>{
  let old__quantity = parseInt(overlay__span.textContent)
  if(old__quantity==0){
    console.log('restart ...')
    restart()
  }
  else{
        overlay__span.textContent= --old__quantity

  }
}
const restart =()=>{
  btn.forEach((btn__ , index)=>{
    btn__.style.display="flex"
    Array.from(overlay_array)[index].classList.remove('overlay_state')

  })
}


/**
 * AJOUTER UN ITEMS DANS LA SIde bar :
 * Une fonction pour ajouter le produit avec le nom , la quantite , le prix initial et le prix final ajouter()
 *une fonction qui verifie si le produit existe deja dans la side bar ... si oui juste update() sinon ajouter()
 *  une fonction pour update() les info sur la side a chaque modification
 *
 */
var additems = [{'command':"waffle","price":120,"number":0}]

plus_array[0].addEventListener('click',()=>{
  additems[0].number=overlay_array[0].textContent
  let div_info= document.createElement('div')
  let price__=additems[0]['price']*additems[0]["number"]
  div_info.innerHTML=''
  div_info.innerHTML=`<h1>${additems[0].command}</h1> <tab> <p>* ${additems[0].number}</p>
  price : ${price__}`
  Aside__orderList.appendChild(div_info)
})
// btn.forEach((element,index) => {
//     element.addEventListener('click',()=>
//     {
//         is_clicked(element,index)
       
//     })
// })

// var is_clicked =(element,index)=>{
//       if(element.classList.contains(`clicked`+index))
//         {
//           let actual=parseInt( element.textContent)
//           element.innerHTML= update_btn_content(actual)
//         }
//         else{
//              order=0
//              element.classList.add(`clicked`+index)
//              Desserts_image_set[index].style.border="3px solid orange"
//              element.style.background="orange"
//               element.innerHTML=
//              update_btn_content(order)
//         }

// }
// var update_btn_content  = (order_num)=>{ 
//     return(
//      `<div>
//         <span>${++order_num}</span>
//    </div>`   
//     )
// }