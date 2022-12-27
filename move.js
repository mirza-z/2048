function swipeDetector(element) {
    let startX;
    let startY;
    let endX;
    let endY;
  
    element.addEventListener("touchstart", function(event) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    });
  
    element.addEventListener("touchmove", function(event) {
      endX = event.touches[0].clientX;
      endY = event.touches[0].clientY;
    });
  
    element.addEventListener("touchend", function(event) {
      // Calculate the swipe distance and direction
      const distX = endX - startX;
      const distY = endY - startY;
      const absX = Math.abs(distX);
      const absY = Math.abs(distY);
      const direction = absX > absY ? (distX < 0 ? "left" : "right") : (distY < 0 ? "up" : "down");
  
      // Call the function if the swipe meets certain conditions
      if (absX > 50 || absY > 50) {
        onSwipe(direction);
      }
    });
  }
  
  // Attach the swipe detector to an element
  const element = document.getElementById("element");
  swipeDetector(element);