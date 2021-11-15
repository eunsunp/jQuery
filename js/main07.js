$('.btn').click(function(){
    $('#box1').animate({
        left: "400px",
        width: "100px",
        height: "100px"
    },500).animate({
        top: "300px",
        width: "200px",
        height: "200px"
    },500).animate({
        left: "0px",
        width: "150px",
        height: "100px"
    },1000).animate({
        top: "0px",
        width: "100px",
        height: "100px"
    },500).animate({
        height: "300px"
    },1000)
});
