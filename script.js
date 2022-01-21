const wrapper = document.querySelector(".wrapper");
let square = [];
let row = [];

let walls = ['07', '17', '27', '23','33' ,'43' , '53', '63', '73']
let case_wall = [];
let goal = {
    'x' : 0,
    'y' : 7, 
}

let start = {
    'x' : 6,
    'y' : 0 , 
}
createField(8, 10);

let counter= 0;


array_rating= [];




function createField(rows, columns ){


    for (let j = 0; j < rows; j++) {
        row[j] = document.createElement('tr');
        
        for (let x = 0; x < columns; x++) {
    
           
            square[x] = document.createElement('td');
            square[x].classList.add('square');
            square[x].id = j + ''+ (x);
            row[j].append(square[x]);
          
            
        }
        wrapper.append(row[j]);
    }
    console.log(wrapper);
    case_start = row[start['x']].children[start['y']];
    target = row[goal['x']].children[goal['y']];
    case_start.classList.add('start');
    case_start.innerHTML = 0;  
    target.classList.add('target');
}

// CreateWalls();
function CreateWalls(){
    for (let y = 0; y < walls.length; y++) {
        case_wall[y] = document.getElementById(String(walls[y]));
        console.log(case_wall[y]);
        case_wall[y].classList.add('walls');
         
     }
}



//    
    
function FindFastestPath(x = false, y=false){

           
            if(counter === 0 ){   
            x = start['x'];
            y = start['y'];
            } 
         
            
            counter++;
            console.log('recursion : ', counter)
           
            console.log(x);

            case_start = row[x].children[y];
            target = row[goal['x']].children[goal['y']];
            console.log(case_start.id, target.id);
            if (case_start.id === target.id){
                return false;
            }
            
            
            console.log(case_start);
           
            console.log(target.id[0]);

            diffX = (case_start.id[0] - target.id[0]);
            diffY = (case_start.id[1] - target.id[1]);

            console.log([diffX, diffY]);


          
            if(diffX >= 0){
                vertical_priority = [up, down];
            }
            else{
                vertical_priority = [down, up];
            }

            if(diffY >= 0){
                horizontal_priority = [left, right];
            }
            else{
                horizontal_priority = [right, left];
            }
        
        if (Math.abs(diffX) > Math.abs(diffY)){
        priority = [vertical_priority[0], horizontal_priority[0], horizontal_priority[1], vertical_priority[1]];
        }
        else{

        priority = [horizontal_priority[0], vertical_priority[0], vertical_priority[1], horizontal_priority[1]];
        }
        
        console.log(priority);
        array_possible = [];
        array_score = [];
        array_choose = [];
            
        for (let e = 0; e < priority.length; e++) {
            next_case = priority[e](x,y);
            if (next_case != false){
            break;
        }
        }
        console.log(parseInt(case_start.innerHTML));
        
        next_case.classList.add('visited');
        next_case.innerHTML = (parseInt(case_start.innerHTML)) + 1;
        
        console.log(next_case.id[0],next_case.id[1])

        x = parseInt(next_case.id[0])
        y = parseInt(next_case.id[1])

        
        
        CheckEmptyField(x);
        CheckEmptyField(y);

        console.log(x,y)

        
        FindFastestPath(x, y)
        
        }











        function up(x, y){
            if(x>0){
                next_case = row[x - 1].children[y];
                console.log(next_case);
                return next_case
            }
            else{
                return false;
            }
        }

        function down(x, y){
            if (x < row.length -1){
            next_case = row[x+1].children[y];
            console.log(next_case);
            return next_case
        }
        else{
            return false;
        }


        }

        function left(x, y){
            if (y > 0){
            next_case = row[x].children[y-1];
            console.log(next_case);
            return next_case
        }
        else{
            return false;
        }
        }

        function right(x, y){
            if (y < row[x].children.length -1){
            next_case = row[x].children[y+1];
            console.log(next_case);
            return next_case
        }
        else{
            return false;
        }




        }

        function CheckEmptyField(value){
            if(!value){
                value = 0;
            }
        }