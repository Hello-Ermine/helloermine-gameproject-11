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


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
<<<<<<< HEAD
        this.load.image('bg-play', 'src/image/Bg-play.jpg')
=======
        this.load.image('bg-play', 'src/image/Bg-play.jpg');
>>>>>>> test-event
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
        home = this.physics.add.image(5000,350,'home').setDepth(7).setScale(1).setOffset(0,-40);
<<<<<<< HEAD
       this.physics.add.collider(ninja,wall);
=======
         slime = this.physics.add.sprite(700, 400, 'slime').setDepth(5).setScale(0.07)
        // slime2 = this.physics.add.sprite(600, 400, 'slime').setDepth(6).setScale(0.07);   
        // slime = this.physics.add.Group().setDepth(5).setScale(0.07);
        // slime.create(700, 400, 'slime');
        // slime.create(600, 200, 'slime');
        // slime.create(400, 500, 'slime');
       
>>>>>>> test-event
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

<<<<<<< HEAD
        // objninja = this.physics.add.image(2143, 3817, 'ninja').setImmovable();
        // objGroup = this.physics.add.group();    
        // event = this.time.addEvent({
        // delay: 5000,
        // callback: function () {
        //     objslime = this.physics.add.image(1527.5, 100, 'slime');
        //     objGroup.add(slime);
        //     objGroup.setVelcityY(200);
        //     this.physics.add.collider(slime, ninja);
        // },
        // callbackScope: this,
        // loop: true,
        // //paused: false,
    // });
=======
           //obj slime
           objslime = this.physics.add.group();  
           slimeevent = this.time.addEvent({
           delay: 500,
           callback: function () {
              slime = this.physics.add.sprite(Phaser.Math.Between(0, 500),300, 'slime');
              slime.setVelocityY(-100).setDepth(5).setScale(0.07);
              objslime.add(slime).setVelocityY(-100,-100);
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
>>>>>>> test-event
    
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
<<<<<<< HEAD

        
            
        if(true){slime.setVelocityX(100);}
        if(true){home.setVelocityX(-200);}
       
=======
      
        if(true){slime.setVelocityX(100);}
        
        if(true){home.setVelocityX(-100);}
    
           
>>>>>>> test-event
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
<<<<<<< HEAD
            }     

    }    
}
export default GameScene;

=======
            }    
        // destroy slime   
   for (let i = 0; i < objslime.getChildren().length; i++) {
            if (objslime.getChildren()[i].x < -2000) {
                objslime.getChildren()[i].destroy();
            }
        }
        }
    }
              
 export default GameScene;
>>>>>>> test-event
