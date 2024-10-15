import React from 'react';

const Login = ({ submittedData }) => {
  const [input, setInput] = React.useState({ email: '', password: '' });
  const [errorMessage, seterrorMessage] = React.useState('');
  const [successMessage, setsuccessMessage] = React.useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage('');
    seterrorMessage('');

    const foundUser  = submittedData.find((user) => user.email === input.email && user.password === input.password);

    if (!foundUser ) {
      return seterrorMessage('Invalid email or password');
    }

    setsuccessMessage('Successfully logged in!');
    // Maybe redirect to a protected route or perform other login-related actions
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: 'url("images/books.png")' }}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={formSubmitter}>
              <span className="login100-form-title p-b-49">Login</span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
              )}
              <div className="wrap-input100 validate-input m-b-23" data-validate="email is required">
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your username"
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="&#xf206;" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="&#xf190;" />
              </div>
              <div className="text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Or Sign Up Using</span>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Login;
