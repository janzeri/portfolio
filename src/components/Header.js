import React from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import contact from './ENBody'

const Header = () => {
    return <header>
            <div className="logo">
                <h3>Ryotaro Eguchi</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/portfolio">日本語</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/EN">English</Link>
                    </li>
                </ul>
            </nav>
    </header>
};

export default Header;