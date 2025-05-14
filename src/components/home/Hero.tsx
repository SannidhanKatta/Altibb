import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Node structure for blockchain visualization
    class Node {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;

      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = '#0f5de2';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius || this.x > canvas.width - this.radius) {
          this.vx = -this.vx;
        }

        if (this.y < this.radius || this.y > canvas.height - this.radius) {
          this.vy = -this.vy;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create nodes
    const nodeCount = 20;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 2;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      nodes.push(new Node(x, y, radius));
    }

    const drawConnections = () => {
      if (!ctx) return;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(15, 93, 226, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      drawConnections();

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="overflow-hidden relative pt-16">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 z-0 w-full h-full"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/60 to-white/95"></div>
      
      <Container className="relative z-20 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Enterprise-Grade <span className="text-blue-600">Blockchain</span> for Global Trade
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl md:mb-10">
            XDC Network delivers a scalable, secure, and interoperable 
            blockchain solution with near-zero gas fees and lightning-fast transaction finality.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Explore Ecosystem</Button>
          </div>
          
          <div className="flex flex-col items-center mt-16">
            <p className="mb-4 text-sm font-medium text-gray-600">Trusted by leading organizations</p>
            <div className="grid grid-cols-2 gap-8 items-center md:grid-cols-4">
              <div className="h-8 bg-gray-200 rounded-md"></div>
              <div className="h-8 bg-gray-200 rounded-md"></div>
              <div className="h-8 bg-gray-200 rounded-md"></div>
              <div className="h-8 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;