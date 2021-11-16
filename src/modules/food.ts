class Food{

    private food: HTMLElement;

    constructor(){
        this.food = document.getElementById('food')!;
    }

    get posX(){
        return this.food.offsetLeft;
    }
    get posY(){
        return this.food.offsetTop;
    }

    // The food position shows randomly.
    posRandom(){
        let left = Math.round(Math.random() * 21.1) * 15;
        let top = Math.round(Math.random() * 23.1) * 15;

        this.food.style.left = left + 'px';
        this.food.style.top = top + 'px';
    }
}

export default Food;