class sudokuSolver {
    print(a){
        // print method
    }
    ifSafe(a, h, w, num){
        for (let i=0;i<9;i++){
            if (a[h][i]==num) return false;
        }
        for (let i=0;i<9;i++){
            if (a[i][w]==num) return false;
        }
        let squareRowStart=h-h%3;
        let squareColStart=w-w%3;
        for (let i=squareRowStart;i<squareRowStart+3;i++){
            for (let j=squareColStart;j<squareColStart+3;j++){
                if (a[i][j]==num) return false;
            }
        }
        return true;
    }
    
    solve(a){
        let row=-1;
        let col=-1;
        let empty=true;
        for (let i=0;i<9;i++){
            for (let j=0;j<9;j++){
                if (a[i][j]==0){
                    row=i;
                    col=j;
                    empty=false;
                    break;
                }
            }
            if (!empty) break;
        }

        if (empty) return true;

        for (let i=1;i<=9;i++){
            if (ifSafe(a, row, col, i)) {
                a[row][col]=i;
                if (solve(a)) return true;
                else a[row][col]=0;
            }
        }
        return false;
    }
}

export default sudokuSolver;