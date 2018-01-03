var http=require('http')

var fs=require('fs')

var request=require('request')

http.createServer(function  (req,res) {
	request('https://static.mukewang.com/static/img/common/logo.png?t=2.4').pipe(res)

}).listen('8090')
