const wrapper = document.querySelector(".wrapper");
let square = [];
let row = [];

let walls = [12, 13, 14, 15, 22, 29, 28, 34]
let goal = {
    'x' : 3,
    'y' : 4, 
}

let start = {
    'x' : 0,
    'y' : 9, 
}
createField(8, 10);



array_rating= [];




function createField(rows, columns ){


    for (let j = 0; j < rows; j++) {
        row[j] = document.createElement('tr');
        
        for (let x = 0; x < columns; x++) {
    
           
            square[x] = document.createElement('td');
            square[x].classList.add('square');
            square[x].id = j + ''+ (x);
            row[j].append(square[x]);
            for (let y = 0; y < walls.length; y++) {
                // if (walls[y] == x){
                //     square[x].classList.add('walls');
                // }
                
            }
            
        }
        wrapper.append(row[j]);
    }
    console.log(wrapper);
}




    function RateQuad(){


        x = goal['x']
        y = goal['y']
        
        target = row[x].children[y];
        target.classList.add('target');

        
        begin = row[start['x']].children[start['y']];
        begin.classList.add('start');
        // console.log(target);
        // console.log(array_rating)
        
        console.log(row[x]);
        for (let i = 0; i < row[x].children.length; i++) {
            // console.log(row[x].children[i]);
            row[x].children[i].innerHTML = Math.abs(y - (i));
            array_rating.push(Math.abs(y - (i)));            
        }

        for (let j = 0; j < row.length; j++) {
        //    console.log(row[j]);
           stepToAdd = Math.abs(x - j);
            for (let k = 0; k < row[j].children.length; k++) {

            // console.log(row[j].children[k]);
            // console.log(array_rating[k] + stepToAdd)
            row[j].children[k].innerHTML = array_rating[k] + stepToAdd;
            
            }


        }
    }

RateQuad();
findPath(start['x'], start['y'])

    function findPath(x, y){
        
        
        array_possible = [];
        array_score = [];
        array_choose = [];

        case_start = row[x].children[y];
        console.log(case_start);
        if (x > 0){
                    up = row[x - 1].children[y];
                    // array_ngb.push(up);
                    console.log(up);
                    array_possible.push(up);
                    array_score.push(parseInt(up.innerHTML));
                    console.log(up);
                }
                
                if (x < row.length -1){
                    down = row[x+1].children[y];
                    array_possible.push(down)
                    array_score.push(parseInt(down.innerHTML))
                    
                    console.log(down);
                }
            
               if (y < row[x].children.length -1){
                   right = row[x].children[y+1];
                   array_possible.push(right);
                   array_score.push(parseInt(right.innerHTML));
                  
                   console.log(right);
                   
                }
            
            if (y > 0){
                    left = row[x].children[y-1];
                    array_possible.push(left)
                    array_score.push(parseInt(left.innerHTML))
                    
                    console.log(left);
                    
                 } 

            console.log(array_score);
            min_score = Math.min(...array_score); 
            console.log(min_score);
            desired_case = array_possible[array_score.indexOf(min_score)];
            console.log(desired_case);
            desired_case.classList.add('visited');

            // var indexes = getAllIndexes(array_score, min_score);
            // console.log(indexes);
            // console.log(array_possible);
            // for (let i = 0; i < indexes.length; i++) {
            //     console.log(parseInt(array_possible[indexes[i]].id));
            //     array_possible[indexes[i]]
               
            // }

            
            if(min_score === 0) {
                console.log('toto');
            }
            else {

                findPath(parseInt(desired_case.id[0]), parseInt(desired_case.id[1]))
            }


            
            
            
            
        }
        
        function getAllIndexes(arr, val) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
            }