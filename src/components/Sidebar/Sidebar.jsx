import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="root">
            <ul className="nav">
                <li className="nav__item">
                    <NavLink to='/'>Profile</NavLink>
                    {/* <a NavLi href="#">Profile</a> */}
                </li>
                <li className="nav__item">
                    <NavLink to='/messages'>Messages</NavLink>
                    {/* <a href="#">Messages</a> */}
                </li>
                <li className="nav__item">
                    {/* <a href="#">News</a> */}
                </li>
                <li className="nav__item">
                    {/* <a href="#">Music</a> */}
                </li> 
            </ul>
        <ul className="menu">
            <li className="menu__item">
                {/* <a href="#">Settings</a> */}
            </li>
        </ul>
        </div>
    );
}

export default Sidebar;