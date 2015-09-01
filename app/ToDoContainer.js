import React from 'react';
import ProjectsContainer from './ProjectsComponent/ProjectsContainer.js';
import TasksContainer from './TasksComponent/TasksContainer.js';
import TeamContainer from './TeamComponent/TeamContainer.js';
import TaskDetailsContainer from './TaskDetailsComponent/TaskDetailsContainer.js';

export default class ToDoContainer extends React.Component {
	state = {
		selectedProject: ''
	}
	handleProjectSelect(selectedProject) {
		this.setState({
			selectedProject: selectedProject
		})
	}

	render() {
		return (
			<div className="nav-container">
				<ProjectsContainer projectSelected={::this.handleProjectSelect}/>
				<TeamContainer />
				<TasksContainer project={this.state.selectedProject}/>
				<TaskDetailsContainer />
			</div>
		)
	}
}