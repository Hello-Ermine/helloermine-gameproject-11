import Phaser from "phaser";

let exit;
let bg;
let musicstart ;
class HowScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'HowScene'
        });
    }

    preload() {
        //button
        this.load.image('bghow', 'src/image/How to play.jpeg');
        this.load.image('exit', 'src/image/exit.png');
        this.load.audio('musicstart','src/sound/musicstart1.mp3');
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bghow');
        bg.setOrigin(0,0).setDepth(1).setScale(1);


        exit = this.add.image(525, 530, 'exit')
        exit.setScale(0.35).setDepth(2).setInteractive();

        exit.on('pointerup', () => {
            this.scene.start('StartScene');
        })
        exit.on('pointerover', () => {
            exit.setScale(0.38);
        })
        exit.on('pointerout', () => {
            exit.setScale(0.35);
        })

        musicstart = this.add.audio('musicstart').setVolume(0.2);
        

    }

    update() {
    musicstart.play({loop: true});   
    }
}

export default HowScene ;