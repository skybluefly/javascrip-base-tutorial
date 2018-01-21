/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-17 14:25:29
 * @version $Id$
 */

var obj=function  () {
	obj.prototype.init.apply(this,arguments);
}
var defaultSetting={}
obj.prototype={
	init:function  (opts) {
		this.opts=$.extend({},defaultSetting,opts)
	}
}
