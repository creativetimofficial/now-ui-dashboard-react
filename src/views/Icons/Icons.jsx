import React from 'react';
import {
    Card, CardHeader, CardTitle, CardSubtitle, CardBody,
    Container, Row, Col
} from 'reactstrap';

import icons from 'variables/icons';

class Icons extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle>100 Awesome Nucleo Icons</CardTitle>
                                <CardSubtitle>Handcrafted by our friends from <a href="https://nucleoapp.com/?ref=creativetim">NucleoApp</a>.</CardSubtitle>
                            </CardHeader>
                            <CardBody className="all-icons">
                                <Row>
                                    {
                                        icons.map((prop,key) => {
                                            return (
                                                <Col lg={2} md={3} sm={4} xs={6} className="font-icon-list" key={key}>
                                                    <div className="font-icon-detail">
                                                        <i className={"now-ui-icons " + prop}></i>
                                                        <p>{prop}</p>
                                                    </div>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Icons;
