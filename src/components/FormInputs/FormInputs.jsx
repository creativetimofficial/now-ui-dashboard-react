import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

function FieldGroup({ label,addonLeft,addonRight, formGroupProps, labelProps, inputProps, inputGroupProps, inputGroupAddonProps }) {
    if(addonLeft !== undefined || addonRight !== undefined)
        return (
            <InputGroup {...inputGroupProps}>
                {addonLeft ? (<InputGroupAddon {...inputGroupAddonProps}>{addonLeft}</InputGroupAddon>):""}
                <Input {...inputProps} />
                {addonRight ? (<InputGroupAddon {...inputGroupAddonProps}>{addonRight}</InputGroupAddon>):""}
            </InputGroup>
        )
    return (
        <FormGroup {...formGroupProps}>
            {label ? (<Label {...labelProps}>{label}</Label>):""}
            <Input {...inputProps} />
        </FormGroup>
    );
}

export class FormInputs extends Component{
    render(){
        var row = [];
        for(var i = 0; i < this.props.ncols.length ; i++){
            row.push(
                <div key={i} className={this.props.ncols[i]}>
                    <FieldGroup
                        {...this.props.proprieties[i]}
                    />
                </div>
            );
        }
        return (
            <div className="row">
                {row}
            </div>
        );
    }
}

export default FormInputs;
