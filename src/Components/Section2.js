import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState(null);
    const [productName, setProductName] = useState(props.name);
    // const numProducts = 6;

    useEffect(() => {
        console.log(productName); 
        console.log(products);
        if(!products) {
            const productsPaths = "./Products/" + productName + ".json";
            console.log(productsPaths);
            axios.get(productsPaths)
            .then(res => res.data)
            // .then(res => console.log(res))
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
    }, [products, productName])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={props.name}>
                {products.list[0].name}
            </div>
        );
    }
}

export default Section;