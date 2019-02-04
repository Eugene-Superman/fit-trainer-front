import React from "react";
import PropTypes from "prop-types";
import ArrowUpwardOutlined from "@material-ui/icons/ArrowUpwardOutlined.js";
import ArrowDownwardOutlined from "@material-ui/icons/ArrowDownwardOutlined.js";
import CancelOutlined from "@material-ui/icons/CancelOutlined.js";
import ButtonComponent from "../Button/Button.jsx";

function EditButtons(props) {
  const { buttonUp, buttonDown, removeExercise } = props;
  return (
    <div>
      <ButtonComponent
        buttonColor="#00abc1"
        buttonImage={<ArrowUpwardOutlined />}
        onClick={buttonUp}
      />
      <ButtonComponent
        buttonColor="#00abc1"
        buttonImage={<ArrowDownwardOutlined />}
        onClick={buttonDown}
      />
      <ButtonComponent
        buttonColor="#ff9900"
        buttonImage={<CancelOutlined />}
        onClick={removeExercise}
      />
    </div>
  );
}

EditButtons.propTypes = {
  buttonUp: PropTypes.func,
  buttonDown: PropTypes.func,
  removeExercise: PropTypes.func
};

export default EditButtons;
