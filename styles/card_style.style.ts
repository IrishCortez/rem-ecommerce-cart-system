import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../contants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  prodName: {
    fontSize: SIZES.large,
    color: COLORS.primary,
  }, prodPice: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  btnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  addToCartBtn: {
    width: 100,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  removeFromCartBtn: {
    width: 80,
    height: 50,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  changeQtyBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyTxtbox: {
    width: 50, 
    height: 40, 
    paddingHorizontal: SIZES.medium,
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    fontSize: 16,
  },
  
  
});

export default styles;