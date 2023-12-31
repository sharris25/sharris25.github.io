$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)


    createPlatform(300, 560, 100, 10)

    createPlatform(600, 630, 100, 10)
    
    createPlatform(700, 100, 100, 10)
    createPlatform(200, 650, 100, 10)
    createPlatform(500, 450, 100, 10)

    createPlatform(300, 350, 100, 10)
    createPlatform(500, 300, 100, 10)
    createPlatform(700, 200, 400, 100)
    
    createPlatform(700, 200, 10, 600)
    createPlatform(1200, 50, 10, 500)

    createPlatform(1000, 200, 10, 200)

    createPlatform(1000, 200, 100, 100)

    createPlatform(1200, 460, 100, 10)

    createPlatform(1100, 400, 100, 10)

    createPlatform(900, 550, 300, 11)
    
    createPlatform(900, 200, 10, 200)
  
    createPlatform(700, 600, 100, 10)

    createPlatform(600, 500, 100, 10)

    createPlatform(1300, 600, 100, 10)

    createPlatform(1300, 350, 100, 10)
  
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)


    createCollectable('database', 200, 500, 1, 1)
    createCollectable('database', 750, 150, 1, 1)
    createCollectable('database', 1150, 500, 1, 1)
    createCollectable('database', 1300, 300, 1, 1)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon('left', 400, 1000, 30, 10)
    createCannon('top', 600, 1500, 30, 50)
    createCannon('bottom', 1350, 15, 30, 50)
    createCannon('top', 1000, 1500, 30, 30)
   
  
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
