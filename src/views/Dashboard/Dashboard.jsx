import React from "react";

import { cloneDeep } from "lodash";
import ButtonComponent from "components/Button/Button.jsx";
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates
} from "react-infinite-calendar";

import "react-infinite-calendar/styles.css";

export default class Dashboard extends React.Component {
  state = { selectedDays: [] };

  selectDay = element => {
    const clickedDate = Date.parse(element);
    const elementToChange = cloneDeep(this.state.selectedDays);
    if (!elementToChange.includes(clickedDate)) {
      elementToChange.push(clickedDate);
      this.setState({ selectedDays: elementToChange });
    }
  };

  render() {
    const { selectedDays } = this.state;
    console.log("selectedDays", selectedDays);
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
