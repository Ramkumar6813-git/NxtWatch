import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../ThemeAndVideoContext'

import {
  BgContainer,
  LoginFormContainer,
  WebsiteLogo,
  InputDiv,
  CheckBoxDiv,
  CheckBox,
  Label,
  TextLabel,
  Input,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = errMsg => {
    this.setState({
      showError: true,
      errMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {errMsg, showError, password, username, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <BgContainer bgColor={isDarkTheme ? '#212121' : '#ffffff'}>
              <LoginFormContainer
                onSubmit={this.onSubmitForm}
                bgColor={isDarkTheme ? '#000000' : '#ffffff'}
                shadowColor={isDarkTheme ? '' : '#e2e8f0'}
              >
                {isDarkTheme ? (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}

                <InputDiv>
                  <Label
                    htmlFor="username"
                    color={isDarkTheme ? '#f9f9f9' : '#606060'}
                  >
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    value={username}
                    id="username"
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                    borderColor={isDarkTheme ? '#94a3b8' : '#cbd5e1'}
                    color={isDarkTheme ? '#ffffff' : '#181818'}
                  />
                </InputDiv>
                <InputDiv>
                  <Label
                    htmlFor="password"
                    color={isDarkTheme ? '#f9f9f9' : '#606060'}
                  >
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                    placeholder="Password"
                    color={isDarkTheme ? '#ffffff' : '#181818'}
                    borderColor={isDarkTheme ? '#94a3b8' : '#cbd5e1'}
                  />
                </InputDiv>
                <CheckBoxDiv>
                  <CheckBox
                    type="checkbox"
                    onChange={this.onClickShowPassword}
                    id="checkbox"
                  />
                  <TextLabel
                    htmlFor="checkbox"
                    color={isDarkTheme ? '#f4f4f4' : '#181818'}
                  >
                    Show Password
                  </TextLabel>
                </CheckBoxDiv>
                <LoginButton type="submit">Login</LoginButton>
                {showError ? <ErrorMsg>&#42;{errMsg}</ErrorMsg> : ''}
              </LoginFormContainer>
            </BgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default LoginForm
