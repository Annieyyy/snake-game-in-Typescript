import Food from "./food";
import ScorePanel from './scorePanel';
import Snake from "./snake";

class GameControl{
    
    snake: Snake;
    scorePanel: ScorePanel;
    food: Food;

    moveDirectionNum:number = 15;
    // default direction is empty
    direction: string= '';
    // default the snake is moving
    isRunning = true;

    constructor(){
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.food = new Food();

        this.startGame();
    }
    
    startGame(){
        this.food.posRandom();
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.moveDirection();
    }
    // get the direction from keyboard: ArrowUp, ArrowDown, ArrowLeft and ArrowRight
    keydownHandler(e:KeyboardEvent){
        this.direction = e.key;
    }
    
    moveDirection(){
        // get the current position of the snake
        let X = this.snake.posX;
        let Y = this.snake.posY;
        /*
            ArrowUp: current position Y - the height of snake head
            ArrowDown: current position Y + the height of snake head
            ArrowLeft: current position X - the weight of snake head
            ArrowRight: current position X + the weight of snake head
         */
        switch(this.direction){
            case "ArrowUp":
                Y -= this.moveDirectionNum;
                break;
            case "ArrowDown":
                Y += this.moveDirectionNum;
                break;
            case "ArrowLeft":
                X -= this.moveDirectionNum;
                break;
            case "ArrowRight":
                X += this.moveDirectionNum;
                break;
        }
        // check the snake eat the food or not
        this.checkFood(X,Y);

        try{
            // set the snake new position
            this.snake.posX = X;
            this.snake.posY = Y;
        }catch(e){
            alert('Lost. Try again.');
            // update isRunning to false if error
            this.isRunning = false;
            // refresh the window
            location.reload();
        }
        // if the snake moving and
        this.isRunning && setTimeout(this.moveDirection.bind(this),280)
    }
    // if the snake eat the food
    // create a new food, add 1 in score and add a snake body
    checkFood(X:number,Y:number){
        // if the snake position (X, Y) are equal to food position (X, Y)
        if(X === this.food.posX && Y === this.food.posY){
            this.food.posRandom();
            this.scorePanel.updateScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;