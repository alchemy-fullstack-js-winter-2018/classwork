// assume num is >= 1
function pascal(num, triangle = [[1]]) {
  if (num <= 0) return console.log(triangle);
  // for through the depth i need

  const previousRow = triangle[triangle.length - 1];
  const row = [1];
  for (let column = 1; column < previousRow.length; column++) {
    const nextColumn = previousRow[column - 1] + previousRow[column];
    row.push(nextColumn);
  }
  row.push(1);

  return pascal(num - 1, [...triangle, row]);
}

// assume num is >= 1
// function pascal(num) {
//   if (!num) return console.log('What??? We need something')
//   if (typeof num !== 'number') return console.log('I only work on numbers');
//   if (num <= 0) return console.log('What???');

//   const triangle = [[1]];
//   // for through the depth i need
//   for (let depth = 1; depth < num; depth++) {
//     const row = [1];
//     const previousRow = triangle[depth - 1];
//     // for(through columns of previous depth array)
//     for (let column = 1; column < previousRow.length; column++) {
//       const nextColumn = previousRow[column - 1] + previousRow[column];
//       row.push(nextColumn);
//     }

//     row.push(1);
//     triangle.push(row);
//   }

//   triangle.forEach(row => {
//     console.log(row.join(' '));
//   });
// }

pascal(5);

// [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
// 1
// 1
// 1 2
// 1 3
// 1 4 6
