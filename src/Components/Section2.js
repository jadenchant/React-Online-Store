import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/sections.css';

const Section=(props) => {
    const [err, setErr] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState(null);
    const [productName] = useState(props.name);

    useEffect(() => {
        if(products === null) {
            const productsPaths = './Products/' + productName + 'json';
            axios.get(productsPaths)
            .then(res => res.data)
            .then( (res) => {
                setIsLoaded(true);
                setProducts(res);
                console.log(res);
            })
            .catch( (error) => {
                setIsLoaded(true);
                setErr(error);
                console.log(error);
            });
        }
    }, [products, productName]);

    if(err) {
        return <div>Error: {err.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else if(!products) {
        return <div>Null Products</div>;
    } else {
        const items = products.list.map((item) =>
            <li className='item' key={item.id.toString()}>
                <img className='item-img' src={item.img} alt={item.name} />
                <h4 className='item-name'>{item.name}</h4>
                <h5 className='item-price'>{item.price}</h5>
            </li>
        );
        return (
            <div className="section">
                <h2 className='title'>{props.name}</h2>
                <ul className={props.name}>
                    {items}
                </ul>
            </div>
        );
    }
}

export default Section;