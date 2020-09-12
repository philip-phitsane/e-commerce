import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <h3><i class="fa fa-search" aria-hidden="true"> Filter Search</i></h3>
                <hr></hr>
                <div class="filter-search">
                Make {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>TOYOTA</option>
                    <option>NISSAN</option>
                    <option>HONDA</option>
                    <option>MITSUBISHI</option>
                    <option>SUBARU</option>
                    <option>MAZDA</option>
                    <option>SUZUKI</option>
                    <option>ISUZU</option>
                    <option>DAIHATSU</option>
                   </select>

                   Model {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>ALCYONE SVX</option>
                    <option>BRZ</option>
                    <option>DEX</option>
                    <option>DIAS WAGON</option>
                    <option>EXIGA</option>
                    <option>EXIGA CROSSOVER</option>
                    <option>FORESTER</option>
                    <option>IMPREZA</option>
                    <option>IMPREZA ANESIS</option>
                   </select>

                   Year {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                   </select>
                   to {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                   </select>

                   Type {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                    <option>SUV</option>
                    <option>Mini van</option>
                    <option>Van</option>
                    <option>Truck</option>
                    <option>Wagon</option>
                    <option>Coupe</option>
                    <option>Mini vehicle</option>
                   </select>

                   Type {" "}
                   <select value="" Onchange="">
                    <option>Select</option>
                    <option>Left</option>
                    <option>Right</option>
                   </select>
                </div>
            </div>
        )
    }
}
