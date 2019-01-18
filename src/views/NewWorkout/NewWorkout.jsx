import React from "react";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from 'components/Button/Button.jsx';
import WorkoutDataRow from 'components/WorkoutDataRow/WorkoutDataRow.jsx';

export default class NewWorkout extends React.Component {

    render(){
        return(
            <div>  
                <Card>
                    <CardHeader color="primary">
                        <h4>New workout</h4>
                    </CardHeader>
                    <CardBody>
                        <ButtonComponent buttonLabel="add exercise"/>
                        <WorkoutDataRow />
                        <ButtonComponent buttonLabel="create workout"/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}