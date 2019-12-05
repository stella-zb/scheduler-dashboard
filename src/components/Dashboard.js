import React, { Component } from "react";

import classnames from "classnames";

import Loading from "components/Loading";

class Dashboard extends Component {
  state = {
    loading: false
  }

  render() {
    const dashboardClasses = classnames("dashboard");
    
    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
