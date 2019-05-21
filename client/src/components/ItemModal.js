import React, { Component } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import uuid from 'uuid';

class ItemModal extends Component {
	state = {
		modal: false,
		name: ""
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
  };
  
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: uuid.v4(),
      name: this.state.name
    }

    // Add item via ADD_ITEM action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  }

	render() {
		return (
			<div>
				<Button
					color="dark"
					style={{ marginBottom: "2rem" }}
					onClick={this.toggle}
				>
					Add Item
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input
									type="text"
									name="name"
									id="item"
									placeholder="Add shopping item"
									onChange={this.onChange}
								/>
							</FormGroup>
							<Button
                color="dark"
                style={{ marginTop: '2rem' }}
                type="submit"
                block
              >Add Item</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

ItemModal.propTypes = {
  addItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);