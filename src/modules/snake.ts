class Snake{

    head: HTMLElement;
    body: HTMLCollection;
    element: HTMLElement;

    maxWidth: number = 329.8;
    maxHeight: number = 359.5;
    
    constructor(){
        // snake head
        this.head = document.querySelector('#snake>div');
        // snake body
        this.body = document.getElementById('snake').getElementsByTagName('div');
        // snake container for adding snake bodies
        this.element = document.getElementById('snake');
    }
    // snake position X
    get posX(){
        return this.head.offsetLeft;
    }
    set posX(value: number){

        if(this.posX === value){
            return;
        }
        // if the snake is is out of range
        if(value<0 || value >this.maxWidth){
            throw new Error("Lost")
        }
        
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value){
            if(value > this.posX){
                value = this.posX - 15;
            }
            else{
                value = this.posX + 15;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkSelfBody();

    }
    // get snake position Y
    get posY(){
        return this.head.offsetTop;
    }
    set posY(value:number){
        if(this.posY === value){
            return;
        }
        if(value<0 || value >this.maxHeight){
            throw new Error("Lost")
        }
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value){
            if(value > this.posY){
                value = this.posY - 15;
            }
            else{
                value = this.posY + 15;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkSelfBody();
    }

    // create a snake body
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    // find the position of snake, follow by the snake head
    // update a new body position = position of the previous body
    moveBody(){
        for(let i = this.body.length - 1; i>0; i--){
            // get the position of the previous body
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            // set the position current body = the position of the previous body
            (this.body[i] as HTMLElement).style.left = X +'px';
            (this.body[i] as HTMLElement).style.top = Y +'px';
        }
    }
    // check the snake head 
    checkSelfBody(){
        // start at the first of body, 0 is the snake head
        for(let i = 1; i< this.body.length; i++){
            let bd = (this.body[i] as HTMLElement);
            // if the current position = the position of one of the bodies
            if (this.posX === bd.offsetLeft && this.posY === bd.offsetTop ){
                throw new Error('Lost.');
            }
        }
    }
}
export default Snake;