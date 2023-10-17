import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from 'react';
import New from './img/New.png'
import Animals from './img/Animals.jpg'
import Axios from 'axios'

class Registro extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      phoneNumber: '',
      dataerror: false
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
    console.log('Subiendo datos')
    Axios.post('https://api-rest-pets-lost.onrender.com/api/users/new', {name:this.state.name,lastname: this.state.lastname ,email:this.state.email
    ,password: this.state.password, cellphone:this.state.phoneNumber })
    .then(token=>{
      console.log('Token', token);
    })
    .catch(error =>{
      console.log('error',error);
      if (error.response && error.response.status === 500) {
        this.setState({... this.state,dataerror: true})
        setTimeout(() => {
          this.setState({... this.state, dataerror: false})
        }, 5000);
      }  
      })
      
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
              {
                    this.state.dataerror == true?(
                      <div className="alert alert-danger" role="alert">
                        correo electronico ya existente
                      </div>
                    ):null
                  }
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label className="form-label">Nombre:</label>
                  <input
                    type="text"
                    id="textName"
                    className="form-control"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label  className="form-label">Apellidos:</label>
                  <input
                    type="text"
                    id="latsname"
                    className="form-control"
                    name="lastname"
                    required
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label  className="form-label">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              <div>
                <label  className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
            <div>
              <label className="form-label">Número de Teléfono:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                required
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="btn btn-success w-100 mt-3">Registrarse</button>
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
