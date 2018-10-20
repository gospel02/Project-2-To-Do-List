let nextListId = 0;

$('.myinput').on("keydown", function(event){
    if(event.which === 13){
        addlist();
    }
});



$(".container").sortable({
    handle: ".handle"
});


function addlist(){
    let myname = $(".myinput").val();

    if($.trim( $('.myinput').val()) == '')
    alert('input is black');
    else{
    

    $(".container").append("<div class='row'>"+
    "<span contenteditable='true'>"+ myname +"</span>"+
    "<i class='handle fas fa-arrows-alt-v'></i>"+
    "<i class='trashcan far fa-trash-alt'></i>" +
    "<i id='list-" + nextListId + "-plus' class='plus fas fa-plus' onclick='addEmptyTask(this)'></i>"+
    "</div");
    }

    

    
    
    $(".myinput").val("");


    

       
    $(".trashcan").click(function(){

        $(this).parent().animate({
            opacity: 0,
        }, 800, function(){
            $(this).remove();
        });
    });

  nextListId++;

}

$('.newitem').on("keydown", function(event){
    if(event.which === 13){
        addEmptyTask();
    }
});




function addEmptyTask(element) {
    $(element).parent().after("<div class='item'>"+
        "<i id='square' class='check far fa-square'></i>"+
        "<input class='newitem' contenteditable='true' placeholder='Add Item'></input>"+
        "<i class='handle fas fa-arrows-alt-v'></i>"+
        "<i class='trashcan far fa-trash-alt'></i>" +
        "</div>");

        $(".check").click(function(){
            $(this).parent().find('#square').toggleClass("fa-square  fa-check-square");
            
        });
        
        $(".trashcan").click(function(){

            $(this).parent().animate({
                opacity: 0,
            }, 400, function(){
                $(this).remove();
            });
        });

    
}




function clearlists(){
    $(".row").remove();
}

function clearitems(){
    $(".item").remove();
}







