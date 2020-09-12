import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


export default class Header extends Component {
    render() {
        return (
            <div className="header" >
                <div className="upper-header" >
                    <div>
                    <h3>Baltic Control</h3>
                    </div>
                    <div>
                    <form>
                        <input value="" type="text" placeholder="search by keyword" ></input> 
                        <button value=""><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    </div>
                    <div className="Country" >
                        Country {" "}
                        <select value="" Onchange="" >
                            <option value="" >Uganda</option>
                            <option value="" >India</option>
                            <option value="" >Pakistan</option>
                            <option value="" >UK</option>
                        </select>
                        </div>
                        <div class="Currency" >
                        Currency {" "}
                        <select value="" Onchange="" >
                            <option value="" >UGX</option>
                            <option value="" >USD</option>
                            <option value="" >EURO</option>
                            <option value="" >POUND</option>
                        </select>
                        </div>
                        <div className="language" >
                        Language {" "}
                        <select value="" Onchange="" >
                            <option value="" >English</option>
                            <option value="" >French</option>
                            <option value="" >Spanish</option>
                            <option value="" >Chinese</option>
                        </select>
                        </div>
                </div>
                <div className="lower-header">
                    <nav>
                    <div><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></div>
                    <div><a href="#">Stocklist</a></div>
                    <div><a href="#">About us </a></div>
                    <div><a href="#">How to buy</a></div>
                    <div><a href="#">Payments</a></div>
                    <div><a href="#">Quality</a></div>
                    <div><a href="#">Contact us</a></div>
                    <div><a href="#">Help <i class="fa fa-question" aria-hidden="true"></i></a></div>
                    </nav>
                </div>
            </div>
        )
    }
}
