import React from 'react';

export default class AddItem extends React.Component {
	
	state = {
		newItem: ''
	}

	handleChange(e) {
		this.setState({
			newItem: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.add(this.state.newItem)
		this.setState({
			newItem: ''
		})
	}

	render() {
		return (
			<div className="add-item-container">
				<form onSubmit={::this.handleSubmit}>
					<input type="text" onChange={::this.handleChange} value={this.state.newItem} />
					<button type="submit">Schedule</button>
				</form>
			</div> 
		)
	}
}