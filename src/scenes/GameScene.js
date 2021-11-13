import Phaser from "phaser";
let bgplay;
let ninja;
let slime;
let objGroup;
let gameover;
let win;
let keyArrowUp;
let keyArrowLeft;
let keyArrowDown;
let keyArrowRight;
let event;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bgplay', 'src/image/Bg-play.png');
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 2143, frameHeight: 3343 });
        this.load.spritesheet('slime', 'src/imge/Slime.png', { frameWidth: 1527.5, frameHeight: 3817 });
    }

    create() {
        background = this.add.tileSprite(0,0,1920,1080,'bgplay').setOrigin(0, 0).setDepth(1).setScale(0.87);
        
        ninja = this.physics.add.sprite(2143, 3817, 'ninja').setScale(0.5).setDepth(3);

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

        //slime animetion
        this.anims.create({
            key: 'slimeAni',
            frames: this.anims.generateFrameNumbers('slime', {
                start: 0,
                end: 1
            }),
            duration: 1000,
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
        bgplay.tilePositionX -= 10;
        ninja.anims.play('ninjaAni', true); //ถ้าไม่ขึ้นสมามรถลบได้
        slime.anims.play('slimeAni', true);

         for (let i = 0; i < objGroup.getChildren().length; i++) {
             if (objGroup.getChildren()[i].x < 350) {
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
