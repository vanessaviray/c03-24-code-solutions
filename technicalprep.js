// input: number
// provide money in the minimum amount of coins
// quarter, dimes, nickles, and pennies
// 121 cents

function getChange(number) {
  const quarters = Math.floor(number / 25);
  const quartersRemainder = number % 25;

  const dimes = Math.floor(quartersRemainder / 10);
  const dimesRemainder = quartersRemainder % 10;

  const nickles = Math.floor(dimesRemainder / 5);
  const nicklesRemainder = dimesRemainder % 5;

  const pennies = nicklesRemainder;

  console.log(
    `Quarters: ${quarter}, Dimes: ${dimes}, Nickles: ${nickles}, Pennies: ${pennies}`
  );
}

getChange(141);
