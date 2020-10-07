$(document).ready(function(){

    let today = moment().format("MMMM Do YYYY");
    console.log(today)
    $("#currentDay").append(today);

    let now = parseInt(moment().format("HH"));
    console.log(now)
})