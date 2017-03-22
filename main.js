var todoApp = angular.module("todoApp", []);

todoApp.controller('TaskList', TaskList);

//objeto que Almacena toda informacion--> $scope
function TaskList($scope) 
{
	//$scope.titulo ="hola!!!";
	$scope.tasks = [
		{ tarea: "tarea 1", 
		 isDone:false, 
		 descripcion: "Esta es una tarea de prueba",
		 tiempo: "30 min"
		}
	];
	
	$scope.addTask = function
{
	$scope.tasks.push({
		tarea: "tarea 3", 
		 isDone:false, 
		 descripcion: "Descripción corta",
		 tiempo: "10 min"
	});
}
}

