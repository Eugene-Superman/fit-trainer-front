import React from "react";

import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import ButtonComponent from "components/Button/Button.jsx";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";

import "react-infinite-calendar/styles.css";

const mapStateToProps = state => ({
  trainingDays: Object.keys(state.allWorkouts)
});

class Dashboard extends React.Component {
  state = { selectedDays: [] };

  componentDidMount = () => {
    this.setState({
      selectedDays: this.props.trainingDays.map(element => +element)
    });
  };

  selectDay = element => {
    const clickedDate = Date.parse(element);
    this.props.history.push("/new-workout/" + clickedDate, {
      calendarDate: clickedDate
    });
  };

  render() {
    const { selectedDays } = this.state;
    return (
      <div>
        <Link to="/new-exercise">
          <ButtonComponent buttonLabel="add new exercise" />
        </Link>
        <InfiniteCalendar
          Component={withMultipleDates(Calendar)}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={this.selectDay}
          selected={selectedDays}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Dashboard));
