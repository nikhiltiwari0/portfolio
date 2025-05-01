import React, { useEffect, useRef } from 'react';

const AnimatedGradientMesh = ({ theme }) => {
  const canvasRef = useRef(null);
  
  // Theme-based color configurations
  const colors = {
    dark: {
      primary: ['#e94560', '#0f3460', '#16213e'],
      background: 'rgba(26, 26, 46, 0.2)'
    },
    light: {
      primary: ['#3d5af1', '#a6e3e9', '#e0aaff'],
      background: 'rgba(245, 245, 245, 0.2)'
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();
    
    // Create gradient mesh nodes
    const cols = 12;
    const rows = 8;
    const nodes = [];
    
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        nodes.push({
          x: (canvas.width * i) / cols,
          y: (canvas.height * j) / rows,
          originX: (canvas.width * i) / cols,
          originY: (canvas.height * j) / rows,
          color: colors[theme].primary[Math.floor(Math.random() * colors[theme].primary.length)],
          offsetX: 0,
          offsetY: 0,
          amplitude: Math.random() * 20 + 10,
          speed: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    }
    
    // Draw triangles between nodes to create a mesh
    const drawMesh = () => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = j * (cols + 1) + i;
          const topLeft = nodes[index];
          const topRight = nodes[index + 1];
          const bottomLeft = nodes[index + cols + 1];
          const bottomRight = nodes[index + cols + 2];
          
          // Generate two triangles for each grid cell
          drawTriangle(ctx, topLeft, topRight, bottomLeft);
          drawTriangle(ctx, bottomLeft, topRight, bottomRight);
        }
      }
    };
    
    // Draw a single triangle with gradient fill
    const drawTriangle = (ctx, node1, node2, node3) => {
      const gradient = ctx.createLinearGradient(node1.x, node1.y, node3.x, node3.y);
      gradient.addColorStop(0, node1.color);
      gradient.addColorStop(0.5, node2.color);
      gradient.addColorStop(1, node3.color);
      
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.lineTo(node3.x, node3.y);
      ctx.closePath();
      
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.4;
      ctx.fill();
    };
    
    // Animate nodes
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a soft gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      bgGradient.addColorStop(0, colors[theme].background);
      bgGradient.addColorStop(1, theme === 'dark' ? 'rgba(10, 10, 20, 0.3)' : 'rgba(255, 255, 255, 0.3)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions with wave effect
      time += 0.01;
      nodes.forEach(node => {
        node.offsetX = Math.sin(time * node.speed + node.phase) * node.amplitude;
        node.offsetY = Math.cos(time * node.speed + node.phase) * node.amplitude;
        node.x = node.originX + node.offsetX;
        node.y = node.originY + node.offsetY;
      });
      
      drawMesh();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.8
      }}
    />
  );
};

export default AnimatedGradientMesh;