/*
basic class with methods
*/


class User{

constructor(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;

}

static staticMethods(){
    console.log("static methods");
}

 registerUser(){

    console.log(this.name + " registered")

}

}

//let rajith = new User("rajith","rajith@gmail.com","password");
//rajith.registerUser();
//User.staticMethods()


class Member extends User{

constructor(name,email,password,id){
    super(name,email,password);
    this.id = id;
}


 getId(){
    console.log(this.name + "'s id is " + this.id);

}


}

let joe = new Member("joe","joe@gmail.com","password",1);
joe.getId();
joe.registerUser()
