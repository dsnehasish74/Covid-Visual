import React from 'react'
import { Card,CardContent,Typography  } from '@material-ui/core';

function InfoBox({title,newcase,totalcase,color}){
  return(
  <div className="infobox">
    <Card className={"infobox_card_"+color}>
      <CardContent>
          <Typography className={color} variant="subtitle1">{title}</Typography>
          <Typography className={color} variant="subtitle2">+{newcase}</Typography>
          <Typography className={color} variant="h6" ><strong>{totalcase}</strong></Typography>
      </CardContent>
    </Card>
  </div>
  );
}

export default InfoBox;
