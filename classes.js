//you are working on a web application for a car rental company.They want to keep track of their car inventory and rental information. Your task is to create a JavaScript class or function constructor for representing cars in their inventory and another one for representing rental information
//1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
//b. model (string): The model of the car, e.g., "Camry". 
//c. year (number): The year the car was manufactured, e.g., 2020. 
//d. isAvailable (boolean): Indicates if the car is currently available for rent. 
//The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 
class Car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable =isAvailable
    }
    toggleAvailability(){
        console.log(`The ${this.make} is not available for rent`)
    }
}
const car = new Car("toyota","camry",2020,"The car is available for rent")
console.log(car.toggleAvailability());
class Rental extends Car{
    constructor(make,model,year,isAvailable,rentalName,rentalStartDate,rentalEndDate){
        super(make,model,year,isAvailable)
        this.rentalName=rentalName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate
    }
    calculateRentalDuration(){
        console.log(`The rental duration is${this.rentalEndDate-this.rentalStartDate}`)
    }
}
const rentalCar = new Rental("toyota","camry",2020,"The car is available for rent","Rental Households",20,30)
console.log(rentalCar.make)
rentalCar.calculateRentalDuration()
class Question{
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer=correctAnswer
    }
    checkAnswer(answer){
        this.answer=answer
        if (`${this.answer}`!==`${this.correctAnswer}`) {
            console.log("false");
        }
        else{
            console.log("true");
        }
    }
}
const firstQuestion = new Question("How many planets do we have?",[1,2,3,4,5,6,7,8],8)
console.log({firstQuestion});
console.log(firstQuestion.text);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswer);
firstQuestion.checkAnswer(3)
firstQuestion.checkAnswer(8)
const secondQuestion = new Question("How many countries are in Kenya?",[47,65,23,12],47)
console.log({secondQuestion});
const thirdQuestion = new Question("What is the capital city of Kenya?",["Nairobi","Mombasa","Kisumu","Nakuru"],"Nairobi")
console.log({thirdQuestion});
const fourthQuestion = new Question("Who is the president of Kenya",["Uhuru","Raila","Mutahi","Obama"],"Uhuru")
console.log({fourthQuestion});
const lastQuestion = [fourthQuestion]
console.log(lastQuestion);
class Quiz{
    constructor(questions,index,score){
        this.questions = questions
        this.index = index
        this.score = score
    }
    addQuestion(lastQuestion){
        this.lastQuestion = lastQuestion
        const allFourQuestions = this.questions.concat(this.lastQuestion)
        console.log({allFourQuestions});
    }
    nextQuestion(){
        const index = `${this.questions}`
        for (let index of `${this.questions}`) {
            index+=`$this.questions`
            return index
    }
    // submitAnswer(){
    // }
}
submitAnswer(answer){
    `${this.answer}`=answer
    `${this.score }`= score
    if (`${this.answer}`!==`${this.correctAnswer}`) {
        score++;
        return score
    }
    else{
        return "wrong choice"
    }
}
}
const quiz = new Quiz([firstQuestion,secondQuestion,thirdQuestion],2,30)
console.log({quiz});
quiz.addQuestion(lastQuestion)
quiz.nextQuestion()
quiz.submitAnswer(12)






//question2
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }

  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }
  
