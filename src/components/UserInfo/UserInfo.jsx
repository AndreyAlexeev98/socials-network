import avatar from '../../media/img/avatar.jpg';
import styles from './UserInfo.module.scss';


const UserInfo = (props) => {

    return(
        <div className={styles.root}>
            <img src={avatar} alt="user avatar" className={styles.avatar} />
            <div className="user_info">
                <div className="title">{props.userData.title}</div>
                <div className="description">
                    <div className="row">
                    <span>Date of birth: </span>
                    <span>{props.userData.date_of_birth}</span>
                    </div>
                    <div className="row">
                    <span>city: </span>
                    <span>{props.userData.city}</span>
                    </div>
                    <div className="row">
                    <span>Education: </span>
                    <span>{props.userData.education}</span>
                    </div>
                    <div className="row">
                    <span>Web Site: </span>
                    <span>{props.userData.web_site}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;