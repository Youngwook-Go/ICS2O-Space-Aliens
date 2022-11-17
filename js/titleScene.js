/* Global Phaser */

// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * This class is the Title Scene
**/
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor
  **/
  constructor () 
  {
    super({key:"Title Scene "})
  }
  
  init(data) 
  {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  preload()
  {
    console.log("Title Scene")
  }
  
  create(data) 
  {
    //pass
  }
  
  update(time, delta)
  {
    //pass
  }
}

export default TitleScene
