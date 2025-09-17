const SortChairs = () => {
  const testData = [
    {
      firstLine: '4 5 1 2 3',
      data: ['4 2 4 3', '2 3 3 3', '2 5 2 4'],
      expected: ['2', '2 4'],
      result: '',
    },
  ];

  const algorithm = (firstLine, data) => {
    const [n, m, k, l, d] = firstLine.split(' ').map(Number);
    let mapX = new Map();
    let mapY = new Map();

    for (let i = 0; i < d; i++) {
      const [x, y, p, q] = data[i].split(' ').map(Number);
      if (x == p) {
        let minY = Math.min(y, q);
        mapY.set(minY, (mapY.get(minY) || 0) + 1);
      } else {
        let minX = Math.min(x, p);
        mapX.set(minX, (mapX.get(minX) || 0) + 1);
      }
    }
    let xArr = Array.from(mapX.keys()).sort(
      (a, b) => mapX.get(b) - mapX.get(a)
    );
    let yArr = Array.from(mapY.keys()).sort(
      (a, b) => mapY.get(b) - mapY.get(a)
    );
    let y = [];
    let x = [];
    for (let i = 0; i < k; i++) {
      x.push(xArr[i]);
    }
    for (let j = 0; j < l; j++) {
      y.push(yArr[j]);
    }
    return [
      x.sort((a, b) => a - b).join(' '),
      y.sort((a, b) => a - b).join(' '),
    ];
  };

  return (
    <div>
      {algorithm(testData[0].firstLine, testData[0].data).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default SortChairs;
