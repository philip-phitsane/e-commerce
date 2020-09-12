import React, { Component } from 'react'
import Filter from './Filter'
import LeftMenu from './LeftMenu'
import ProductsList from './ProductsList'
import ReviewSection from './ReviewSection'
import RightMenu from './RightMenu'

export default class Main extends Component {
    render() {
        return (
            <div className="main" >
                <div className="separate">
                <div id="left-menu" ><LeftMenu></LeftMenu></div>
                <div id="right-menu"><RightMenu></RightMenu></div>
                <div id="filter"><Filter></Filter></div>
                </div>
                <div id="products-list"><ProductsList></ProductsList></div>
                <div id="review-section"><ReviewSection></ReviewSection></div>
            </div>
        )
    }
}
