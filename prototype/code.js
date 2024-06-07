String.prototype.filter = function(string){
    return this.replace(string,'');
};

Array.prototype.bubbleSort = function(){
    let n = this.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
                
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return this;
};

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);

var Teacher =  function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    return this.name + 'is now teaching ' + subject;
}

var teacher = new Teacher();
teacher.initialize('gaurav',25);
console.log(teacher.teach('wap'));