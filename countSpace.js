// Menghitung jumlah spasi dari sebuah string
function countSpace(str){
  // inisialisasi
  sum = 0;
  // hitung jumlah spasi
  for (i = 0; i < str.length; i++){
    if (str[i] == " ") {
      sum += 1;
    }
  }
  return sum;
}
