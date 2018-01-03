const http = require('http');
const cheerio=require("cheerio")
const url='http://www.imooc.com/learn/348'
function filterChapters (html) {
	var $=cheerio.load(html)
	var chapters=$(".chapter")

	var courseData=[]

	chapters.each(function(item) {
		var chapter=$(this)
		var chapterTitle=chapter.find('strong').text().trim()
		var videos=chapter.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(item) {
			var video=$(this).find(".J-media-item")
			var videoTitle=video.text().trim()
			var id=video.attr("href").split("video/")[1]

			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		});
		courseData.push(chapterData)
	});

	return courseData
}
function printCourseInfo (data) {
	data.forEach(function  (item) {
		var chapterTitle=item.chapterTitle
		console.log(chapterTitle+'\n')
		item.videos.forEach(function  (video) {
			console.log('['+video.id+']'+video.title+'\n')
		})

	})
}
http.get(url,function  (res) {
	var html=""

	res.on("data",function  (data) {
		html+=data
	})

	res.on("end",function() {
		var courseData=filterChapters(html)
		printCourseInfo(courseData)
	})
}).on("error",function  (error) {
		console.log(error)
})
