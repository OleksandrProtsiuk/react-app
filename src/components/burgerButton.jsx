import React, {Component} from 'react';
import { connect } from 'react-redux';

class BurgerButton extends Component {

    openMenu = () => {
        let data = "visible";
        this.props.dispatch({
            type: "OPEN_MENU",
            data
        });
    };

    render() {
        return (
            <div className={"Burger"} onClick={this.openMenu}>
                <p>
                    &#9776;
                </p>
            </div>
        );
    }
}

export default connect() (BurgerButton);
