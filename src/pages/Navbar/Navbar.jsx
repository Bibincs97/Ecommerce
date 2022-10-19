import {
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCart } from 'react-use-cart';

const Navbar = () => {
  const { totalItems } = useCart();
  console.log(totalItems);
  return (
    <Container maxWidth="xl" component="header">
      <Grid container className="pt-2" display="flex" component="nav">
        <Grid item md={6} display="flex" alignItems="center">
          <Typography
            sx={{ background: '#111', color: '#fff' }}
            className="fs-22 fw-400 p-2"
          >
            E - M A R T
          </Typography>
          <Box marginLeft="10px" sx={{ height: '17px' }}>
            <TextField
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
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography marginRight={3}>Shop All</Typography>
          <Typography marginRight={3}>Women</Typography>
          <Typography marginRight={3}>Men</Typography>
          <Typography marginRight={3}>Sale</Typography>
          <Typography marginRight={3}>About</Typography>
          <Typography marginRight={3}>Contact</Typography>
        </Grid>
        <Grid
          item
          md={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <Typography padding={1}>Log In</Typography>
          <IconButton href="/cart">
            <Badge badgeContent={totalItems} color="primary">
              <LocalMallIcon sx={{ fontSize: '30px' }} color="action" />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
