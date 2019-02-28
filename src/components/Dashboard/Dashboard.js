import React, {Component} from 'react';

import Product from '../Product/Product'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appList : [],
        }
    }



    render() {

        return (
            <div>
                <h1>Dashboard</h1>
                <Product />
            </div>
        )
    }
}