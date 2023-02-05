import Post from './Post/Post';
import Button from '../share/Button/Button';

import styles from './Posts.module.scss';

const Posts = () => {

    let posts = [
        {
            id: '1',
            username: 'Big Bull',
            message: 'I love history'
        },
        {
            id: '2',
            username: 'Bred Borns',
            message: 'Trevelling is my live'
        },
    ]

    return (
        <div>
            <div className={styles.title}>My posts</div>
            <div className={styles.field}>
                <textarea className={styles.input}></textarea>
                <Button text="Отправить" />
            </div>
            
            <ul className="list">
                {posts.map((item) => {
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