import Phaser from "phaser";

let bg;
let play;
let how;

class StartScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'StartScene'
        });
    }

    preload() {
        //bg
        this.load.image('bg', 'src/image/Bg-start.png');
        //button
        this.load.image('play', 'src/image/play.png');
        this.load.image('how', 'src/image/how to play.png');
    }

    create() {
        //bg
        bg = this.add.tileSprite(0,0,1920,1080,'bg');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);

        //button-play
        play = this.add.image(525, 300, 'play')
            play.setScale(0.3).setDepth(5).setInteractive();

        play.on('pointerup', () => {
            this.scene.start('GameScene');
        })
        play.on('pointerover', () => {
            play.setScale(0.34);
        })
        play.on('pointerout', () => {
            play.setScale(0.3);
        })

        //button-how to play
        how = this.add.image(525, 400, 'how')
            how.setScale(0.3).setDepth(5).setInteractive();
        
        how.on('pointerup', () => {
            this.scene.start('GameScene');
        })
        how.on('pointerover', () => {
            play.setScale(0.36);
        })
        how.on('pointerout', () => {
            play.setScale(0.34);
        })


    }

    update() {
        //bg.tilePositionX += 3;
        
    }
}

export default StartScene;