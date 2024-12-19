class Menu extends Phaser.Scene{
    constructor(){
        super('Menu')
    }


    create(){
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setInteractive();
        this.background.setOrigin(0,0);

        this.button1 =this.add.image(200,150,"inGameMenu").setScale(0.3).setInteractive();
        this.button2 =this.add.image(200,350,"inGameMenu").setScale(0.3).setInteractive();
        this.button3 =this.add.image(640,150,"inGameMenu").setScale(0.3).setInteractive();
        this.button4 =this.add.image(640,350,"inGameMenu").setScale(0.3).setInteractive();
        this.button5 =this.add.image(1000,150,"inGameMenu").setScale(0.3).setInteractive();
        this.button6 =this.add.image(1000,350,"inGameMenu").setScale(0.3).setInteractive();
        this.button7 =this.add.image(400,550,"inGameMenu").setScale(0.3).setInteractive();
        this.button8 =this.add.image(820,550,"inGameMenu").setScale(0.3).setInteractive();

        this.text1 = this.add.text(180, 125, '1', { fontSize: '64px', fill: 'white' });
        this.text2 = this.add.text(180, 325, '2', { fontSize: '64px', fill: 'white' });
        this.text3 = this.add.text(620, 125, '3', { fontSize: '64px', fill: 'white' });
        this.text4 = this.add.text(620, 325, '4', { fontSize: '64px', fill: 'white' });
        this.text5 = this.add.text(980, 125, '5', { fontSize: '64px', fill: 'white' });
        this.text6 = this.add.text(980, 325, '6', { fontSize: '64px', fill: 'white' });
        this.text7 = this.add.text(380, 525, '7', { fontSize: '64px', fill: 'white' });
        this.text8 = this.add.text(800, 525, '8', { fontSize: '64px', fill: 'white' });

        this.button1.on('pointerdown',()=>this.loadLevel1());
        this.button2.on('pointerdown',()=>this.loadLevel2());
        this.button3.on('pointerdown',()=>this.loadLevel3());
        this.button4.on('pointerdown',()=>this.loadLevel4());
        this.button5.on('pointerdown',()=>this.loadLevel5());
        this.button6.on('pointerdown',()=>this.loadLevel6());
        this.button7.on('pointerdown',()=>this.loadLevel7());
        this.button8.on('pointerdown',()=>this.loadLevel8());

    }

    loadLevel1(){
        this.scene.switch('Level1');
    }
    loadLevel2(){
        this.scene.switch('Level2');
    }
    loadLevel3(){
        this.scene.switch('Level3');
    }
    loadLevel4(){
        this.scene.switch('Level4');
    }
    loadLevel5(){
        this.scene.switch('Level5');
    }
    loadLevel6(){
        this.scene.switch('Level6');
    }
    loadLevel7(){
        this.scene.switch('Level7');
    }
    loadLevel8(){
        this.scene.switch('Level8');
    }

}