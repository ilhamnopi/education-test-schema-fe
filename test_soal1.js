// SOAL 1
let data1 = [1, 1, 1, 2, 2, 4, 1, 1];
let data2 = [2, 1, 2, 2, 2, 8, 1, 1];
let data3 = [3, 3, 3, 3, 2, 4, 1, 1];
const box = document.querySelector(".box");

let gabungData = [].concat(data1, data2, data3);

gabungData.sort();

let current = null;
let hasil = 0;

for (let i = 0; i < gabungData.length; i++) {
  if (gabungData[i] != current) {
    if (hasil > 0) {
      if (hasil == 10) {
        jawaban = document.createElement("p");
        jawaban.innerText = "total data paling banyak keluar adalah " + current + " dengan jumlah:" + hasil;
        box.append(jawaban);
        console.log("total data paling banyak keluar adalah " + current + " dengan jumlah:" + hasil);
      }
    }
    current = gabungData[i];
    hasil = 1;
  } else {
    hasil++;
  }
}

// SOAL 2
document.addEventListener("DOMContentLoaded", function () {
  // onSubmit
  document.getElementById("formValidasi").addEventListener("submit", function (event) {
    event.preventDefault();
    validasi();
  });

  function validasi() {
    const inputValidasi = document.getElementById("validasi").value;
    const validasiHuruf = /^[a-zA-Z ]+$/;
    const angka = /[0-9]+$/;
    if (inputValidasi.match(validasiHuruf)) {
      alert("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan: " + inputValidasi);
      console.log("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan: " + inputValidasi);
    } else {
      alert("Sistem kami menolak untuk inputan berisi angka :" + inputValidasi.match(angka));
      console.log("Sistem kami menolak untuk inputan berisi angka :" + inputValidasi.match(angka));
    }
  }
});

// Soal 3

console.log("3.1");
function soal3pertama(baris1) {
  let pola = "";

  for (let index = 1; index <= baris1; index++) {
    for (let x = 1; x <= index; x++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}
console.log(soal3pertama(5));

console.log("3.2");
function soal3(baris) {
  let pola = "";

  for (let i = 1; i <= baris; i++) {
    for (let j = baris - 1; j >= i; j--) {
      pola += " ";
    }
    for (let k = 1; k <= i; k++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(soal3(5));
