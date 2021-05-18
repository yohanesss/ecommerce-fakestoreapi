import { FC } from "react";
import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../types/Cart";
// Styles
import { ProductCardContainer } from "../style";

interface ItemProps {
    item: CartItemType;
    handleAddToCard: (item: CartItemType) => void;
}

export const Item: FC<ItemProps> = ({ item, handleAddToCard }) => {
    return (
        <ProductCardContainer>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCard(item)}>Add To Cart</Button>
        </ProductCardContainer>
    );
};
