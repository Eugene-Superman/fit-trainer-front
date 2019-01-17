import React from "react";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ButtonComponent from 'components/Button/Button.jsx';
import DataRow from 'components/DataRow/DataRow.jsx';

export default class NewExEditExerciseercise extends React.Component {

    render(){
        return(
            <div>  
                <Card>
                    <CardHeader color="primary">
                        <h4>Edit exercises</h4>
                    </CardHeader>
                    <CardBody>
                        <DataRow />
                        <ButtonComponent buttonLabel="update exercises"/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}