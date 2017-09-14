import React from 'react';
import AJAX from '../../ajax.js';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import RatingIcon from 'material-ui/svg-icons/toggle/star';
import RatingCountIcon from 'material-ui/svg-icons/notification/confirmation-number';
import ViewIcon from 'material-ui/svg-icons/image/remove-red-eye';
import GoalIcon from 'material-ui/svg-icons/image/adjust';
import CreateIcon from 'material-ui/svg-icons/content/create';
import GymsIcon from 'material-ui/svg-icons/places/fitness-center';

import QualificationIcon from 'material-ui/svg-icons/social/school';
import BiographIcon from 'material-ui/svg-icons/social/whatshot';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog1 from 'material-ui/Dialog';
import Dialog2 from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const style ={
	// border: '2px solid'
	marginTop: '20px',
	marginBotton: '20px'
};

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			session: {},
			open1: false,
			open2:false,
			first: ''
		};
	};
 	
 	componentWillMount() {
     AJAX.get('/session', {}, (data) =>{
     		this.setState({
     			session: data
     		});
     });
 	};

	handleClick() {
		this.setState({
			toggle: !this.state.toggle
		});
	};

	handleBasicEdit() {
    alert('basic got clicked')
	};

	handleReviewEdit() {
    console.log('review got clicked')
	};

	handleOtherEdit() {
    console.log('other got clicked')
	};

	handleOpen1() {
    this.setState({open1: true});
  };

  handleOpen2() {
    this.setState({open2: true});
  };

  handleClose1() {
     var options = {
     	id: this.state.session.id,
     	first: this.state.session.first,
     	last: this.state.session.last,
     	email: this.state.session.email,
     	phone: this.state.session.phone,
     }
     AJAX.put('/ihateandy2', options, (data) =>{
     		this.setState({
     			session: data,
     			open1: false
     		});
     });
  };

  handleClose2() {
	 	var options = {
   		id: this.state.session.id,
   		gyms: this.state.session.gyms,
   		qualification: this.state.session.qualification,
   		biography: this.state.session.biography,
   		goals: this.state.session.goals,
   	}
   	AJAX.put('/ihateandy2', options, (data) =>{
   		this.setState({
   			session: data,
   			open2: false
   		});
   	});
  };

  handleFirstNameChange(event) {
  	this.state.session.first = event.target.value;

		this.setState({
			session: this.state.session
		});
	};

	handleLastNameChange(event) {
		this.state.session.last = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handlePhoneChange(event) {
		this.state.session.phone = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handleEmailChange(event) {
		this.state.session.email = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handleGymsChange(event) {
		this.state.session.gyms = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handleQualificationChange(event) {
		this.state.session.qualification = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handleBiographyChange(event) {
		this.state.session.biography = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	handleGoalsChange(event) {
		this.state.session.goals = event.target.value;
		this.setState({
			session: this.state.session
		});
	};

	render() {
		const action1 = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose1.bind(this)}
      />,
    ];
    const action2 = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose2.bind(this)}
      />,
    ];
			return (
				<div>
					<div style={style}>
					  <h4>Basic information
					  	<CreateIcon onClick={this.handleOpen1.bind(this)}/>
					  </h4>
					  	<Dialog1
          			actions={action1}
          			modal={true}
          			open={this.state.open1}
        			>
	      				<h4>Personal information</h4>
       					<TextField hintText='first name'
       						floatingLabelText="first name"
       						onChange={this.handleFirstNameChange.bind(this)}
          			/>
       					<TextField hintText='last name'
       						floatingLabelText="last name"
       						onChange={this.handleLastNameChange.bind(this)}
  			   			/><br/>
       					<TextField hintText='phone'
	       					floatingLabelText="phone"
	       					onChange={this.handlePhoneChange.bind(this)}
	  						/><br/>
	  						<TextField hintText='email'
	       					floatingLabelText="email"
	       					onChange={this.handleEmailChange.bind(this)}
	  						/><br/>
        			</Dialog1>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn>
					        	<PeopleIcon/>Full Name: {this.state.session.first + ' ' + this.state.session.last}
					        </TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><PhoneIcon/>Phone number: {this.state.session.phone ? this.state.session.phone : 'not filled yet'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><EmailIcon/>Email: {this.state.session.email ? this.state.session.email : 'not filled yet'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
					<Divider/>
					<div style={style}>
					  <h4>My reviews</h4>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><RatingIcon/>Rating: {this.state.session.rating ? this.state.session.rating : 'You do not have any rating yet'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><RatingCountIcon/>Rating counts: {this.state.session.rating_count ? this.state.session.rating_count : '0'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><ViewIcon/>Total views: {this.state.session.total_view ? this.state.session.total_view : '0'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
					<Divider/>
					<div style={style}>
						<h4>Other information
							<CreateIcon onClick={this.handleOpen2.bind(this)}/>
						</h4>
						<Dialog2
          			actions={action2}
          			modal={true}
          			open={this.state.open2}
        			>
		      				<h4>Other information</h4>
	       					<TextField hintText='gyms'
		       					floatingLabelText="gyms"
		       					onChange={this.handleGymsChange.bind(this)}
					  			/><br/>
					  <TextField hintText='qualifications'
		       		floatingLabelText="qualifications"
		       		multiLine={true}
		       		onChange={this.handleQualificationChange.bind(this)}
					  /><br/>
					  <TextField hintText='biography'
		       		floatingLabelText="biography"
		       		multiLine={true}
		       		onChange={this.handleBiographyChange.bind(this)}
					  /><br/>
					  <TextField hintText='goals'
		       		floatingLabelText="goals"
		       		multiLine={true}
		     			onChange={this.handleGoalsChange.bind(this)}
				  	/><br/>
        			</Dialog2>
					  <Table>
					    <TableBody displayRowCheckbox={false}>
					    	<TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><GymsIcon/>My Gyms is: {this.state.session.gyms ? this.state.session.gyms : 'Not filled'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn ><GoalIcon/>My Goal is: {this.state.session.goals ? this.state.session.goals : 'Not filled'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><BiographIcon/>Biography: {this.state.session.biography ? this.state.session.biography : 'Not filled'}</TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false} displayBorder={false}>
					        <TableRowColumn><QualificationIcon/>My qualification: {this.state.session.qualification ? this.state.session.qualification : 'Not filled'}</TableRowColumn>
					      </TableRow>
					    </TableBody>
					  </Table>
					</div>
				</div>
			)
	};
};

export default Info;