import React from 'react';
import Info from './info';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AJAX from '../../ajax.js';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import rd3 from 'react-d3';
import Message from './message'
var AreaChart = rd3.AreaChart;
var PieChart = rd3.PieChart;
var BarChart = rd3.BarChart;







const styles = {
  layout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  bottom: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  left: {
    width: '15%',
    marginRight: '10px'
  },
  right: {
    width: '75%',
    marginRight: '-40px'
  },
};

class MyProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			open: false,
			star: 5,
      starHalf: 0,
      session: ''
		};
	};

	componentWillMount() {
    AJAX.get('/session', {}, (session) => {
      this.setState({session: session});
      this.setState({
      	star: parseInt(this.state.session.rating),
      	starHalf: this.state.session.rating % 1 > 0 ? 1 : 0,
    	});
    });

  }

	handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
     AJAX.get('/session', {}, (session) => {
      this.setState({session: session});
    });
  };

  countStar() {
    var result = [];
    var i = 0;
    while (i < this.state.star) {
      result.push(<Star key={Math.random()}/>);
      i ++;
    }
    this.state.starHalf > 0 ? result.push(<StarHalf key={Math.random()}/>) : result;
    while (result.length < 5) {
      result.push(<StarBorder key={Math.random()}/>);
    }
    return result;
  };


	render() {
		const action = [
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];
  //   var barData = [
  // 		{label: 'A', value: 5},
  // 		{label: 'B', value: 6},
  // 		{label: 'F', value: 7}
		// ];
		const pieData = [
  		{label: 'Gui', value: 25.0},
  		{label: 'Andy', value: 25.0},
  		{label: 'Tom', value: 50.0 },
  		// {label: 'Chao', value: 25.0 },
		];
		var barData = [
  		{ 
    		"name": "Monthly trainning history",
    		"values": [
    			{ "x": 'Jan', "y":  1}, 
    			{ "x": 'Feb', "y":  3},
    			{ "x": 'Mar', "y":  2}, 
    			{ "x": 'Apr', "y":  1}, 
    			{ "x": 'May', "y":  6},
    			{ "x": 'Jun', "y":  1},
    			{ "x": 'July', "y":  4},
    			{ "x": 'Aug', "y":  1},
    			{ "x": 'Sept', "y":  2},
    			{ "x": 'Oct', "y":  1},
    			{ "x": 'Nov', "y":  3},
    			{ "x": 'Dec', "y":  1},] 
    	}
    ];
		return (
			<div>
				<Dialog
        	actions={action}
        	modal={true}
        	open={this.state.open}
      	>
					<Info />
				</Dialog>
				<div style={styles.layout}>
        	<div>
          	<Avatar size={150} src={this.state.session.image_url} style={{marginTop: '10px'}}/>
       		</div>
        	<div>
          	<h1>{this.state.session.first + ' ' + this.state.session.last}</h1>
				  	<div>{this.countStar()}</div>
			  		<button onClick={this.handleOpen.bind(this)} style={{marginTop:'30px'}}>Edit profile</button>
				  </div>
				  <div style={{marginTop:'30px'}}>
				  	<h4><PhoneIcon/>: {'   ' + this.state.session.phone}</h4>
				  	<h4><EmailIcon/>: {'   ' + this.state.session.email}</h4>
				  </div>
				</div>  
				<br />
				<br />
				<Divider />
				<div style={styles.bottom}>
					<div style={styles.left}>
            <PieChart
  						data={pieData}
  						width={300}
  						height={200}
  						radius={65}
  						innerRadius={20}
  						title="My trainer"
						/>
					</div>
					<div style={styles.right}>	
						<BarChart
  						data={barData}
  						width={600}
  						height={200}
  						fill={'#3182bd'}
  						title='Monthly trainning history'
						/>
					</div>	
				</div>
				<br/>
				<Divider />
				<div>
					<div>
						<Table>
							<TableBody displayRowCheckbox={false}>
							  <TableRow selectable={false}>
							    <TableRowColumn><h4>Biography</h4></TableRowColumn>
							    <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}><h5>{this.state.session.biography}</h5></TableRowColumn>
							  </TableRow>
							  <TableRow selectable={false}>
					        <TableRowColumn ><h4>Goal</h4></TableRowColumn>
							    <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}><h5>{this.state.session.goals}</h5></TableRowColumn>
					      </TableRow>
							  <TableRow selectable={false}>
							  	<TableRowColumn ><h4>Gyms</h4></TableRowColumn>
							    <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}><h5>{this.state.session.gyms}</h5></TableRowColumn>
					      </TableRow>
					      <TableRow selectable={false}>
							  	<TableRowColumn ><h4>Qualification</h4></TableRowColumn>
							    <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}><h5>{this.state.session.qualification}</h5></TableRowColumn>
					      </TableRow>
					    </TableBody>
						</Table>
					</div>
				</div>
      </div>
		)
	}
};


export default MyProfile;



				// <AppBar showMenuIconButton={false}
				// 	title={'My profile'}
				// />