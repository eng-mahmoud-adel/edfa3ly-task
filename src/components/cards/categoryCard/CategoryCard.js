import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useStyles from './styles.js';

const CategoryCard = ({ category, ProductsByCategory }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} onClick={() => ProductsByCategory(category.id)}>
            <LazyLoadImage
                className={classes.cardMedia}
                alt={category.name}
                src={category.image}
            />
            <CardContent className={classes.cardContent}>
                <Typography className={classes.text} align="center"> {category.name} </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard;
