const Sidebar = () => {
    return(
        <div className="root">
            <ul className="nav">
                <li className="nav__item">
                    <a href="#">Profile</a>
                </li>
                <li className="nav__item">
                    <a href="#">Messages</a>
                </li>
                <li className="nav__item">
                    <a href="#">News</a>
                </li>
                <li className="nav__item">
                    <a href="#">Music</a>
                </li> 
            </ul>
        <ul className="menu">
            <li className="menu__item">
                <a href="#">Settings</a>
            </li>
        </ul>
        </div>
    );
}

export default Sidebar;