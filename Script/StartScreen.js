class StartScreen extends Phaser.Scene{
    constructor(){
        super('StartScreen')
    }

    create(){
        this.startScreen = this.add.image(0, 0, "startScreen").setScale(0, 0.669);
        Phaser.Display.Align.In.Center(this.startScreen, this.add.zone(640, 360, 1280, 720));

        var tween = this.tweens.add({
          targets: this.startScreen,
          scale: 0.669,
          ease: 'Linear',
          duration: 1000,
          repeat:0,
          onComplete: function(){
            },
        callbackScope: this,
        });
    }
          

    update(time){
        if(time > 5000){
            this.scene.switch("Menu");
        }
    }
}