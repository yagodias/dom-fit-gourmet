import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    width: 150,
  },
  cardContent: {
    flexGrow: 1,
  },
  totalPrice: {
    marginTop: theme.spacing(2),
    textAlign: 'right',
  },
}));

const OrderPage = () => {
  const classes = useStyles();

  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Chicken Wrap',
      price: 8.99,
      image: 'path/to/chicken-wrap.jpg',
    },
    {
      id: 2,
      name: 'Veggie Wrap',
      price: 7.99,
      image: 'path/to/veggie-wrap.jpg',
    },
    // Add more products as needed
  ];

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToOrder = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Order Page
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={product.image}
                title={product.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="subtitle1">${product.price.toFixed(2)}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToOrder(product)}
                >
                  Add to Order
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" className={classes.totalPrice}>
        Total Price: ${calculateTotalPrice().toFixed(2)}
      </Typography>
    </div>
  );
};

export default OrderPage;