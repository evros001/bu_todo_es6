import React from 'react'
import AddProject from './AddProject.js';
import Project from './Project.js';

export default class ProjectsContainer extends React.Component {
	state = {
		projects: [],
		projectSelected: []
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
		this.setState({
			projectSelected: this.state.projectSelected.concat([index])
		}, function() { 
			if(this.state.projectSelected.length>0) {
				this.props.projectSelected(this.state.projectSelected)
			}
		})
	}

	render() {
		const projectList = this.state.projects.map((project, index) => 
			<Project 
				key={index} 
				project={project} 
				remove={::this.handleRemoveProject} 
				selected={::this.handleSelectProject}
			/>
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