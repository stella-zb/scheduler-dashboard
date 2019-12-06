import React, { Component } from "react";

import classnames from "classnames";

import Loading from "components/Loading";
import Panel from "components/Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  }

  componentDidMount() {
    const focused = JSON.parse(localStorage.getItem("focused"));

    if (focused) {
      this.setState({ focused });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.focused !== this.state.focused) {
      localStorage.setItem("focused", JSON.stringify(this.state.focused));
    }
  }
  
  selectPanel(id) {
    this.setState(previousState => ({
      // set value of focused back to null if focused value is currently set to a panel
      focused: previousState.focused !== null? null : id
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      // conditional css class
      "dashboard--focused": this.state.focused
    });
    
    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data
      .filter(
        // conditionally apply dashboard--focus class to the element
        panel => this.state.focused === null || this.state.focused === panel.id
      )
      .map(panel => (
        <Panel 
          key={panel.id}
          id={panel.id}
          label={panel.label} 
          value={panel.value} 
          // use arrow function in render to bind instant method
          onSelect={event => this.selectPanel(panel.id)}
        />
      ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
