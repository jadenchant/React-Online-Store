import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Section=(props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const productsPaths = [
        './Products/suggested.json',
        './Products/popular.json',
        './Products/new.json'
    ];
    useEffect((props) => {
        axios.get(productsPaths[0])
        .then(res => console.log(res.data.suggested))
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
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
    
            </div>
        )
    }
}

export default Section;