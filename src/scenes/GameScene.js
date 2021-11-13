import Phaser from "phaser";
let background;
let ninja;
let slime;
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
        this.load.image('bg-play', 'src/image/Bg-play.png');
        this.load.image('wall', 'src/image/wall.jpg');
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 2143, frameHeight: 3343 });
        this.load.spritesheet('slime', 'src/image/Slime.png', { frameWidth: 1269.5, frameHeight: 906 });
    }

    create() {
        background = this.add.tileSprite(0,0,1920,1080,'bg-play').setOrigin(0, 0).setDepth(1).setScale(0.87);
        wall = this.add.image(0,-300,'bg-play').setOrigin(0, 0).setDepth(2).setScale(0.87).setVisible(false);
        ninja = this.physics.add.sprite(200, 400, 'ninja').setDepth(5).setScale(0.05);
        slime = this.physics.add.sprite(700, 400, 'slime').setDepth(5).setScale(0.05);

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
    //     objGroup = this.physics.add.group();    
    //     event = this.time.addEvent({
    //     delay: 5000,
    //     callback: function () {
    //         slime = this.physics.add.image(1527.5, 100, 'slime');
    //         objGroup.add(slime);
    //         objGroup.setVelocityY(200);
    //         this.physics.add.collider(slime, ninja);
    //     },
    //     callbackScope: this,
    //     loop: true,
    //     paused: false,
    // });








        //key input
        keyArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowUp);
        keyArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowLeft);
        keyArrowDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowDown);
        keyArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowRight);

    }

    update(delta, time) {
        background.tilePositionX -= 10;
        slime.anims.play('slimeAni', true);

        // for (let i = 0; i < objGroup.getChildren().length; i++) {
        //     if (objGroup.getChildren()[i].y < 350) {
        //             objGroup.getChildren()[i].destroy();
        //     }
        // }




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

