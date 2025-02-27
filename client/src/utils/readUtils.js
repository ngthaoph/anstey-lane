import React from "react";
function priceFormatter(number) {
  let decNum = number.toFixed(2);
  let str = decNum.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + str.join(".");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function capitalizeAllLetter(string) {
  return string.toUpperCase();
}
export { priceFormatter, capitalizeFirstLetter, capitalizeAllLetter };
