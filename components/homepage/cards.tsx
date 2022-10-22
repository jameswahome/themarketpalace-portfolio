import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface PROPS {
  cardInfo: {
    id: number;
    body: string;
    title: string;
  };
}

const CardLayout: React.FC<PROPS> = (props) => {
  const { cardInfo } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        sx={{ color: "#27283c" }}
        title={cardInfo.title}
        // subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardInfo.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLayout;
