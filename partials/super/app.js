var myApp = angular.module("myApp",[]);

var todoList = [{done:true, title:'Angualr 독서'},
                {done:false, title:'Angualr 공부'},
                {done:false, title:'내 공부'}]

myApp.controller('myController', function($scope){
    $scope.todoList = todoList;

    $scope.remain = function(){
        var remainCount=0;
        angular.forEach($scope.todoList, function(value, key){
            if(value.done === false){
                remainCount++;
            }
        });

        return remainCount;
    };

    $scope.addNewTodo = function(newTitle){
        $scope.todoList.push({done:false, title:newTitle});

        $scope.newTitle='';
    }
});

myApp.controller('mainCtrl', function($scope){
    $scope.broadcast=function(noticeMsg){
        $scope.$broadcast("chat:noticeMsg", noticeMsg);
        $scope.noticeMsg="";
    };
});

myApp.controller('chatMsgListCtrl', function($scope, $rootScope){
    $scope.msgList=[];
    $rootScope.$on("chat:newMsg", function(e, newMsg){
        $scope.msgList.push(newMsg);
    });

    $scope.$on("chat:noticeMsg", function(e, noticeMsg){
        $scope.msgList.push("[공지] "+noticeMsg);
    });
});

myApp.controller('chatMsgInputCtrl', function($scope){
    $scope.submit=function(newMsg){
        $scope.$emit("chat:newMsg", newMsg);
        $scope.newMsg="";
    };
});

myApp.directive('hello', function(){
    return function(scope, iElement, iAttrs, controller){
        // $log("<h1>hello"+iAttrs.name+"</hl>"); 
        iElement.html("<h1>hello "+iAttrs.name+"</h1>")
    };
});





