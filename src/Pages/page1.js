import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

class Page1 extends Component {
    handleClick = () => {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                Page1
                <Link to="/page2">
                    Page2
                </Link>
                <button onClick={() => this.handleClick()}>跳转Page5</button>
            </div>
        )
    }
}
export default Page1