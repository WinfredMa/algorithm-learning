function RecoveryString() {
  const numberCount = 4;
  const string = '432111111111';
  const strObjA = generateStrObj(string);
  let result;

  for (let i = 0; i <= 1000 - numberCount + 1; i++) {
    let tempStr = '';
    for (let j = i; j < i + numberCount; j++) {
      tempStr += j.toString();
    }
    let strObjB = generateStrObj(tempStr);
    let isMatch = true;

    if (Object.keys(strObjA).length === Object.keys(strObjB).length) {
      for (let key in strObjA) {
        if (strObjA[key] !== strObjB[key]) {
          isMatch = false;
          break;
        }
      }
    } else {
      isMatch = false;
    }

    if (isMatch) {
      result = i;
      break;
    }
  }

  return <div>{result}</div>;
}

function generateStrObj(string) {
  const strObj = {};

  for (let i = 0; i < string.length; i++) {
    if (!strObj[string[i]]) {
      strObj[string[i]] = 1;
    } else {
      strObj[string[i]] += 1;
    }
  }

  return strObj;
}

export default RecoveryString;
