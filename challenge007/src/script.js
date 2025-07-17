/** Select HTML element  */

const Desserts_image_set = document.querySelectorAll('.Card1>img,.Card2>img,.Card3>img,.Card4>img,.Card5>img,.Card6>img,.Card7>img,.Card8>img,.Card9>img')
const btn = document.querySelectorAll('.Card1 .Add_to_cart_btn,.Card2 .Add_to_cart_btn,.Card3 .Add_to_cart_btn, .Card4 .Add_to_cart_btn, .Card5 .Add_to_cart_btn,.Card6 .Add_to_cart_btn,.Card7 .Add_to_cart_btn,.Card8 .Add_to_cart_btn,.Card9 .Add_to_cart_btn')
const overlay_array = document.querySelectorAll('.Card1>.overlay,.Card2 .overlay, .Card3>.overlay, .Card4>.overlay, .Card5>.overlay,.Card6>.overlay,.Card7>.overlay,.Card8>.overlay,.Card9>.overlay')
const plus_array = document.querySelectorAll('.Card1 .add_items,.Card2 .add_items, .Card3 .add_items, .Card4 .add_items, .Card5 .add_items,.Card6 .add_items,.Card7 .add_items,.Card8 .add_items,.Card9 .add_items')
const minus_array = document.querySelectorAll('.Card1 .remove,.Card2 .remove, .Card3 .remove, .Card4 .remove, .Card5 .remove,.Card6 .remove,.Card7 .remove,.Card8 .remove,.Card9 .remove')
const order_quantity = document.querySelectorAll('.Card1 .Quantity,.Card2 .Quantity, .Card3 .Quantity, .Card4 .Quantity, .Card5 .Quantity,.Card6 .Quantity,.Card7 .Quantity,.Card8 .Quantity,.Card9 .Quantity')
const Aside__orderList= document.querySelector('aside')
const aside_img_text=document.querySelector('#aside_img_emptyProdPara')

/* Changing image product border to Orange */
btn.forEach((button,index_btn)=>{
  button.addEventListener('click',()=>{
      Array.from(overlay_array)[index_btn].classList.add('overlay_state')
      Desserts_image_set[index_btn].style.border= "3px solid orange"

  })
})

/** Handle plus and minus icons to update ordered product number  */
plus_array.forEach((plus_image,index_img)=>{
   let span = Array.from(order_quantity)[index_img]
   plus_image.addEventListener('click',()=>{
    is_plus_or_minus(plus_image,span)
    product__add_preview(index_img,parseFloat(span.textContent))
  })
  
})
minus_array.forEach((minus_image,index_img)=>{
  let span = Array.from(order_quantity)[index_img]
  minus_image.addEventListener('click',()=>{
  is_plus_or_minus(minus_image,span)
  product__add_preview(index_img,parseFloat(span.textContent))

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
  if(old__quantity<=1){
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

/** Aside Bar preview after add or remove product  */
var ITEMS =[
    {
       
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
       
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]
var Is_items__add = []

const product__add_preview = (index,product_qte)=>
{
  is__product_in_list(index,product_qte)
}


const is__product_in_list =(index,prod)=>{
if(!Is_items__add.includes(index)){
  var div = document.createElement('div')
  div.classList.add(`showed_prod`)
  
  Is_items__add.push(index)
  div.innerHTML=return_prod_added_info(ITEMS,prod,index)
  Aside__orderList.appendChild(div) 
  add_newprod_info_to_ITEMS(index,div)
}

else{
  ITEMS[index].contentDiv.innerHTML=return_prod_added_info(ITEMS,prod,index)
}
}
const add_newprod_info_to_ITEMS=(prod_index,prod_info)=>{
    ITEMS[prod_index].contentDiv=prod_info
    aside_img_text.style.display='none'

}

const return_prod_added_info=(ProductList, orderprod_num,index)=>{
  return ("<div class=\"w-fit   \"><h1 class=\"font-semibold\">"+ProductList[index].name+`</h1><div class="product"+${index}">
  <span class=" text-MyRed">${orderprod_num}x</span>
  <span class="actual_price  pl-[7.5%] text-gray-500 ">@${ProductList[index].price}&dollar;</span>
  <span class="calculate_price pl-[7.5%] text-gray-700 font-semibold">${ProductList[index].price * orderprod_num}&dollar;</span></div></div> <img src="../assets/images/icon-remove-item.svg" id="cross${index}" class=\"border-2  rounded-xl h-[20px]\">`)
}

/**Cross close implementation */
document.addEventListener('click', function (event) {
  const target = event.target;
  
  if (!target || !target.id.startsWith('cross')) return;

  const index = parseInt(target.id.replace('cross', ''));
  const product = ITEMS[index];

  if (!product?.contentDiv) return;

  product.contentDiv.remove();
  Is_items__add = Is_items__add.filter(i => i !== index);
  delete product.contentDiv;

  aside_img_text.style.display = Is_items__add.length === 0 ? 'block' : 'none';
  overlay_array[index].classList.remove('overlay_state');
  btn[index].style.display = 'flex';
  Desserts_image_set[index].style.border = 'none';
  order_quantity[index].textContent = '1';
});

