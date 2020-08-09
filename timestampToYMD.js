function transTime(time) {
// translate dari timestamp menjadi YMD
  var date = new Date();
  timeNow = date.getTime();
  timeDiff = Math.abs(timeNow - time) / 1000;
  diffDays = Math.floor(timeDiff / 86400);
  if (diffDays > 30 && diffDays < 365) {
    ageMonth = Math.floor(diffDays / 30);
    ageDays = diffDays % 30;
    return ageMonth + " month" + YMD(ageMonth) + ", " + ageDays + " day" + YMD(ageDays);
  } else if (diffDays > 365) {
    ageYear = Math.floor(diffDays / 365);
    ageMonth = Math.floor(diffDays % 365 / 30);
    ageDays = diffDays % 365 % 30;
    if (ageMonth == 0 && ageDays == 0) {
    // 0 bulan dan 0 hari
      return ageYear + " year" + YMD(ageYear);
    } else if (ageMonth == 0 && ageDays != 0) {
    // 0 bulan
      return ageYear + " year" + YMD(ageYear) + ", " + ageDays + " day" + YMD(ageDays);
    } else if (ageMonth != 0 && ageDays == 0) {
    // 0 hari
      return ageYear + " year" + YMD(ageYear) + ", " + ageMonth + " month" + YMD(ageMonth);
    } else {
      return ageYear + " year" + YMD(ageYear) + ", " + ageMonth + " month" + YMD(ageMonth) + ", " + ageDays + " day" + YMD(ageDays);
    }
  } else {
    ageDays = diffDays;
    return ageDays + " day" + YMD(ageDays);
  }
}

function YMD(num) {
// menambahkan huruf "s"
  if (num > 1) {
    return "s";
  } else {
    return "";
  }
}

console.log(transTime(1512270402327));
console.log(transTime(1564021032562));
console.log(transTime(1584938806810));
console.log(transTime(1592669890868));
console.log(transTime(1594548867318));
console.log(transTime(1595003061073));
