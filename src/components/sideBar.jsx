import React, {Component} from 'react';
import BurgerButton from "./burgerButton";

class SideBar extends Component {
    render() {
        return (
            <div className={"SideBar"}>
                <BurgerButton />
                <div className={"SideMenu"}>
                    <img src="./about.png" alt={'Icon'} width={"32"} className={"SideBarIconActive"}/>
                    <img src="./facebook.png" alt={'Icon'} width={"32"} className={"SideBarIcon"}/>
                    <img src="./facebook.png" alt={'Icon'} width={"32"} className={"SideBarIcon"}/>
                    <img src="./facebook.png" alt={'Icon'} width={"32"} className={"SideBarIcon"}/>
                </div>
            </div>
        );
    }
}

export default SideBar;