import Phaser from "phaser";
let background;
let ninja;
let slime;
let home;
let music1;
let wall;
//let event;
let exit;
let keyW;
let keyA;
let keyS;
let keyD;
let objslime;
let slimeevent;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg-play', 'src/image/Bg-play.jpg')
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 428.5, frameHeight: 669});
        this.load.spritesheet('slime', 'src/image/Slime.png', { frameWidth: 1269.5, frameHeight: 906 });
        this.load.image('home', 'src/image/home.png')
        this.load.image('exit', 'src/image/exit.png')

         this.load.audio('music1','src/sound/musicplay.mp3')
    }

    create() {

        background = this.add.tileSprite(0,0,1920,1080,'bg-play').setOrigin(0, 0).setDepth(1).setScale(0.87);
        wall = this.physics.add.image(0,-300,'bg-play').setOrigin(0, 0).setDepth(8).setScale(0.87).setVisible(false);
        wall.setImmovable().setOffset(600,250);
        ninja = this.physics.add.sprite(200, 400, 'ninja').setDepth(5).setScale(0.15).setCollideWorldBounds(true);
        slime = this.physics.add.sprite(700, 400, 'slime').setDepth(5).setScale(0.07);
        home = this.physics.add.image(7000,350,'home').setDepth(7).setScale(1).setOffset(0,-40);
       this.physics.add.collider(ninja,wall);

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
 objslime = this.physics.add.group();  
 slimeevent = this.time.addEvent({
 delay: 1800,
 callback: function () {
    slime = this.physics.add.sprite(Phaser.Math.Between(890, 900),Phaser.Math.Between(310,550),'slime');
    slime.setVelocityX(-100).setDepth(5).setScale(0.07);
 
    
    objslime.add(slime).setVelocityX(-100);
          this.physics.add.collider(ninja, slime, ()=>{
              this.scene.start('LoseScene');
              music1.stop();
          });
       this.physics.add.collider(ninja, home, ()=>{
              this.scene.start('WinScene');
              music1.stop();
              });
 },
 callbackScope: this,
 loop: true,
 //paused: false,

});
    //exit 
    exit = this.add.image(930, 550, 'exit')
    exit.setScale(0.35).setDepth(2).setInteractive();

    exit.on('pointerup', () => {
        this.scene.start('StartScene');
        music1.stop();
    })
    exit.on('pointerover', () => {
        exit.setScale(0.38);
    })
    exit.on('pointerout', () => {
        exit.setScale(0.35);
    })

      //เสียง
          music1 = this.sound.add('music1').setVolume(0.18);
          music1.play({loop: true});
 
        //เปลี่ยนsceneจบ
        this.physics.add.collider(ninja, slime, ()=>{
                this.scene.start('LoseScene');
                music1.stop();
            });
        this.physics.add.collider(ninja, home, ()=>{
            this.scene.start('WinScene');
            music1.stop();
        });

        //key input

    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
  
        // for (let i = 0; i < objGroup.getChildren().length; i++) {
        //     if (objGroup.getChildren()[i].y < 350) {
        //             objGroup.getChildren()[i].destroy();
        //     }
        // }

        
        update(delta, time) {

        background.tilePositionX += 2;
        ninja.anims.play('ninjaAni-right', true);
        slime.anims.play('slimeAni', true);

        
            
        if(true){slime.setVelocityX(-100);}
        if(true){home.setVelocityX(-200);}
       
            if(keyW.isDown){
                ninja.setVelocityY(-500);
            }else if(keyS.isDown){
                ninja.setVelocityY(500);
            }else{
                ninja.setVelocityY(0);
            }
            if(keyA.isDown){
                ninja.setVelocityX(-500);
                ninja.anims.play('ninjaAni-left',true);
            }else if(keyD.isDown){
                ninja.setVelocityX(500);
                ninja.anims.play('ninjaAni-right',true);
            }else{
                ninja.setVelocityX(0);
            }     

    }    
}
export default GameScene;

