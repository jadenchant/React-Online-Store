import React, { useState } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState(null);
    const productsPaths = "./Products/" + props.name + ".json";
    // const numProducts = 6;

    if(!products) {
        axios.get(productsPaths)
        .then(res => console.log(res.data))
        .then(
            (result) => {
                setIsLoaded(true);
                setProducts()
                console.log(productID);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }
    


    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={props.name}>
                {/* {productID} */}
            </div>
        );
    }
}

export default Section;