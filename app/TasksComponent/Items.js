import React from 'react';

export default class Items extends React.Component {
	render() {
		const items = this.props.items.map((item, index) =>
			<li key={index} className="item">
				<span onClick={this.props.remove.bind(null, index)}>
					<i className="fa fa-times"></i>
				</span>
				<span>
					 {item}
				</span>
			</li>
		);
		return (
			<ul className="item-list">
				{items}
			</ul>
		)
	}
}

// const styles = {
// 	uList: {
// 		listStyle: "none"
// 	}
// }

