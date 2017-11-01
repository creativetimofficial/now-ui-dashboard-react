import React from 'react';

class CardLegend extends React.Component{
    render(){
        var legend = [];
        for (var i = 0; i < this.props.children.length; i++) {
            legend.push(
                <i className={this.props.children[i].i} key={i}></i>
            );
            legend.push(" "+this.props.children[i].t+" ");
        }
        return <div className="legend">{legend}</div>;
    }
}

export default CardLegend;
