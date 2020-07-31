// Menghitung jumlah splitter
function countSplitter(str){
  // inisialisasi
  sum = 0;
  // hitung jumlah splitter
  for (i = 0; i < str.length; i++){
    if (str[i] == ":") {
      sum += 1;
    }
  }
  return sum;
}
