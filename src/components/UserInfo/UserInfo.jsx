import styles from "./UserInfo.module.scss";
import { Loader } from "../../components/share";
import avatarPlaceholderIcon from "../../assets/img/avatar-placeholder.png";
import facebookIcon from "../../assets/img/facebook.svg";
import githubIcon from "../../assets/img/github.svg";
import vkIcon from "../../assets/img/vkontakte.svg";

const UserInfo = (props) => {
  if (!props.profile.profile) return <Loader />;
  const {
    aboutMe,
    contacts,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    userId,
    photos,
  } = props.profile.profile;

  let reallyContacts = [];
  if (contacts.facebook) {
    reallyContacts.push({ icon: facebookIcon, link: contacts.facebook });
  }
  if (contacts.github) {
    reallyContacts.push({ icon: githubIcon, link: contacts.github });
  }
  if (contacts.vk) {
    reallyContacts.push({ icon: vkIcon, link: contacts.vk });
  }

  return (
    <div className={styles.root}>
      <img
        src={photos.large || photos.small || avatarPlaceholderIcon}
        alt="user avatar"
        className={styles.avatar}
      />
      <div className="user_info">
        <div>
          <span>Имя: </span>
          <span className={styles.title}>{fullName}</span>
        </div>
        <div className="description">
          <div className="row">
            <span>about: </span>
            <span>{aboutMe ? aboutMe : "-"}</span>
          </div>
          <div className="row">
            <span>Ищет работу: </span>
            <span>{lookingForAJob ? "Да" : "нет"}</span>
          </div>
          {lookingForAJobDescription && (
            <div className="row">
              <span>Почему ищет: </span>
              <span>{lookingForAJobDescription}</span>
            </div>
          )}
          <div className="row">
            <span>userId: </span>
            <span>{userId}</span>
          </div>
          <div>
            <div style={{ marginBottom: "20px" }}>Соцсети:</div>
            <div className={styles.socials}>
              {reallyContacts.map((item) => (
                <a
                  href={item.link}
                  key={item.link}
                  className={styles.socials_item}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.icon} alt="socials icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
