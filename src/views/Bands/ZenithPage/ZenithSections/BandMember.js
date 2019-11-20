import React from "react";

// import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import GridItem from "components/Grid/GridItem.js";

const BandMember = props => {
  return (
    <GridItem xs={12} sm={6} md={3} className={props.classes.gridItem}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12} className={props.classes.itemGrid}>
          <img src={props.image} alt="..." className={props.imageClasses} />
        </GridItem>
        <h3 className={props.classes.cardTitle}>
          {props.member}
          <br />
        </h3>
        <CardBody>
          <p className={props.classes.description}>{props.content}</p>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default BandMember;
