import AddCircle from 'material-ui/svg-icons/content/add-circle';
import FlatButton from 'material-ui/FlatButton';
import SearchAppointment from './searchAppt';
import AddAppointment from './addAppt';
import React from 'react';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
    };
  }

  handleToggle() {
    this.setState({addOpen: !this.state.addOpen});
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-4" style={{
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <SearchAppointment
            filterAppointments={this.props.filterAppointments}
          />
        </div>
        <div className="col-lg-12 col-sm-4" style={{
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>{
          this.props.session.type === 'trainer' ?
          <FlatButton
            label="Create"
            hoverColor="#f44336"
            icon={<AddCircle />}
            labelPosition="before"
            style={{color: 'white'}}
            backgroundColor="#263238"
            onClick={this.handleToggle.bind(this)}
          /> :
          ''
        }
          <AddAppointment 
            addOpen={this.state.addOpen}
            addAppointment={this.props.addAppointment}
            handleToggle={this.handleToggle.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ControlPanel;