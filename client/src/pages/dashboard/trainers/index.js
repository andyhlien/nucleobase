import Affiliations from './components/Affiliations.js';
import Messages from './components/Messages.js';
import AJAX from '../../../ajax.js';
import React from 'react';

class Trainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      trainers: [],
      trainees: [],
      messages: [],
      message: '',
      session: {}
    };
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session)=>{
      this.setState({session: session}, () => {
        if ( this.state.session.type === 'trainer' ) {
          AJAX.get('/appointments', {sender: this.state.session.id}, (appointments) => {
            var trainees = {};

            appointments.forEach((appointment) => {
              if (appointment.receiver && !trainees[appointment.receiver.id]) {
                trainees[appointment.receiver.id] = true;

                this.state.trainees.push(appointment.receiver);
              }
            });

            this.setState({
              trainees: this.state.trainees,
            });
          });
        } else {
          AJAX.get('/appointments', {receiver: this.state.session.id}, (appointments) => {
            var trainers = {};

            appointments.forEach((appointment) => {
              if (appointment.sender && !trainers[appointment.sender.id]) {
                trainers[appointment.sender.id] = true;

                this.state.trainers.push(appointment.sender);
              }

              this.setState({
                trainers: this.state.trainers,
              });
            });
          });
        }
      });
    });
  }

  selectUser(user) {
    this.setState({
      selected: user
    }, () => {
      this.getMessages();
    });
  }

  getMessages() {
    AJAX.get('/messages', {
      sender: this.state.session.id,
      receiver: this.state.selected.id
    }, (messagesA) => {
      AJAX.get('/messages', {
        sender: this.state.selected.id,
        receiver: this.state.session.id
      }, (messagesB) => {
        this.setState({
          messages: messagesA.concat(messagesB).sort((messageA, messageB) => {
            return messageA.id - messageB.id;
          })
        });
      });
    });
  }

  updateMessage(event) {
    this.setState({message: event.target.value});
  }

  submitMessage(event) {
    if (event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
      AJAX.post('/messages', {
        sender: this.state.session.id,
        receiver: this.state.selected.id,
        message: this.state.message
      }, (message) => {
        this.setState({message: ''}, () => {
          this.getMessages();
        });
      });
    }
  }

  render() {
    const inputElement = () => (
      <div>
        <input value={this.state.message} onKeyPress={this.submitMessage.bind(this)} onChange={this.updateMessage.bind(this)}/>
        <button onClick={this.submitMessage.bind(this)}/>
      </div>
    )

    return (
      <div>
        <Messages
          messages={this.state.messages}
        />{
          this.state.selected ?
          inputElement() :
          ''
        }
        <Affiliations
          session={this.state.session}
          trainers={this.state.trainers}
          trainees={this.state.trainees}
          selectUser={this.selectUser.bind(this)}
        />
      </div>
    );
  }
}

export default Trainers;