import $ from 'jquery';

module.exports.post = (endpoint, options, callback) => {
    $.ajax({
    type: 'POST',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('ERROR:', error);
    }
  });
};

module.exports.delete = (endpoint, options, callback) => {
    $.ajax({
    type: 'DELETE',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('ERROR:', error);
    }
  });
};

module.exports.put = (endpoint, options, callback) => {
    $.ajax({
    type: 'PUT',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('ERROR:', error);
    }
  });
};

module.exports.get = (endpoint, options, callback) => {
    $.ajax({
    type: 'GET',
    url: endpoint,
    data: options,
    success: (data) => {
      console.log('SUCCESS:', data);

      callback( data );
    },
    error: (error) => {
      console.log('ERROR:', error);
    }
  });
};