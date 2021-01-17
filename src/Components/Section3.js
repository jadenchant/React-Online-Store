import React from 'react';
import axios from 'axios';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: props.name,
            products: {}
        }
    }

    componentDidMount() {
        const productsPaths = "./Products/" + this.state.productList + ".json";

        axios.get(productsPaths)
        // .then(res => console.log(res.data))
        .then(res =>
            this.setState({
                products: res.data
            })
        )
        .catch((err) => {console.log(err)});
    }

    render() {
        // console.log(this.state.products.list[0].name);
        return (
            <div className={this.state.productList}>
                <p>{this.state.products.data}</p>
                
            </div>
        );
    }
}

export default Section;