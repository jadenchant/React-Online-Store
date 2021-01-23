import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState(null);
    const [productName, setProductName] = useState(props.name);
    // const numProducts = 6;

    useEffect(() => {
        // console.log(productName); 
        // console.log(products);
        if(products === null) {
            const productsPaths = './Products/' + productName + '.json';
            console.log(productsPaths);
            axios.get(productsPaths)
            .then(res => res.data)
            .then(
                (res) => {
                    setIsLoaded(true);
                    setProducts(res);
                    console.log(res);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        }
    }, [products, productName]);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(products);
        // const items = products.list.map((item) =>
        //     <li key={item.id.toString()}>
        //         <h4 className='item-name'>{item.name}</h4>
        //         <h5 className='item-price'>{item.price}</h5>
        //         <img className='item-img' src={item.img} alt={item.name} />
        //     </li>
        // );
        return (
            <div className={props.name}>
                <ul>
                    {/* {items} */}
                </ul>
            </div>
        );
    }
}

export default Section;