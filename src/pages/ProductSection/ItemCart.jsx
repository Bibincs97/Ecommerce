import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useCart } from "react-use-cart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    color: "#111",
    "&:active": {
      borderBottom: "3px solid rgb(157 95 59)",
      color: "#111",
      paddingBottom: "6px",
    },
  },
  menu: {
    color: "#111",
  },
});

const ItemCart = ({ image, price, title, products, rating }) => {
  const classes = useStyles();
  const { addItem } = useCart();
  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
          elevation={0}
        >
          <CardMedia
            component="img"
            height="300"
            width="140"
            image={image}
            alt={title}
            sx={{ objectFit: "contain", padding: "10px" }}
          />
          <Grid container>
            <Grid item md={8} sm={12}>
              <CardContent
                sx={{ flexGrow: 1, padding: "2px", paddingLeft: "18px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="fs-18 fw-500"
                >
                  {title}
                </Typography>
                <Rating
                  name="read-only"
                  value={rating.rate}
                  readOnly
                  sx={{ paddingTop: "5px" }}
                />
                <Typography className="fs-18 fw-500 pt-2">
                  Price: ${price}
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              md={4}
              sm={12}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <CardActions>
                <Button
                  onClick={() => {
                    addItem(products);
                  }}
                  sx={{
                    background: "#111",
                    borderRadius: "10px",
                    border: "1px solid #111",
                    padding: "8px",
                    color: "#fff",
                    "&:hover": {
                      border: "1px solid #111",
                      color: "#111",
                    },
                  }}
                >
                  <Typography className="fs-12">Add to cart</Typography>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default ItemCart;
