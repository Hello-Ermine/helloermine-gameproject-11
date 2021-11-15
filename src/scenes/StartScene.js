import Phaser from "phaser";

let bg;
let play;
let how;
let name;
let musicstart ;

class StartScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'StartScene'
        });
    }

    preload() {
        //bg
        this.load.image('bgstart', 'src/image/Bg-start.png');
        //game-name
        this.load.image('name', 'src/image/namegame.png');
        //button
        this.load.image('play', 'src/image/play.png');
        this.load.image('how', 'src/image/how to play.png');
        this.load.audio('musicstart','src/sound/musicstart1.mp3');
    }

    create() {
        //bg
        bg = this.add.tileSprite(0,0,1920,1080,'bgstart');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);

        name = this.add.image(525, 150, 'name');
        name.setScale(0.7).setDepth(2);

         musicstart = this.add.audio('musicstart').setVolume(0.2);
         musicstart.play({loop: true});
        
        //button-play
        play = this.add.image(525, 300, 'play');
            play.setScale(0.38).setDepth(5).setInteractive();

         play.on('pointerup', () => {
            this.scene.start('GameScene');
         })
         play.on('pointerover', () => {
            play.setScale(0.41);
        })
         play.on('pointerout', () => {
            play.setScale(0.38);
        })

        //button-how to play
        how = this.add.image(525, 400, 'how');
            how.setScale(0.53).setDepth(4).setInteractive();
        
        how.on('pointerup', () => {
            this.scene.start('HowScene');
        })
        how.on('pointerover', () => {
            how.setScale(0.56);
        })
        how.on('pointerout', () => {
            how.setScale(0.53);
        })


    }

    update() {
        bg.tilePositionX += 1;
       // musicstart.play({loop: true});
    }
}

export default StartScene;