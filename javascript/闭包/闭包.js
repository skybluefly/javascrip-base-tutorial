/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-03-09 20:54:53
 * 闭包：函数嵌套函数，内部函数可以引用外部函数的参数和变量，参数和变量不会被垃圾回收机制所回收
 * 1、希望一个变量长期驻扎在内存中
 * 2、可以避免全局变量的污染
 * 3、私有成员的存在
 */
function aaa () {
	var a=5;
	function bbb () {
		alert(a)
	}
	return bbb;
}
var c=aaa();
c();// 5  a并没有被垃圾回收机制处理

function aaa () {
	var a=1;
	return function  () {
		a++;
		alert(a);
	}
}
var b=aaa();
b();//2
b();//3
alert(a);//undefine

var aaa=(function  () {
	var a=1;
	return function  () {
		a++;
		alert(a);
	}
})();
aaa();

var aaa=(function  () {
	var a=1;
	function bbb () {
		a++;
		alert(a);
	}
	function ccc () {
		a++;
		alert(a);
	}
	return {
		b:bbb,
		c:ccc
	}
})();
aaa.b();//2
aaa.c();//3
