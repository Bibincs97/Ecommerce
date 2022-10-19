import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useCart } from "react-use-cart";

const ItemCart = ({ image, price, title, products }) => {
  const { addItem } = useCart();
  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "#fbfbfb",
            borderRadius: "10px",
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
                <Typography className="fs-18 fw-500">Rs. {price}</Typography>
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
                    padding: "9px",
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
