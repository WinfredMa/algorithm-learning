function RecoveryString() {
  const testData = [
    {
      numberCount: 5,
      string: '19801211',
      expected: '8',
    },
    {
      numberCount: 4,
      string: '432111111111',
      expected: '111',
    },
  ];
  const numberCount = 5;
  const string = '19801211';
  let result;
  const algorithm = (numberCount, string) => {
    // the definition of Map and its methods should be enhanced
    const sortedStrMap = new Map();
    for (let char of string) {
      // the difference between for in and for of
      sortedStrMap.set(char, (sortedStrMap.get(char) || 0) + 1);
    }
    for (let i = 0; i <= 1000 - numberCount + 1; i++) {
      let tempStr = '';
      for (let j = i; j < i + numberCount; j++) {
        tempStr += j.toString();
      }

      const origionalStrMap = new Map();
      for (let char of tempStr) {
        origionalStrMap.set(char, (origionalStrMap.get(char) || 0) + 1);
      }
      let isMatch = true;
      // Map.keys and sortedStrMap are different.
      for (let key of sortedStrMap.keys()) {
        if (
          sortedStrMap.size !== origionalStrMap.size ||
          sortedStrMap.get(key) !== origionalStrMap.get(key)
        ) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        result = i;
        break;
      }
    }

    return result;
  };
  for (let i = 0; i < testData.length; i++) {
    const { numberCount, string } = testData[i];
    testData[i].result = algorithm(numberCount, string);
  }
  return (
    <div>
      {testData.map((testDataItem) => {
        return (
          <div key={testDataItem.string}>
            <div>numberCount: {testDataItem.numberCount}</div>
            <div>string: {testDataItem.string}</div>
            <div>expected: {testDataItem.expected}</div>
            <div>result: {testDataItem.result}</div>
          </div>
        );
      })}
    </div>
  );
}

export default RecoveryString;
