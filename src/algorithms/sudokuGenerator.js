let b2d = [[],[],[],[],[],[],[],[],[]];
let mat = [[],[],[],[],[],[],[],[],[]];
let N = 9; // number of columns/rows.
let SRN = 3 // square root of N
let K = 20; // No. Of missing digits

    // Fill the diagonal SRN number of SRN x SRN matrices
function fillDiagonal() {

        for (let i = 0; i<N; i=i+SRN)

            // for diagonal box, start coordinates->i===j
            fillBox(i, i);

        console.log(mat)
    }

    // Returns false if given 3 x 3 block contains num.
    function unUsedInBox(rowStart, colStart, num) {
        for (let i = 0; i<SRN; i++)
            for (let j = 0; j<SRN; j++)
                if (mat[rowStart+i][colStart+j]===num)
                    return false;

        return true;
    }

    // Fill a 3 x 3 matrix.
    function fillBox(row, col) {
        let num;
        for (let i=0; i<SRN; i++) {
            for (let j=0; j<SRN; j++) {
                do
                {
                    num = randomGenerator(N);
                }
                while (!unUsedInBox(row, col, num));

                mat[row+i][col+j] = num;
            }
        }
    }

    // Random generator
    function randomGenerator(num) {
        return Math.floor(Math.random() * num + 1);
    }

    // Check if safe to put in cell
    function CheckIfSafe(i, j, num) {
        return (unUsedInRow(i, num) &&
                unUsedInCol(j, num) &&
                unUsedInBox(i-i%SRN, j-j%SRN, num));
    }

    // check in the row for existence
    function unUsedInRow(i, num) {
        for (let j = 0; j<N; j++)
           if (mat[i][j] === num)
                return false;
        return true;
    }

    // check in the row for existence
    function unUsedInCol(j, num) {
        for (let i = 0; i<N; i++)
            if (mat[i][j] === num)
                return false;
        return true;
    }

    // A recursive function to fill remaining
    // matrix
    function fillRemaining(i, j) {
        //  System.out.prletln(i+" "+j);
        if (j>=N && i<N-1)
        {
            i = i + 1;
            j = 0;
        }
        if (i>=N && j>=N)
            return true;

        if (i < SRN)
        {
            if (j < SRN)
                j = SRN;
        }
        else if (i < N-SRN)
        {
            if (j===Math.floor((i/SRN)*SRN))
                j =  j + SRN;
        }
        else
        {
            if (j === N-SRN)
            {
                i = i + 1;
                j = 0;
                if (i>=N)
                    return true;
            }
        }

        for (let num = 1; num<=N; num++)
        {
            if (CheckIfSafe(i, j, num))
            {
                mat[i][j] = num;
                if (fillRemaining(i, j+1))
                    return true;

                mat[i][j] = 0;
            }
        }
        return false;
    }

    // Remove the K no. of digits to
    // complete game
function removeKDigits() {
        let count = K;
        while (count !== 0)
        {
            let cellId = randomGenerator(N*N);

            // System.out.prletln(cellId);
            // extract coordinates i  and j
            let i = (cellId/N);
            let j = cellId%9;
            if (j !== 0)
                j = j - 1;

            // System.out.prletln(i+" "+j);
            console.log(mat)
            if (mat[i][j] !== 0)
            {
                count--;
                mat[i][j] = 0;
            }
        }
    }

    // Sudoku Generator
function Generate() {
        let board = [];

        fillDiagonal();
        fillRemaining(0, SRN);
        //removeKDigits();
        console.log(mat)
        return board;
}

export default Generate;