import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
