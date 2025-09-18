const SetColor = () => {
    const testData = [{
        firstLine: '3 3 3',
        data: ['*o*', '*o*','*o*'],
        expected: '',
        result: '',
    }, {
        firstLine: '4 4 3',
        data: ['*o*o', 'oooo','****','oooo'],
        expected: '',
        result: '',
    }];

    const algorithm = (firstLine, data) => {
        let [n, m, k] = firstLine.split(' ').map(Number);
        const metrix = [];
        const whiteArr = [];
        for (let line of data) {
            metrix.push(line.split(''))
        }
        for (let i = 0; i < m; i++) {
            let tempArr = [];
            for (let j = 0; j < n; j++) {
                if (metrix[j][i] === 'o') {
                   tempArr.push(metrix[j][i])
                } else {
                    if (tempArr.length) {
                        whiteArr.push([...tempArr]);
                        tempArr = [];
                    }
                }
            }
            if (tempArr.length) {
                whiteArr.push([...tempArr]);
            }
        }
        whiteArr.sort((a, b) => b.length - a.length);
        let result = 0;
        // while(k>=0) { // Bad code. when k is big and whiteArr is small. the loop will never end.
        //     let temp = whiteArr.shift();
        //     let diff = k - temp.length;
        //     if (diff > 0) {
        //         result += temp.length - 1;
        //         k = diff;
        //     } else {
        //         result += k -1;
        //         break;
        //     }
        // }

        for(let i = 0; i < whiteArr.length; i++) {
            if (k <= 0) {
                break;
            }
            let temp = whiteArr[i];
            let diff = k - temp.length;
            if (diff > 0) {
                result += temp.length - 1;
                k = diff;
            } else {
                result += k -1;
                break;
            }
        }
        return result;
    }
    return (
        <div>{testData.map((item, index) => <div key={index}>{algorithm(item.firstLine, item.data)}</div>)}</div>
    )
}

export default SetColor