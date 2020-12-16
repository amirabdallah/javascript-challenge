// from data.js
var tableData = data;

//Get Reference to the table body
var tbody = d3.select('tbody');
let table = d3.select('table');

console.log(tableData);

//Step 1: Loop through 'tableData' and console.log each record.
    tableData.forEach(item=>{
        console.log(item);
        let row = tbody.append('tr');
        let date = row.append('td')
        let city = row.append('td')
        let state= row.append('td')
        let country= row.append('td')
        let shape= row.append('td')
        let duration= row.append('td')
        let comments= row.append('td')
        date.text(item.datetime);
        city.text(item.city);
        state.text(item.state);
        country.text(item.country);
        shape.text(item.shape);
        duration.text(item.durationMinutes);
        comments.text(item.comments);
})

//code events to have the user
//search through the `date/time` column 
//to find rows that match user input.

//select form and button to use
var form = d3.select("#form")
var button = d3.select("#filter-btn")

//create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);

//Complete the event handler function for the form
function runEnter(){
    //select input element and get the raw html node
    let inputElement = d3.select('#datetime');
    //Get the value property of the input element
    let inputValue = inputElement.property("value")
    //console.log(inputValue)
    //Use the form input to filter the data by date
    tbody.html("")
    let newData = tableData.filter(item => item.datetime === inputValue)
    tbody.selectAll("tr").data(newData).enter().append("tr").html(item =>{
        return`<td> ${item.datetime} </td>
        <td> ${item.city} </td>
        <td> ${item.state} </td>
        <td> ${item.country} </td>
        <td> ${item.shape} </td>
        <td> ${item.durationMinutes} </td>
        <td> ${item.comments} </td>
        `
    })



    // console.log(newData)
}


