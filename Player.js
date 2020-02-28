class Player{
    constructor(){
        this.spot=0;
    }
reset(){
    player.spot=0;
}
    roll(tiles){
        let r=floor(random(1,6));
        this.spot+=r;

        let tile=tiles[this.spot];
       // console.log(this.spot);
        //console.log(tile.snakeorladder);
        if(tile){
         this.spot+=tile.snakeorladder;
        }
    }
    show(tiles){
        let current=tiles[this.spot];
        push();
        fill(255);
        pop();
        let center=current.getCenter();
        ellipse(center[0],center[1],32);
    }
}