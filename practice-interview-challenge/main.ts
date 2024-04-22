function getRangeReport(start: number, end: number): object {
  const range: number[] = [];
  const odds: number[] = [];
  const evens: number[] = [];
  let total = 0;

  for (let i = start; i <= end; i++) {
    range.push(i);
    total += i;
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }

  const average = total / range.length;
  return { range, odds, evens, total, average };
}

console.log(getRangeReport(1, 10));
