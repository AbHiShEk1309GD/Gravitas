class Load extends Phaser.Scene{
    constructor(){
        super('load')
    }

    preload(){
        this.load.image("startScreen", "Assets/start_Screen.png");
        this.load.image("background", "Assets/Background.png");
        this.load.image("block1", "Assets/Block.png");
        this.load.image("block2", "Assets/Block_stretched.png");
        playerSprite=this.load.spritesheet("player", "Assets/player.png", {
            frameHeight:96,
            frameWidth:52
        });
        this.load.spritesheet("enemy", "Assets/enemy.png", {
            frameHeight:256,
            frameWidth:256
        });
        this.load.image("warmhole", "Assets/Warm_Hole.png");

        this.load.image("play","Assets/UI/Play.png");
        this.load.image("pause","Assets/UI/Pause.png");
        this.load.image("reload","Assets/UI/reload.png");
        this.load.image("inGameMenu","Assets/UI/In_Game_Menu.png");
        this.load.image("uiButtons","Assets/UI/UI_Buttons.png");

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(480, 260, 320, 50);
        
        var loadingText = this.make.text({
            x: 1280 / 2,
            y: 720 / 2 + 100,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: 1280 / 2,
            y: 720 / 2 ,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(490, 270, 300 * value, 30);
        });
        
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
        
        this.load.image('logo', 'Assets/Logo.png');
    }

    create(){
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player",{start:0,end:1}),
            frameRate:6,
            repeat: -1
        });

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player",{
                start:4,
                end:3
            }),
            frameRate:6,
            repeat: -1
        });

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("player",{
                start:2,
                end:2
            }),
            frameRate:6,
        });

        this.anims.create({
            key: "attack",
            frames: this.anims.generateFrameNumbers("enemy",{
                start:0,
                end:3
            }),
            frameRate:6,
        });


        this.logo = this.add.image(1280/2, 720/2, 'logo').setScale(0.25);

        var loadingText = this.make.text({
            x: 1280 / 2 - 100,
            y: 720 / 2 + 200,
            text: 'Loading...',
            style: {
                font: '40px monospace',
                fill: '#ffffff'
            }
        });
    }

    update(time){
       if(time > 2500){
            this.scene.switch("StartScreen");
        }
    }
}