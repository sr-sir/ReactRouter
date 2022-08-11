import React, { Component } from "react";
import AuthRoute from '../utils/AuthRoute'
import Page5 from "./page5";

class Page2 extends Component {

    handleClick = () => {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                Page2
                <button onClick={() => this.handleClick()}>跳转Page3</button>
                <AuthRoute>
                    <Page5 />
                </AuthRoute>
            </div>
        )
    }
}
export default Page2