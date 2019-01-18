import React from 'react';
import ButtonComponent from '../Button/Button.jsx';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined.js';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined.js';
import CancelOutlined from '@material-ui/icons/CancelOutlined.js';

function EditButtons() {
    return(
        <div>
            <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowUpwardOutlined/>} />
            <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowDownwardOutlined />} />
            <ButtonComponent buttonColor='#ff9900' buttonLabel={<CancelOutlined/>} />
        </div>
    )
}

export default EditButtons;

