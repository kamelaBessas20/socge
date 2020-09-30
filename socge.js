//show/hide infos by clicking on the infos icon 
$(document).ready(function(){     
    $(".show-infos").click(function(){
        $(".infos").show();
    });
    $("#close").click(function(){
        $(".infos").hide();
    });
    $('#user-code').keyup(function() {
    var codeValue = $('#user-code').val();
    console.log(codeValue.length);
    if(codeValue.length < 8){
        $('.btn-validate').hide();
    }else{
        $('.btn-validate').show();
    }
    });
});







