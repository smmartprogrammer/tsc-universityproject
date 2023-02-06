"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Raghunathji", 94, "student1");
const student2 = new Student("sita raam", 95, "student2");
const instructor1 = new Instructor("Sir Zia", 999, 10000);
const instructor2 = new Instructor("raam", 9990, 20000);
const course1 = new Course("Course1", "Mevaverse");
const course2 = new Course("course2", "Blockchain");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
const department2 = new Department("Management Science");
console.log(department1);
console.log(course1.instructor);
// instructor1.assignCourse("Artificial Intellegence");
// instructor1.assignCourse("Web3");
// instructor1.assignCourse("BlockChain");
console.log(instructor1.courses);
console.log(student1.courses);
// student1.registerForCourses("Metaverse");
// student1.registerForCourses("Web3");
console.log(student1);
console.log(student2.courses);
