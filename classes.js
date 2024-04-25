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
    const car = new Car("Range Rover","Sport",2020,"The car is available for rent")
    console.log(car.toggleAvailability());
    class Rental extends Car{
    constructor(make,model,year,isAvailable,rentalName,rentalStartDate,rentalEndDate){
     super(make,model,year,isAvailable)
     this.rentalName=rentalName
     this.rentalStartDate=rentalStartDate
     this.rentalEndDate=rentalEndDate
    }

    // Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance of 
    //the Rental class or function constructor for a rental involving the car you created. 
    //Finally, calculate the rental duration using the calculateRentalDuration method.

    calculateRentalDuration(){
     console.log(`The rental duration is${this.rentalEndDate-this.rentalStartDate}`)
    }
    }
    const rentalCar = new Rental("Range Rover","Sport",2020,"The car is available for rent","Rental Households",20,30)
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



    //Question2   
    // You are building a simple quiz app that contains multiple-choice questions. 
    //Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, 
    //and the Quiz class will manage a collection of questions and the user's progress. 


    const firstQuestion = new Question("How many planets do we have?",[10,9,2,13,4,5,33,7,8],8)
    console.log({firstQuestion});
    console.log(firstQuestion.text);
    console.log(firstQuestion.options);
    console.log(firstQuestion.correctAnswer);
    firstQuestion.checkAnswer(3)
    firstQuestion.checkAnswer(8)
    const secondQuestion = new Question("How many countries are in Kenya?",[47,65,23,12],47)
    console.log({secondQuestion});
    const thirdQuestion = new Question("What is the cleanest city in Kenya?",["Nairobi","Nyeri","Meru","Eldoret", "Karen"],"Nairobi")
    console.log({thirdQuestion});
    const fourthQuestion = new Question("Who is the best  Afro fusion musician in the world",["Davido","ArrowBwoy","Kayet","Bien","Ayra"],"Kayet")
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

    //nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 

    nextQuestion(){
     const index = `${this.questions}`
     for (let index of `${this.questions}`) {
         index+=`$this.questions`
         return index
    }
    }


    // submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of
    // the Question class, and updates the score if the answer is correct.

    submitAnswer(answer){
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
    quiz.submitAnswer(18)

