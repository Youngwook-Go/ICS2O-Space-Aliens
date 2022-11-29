/* Global Phaser */

// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * This class is the Title Scene
**/
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor
  **/
  constructor () 
  {
    super({ key: "gameScene" })
  }
  
  init(data) 
  {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  preload()
  {
    console.log("Game Scene")
  }
  
  create(data) 
  {
    // pass
  }

  update(time, delta)
  {
    // pass
  }
}

export default GameScene
