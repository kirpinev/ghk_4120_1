import { style, globalStyle } from "@vanilla-extract/css";

const smartContainer = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const smartBox = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  overflow: "hidden",
  textAlign: "center",
  paddingBottom: "1rem",
  backgroundColor: "#F8F8F8",
});

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // gap: "1rem",
});

const box = style({
  textAlign: "center",
});

const bottomBtn = style({
  width: "100%",
  padding: "12px",
});

const bottomBtnThx = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const smartProductsTitle = style({
  fontSize: "22px",
  marginBottom: "1rem",
});

const productsTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.5rem",
  textAlign: "center",
});

const smartProducts = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const products = style({
  display: "flex",
  gap: "1rem",
});

const smartProduct = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.2rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const smartProductTitle = style({
  lineHeight: "26px",
  fontSize: "20px",
  marginBottom: "0.3rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const bonus = style({
  flex: 1,
});

const gifts = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
});

const gift = style({
  width: "100%",
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  padding: "0.5rem 1rem 0.5rem 0.5rem",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  flex: 1,
  flexBasis: "30%",
  minHeight: "5rem",
  cursor: "pointer",
  gap: "1rem",
});

const giftImage = style({
  objectFit: "cover",
  borderRadius: "16px",
  width: "100%",
  height: "100%",
});

const imageWrapper = style({
  width: "100px",
  height: "50px",
});

const checkMark = style({
  position: "absolute",
  right: -3,
  top: -9,
});

const wrapper = style({
  position: "relative",
  width: "92%",
});

globalStyle(`${wrapper} > div > div > div:nth-of-type(2) > div`, {
  transform: "scale(2)",
});

const productText = style({
  lineHeight: "26px",
  fontSize: "17px",
  marginBottom: 0,
});

const productIcon = style({
  transform: "scale(1.1)",
});

export const appSt = {
  bottomBtn,
  bottomBtnThx,
  container,
  box,
  productsTitle,
  products,
  productTitle,
  product,
  bonus,
  gifts,
  gift,
  checkMark,
  wrapper,
  giftImage,
  imageWrapper,
  productText,
  productIcon,
  smartContainer,
  smartBox,
  smartProducts,
  smartProductsTitle,
  smartProduct,
  smartProductTitle,
};
