//////////////JOIN PAGE FORM JS CODE\\\\\\\\\\\\\\\\\\\

//Defining function validateForm: it makes sure that the form has its required information filled out and they are not empty. If that is the case, it changes the value isFilled to false
function validateForm() {

    // using document.forms property, JS is able to interact with the forms and after that i give it the name of the form and then index of what I'm looking for and then ask for its value and store it in the corresponding variable
    
    //ignore console.log, used it to make sure the code runs

    var f = document.forms["join"]["fname"].value;  //first name
    //console.log("first name is");
    //console.log(f);

    var l=document.forms["join"]["lname"].value;  //last name
    //console.log("last name is");
    //console.log(l);

    var e=document.forms["join"]["mail"].value; // email
    //console.log("email is");
    //console.log(e);

    //it gets the first name value from the first name if it is empty it will have a pop up and keeps the value of isFilled as false
    if (f == "")
    {
        alert("First name must be filled out!");
        isFilled=false;
    }  

    //it gets the first name value from the last name if it is empty it will have a pop up and keeps the value of isFilled as false
    else if (l == "")
    {
        alert("Last name must be filled out!");
        isFilled=false;
    }    
    //it gets the email value from the first name if it is empty it will have a pop up and keeps the value of isFilled as false
    else if (e == "")
    {
        alert("Email must be filled out!");
        isFilled=false;
    }

    //only if the inputs are not empty it changes that boolean value of isFilled to true.
    else if( f != "" && l != "" && e != "")
    {
        isFilled=true;
    }
} 

//Defining function checked: it checks to see if the checkbox has been clicked on or not, if it has, changes the value of newsletter to true
function checked(){
    
    if(this.checked)    //this refers to the checkbox when its called in its eventListener, generally it just refers to the whatever we are calling the eventListener with this function on
    { 
        newsletter=true;
    }
    else
    {
        newsletter=false; 
    }
}

//Defining function submitted: it makes sure that the form is only submitted when validated form and checked have returned their values and decides accordingly
function submitted(){

    validateForm();  // calls upon validateForm to know the value of isFilled
    
    //ignore console.log, used it to make sure the code runs
    //console.log("isFilled is");
    //console.log(isFilled);
    //console.log("newsletter is");
    //console.log(newsletter);

    //the value newsletter has already been checked into, by the event listener that is added to the checkbox
    
    //for each case it has its own specific alert 
    if(newsletter==true && isFilled==true )
    { //confirming they signed up for the online newsletter
        alert("Welcome! You have joined our club! You also have signed up for our online newsletter. Please confirm your email address in your inbox and you will be all set.");
    }

    
    else if(isFilled==true)
    {
        alert("Welcome! You have joined our club! Please confirm your email address in your inbox and you will be all set.");
    }       
}


 
var page= window.location.pathname; // Defining  a variable to store the value of the path of current opened window so that the form code only runs on the join page
//console.log(page);
var newsletter=false; //boolean variable newsletter, it is only true when the checkbox is checked
var isFilled=false; //boolean variable isFilled, it is only true when all three of first name, last name and email are properly filled


//I'm using an if statement to make sure that this code is only running on the join page, since I was getting a console error on other pages because it was trying to still use the eventListeners so only if the variable page is equal to "/Join.html" the form code runs

if (page == "/Join.html"){  
    //using getElementById to store all the data in respective variables
    var fname=document.getElementById("fname"); //first name
    var lname=document.getElementById("lname"); //last name
    var email=document.getElementById("mail");  //email
    var checkbox=document.getElementById("checkbox"); //checkbox accepting email newsletter
    var submit=document.getElementById("submit"); //submit button
    var form= document.getElementById("form"); //form itself


    //this only changes the color of the input if the input box has been clicked or focused 
    form.addEventListener("focus", function(event){
                          event.target.style.background ="#C4eef3";},true);

    form.addEventListener("blur", function(event){
        event.target.style.background ="";}, true);

    //telling the checkbox eventListener to run the function checked as soon as you see a change in the state of the checkbox
    checkbox.addEventListener("change",checked);
    //telling the submit evenLisener to run the function submiited as soon as there's a click on the submit button
    submit.addEventListener("click", submitted);
}



//////////////HAMBURGER MENU JS CODE\\\\\\\\\\\\\\\\

  /*For the hamburger menu I found an online tutorial : https://youtu.be/ydZc17rlR5E by Florin Pop and used some of his code after I fully understood it, it's pretty straight forward actually: you create a button, import the symbol using font awesome, then using @media queries css we, set the properties of the button to hide when the screen is big enough and we don't need a hamburger menu , but when the page is small, we set the navigation link to hide and the hamburger menu to show. Later we manipulate this in javascript using an event listener that checks for a click on the element id bars as soon as bars is clicked, it toggles the css class of navigation links to the one with .show. I learned a lot from this code and changed it and added an X button so that when we press the hamburger menu , to close it the button changes! */

//using getElementById to store all the data in respective variables

var bars = document.getElementById("bars");  //bar button
var navigation=document.getElementById("navigation"); //navigation links //I used getElementbyId instead of query selector since I just preferred to be more specific



//telling the bars eventListener to toggle the .navigation class to show as soon as the user clicks on the bars button

//I changed the arrow function from the code to normal function() from the original code
bars.addEventListener("click", function(){
    navigation.classList.toggle("show");}); // toggles to navigation class #navigation.show




/////////////////////////ARCHIVE TOGGLE MENU\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/* I wrote this code myself, however learned the idea of toggling between css classes using javascript from the hamburger menu tutorial and I added the change in button as you click on it */ 

var archive_toggle_down = document.getElementById("archive-button-down");//toggle down button
var archive_toggle_up = document.getElementById("archive-button-up"); // toggle up button
var archive_dates = document.getElementById("archive-dates"); // archive dates list
var archive_bar = document.getElementById("archive-bar"); // archive title bar

if(page == "/News.html") // run this code only one news page
    {
        // An event listener that as soon as it gets a click on the archive bar, it toggle between three css classes below
        archive_bar.addEventListener("click", function(){
            archive_dates.classList.toggle("show");  // in CSS file: #archive-dates.show
            archive_toggle_up.classList.toggle("show"); // in CSS file: #archive-toggle-up.show
            archive_toggle_down.classList.toggle("hide"); //in CSS file: #archive-toggle-down.hide
        });
    }



//////////////////////BEGINNER CHESS LESSONS MULTIPLE TOGGLES\\\\\\\\\\\\\\\\\\\\

// At first, I tried to write eventlistner and their corresponding variables out but I realized that it's much easier to use an array of objects from whast I had learned in intro to programming 1 and web devolopment class 

var lessons=[];  //storing each lesson element

// a for loop that goes adds to lessons [i] , I started it at one so that I wouldn't deal with array element 0, and kept that at null
for(var i=1; i<7; i++)
{ 
    lessons[i]=  
        { //using getElementById with addition of string and variable i
            title : document.getElementById("lesson-"+ i +"-title"),  //title bar
            toggle_down: document.getElementById("lesson-"+ i +"-button-down"),  // button toggle down
            toggle_up : document.getElementById("lesson-"+ i +"-button-up"), //button toggle up
            dscrp: document.getElementById("lesson-"+ i +"-dscrp")  // description 
        }    
}

if(page == "/Beginner-Lessons.html") // run this code only if the page is Beginner lessons
{
        for(let i=1; i<7; i++)
        { //using let to make sure the iteration stays inside the eventlistner as well

            //adding eventlistener to toggle through three different classes when each title bar gets clicked
            lessons[i].title.addEventListener("click", function(){
                         lessons[i].dscrp.classList.toggle("show");  // in CSS file: #lesson-i-description.show
                         lessons[i].toggle_up.classList.toggle("show"); //in CSS file: #lesson-i-toggle-up.show
                         lessons[i].toggle_down.classList.toggle("hide");});   //in CSS file: #lesson-i-toggle-down.hide
        }
}

