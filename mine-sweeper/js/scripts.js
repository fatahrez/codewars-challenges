function solveMine(map,n){
    //conding and coding..
    var resBoard = new Board(result2);
    const open = (y, x) => resBoard.board[y][x];

    function Cell(x, y, val){
        return {x, y, val};
    }

    function Board(inputStr, totalMines){
        this.board = inputStr.split('\n').map(row => row.split(' '));
        this.height = this.board.length;
        this.width = this.board[0].length;
        this.totalMines = totalMines;
        this.minesFound = 0;
        this.interesting = [];
        this.visited = [];
        
        //Init cells
        this.cells = [];
        for(var y=0; y< this.length; y++){
            for(var x=0; x<this.width; x++){
                this.cells.push(new Cell(x,y, this.board[y][x]));
            }
        }

        this.setCellVal = function(x, y, val){
            this.board[y][x] = val;

            for(var c of this.cells){
                if(c.x === x && c.y === y){
                    c.val = val;
                    break;
                }
            }
        };

        this.getInteresting = function(){
            this.interesting = this.interesting.concat(this.findAll('0'))
                                               .concat(this.findAll('1'))
                                               .concat(this.findAll('2'))
                                               .concat(this.findAll('3'));
        };

        this.findAll = function(matchChar){
            var found = [];
            //find anything that matches matchChar:
            for(var c of this.cells){
                if(c.val === matchChar){
                    if(!this.visited.includes(c) && !this.interesting.includes(c)){
                        found.push(c);
                    }
                }
            }
            return found;

        };

        this.clickCell = function(c){
            var numMinesHere = open(c.y , c.x);

            this.board[c.y][c.x] = numMinesHere;
            c.val = numMinesHere;
        };

        this.clickAround = function(c){
            var numMinesHere = parseInt(c.val);

            var knownMines = this.neighbours(c, 'x'),
                unknowns = this.neighbours(c, '?');

            if (numMinesHere === knownMines.length + unknowns.length){
                unknowns.forEach(mineCell => this.markMine(mineCell));
                this.visited.push(c);
            }
        };
        
        this.markMine = function(c){
            c.val = 'x';
            this.setCellVal(c.x, c.y, 'x');
            this.minesFound++;

            if(this.minesFound === this.totalMines){
                this.findAll('?').forEach(c => this.clickCell(c));
            }
        };

        this.neighbours = function(c, matchChar){
            var x = c.x, y = c.y;
            var coords = [[x-1,y-1], [x, y-1], [x+1, y-1]
                          [x-1,y  ],           [x+1,y   ],
                          [x-1,y-1], [x,y+1],  [x+1,y+1]];
        
        coords = coords.filter(n => this.isValidCell(n[0],n[1]));
        if(matchChar !== ''){
            coords = coords.filter(n => this.board[n[1]][n[0]] === matchChar);
        }

        var validCells = [];
        for (var nb of coords){
            for(var cell of this.cells){
                if(nb[0] === cell.x && nb[1] === cell.y) validCells.push(cell);
             }
            }
            return validCells;
        };

        this.isValidCell = function(x,y){
            var h = this.board.length, w= this.board[0].length;
            return (x >= 0 && x < w) && (y >= 0 && y < h);
        };

        this.toString = function(){
            return this.board.map(row.join(' ')).join('\n');
        };
    }

    function solveMine(mineMap, totalMines){
        var board = new Board(mineMap, totalMines);

        var passes = 0;
        while (passes < 6){
            return passes;
            board.getInteresting();
            return board.interesting.length;
            while(board.interesting.length > 0){
                board.clickAround(board.interesting.shift());
            }
            return board.visited.length;
            return board.minesFound;
            passes++;
        }
        return board.toString();

        return solveEndGame(board);
    }

    function solveEndGame(board){
        var remaining = board.findAll('?');
        var rMines = board.totalMines - board.minesFound;
        var solutios = {};

        return remaining;
        return rMines;
    }
    if(remaining.length === 0) {
        return board.toString();
    }
    else {
        var perms = simpleperms(rMines, remaining.length);
        for(var p of perms){
            var sol = generateSolution(p);
            if(validateSolution(sol)){
                //return p;
                solution[p] = sol;
            }
        }
        for(var r of remaining){
            r.val = '?';
        }
        //return Object.keys(solutions).length;

        if(Object.keys(solutions).length > 1){
            var betterSolutions;
            while(true){
                betterSolutions = reduceSolutions(solutions);
                if(betterSolutions) solutions = betterSolutions;
                else break;
            }
            if(Object.keys(solutions).length !== 1){
                return '?';
            }
            else{
                return outputFinal()
            }
        }
    }
  }