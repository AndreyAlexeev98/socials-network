import { NavLink } from 'react-router-dom';

import styles from './FavoriteContacts.module.scss'

const FavoriteContacts = (props) => {
    return (
      <>
        <div className={styles.title}>
          {props.data.title}
        </div>
        <ul className={styles.list}>
          {props.data.list.map( (item) => (
            <li className={styles.item} key={item.id}>
              <NavLink to={item.dialog}>
                <img src={item.img} alt={item.name} />
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
};

export default FavoriteContacts;