// first have a check cart have or not 
const getStoredCard = () =>{
   const storedCartString =  localStorage.getItem('cart') ;
   if(storedCartString){
    return JSON.parse(storedCartString)
   }
   return [];
};

// save to LocalStorage
const saveCartToLS = (cart) =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

// add to localStorage
const addToLs = (id) =>{
    const cart = getStoredCard();
    cart.push(id); 
    //set it to ls
    saveCartToLS(cart)
}

export {addToLs, getStoredCard}