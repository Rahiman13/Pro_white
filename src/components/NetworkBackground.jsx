import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas and start loading sequence
    const initCanvas = () => {
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
      setIsCanvasReady(true);
    };

    // Initialize nodes with a smooth transition
    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < 50; i++) {
        nodes.push(new Node());
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 300); // Smooth transition delay
    };

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.pulseRadius = 0;
        this.isPulsing = false;
        this.pulseAlpha = 1;
        this.opacity = 0; // Start with 0 opacity
        this.targetOpacity = 0.8; // Target opacity
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Smooth opacity transition
        this.opacity += (this.targetOpacity - this.opacity) * 0.05;

        if (this.isPulsing) {
          this.pulseRadius += 1;
          this.pulseAlpha -= 0.02;
          if (this.pulseAlpha <= 0) this.isPulsing = false;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${this.opacity})`;
        ctx.fill();

        if (this.isPulsing) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(147, 197, 253, ${this.pulseAlpha * this.opacity})`;
          ctx.stroke();
        }
      }

      pulse() {
        if (!this.isPulsing) {
          this.isPulsing = true;
          this.pulseRadius = 0;
          this.pulseAlpha = 1;
        }
      }
    }

    const drawConnections = () => {
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            const alpha = (1 - distance / 150) * Math.min(node1.opacity, node2.opacity);
            ctx.strokeStyle = `rgba(147, 197, 253, ${alpha * 0.5})`;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Sequential initialization
    initCanvas();
    setTimeout(() => {
      initNodes();
      animate();
    }, 100);

    // Pulse effect
    const pulseInterval = setInterval(() => {
      if (!isLoading && nodes.length > 0) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.pulse();
      }
    }, 2000);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
        style={{ 
          opacity: isCanvasReady ? 1 : 0,
          background: 'linear-gradient(to bottom, #ffffff, #f0f7ff)'
        }}
      />
    </motion.div>
  );
};

export default NetworkBackground; 