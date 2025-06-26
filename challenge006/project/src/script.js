//Select Elements 

const price_Monthly_Array = document.querySelectorAll("#Basic_ID header , #Pro_ID header, #Master_ID header ")
const switch_btn =document.querySelector(".switch_btn")
const switch_btn_cicrcle =document.querySelector(".switch_btn_Circ")
const proCard_Id= document.querySelector('#pro')

// Previous and new Data Price: repectively Previous_Data and MAJData

const Previous_Data=[
    {Type: "Basic",prix:"19.99"},
    {Type: "Professional",prix:"24.99"},
    {Type: "Master",prix:"39.99"},
    
]
const MAJData = [
    {Type: "Basic",prix:"199.99"},
    {Type: "Professional",prix:"249.99"},
    {Type: "Master",prix:"399.99"},
]


// Event Listener  
switch_btn.addEventListener('click',()=>
{   
    switch_btn_cicrcle.classList.toggle('slide')
    price_Monthly_Array.forEach((element,index)=>{
    switch_btn_cicrcle.classList.contains('slide')? element.innerHTML= DisplayPrices(MAJData,index) : element.innerHTML= DisplayPrices(Previous_Data,index)                                              })
})

//Arrow function to display result
const DisplayPrices = (PriceArray,index)=>{
   return (` 
    <header id="pro">
      <h2>
        <span>${PriceArray[index].Type}</span>
        <span class="Price">&dollar;${PriceArray[index].prix}</span>
      </h2>
    </header>
    `)
}
