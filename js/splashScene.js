/* Global Phaser */

// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * This class is the Splash Scene
**/

class SplashScene extends Phaser.Scene 
{
  /**
   * This method is the constructor.
  **/
  constructor()
  {
    super({ key: "splashScene" })
  }
  init(data) 

  {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload()
  {
    console.log("Splash Scene")
  }
  
  create(data) 
  {
    //pass
  }

  update(time, delta)
  {
    this.scene.switch("titleScene")
  }
}

export default SplashScene