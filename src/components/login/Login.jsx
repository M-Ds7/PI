import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from 'react';
import MiImagen from './img/login-icon.svg'
import Usu from './img/username-icon.svg'
import Pass from './img/password-icon.svg'
import IMGperritos from './img/IMGperritos.jpg'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }
  
  ImgUserPass = {
    height: '1rem'
  }

  div ={
    width: '25rem'
  }

  ImgLog = {
    height :'7rem'
  }

  newImage = {
    maxHeight :'100%',
    maxWidth: '100%'
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    const { email, password } = this.state;

    // Lógica de autenticación simulada 
    if (email === 'usuario@example.com' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      this.setState({ errorMessage: 'Inicio de sesión fallido. Verifica tus credenciales.' });
    }
  }

  render() {
    return (
      <>
      <div className="container bg-dark">
        <div className="row">
          <div className="col-md-6">
            <img src={IMGperritos} alt="Imagen perritos" style={this.newImage}/>
          </div>
          <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-5 rounded-5 text-secondary" style={this.div}>
          <div className="d-flex justify-content-center">
            <img src={MiImagen} alt="login-icon" style={this.ImgLog} className="img-fluid"/>
          </div>
          <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
             <div className="input-group mt-5">
              <div className="input-group-text bg-info">
                <img src={Usu} alt="Icono de correo electronico" style={this.ImgUserPass}/>
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
                <img src={Pass} alt="Icono contraseña" style={this.ImgUserPass}/>
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
            
              <button type="button" className="btn btn-success w-100 mt-3"onClick={this.handleLogin}>Iniciar Sesión</button>
          </div>
          {this.state.errorMessage && (
            <div className="text-danger">{this.state.errorMessage}</div>
          )}
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
