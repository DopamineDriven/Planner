let container = $("#container");
let table = $("<table></table>");
table.addClass("jumbotron");
//appending currentDay 
let momento = document.getElementById("currentDay");
let currentTime = (moment().format('MMMM Do YYYY'));
momento.append(currentTime);
//use colorScheme => () (if momento.currentTime() < #t-{i} {append.callClass("past")} else if currentTime = momento()
//each row represents one hour timespan, while generating rows check if currentTime is <, =, or > rowTime

let hourTime = (moment().format('HH'));
//creating an array to call back in the for loop, generating a table
//userTime vs militaryTime; the former is displayed to the user whereas the latter is used to compare local hourTime for color coding
let timeList = [
    {userTime: "9AM", militaryTime: "09"},
    {userTime: "10AM", militaryTime: "10"},
    {userTime: "11AM", militaryTime: "11"},
    {userTime: "12PM", militaryTime: "12"},
    {userTime: "1PM", militaryTime: "13"},
    {userTime: "2PM", militaryTime: "14"},
    {userTime: "3PM", militaryTime: "15"},
    {userTime: "4PM", militaryTime: "16"},
    {userTime: "5PM", militaryTime: "17"},
];

//creating a function to determine local time and dynamically generate HTML for a table
function dynamicTime() {
    for (let i=0; i<timeList.length; i++) {
        let tableRow = $("<tr></tr>").attr("id", i);
        //timeBlock --> contains timeList elements
        let timeBlock = $("<td></td>");
        timeBlock.addClass("hour");
        timeBlock.text(timeList[i].userTime);
        //description contains textarea input for planner
        let description = $("<td></td>");
        //utilizing bootstrap to make website device responsive
        description.addClass("col-md-12");
        //adding a unique id for each text area by adding "t-${i}" in front of each textarea (t-0, t-1, t-2...etc)
        let textarea = $("<textarea></textarea>").attr("id", `t-${i}`);
        textarea.addClass("textarea form-control");
        //if else conditions comparing militaryTime from array to local hourTime; present, past, future classes assigned accordingly
        if (timeList[i].militaryTime===hourTime) {
            textarea.addClass("present")
        }
        else if (timeList[i].militaryTime<hourTime) {
            textarea.addClass("past")
        }
        else if (timeList[i].militaryTime>hourTime) {
            textarea.addClass("future")
        };
        //this returns any values saved to local storage for each saved textarea input after refreshing the page
        textarea.val(localStorage.getItem(`t-${i}`));
        description.append(textarea);
        //saveButtons generated for storing user data to local storage as desired
        let saveButton = $("<td></td>");
        let button = document.createElement('button');
        button.classList.add("saveBtn");
        saveButton.append(button);
        //setting a key in localstorage with the same id as textarea and storing the val in it
        button.onclick = () => {
            localStorage.setItem(`t-${i}`, $(`#t-${i}`).val())
            console.log($(`#t-${i}`).val());
        }
        //appending all td elements to each row of the table
        tableRow.append(timeBlock, description, saveButton);
        //appending each row of the table sequentially to the table itself 
        table.append(tableRow);
    }
    //appending the table to the div container
    container.append(table);
};
//executing dynamic time function
dynamicTime();