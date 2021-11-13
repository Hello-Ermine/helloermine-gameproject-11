import Phaser from "phaser";

let exit;
let bg;
class HowScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'HowScene '
        });
    }

    preload() {
        //button
        this.load.image('bghow', 'src/image/How to play.jpeg');
        this.load.image('exit', 'src/image/exit.png');
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bghow');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);


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

    }

    update() {
       
    }
}

export default HowScene ;