app.controller('LessonsController', ['$scope', function($scope) {
    var vm = $scope;
    
    vm.group = [];
    vm.student = {};
    
    vm.init = function(){
        vm.resetGroup();
        vm.resetStudent();
        vm.loadFakeData();        
    };
    vm.loadFakeData(){
        
    };
    vm.resetStudent(){
        
    };
    vm.resetGroup(){}
}]);
    
    
    
    
    
    
    
//    
//    
//    
//    
//app.controller('LessonsController', ['$scope', function($scope) {
//    var vm = $scope;
//    
//    vm.students = [];
//    vm.student = {};
//    //vm.presence = {};
//
//    vm.init = function(){
//        vm.resetStudents();
//        vm.resetStudent();
//        //test
//        vm.loadFakeData();   
//    };
//    
//    // metodo di inizializzazione dati per test
//    vm.loadFakeData = function(){
//    var day = vm.getDay();
        var student = vm.getStudent();
        vm.group.push(vm.getStudent(student));
        student.presTot.push({
            title: 'Frontend Development',
            hours: 4,
            description: 'Angular js'
            
//        var student = vm.getStudent();
//        vm.group.push(vm.getStudent(student));
//        student.presences.push({
//            title: 'Frontend Development',
//            hours: 4,
//            description: 'Angular js'
//        });
//    };
//       
//
//    // pulizia lista di student in students    
//    vm.resetStudents = function(){
//        vm.student.length = 0;
//    };
//    
//    // pulizia oggetto student
//    vm.resetStudent = function(){
//        vm.student.index  = -1;
//        vm.student.matr  = " " ;
//        vm.student.name  = " ";
//        vm.student.surname = " ";
//        if(vm.student.presences)
//            vm.student.presences.length = 0;
//        else
//            vm.student.presences = [];
//    };
//    
//    // restituisce un nuovo student con valori clonati da s
//    vm.getStudent = function(s){
//        var student = {};
//        student.matr  = s?s.matr:" ";
//        student.name  = s?s.name:" ";
//        student.surname  = s?s.surname:" ";
//        student.presences = [];
//        if(s && s.presences.length)
//            for(var i=0;i<s.presences.length;i++)
//                student.presences.push(vm.getPresence(s.presences[i]));
//        return student;
//    };
//
//    // restituisce una nuova presence con valori clonati da p
//    vm.getPresence = function(p){
//        var presence = {};
//        presence.title = p?p.title:null;
//        presence.hours = p?p.hours:null;
//        presence.description = p?p.description:null;
//        return presence;
//    };
//    
//    vm.saveStudent = function(index){
//        if(index>=0){
//            vm.students.splice(index, 1, vm.getstudent(vm.student));
//        }else{
//            vm.students.push(vm.getStudent(vm.day));
//            vm.resetStudent();
//        }
//    };
//    
//    vm.showStudent = function(index){
//        vm.student = vm.getStudent(vm.students[index]);
//        vm.student.index = index;
//    };
//    
//    vm.deleteStudent = function(index){
//        if(vm.student.index == index)
//            vm.resetStudent();
//        vm.students.splice(index,1);
//    };
//    vm.init();
//
//}]);