class ScorePanel{

    scoreNum: HTMLElement;

    score = 0;

    constructor(){
        this.scoreNum = document.getElementById('score');
    }
    // Add 1
    updateScore(){
        this.score++;
        this.scoreNum.innerHTML = this.score + '';
    }
}
const scorePanel = new ScorePanel();

export default ScorePanel;