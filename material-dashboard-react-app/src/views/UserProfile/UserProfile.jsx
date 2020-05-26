import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import './styles.css';
import avatar from "assets/img/logocuadrado.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const { REACT_APP_SERVER_URL } = process.env;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
    this.updateProfile = this.updateProfile.bind(this);
  }
  async updateProfile(e) {
    e.preventDefault();

    const fields = ["name", "username", "horas_beca", "carrera", "carne", "genero", "facultad"];
    
    const formElements = e.target.elements;
    const formValues = fields
      .map(field => ({
        [field]: formElements.namedItem(field).value
      }))
      .reduce((current, next) => ({ ...current, ...next }));

    let registerRequest;
    try {
      registerRequest = await axios.post(
        `http://${REACT_APP_SERVER_URL}/profile/update-profile-info`,
        {
          ...formValues
        },
        {
          withCredentials: true
        }
      );
    } catch ({ response }) {
      registerRequest = response;
    }
    const { data: registerRequestData } = registerRequest;

    if (!registerRequestData.success) {
      this.setState({
        errors:
          registerRequestData.messages && registerRequestData.messages.errors
      });
    }
 
  }
  render() {
    const { classes, name, email, horas_beca, carrera, carne, genero, facultad } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={this.updateProfile}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
                  <p className={classes.cardCategoryWhite}>
                    Personaliza tu perfil
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Nombre"
                        id="name"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: name,
                          name: "name"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Correo"
                        id="email-address"
                        error={errors.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: email,
                          name: "username"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Horas Beca"
                        id="horas_beca"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: horas_beca,
                          name: "horas_beca"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                    <label className="FormField_Label" htmlFor="name">Carrera</label>
                    <select className="FormField_Options">
                        <option value="Ninguna">           -Selecciona-        </option>
                        <option value="Siesta">Bioinformática</option>
                        <option value="Pacha">Biomédica</option>
                        <option value="Pipi">Biotecnología Industria</option>
                        <option value="Popo">Ciencias de los Alimentos</option>
                        <option value="Pecho">Ciencia de la Administración</option>

                        <option value="Siesta">Ciencia de los Datos</option>
                        <option value="Pacha">Civil</option>
                        <option value="Pipi">Civil Ambiental</option>
                        <option value="Popo">Civil Arquitectónica</option>
                        <option value="Pecho">Civil Industrial</option>

                        <option value="Siesta">Computación y TI</option>
                        <option value="Pacha">Electrónoca</option>
                        <option value="Pipi">Industrial</option>
                        <option value="Popo">Mecánica</option>
                        <option value="Pecho">Mecatrónica</option>

                        <option value="Siesta">Química</option>
                        <option value="Pacha">Química Industrial</option>
                        <option value="Pipi">Food Business and Marketing</option>
                        <option value="Popo">International Marketing and Business Analytics</option>
                        <option value="Pecho">Biología</option>

                        <option value="Siesta">Bioquímicaa y Microbiología</option>
                        <option value="Pacha">Biotecnología Molecular</option>
                        <option value="Pipi">Comunicación y Letras</option>
                        <option value="Popo">Física</option>
                        <option value="Pecho">Matemática Aplicada</option>

                        <option value="Siesta">Nutrición</option>
                        <option value="Pacha">Química Farmaceútica</option>
                      </select>

                      {/*<CustomInput
                        labelText="Carrera"
                        id="carrera"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: carrera,
                          name: "carrera"
                        }}
                      />*/}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Carnet"
                        id="carne"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: carne,
                          name: "carne"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                    <label className="FormField_Label" htmlFor="name">Facultad</label>
                    <select className="FormField_Options">
                        <option value="Ninguna">           -Selecciona-        </option>
                        <option value="Siesta">Ingeniería</option>
                        <option value="Pacha">Ciencias Sociales</option>
                        <option value="Pipi">Educación</option>
                        <option value="Popo">Ciencias y Humanidades</option>
                        <option value="Pecho">Global Management & Business Intelligence</option>
                      </select>
                      {/*<CustomInput
                        labelText="Facultad"
                        id="facultad"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: facultad,
                          name: "facultad"
                        }}
                      />*/}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                    <label className="FormField_Label" htmlFor="name">Genero</label>
                    <select className="FormField_Options">
                        <option value="Ninguna">           -Selecciona-        </option>
                        <option value="Siesta">F</option>
                        <option value="Pacha">M</option>
                      </select>
                      {/*<CustomInput
                        labelText="Genero (F/M)"
                        id="genero"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: genero,
                          name: "genero"
                        }}
                      />*/}
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button type="submit" color="success">
                    Actualizar
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4 className={classes.cardTitle}>Queremos saber más de ti</h4>
                <p className={classes.description}>
                  Por ser la primera vez que ingresas a la plataforma necesitamos
                  que añadas algun datos personales. Asegúrate de escribirlos
                  correctamente
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  email: PropTypes.string
};

export default withStyles(styles)(UserProfile);
