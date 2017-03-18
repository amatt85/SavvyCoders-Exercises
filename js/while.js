//****This would be for sending email to multiple people at once****
//var emails = ["email@gmail.com; email@yahoo.com; etc"] This is a list of emails(this may also be filled with a link that holds all email addresses instead)
//var i = 0;
//while (i < email.length) {
//  send email(emails[i]);
// i++
// }


// wk2mod4 exercise 1
var n = 1;

while (n <= 10) {
    console.log(n);
    n++;
}

// wk2mod4 exercise 2
var n = 2;

while (n <= 20) {
    console.log(n);
    n += 2;
}
// wk2mod4 exercise 3
var n = 100;
var i = 1;
var sum = 0;

while (i < n) {
    sum += i;
    console.log(sum);
    i++;
}
// wk2mod4 exercise 4
var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML += outputHtml;

// wk2mod4 exercise 5

var n = 15;
var outputTarget = document.querySelector("#exercise-5");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if ( n % 2 === 0) {
        outputHtml += "<li>even</li>";
    } else
    {
        outputHtml += "<li>odd</li>";
    }
    n--;
}

outputHtml = "</ul>";

outputTarget.innerHTML = outputHTML; //Getting error on this Line
// ****THIS IS WHERE I STOPPED****
