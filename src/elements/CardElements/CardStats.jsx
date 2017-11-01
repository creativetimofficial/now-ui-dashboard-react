import React from 'react';

class CardStats extends React.Component{
    render(){
        var stats = [];
        for (var i = 0; i < this.props.children.length; i++) {
            stats.push(
                <i className={this.props.children[i].i} key={i}></i>
            );
            stats.push(" "+this.props.children[i].t);
            if(i !== this.props.children.length - 1){
                stats.push(<br />);
            }
        }
        return <div className="stats">{stats}</div>;
    }
}

export default CardStats;
