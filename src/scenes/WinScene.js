import Phaser from "phaser";

let exit;
let bg;
let musicw;
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
        this.load.audio('musicw','src/sound/win.mp3')
        
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bgwin');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);


        exit = this.add.image(525, 530, 'exit')
        exit.setScale(0.35).setDepth(2).setInteractive();

        exit.on('pointerup', () => {
            this.scene.start('StartScene');
            musicw.stop()
        })
        exit.on('pointerover', () => {
            exit.setScale(0.38);
        })
        exit.on('pointerout', () => {
            exit.setScale(0.35);
        })

         musicw = this.sound.add('musicw').setVolume(0.18);
         musicw.play({loop: false});

    }

    update() {
       
    }
}

export default WinScene;