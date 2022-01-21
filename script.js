const wrapper = document.querySelector(".wrapper");
let square = [];
let row = [];

let walls = [ '31', '33','32','34', '35', '36', '37' ]
let case_wall = [];
let goal = {
    'x' : 0,
    'y' : 5 , 
}

let start = {
    'x' : 5,
    'y' : 7 , 
}
createField(8, 10);

let counter= 0;


array_rating= [];

array_possible = [];

all_case = document.querySelectorAll('.square');






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
    case_start.classList.add('visited');
    case_start.innerHTML = 0;  
    target.classList.add('target');
}

CreateWalls();
function CreateWalls(){
    for (let y = 0; y < walls.length; y++) {
        case_wall[y] = document.getElementById(String(walls[y]));
        console.log(case_wall[y]);
        case_wall[y].classList.add('walls');
         
     }
}



//    
    
function FindFastestPath(x = false, y=false, precedent_case){

           
            if(counter === 0 ){   
            x = start['x'];
            y = start['y'];
            
            diffX = (case_start.id[0] - target.id[0]);
            diffY = (case_start.id[1] - target.id[1]);
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
        
        if (Math.abs(diffX) >= Math.abs(diffY)){
        priority = [vertical_priority[0], horizontal_priority[0], horizontal_priority[1], vertical_priority[1]];
        }
        else{

        priority = [horizontal_priority[0], vertical_priority[0], vertical_priority[1], horizontal_priority[1]];
        }
        
        console.log(priority);
   
            
        for (let e = 0; e < priority.length; e++) {
            next_case = priority[e](x,y);
            if (next_case != false){
                if(!next_case.classList.contains('walls') && !next_case.classList.contains('visited')){
                    console.log('toto'); 
                    break;
                } 
                else{
                    continue
                } 
            }
        else{
          console.log(array_possible);
          next_case = array_possible[array_possible.length-3]
            }
        }
        console.log(next_case);

        if (next_case.classList.contains('visited')){
            console.log('tata'); 
        }
        
        next_case.classList.add('visited');
    
        array_possible.push(next_case);
        
        console.log(next_case.id[0],next_case.id[1])

        x = parseInt(next_case.id[0])
        y = parseInt(next_case.id[1])

        
        
        CheckEmptyField(x);
        CheckEmptyField(y);

        console.log(x,y)

        
        FindFastestPath(x, y, case_start)
        
        }




        function up(x, y){
            if(x>0){
                next_case = row[x - 1].children[y];
               
                return next_case
            }
            else{
                return false;
            }
        }

        function down(x, y){
            if (x < row.length -1){
            next_case = row[x+1].children[y];
           
            return next_case
        }
        else{
            return false;
        }
        }

        function left(x, y){
            if (y > 0){
            next_case = row[x].children[y-1];
          
            return next_case
        }
        else{
            return false;
        }
        }

        function right(x, y){
            if (y < row[x].children.length -1){
            next_case = row[x].children[y+1];
           
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

        function searchPrecedentCase(element){
          
        }

// RateSquare()

        function RateSquare(x, y){
            if(counter === 0 ){   
                x = start['x'];
                y = start['y'];
                
                diffX = (case_start.id[0] - target.id[0]);
                diffY = (case_start.id[1] - target.id[1]);
            } 
            
            counter++;
            console.log('recursion : ', counter)
            
            console.log(x);
            
            case_start = row[x].children[y];
            target = row[goal['x']].children[goal['y']];
            console.log(case_start);
            console.log(target);

            square.forEach(element => {
                console.log(element);
            });
        }