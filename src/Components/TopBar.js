import React from 'react'

function TopBar() {
    return (
        <nav className="navbar is-transparent">

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="Search"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="navbar-brand">
                        <a className="navbar-item brand" href="https://bulma.io">
                        SHOPPERS
                        </a>
                    </div>
                    <div className="navbar-end">
                        <span class="icon has-text-info">
                            <i class="fas fa-info-circle"></i>
                        </span>
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>                    
                    </div>
                </div>
        </nav>
    )
}

export default TopBar
