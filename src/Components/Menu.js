import React from 'react'

function Menu() {
    return (
        <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu is-flex is-align-items-center is-justify-content-center">
                    <div className="navbar-start mr-0">
                        <a className="navbar-item" href="https://bulma.io/">
                            HOME
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                            ABOUT
                            </a>
                            <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                MENU ONE
                            </a>
                            <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                MENU TWO
                            </a>
                            <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                                MENU THREE
                            </a>
                        </div>
                        <a className="navbar-item" href="https://bulma.io/">
                            SHOP
                        </a>
                        <a className="navbar-item" href="https://bulma.io/">
                            CATALOGUE
                        </a>
                        <a className="navbar-item" href="https://bulma.io/">
                            NEW ARRIVALS
                        </a>
                        <a className="navbar-item" href="https://bulma.io/">
                            CONCAT
                        </a>
                    </div>
                </div>

                </div>
            </nav>
        )
}

export default Menu
