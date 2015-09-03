import React from 'react';
import ProjectsContainer from './ProjectsComponent/ProjectsContainer.js';
import TasksContainer from './TasksComponent/TasksContainer.js';
import TeamContainer from './TeamComponent/TeamContainer.js';
import TaskDetailsContainer from './TaskDetailsComponent/TaskDetailsContainer.js';

export default class ToDoContainer extends React.Component {
	state = {
		selectedProject: []
	}
	handleProjectSelect(selectedProject) {
		this.setState({
            selectedProject: this.state.selectedProject.concat([selectedProject])
        }, () => this.state.selectedProject.shift());
	}

	render() {
		return (
			<div className="todo-container">
				<ProjectsContainer projectSelected={::this.handleProjectSelect}/>
				<TeamContainer />
				<TasksContainer projectSelected={this.state.selectedProject}/>
				<TaskDetailsContainer />
			</div>
		)
	}
}