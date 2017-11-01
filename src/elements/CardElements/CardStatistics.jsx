import React from 'react';

class CardStatistics extends React.Component{
    render(){
        return (
            <div className="statistics-container">
                <div className="statistics">
                    {this.props.description ? (<p className="description">{this.props.description}</p>):""}
                    {this.props.stat ? (<h3>{this.props.stat}</h3>):""}
                    {this.props.date ? (<h6>{this.props.date}</h6>):""}
                </div>
                {this.props.badgeIcon || this.props.duration ? (<div className="statistics-badge">
                    <span className="badge badge-primary">
                        {this.props.badgeIcon ? <i className={this.props.badgeIcon}></i>:""}
                        {" " + this.props.duration}
                    </span>
                </div>):""}
            </div>
        );
    }
}

export default CardStatistics;
