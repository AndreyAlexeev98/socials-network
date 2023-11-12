const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
