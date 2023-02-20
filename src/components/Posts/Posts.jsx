import React from 'react';
import Post from './Post/Post';
// import Button from '../share/Button/Button';

import styles from './Posts.module.scss';

const Posts = (props) => {
    const textInput = React.createRef(); 

    let getPost = () => {
        props.addPost(textInput.current.value)
        textInput.current.value = '';
    };

    return (
        <div>
            <div className={styles.title}>My posts</div>
            <div className={styles.field}>
                <textarea ref={textInput} className={styles.input}></textarea>
                <button onClick={getPost}>Отправить</button>
                {/* <Button  text="Отправить" /> */}
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