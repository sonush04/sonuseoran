function dfs(){
    var vis = new Array(1000);
    var graph = construct_graph();
    var parent = new Array(1000);
    var startVertex = (origin_row-1)*50 + eval(" origin_col-1");
    var endVertex = (ter_row-1)*50 + eval("ter_col-1");
    for(var i = 0;i<2500;i++)
        vis[i] = false;

    var s = new Stack();
    s.push(startVertex);
     var t;
    var timer = setInterval(dfsAnimation,10);

   function dfsAnimation(){
       if(t){
           document.getElementById(t).style.background = "brown";
       }
        var currV = s.pop();
        vis[currV] = true;
        var t1 = currV%50 + 1;
        var t2 = Math.floor(currV/50) + 1;
        t = t2+"_"+t1;
        document.getElementById(t2+"_"+t1).style.background = "blue";
        for(var i = 0;i<2500;i++){
            if(!vis[i] && graph[i][currV] == 1 && W[i] != -1){
                s.push(i);
                parent[i] = currV;
                var t1 = i%50 + 1;
                var t2 = Math.floor(i/50) + 1;
                document.getElementById(t2+"_"+t1).style.background = "red";
                if(i == endVertex){
                     document.getElementById(t2+"_"+t1).style.background = "blue";
                          var k = endVertex;
   // window.alert(predecessors[predecessors[endVertex]]);
                        while(parent[k] != startVertex){

                            var q = parent[k];
                            var x1 = q%50 + 1;
                            var x2 = Math.floor(q/50) + 1;
                            p.push(q);
                            document.getElementById(x2+"_"+x1).style.background = "yellow";
                            if(q == startVertex)
                                break;
        k = q;
       // window.alert(predecessors[endVertex]);
    }
                     clearInterval(timer);
            }
            }

        }

      // window.alert(s.length());
    }

}
