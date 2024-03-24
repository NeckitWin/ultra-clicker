import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav className={s.menu}>
                <NavLink to='/'>S.T.A.L.K.E.R.</NavLink>
                <nav>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </nav>
            </nav>
        </header>
    )
}

export default Header;