import { connect } from "react-redux";
import {
  addMessageActionCreater,
  changeNewMessageActionCreater,
} from "../../redux/messages-reducer";
import MessagesPage from "./MessagesPage";

const mapStateToProps = (state) => {
  return {
    chats: state.messages.chats,
    messages: state.messages.messages,
    newMessage: state.messages.newMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(changeNewMessageActionCreater(e.target.value));
    },
    onClick: (e) => {
      const message = e.target.value;
      dispatch(addMessageActionCreater(message));
    },
  };
};

const MessagesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesPage);

export default MessagesPageContainer;
