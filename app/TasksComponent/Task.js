import React from 'react';
import AddItem from './AddItem.js';
import Items from './Items.js'

export default class List extends React.Component {
    state = {
        items: [],
        project: this.props.projectSelected
    }
    
    handleAddItem(newItem) {
        this.setState({
            items: this.state.items.concat([newItem]),
        });
    }

    handleRemove(index) {
        this.state.items.splice(index, 1);
        this.setState({
            items: this.state.items
        })
    }

    render() {
        debugger;
        return (
            <div className="task-items-container">
                <h3 className="task-title">
                    {this.props.title}
                </h3>
                <p>{this.state.project}</p>
                <div className="task-list-container">
                    <Items items={this.state.items} remove={::this.handleRemove}/>
                    <AddItem add={::this.handleAddItem} />
                </div>
            </div>
        )
    }
}
