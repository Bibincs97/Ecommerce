import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useCart } from "react-use-cart";

const TotalCartBlock = () => {
  let { items, updateItemQuantity, cartTotal, removeItem, isEmpty } = useCart();
  console.log(items);
  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fs-16 fw-500 text-dark">Item</TableCell>
              <TableCell align="right" className="fs-18 fw-500 text-dark">
                Price
              </TableCell>
              <TableCell align="right" className="fs-16 fw-500 text-dark">
                Quantity
              </TableCell>
              <TableCell align="right" className="fs-16 fw-500 text-dark">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length > 0 ? (
              items.map((item) => (
                <TableRow key={items.id}>
                  <TableCell align="right">
                    <Grid container>
                      <Grid
                        item
                        md={7}
                        display="flex"
                        justifyContent="flex-start"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          width="100px"
                          height="100px"
                        />
                      </Grid>
                      <Grid
                        item
                        md={5}
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <Typography className="fs-16 fw-500 text-dark">
                          {item.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="right" className="fs-16 fw-500 text-dark">
                    ${item.price}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      height: "170px",
                    }}
                  >
                    <Stack direction="row">
                      <Button
                        sx={{ border: "2px solid #111" }}
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity - 1);
                        }}
                      >
                        <Typography className="fs-20 fw-500 text-dark">
                          -
                        </Typography>
                      </Button>
                      <Button>
                        <Typography className="fs-18 fw-500 text-dark">
                          {item.quantity}
                        </Typography>
                      </Button>
                      <Button
                        sx={{ border: "2px solid #111" }}
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                      >
                        <Typography className="fs-20 fw-500 text-dark">
                          +
                        </Typography>
                      </Button>
                    </Stack>
                    <Typography
                      paddingLeft={2}
                      className="text-decoration-underline"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      RemoveItem
                    </Typography>
                  </TableCell>
                  <TableCell align="right" className="fs-16 fw-500 text-dark">
                    ${item.itemTotal}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography className="fs-18 fw-500 text-dark p-2">
                Your cart is empty
              </Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "right", marginTop: "18px" }}>
        <Typography className="fs-20 fw-500 text-dark">
          Subtotal $: {cartTotal}
        </Typography>
      </Box>
    </Container>
  );
};

export default TotalCartBlock;
