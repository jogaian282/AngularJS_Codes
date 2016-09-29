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
	vm.error=false;
	vm.finalise=false;
	vm.finaliseAnswers=finaliseAnswers;

	var numQuestionsAnswered=0;
	function questionAnswered(){
		var quizLength = dataService.quizQuestions.length;
		if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
			numQuestionsAnswered++;
			if(numQuestionsAnswered >= quizLength){
				//finalise Quiz
				for (var i = 0; i < quizLength; i++) {
					if(dataService.quizQuestions[i].selected === null){
						setActiveQuestion(i);
						return;
					}
				}
				vm.error=false;
				vm.finalise=true;
				return;
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
				if(vm.activeQuestion === 0){
					vm.error = true;
				}
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
	function finaliseAnswers(){
		vm.finalise=false;
		numQuestionsAnswered=0;
		vm.activeQuestion=0;
		quizMetrics.markQuiz();
		quizMetrics.changeState("quiz",false);
		quizMetrics.changeState("results",true);
	}
}