$(document).ready(function(){

    let today = moment().format("MMMM Do YYYY");
    console.log(today)
    $("#currentDay").append(today);

    let now = parseInt(moment().format("HH"));
    console.log(now)

    let $9amText = $("#9amText");
    let $10amText = $("#10amText");
    let $11amText = $("#11amText");
    let $12pmText = $("#12pmText");
    let $1pmText = $("#1pmText");
    let $2pmText = $("#2pmText");
    let $3pmText = $("#3pmText");
    let $4pmText = $("#4pmText");
    let $5pmText = $("#5pmText");

    $("textarea").each(function (){
        let name = parseInt($(this).attr("name"));
        if (name < now){
            $(this).addClass("past");
        }

        if (name === now){
            $(this).addClass("present");
        }

        if (name > now){
            $(this).addClass("future");
        }
    })

    $("button").on("click", function(){

        localStorage.setItem("9AM", ($9amText.val()))
        localStorage.setItem("10AM", ($10amText.val())) 
        localStorage.setItem("11AM", ($11amText.val()))
        localStorage.setItem("12PM", ($12pmText.val()))
        localStorage.setItem("13PM", ($1pmText.val()))
        localStorage.setItem("14PM", ($2pmText.val()))
        localStorage.setItem("15PM", ($3pmText.val()))
        localStorage.setItem("16PM", ($4pmText.val()))
        localStorage.setItem("17PM", ($5pmText.val()))

    })
    
    $("#9amText").append(localStorage.getItem("9AM"));
    $("#10amText").append(localStorage.getItem("10AM"));
    $("#11amText").append(localStorage.getItem("11AM"));
    $("#12pmText").append(localStorage.getItem("12PM"));
    $("#1PmText").append(localStorage.getItem("13PM"));
    $("#2pmText").append(localStorage.getItem("14PM"));
    $("#3pmText").append(localStorage.getItem("15PM"));
    $("#4pmText").append(localStorage.getItem("16PM"));
    $("#5pmText").append(localStorage.getItem("17PM"));

}) 