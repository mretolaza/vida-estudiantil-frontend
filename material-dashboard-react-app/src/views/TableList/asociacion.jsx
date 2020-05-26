import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Asociaciones Estudiantiles 2020</h4>
            <p className={classes.cardCategoryWhite}>
             Ciencias de la Computacion y T.I.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nombre", "Cargo", "Año", "Activo",  "% Asistencia", "Acciones"]}
              tableData={[
                ["Maria Ines Vasquez", "Secretaria", "Tercer año", "Si", "90%", "Editar   Eliminar"],
                ["Camila Gonzalez", "Vicepresidenta", "Tercer año", "Si","95%", "Editar   Eliminar"],
                ["Rodrigo Garoz", "Presidente", "Tercer año", "Si","98%", "Editar   Eliminar"],
                ["Cristina Bautista", "Vocal", "Tercer año", "Si","80%", "Editar   Eliminar"],
                ["Roberto Figueroa", "Vocal", "Tercer año", "Si","90%", "Editar   Eliminar"],
                ["Gustavo Mendez", "Vocal", "Tercer año", "Si","80%", "Editar   Eliminar"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
