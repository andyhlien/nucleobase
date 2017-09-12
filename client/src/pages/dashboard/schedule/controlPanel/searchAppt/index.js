import TextField from 'material-ui/TextField';
import React from 'react';

class SearchAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apptSearch: ''
    };
  }

  searchUpdate(event) {
    this.setState({
      apptSearch: event.target.value
    });
  }

  render() {
    return (
      <TextField 
        hintText="Search appointments..."
        value={this.state.apptSearch}
        onChange={this.searchUpdate.bind(this)}
      />
    );
  }
}

export default SearchAppointment;