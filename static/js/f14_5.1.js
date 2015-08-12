$("#nextStep1").css("display", "none")
$("#nextStep2").css("display", "none")

var theater = new TheaterJS();
var theater1 = new TheaterJS();

function clickWalkthroughButton() {
	var delay= 21000; //miliseconds

	setTimeout(function(){
		$("#nextStep1").css("display", "inherit")
	}, delay); 

	$("#walkthroughButton").css("display", "none")

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
		  // .write(function () { theater.play(false); });
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
		  // .write(function () { theater.play(false); });
	}
}

function clickNextStep1() {
	var delay= 27.4 * 1000; //miliseconds

	setTimeout(function(){
		$("#nextStep2").css("display", "inherit")
	}, delay);

	$("#nextStep1").css("display", "none")

	answerTheater(theater);
	teacherTheater(theater1);

	function answerTheater(theater) {
		theater
		 .describe("Line_3", { speed: 1, accuracy: 1 }, "#line3")
		 .describe("Line_4", { speed: 1, accuracy: 1 }, "#line4")
		 .describe("Line_5", { speed: 1, accuracy: 1 }, "#line5")
		 .describe("Line_6", { speed: 1, accuracy: 1 }, "#line6")

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
			.write(199 * 0.055 * 1000)
		  .write("Line_2: ", 1)
		  .write("Line_3: if (arr == null || arr.length == 0) {", 1)
		  .write("Line_4: return true;", 1)
		  .write("Line_5: }", 1)
		  .write("Line_6: }", 1)
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
		  .write("Line_1: ", 1)
		  .write("Line_2: ", 1)
		  .write("Line_1: Let's deal with the last sentence of the problem. It states 'if the array is null or empty, return true.' In code that means we need to check if the array is equal to null or the array's length is 0.", 56 * 0.055 * 1000)
		  .write("Line_2: Remember to use == instead of = when doing a boolean comparison. Also, as a reminder || means 'or', && means 'and' when doing boolean comparisons. Lastly, .length gets the length of an array while .length() gets the length of a String object.", 1)
	}
}

function clickNextStep2() {
	$("#nextStep2").css("display", "none")

	answerTheater(theater);
	teacherTheater(theater1);

	function answerTheater(theater) {
		theater
		 .describe("Line_7", { speed: 1, accuracy: 1 }, "#line7")
		 .describe("Line_8", { speed: 1, accuracy: 1 }, "#line8")
		 .describe("Line_9", { speed: 1, accuracy: 1 }, "#line9")
		 .describe("Line_10", { speed: 1, accuracy: 1 }, "#line10")
		 .describe("Line_11", { speed: 1, accuracy: 1 }, "#line11")
		 .describe("Line_12", { speed: 1, accuracy: 1 }, "#line12")
		 .describe("Line_13", { speed: 1, accuracy: 1 }, "#line13")
		 .describe("Line_14", { speed: 1, accuracy: 1 }, "#line14")
		 .describe("Line_15", { speed: 1, accuracy: 1 }, "#line15")
		 .describe("Line_16", { speed: 1, accuracy: 1 }, "#line16")
		 .describe("Line_17", { speed: 1, accuracy: 1 }, "#line17")
		 .describe("Line_18", { speed: 1, accuracy: 1 }, "#line18")
		 .describe("Line_19", { speed: 1, accuracy: 1 }, "#line19")
		 .describe("Line_20", { speed: 1, accuracy: 1 }, "#line20")
		 .describe("Line_21", { speed: 1, accuracy: 1 }, "#line21")

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
			// .write(199 * 0.055 * 1000)
		  .write("Line_6: ", 1)
		  .write("Line_19: if (arr[0] < 0) {", 1)
		  .write("Line_7: for (int i = 1; i < arr.length; i++) {", 1)
		  .write("Line_8: if (arr[i] >= 0) {", 1)
		  .write("Line_9: return false;", 1)
		  .write("Line_10: }", 1)
		  .write("Line_20: }", 1)
		  .write("Line_11: } else {", 1)
		  .write("Line_12: for (int i = 1; i < arr.length; i++) {", 1)
		  .write("Line_13: if (arr[i] <= 0) {", 1)
		  .write("Line_14: return false;", 1)
		  .write("Line_15: }", 1)
		  .write("Line_16: }", 1)
		  .write("Line_21: }", 1)
		  .write("Line_17: return true;", 1)
		  .write("Line_18: }", 1)
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
		  .write("Line_1: ", 1)
		  .write("Line_2: ", 1)
		  .write(function () { theater.play(false); });
	}
}