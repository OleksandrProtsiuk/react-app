import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div className={"Content"}>
                <h1 className={"ContentTitle"}>Hello world!</h1>
                <div className={"ContentLine"}>
                    <div className={"ContentItem"}>
                        Oleksandr / Ukraine / Developer
                    </div>
                </div>
                <div className={"ContentBody"}>
                    <p>
                        This is my PWA App/index<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
                        llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        );
    }
}

export default Content;
