import {React,  useState, useEffect} from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import AddAssignmentModal from "./AddAssignmentModal";
import AddCourseModal from "./AddCourseModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.js";

function Dashboard() {

  const [assignments, setAssignments] = useState();
  const [courses, setCourses] = useState();

  const [currentAssignmentIndex, setCurrentAssignmentIndex] = useState();
  const [currentCourseIndex, setCurrentCourseIndex] = useState();

  const host = "http://localhost:5000";

  const getAssignments = async ()=>{
    const response = await fetch(`${host}/assignments`, {
      method: "GET",
      headers: {
        "faculty-token": localStorage.getItem("faculty-token"),
      } 
    })

    const json = await response.json();
    setCurrentAssignmentIndex(json.assignments?.length-1)
    setAssignments(json.assignments);
  }

  const getCourses = async ()=>{
    const response = await fetch(`${host}/courses`, {
      method: "GET",
      headers: {
        "faculty-token": localStorage.getItem("faculty-token"),
      }
    })
    const json = await response.json();
    setCurrentCourseIndex(json.courses?.length-1)
    setCourses(json.courses);
  }

  const navigate = useNavigate("/");

  useEffect(()=>{
    if (!localStorage.getItem("faculty-token")){
      navigate("/");
    }
    const getAllAssignments = async ()=>{
      await getAssignments();
    }

    const getAllCourses = async ()=>{
      await getCourses();
    }
    getAllAssignments();
    getAllCourses();
  }, []);

  const [showAddAssignmentModal, setShowAddAssignmentModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const toggleShowAddAssignmentModal = ()=>{
    if (showAddAssignmentModal){
      setShowAddAssignmentModal(false);
    }else{
      setShowAddAssignmentModal(true);
    }
  }

  const toggleShowAddCourseModal = ()=>{
    if (showAddCourseModal){
      setShowAddCourseModal(false);
    }else{
      setShowAddCourseModal(true);
    }
  }

  const viewNext = ()=>{
      setCurrentAssignmentIndex(currentAssignmentIndex-1);
  }

  const viewPrev = ()=>{
    setCurrentAssignmentIndex(currentAssignmentIndex+1);
  }

  const viewNextCourse = ()=>{
    setCurrentCourseIndex(currentCourseIndex-1);
  }

  const viewPrevCourse = ()=>{
    setCurrentCourseIndex(currentCourseIndex+1);
  }

  const handleDownload = async () => {
    try {
      const response = await axios.get(assignments[currentAssignmentIndex].content, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
      const link = document.createElement('a');
      link.href = url;

      let fileName = assignments[currentAssignmentIndex].name + "." + assignments[currentAssignmentIndex].fileExtension;

      link.setAttribute('download', fileName);
      document.body.appendChild(link);


      link.click();
      link.remove();
    } catch (error) {
      window.alert("Download Failed")
    }
  };

  return (
    <>
      <PanelHeader size="lg" />
      <div className="content">
        <Row>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Assignments</h5>
                <CardTitle tag="h4">Recently Added Assignments</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={toggleShowAddAssignmentModal}>Add Assignment</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                    <p style={{"marginLeft": "20px", "color": "blue", "cursor": "pointer"}} onClick={handleDownload}>{assignments && assignments[currentAssignmentIndex]?.name}</p>
                    <p style={{"marginLeft": "20px"}}>{assignments && assignments[currentAssignmentIndex]?.course}</p>
                    <button style={{"marginLeft": "20px", "cursor": "pointer"}} onClick={viewPrev} disabled={currentAssignmentIndex===assignments?.length-1}>View Prev</button>
                    <button style={{"marginLeft": "20px", "cursor": "pointer"}} onClick={viewNext} disabled = {currentAssignmentIndex===0}>View Next</button>
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Courses</h5>
                <CardTitle tag="h4">All Courses</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={toggleShowAddCourseModal}>Register Regular Courses</DropdownItem>
                    <DropdownItem className="text-danger">
                      View Fee Structure
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <img src={courses && courses[currentCourseIndex]?.image} style={{"marginLeft": "20px"}} width="200px"/>
                <p style={{"marginLeft": "20px"}}> Course: {courses && courses[currentCourseIndex]?.name} | Instructor: {courses && courses[currentCourseIndex]?.instructor}</p>
                <button style={{"marginLeft": "20px", "cursor": "pointer"}} onClick={viewPrevCourse} disabled={currentCourseIndex===courses?.length-1}>View Prev</button>
                <button style={{"marginLeft": "20px", "cursor": "pointer"}} onClick={viewNextCourse} disabled = {currentCourseIndex===0}>View Next</button>
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Email Statistics</h5>
                <CardTitle tag="h4">24 Hours Performance</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Backend Development</h5>
                <CardTitle tag="h4">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip731609871"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609871"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip907509347"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip907509347"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip496353037"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip496353037"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip326247652"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip326247652"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip389516969"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip389516969"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" /> Updated 3
                  minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
                <h5 className="card-category">All Persons List</h5>
                <CardTitle tag="h4">Employees Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">$78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {showAddAssignmentModal && <AddAssignmentModal toggleShowAddAssignmentModal={toggleShowAddAssignmentModal}/>}
        {showAddCourseModal && <AddCourseModal toggleShowAddCourseModal={toggleShowAddCourseModal}/>}
      </div>
    </>
  );
}

export default Dashboard;
