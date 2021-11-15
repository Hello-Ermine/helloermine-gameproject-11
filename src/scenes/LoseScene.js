import Phaser from "phaser";

let exit;
let bg;
let music;
class LoseScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'LoseScene'
        });
    }

    preload() {
        //button
        
        this.load.image('bglose', 'src/image/lose.png');
        this.load.image('exit', 'src/image/exit.png');
        this.load.audio('music','src/sound/game-over.mp3')
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bglose');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);

        exit = this.add.image(525, 450, 'exit')
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
        music = this.sound.add('music').setVolume(0.18);
         music.play({loop: false});
    }
    

    update() {
        
}
}
export default LoseScene;