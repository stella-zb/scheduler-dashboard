import React, { Component } from "react";

export default class Panel extends Component {
  render() {
    const { label, value, onSelect } = this.props;

    return (
      <section className="dashboard_panel" onClick={onSelect}>
        <h1 className="dashboard_panel-header">{label}</h1>
        <p className="dashboard_panel-value">{value}</p>
      </section>
    );
  }
}