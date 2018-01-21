const http = require('http');
var Promise=require('bluebird')
const cheerio=require("cheerio")
const baseUrl='http://www.imooc.com/learn/'
const videoIds=[348,259,197,134,75]
function filterChapters (html) {
	var $=cheerio.load(html)
	var chapters=$(".chapter")
	var title=$(".course-infos .path span").text()
	var number=$($('.static-item')[1]).find('.meta-value').text()
	var courseData={
		title:title,
		videos:[],
		number:number
	}

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
		courseData.videos.push(chapterData)
	});

	return courseData
}
function printCourseInfo (courseData) {
	courseData.forEach(function  (courseData) {
		console.log(courseData.number+'人学过'+courseData.title+'\n')
	})
	courseData.forEach(function  (courseData) {
		console.log('###'+courseData.title+'\n')
		courseData.videos.forEach(function (courseData){
			var chapterTitle=courseData.chapterTitle
			console.log(chapterTitle+'\n')
			courseData.videos.forEach(function  (video) {
				console.log('['+video.id+']'+video.title+'\n')
			})
		})


	})
}
function getPageAsync (url) {
	return new Promise (function  (resolve ,reject) {
		console.log('正在爬取'+url)
		http.get(url,function  (res) {
			var html=""

			res.on("data",function  (data) {
				html+=data
			})

			res.on("end",function() {
				resolve(html)
				// var courseData=filterChapters(html)
				// printCourseInfo(courseData)
			})
		}).on("error",function  (error) {
			reject(e)
			console.log(error)
		})

	})
}

var fetchCourseArray=[]

videoIds.forEach(function  (id) {
	fetchCourseArray.push(getPageAsync(baseUrl+id))

})
Promise
	.all(fetchCourseArray)
	.then(function  (pages) {
		var courseData=[]
		pages.forEach(function  (html) {

			var courses=filterChapters(html)
			courseData.push(courses)
		})
		courseData.sort(function  (a,b) {
			return a.number < b.number
		})
		printCourseInfo(courseData)
	})
