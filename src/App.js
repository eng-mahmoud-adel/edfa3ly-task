import { useEffect } from "react";
import "./App.css";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import CategoryCard from "./components/cards/categoryCard/CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./redux/actions/categories";
import { getProductsByCategory } from './redux/actions/productsByCategory';
import ProductCard from "./components/cards/productCard/ProductCard";
import Form from "./components/form/Form";

const App = () => {
  const {categories} = useSelector(state => state.categories);
  const {products} = useSelector(state => state.productsByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    
  }, [dispatch, getCategories]);

  const ProductsByCategory = (categoryId) => {
    dispatch(getProductsByCategory(categoryId))
  } 

  return(
    <div className="App">
      <Container>
        <Box marginBottom={3}>
          <Typography variant="h3" align="center">Our e-commerce store</Typography>
          <Typography variant="body1" align="center">choose one of our categories from below</Typography>
        </Box>

        {/* categories section */}
        <Grid container justifyContent="space-around" style={{marginBottom: '32px'}}>
          {categories.map(category => 
            <Grid item key={category.id}>
              <CategoryCard category={category} ProductsByCategory={ProductsByCategory} />
            </Grid>
          )}
        </Grid>

        {/* products section */}
        <Grid container spacing={2}>
          <Grid item xs={5} sm={3}>
            <Form products={products} />
          </Grid>

          <Grid item xs={7} sm={9}>
            <Grid container spacing={2}>
              {products.map(product => 
                <Grid item key={product.id} xs={12} sm={6}>
                  <ProductCard product={product} />
                </Grid>
              )}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default App;
