import React from 'react'
import { FaCartArrowDown, FaRegHeart, FaUser } from "react-icons/fa";

function TopBar() {
    return (
        <nav className="navbar is-transparent">

                <div id="navbarExampleTransparentExample" className="navbar-menu is-align-items-center">
                    <div className="navbar-start">
                        <div class="field">
                            <p class="control">
                                <input class="input" type="text" placeholder="Search"/>
                            </p>
                        </div>
                    </div>
                    <div className="navbar-brand">
                        <a className="navbar-item brand" href="https://bulma.io">
                        SHOPPERS
                        </a>
                    </div>
                    <div className="navbar-end">
                        <span class="icon">
                            <FaUser/>
                        </span>
                        <span class="icon">
                        <FaRegHeart/>
                        </span>                    
                        <span class="icon">
                        <FaCartArrowDown/>
                        </span>                    
                    </div>
                </div>
        </nav>
    )
}

export default TopBar
