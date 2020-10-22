/** @format */

// eslint-disable-next-line no-unused-vars
const pageTitle = [
  {
    title: 'Login | Crown World Mobility',
    buttonName: 'Login',
  },
  {
    title: 'Timeline | Crown World Mobility',
    buttonName: 'Home',
  },
  {
    title: 'My Contacts | Crown World Mobility',
    buttonName: 'My Contacts',
  },
  {
    title: 'My Documents | Crown World Mobility',
    buttonName: 'My Documents',
  },
  {
    title: 'My Services | Crown World Mobility',
    buttonName: 'My Services',
  },
  {
    title: 'Quick Links | Crown World Mobility',
    buttonName: 'Quick Links',
  },
];
const messages = {
  loginMsg: {
    invalidEmailPassword: 'Wrong email or password.',
    mandEmail: 'Enter Username',
    mandPwd: 'Enter Password',
    validEmail: 'Enter valid Username',
    loginMsg: 'Logged In successfully!',
    logoutMsg: 'Logged Out successfully!',
    acctLock:
      'Your account has been blocked after multiple consecutive login attempts. We' +
      "'" +
      've sent you an email with instructions on how to unblock it.',
  },
};

module.exports = {messages, pageTitle};
