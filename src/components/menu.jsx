import React, {Component} from 'react';
import {connect} from "react-redux";

class Menu extends Component {

    closeMenu = () => {
        let data = "hidden";
        this.props.dispatch({
            type: "OPEN_MENU",
            data
        });
    };


    render() {
        return (
            <>
                <div className={"BurgerMenu"}
                     style={{visibility: this.props.visibility}}
                >
                    <div
                        className={"CloseMenuButton"}
                        onClick={this.closeMenu}
                    >
                        <p>&#10006;</p>
                    </div>
                    <div className={"BurgerMenuBody"}>
                        <p className={"BurgerMenuBodyElement"}>Some Burger menu</p>
                        <p className={"BurgerMenuBodyElement"}>Some Burger menu</p>
                        <p className={"BurgerMenuBodyElement"}>Some Burger menu zdndf dfdfhdf dfbfdnfggf dsfbfgsffsfdv dffdggsfdg</p>
                        <a className={"BurgerMenuBodyElement"} href={"https://google.com"} >Google</a>
                    </div>
                </div>
                <div className={"BurgerMenuBackground"}
                     style={{visibility: this.props.visibility}}
                     onClick={this.closeMenu}
                >
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visibility: state.visibility
    }
};

export default connect(mapStateToProps) (Menu);
