import Phaser from "phaser";

let bg;
let play;
let how;
let name;
let musicstart1 ;
let cloud;
let objcloud;
let cloudevent;


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
        this.load.image('cloud', 'src/image/Cloud1.png');
        
        this.load.audio('musicstart','src/sound/musicstart1.mp3')
    }

    create() {
        //bg
        bg = this.add.tileSprite(0,0,1920,1080,'bgstart');
        bg.setOrigin(0,0).setDepth(1).setScale(0.87);

        name = this.add.image(525, 150, 'name');
        name.setScale(0.7).setDepth(4);

         //obj slime
        objcloud = this.physics.add.group();  
        cloudevent = this.time.addEvent({
        delay: 7000,
        callback: function () {
            cloud = this.physics.add.sprite(Phaser.Math.Between(1000, 1000),Phaser.Math.Between(50,300),'cloud');
            cloud.setVelocityX(-30).setDepth(3).setScale(0.8);
           
        },
        callbackScope: this,
        loop: true,
        //paused: false,

        });
                

        musicstart1 = this.sound.add('musicstart').setVolume(0.2);
        musicstart1.play({loop: true});
        
        //button-play
        play = this.add.image(525, 300, 'play')
            play.setScale(0.38).setDepth(5).setInteractive();

         play.on('pointerup', () => {
            this.scene.start('GameScene');
            musicstart1.stop();
        })
         play.on('pointerover', () => {
            play.setScale(0.41);
        })
         play.on('pointerout', () => {
            play.setScale(0.38);
        })

        //button-how to play
        how = this.add.image(525, 400, 'how')
            how.setScale(0.53).setDepth(4).setInteractive();
        
        how.on('pointerup', () => {
            this.scene.start('HowScene');
            musicstart1.stop();
        })
        how.on('pointerover', () => {
            how.setScale(0.56);
        })
        how.on('pointerout', () => {
            how.setScale(0.53);
        })


    }

    update() {
        // if(true){cloud.setVelocityX(-70);}
        
    }

}
export default StartScene;