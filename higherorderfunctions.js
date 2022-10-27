//Higher Order Functions

//Numbers divisible by 7
let a=[12,14,20,21,35]
let b=a.filter(num => num%7==0)
console.log(b)

//words with length less than 8
let words=['Python','Javascript','React','Go','PHP','Bootstrap','Java']
let w=words.filter(word => word.length<8)
console.log(w)

//words starts with 'P'
let pletter=words.filter(word => word.startsWith('P'))
console.log(pletter)

let pletter1=words.filter(word => word[0]=='P')
console.log(pletter1)

//words starts with 'J
let jletter=words.filter(word => word[0]=='J')
console.log(jletter)

//filter using array of objects
const tasks=[{'name':'Lunch','duration':40},
             {'name':'workout','duration':60},
             {'name':'job','duration':480},
             {'name':'sleep','duration':360}]
const diff = tasks.filter((task) => task.duration>=120)
var array=[]
diff.forEach(element => {
    array.push(element.name)
});
console.log(diff)
console.log(array)

//Find the average time for the given tasks
let sum=0
tasks.forEach(ele => {
    sum+=ele.duration
})
console.log(sum/tasks.length)

//Find the name who fail in physics exam
let stu=[{'name':'vasu','maths':62,'chem':15,'physics':45},
         {'name':'raju','maths':20,'chem':60,'physics':50},
         {'name':'ram','maths':55,'chem':30,'physics':25}]
const pname = stu.filter((s) =>{ if (s.physics<35) return  s.name})
let p=[]
pname.forEach(ele => {
    p.push(ele.name)
})
console.log(p)

//Find the names who fail in chemistry exam
const cname = stu.filter((s) => {if(s.chem<35) return s.name})
let c=[]
cname.forEach(ele => {
    c.push(ele.name)
})
console.log(c)

//Find the names who fail in maths exam
const mname = stu.filter((s) => {if(s.maths<35) return s.name})
let m=[]
mname.forEach(ele => {
    m.push(ele.name)
})
console.log(m)

//Double the elements in the array
var myarray=[1,3,5,2,4]
result = myarray.map(function(item){
    return item*2;
});
console.log(result)

//Find the square root for the elements in the array
const numbers = [9,36,64,144];
let squareroots=numbers.map((number) => {
    return Math.sqrt(number);
})
console.log(squareroots)

//Find the lengths of the words in the given array
const names=["pune","hyderabad","kochin","delhi"]
let lengths = names.map((name) => name.length)
console.log(lengths)

//Concatenate the firstname and lastname in the given array
const students=[{firstname:"vijay",lastname:"kumar"},
                {firstname:"Rohith",lastname:"varma"},
                {firstname:"Varun",lastname:"tej"}];
let sfullname=students.map(student =>{
    return `${student.firstname} ${student.lastname}`;
});
console.log(sfullname)

//Find the largest number in the array using reducer() function
const n=[33,60,12,15,88,76]
console.log(n.reduce((a,b) => (a>b)?a:b));

//Find the sum of numbers in the array
console.log(n.reduce((sum,num) => sum+num))

//Concatenate the array of array to a single array
const arr=[[2,7],[3,6],[2,4,10]].reduce(function(previousvalue,currentvalue){
    return previousvalue.concat(currentvalue)
})
console.log(arr)

//write a js function to count number of words in a given sentence
const sen="Dream big to achieve big"
const l=(sen) => {return sen.split(" ").length}
console.log(l(sen))

//Lab programs using map,reduce,filter
var users = [
	{"user": "krishna"},
	{"user": "vijay"},
	{"user": "vasu"},
	{"user": "venu"},
	{"user": "rajesh"},
	{"user": "varun"},
	{"user": "chandra"}
	];

let resultDetails = users.map(user => {
    let mark = Math.random() * 100;
    user.mark = mark;
    return user
});


var selectedCandidate = resultDetails.filter(user => {
	if(user.mark > 80){
		return user;
    }
});

let can=[]
selectedCandidate.forEach(ele => {
    can.push(ele.user)
})

console.log(can);

//program not using map function
const task = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];
  //without using map function
  const task_names = [];
    
  for (let i = 0, max = task.length; i < max; i += 1) {
      task_names.push(task[i].name);
  }
   
  console.log(task_names) 
  
//using map function
const task_names1 = task.map(task => task.name)
console.log(task_names1)


const users1 = [
    {
      name: "Van Batchelder",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Winter Rubino",
      city: "Madrid",
      birthYear: 1992
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zion Shively",
      city: "Alabama",
      birthYear: 2002,
    }
  ];
  
  const currentYear = new Date().getFullYear();
  const filteredUsers = users1.filter((user) => (currentYear - user.birthYear) > 25);
  
  console.log(filteredUsers);


  var users3 = [
    {"user": "krishna"},
    {"user": "vijay"},
    {"user": "vasu"},
    {"user": "venu"},
    {"user": "rajesh"},
    {"user": "varun"},
    {"user": "chandra"}
    ];
  
  let resultDetails3 = users3.map(user => {
      let mark = Math.random() * 100;
      user.mark = mark;
      return user
  });
  
  
  var selectedCandidate1 = resultDetails3.filter(user => {
    if(user.mark > 80){
      return user;
      }
  });
  
  

  let can1=[]
selectedCandidate1.forEach(ele => {
    can1.push(ele.user)
})

console.log(can1);

  const users2 = [
    {
      name: "David John",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Justin",
      city: "Canada",
      birthYear: null
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zerovsky",
      city: "Russia",
      birthYear: 2002,
    }
  ];
  
  const currentYear2 = new Date().getFullYear();
  
  const userNames = users2.reduce((filterUsers, user) => {
    if (user.birthYear && (currentYear2 - user.birthYear) > 25) {
      filterUsers.push(user.name);
    }
    return filterUsers;
  }, []);
  
  console.log(userNames);