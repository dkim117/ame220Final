var AI = {
  show: function(style){
   if(style === "1"){
   var mu = "<div class='fadeBox'> <div class='spinner' id='style1'> </div> <a href='javascript:AI.hide()' class='close'>Close</a> </div>";
   document.body.innerHTML += mu;
  }
   else if(style === "2"){
   var mu = "<div class='fadeBox'> <div class='spinner' id='style2'> </div> <a href='javascript:AI.hide()' class='close'>Close</a> </div>";
   document.body.innerHTML += mu;
   }
   else if(style === "3"){
   var mu = "<div class='fadeBox'> <div class='spinner' id='style3'> </div> <a href='javascript:AI.hide()' class='close'>Close</a> </div>";
   document.body.innerHTML += mu;
   }
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}







