function century(year) {
  // check if number have two degits
  if (year.toString().length === 2) {
    return 1;
  }

  // check if number have 4 degits
  else {
    // check last number if greater than 0
    // get last number using pop method
    const last_num = year.toString().split("").pop();
    const first_nums = year.toString().split("").slice(0, 2).join("");
    if (last_num > 0) {
      return +first_nums + 1;
    } else {
      return +first_nums;
    }
  }
}

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1
console.log(century(341873)); // return 3419
// 245098 return 2451
// 916646 return 9167
// 520330 return 5204
