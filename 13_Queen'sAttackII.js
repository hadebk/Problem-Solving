// Link to full description of the problem, https://www.hackerrank.com/challenges/queens-attack-2/problem
// [Difficulty: Medium]
/////////////////////////////////////////////////
// The Solution
/////////////////////////////////////////////////

var attacked_squares = 0;

function row_right(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(c_q+i <= n && flag){
        if(k>0){
            let row = r_q,
                col = c_q+i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1]==col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function row_left(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(c_q-i > 0 && flag){
        if(k>0){
            let row = r_q,
                col = c_q-i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1]==col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function column_top(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q+i <= n && flag){
        if(k>0){
            let row = r_q+i,
                col = c_q;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function column_bottom(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q-i > 0 && flag){
        if(k>0){
            let row = r_q-i,
                col = c_q;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function right_top(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q+i <= n && c_q+i <= n && flag){
        if(k>0){
            let row = r_q+i,
                col = c_q+i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function left_bottom(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q-i >= 1 && c_q-i >= 1 && flag){
        if(k>0){
            let row = r_q-i,
                col = c_q-i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function right_bottom(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q-i >= 1 && c_q+i <= n && flag){
        if(k>0){
            let row = r_q-i,
                col = c_q+i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function left_top(n, k, r_q, c_q, obstacles){
    let i = 1,
        flag = true;
    while(r_q+i <= n && c_q-i >= 1 && flag){
        if(k>0){
            let row = r_q+i,
                col = c_q-i;
            for(let j=0 ; j<obstacles.length ; j++){
                if(obstacles[j][0] == row && obstacles[j][1] == col){
                    flag = false;
                    break;
                }
            }
            if(flag){
                attacked_squares++;
                i++;
            }
        }else{
            attacked_squares++;
            i++;
        }
    }
}

function queensAttack(n, k, r_q, c_q, obstacles) {

    // Handel operations on row 
    if(c_q == 1){
        // Apply row_right algorithm
        row_right(n, k, r_q, c_q, obstacles);
    }else if(c_q == n){
        // Apply row_left algorithm
        row_left(n, k, r_q, c_q, obstacles);
    }else{
        // Apply both algorithm (row_right and row_left)
        row_right(n, k, r_q, c_q, obstacles);
        row_left(n, k, r_q, c_q, obstacles);
    }

    // Handel operation on column
    if(r_q == n ){
        // Apply column_bottom algorithm
        column_bottom(n, k, r_q, c_q, obstacles)
    }else if(r_q == 1 ){
        // Apply column_top algorithm
        column_top(n, k, r_q, c_q, obstacles)
    }else{
        // Apply both algorithm (column_bottom and column_top)
        column_bottom(n, k, r_q, c_q, obstacles)
        column_top(n, k, r_q, c_q, obstacles)
    }

    // Handel operation on right diagonal
    if(r_q > 1 && c_q > 1){
        // Apply left_bottom algorithm
        left_bottom(n, k, r_q, c_q, obstacles)
    }
    if(r_q < n && c_q < n){
        // Apply right_top algorithm
        right_top(n, k, r_q, c_q, obstacles)
    }

    // Handel operation on left diagonal
    if(r_q < n && c_q > 1){
        // Apply left_bottom algorithm
        left_top(n, k, r_q, c_q, obstacles)
    }
    if(r_q > 1 && c_q < n){
        // Apply right_top algorithm
        right_bottom(n, k, r_q, c_q, obstacles)
    }

    return attacked_squares;
}

