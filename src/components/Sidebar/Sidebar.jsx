import { NavLink } from "react-router-dom";
import FavoriteContacts from "../FavoriteContacts/FavoriteContacts";

const Sidebar = (props) => {
    return(
        <div className="root">
            <ul className="nav">
                { 
                    props.sidebar.nav.map( (item) => (
                        <li className="nav__item" key={item.id}>
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="menu">
                {
                    props.sidebar.menu.map( (item) => (
                        <li className="menu__item" key={item.id}>
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <div>
                <FavoriteContacts data={props.sidebar.favorites_contact}  />
            </div>
        </div>
    );
}

export default Sidebar;