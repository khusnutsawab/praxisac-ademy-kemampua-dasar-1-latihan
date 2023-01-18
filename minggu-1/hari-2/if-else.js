const adonan= 51
let pizza =""

if (adonan>55) {
  pizza="BELUM"
} else {
  pizza="PENUH"
}

console.log(pizza)


let day; 
switch (new Date().getDay()) {
  case 0:
    day = "senin";
    break;
  case 1:
    day = "selasa";
    break;
  case 2:
    day = "rabu";
    break;
  case 3:
    day = "khamis";
    break;
  case 4:
    day = "jum'at";
    break;
  case 5:
    day = "sabtu";
    break;
  case  6:
    day = "minggu";
}
console.log(day);







