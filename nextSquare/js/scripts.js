function findNextSquare(sq){
    var root1;
    var nextRoot;

    if(Math.sqrt(sq)%1=== 0){
        root1= Math.sqrt(sq);
        nextRoot = root1 + 1;
    }
    else{
        return -1;
    }
    return nextRoot * nextRoot;
}