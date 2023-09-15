import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStoredCard } from "../utilities/localStorage";
import Cart from "../Cart/cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // useEffect for load card from local Storage
  useEffect(() => {
    // console.log("another dependency", bottles.length);
    if (bottles.length > 0) {
      const getStoredCardId = getStoredCard();
      // console.log(getStoredCardId);
      const savedBottle = [];
      for(const id of getStoredCardId){
        // console.log(id);
        const matchesBottle = bottles.find(bottle=> bottle.id === id);
        if(matchesBottle){
          savedBottle.push(matchesBottle)
        }
      }
      // console.log(savedBottle);
      setCart(savedBottle)
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // ei portion e bottle params diye ki jacche ?
    const newcart = [...cart, bottle];
    setCart(newcart);
    addToLs(bottle.id);
    // console.log(bottle.id);
  };

  return (
    <div>
      <h2>Available bottles: {bottles.length}</h2>
      <Cart cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
