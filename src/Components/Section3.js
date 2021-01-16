import React from 'react';
import axios from 'axios';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: props.name,
            products: []
        }
    }

    componentDidMount() {
        const productsPaths = "./Products/" + this.state.productList + ".json";

        axios.get(productsPaths)
        .then(res => res.data)
        .then(res => console.log(res.data))
        .then(({ data }) => {
            this.setState({
                products: data.data.children
            });
        })
        .catch((err) => {console.log(err)});
    }

    render() {
        return (
            <div className={this.state.productList}>
                {/* {products.list[0].name} */}
            </div>
        );
    }
}

export default Section;