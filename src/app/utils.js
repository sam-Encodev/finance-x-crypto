import { ReferralRoute, mainRoutes } from "./constants";
import { SheetManager } from "react-native-actions-sheet";

export const status = (status) => {
  switch (status) {
    case "success":
      return "green";
    case "failed":
      return "red";
    default:
      return "blue";
  }
};

export const sheetManager = (route) => {
  switch (route) {
    case mainRoutes[0].name:
      return SheetManager.show("example-sheet", {
        payload: {
          value: "Hello 1",
        },
      });
    case mainRoutes[1].name:
      return SheetManager.show("example-sheet", {
        payload: {
          value: "Hello 2",
        },
      });
    case mainRoutes[2].name:
      return SheetManager.show("example-sheet", {
        payload: {
          value: "Hello 3",
        },
      });
    case mainRoutes[3].name:
      return SheetManager.show("example-sheet", {
        payload: {
          value: "Hello 4",
        },
      });
    case mainRoutes[4].name:
      return SheetManager.show("referral-sheet", {
        payload: {
          value: ReferralRoute,
        },
      });
    case mainRoutes[5].name:
      return SheetManager.show("crypto-favorites-sheet", {
        payload: {
          value: "crypto-fav-sheet",
        },
      });

    default:
      return;
  }
};

export const amountStatus = (amount) => {
  if (amount.includes("+")) {
    const info = amount.split("+");
    const transformedInfo = info[1];
    return transformedInfo;
  }

  return amount;
};

export const shortenAmount = (data) => {
  return data?.current_amount.toFixed(2);
};

export const percentChange = (data) => {
  const subtract = data?.current_amount - data?.last_amount;
  const divide = subtract / data?.last_amount;
  const delimiter = divide.toFixed(2);

  return delimiterStatus(delimiter);
};

export const valueChange = (data) => {
  const subtract = data?.current_amount - data?.last_amount;
  const delimiter = subtract.toFixed(2);

  if (delimiter === "0.00") {
    return "0.00";
  }

  return delimiterStatus(delimiter);
};

export const getColor = (data) => {
  if (data === "0") {
    return "black";
  }

  if (data?.includes("-")) {
    return "red";
  }

  return "green";
};

const delimiterStatus = (data) => {
  if (data === "NaN") {
    return "0";
  }

  if (data?.includes("-")) {
    return `${data}`;
  }

  return `+${data}`;
};
