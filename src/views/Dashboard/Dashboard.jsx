import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle,
    Container, Row, Col
} from 'reactstrap';
import ChartistGraph from 'react-chartist';

import Tasks from 'components/Tasks/Tasks.jsx';

import CardLegend from 'elements/CardElements/CardLegend';
import CardStats from 'elements/CardElements/CardStats';
import CardStatistics from 'elements/CardElements/CardStatistics';

import {
    emailStatisticsChart,
    usersBehaviorChart,
    salesChart
} from 'variables/charts.jsx';

import { tasks } from 'variables/general.jsx';

class Dashboard extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col xs="12" md="4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Email Statistics</CardTitle>
                                <CardSubtitle>Last Campaign Performance</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <ChartistGraph
                                    className="ct-chart ct-perfect-fourth"
                                    data={emailStatisticsChart.data}
                                    type="Pie"
                                />
                            </CardBody>
                            <CardFooter>
                                <CardLegend>
                                    {[
                                        { i: "fa fa-circle text-gray", t: "Open"},
                                        { i: "fa fa-circle text-primary", t: "Bounce"},
                                        { i: "fa fa-circle text-warning", t: "Unsubscribe"}
                                    ]}
                                </CardLegend>
                                <hr />
                                <CardStats>
                                    {[
                                        { i: "now-ui-icons ui-2_time-alarm", t: "Campaign sent 2 days ago"}
                                    ]}
                                </CardStats>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Users Behavior</CardTitle>
                                <CardSubtitle>24 Hours Performance</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <CardStatistics
                                    description="NASDAQ: AAPL"
                                    stat="127.33"
                                    date="OCT 2:16 PM EDT"
                                    badgeIcon="now-ui-icons media-2_sound-wave"
                                    duration="1 Year"
                                />
                                <ChartistGraph
                                    className="ct-chart"
                                    data={usersBehaviorChart.data}
                                    type="Line"
                                    options={usersBehaviorChart.options}
                                    responsiveOptions={usersBehaviorChart.responsiveOptions}
                                    listener={
                                        usersBehaviorChart.animation
                                    }
                                />
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <CardStats>
                                    {[
                                        { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                    ]}
                                </CardStats>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>2014 Sales</CardTitle>
                                <CardSubtitle>All Products Including Taxes</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <ChartistGraph
                                    className="ct-chart"
                                    data={salesChart.data}
                                    type="Bar"
                                    options={salesChart.options}
                                    responsiveOptions={salesChart.responsiveOptions}
                                    listener={
                                        salesChart.animation
                                    }
                                />
                            </CardBody>
                            <CardFooter>
                                <CardLegend>
                                    {[
                                        { i: "fa fa-circle text-gray", t: "Tesla Model S"},
                                        { i: "fa fa-circle text-primary", t: "BMW 5 Series"}
                                    ]}
                                </CardLegend>
                                <hr />
                                <CardStats>
                                    {[
                                        { i: "now-ui-icons ui-1_check", t: "Data information certified"}
                                    ]}
                                </CardStats>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="6">
                        <Card className="card-tasks">
                            <CardHeader>
                                <CardTitle>Tasks</CardTitle>
                                <CardSubtitle>Backend Development</CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <Tasks tasks={tasks}/>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <CardStats>
                                    {[
                                        { i: "now-ui-icons loader_refresh spin", t: "Updated 3 minutes ago"}
                                    ]}
                                </CardStats>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
