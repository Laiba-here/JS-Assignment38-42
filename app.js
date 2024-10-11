// quetion no 1
// function calculate () {
//     var a = +prompt(" plese Enter Base");
//     var b = +prompt("please write Exponent value");
//     var power = 1;
//     if (b === 0) {
//       return 1;
//     }
//     for (i = 1; i <= b; i++) {
//      power *= a;
//     }
//     return (
//       "The power of base " + a + " with exponents " + b + " is " + power
//     );
//   }
//   console.log(calculate());
  
  
  //--------------- Question no 2--------------
//   function Year() {
//     var year = +prompt("Enter Year:");
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       alert("The year is a leap");
//     } else {
//       alert("The years is not leap");
//     }
//   }
//   console.log(Year());
  
  // ----------     Qustion no 3------------
//   function Perimeter(a, b, c) {
//     return (a + b + c) 
//   }
  
//   function Area(a, b, c) {
//     var per = Perimeter(a, b, c);
//     return "The Area of length Triangle is " + per * (per - a) * (per - b) * (per - c);
//   }
  
//   var TriangleA = +prompt("Enter Side 1"); 
//   var  TriangleB = +prompt("Enter Side 2"); 
//   var  TriangleC = +prompt("Enter Side 3"); 
//   console.log(Area( TriangleA,  TriangleB,  TriangleC));
  
  // --------- Question no 4--------
//   var subj1 = +prompt("Enter marks of sub 1 : ");
//   var subj2 = +prompt("Enter marks of sub 2 :");
//   var subj3 = +prompt("Enter marks of sub 3 :");
//   function marks(a, b, c) {
//     return ((a, b, c) / 3).toFixed(2);
//   }
//   function calculatePercentage(a, b, c) {
//     return (((a + b + c) / 300) * 100).toFixed(2);
//   }

//   function mainFunction(a, b, c) {
//     var average = marks(a, b, c);
//     var percentage = calculatePercentage(a, b, c);
//     console.log("Average of 3 subjects = " + average);
//     console.log("Percentage of 3 subjects = " + percentage);
//   }
//   console.log(mainFunction(subj1, subj2, subj3));
  
  // ----- Question no 5------------
//   var string = prompt(" plese  Enter youur string :");
//   var letter = prompt(" please Enter your letter :");
//   function Index(string, letter) {
//     for (i = 0; i < string.length; i++) {
//       if (string[i] === letter) {
//         return "The Index value of letter is   " + letter + " from the given string is " + i;
//       }
//     }
//     return -1;
//   }
//   alert(Index(string, letter));
  
  // -------------- Question no 6 ----------
//   var value = prompt("enter string");
//   function deleted(value) {
//     var vowel = "aeiouAEIOU";
//     var result = " ";
//     for (i = 0; i < value.length; i++) {
//       if (vowel.indexOf(value[i]) === -1) {
//         result += value[i];
//       }
//     }
//     return result;
//   }
//   alert(deleted(str));
  
  //// ------------------Question no 7 -------------------
//   function Pairs(text) {
//     var count = 0;
//     var i = 0;
//     while (i < text.length - 1) {
//       var fir1 = text[i].toLowerCase();
//       var sec2 = text[i + 1].toLowerCase();
//       var vowelPairs = [];
  
//       switch (true) {
//         case fir1 === "a" &&
//           ( sec2 === "a" ||
//             sec2 === "e" ||
//             sec2 === "i" ||
//             sec2 === "o" ||
//             sec2 === "u"):
//         case fir1 === "e" &&
//           ( sec2 === "a" ||
//             sec2 === "e" ||
//             sec2 === "i" ||
//             sec2 === "o" ||
//             sec2 === "u"):
//         case fir1 === "i" &&
//           ( sec2 === "a" ||
//             sec2 === "e" ||
//             sec2 === "i" ||
//             sec2 === "o" ||
//             sec2 === "u"):
//         case fir1 === "o" &&
//           ( sec2 === "a" ||
//             sec2 === "e" ||
//             sec2 === "i" ||
//             sec2 === "o" ||
//             sec2 === "u"):
//         case fir1 === "u" &&
//           ( sec2 === "a" ||
//             sec2 === "e" ||
//             sec2 === "i" ||
//             sec2 === "o" ||
//             sec2 === "u"):
//           count++;
//           vowelPairs.push(fir1 +  sec2);
//           console.log(vowelPairs);
//           break;
//       }
//       i++;
//     }
//     return count;
//   }
//   alert(Pairs("Please read this application and give me gratuity"));
  
  //--------------- question n0 08-------------------
//   function Meters(distance) {
//     return (
//       "The distance " +
//       distance +
//       "km" +
//       " into meter is " +
//       distance * 1000 +
//       "m"
//     );
//   }
//   function Feet(distance) {
//     return (
//       "The distance " +
//       distance +
//       "km" +
//       " into feet is " +
//       (distance * 3280.84).toFixed(2) +
//       "feet"
//     );
//   }
//   function Inches(distance) {
//     return (
//       "The distance " +
//       distance +
//       "km" +
//       " into inches is " +
//       (distance * 39370.1).toFixed(2) +
//       "inches"
//     );
//   }
//   function Centimeter(distance) {
//     return (
//       "The distance " +
//       distance +
//       "km" +
//       " into centimeter is " +
//       distance * 100000 +
//       "cm"
//     );
//   }
//   var distance = +prompt("Enter Distance in Km : ");
//   alert(Meters(distance));
//   alert(Feet(distance));
//   alert(Inches(distance));
//   alert(Centimeter(distance));
  
  // ------------------ Question no 9
//   function Pay(hoursWork) {
//     var regularHours = 40;
//     var overtime = 12.00;
//     var overPay = 0;
//     if (hoursWork> regularHours) {
//       var overtimeHours = hoursWork - regularHours;
//       overPay = overtimeHours * overtime;
//     }
//     return overPay;
//   }
//   var hoursWork = 45;
//   var overPay = Pay(hoursWork);
//   console.log(
//     "Overtime pay for " +
//       hoursWork +
//       " hours  worked is Rs. " +
//       overPay.toFixed(2)
// );
  
  //  ---- Question no 10---------------
  function currency(cash) {
    var note100 = Math.floor(cash / 100);
    var Amount = cash % 100;
    var note50 = Math.floor(Amount / 50);
       Amount =Amount % 50;
    var note10 = Math.floor(Amount / 10);
    return [note100, note50, note10];
  }
  var draw = prompt("Enter your value & amount:");
  var result = currency(draw);
  console.log("Note 100: " + result[0]);
  console.log("Note 50: " + result[1]);
  console.log("Note 10: " + result[2]);