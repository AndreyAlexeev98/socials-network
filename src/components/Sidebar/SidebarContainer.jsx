import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
  return {
    nav: state.sidebar.nav,
    menu: state.sidebar.menu,
    favorites_contact: state.sidebar.favorites_contact,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
