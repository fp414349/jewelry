const ProductSmallBasket=({itemToShow})=>{
    let sumProduct=itemToShow.price*itemToShow.qty
     return(
        <div>
            <h4>{itemToShow.name}</h4>
            <h4>מחיר:{itemToShow.price}</h4>
            <h4>כמות:{itemToShow.qty}</h4>
            <h4>מחיר סה"כ:{sumProduct}</h4>        
        </div>
        
     )
}
export default ProductSmallBasket;