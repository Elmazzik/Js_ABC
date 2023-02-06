let test = Boolean(3);
alert(test); //выведет true

let test1 = Boolean(0);
alert(test1); //выведет false

let test2 = Boolean(-1);
alert(test2); //выведет true

let test3 = Boolean(-0);
alert(test3); //выведет false

let test4 = Boolean(+0);
alert(test4); //выведет false

let test5 = Boolean('abc');
alert(test5); //выведет true

let test6 = Boolean('');
alert(test6); //выведет false

let test7 = Boolean('0');
alert(test7); //выведет true

let test8 = Boolean(true);
alert(test8); //выведет true

let test9 = Boolean(false);
alert(test9); //выведет false

let test10 = Boolean('true');
alert(test10); //выведет true

let test11 = Boolean('false');
alert(test11); //выведет true

let test12 = Boolean(null);
alert(test12); //выведет false

let test13 = Boolean('null');
alert(test13); //выведет true

let test14 = Boolean(undefined);
alert(test14); //выведет false

let test15 = Boolean('undefined');
alert(test15); //выведет true

let test16 = Boolean(NaN);
alert(test16); //выведет false

let test17 = Boolean('NaN');
alert(test17); //выведет true

let test18 = Boolean(3 * 'abc');
alert(test18); //выведет false

let test19 = Boolean(Infinity);
alert(test19); //выведет true

let test20 = Boolean(1 / 0);
alert(test20); //выведет true