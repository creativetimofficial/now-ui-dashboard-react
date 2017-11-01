import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle,
    Container, Row, Col
} from 'reactstrap';

import FormInputs from 'components/FormInputs/FormInputs';

class User extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Edit Profile</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <form>
                                    <FormInputs
                                        ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                                        proprieties = {[
                                            {
                                                formGroupProps : {},
                                                labelProps : {},
                                                label : "Company (disabled)",
                                                inputProps : {
                                                    type : "text",
                                                    disabled: true,
                                                    defaultValue: "Creative Code Inc."
                                                },
                                                inputGroupProps : {},
                                                inputGroupAddonProps : {},
                                            },
                                            {
                                                formGroupProps : {},
                                                labelProps : {},
                                                label : "Username",
                                                inputProps : {
                                                    type : "text",
                                                    defaultValue: "michael23"
                                                },
                                                inputGroupProps : {},
                                                inputGroupAddonProps : {},
                                            },
                                            {
                                                formGroupProps : {},
                                                labelProps : {},
                                                label : "Email address",
                                                inputProps : {
                                                    type : "email",
                                                    placeholder: "Email"
                                                },
                                                inputGroupProps : {},
                                                inputGroupAddonProps : {},
                                            }
                                        ]}
                                    />
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default User;
