import React from 'react';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined.js';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined.js';
import CancelOutlined from '@material-ui/icons/CancelOutlined.js';
import ButtonComponent from '../Button/Button.jsx';

function EditButtons(props) {
    const{ buttonUp, buttonDown, removeExercise} = props;
    return(
        <div>
            <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowUpwardOutlined/>} onClick={buttonUp}/>
            <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowDownwardOutlined onClick={buttonDown}/>} />
            <ButtonComponent buttonColor='#ff9900' buttonLabel={<CancelOutlined/>} onClick={removeExercise}/>
        </div>
    )
}

export default EditButtons;

