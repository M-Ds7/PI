import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from 'react';
import MiImagen from './img/login-icon.svg'
import Usu from './img/username-icon.svg'
import Pass from './img/password-icon.svg'
import IMGperritos from './img/IMGperritos.jpg'
import axios from 'axios'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      Dataerror: false
    };
  }

  ImgUserPass = {
    height: '1rem'
  }

  div = {
    width: '25rem'
  }

  ImgLog = {
    height: '7rem'
  }

  newImage = {
    maxHeight: '100%',
    maxWidth: '100%'
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    axios.post('https://api-rest-pets-lost.onrender.com/api/users/login', { email: this.state.email, password: this.state.password })
      .then(token => {
        console.log("TOKEN", token);
      })
      .catch(error => {
        console.log("error", error);
        if (error.response && error.response.status === 401) {
          this.setState({... this.state,Dataerror:true})
        setTimeout(() => {
          this.setState({... this.state, Dataerror: false})
        }, 5000);
      }
      })
  }

  render() {
    return (
      <>
        <div className="container bg-dark">
          <div className="row">
            <div className="col-md-6">
              <img src={IMGperritos} alt="Imagen perritos" style={this.newImage} />
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-5 rounded-5 text-secondary" style={this.div}>
                  <div className="d-flex justify-content-center">
                    <img src={MiImagen} alt="login-icon" style={this.ImgLog} className="img-fluid" />
                  </div>
                  {
                    this.state.Dataerror == true?(
                      <div className="alert alert-danger" role="alert">
                        Correo o contraseña incorrecto 
                      </div>
                    ):(
                      null
                    )
                  }
                  <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
                  <div className="input-group mt-5">
                    <div className="input-group-text bg-info">
                      <img src={Usu} alt="Icono de correo electronico" style={this.ImgUserPass} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder='Introcuce tu email'
                      required
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group mt-5">
                    <div className="input-group-text bg-info">
                      <img src={Pass} alt="Icono contraseña" style={this.ImgUserPass} />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder='Introduce tu crontraseña'
                      required
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <button type="button" className="btn btn-success w-100 mt-3" onClick={this.handleLogin}>Iniciar Sesión</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Login;
