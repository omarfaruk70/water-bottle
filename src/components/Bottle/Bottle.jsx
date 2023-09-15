import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {category, name, img, id, price} = bottle
    // console.log(bottle)
    return (
        <div className="product-container">
            <h2>product Category: {category} </h2>
            <img src={img} alt="" />
            <p>Product Id:  {id}</p>
            <h4>Bottle Brand: {name}</h4>
            <h5>price: {price}</h5>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;