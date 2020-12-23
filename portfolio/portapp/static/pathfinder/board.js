function board() {

    var table = document.getElementById("myTable");
    for(var i = 0;i<20;i++){
	   var row = table.insertRow(-1);
	   for(var j = 0;j<50;j++){
		      var cell = row.insertCell(-1);
                cell.id = i+1+"_"+eval("j+1");

       }
	   }
            for(var i = 0;i<1000;i++){
        //graph[i] = [];
        W[i] = 0;
    }
  }

  function clearBoard(){
     if(window.confirm("do you really want to clear the board")){
      for(var i = 0;i<50;i++){
          document.getElementById("myTable").deleteRow(0);
      }
      for(var i = 0;i<2500;i++){
          //graph[i] = [];
          W[i] = 0;
      }
     }
      document.getElementById("CB").onclick = board();
  }
  // function for wall
  function addWall(){
      var wall_col,wall_row,temp1;

      var table = document.getElementById("myTable");
      table.addEventListener("mousemove",Walling);
      for(var j = 0;j<1000;j++){
        var x1 = j%50 + 1;
        var x2 = Math.floor(j/50) + 1;
        if(W[j] == -1){
          document.getElementById(x2+"_"+x1).style.background = "black";
        }
        else{
          document.getElementById(x2+"_"+x1).style.background = "-moz-linear-gradient(top, #ffffff, #D1E3E9)";
          document.getElementById(x2+"_"+x1).style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffffff), to(#D1E3E9))";
        }
      }
         document.getElementById("src").onclick = function(){
                  table.removeEventListener("mousemove", Walling);
                  origin();
              }
         document.getElementById("ter").onclick = function(){
                  table.removeEventListener("mousemove", Walling);
                  end();
              }
         document.getElementById("kk").onclick = function(){
                  table.removeEventListener("mousemove", Walling);
                  if(algo == 1)
                      shortestPath();
                  if(algo == 2)
                      dfs();
              }
      function Walling(e){
          if(!e)
                  e = window.event;
          var target = e.srcElement || e.element;
          var arr1 = target.id.split('_');
          wall_row = arr1[0];
          wall_col = arr1[1];
          var i = (wall_row - 1)*50 + eval("wall_col - 1");

          for(var j = 0;j<1000;j++){
            var x1 = j%50 + 1;
            var x2 = Math.floor(j/50) + 1;
            if(W[j] == -1){
              document.getElementById(x2+"_"+x1).style.background = "black";
            }
            else{
              document.getElementById(x2+"_"+x1).style.background = "-moz-linear-gradient(top, #ffffff, #D1E3E9)";
              document.getElementById(x2+"_"+x1).style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffffff), to(#D1E3E9))";
            }
          }
            target.style.background = "black";
          if(e.altKey){
            if(origin_row == wall_row && origin_col == wall_col)
              alert("wall cannot be on start point");
            else if(ter_row == wall_row && ter_col == wall_col)
              alert("wall cannot be on end point");
            else
              W[i] = -1;

          }

      }
  }
  function clearwall(){
      for(var i =0;i<1000;i++){
          if(W[i] == -1){
              var x1 = i%50 + 1;
              var x2 = Math.floor(i/50) + 1;
              var temp = document.getElementById(x2+"_"+x1);
              temp.style.background = "-moz-linear-gradient(top, #ffffff, #D1E3E9)";
              temp.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffffff), to(#D1E3E9))";
              W[i] = 0;
          }
      }
  }
  function clearPath(){
      for(var i = 0;i<p.length;i++){
          var j = p[i];
          t1 = j%50 + 1;
           t2 = Math.floor(j/50) + 1;
           document.getElementById(t2+"_"+t1).style.background = "-moz-linear-gradient(top, #ffffff, #D1E3E9)";
          document.getElementById(t2+"_"+t1).style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffffff), to(#D1E3E9))";
      }
  }
