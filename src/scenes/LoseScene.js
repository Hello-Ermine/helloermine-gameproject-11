import Phaser from "phaser";

let exit;
let bg;
let musicl;
let sound;
let nosound;
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
        this.load.image('nosound','src/image/sound.png')
         this.load.image('sound','src/image/on-sound.png')
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
        musicl = this.sound.add('music').setVolume(0.18);
         musicl.play({loop: false});

         nosound = this.add.image(40, 40, 'nosound')
         nosound.setScale(0.3).setDepth(4).setInteractive();

         nosound.on('pointerup', () => {
            musicl.stop();
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
            musicl.play({loop: false});
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
export default LoseScene;