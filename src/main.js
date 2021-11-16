import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import StartScene from './scenes/StartScene';
import HowScene from './scenes/HowScene';
import LoseScene from './scenes/LoseScene';
import WinScene from './scenes/WinScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1040,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
         //StartScene,
         GameScene
        // HowScene,
        //LoseScene,
        //WinScene 
    ],
    
    
};

const game = new Phaser.Game(config);