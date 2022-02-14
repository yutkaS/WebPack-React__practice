import React from 'react';
import style from './header.scss';

console.log(style);

const Header = () => (
    <header className={style.header}>
        <h2 className={style.header__heading}>WebPack Landing</h2>
        <ul className={style.header__list}>
            <li className={style.header__listItem}>
                <a href="#" className={style.header__listLink}>
                    Info
                </a>
            </li>
            <li className={style.header__listItem}>
                <a href="#" className={style.header__listLink}>
                    Examples
                </a>
            </li>
            <li className={style.header__listItem}>
                <a href="#" className={style.header__listLink}>
                    Plugins
                </a>
            </li>
        </ul>
    </header>
)
export default Header;