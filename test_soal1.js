let data1 = [1, 1, 1, 2, 2, 4, 1, 1];
let data2 = [2, 1, 2, 2, 2, 8, 1, 1];
let data3 = [3, 3, 3, 3, 2, 4, 1, 1];

let gabungData = [].concat(data1, data2, data3);

gabungData.sort();

let current = null;
let hasil = 0;

for (let i = 0; i < gabungData.length; i++) {
  if (gabungData[i] != current) {
    if (hasil > 0) {
      if (hasil == 10) {
        console.log("total data paling banyak keluar adalah " + current + " dengan jumlah:" + hasil);
      }
    }
    current = gabungData[i];
    hasil = 1;
  } else {
    hasil++;
  }
}
