import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const pageMargin = 15;
export const cardSubText = 10;
export const cardPadding = 15;
export const textWeight = 700;
export const borderRadius = 10;
export const cardMainText = 13;
export const cardRightText = 12;
export const cardHeaderText = 12;
export const cardAmountText = 25;

export const red = "red";
export const gray = "gray";
export const blue = "blue";
export const black = "black";
export const white = "white";
export const green = "green";
export const dark = colors.dark;
export const lightGray = colors.lightGray;

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    fontSize: 40,
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textLink: {
    color: blue,
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: gray,
  },
  buttonText: {
    color: white,
    fontSize: 18,
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextSmall: {
    color: white,
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 20,
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: white,
    borderRadius: 16,
    gap: 20,
  },
});
