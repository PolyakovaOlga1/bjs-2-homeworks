function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];   // Массив оценок
  }
  
  // Установка предмета студента
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  };
  
  // Добавление нескольких оценок студенту
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    } else {
      console.error('Student is excluded');
    }
  };
  
  // Среднее арифметическое оценок студента
  Student.prototype.getAverage = function() {
    if (this.marks && this.marks.length > 0) {
      return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;
    } else {
      return 0;
    }
  };
  
  // Исключение студента из учебного процесса
  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  };

  let student1 = new Student("Василиса", "женский", 19);
  student1.setSubject("Algebra");
  console.log(student1.getAverage()); // 0
  student1.addMarks(4, 5, 4, 5);
  console.log(student1.getAverage()); // 4.5
  console.log(student1);
  // {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
  let student2 = new Student("Артём", "мужской", 25);
  student2.setSubject("Geometry");
  student2.exclude('плохая учёба')
  console.log(student2)
  // {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}