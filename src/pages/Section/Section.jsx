import { Button, Typography, Stack, Box, Container } from '@mui/material';
import React from 'react';

const Section = () => {
  return (
    <Container maxWidth="xl">
      <Box
        className="text-center"
        marginTop={1}
        sx={{ background: 'rgb(157 95 59)' }}
        padding={4}
      >
        <Typography className="fs-40 fw-500 text-light" gutterBottom>
          FREE SHIPPING
        </Typography>
        <Typography className="fs-24 fw-500 text-light" gutterBottom>
          ON ORDERS OVER RS50 - USE COUPON CODE OVER200
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          marginTop={4}
        >
          <Button
            className="px-4"
            sx={{
              border: '3px solid #fff',
              color: '#fff',
              '&:hover': {
                background: '#fff',
                color: '#111',
              },
            }}
          >
            <Typography className="fs-16 fw-500">Shop Women</Typography>
          </Button>
          <Button
            className=" px-4"
            sx={{
              border: '3px solid #fff',
              color: '#fff',
              '&:hover': {
                background: '#fff',
                color: '#111',
              },
            }}
          >
            <Typography className="fs-16 fw-500">Shop Men</Typography>
          </Button>
          <Button
            className="px-4"
            sx={{
              border: '3px solid #fff',
              color: '#fff',
              '&:hover': {
                background: '#fff',
                color: '#111',
              },
            }}
          >
            <Typography className="fs-16 fw-500">Shop Sale</Typography>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Section;
