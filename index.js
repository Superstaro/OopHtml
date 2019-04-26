class Student{
  constructor(name, age, mood){
    this.name = name
    this.age = age
    this.mood = mood
  }
}

const andyWeiss = new Student("Andy", 36, "happy")
const alexanderJimenez = new Student("Alexander", 36, "cool")
const jamesPharr = new Student("James", 32, "amazing")
const bryantRamirez = new Student("Bryant", 28, "tired")
const alenaBierzynski = new Student("Alena",  26,  "sleepy")
const victorBrown = new Student("Victor", 39, "positive")
const adrianMarimon = new Student("Adrian", 19, "happy")
const addisonGrillo = new Student("Addison", 23, "Chillin Like A Villain")
const danielMcglinchy = new Student("Daniel", 34, "stressed")
const yujailecBenitez = new Student("Yujailec", 24, "grateful")
const lorisOrsolini = new Student("Loris", 24, "Determined")
const calvinMitchell = new Student("Calvin", 28, "enthusiastic")
const lazQ = new Student('Laz', 33, 'Objectified')
const stephaniePineda = new Student("Stephanie", 27, "happy")
const ryanVanderhoff = new Student("Ryan", 31, "happy")
const wymanF = new Student('Wyman', 21, 'codey')
const jevonHill = new Student("Jevon", 39, "Chill")
const alexCastillo = new Student("Alex", 32, "supercalifragilisticexpialidocious")
const jeremyM = new Student("jeremy", 20, "adventageous")
const natGoldenberg = new Student("Nat", 25, "tired")
const vanessaDiminich = new Student("Vanessa", 28, "excited")
const ghostUser = new Student("Casper", 128, "Transparent")

class Dog extends Student {
  constructor(name, age, mood){
    super(name, age, mood)
    this.age = age * 7
  }
}

const winstonTheDog= new Dog("Winston", 0, "playful")
const lottieTheShorkie = new Dog("Lottie", 4, "starting what I can't finish...")
const lunaMarie = new Dog("Lunix", 4, "like a queen")


class Cohort{

	constructor(name, students){
		this.name = name
		this.students = students
	}

	enroll(...students){
		students.forEach(Student => this.students.push(student))
	}
}

const humanCohort = new Cohort("humans", [])
const dogCohort = new Cohort("dog", [])
