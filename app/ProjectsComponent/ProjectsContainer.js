import React from 'react'
import AddProject from './AddProject.js';
import Project from './Project.js';

export default class ProjectsContainer extends React.Component {
	state = {
		projects: []
	}

	handleAddProject(newProject) {
		this.setState({
            projects: this.state.projects.concat([newProject])
        });
	}

	handleRemoveProject(index) { 
		this.state.projects.splice(index, 1);
        this.setState({
            projects: this.state.projects
        })
	}

	handleSelectProject(index) {
		const project = this.state.projects[index];
		this.props.projectSelected(project)
	}

	render() {
		const projectList = this.state.projects.map((project, index) => 
			<Project project={project} index={index} onClick={::this.handleSelectProject.bind(this, index)} />
		);
		return (
			<div className="projects-container">
				<div className="projects-title">
					Projects
				</div>
				<ul className="project-list">
					{projectList}
				</ul>
				<AddProject addProject={::this.handleAddProject} />
			</div>
		)
	}
}