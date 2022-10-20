import {
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useCart } from "react-use-cart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
    color: "#111",
    "&:hover": {
      borderBottom: "3px solid rgb(157 95 59)",
      color: "#111",
      paddingBottom: "6px",
    },
  },
  menu: {
    color: "#111",
  },
});

const Navbar = ({ Searchby, setSearchby }) => {
  const classes = useStyles();
  const { totalItems } = useCart();

  return (
    <Container maxWidth="xl" component="header">
      <Grid container className="pt-2" display="flex" component="nav">
        <Grid item md={6} sm={7} xs={12} display="flex" alignItems="center">
          <Typography
            sx={{ background: "#111", color: "#fff" }}
            className="fs-22 fw-400 p-2"
          >
            E - M A R T
          </Typography>
          <Box marginLeft="10px" sx={{ height: "17px" }}>
            <TextField
              value={Searchby}
              onChange={(e) => {
                setSearchby(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              variant="standard"
              className="p-10"
              sx={{ borderBottom: 0 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sm={7}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography marginRight={3}>
            <Link to="/" className={classes.root}>
              Shop
            </Link>
          </Typography>
          <Typography marginRight={3}>
            <Link to="/women" className={classes.root}>
              Women
            </Link>
          </Typography>
          <Typography marginRight={3}>
            <Link to="/men" className={classes.root}>
              Men
            </Link>
          </Typography>
          <Typography marginRight={3}>
            <Link to="/sale" className={classes.root}>
              Sale
            </Link>
          </Typography>
          <Typography marginRight={3}>
            <Link to="/about" className={classes.root}>
              About
            </Link>
          </Typography>
          <Typography marginRight={3}>
            <Link to="/contact" className={classes.root}>
              Contact
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          sm={5}
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconButton>
            <Link to="/login" className={classes.menu}>
              <AccountCircleIcon sx={{ fontSize: "30px", color: "#111" }} />
            </Link>
          </IconButton>
          <Typography padding={1}>Log In</Typography>
          <IconButton>
            <Link to="/cart" className={classes.menu}>
              <Badge badgeContent={totalItems} color="primary">
                <LocalMallIcon sx={{ fontSize: "30px" }} color="action" />
              </Badge>
            </Link>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
