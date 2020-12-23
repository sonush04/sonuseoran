function construct_graph(){
let graph = new Array(20*50);
    for(var i = 0;i<1000;i++){
        graph[i] = [];
      //  W[i] = 0;
    }
    for(var i =0;i<1000;i++){
        for(var j= 0;j<1000;j++)
            graph[i][j] = Infinity;
    }
    for(var i =0;i<1000;i++){
        var t =1;
        for(var j = 0;j<wall.length;j++){
            if(wall[j] == i)
                t = 0;
        }
        if(i+50 < 1000)
            graph[i][i+50] = 1;
        if(i-50 >= 0)
            graph[i][i-50] = 1;
        if((i%50)+1 < 50)
            graph[i][i+1] = 1;
        if((i%50)-1 >= 0)
            graph[i][i-1] = 1;

    }
    return graph;
}
