  const container = document.getElementById('bubble-container');

  function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 40 + 10; // Between 10px and 50px
    const duration = Math.random() * 8 + 5; // Between 5s and 13s
    const left = Math.random() * 100; // 0% to 100% across screen
    const delay = Math.random() * 5;

    bubble.classList.add('bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}vw`;
    bubble.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
      container.removeChild(bubble);
    }, (duration + delay) * 1000);
  }

  // Create bubbles at intervals
  setInterval(createBubble, 300);