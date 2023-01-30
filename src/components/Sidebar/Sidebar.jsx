const Sidebar = () => {
    return(
        <div className="root">
            <ul className="nav">
                <li className="nav__item">Profile</li>
                <li className="nav__item">Messages</li>
                <li className="nav__item">News</li>
                <li className="nav__item">Music</li> 
            </ul>
        <ul className="menu">
            <li className="menu__item">Settings</li>
        </ul>
        </div>
    );
}

export default Sidebar;