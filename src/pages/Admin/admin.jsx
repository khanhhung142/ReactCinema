import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import "./template.scss";
import "./custom.scss";
import SideNav from "./components/SideNav";
import SideNavFooter from "./components/Footer/SideNavFooter";
import NowPlayingList from "./components/Movie/FilmList";
import AddNowPlayingMovie from "./components/Movie/AddFilm";
import TheaterList from "./components/Theater/TheaterList";
import AddTheater from "./components/Theater/AddTheater";
import NewsList from "./components/News/NewsList";
import AddNews from "./components/News/AddNews";
import AddShowTime from "./components/ShowTime/AddShowTime";
import ShowTimeList from "./components/ShowTime/ShowTimeList";

Admin.propTypes = {};

function Admin(props) {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  let adminClasses = "sb-nav-fixed admin-custom admin-template";

  if (toggled) {
    adminClasses += "sb-sidenav-toggled";
  }

  return (
    <div className={adminClasses}>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">
          ADMIN
        </a>
        <button
          onClick={handleToggle}
          className="btn btn-link btn-sm order-1 order-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"></div>
        <ul className="navbar-nav ml-auto ml-md-0">
          <a className="nav-link dropdown-toggle">
            <i className="fas fa-user fa-fw"></i>
          </a>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <SideNav />

        <div id="layoutSidenav_content">
          <main>
            <Switch>
              <Route exact path="/admin">
                <AdminDashboard />
              </Route>
              <Route exact path="/admin/film">
                <NowPlayingList />
              </Route>
              <Route exact path="/admin/add-film">
                <AddNowPlayingMovie />
              </Route>
              <Route exact path="/admin/theater">
                <TheaterList />
              </Route>
              <Route exact path="/admin/add-theater">
                <AddTheater />
              </Route>
              <Route exact path="/admin/news">
                <NewsList />
              </Route>
              <Route exact path="/admin/add-news">
                <AddNews />
              </Route>
              <Route exact path="/admin/showtime">
                <ShowTimeList />
              </Route>
              <Route exact path="/admin/add-showtime">
                <AddShowTime />
              </Route>
            </Switch>
          </main>
          <SideNavFooter />
        </div>
      </div>
    </div>
  );
}

export default Admin;
