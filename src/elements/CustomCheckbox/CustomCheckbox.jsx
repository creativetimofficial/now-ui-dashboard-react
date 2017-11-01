import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class CustomCheckbox extends React.Component{
    render(){
        return (
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" value="hey"/>
                    <span className="form-check-sign"></span>
                </Label>
            </FormGroup>
        );
    }
}

export default CustomCheckbox;
