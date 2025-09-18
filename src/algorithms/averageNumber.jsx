const AverageNumber = () => {
  const testData = [
    { numbers: [129, 130, 129, 130], average: 128, expected: -2, result: '' },
    { numbers: [0, 0, 0, 0], average: 128, expected: 128, result: '' },
    { numbers: [1, 1, 1, 1], average: 128, expected: 127, result: '' },
  ];
  const algorithm = (numbers, average) => {
    let result = '';
    const originalAverage =
      numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

    if (originalAverage > average) {
      result = -Math.round(originalAverage - average);
    } else {
      result = Math.round(average - originalAverage);
    }

    return result;
  };

  const algorithm2 = (numbers, average) => {
    let minDiff = 255;
    let newAverage = 0;
    let result = 0;
    for (let i = -127; i <= 128; i++) {
      newAverage =
        numbers.reduce(
          (acc, num) => acc + Math.max(0, Math.min(255, num + i)),
          0
        ) / numbers.length;
      let diff = Math.abs(newAverage - average);
      if (diff < minDiff) {
        minDiff = diff;
        result = i;
      } else if (diff === minDiff && result !== 0) {
        result = Math.min(result, i);
      }
    }
    return result;
  };

  return (
    <div>
      {testData.map((test, index) => {
        return (
          <div>
            <p>numbers: {test.numbers}</p>
            <p>average: {test.average}</p>
            <p>expected: {test.expected}</p>
            <p>result: {algorithm2(test.numbers, test.average)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AverageNumber;
