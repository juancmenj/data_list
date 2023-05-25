import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { routeCodes } from "./routesConfig";
//views
import Homepage from "../views/homepage";
import NotFound from "../views/notFound";
import Dashboard from "../views/user/dashboard";
import Activity from "../views/user/activity";

Router.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  isOpenDrawer: PropTypes.bool
};

function Router(props = {}) {
  return (
    <Routes>
      <Route exact path={routeCodes.HOMEPAGE} element={<Homepage {...props} />} />
      <Route exact path={routeCodes.DASHBOARD} element={<Dashboard {...props} />} />
      <Route exact path={routeCodes.USER_ACTIVITY} element={<Activity {...props} />} />
      <Route exact path={routeCodes.ACTIVITY} element={<Activity {...props} />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default Router;
