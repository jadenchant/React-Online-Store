import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [productID, setProductID] = useState({ id: [] });
    const [productName, setProductName] = useState({ name: [] });
    const [productIMG, setProductIMG] = useState({ img: [] });
    const [productPrice, setProductPrice] = useState({price: []});
    const productsPaths = "./Products/" + props.name + ".json";
    // const numProducts = 6;

    useEffect(() => {
        axios.get(productsPaths)
        // .then(res => console.log(res.data))
        .then(
            (result) => {
                setIsLoaded(true);
                setProductID(result.data.list.id);
                setProductName(result.data.list);
                setProductIMG(result.data.list);
                setProductPrice(result.data.list);
                console.log(productID);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
        
    });

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