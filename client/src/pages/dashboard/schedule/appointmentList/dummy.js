const appointments = [
  {
    location:  'San Francisco, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60',
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sunnyvale, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$65', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'San Mateo, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Fremont, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$100', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sunnyvale, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$65', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'San Mateo, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Fremont, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$100', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sunnyvale, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$65', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'San Mateo, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Fremont, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$100', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sunnyvale, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$65', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'San Mateo, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Fremont, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$100', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sunnyvale, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$65', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'San Mateo, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$60', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Fremont, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$100', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
  {
    location:  'Sacramento, CA',
    date: 'Sat Sep 23 2017 00:00:00 GMT-0700 (PDT)',
    price:  '$80', 
    time: {
      from: 'Thu Sep 07 2017 13:30:39 GMT-0700 (PDT)', 
      to: 'Thu Sep 07 2017 14:30:44 GMT-0700 (PDT)'
    }
  },
];

module.exports = appointments;