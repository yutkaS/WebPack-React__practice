import React from 'react';
import './index.scss';

const Header = () => (
    <header className={"header"}>
        <h2 className={"header__heading"}>WebPack Landing</h2>
        <ul className={"header__list"}>
            <li className={"header__list-item"}>
                <a href="#" className={"header__list-item--link"}>
                    Info
                </a>
            </li>
            <li className={"header__list-item"} >
                <a href="#" className={"header__list-item--link"}>
                    Examples
                </a>
            </li>
            <li className={"header__list-item"}>
                <a href="#" className={"header__list-item--link"}>
                    Plugins
                </a>
            </li>
        </ul>
    </header>
)
export default Header;