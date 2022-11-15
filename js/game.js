/* Global Phaser */

// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Nov 2022
// This file contains the JS functions for index.html

// Scene import statements
import SplashScene from './splashScene.js'

// Create the new scenes
const splashScene = new SplashScene()

/**
 * Start Phaser Game
 **/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
// comsole.log(game)

// load scenes
// NOTE: remember any "key" is global and can't be reused!
game.scene.add('spashScene', splashScene)

// start title
game.scene.start('splashScene')