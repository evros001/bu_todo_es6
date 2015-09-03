import React from 'react/addons';

export default class Project extends React.Component {
	state = {
		selected: false
	}

	handleSelected() {
		if (this.state.selected === false) {
			this.setState({
				selected: true
			}, () => this.props.selected(this.props.project));
		} else if (this.state.selected === true){
			this.setState({
				selected: false
			}, () => this.props.selected("all"));
		}	
	}

	render() {
		const index = this.props.index
		const project =this.props.project
	  	const cx = React.addons.classSet;
	  	const classes = cx({
	    	'project': true,
	    	'project selected': this.state.selected,
	  	});


		return (
			<li className={classes}  onClick={::this.handleSelected.bind(this, index)}>
				<i className="fa fa-circle"></i>
				<span>{project}</span>
				<i className="fa fa-times" onClick={::this.props.remove.bind(this, index)}></i>
			</li>
		)
	}
}