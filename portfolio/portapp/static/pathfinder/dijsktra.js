
function shortestPath() {

    var startVertex = (origin_row-1)*50 + eval(" origin_col-1");
    var endVertex = (ter_row-1)*50 + eval("ter_col-1");
    var edges = construct_graph();
    var numVertices = 1000;
    var done = new Array(numVertices);
    done[startVertex] = true;
    var t3 = startVertex%50 + 1;
    var t4 = Math.floor(startVertex/50) + 1;
    document.getElementById(t4+"_"+t3).style.background = "brown";
  var pathLengths = new Array(numVertices);
  var predecessors = new Array(numVertices);

  for (var i = 0; i < numVertices; i++) {//window.alert(edges[startVertex][i]);
    pathLengths[i] = edges[startVertex][i];
    if (edges[startVertex][i] != Infinity) {
      predecessors[i] = startVertex;
    }
  }

  pathLengths[startVertex] = 0;
   var slider = document.getElementById("myRange").value;
   slider = 101-slider;
var ti = setInterval(shortAnimate,1*slider);
    var c;
function shortAnimate() {

      if(c)
      document.getElementById(c).style.background = "brown";
    var closest = -1;
    var t1,t2;
    var closestDistance = Infinity;
    for (var j = 0; j < numVertices; j++) {

      if (!done[j] && pathLengths[j] < closestDistance && W[j] != -1) {
        closestDistance = pathLengths[j];
        closest = j;
      }
    }
    done[closest] = true;
      var t5 = 0;

    for (var j = 0; j < numVertices; j++) {
      if (!done[j] ) {
        var possiblyCloserDistance = pathLengths[closest] + edges[closest][j];
        if (possiblyCloserDistance < pathLengths[j]) {
          pathLengths[j] = possiblyCloserDistance;
          predecessors[j] = closest;
        if(W[j] == 0){
       // window.alert("hi");
         t1 = j%50 + 1;
         t2 = Math.floor(j/50) + 1;
         document.getElementById(t2+"_"+t1).style.background = "red"; }

            if(j == endVertex)
        {
            t5 = 1;
            break;
        }
        }
      }
    }
    if(W[closest] == 0){
    t3 = closest%50 + 1;
    t4 = Math.floor(closest/50) + 1;
      c = t4+"_"+t3;
       document.getElementById(c).style.background = "blue";
    }
      if(t5 == 1){
          document.getElementById(c).style.background = "brown";
           document.getElementById(t2+"_"+t1).style.background = "blue";
      var k = endVertex;
   // window.alert(predecessors[predecessors[endVertex]]);
    while(predecessors[k] != startVertex){

        var t = predecessors[k];
        var x1 = t%50 + 1;
        var x2 = Math.floor(t/50) + 1;
        p.push(t);
          document.getElementById(x2+"_"+x1).style.background = "yellow";
        k = t;
       // window.alert(predecessors[endVertex]);
    }
          clearInterval(ti);
      }
  }

 slider = document.getElementById("myRange").value;
}
