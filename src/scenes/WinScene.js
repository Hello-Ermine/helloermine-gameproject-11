import Phaser from "phaser";

let exit;
let bg;
let musicw;
let sound;
let nosound;
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
        this.load.audio('musicw','src/sound/win.mp3');
        this.load.image('nosound','src/image/sound.png');
         this.load.image('sound','src/image/on-sound.png');
        
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1080,'bgwin');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);


        exit = this.add.image(525, 530, 'exit')
        exit.setScale(0.35).setDepth(3).setInteractive();

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
         musicw.play({loop: true});

         nosound = this.add.image(40, 40, 'nosound')
         nosound.setScale(0.3).setDepth(4).setInteractive();

         nosound.on('pointerup', () => {
            musicw.stop();
           })
           nosound.on('pointerover', () => {
               nosound.setScale(0.34);
           })
           nosound.on('pointerout', () => {
               nosound.setScale(0.3);
           })

           sound = this.add.image(100, 45, 'sound')
           sound.setScale(0.3).setDepth(4).setInteractive();

           sound.on('pointerup', () => {
            musicw.play({loop: true});
           })
           sound.on('pointerover', () => {
               sound.setScale(0.34);
           })
           sound.on('pointerout', () => {
               sound.setScale(0.3);
           })

    }

    update() {
       
    }
}

export default WinScene;