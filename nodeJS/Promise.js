// fs.readFile('/etc/passwd', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
var fs=require('fs')

function readFile(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

readFile('theFil.txt').then(
	function(data) {
		console.log(data.toString());
		return new Promise(function  (resolve,reject) {
			reject('123')
		})
	 }//,
	// function  (err) {
	// 	console.log(err)
	// }
).catch(function  (err) {
	console.log(err)
});



// 区别：第一种next是不会处理res.send所抛出的异常，而第二种是会处理的
// auto.getData().then(function (results) {
//      res.send(results);
// }, next);
// auto.getData().then(function (results) {
//      res.send(results);
// }).catch(next);
