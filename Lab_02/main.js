//----------------------------------------------------------------------
let numberA = 3;
checkSoLe = num => num % 2 === 1;
const isOdd = (num) => {return num % 2 === 1;}

document.write(checkSoLe(numberA));
document.write('<br>');
document.write(isOdd(numberA));
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
var sachs = [
   {
      tacGia: 'Harper Lee',
      tieuDe: 'To Kill a mockingbird',
      namXuatBan: 2020,
      trangThai: true
   },
   {
      tacGia: 'Ray Bradbury',
      tieuDe: 'Fahrenheit 451',
      namXuatBan: 2022,
      trangThai: false
   }
]

for(let item in sachs){
   document.write('{' + sachs[item].tacGia + '}{' + sachs[item].tieuDe+ '}{' + sachs[item].namXuatBan+ '}{' + sachs[item].trangThai +'}<br>');
}
document.write('----------------------------------------------------------------------'+'<br>');
// ----------------------------------------------------------------------
const arrDemo = [3, 2, 5, 4];
let i = 0, a = arrDemo[0], b = arrDemo[0];
checkNumberA = number => a < number;

for(let i in arrDemo){
   if(checkNumberA(arrDemo[i])){
      a = arrDemo[i];
   }else if(b > arrDemo[i]){
         b = arrDemo[i];
   }
}

document.write(a + ', ' + b);
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
let text = 'Cô Thủy là ai';

function checkKiTu(sentence){
   const words = sentence.split(' ');

   let maxLength = 0;
   let kiTuDai = '';

   for(let i = 0; i < words.length; i++){
      if(words[i].length > maxLength){
         maxLength = words[i].length;
         kiTuDai = words[i];
      }
   }
   return kiTuDai;
}

document.write("Câu cần kiểm tra là: " + text);
document.write('<br>');
document.write("Từ dài nhất là: " + checkKiTu(text));
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
function plusAll(){
   var res = 0;
   for(var i in arguments){
      res += arguments[i];
   }
   return res;
}

document.write(plusAll(1) + "<br>");
document.write(plusAll(1,3,6) + "<br>");
document.write('----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
var person1 = {name: 'Nhat Minh', age: 12};
var person1 = {name: 'Huu Trung', age: 13};

