import React from "react";

import { connect } from "react-redux";

import ButtonComponent from "components/Button/Button.jsx";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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
        <ButtonComponent buttonLabel="add new exercise" />
        <ButtonComponent buttonLabel="add new workout" />
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

const mapStateToProps = state => ({
  trainingDays: Object.keys(state.allWorkouts)
});

export default connect(mapStateToProps)(withRouter(Dashboard));
