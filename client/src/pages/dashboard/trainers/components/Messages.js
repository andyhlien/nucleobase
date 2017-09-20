import AJAX from '../../../../ajax.js';
import React from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messageElement = (message, index) => (
      <div key={index}>
        <b>{
          message.sender.first + ' ' + message.sender.last
        }
        </b>
        <div>{
          message.message
        }
        </div>
      </div>
    );

    return (
      <div>{
        this.props.messages.map((message, index) => messageElement(message, index))
      }
      </div>
    )
  }
}

export default Messages;