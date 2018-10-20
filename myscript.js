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
    "<i id='checklist' class='check far fa-square'></i>"+
    "<span contenteditable='true'>"+ myname +"</span>"+
    "<i class='handle fas fa-arrows-alt-v'></i>"+
    "<i class='trashcan far fa-trash-alt'></i>" +
    "<i id='list-" + nextListId + "-plus' class='plus fas fa-plus' onclick='addEmptyTask(this)'></i>"+
    "</div");
    }

    $(".check").click(function(){
        $(this).parent().find('#checklist').toggleClass("fa-square  fa-check-square");
        
    });

    

    
    
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


function addEmptyTask(element) {
    $(element).parent().append("<div class='item'>"+
        "<i id='checkitem' class='check far fa-square'></i>"+
        "<input class='newitem' contenteditable='true' placeholder='Add Item'></input>"+
        "<i class='handle fas fa-arrows-alt-v'></i>"+
        "<i class='trashcan far fa-trash-alt'></i>" +
        "</div>");

        $(".check").click(function(){
            $(this).parent().find('#checkitem').toggleClass("fa-square  fa-check-square");
            
        });

        $(".row").sortable({
            handle: ".handle"
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







