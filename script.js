"use strict";
$(document).ready(() => {




  $(document).click((e) => {
  // $(document).on("click", "button, .available", ((e) => { 

    if ($(e.target).hasClass("available")) {
      $("form").fadeIn();
      // $("form").show();
      // $("form").animate({
      //   opacity: 0.25,
      // }, 5000);

      // add a class of "clicked" on what you clicked
      $(e.target).toggleClass("clicked");

      // identify the table you clicked on and its number, store that in the variable "num"
      let num = $(e.target)[0].innerText;

      // add an id attribute of the variable "num"
      $(e.target).attr("id", num);
      
      // find the table number targeting the "clicked" class and getting its ID
      let tableNum = () => {
        let thisOne = $(".clicked")["0"].id;

        //  insert a string into the form
        $(".tableNum")[0].innerText = `Table Number: ${thisOne}`;
      }
      tableNum();
    }


    // If the element we are clicking on has a class of close-button...
    // if ($(e.target).hasClass("close-button")) {
    //   $(".clicked").toggleClass( "clicked");
    //   $("form").animate({
    //     opacity: 0.25,
        
    //   }, 5000);
    //   $("form").hide();
    // }

    $(".close-button").on("click", (e) => {
      $(".clicked").toggleClass( "clicked");
      $("form").fadeOut(250);
    })

    $(".save-button").on("click", (e) => {
      $(".clicked").attr("name", $("#name").val());
      $(".clicked").attr("phone", $("#phone").val());
      $(".clicked").attr("party", $("#party-size").val());
      // console.log($("#name").val());
      // console.log($("#party-size").val());
      $(".clicked").toggleClass( "available reserved clicked");
      $("form").fadeOut(250);
    })
    if ($(e.target).hasClass("save-button")) {
     
    }
  });

  $(document).on("mouseenter", ".reserved", (e) => {

    let thisTable = $(e.target).contents();
    console.log(e.target);
    
    $(e.target).html(`${$(e.target).attr("table-number")}<div class="tableInfo"><p>Name: ${$(e.target).attr("name")}</p><p>Size of Party: ${$(e.target).attr("party")}</p></div>`)
    .show();
  });

  $(document).on("mouseleave", ".reserved", () => {
    $(".tableInfo").hide();
    $(".tableInfo").html("")
  });


  //console.log("It works!");
}); /////////////////THE END