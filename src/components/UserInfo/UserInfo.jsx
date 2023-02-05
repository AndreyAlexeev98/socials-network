import avatar from '../../media/img/avatar.jpg';
import styles from './UserInfo.module.scss';


const UserInfo = () => {

    let userData = {
        title: 'Andrey Alexeich',
        date_of_birth: '2 junary',
        city: 'Kursk',
        education: 'KGU "16',
        web_site: 'www.ya.com'
    }

    return(
        <div className={styles.root}>
            <img src={avatar} alt="user avatar" className={styles.avatar} />
            <div className="user_info">
                <div className="title">{userData.title}</div>
                <div className="description">
                    <div className="row">
                    <span>Date of birth: </span>
                    <span>{userData.date_of_birth}</span>
                    </div>
                    <div className="row">
                    <span>city: </span>
                    <span>{userData.city}</span>
                    </div>
                    <div className="row">
                    <span>Education: </span>
                    <span>{userData.education}</span>
                    </div>
                    <div className="row">
                    <span>Web Site: </span>
                    <span>{userData.web_site}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;