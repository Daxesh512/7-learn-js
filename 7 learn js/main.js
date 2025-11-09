'use strict'
/*var name1 = 10 , name2 = 5 ;

var sum = name1 + name2 ;



var objectTest = {
    name : "mehrdad",
    age : 5,
    legnumber:42 
};
console.log(objectTest.age) ;
alert(typeof objectTest.name);

var myarray = ["rasoul" , "ayoob" , "mehrzad"]
console.log(myarray[2]);

var a = 2;
var b = 4;

var paralel = a + b * 2 * 5 / 7;
console.log(paralel);
alert(true && false);
alert(1 && 2); 
alert("rasoul" && true); 

var age =  prompt ( "how old are you" ) ; 
if (age > 20 && age <= 50)
{
alert("you can use our site")
}  else  if (age > 50) 
{
   alert("good morning") 
} 
else
 {
    alert ( "oops !! you cant use our website" )
}
age > 20 && age <= 50 ?
alert("you can use our site")
:
age > 50 ?
alert("good morning") 
:
alert ( "oops !! you cant use our website" );


switch (age) {

    case "33":
    case "34":
        alert("you are 33")
        break;

        case "44":
            alert("you are 44")
            break;

    default:
        alert(" we are in defualt section ")
        break;
};  
//experession functions

sum(5 * b);

function sum (a,b){
    if(b === undefined)
    {
        b = 3 ;
    }

    alert(a + b)
}


//decleration function


var sayHi = function(){
    alert('Hi')
}; 

sayHi();
// loop
var i = 10;
while(i)
{
    document.getElementById('demo').innerHTML+='<div>hello</div>'
    i--;
}


age =  10;
while(age >= 10)
{
    age = prompt('how old r u?')
}

for(var i = 0 ; i < 20 ; i++)
{
    if (i%2 == 0)
    {
    document.getElementById('demo').innerHTML+='<div>hello</div>'} else
    {
        document.getElementById('demo').innerHTML+='<div>bye</div>' 
    }
}


i=1;
do {
    alert('hello')
    i--;
} while(i>0);


//binahayat
// while(true){};
// for(;;){};

var pass;
for (i = 0 ; i<100 ; i++){
    pass = prompt("what's your pass?!")
if(pass == 123456){
    break;
}
}

for(i=0; i<10; i++){
    if(i%2 == 0){
        continue
    }
    alert (i);
}

//objects

var key = 'class Name';//computed peroperty
var student = 
{
    name: 'ali',
    family:'dadkhah',
    age:19,
    walk:function()
    {
        var i = 100;
        while(i){
            console.log("--");
            i--;
        }
    }(),
    'clas name' : 'c1',
    [key] : 'c2',
}
console.log(student.name);
console.log(student['name']);
console.log(student['class name']);



if (student.name != undefined){
alert('name exsist')
} 
if('name' in student){
    console.log('is here');
}

for(propertyName in student)
{ 
    if(typeof student[propertyName] == 'function' ){
        student[propertyName]();
    }else{
        console.log(student[propertyName]);
    }
    console.log(propertyName);

    console.log(student[propertyName]);
}


var shownumb = {
    family : 'dbjs',
    1: 34,
    name : 'rsol',
    '23': '42',
    10 : 35
}
for(pName in shownumb)
{
    console.log(pName);
}

//STRING TO NUMBER

var showstring = "15";
showstring = Number(showstring); 


var grade = "12.36";
grade = parseFloat(grade);
console.log(grade , typeof grade);


grade = parseInt(grade);
console.log(grade , typeof grade);

var y = "15";
y= + y;
console.log(y , typeof y );


// NUMBER TO STRING

var x = 123;
x = String(x);
console.log(x , typeof x);

x = x.toString();
var test1 = 0;
console.log(Boolean(test1));
function inputChanger(event)
{
    console.log(event);
    console.log('changed');
}
function validate(event) {
    if(event.target.value.length < 3){
        alert("خطا ... نام شما باید حداقل 3 کاراکتر باشد!!")
    }
}

//matn character
// \n   ===  new line
// \r\n ===  line break
// \t  === be andaze ye tab space mide
// \u00a9  === alamate copyright

// Escape character
// \' halate pishfarze character ru migire yani alan inja coteition jozvi az matne maast alamate payane matn nist

// var text = "hi good \"morning\" "
 
// \"


// \\ vatyi ke khude back slash jozvi az  matne do backslash qarar midim


var fruits = ["orange " , "lemon" , "apple" ]
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
for (i=0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}

fruits.forEach(logMyarrayItems);
function logMyarrayItems(index , value){
    console.log(index);
    console.log(value);
}

fruits.push('strawberry');

var lastItem = fruits.pop("apple")
console.log(fruits);

var number = [1, 100, 45 , 70 ,90];
var list2 = number.filter(function(value){
    return value>40
});//item haye bozorgtar az 40 ro bar migardoone


var list3 = number.map(function(value){
    return value * 2;
})//tamae item ha ro zarb dar 2 mikone 

var check = number.every(function(value){
    return value>40;
})//hamaru check mikone va true or false bar migardone 


var fruits = ["orange " , "lemon" , "apple" ];


console.log(number);
console.log(list2);
console.log(list3 );
console.log(check);
console.log(fruits.sort());//be tartib horoofe alefba sort mikne

console.log(number.sort(function(a,b){
    return b - a;
}));//adadha ru az bozorg be koochik moratab mikone

console.log(Math.min(...number));//koochektarin barmigarde 
console.log(Math.max(...number));//bozorgtarin bar migarde


//intervals

function test(a){
    console.log(a);
    console.log(new Date());
}
var timerId = setTimeout(test , 2000 , "salam");
clearTimeout(timerId);

var timerId = setInterval(test , 2000 , "salam");
setTimeout(() => {
   clearInterval(timerId) 
}, 6000);

// var cnt = 0;
// setTimeout(function Run(){
//     console.log('sss');
//     cnt++;
//     if(cnt < 10)
//     {
//         setTimeout(Run(),1000)
//     }
// },1000)
var cnt =0 ;
setTimeout(function run(){
    document.write('sss');
    cnt++;
    if(cnt <10){
        setTimeout(run() , 1000)
    }
} , 1000);
// function clockRunner(){
//     var d = new Date();

//     let hrs = d.getHours();

//     let mins = d.getMinutes();

//     let secs = d.getSeconds();

// let clock =hrs + ":" + mins + ":" + secs;

// document.getElementById("MyClock").innerHTML = clock;
// setTimeout(clockRunner() , 1000);

// }

//date project
function clockRunner(){
    var d = new Date();
    let hrs = d.getHours();

    let mins = d.getMinutes();

    let secs = d.getSeconds();
    var p = 'am';
        if(hrs > 12){
            hrs = hrs-12;
            p = 'pm';
        }
        var qbal = 0;
        if (hrs < 10){
            hrs = "0" + hrs
        }
let clock =hrs + ":" + mins + ":" + secs + "" +p;

document.getElementById("MyClock").textContent = clock;
setTimeout(() => clockRunner() , 1000);
}


clockRunner();

function dateRunner(){
    let createDate = new Date();
    console.log(createDate);

    var Day = createDate.getDate();
    var month = createDate.getMonth(); 
    var year = createDate.getFullYear() ;
  

    var showDate = Day + "." + month + "." + year  ;

    document.getElementById("myDate").textContent =showDate;
    setTimeout(clockRunner() , 1000)
}
console.log(dateRunner())

//calculator

//nodes
//dastresi be element haye dom

let myBody = document.body;
let myDiv = myBody.childNodes[3];
let ul = myDiv.childNodes[1];
console.log(myDiv);


//dastresi be child haye dom

let childCount = myDiv.childNodes.length;
for(let i=0 ;i<childCount ;i++){
    console.log(myDiv.childNodes[i]);
}


//dastresi bee node haey koochak tar
//degha be inke hich moteqayeri tashkil nashude va maa be sorate default objectesh ru dar js darim;
//agar id table morede nazar dash(-) dashte bashsad digar be soorate default variablesh  sakhte nemishe

console.log(table1.tBodies[0].rows);


//bekhatere vojoode dash(-) be in  soorat mishe dastresi dasht

console.log(window['table2-test']);
 

//standard attributes vs non-standard
let myAtr = document.getElementById('myDiv');
console.log(myAtr.childNodes[1].getAttribute('test'));

myAtr.childNodes[1].setAttribute('type' , 'text');

myAtr.childNodes[1].removeAttribute('type' , 'text');

myAtr.childNodes[1].value='newval';

console.log(myAtr.childNodes[1].checked);


//eejade text node va element
//li creator 

let myDiv = document.getElementsByClassName('new-elements')[0];

let newElem1 = document.createElement('ul');
newElem1.className='mylist'
newElem1.innerHTML = '<li id ="first">اولین لیست</li>'
myDiv.append(newElem1)

function creator(where) {

    if(!(where in newElem1)){
        alert('not defined');
        return;
    }
    
        let li = document.createElement('li');

        li.innerHTML= '<strong>ایتم جدید</strong>';

        newElem1[where](li)
    }


function getPlace() {
    let whereToAdd = prompt('where you want to add');
creator(whereToAdd)

}


// dastresi be style dar dom

    console.log(allStyle.width);
    myDiv.classList.add("box2" , "box3")


function changeBack()
{

    let myDiv = document.getElementById('test');
    let allStyle = myDiv.style;
    allStyle.backgroundColor = prompt('love what color');
   
}   */


// mokhtasate elem dar dom va window
// console.log(example.getBoundingClientRect());
//=> agar event ru baraye man ferestad khude event agar nafrestad az window.event estefadeh kon chun moroorgarhaye qadimi emkan dare nafrestan event ro
 document.onmousemove = function  ( event ) {
    event = event || window.event

    if (event.pageX == null && event.clientX !== null){
        event.pageX = event.clientX +document.body.scrollLeft;
        event.pageY = event.clientY + document.body.scrollTop;
    } 
    let hoveredElem = document.elementFromPoint(event.pageX , event.pageY);


     if(hoveredElem.tagName !== 'BODY') {
        hoveredElem.style.backgroundColor = 'gray';
      }
  
}
    function leaved(event){
        event = event || window.event;
        event.target.style.backgroundColor = null;
    }
    for(let elem of document.body.childNodes){
        if (elem instanceof Element ){
            elem.onmouseleave = leaved;
        }
    }





