import React, { Component } from 'react'

export default class RightMenu extends Component {
    render() {
        return (
            <div className="rightmenu">
                <div  >
                <h3>Login</h3>
                Email <input type="text"></input>
                Password <input type="password"></input>
                <button value=" " type="submit">SUBMIT</button>
                <button value="" >Create Account</button>
                </div>
            </div>
        )
    }
}
