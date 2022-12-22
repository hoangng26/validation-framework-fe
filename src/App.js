import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './App.module.scss';
import InputField from './components/InputField/InputField';

const cx = classNames.bind(styles);

function App() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredDoB, setEnteredDoB] = useState(new Date(Date.now()).toLocaleDateString('en-CA'));

  const [notification, setNotification] = useState({
    email: '',
    password: '',
    phone: '',
    dob: '',
  });

  const validateFormHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://fitvalidationframework.azurewebsites.net/api', {
        email: enteredEmail,
        password: enteredPassword,
        phone: enteredPhone,
        dob: enteredDoB,
      })
      .then((response) => {
        setNotification({
          email: response.data.Email.split('|')[0],
          password: response.data.Password.split('|')[0],
          phone: response.data.Phone.split('|')[0],
          dob: response.data.DoB.split('|')[0],
        });
      });
  };

  return (
    <div className="App">
      <div className={cx('main')}>
        <form onSubmit={validateFormHandler} className={cx('form')}>
          <h3 className={cx('heading')}>Register</h3>
          <p className={cx('desc')}>Learn Design Pattern together ❤️</p>

          <div className={cx('spacer')}></div>

          <InputField
            id="email"
            name="email"
            placeholder="VD: email@domain.com"
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
            label="Email"
            message={notification.email}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={(event) => setEnteredPassword(event.target.value)}
            label="Password"
            message={notification.password}
          />
          <InputField
            id="phone"
            name="phone"
            placeholder="Ex: 0987654321"
            value={enteredPhone}
            onChange={(event) => setEnteredPhone(event.target.value)}
            label="Phone"
            message={notification.phone}
          />
          <InputField
            id="dob"
            name="dob"
            type="date"
            value={enteredDoB}
            onChange={(event) => setEnteredDoB(event.target.value)}
            label="Date of Birth"
            message={notification.dob}
          />

          <button className={cx('form-submit')}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
