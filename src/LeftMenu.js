import React, { Component } from 'react'

export default class LeftMenu extends Component {
    render() {
        return (
            <div className="leftmenue">
                <div className="shopbymake" >
                    <h4>Shop By Make</h4>
                    <ul>
                        <li><a href="#">TOYOTA</a></li>
                        <li><a href="#">HONDA</a></li>
                        <li><a href="#">NISSAN</a></li>
                        <li><a href="#">MITSUBISHI</a></li>
                        <li><a href="#">SUZUKI</a></li>
                        <li><a href="#">MAZDA</a></li>
                        <li><a href="#">SUBARU</a></li>
                        <li><a href="#">MERCEDEZ-BENZ</a></li>
                        <li><a href="#">BMW</a></li>
                        <li><a href="#">VOLKSWAGEN</a></li>
                        <li><a href="#">ISUZU</a></li>
                    </ul>
                </div>
                <div className="shopbytype" >
                    <h4>Shop By Type</h4>
                    <ul>
                        <li><a href="#">SUV</a></li>
                        <li><a href="#">SEDAN</a></li>
                        <li><a href="#">WAGON</a></li>
                        <li><a href="#">HATCHBACK</a></li>
                        <li><a href="#">SUZUKI</a></li>
                        <li><a href="#">SPORT</a></li>
                        <li><a href="#">MINI BUS</a></li>
                        <li><a href="#">BUS</a></li>
                        <li><a href="#">PICK-UP</a></li>
                        <li><a href="#">UTILITY VAN</a></li>
                        <li><a href="#">TRUCK</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
