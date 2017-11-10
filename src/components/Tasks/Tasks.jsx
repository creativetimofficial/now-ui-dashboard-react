import React from 'react';
import { UncontrolledTooltip, FormGroup, Label, Input } from 'reactstrap';

import Button from 'elements/CustomButton/CustomButton';

class Task extends React.Component{
    render(){
        var tasksList = [];
        var number;
        var edit;
        var remove;
        for (var i = 0; i < this.props.tasks.length; i++) {
            number = "checkbox"+i;
            edit = "edit"+i;
            remove = "remove"+i;
            tasksList.push(
                <tr key={i}>
                    <td>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" value={number}/>
                                <span className="form-check-sign"></span>
                            </Label>
                        </FormGroup>
                    </td>
                    <td>
                        { this.props.tasks[i] }
                    </td>
                    <td className="td-actions text-right">
                        <Button
                            id={edit}
                            round icon iconMini neutral
                            color="info"
                        >
                            <i className="now-ui-icons ui-2_settings-90"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target={edit} delay={0}>Edit Task</UncontrolledTooltip>
                        <Button
                            id={remove}
                            round icon iconMini neutral
                            color="danger"
                        >
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                        </Button>
                        <UncontrolledTooltip placement="top" target={remove} delay={0}>Remove</UncontrolledTooltip>
                    </td>
                </tr>
            );
        }
        return (
            <div className="table-full-width table-responsive">
                <table className="table">
                    <tbody>
                        { tasksList }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Task;
