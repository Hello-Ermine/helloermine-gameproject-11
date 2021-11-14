import Phaser from "phaser";
<<<<<<< HEAD
let bgplay;
=======
let background;
>>>>>>> main
let ninja;
let slime;
let objGroup;
let gameover;
let win;
let keyArrowUp;
let keyArrowLeft;
let keyArrowDown;
let keyArrowRight;
let wall;
let event;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
<<<<<<< HEAD
        this.load.image('bgplay', 'src/image/Bg-play.png');
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 428.5, frameHeight: 669 });
        this.load.spritesheet('slime', 'src/imge/Slime.png', { frameWidth: 1527.5, frameHeight: 3817 });
    }

    create() {
        background = this.add.tileSprite(0,0,1920,1080,'bgplay').setOrigin(0, 0).setDepth(1).setScale(0.87);
        
        ninja = this.physics.add.sprite(2143, 3817, 'ninja').setScale(0.5).setDepth(3);
=======
        this.load.image('bg-play', 'src/image/Bg-play.png')
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 428.5, frameHeight: 669});
        this.load.spritesheet('slime', 'src/image/Slime.png', { frameWidth: 1269.5, frameHeight: 906 });
    }

    create() {

        background = this.add.tileSprite(0,0,1920,1080,'bg-play').setOrigin(0, 0).setDepth(1).setScale(0.87);
        wall = this.add.image(0,-300,'bg-play').setOrigin(0, 0).setDepth(2).setScale(0.87).setVisible(false);


        ninja = this.physics.add.sprite(200, 400, 'ninja').setDepth(5).setScale(0.15);
        slime = this.physics.add.sprite(700, 400, 'slime').setDepth(5).setScale(0.07);
>>>>>>> main

        //ninja animation
        this.anims.create({
            key: 'ninjaAni-left',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 0,
                end: 2
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        })

        this.anims.create({
            key: 'ninjaAni-right',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 3,
                end: 6
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        })

        //slime animation
        this.anims.create({
            key: 'slimeAni',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0,
                end: 1
            }),
            duration: 1000,
            framerate: 0,
            repeat: -1
        })

        //obj slime
        objninja = this.physics.add.image(2143, 3817, 'ninja').setImmovable();
        objGroup = this.physics.add.group();    
        event = this.time.addEvent({
        delay: 5000,
        callback: function () {
            objslime = this.physics.add.image(1527.5, 100, 'slime');
            objGroup.add(slime);
            objGroup.setVelocityY(200);
            this.physics.add.collider(slime, ninja);
        },
        callbackScope: this,
        loop: true,
        //paused: false,
    });







        //key input
        keyArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowUp);
        keyArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowLeft);
        keyArrowDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowDown);
        keyArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowRight);

    }

    update(delta, time) {
<<<<<<< HEAD
        bgplay.tilePositionX -= 10;
        ninja.anims.play('ninjaAni', true);
=======
        background.tilePositionX += 3;
>>>>>>> main
        slime.anims.play('slimeAni', true);

         for (let i = 0; i < objGroup.getChildren().length; i++) {
             if (objGroup.getChildren()[i].x < -3500) {
                     objGroup.getChildren()[i].destroy();
             }
         }

        ninja.anims.play('ninjaAni-right', true);
        if (keyArrowUp.isDown) {
            ninja.setVelocityY(500);
        } else if (keyArrowDown.isDown) {
            ninja.setVelocityY(-500);
        } else {
            ninja.setVelocityY(0);
        }
        if (keyArrowLeft.isDown) {
            ninja.setVelocityX(-500);
            ninja.anims.play('ninjaAni-left', true,)
        } else if (keyArrowRight.isDown) {
            ninja.setVelocityX(500);
            ninja.anims.play('ninjaAni-right', true,)
        } else {
            ninja.setVelocityX(0);
        }

        
    }
}
export default GameScene;
