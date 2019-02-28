import React, {Component} from 'react';

import Product from '../Product/Product'


export default class Dashboard extends Component {


    render() {
        const prodList = this.props.list.map((prod, index) => (
            <Product prod={prod} key={index} />
        ))

        return prodList;
    }
}