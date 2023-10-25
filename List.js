import React from 'react';
function List(props){
    return(
        <div>
            <h2>ProductList</h2>
            <ul>

                {props.Products.map((product)->(
                    <li key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={()=> props.addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default List;