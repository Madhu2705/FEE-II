//There are 2 ways to declare an object :constructor/literals:
//A)constructor:
/*const obj = new Object();
obj.name='yash'
console.log(typeof obj)
console.log(obj)

//B) literals//
/*const users = {
    name:'yash',
    'roll number':123456,
    subject:'FEE'
}
// 1.accessing object values
console.log(users.name)
console.log(users['name'])

//2.change object value
//users.name="somaya singh";
//console.log(users)

//3.object inside an object:
//let arr =[1,2,[1,2,3],34]
//console.log(arr[2,2])*/

/*let users ={
    user1 :{
        name:'kkk',
        age:{
    
    user2 :{
        name:'ggg',
        age:24
    }
}
}
}
console.log(users.user1.age.user2.age)*/


//merge object
obj1={name1:
    'kanav',
    age:24
}
obj2={name:'yash',age:25}
obj3={...obj1,...obj2}
console.log(obj3);