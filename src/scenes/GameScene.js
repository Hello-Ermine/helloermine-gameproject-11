import Phaser from "phaser";
let background;
let ninja;
let slime;
let home;
let music1;
let keyArrowUp;
let keyArrowLeft;
let keyArrowDown;
let keyArrowRight;
let objninja;
//let cursor;
let wall;
let event;
let exit;
let objninja;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg-play', 'src/image/Bg-play.png');
        this.load.spritesheet('ninja', 'src/image/ninja.png', { frameWidth: 428.5, frameHeight: 669});
        this.load.spritesheet('slime', 'src/image/Slime.png', { frameWidth: 1269.5, frameHeight: 906 });
        this.load.image('home', 'src/image/home.png');
        this.load.image('exit', 'src/image/exit.png');

        this.load.sound('music1','src/sound/musicplay.wav');
      
    }

    create() {

        background = this.add.tileSprite(0,0,1920,1080,'bg-play').setOrigin(0, 0).setDepth(1).setScale(0.87);
        wall = this.add.image(0,-300,'bg-play').setOrigin(0, 0).setDepth(2).setScale(0.87).setVisible(false);
        ninja = this.physics.add.sprite(200, 400, 'ninja').setDepth(5).setScale(0.15).setImmovable().setCollideWorldBounds(true);
        home = this.physics.add.image(5000,350,'home').setDepth(7).setScale(1).setOffset(0,-40);
        slime = this.physics.add.sprite(700, 400, 'slime').setDepth(5).setScale(0.07)
        // slime2 = this.physics.add.sprite(600, 400, 'slime').setDepth(6).setScale(0.07);   
        slime = this.physics.add.Group().setDepth(5).setScale(0.07);
        slime.create(700, 400, 'slime');
        slime.create(600, 200, 'slime');
        slime.create(400, 500, 'slime');
       
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
        });

        this.anims.create({
            key: 'ninjaAni-right',
            frames: this.anims.generateFrameNumbers('ninja', {
                start: 3,
                end: 6
            }),
            duration: 500,
            framerate: 0,
            repeat: -1
        });

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
           objGroup = this.physics.add.group();  
           event = this.time.addEvent({
           delay: 5000,
           callback: function () {
              slime = this.physics.add.image(350, 100, 'slime');
               objGroup.add(slime);
               objGroup.setVelocityX(200);
               this.physics.add.collider(ninja, slime, ()=>{
                  this.scene.start('LoseScene');
              });
              this.physics.add.collider(ninja, home, ()=>{
                  this.scene.start('WinScene');
              });
           },
           callbackScope: this,
           loop: true,
           //paused: false,
       });
    
    //exit 
    exit = this.add.image(930, 550, 'exit');
    exit.setScale(0.35).setDepth(2).setInteractive();

    exit.on('pointerup', () => {
        this.scene.start('StartScene');
    });
    exit.on('pointerover', () => {
        exit.setScale(0.38);
    });
    exit.on('pointerout', () => {
        exit.setScale(0.35);
    });

      //เสียง
        //  music1 = this.sound.add('music1').setVolume(0.2);
        //  music1.play({loop: true});
 
        //เปลี่ยนsceneจบ
        this.physics.add.collider(ninja, slime, ()=>{
                this.scene.start('LoseScene');
            });

        this.physics.add.collider(ninja, home, ()=>{
            this.scene.start('WinScene');
        });



    //  cursor = this.input.keyboard.createCursorKeys();



        //key input
         keyArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowUp);
         keyArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowLeft);
         keyArrowDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowDown);
         keyArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ArrowRight);
        
        
      
    
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
        // slime2.anims.play('slimeAni', true);
        
        for (let i = 0; i < objGroup.getChildren().length; i++) {
            if (objGroup.getChildren()[i].x < -3500) {
                    objGroup.getChildren()[i].destroy();
            }
        }

            
        if(true){slime.setVelocityX(100);}
        // if(true){slime2.setVelocityX(100);}   
        if(true){home.setVelocityX(-100);}
    
            if(keyArrowUp.isDown){
                ninja.setVelocityY(-1000);
            }else if(keyArrowDown.isDown){
                ninja.setVelocityY(1000);
            }else{
                ninja.setVelocityY(0);
            }
            if(keyArrowLeft .isDown){
                ninja.setVelocityX(-1000);
                ninja.anims.play('ninjaAni-right',true);
            }else if(keyArrowRight.isDown){
                ninja.setVelocityX(1000);
                ninja.anims.play('ninjaAni-right',true);
            }else{
                ninja.setVelocityX(0);
            }    
        // destroy slime   
         for (let i = 0; i < objGroup.getChildren().length; i++) {
             if (objGroup.getChildren()[i].x < -1200) {
                     objGroup.getChildren()[i].destroy();
             }
         }    

    }    
}
export default GameScene;

