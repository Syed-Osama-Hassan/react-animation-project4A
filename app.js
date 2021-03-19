var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  var house1 = document.getElementById('house');
  
  var house1Movement = house1.animate(
  sceneryFrames, sceneryTimingBackground);
  house1Movement.currentTime = house1Movement.effect.getTiming().duration / 2;
  
  var cloud = document.getElementById('cloud');
  
  var cloud1Movement = cloud.animate(
  sceneryFrames, sceneryTimingBackground);

  setInterval( function() {
    /* Set decay */
    if (house1Movement.playbackRate > .4) {
        house1Movement.playbackRate *= .9;    
    } 
  }, 3000);
  
  var goFaster = function() {
    /* But you can speed them up by giving the screen a click or a tap. */
    house1Movement.playbackRate *= 1.1;
  }
  
  document.addEventListener("click", goFaster);