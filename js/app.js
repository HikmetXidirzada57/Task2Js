//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR




// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.


// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN
// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin
let SET = 'SET_DATA';
let GET = 'GET_DATA'
let DELETE = 'DELETE_DATA'

let res;
// function switchCase(params) {
//     switch (params) {
//         case 'SET':
//         res="SET_DATA"
//             break;
//         case 'GET':
//             res="GET_DATA"
//             break;
//         case DELETE:
//          res="DELETE_DATA"
//             break;
//         default:
//           res=" nothing"
//     }
// }
// switchCase("SET")
// console.log(res);

// suali mence duz vermemisiz consola casin yox birinci merhelede res-i consola verdim





// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let randArr=[]

// function switchCase(params) {
//     switch (params) {
//         case 'SET':
//         randArr.push(Math.ceil(Math.random()*10))
//         res=randArr
//             break;
//         case 'GET':
//             res="GET_DATA"
//             break;
//         case DELETE:
//          res="DELETE_DATA"
//             break;
//         default:
//           res=" nothing"
//     }
// }
// switchCase("SET")
// console.log(res);


// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// let array = [1, 2, 3, 4, 5]
// let randIndex = Math.ceil(Math.random() * 4)

// function switchCase(params) {
//     switch (params) {
//         case 'SET':
//             res = "SET_DATA"
//             break;
//         case 'GET':
//             res = "GET_DATA"
//             break;
//         case 'DELETE':
//             res=array.splice(randIndex,1)
//             break;
//         default:
//             res = "SILINECEK DATA TAPILMADI"
//     }
// }
// switchCase("DELETE")
// console.log(res);
// console.log(array);




// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let num1 = Math.ceil(Math.random() * 9)
// let num2 = Math.ceil(Math.random() * 9)
// let num3 = Math.ceil(Math.random() * 9)
// let num4 = Math.ceil(Math.random() * 9)

// let array = [];

// if (num1 != num2 && num1 != num3 && num1 != num4 & num2 != num3 & num2 != num4 && num3 != num4) {
//     array.push(num1, num2, num3, num4)
// } else {
//     array.push([])
// }
// // menasiz gele biler))

// function switchCase(params) {
//     switch (params) {
//         case 'SET':
//             res = "SET_DATA"
//             break;
//         case 'GET':
//             res = console.log(array);
//             break;
//         case 'DELETE':
//             res = array.splice(randIndex, 1)
//             break;
//         default:
//             res = "SILINECEK DATA TAPILMADI"
//     }
// }
// switchCase('GET')


///////////////////////////////////////////////////////////////////////////////////////////

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.
// for (const item in mL) {
//     switch (item) {
//         case 1:
//             console.log("January", );
//             break;
//         case 2:
//             console.log("Feburary", 28 - 29);
//         case 3:
//             console.log("March", 31);

//         case 4:
//             console.log("April", 30);
//         case 5:
//             console.log('May', 31);

//         case 6:
//             console.log('June', 30);

//         case 7:
//             console.log('July', 31);

//         case 8:
//             console.log('August', 31);
//         case 9:
//             console.log('September', 30);
//         case 10:
//             console.log('October', 31);
//         case 11:
//             console.log('November', 30);
//         case 12:
//             console.log('December', 31);
//         default:
//             console.log('bitdi');
//             break;
//     }
// }

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin


// const date = new Date();

// const day = date.getDate();
// const month = date.getMonth() + 1;

// const ml = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// const day = d.getDate();
// const month = d.getMonth() + 1;
// const year = d.getFullYear();

// let monthName = ml[d.getMonth()]

// function daysInMonth(ay, il) {
//     let daysCount = new Date(il, ay, 0).getDate();
//     console.log(monthName, daysCount);

// }
// daysInMonth(month, year)


// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// var d = new Date();
// var month = d.getMonth() + 1;
// var day = d.getDate();

// var output = d.getFullYear() + '/' +
//     (month < 10 ? '0' : '') + month + '/' +
//     (day < 10 ? '0' : '') + day;

// console.log(output);

// switch (month) {
//     case 'Yanvar':
//         console.log('is first part');
//         break;
//     default:
//         console.log("empty");
//         break;
// }

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// switch (week) {
//     case 'Monday':
//         console.log('is first part of week');
//         break;
//     case 'Tuesday':
//         console.log('is first part of week');
//     case 'Tuesday':
//         console.log('is first part of week');
//     case 'Wednesday':
//         console.log('is first part of week');
//     case 'Thursday':
//         console.log('is second part of week');
//     case 'Friday':
//         console.log('is second part of week');
//     case 'Saturday':
//         console.log('is second part of week');

//     default:
//         break;
// }

// bunun yeri yox idi :dd

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun


// let newDate = new Date();
// let date = newDate.getDate();
// let day = newDate.getDay();
// let weekOfMonth = Math.ceil((date) / 7);
// console.log(` bu hefte ${weekOfMonth} ci heftedir` )




//////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];

// let filteredArr=mL.map(arr=>arr.split(' '))
// console.log(filteredArr);


///////////////////////////////////////////////////////////////////////////////////////////


// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let myMonths = [];

// [a, b, c, d, ...others] = mL
// console.log(others);
// let firstArr = mL;
// firstArr.splice(4, others.length)
// console.log(firstArr);
// console.log(others);
// [M, J, JL, AG, ...others2] = others;
// let secondArr=others;
// secondArr.splice(4,others2.length)
// console.log(secondArr);
// console.log(others2);

// myMonths.push(firstArr,secondArr,others2)

// console.log("result", myMonths);


///////////////////////////////////////////////////////////////////////////////////////////


// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];


// let extraMonths = [];

// [J, F, M, A, ...others1] = mL;
// let first = mL;
// first.splice(4, others1.length);
// [M, J, J, A, ...others2] = others1;

// let seconod = others1;

// let third = others2;

// [J, F, ...firstIn] = first;
// let first1 = first;
// first1.splice(2, firstIn.length);
// first1.push(firstIn);
// console.log(first1);

// [M, J, ...secondIn] = seconod
// let second1 = seconod
// second1.splice(2, secondIn.length);
// second1.push(secondIn)
// console.log(second1);

// [S,...thirdIn]=third
// let third1=third
// console.log(third1);
// third1.splice(1,thirdIn.length)
// third1.push(thirdIn)
// console.log(third1);

// extraMonths.push(...first1,...second1,...third1)
// console.log(extraMonths);
///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];


// let extraMonths = []
// let [J, F, M, A, ...others1] = mL;
// let first = mL
// first.splice(4, others1.length);
// [J, F, ...firstIn] = first;
// let first1 = first
// first1.splice(2, firstIn.length);
// [J, ...firstIn2] = firstIn;
// let firstIn1 = firstIn
// firstIn1.splice(1, firstIn2.length);
// firstIn1.push(firstIn2)
// first1.push(firstIn1)



// let [My, Jn, Jl, Ag, ...others2] = others1
// let second = others1;
// second.splice(4, others2.length);
// [M, J, ...secondIn] = second;
// let second1 = second;
// second1.splice(2, secondIn.length);
// [J, ...secondIn2] = secondIn;
// let secondIn1 = secondIn;
// secondIn1.splice(1, secondIn2.length);
// secondIn1.push(secondIn2);
// second1.push(secondIn1);



// [S, ...thirdIn] = others2;
// let others3 = others2;
// others3.splice(1, thirdIn.length);
// [O,N, ...thirdIn1] = thirdIn
// let thirdInNew = thirdIn;
// thirdInNew.splice(2, thirdIn1.length);
// thirdInNew.push(thirdIn1)
// others3.push(thirdInNew)


// extraMonths.push(...first1, ...second1, ...others3)
// console.log(extraMonths);


///////////////////////////////////////////////////////////////////////////////////////////


// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];


// let extraMonths = []
// let [J, F, M, A, ...others1] = mL;
// let first = mL
// first.splice(4, others1.length);
// [J, F, ...firstIn] = first;
// let first1 = first
// first1.splice(2, firstIn.length);
// first1.push(firstIn)

// let [May, Jn, Jl, Aug, ...others2] = others1
// let second = others1
// second.splice(4, others2.length);
// [M, J, ...secondIn] = second;
// let second1 = second
// second1.splice(2, secondIn.length);
// second1.push(secondIn);


// [S, ...thirdIn] = others2;
// let third = others2
// third.splice(1, thirdIn.length)
// third.push(thirdIn)

// extraMonths.push(...first1, ...third, ...second1)
// console.log(extraMonths);

///////////////////////////////////////////////////////////////////////////////////////////



// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]


// let myFullname = "Hikmet Xidirzade"
// let fulWord = myFullname.split(' ')
// console.log(fulWord);

// let myArr = []

// console.log(fulWord[0].index == undefined);

// for (let i = 0; i < myFullname.length; i++) {
//     if (fulWord[0][i] != undefined && fulWord[1][i] != undefined) {
//         myArr.push([fulWord[0][i].toUpperCase(), fulWord[1][i].toUpperCase()])
//     } else {
//         myArr.push([fulWord[0][i].toUpperCase(), "X"]);
//     }
// }
// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz


///////////////////////////////////////////////////////////////////////////////////////////



// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir


// let sentence='Ey babeK kebaB ye!'
// let reverseString=sentence.split('').reverse().join("")
// console.log(reverseString);


let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin


// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element % 5 == 0 && element % 5 == 0) {
//       sum+=element
//     }

// }
// console.log( "cem", sum);

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// const mostBigThree = arr.filter(a => Math.ceil(Math.log10(a + 1)) === 3);
// let max = Math.max(...mostBigThree);
// console.log(max);


// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// const dvidedThree =
//     arr.filter(item =>
//         item !== 3 && item % 3 == 0
//     );
// console.log(dvidedThree);
// const minimum = dvidedThree.reduce((a, b) => Math.min(a, b));
// console.log(minimum);

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3: 2,
//     key4: 4,
//     key5: 53,
//     key7: 7,
//     key8: 8,
//     key9: 91,
// }

// for (var key in obj) {
//     // console.log('The key is ' + key);
//     let keyNumb = key.slice(-1)
//     let value = obj[key] 

//     if (keyNumb == value) {
//         console.log("val", value);
//     }

// }


////////////////////////////////////////////////////////////////////////////////////////////////



// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.
// let move = setInterval(function () {
//     let movement = document.getElementById("movement");
//     let fromLeft = movement.offsetLeft;
//     movement.style.left = fromLeft + 20 + "px";
// }, 2000);

// setTimeout(() => {
//     clearInterval(move)
// }, 20000);
// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// setInterval(function () {
//     let div = document.querySelector('#move')
//     let left = div.offsetLeft;
//     let top = div.offsetTop;
//     div.style.top = top + 10 + "px";
//     div.style.left = left + 10 + "px";
// }, 1000);


// elave yol/// 

// let dynamicStyles = null;

// function addAnimation(body) {
//     if (!dynamicStyles) {
//         dynamicStyles = document.createElement('style');
//         dynamicStyles.type = 'text/css';
//         document.head.appendChild(dynamicStyles);
//     }

//     dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
// }

// addAnimation(`
//       @keyframes move-eye { 
//          0% {
//            top: 10px;
//          }
//         50%{
//           left: 10px;
//         }
//       }
//     `);
// var element = document.getElementById("move");
// element.className = "cylon-eye";
// element.style.height = "100px";
// element.style.position = "absolute";
// element.style.widthcorner = "100px";
// element.style.backgroundImage = "black";
// element.style.animation = "4s linear 0s infinite alternate move-eye";

// document.body.appendChild(element);

// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.


// setInterval(() => {
//     let inrease = document.getElementById("increase");
//     // inrease.setAttribute('style', 'widthcorner:400px; height:400px')
//      inrease.classList.toggle("active")
// }, 1000);

// nese alinmadi active classinnan bezi deyerleri goturur bezilerin yox set atrutnan yazandada bir defe edir sonra yox olur)


// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// ------------------

// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin


// let count = 1
// document.getElementById('corner').addEventListener('click', function () {
//     let widthcorner = document.getElementById('corner').offsetwidthcorner
//     let bodyScreen = window.innerWidth
//     let cornerH = document.getElementById('corner').offsetHeight
//     let HeightScreen = document.querySelector('body').offsetHeight

//     switch (count) {
//         case 1:
//             // let currentW=bodyScreen-widthcorner
//             // undefined di deye alinmadimadi
//             corner.style.left = 1436 + 'px';
//             break;
//         case 2:
//             let h = HeightScreen - cornerH
//             corner.style.top = h + "px";
//             break;
//         case 3:
//             corner.style.bottom = 0;
//             corner.style.left = 0;
//             break;
//         case 4:
//             corner.style.top = 0
//             corner.style.left = 0
//             break;
//         default:
//             console.log('disabled');
//     }
//     count++


// })


// console.log(window.innerWidth);

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.


// let widthBox = document.getElementById('keyboard').offsetWidth
// let bodyScreen = document.querySelector('body').offsetWidth
// let heightBox = document.getElementById('keyboard').offsetHeight
// let HeightScreen = document.querySelector('body').offsetHeight
// let count = 1

// function fromLeft() {
//     let currentwidth = bodyScreen - widthBox
//     keyboard.style.left = currentwidth + 'px';
// }

// function fromRight() {
//     keyboard.style.bottom = 0;
//     keyboard.style.left = 0;
// }

// function down() {
//     let currentHeight = HeightScreen - heightBox
//     keyboard.style.top = currentHeight + "px";
// }

// function up() {
//     keyboard.style.top = 0
//     keyboard.style.left = 0
// }

// window.addEventListener('keyup', function (event) {
//     const keyCode = event.keyCode;
//     console.log(keyCode);
// if (keyCode!=null) {
//     if (keyCode == 39) {
//         fromLeft()
//     } else if (keyCode == 40) {
//         down()
//     } else if (keyCode == 37) {
//         fromRight()
//     } else if (keyCode == 38) {
//         up()
//     } 
// }else{
//     this.prompt('yavas ol ')
// }

// });

// document.getElementById('keyboard').addEventListener('click', function () {
//     switch (count) {
//         case 1:
//             fromLeft()
//             break;
//         case 2:
//             down()
//             break;
//         case 3:
//             fromRight()
//             break;
//         case 4:
//             up()
//             break;
//         default:
//             break
//     }
//     count++

// })


// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin corner-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.


// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq
// let gameZone = document.getElementById("game")
//     window.addEventListener("keypress", function (e) {
//         let keyCode = e.keyCode
//         gameZone.classList.add(".jump")
//         console.log(keyCode);
//         if (keyCode == 32) {
//             gameZone.classList.toggle('active-game')
//             this.setTimeout(() => {
//                gameZone.classList.remove('active-game') 
//             }, 500);
//         }
//     })

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat corner elave edin.
// function getColorCode() {
//     var makeColorCode = '0123456789ABCDEF';
//     var code = '#';
//     for (var count = 0; count < 6; count++) {
//         code = code + makeColorCode[Math.floor(Math.random() * 16)];
//     }
//     return code;
// }
// //Function call on button click.
// function pickRandomColor() {
//     $('body').append($("<div />", {
//         class: 'myDiv',
//         css: {
//             width: 100,
//             height: 100,
//         }
//     }));
//    $(".myDiv").css("background-color", getColorCode());
// }

// her defe elave edir divi yeqinki bele deyirdiz :d


// 10) Input (Type number) ve corner (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun

// let input=document.querySelector(".myInput");
// let box=document.getElementById("box");
// console.log(box);
// input.addEventListener("change",function () {
//     let size=Number(input.value)
//     console.log(size);
//     box.style.width=box.offsetWidth+size+"px"
// })

// buda bele
