app.controller('quizCtrl',QuizController);
QuizController.$inject=['quizMetrics','dataService'];
function QuizController(quizMetrics,dataService){
	var vm = this;
	vm.quizMetrics=quizMetrics;
	vm.dataService=dataService;
	vm.activeQuestion=0;
	vm.questionAnswered=questionAnswered;
	vm.setActiveQuestion=setActiveQuestion;
	vm.selectAnswer = selectAnswer;

	var numQuestionsAnswered=0;
	function questionAnswered(){
		var quizLength = dataService.quizQuestions.length;
		if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
			numQuestionsAnswered++;
			if(numQuestionsAnswered >= quizLength){
				//finalise Quiz
			}
		}
		vm.setActiveQuestion()
	}
	function setActiveQuestion(index){
		if(index === undefined)
		{
			var breakOut = false;
			var quizLength = dataService.quizQuestions.length-1;

			while(!breakOut){
				vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion:0;
				if(dataService.quizQuestions[vm.activeQuestion].selected === null){
					breakOut = true;
				}
			}
		}
		else
		{
			vm.activeQuestion=index;
		}
	}
	function selectAnswer(index){
		console.log(index);
		dataService.quizQuestions[vm.activeQuestion].selected = index;
	}
}