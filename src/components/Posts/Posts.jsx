import Post from './Post/Post';
import Button from '../share/Button/Button';

import styles from './Posts.module.scss';

const Posts = (props) => {

    return (
        <div>
            <div className={styles.title}>My posts</div>
            <div className={styles.field}>
                <textarea className={styles.input}></textarea>
                <Button text="Отправить" />
            </div>
            
            <ul className="list">
                {props.posts.map((item) => {
                    return (
                        <li key={item.id}>
                            <Post message={item.message} username={item.username}/>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
        
    )

};

export default Posts;