app.controller('listCtrl',ListController);
ListController.$inject=['quizMetrics','dataService'];
function ListController(quizMetrics,dataService){
	var vm = this;
	vm.data=dataService.turtlesData;
	vm.activeTurtle={};
	vm.changeActiveTurtle=changeActiveTurtle;
	vm.search="";
	vm.quizActive=false;
	vm.activateQuiz=activateQuiz;
	vm.quizMetrics=quizMetrics;

	function changeActiveTurtle(index){
		console.log(index);
		vm.activeTurtle=index;
	}

	function activateQuiz(){
		quizMetrics.changeState("quiz",true);
	}
}


