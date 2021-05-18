import { useState } from "react";
import { useQuery } from "react-query";
// Components
import { Drawer, Badge, Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// Styles
import { Wrapper } from "./style";
import { CartItemType } from "./types/Cart";
import { getProducts } from "./api/products";
import { Item } from "./components/Item";

export const App = () => {
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        "product",
        getProducts
    );

    const getTotalItems = () => {};

    const handleAddToCart = (item: CartItemType) => {};

    const handleRemoveFromCart = () => {};

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong...</div>;

    return (
        <Wrapper>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid key={item.id} item xs={12} sm={4}>
                        <Item item={item} handleAddToCard={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};
