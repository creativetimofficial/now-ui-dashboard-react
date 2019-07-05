/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

// reactstrap components
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Upgrade extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle>Now UI Dashboard PRO React</CardTitle>
                  <p className="category">
                    Are you looking for more components? Please check our
                    Premium Version of Now UI Dashboard React.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td className="text-center">16</td>
                        <td className="text-center">160</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td className="text-center">5</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td className="text-center">7</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr>
                        <td>Documentation</td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>SASS Files</td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Login/Register/Lock Pages</td>
                        <td className="text-center">
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center">
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">Just $59</td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">
                          <Button
                            href="#"
                            color="default"
                            className="btn-round"
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            target="_blank"
                            href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react/?ref=nudr-upgrade"
                            color="info"
                            className="btn-round"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Upgrade;
