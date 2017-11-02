import React from 'react';

class UserCardAuthor extends React.Component{
    render(){
        return (
            <div className="author">
                <a href={this.props.link ? this.props.link:"#"}>
                    <img className="avatar border-gray" src={this.props.avatar} alt={this.props.avatarAlt} />
                    <h5 className="title">{this.props.title}</h5>
                </a>
                <p className="description">
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default UserCardAuthor;
