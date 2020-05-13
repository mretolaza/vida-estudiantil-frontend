import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

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

const { REACT_APP_SERVER_URL } = process.env;

class ChangePassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            errors: {}
        };
    }
    changePass = async e => {
        e.preventDefault();

        const { history } = this.props;

        const fields = ["username"];
        const formElements = e.target.elements;

        const formValues = fields
            .map(field => ({
                [field]: formElements.namedItem(field).value
            }))
            .reduce((current, next) => ({ ...current, ...next }));

        let changePassRequest;
        try {
            changePassRequest = await axios.post(
                `http://${REACT_APP_SERVER_URL}/update-pass`,
                {
                    ...formValues
                },
                {
                    withCredentials: true
                }
            );
        } catch ({ response }) {
            changePassRequest = response;
        }
        const { data: changePassRequestData } = changePassRequest;
        if (changePassRequestData.success) {
            return history.push("/auth");
        }

        this.setState({
            errors: changePassRequestData.messages && changePassRequestData.messages.errors
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
                        <form onSubmit={this.changePass}>
                            <Card className={classes[this.state.cardAnimaton]}>
                                <CardHeader
                                    className={`${classes.cardHeader} ${classes.textCenter}`}
                                    color="primary"
                                >
                                    <h4 className={classes.cardTitle}>Actualizar mi contraseña</h4>
                                </CardHeader>
                                <br></br>
                                <CardBody>
                                    <CustomInput
                                        labelText="Ingresar nueva contraseña"
                                        id="password"
                                        error={errors.password || errors.invalidEmailOrPassword}
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.formControlClassName
                                        }}
                                        inputProps={{
                                            type: "password",
                                            required: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Icon className={classes.inputAdornmentIcon}>
                                                        lock_outline
                                                    </Icon>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <br></br>
                                </CardBody>
                                <br></br>
                                <CardBody>
                                    <CustomInput
                                        labelText="Confirmar contraseña"
                                        id="password"
                                        error={errors.password || errors.invalidEmailOrPassword}
                                        formControlProps={{
                                            fullWidth: true,
                                            className: classes.formControlClassName
                                        }}
                                        inputProps={{
                                            type: "password",
                                            required: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Icon className={classes.inputAdornmentIcon}>
                                                        lock_outline
                                                    </Icon>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <br></br>
                                </CardBody>
                                <CardFooter className={classes.justifyContentCenter}>
                                    <Button type="submit" color="success" simple size="lg" block>
                                        Actualizar mi contraseña
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

ChangePassPage.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object,
    errors: PropTypes.object
};

export default withStyles(loginPageStyle)(ChangePassPage);
