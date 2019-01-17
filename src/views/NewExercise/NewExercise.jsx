import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SelectItem from '../../components/Select/Select.jsx';
import ButtonComponent from '../../components/Button/Button.jsx';

export default class NewExercise extends React.Component {

    render(){
        const unitsOfMeasurement = ['kilograms', 'lb.'];
        return(
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4>Create new exercise</h4>
                                <p>Please, add a new exercise name and measurement type</p>
                            </CardHeader>
                            <CardBody>
                                <CustomInput
                                    labelText="Username"
                                    id="username"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                                <SelectItem selectHeader="Measurement type" selectFor="measurement" selectItems={unitsOfMeasurement}/>
                                <ButtonComponent buttonLabel="create exercise"/>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}