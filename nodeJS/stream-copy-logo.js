var fs=require('fs')

var readStream=fs.createReadStream("logo.png")

var writeStream=fs.createWriteStream("logo-strem.png")



readStream.on("data",function  (chunk) {
	if(writeStream.write(chunk)===false){
		console.log('still cached')
		readStream.pause()
	}
})

readStream.on("end",function  () {
	writeStream.end()
})

readStream.on("drain",function  () {
	console.log('data drain')
	readStream.resume()
})
