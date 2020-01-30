import React, {Component} from 'react';
import SideBar from "./sideBar";
import FaceBar from "./facebar";
import Content from "./content";

class MainPage extends Component {
    render() {
        return (
            <div className={"MainPage"}>
                <div className={"wrapper"}>
                    <SideBar />
                    <FaceBar />
                    <Content />
                </div>
            </div>
        );
    }
}

export default MainPage;
