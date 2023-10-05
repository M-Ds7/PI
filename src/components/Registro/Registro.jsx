import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from 'react';
import New from './img/New.png'
import Animals from './img/Animals.jpg'


class Registro extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      errorMessage: ''
    };
  }

  newImage = {
    maxHeight :'100%',
    maxWidth: '100%'
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío de datos del formulario, como enviarlos a un servidor o realizar validaciones.
    console.log('Datos enviados:', this.state);
  }

  render() {
    return (
      <>
      <div className="container bg-dark">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img src={Animals} alt="" style={this.newImage}/>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-5 rounded-5 text-secondary">
              <div className="d-flex justify-content-center">
                <img src={New} alt="New ussers" className="img-fluid" style={{height:'7rem'}}/>
              </div>
              <div className="text-center fs-1 fw-bold">Registro</div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="textName" className="form-label">Nombre:</label>
                  <input
                    type="text"
                    id="textName"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              <div>
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
            <div>
              <label htmlFor="phoneNumber" className="form-label">Número de Teléfono:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="button" className="btn btn-success w-100 mt-3">Registrarse</button>
          </form>
          {this.state.errorMessage && (
            <div className="error-message">{this.state.errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  </div>
      </>
      
    );
  }
}

export default Registro;
