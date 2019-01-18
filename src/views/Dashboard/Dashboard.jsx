import React from "react";

import ButtonComponent from 'components/Button/Button.jsx';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export default class Dashboard extends React.Component {
  render(){
      return(
          <div>
            <ButtonComponent buttonLabel="add new exercise" />
            <ButtonComponent buttonLabel="add new workout" />
            <InfiniteCalendar />
          </div>
      )
  }
}