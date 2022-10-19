import {
  Grid,
  Typography,
  Box,
  Container,
  CircularProgress,
} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../Axios';
import ItemCart from './ItemCart';

const Products = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      const products = await axios.get('/products');
      setState(products.data);
      setLoading(false);
    };
    data();
  }, [state]);

  return (
    <Container maxWidth="xl">
      <Box className="text-center" marginTop={1} padding={4}>
        <Typography className="fs-50 fw-600 text-dark px-4">
          NEW ARRIVALS
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <CircularProgress />
            <Typography className="fs-20 fw-500 px-3">Loading...</Typography>
          </Box>
        ) : (
          state.map((product) => {
            return (
              <ItemCart
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                rating={product.rating}
                products={product}
              />
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default Products;
