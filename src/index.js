import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let data = {
  userData: {
    title: 'Andrey Alexeich',
    date_of_birth: '2 junary',
    city: 'Kursk',
    education: 'KGU "16',
    web_site: 'www.ya.com'
  },
  
  posts: [
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
  ],
  
  messages: [
    {id: '1', text:'Hi me dear friend, how tiy do???' },
    {id: '2', text:'By by, good look!' }
  ],
  
  chats: [
    {id: '1', name: 'Reece James ', preview: 'Hi me dear friend...', avatarPath: 'https://netstorage-sportsbrief.akamaized.net/images/7acca23b41945040.jpg?&amp;imwidth=600'},
    {id: '2', name: 'William Gallas', preview:'Im strooong...', avatarPath: 'https://cdn.images.dailystar.co.uk/dynamic/122/photos/707000/900x738/718707.jpg'},
    {id: '3', name: 'Ronaldinho Gaucho', preview:'Lets play again???', avatarPath: 'https://www.fonstola.ru/images/201605/fonstola.ru_231844.jpg'}  
  ],
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App userData={data.userData} posts={data.posts} messages={data.messages} chats={data.chats} />
  </React.StrictMode>
);