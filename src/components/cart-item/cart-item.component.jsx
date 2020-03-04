import React from "react";

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  ItemNameContainer
} from "./cart-item.styles.jsx";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemNameContainer>{name}</ItemNameContainer>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
