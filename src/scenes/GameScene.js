import Phaser from "phaser";
let background;
let ninja;
let keyW;
let keyA;
let keyS;
let keyD;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg', 'src/image/Bg-play.png');
        this.load.image('ninja', 'src/image/ninja.png', { frameWidth: 2143, frameHeight: 3343 });
    }

    create() {
        background = this.add.tileSprite(0, 0, 1200, 700, 'bg').setOrigin(0, 0);
        ninja = this.physics.add.sprite(200, 500, 'ninja').setScale(0.5);

        //ninja animation
        this.anims.create({
            key: 'ninjaAni',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 0,
                end: 7
            }),
            duration: 500,
            repeat: -1
        })








        //key input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update(delta, time) {
        bg.tilePositionX -= 10;

        ninja.anims.play('ninjaAni', true);

        if (keyW.isDown) {
            ninja.setVelocityY(-500);
        } else if (keyS.isDown) {
            ninja.setVelocityY(500);
        } else {
            ninja.setVelocityY(0);
        }
        if (keyA.isDown) {
            ninja.setVelocityX(-500);
        } else if (keyD.isDown) {
            ninja.setVelocityX(500);
        } else {
            ninja.setVelocityX(0);
        }

        
    }
}
export default GameScene;
