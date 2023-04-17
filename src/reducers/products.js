import { createSlice } from "@reduxjs/toolkit";

const productData = [
  { id: 1, title: "Socks", price: 100, emoji: "🧦" },
  { id: 2, title: "Pants", price: 100, emoji: "👕" },
  { id: 3, title: "Pants", price: 100, emoji: "👖" },
  { id: 4, title: "Dress", price: 100, emoji: "👗" },
];

export const products = createSlice({
  name: "products",
  initialState: productData,
});
