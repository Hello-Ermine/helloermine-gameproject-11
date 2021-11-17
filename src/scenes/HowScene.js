import Phaser from "phaser";

let exit;
let bg;
let musicstart ;
let sound;
let nosound;

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
        this.load.audio('musicstart','src/sound/musicstart1.mp3')
        this.load.image('nosound','src/image/sound.png')
         this.load.image('sound','src/image/on-sound.png')
    }

    create() {
        bg = this.add.tileSprite(0,0,1920,1180,'bghow');
        bg.setOrigin(0,0).setDepth(1).setScale(0.9);


        exit = this.add.image(930, 550, 'exit')
        exit.setScale(0.35).setDepth(2).setInteractive();

        exit.on('pointerup', () => {
            this.scene.start('StartScene');
            musicstart.stop();
        })
        exit.on('pointerover', () => {
            exit.setScale(0.38);
        })
        exit.on('pointerout', () => {
            exit.setScale(0.35);
        })

        musicstart = this.sound.add('musicstart').setVolume(0.2);
        musicstart.play({loop: true});

        nosound = this.add.image(40, 40, 'nosound')
          nosound.setScale(0.3).setDepth(4).setInteractive();

          nosound.on('pointerup', () => {
            musicstart.stop();
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
                musicstart.play({loop: true});
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

export default HowScene ;