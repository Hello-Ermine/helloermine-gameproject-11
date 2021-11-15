import Phaser from "phaser";

let exit;
let bg;
let music;
class WinScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'WinScene'
        });
    }

    preload() {
        //button
        this.load.image('bgwin', 'src/image/win.png');
        this.load.image('exit', 'src/image/exit.png');
        this.load.audio('music','src/sound/win.mp3')
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bgwin');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);


        exit = this.add.image(525, 530, 'exit')
        exit.setScale(0.35).setDepth(2).setInteractive();

        exit.on('pointerup', () => {
            this.scene.start('StartScene');
            music.stop()
        })
        exit.on('pointerover', () => {
            exit.setScale(0.38);
        })
        exit.on('pointerout', () => {
            exit.setScale(0.35);
        })

        music = this.sound.add('music').setVolume(0.18);
        music.play({loop: true});

    }

    update() {
       
    }
}

export default WinScene;