import { style } from "@vanilla-extract/css";

// .productList {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
//   gap: 1rem;
//   width: 80%;
//   margin: 2rem auto;
// }
export const ProductList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
  gap: "1rem",
  width: "80%",
  margin: "2rem auto",
});
