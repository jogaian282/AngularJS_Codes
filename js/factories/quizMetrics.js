app.factory('quizMetrics',QuizMetrics);
function QuizMetrics(){
	var quizObj = {
		quizActive :false,
		changeState : changeState,
		resultsActive : false
	};
	return quizObj;
	function changeState(metric,state){
		if(metric === 'quiz')
		{
			quizObj.quizActive = state;
		}
		else if(metric === 'results')
		{
			quizObj.resultsActive = state;
		}
		else
		{
			return false;
		}
	}
}