class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating||"pg";
    
    }
    getPG(){
        console.log(`
        movie title : ${this.title}
        studio :${this.studio}
        Rating : ${this.rating}`)
    }
}
const movie1 =new Movie("Casino Royale", "Eon Productions","PG13")
movie1.getPG()

//-----------------------------------------------------------------------------------------------

class Circle{
    constructor(radius,color){
        this._radius=radius;
        this._color=color
    }
    get radius(){
        return this._radius*2
    }
    set radius(Radius){
       console.log(this._radius);

    }

    get color(){
        return `color : ${this._color}`
    }
    set color(color){ returnthis._color=red}
    tostring(){
        console.log(`radius : ${this.radius}  color : ${this.color}`)
    }
    Setarea(){
        console.log(`Area : ${(Math.PI*this.radius**2).toFixed(1)}`)
    }
    setCircumferance(){
         console.log(`circumferance : ${(2*Math.PI*this.radius).toFixed(1)}`)
    }
}
const circle1 =new Circle(1.0,"red")
console.log(circle1.radius)
console.log(circle1.color)
circle1.tostring()
circle1.Setarea()
circle1.setCircumferance()



//---------------------------------------------------------------------------
class Person{
    constructor(firstname,lastname,email,phoneno,dateofbirth,degree){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phoneno=phoneno;
        this.dateofbirth=dateofbirth;
        this.degree=degree
    }
    getdetail(){
        console.log(`
        Firstname : ${this.firstname}
        Lastname : ${this.lastname}
        Email id : ${this.email}
        Phone No : ${this.phoneno}
        Date-of-birth : ${this.dateofbirth}
        Degree : ${this.degree}`)
    }
    
}
const person1= new Person("Bharath","S","bharathsab123@gmail.com",6381218113,"29/08/2001","B.E Mechanical Engineer")
person1.getdetail()

//------------------------------------------------------------------------------------------------------------------------  
class Uberprice{
    constructor(startingpoint,destination,km,time){
        this.startingpoint=startingpoint;
        this.destination=destination;
        this._km=km;
        this._time=time;
    }
    get km(){
       return this._km*6
    }
    set km(Newkm){
        km==this._km
    }
  
    
    getinfo(){
        console.log(
            `you starting point is ${this.startingpoint} to drop off ${this.destination}
            Total distance travelled ${this._km} KM 
               Your TOTAL FEE "RS.${this.km}/"`
        )

    }


}
const customer1=new Uberprice("palavakkam","mandaveli",17,2)
customer1.getinfo()