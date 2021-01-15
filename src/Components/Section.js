import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const productsPaths = "./Products/" + props.name + ".json";
    const numProducts = 6;

    useEffect(() => {
        axios.get(productsPaths)
        .then(res => console.log(res.data))
        .then(
            (result) => {
                setIsLoaded(true);
                setProducts(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
        
    }, []);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={props.name}>
                {products}
            </div>
        );
    }
}

export default Section;