import React from 'react';
import Button from 'elements/CustomButton/CustomButton';

class CardSocials extends React.Component{
    render(){
        return (
            <div className="button-container">
                {
                    this.props.socials.map((prop,key) => {
                        return (
                            <Button neutral icon round size={this.props.size} key={key} href={prop.link}>
                                <i className={prop.icon}></i>
                            </Button>
                        );
                    })
                }
            </div>
        );
    }
}

export default CardSocials;
