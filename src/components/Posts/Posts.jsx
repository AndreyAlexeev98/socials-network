import Post from './Post/Post';
import Button from '../share/Button/Button';

import styles from './Posts.module.scss';

console.log(styles);

const Posts = () => {
    return (
        <div>
            <div className={styles.title}>My posts</div>
            <div className={styles.field}>
                <textarea className={styles.input}></textarea>
                <Button text="Отправить" />
            </div>
            
            <div className="list">
                <Post message="Hello my friend" username="Big Bull"/>
                <Post message="I like cake" username="Bred Born"/>
            </div>
        </div>
        
    )

};

export default Posts;