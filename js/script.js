/*
1.Create variables to represent scores of exams for John and NIck and set values as 80 and 45
2. Create variable to set the lower limit for passing an exam and assign to it value as 51
3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console
4. Use else if statement in order to check if one of the students has passed an exam and log the result in console .
5. Use else statement in  order to display in console that both students have failed 
6. IN case of passing the exam by one of the students, find out which one was that and display in console as an additional information the student name and his points 
7. Test all possible cases (a.both students passed an exam; b. John passed and Nick failded; c. Nick passed and John failed; d. Both students failed)

*/

// Solution :

var scoreOfJohn = 80;

var scoreOfNick = 52;

var pass = 51;

if(scoreOfJohn>=pass && scoreOfNick >= pass){
    console.log('Both students passed');
} else if(scoreOfJohn >= pass || scoreOfNick >= pass){
    console.log('One of the student passed');
    if(scoreOfJohn> scoreOfNick){
        console.log('and it is John with ' + scoreOfJohn + ' Points');
    } else {
        console.log('and it is Nick with '+ scoreOfNick + ' points');
    }
} else{
    console.log('Both of the students failed!')
}