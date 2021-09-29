import React from 'react';
import { useSelector } from "react-redux";
import { Card, CardContent, CardActionArea, CardMedia, Typography, Box } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useStyles from './styles.js';

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const {categories} = useSelector(state => state.categories);

    return (
      <Card>
        <CardActionArea>
          <LazyLoadImage
            className={classes.cardMedia}
            alt={product.name}
            src={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {product.price} {product.currency}
              </Typography>
              <Rating value={product.rating} readOnly />
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              Category: {categories.map(category => category.id == product.categoryId ? category.name : '')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">Color: {product.color}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default ProductCard;
