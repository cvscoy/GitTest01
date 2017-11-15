$(document).ready(function() {
    var move =$("#grid");
    var up, right, down, left;
    var dice; 
    $("#Roll").click(function(evt) {
        dice = 1 + Math.floor(Math.random() * 6);
                         
        if (dice == 1) {
            $("#numRoll").attr("src","image/one.jpg");
        }
        else if (dice == 2) {
            $("#numRoll").attr("src","image/two.jpg");
        }
        else if (dice == 3) {
            $("#numRoll").attr("src","image/three.jpg");
        }    
        else if (dice == 4) {
            $("#numRoll").attr("src","image/four.jpg");
        }    
        else if (dice == 5) {
            $("#numRoll").attr("src","image/five.jpg");
        }   
        else if (dice == 6) {
            $("#numRoll").attr("src","image/six.jpg");
        }    
        console.log(dice);
    }); 
})