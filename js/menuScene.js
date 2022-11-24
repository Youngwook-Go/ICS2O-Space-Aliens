/* Global Phaser */

// Copyright (c) Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * This class is the Title Scene
**/
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor
  **/
  constructor () 
  {
    super({ key: "menuScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }
  
  init(data) 
  {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  
  preload()
  {
    console.log("Menu Scene")
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

export default MenuScene
