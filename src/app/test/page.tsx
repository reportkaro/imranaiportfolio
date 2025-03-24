"use client";

import { useEffect, useRef } from 'react';

const TestBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 400;
    
    // Create bubbles
    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 10,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`
    }));
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background for visibility
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw bubbles
      bubbles.forEach(bubble => {
        // Move
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        // Wrap around
        if (bubble.x < 0) bubble.x = canvas.width;
        if (bubble.x > canvas.width) bubble.x = 0;
        if (bubble.y < 0) bubble.y = canvas.height;
        if (bubble.y > canvas.height) bubble.y = 0;
        
        // Draw
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bubble Test Page</h1>
      <div className="border border-gray-300 h-[400px] relative">
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default TestBubbles; 