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
  return (
    <div>
      {testData.map((test, index) => {
        return (
          <div>
            <p>numbers: {test.numbers}</p>
            <p>average: {test.average}</p>
            <p>expected: {test.expected}</p>
            <p>result: {algorithm(test.numbers, test.average)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AverageNumber;
