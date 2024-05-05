const ProductBigBasket=({prodToShow})=>{
    console.log({prodToShow});
    
    let sumProduct=prodToShow.price*prodToShow.qty;
    console.log(sumProduct);
    console.log(prodToShow.id);
    //console.log(props.prodToShow.id);

     return(
        <div>
            <h4>{prodToShow.name}</h4>
            <img src={prodToShow.imgUrl}/>
            <h4>מחיר:{prodToShow.price}</h4>
            <h4>כמות:{prodToShow.qty}</h4>
            <h4>מחיר סה"כ:{sumProduct}</h4>   
                 
        </div>
     )
}
export default ProductBigBasket;