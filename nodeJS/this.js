var pet={
	word:"....",
	speak:function (say) {
		console.log(say+""+this.word)
	}
}
 var dog={
 	word:"wang"
 }

 pet.speak.call(dog,"speak2");
