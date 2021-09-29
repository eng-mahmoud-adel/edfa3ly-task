import React, { useEffect, useState } from 'react';
import { Slider, FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox, Typography, Grid, Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../redux/actions/productsByCategory.js';
import useStyles from './styles.js'; 

const Form = ({ products }) => {
    const classes = useStyles();

    // get values for slider
    let min_max_price = [];
    if(products.length) {
        let prices = [];
        products.map(product => prices.push(product.price));
        let minPrice = prices.sort()[0];
        let maxPrice = prices.sort()[products.length-1];
        min_max_price.push(minPrice);
        min_max_price.push(maxPrice);
    }

    const [range, setRange] = useState([100, 350]);

    const handleChangeRange = (event, newValue) => {
        setRange(newValue);
    };

    // get values for checkboxes
    const [colors, setColors] = useState({
        "black": false,
        "cyan": false,
        "gold": false,
        "indigo": false,
        "ivory": false,
        "lavender": false,
        "magenta": false,
        "maroon": false,
        "mint green": false,
        "olive": false,
        "orange": false,
        "pink": false,
        "purple": false,
        "red": false,
        "salmon": false,
        "sky blue": false,
        "tan": false,
        "teal": false,
        "turquoise": false,
        "violet": false,
        "white": false,
        "yellow": false,
        "azure": false,
        "blue": false,
        "fuchsia": false,
        "green": false,
        "grey": false,
        "lime": false,
        "plum": false,
        "silver": false,
        "orchid": false,
    });

    const handleChangeColors = (event) => {
        setColors({ 
            ...colors,
            [event.target.name]: event.target.checked 
        });
    };

    const dispatch = useDispatch();

    // get categoryId to send it within the link
    let categoryId = '';
    if(products.length) {
        categoryId = products[0].categoryId;
    }

    // get ratings value
    const [rating, setRating] = useState(2);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let selectedColors = Object.keys(colors).filter(color => colors[color] == true);
        dispatch(filterProducts(categoryId, range[0], range[1], selectedColors, rating));
    }

    return (
        <>
            {products.length ? <form className={classes.form}>
                <Typography variant="h6">Filter by:</Typography> <br />

                <FormLabel component="legend">Price range:</FormLabel>
                <Slider
                    value={range}
                    onChange={handleChangeRange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={() => range + 'USD'}
                    max={Math.max(min_max_price[1], 1000)}
                    step={50}
                />

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Color:</FormLabel>
                    <FormGroup className={classes.colorsGroup}>
                        <Grid container className={classes.colorsContainer}>
                        {Object.keys(colors).map((color, index) => 
                            <Grid item key={index} md={6}>
                                <FormControlLabel
                                    control={<Checkbox name={color} checked={colors[color]} onChange={handleChangeColors} />}
                                    label={color}
                                />
                            </Grid>
                        )}
                        </Grid>
                    </FormGroup>
                </FormControl>

                <Box component="fieldset" mb={3} pl={0} borderColor="transparent">
                    <Typography component="legend">Average rating: </Typography>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                </Box>

                <Button variant="contained" color="primary" onClick={handleSubmit}>Filter</Button>
            </form> 
            : ''
            }
        </>
    )
}

export default Form;
