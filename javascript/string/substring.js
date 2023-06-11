let s = 'Mern/mean class demo';
//substring is some part of a string
let substring = s.substring(0, 10); // from 0 index upto 10th index -- 0 included 10 excluded 
console.log(substring)
substring = s.substring(10, 0); //if start>end , we swap the values s.substring(0, 10)
console.log(substring)
substring = s.substring(10, 1000); // 10th to last of string
console.log(substring)
substring = s.substring(-10, 1000); // if negative the 0 to last of string
console.log(substring)
substring = s.substring("Kuldeep", 4); // if negative the 0 to last of string
console.log(substring)
substring = s.substring(4, "Kuldeep"); // if negative the 0 to last of string
console.log(substring)
substring = s.substring(undefined, "Kuldeep"); // if negative the 0 to last of string
console.log(substring)