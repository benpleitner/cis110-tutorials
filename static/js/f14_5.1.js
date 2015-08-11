$("#nextStep1").css("display", "none")

function clickWalkthroughButton() {
	var delay= 21000; //miliseconds

	setTimeout(function(){
		$("#nextStep1").css("display", "inherit")
	}, delay); 

	$("#walkthroughButton").css("display", "none")
	var theater = new TheaterJS();
	var theater1 = new TheaterJS();

	answerTheater(theater);
	teacherTheater(theater1);

	function answerTheater(theater) {
		theater
		 .describe("Line_1", { speed: 1, accuracy: 1 }, "#line1")
		 .describe("Line_2", { speed: 1, accuracy: 1 }, "#line2")

		theater
		  .on("say:start, erase:start", function (eventName) {
		    var self = this,
		        current = self.current.voice;

		    self.utils.addClass(current, "saying");
		  })
		  .on("say:end, erase:end", function (eventName) {
		    var self = this,
		        current = self.current.voice;

		    self.utils.removeClass(current, "saying");
		  });

		theater
			.write(8200)
		  .write("Line_1: public static boolean sameSign", 9200, "(int[] arr) {", 1)
		  .write("Line_2: }", 1600)
		  .write(function () { theater.play(false); });
	}

	function teacherTheater(theater) {
		theater
		 .describe("Line_1", { speed: 1, accuracy: 1 }, "#line1T")
		 .describe("Line_2", { speed: 1, accuracy: 1 }, "#line2T")

		theater
		  .on("say:start, erase:start", function (eventName) {
		    var self = this,
		        current = self.current.voice;

		    self.utils.addClass(current, "saying");
		  })
		  .on("say:end, erase:end", function (eventName) {
		    var self = this,
		        current = self.current.voice;

		    self.utils.removeClass(current, "saying");
		  });

		theater
		  .write("Line_1: Since the question specifies to return true under a certain circumstance, and false otherwise, we know that sameSign() has a boolean return type.", 2400)
		  .write("Line_2: The question also tells us that sameSign() 'takes an array of integers,' so we know that our function has one argument, which is an array of integers. Let's call it 'arr.'", 1600)
		  .write(function () { theater.play(false); });
	}
}