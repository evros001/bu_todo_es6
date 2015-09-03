import React from 'react';

export default class AddProject extends React.Component {

	state = {
		project: ''
	}
	
	handleChange(e) {
		this.setState({
			project: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addProject(this.state.project)
		this.setState({
			project: ""
		})
	} 

	render() {
		return (
			<div className="add-project-button">
				<i className="fa fa-plus"></i>
				<button>Add Project</button>
				<form onSubmit={::this.handleSubmit} className="add-project-form hidden">
					<input type="text" onChange={::this.handleChange} value={this.state.project}/>
					<button type="submit">Add Project</button>
				</form>
			</div>
		)
	}
}

