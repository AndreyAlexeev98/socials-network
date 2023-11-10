const ADD_POST = "ADD-POST";
const POSTCHANGE = "POST-CHANGE";

const store = {
  _callSubscriber() {
    console.log("state changed");
  },
  _state: {
    profile: {
      userData: {
        title: "Andrey Alexeich",
        date_of_birth: "2 junary",
        city: "Kursk",
        education: 'KGU "16',
        web_site: "www.ya.com",
      },
      posts: [
        {
          id: "1",
          username: "Big Bull",
          message: "I love history",
        },
        {
          id: "2",
          username: "Bred Borns",
          message: "Trevelling is my live",
        },
      ],
      newPostText: "",
    },
    messages: {
      messages: [
        { id: "1", text: "Hi me dear friend, how tiy do???" },
        { id: "2", text: "By by, good look!" },
      ],

      chats: [
        {
          id: "1",
          name: "Reece James ",
          preview: "Hi me dear friend...",
          avatarPath:
            "https://netstorage-sportsbrief.akamaized.net/images/7acca23b41945040.jpg?&amp;imwidth=600",
        },
        {
          id: "2",
          name: "William Gallas",
          preview: "Im strooong...",
          avatarPath:
            "https://cdn.images.dailystar.co.uk/dynamic/122/photos/707000/900x738/718707.jpg",
        },
        {
          id: "3",
          name: "Ronaldinho Gaucho",
          preview: "Lets play again???",
          avatarPath:
            "https://www.fonstola.ru/images/201605/fonstola.ru_231844.jpg",
        },
      ],
    },
    sidebar: {
      nav: [
        { id: 1, name: "Profile", link: "/" },
        { id: 2, name: "Messages", link: "/messages" },
      ],
      menu: [{ id: 1, name: "Settings", link: "/settings" }],
      favorites_contact: {
        title: "Favorites Contact",
        list: [
          {
            id: 1,
            name: "Rooney",
            img: "https://euro2016.soccer.ru/sites/default/files/wp2833556.jpg",
            dialog: "/message/id",
          },
          {
            id: 2,
            name: "Sterling",
            img: "https://i.sprts.ru/preset/wysiwyg/2/e5/edab0e1c711ecbf23e736ceeaeebc.jpeg",
            dialog: "/message/id",
          },
          {
            id: 3,
            name: "Garcia",
            img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb70a45567da4a59d/62fa6c64f9340e1086f71941/GettyImages-52458163.jpg",
            dialog: "/message/id",
          },
        ],
      },
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: "3",
        username: "Alex Ferguson",
        message: this._state.profile.newPostText,
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this.getState());
    }

    if (action.type === POSTCHANGE) {
      this._state.profile.newPostText = action.value;
      this._callSubscriber(this.getState());
    }
  },
};

export const getPostActionCreater = () => ({ type: ADD_POST });
export const onPostChangeActionCreater = (value) => ({
  type: POSTCHANGE,
  value: value,
});

export default store;
window.store = store;
