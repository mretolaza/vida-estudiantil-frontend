import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";


// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-react/views/loginPageStyle.jsx";
import './styles.css';

const { REACT_APP_SERVER_URL } = process.env;

class NewTeamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            errors: {}
        };
    }
    newTeam = async e => {
        e.preventDefault();

        const { history } = this.props;

        const fields = ["nombre", "tipo", "descripcion"];
        const formElements = e.target.elements;

        const formValues = fields
            .map(field => ({
                [field]: formElements.namedItem(field).value
            }))
            .reduce((current, next) => ({ ...current, ...next }));

        let newTeamRequest;
        try {
            newTeamRequest = await axios.post(
                `http://${REACT_APP_SERVER_URL}/new-club`,
                {
                    ...formValues
                },
                {
                    withCredentials: true
                }
            );
        } catch ({ response }) {
            newTeamRequest = response;
        }
        const { data: newTeamRequestData } = newTeamRequest;
        if (newTeamRequestData.success) {
            return history.push("/auth");
        }

        this.setState({
            errors: newTeamRequestData.messages && newTeamRequestData.messages.errors
        });
    };
    handleToggle = value => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };
    render() {
        const { classes } = this.props;
        const { errors } = this.state;
        return (
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <form onSubmit={this.newTeam}>
                            <Card className={classes[this.state.cardAnimaton]}>
                                <CardHeader
                                    className={`${classes.cardHeader} ${classes.textCenter}`}
                                    color="primary"
                                >
                                    <h4 className={classes.cardTitle}>Crear Equipo Deportivo</h4>
                                </CardHeader>
                                <br></br>
                                <CardBody>
                  <CustomInput
                    labelText="Nombre..."
                    id="nombre"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "nombre",
                    }}
                  />
                  <label className="FormField_Label" htmlFor="name">Tipo</label>
                    <select className="FormField_Options">
                        <option value="Ninguna">           -Selecciona-        </option>
                        <option value="Siesta">Voleibol</option>
                        <option value="Pacha">Baloncesto</option>
                        <option value="Pacha">Futsal Colaboradores</option>
                        <option value="Pacha">Futsal Estudiantes</option>
                        <option value="Pacha">Futsal Femenino</option>
                    </select>
                  
                </CardBody>
                                <CardFooter className={classes.justifyContentCenter}>
                                    <Button type="submit" color="success" simple size="lg" block>
                                        Crear
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

NewTeamPage.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object,
    errors: PropTypes.object
};

export default withStyles(loginPageStyle)(NewTeamPage);