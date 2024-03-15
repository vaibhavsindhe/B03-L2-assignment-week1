let products=[
    {
        id:"0",
        img:"Image (1).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,
    },
    {   
        id:"1",
        img:"Image (2).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:"$39",

    },
    {
        id:"2",
        img:"Image (3).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,

    }, 
    {
        id:"3",
        img:"Image (4).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,

    },   
    {
        id:"4",
        img:"Image (5).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,

    },
    {
        id:"5",
        img:"Image (6).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:"$39",

    },   
     {
        id:"6",
        img:"Image (7).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,

    },  
    {
        id:"7",
        img:"Image (8).png",
        name:"Library stool chair",
        price:"$20",
        originalprise:null,

    }
];

let productsInCart=[];

let main=document.querySelector(".main");
for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        main.appendChild(rowDiv);
    }

    let currentRow = main.lastChild;
    currentRow.appendChild(createProduct(products[i],true));
}

function createProduct(data,include){
    if(data==null){
        return null;
    }
   let productDiv=document.createElement("div");

    //img
   let img=document.createElement("img");
   img.src=data.img;
   
   let productInfo=document.createElement("div");
   //name
   let name=document.createElement("p");
   name.innerText=data.name;
   //price
   let price=document.createElement("div");
   price.classList.add("price");
   let currentPrice=document.createElement("p");
   let oldPrice=document.createElement("p");
   currentPrice.innerText=data.price;
   if(data.originalprise){
    oldPrice.innerText=data.originalprise;
   }
   price.appendChild(currentPrice);
   price.appendChild(oldPrice);
   //Add-To-cart-button

   let cartBtnDiv=document.createElement("div");
   cartBtnDiv.classList.add("cartBtnDiv");
   cartBtnDiv.setAttribute("id",data.id);
   let cartBtn=document.createElement("i");
   if(include){
    cartBtn.classList.add("fa-solid");
    cartBtn.classList.add("fa-cart-shopping");
    cartBtnDiv.classList.add("add");
   }
   else{
    cartBtn.innerText="X";
    cartBtnDiv.classList.add("remove");
   }
   cartBtnDiv.appendChild(cartBtn);

   


   productInfo.appendChild(name);
   productInfo.appendChild(price);
   
   let discription=document.createElement("div");
   discription.classList.add("discription");
   discription.appendChild(productInfo);
   discription.appendChild(cartBtnDiv);

   productDiv.appendChild(img);
   productDiv.appendChild(discription);

   main.appendChild(productDiv);
   return productDiv;

}

let addToCart=document.querySelectorAll(".add");
addToCart.forEach((btn)=>{
    btn.addEventListener("click",addProduct);
})

function addProduct(){
   productsInCart.push(products[this.id]);
//    console.log(productsInCart);
   updateCart();
   updateCartSummery();
}

function updateCart(){
    let cartDiv=document.querySelector(".cart");
 
    for (let i = 0; i < productsInCart.length; i++) {
        if(!productsInCart[i].added){
            if (i % 4 === 0) {
                let rowDiv = document.createElement("div");
                rowDiv.classList.add("row");
                cartDiv.appendChild(rowDiv);
            }
            let currentRow = cartDiv.lastChild;
            currentRow.appendChild(createProduct(products[i],false));
            productsInCart[i].added=true;
        }
    }

    activateRemove();
}
function updateCartSummery(){
    let avg=0;
    for(let i=0;i<productsInCart.length;i++){
        let priceString = products[i].price.replace(/\D/g, ''); 
        avg+=parseFloat(priceString);
    }
    avg=avg/productsInCart.length;
    document.querySelector(".avg-prize").innerText=`$ ${avg}`
}

function activateRemove(){
//     let removeBtns=document.querySelectorAll(".remove");
//     removeBtns.forEach((remove)=>{
//         remove.addEventListener("click",()=>removeProduct(remove.id));
//     });

// }
// function removeProduct(id){
//     productsInCart.forEach((pr)=>{
//         console.log(id)
//         console.log(pr.id);
//     })
}

document.querySelector(".clear-cart").addEventListener("click",()=>{
    productsInCart=null;
    updateCart();
})

