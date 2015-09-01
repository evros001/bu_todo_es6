import React from 'react';

export default class Project extends React.Component {
	render() {
		return (
			<li className="project" key={this.props.index} >
				<i className="fa fa-circle"></i>
				<span>{this.props.project}</span>
				<i className="fa fa-times" onClick={::this.handleRemoveProject.bind(this, index)}></i>
			</li>
		)
	}
}