function FailRatesStatistic() {
  let average = 2;
  let timeOuts = '0 0 100 2 2 99 0 2';
  const failureRates = timeOuts.split(' ').map(Number);
  let validPeriods = [];
  let maxLength = 0;

  //   const sumArray = [failureRates[0]];

  //   for (let i = 1; i < failureRates.length; i++) {
  //     sumArray[i] = sumArray[i - 1] + failureRates[i];
  //   }
  //
  // for (let start = 0; start < failureRates.length; start++) {
  //     for (let end = start; end < failureRates.length; end++) {
  //         let tempSum = start === 0 ? sumArray[end] : sumArray[end] - sumArray[start - 1];
  //         const length = end - start + 1;
  //         if (tempSum <= average * (end - start + 1)) {
  //             if (length > maxLength) {
  //                 maxLength =length;
  //                 validPeriods = [[start, end]];
  //             } else if (length === maxLength) {
  //                 validPeriods.push([start, end]);
  //             }
  //         }
  //     }
  // }

  for (let start = 0; start < failureRates.length; start++) {
    let total = 0;
    for (let end = start; end < failureRates.length; end++) {
      total += failureRates[end];
      const length = end - start + 1;
      if (total <= average * (end - start + 1)) {
        if (length > maxLength) {
          maxLength = length;
          validPeriods = [[start, end]];
        } else if (length === maxLength) {
          validPeriods.push([start, end]);
        }
      }
    }
  }

  let result;
  if (validPeriods.length === 0) {
    result = 'NULL';
  } else {
    validPeriods.sort((a, b) => a[0] - b[0]);

    result = validPeriods.map((period) => period.join('-')).join(' ');
  }
  return <div>{result}</div>;
}

export default FailRatesStatistic;
