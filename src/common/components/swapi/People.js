import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class People extends Component {
	constructor(props) {
		super(props);
		console.log('Props-----', props);
		this.state = {
			people: props.people
		}
	}

	render() {
		return (
			<Table
				rowsCount={this.state.people.length}
				rowHeight={50}
				headerHeight={50}
				width={400}
				height={500}>
				<Column
					header={<Cell>Name</Cell>}
					cell={props => (
						<Cell {...props}>
							{this.state.people[props.rowIndex].name}
						</Cell>
					)}
					width={200}
				/>

				<Column
					header={<Cell>Hair Color</Cell>}
					width={100}
					cell={props => (
						<Cell {...props}>
							{this.state.people[props.rowIndex].hair_color}
						</Cell>
					)}
				/>

				<Column
					header={<Cell>Eye Color</Cell>}
					width={100}
					cell={props => (
						<Cell {...props}>
							{this.state.people[props.rowIndex].eye_color}
						</Cell>
					)}
				/>
			</Table>
		);
	}

}

export default People;
