import React, { Component } from "react";
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap";

import { Button, PanelHeader } from "components";

class Upgrade extends Component {
  render() {
    return (
      <div>
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
                            round
                            fill
                            disabled
                            bsStyle="default"
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            target="_blank"
                            href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react/?ref=nud-react-free"
                            round
                            fill
                            bsStyle="info"
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
      </div>
    );
  }
}

export default Upgrade;
