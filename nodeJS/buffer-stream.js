var fs=require('fs')

var readStream=fs.createReadStream("buffer.js")
var n=0

readStream.on("data",function  (chunk) {
	n++
	console.log(Buffer.isBuffer(chunk))
	//console.log(chunk.toString('utf-8'))
	readStream.pause()
	console.log('data pause')
	setTimeout(function  () {
		console.log('data pasue end')
		readStream.resume()
	},3000)
})
.on("readable",function  () {
	console.log('data readable')
})
.on("end",function  () {
	console.log(n)
	console.log('data ends')
})
.on("close",function  () {
	console.log('data close')
})
.on("error",function  (e) {
	console.log('data close'+e)
})
