import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SelectItem from '../../components/Select/Select.jsx';
import ButtonComponent from '../../components/Button/Button.jsx';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpwardOutlined.js';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined.js';
import CancelOutlined from '@material-ui/icons/CancelOutlined.js';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
    divContainer: {
        borderBottom: '1px solid silver', 
        marginBottom: '20px', 
        paddingBottom: '20px'
    },
  };

class DataRow extends React.Component {

    render(){
        const { classes } = this.props;
        const unitsOfMeasurement = ['zagl', 'uska'];
        return(
            <div className={classes.divContainer}>  
                <GridContainer >
                    <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                            labelText="Username"
                            id="username"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <SelectItem selectHeader="Measurement type" selectFor="measurement" selectItems={unitsOfMeasurement}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowUpwardOutlined/>} />
                        <ButtonComponent buttonColor='#00abc1' buttonLabel={<ArrowDownwardOutlined />} />
                        <ButtonComponent buttonColor='#ff9900' buttonLabel={<CancelOutlined/>} />
                    </GridItem>
                </GridContainer>              
            </div>
        )
    }
}

DataRow.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(DataRow);