
import React, { useEffect, useRef } from 'react';

const CapitalArchitecture: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);
    ctx.scale(2, 2);

    const particles: any[] = [];
    const particleCount = 100;
    const nodes: any[] = [];
    const alphaAccentColor = '#16D12E';
    const baseColor = '#111111';

    class Node {
      x: number;
      y: number;
      label: string;
      value: string;
      originX: number;
      originY: number;

      constructor(x: number, y: number, label: string, value: string) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.label = label;
        this.value = value;
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          this.x += (this.originX - dx * 0.15 - this.x) * 0.1;
          this.y += (this.originY - dy * 0.15 - this.y) * 0.1;
        } else {
          this.x += (this.originX - this.x) * 0.05;
          this.y += (this.originY - this.y) * 0.05;
        }
      }

      draw() {
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 7px Inter';
        ctx.fillText(this.label, this.x + 10, this.y - 4);
        ctx.fillStyle = alphaAccentColor;
        ctx.fillText(this.value, this.x + 10, this.y + 8);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle outline for node
        ctx.strokeStyle = '#f0f0f0';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    const nodeData = [
      { l: "EQUITY STRAT", v: "+18.2%" },
      { l: "PRIVATE DEBT", v: "12.5% YTM" },
      { l: "GLOBAL MACRO", v: "HEDGED" },
      { l: "VENTURE", v: "ALPHA" }
    ];

    nodeData.forEach((d, i) => {
      nodes.push(new Node(
        (width / 2) * (0.2 + (i % 2) * 0.5),
        (height / 2) * (0.2 + Math.floor(i / 2) * 0.5),
        d.l, d.v
      ));
    });

    class CapitalFlow {
      t: number;
      speed: number;
      offset: number;
      size: number;
      isAlpha: boolean;

      constructor() {
        this.init();
      }

      init() {
        this.t = 0;
        this.speed = 0.0005 + Math.random() * 0.0015;
        this.offset = (Math.random() - 0.5) * 120;
        this.size = Math.random() * 1.2 + 0.5;
        this.isAlpha = Math.random() > 0.85;
      }

      update() {
        this.t += this.speed;
        if (this.t > 1) this.init();
      }

      draw(p0: any, p1: any, p2: any) {
        // Quadratic Bezier
        const x = (1 - this.t) * (1 - this.t) * p0.x + 2 * (1 - this.t) * this.t * p1.x + this.t * this.t * p2.x;
        const y = (1 - this.t) * (1 - this.t) * p0.y + 2 * (1 - this.t) * this.t * p1.y + this.t * this.t * p2.y;

        const posX = x + (Math.sin(this.t * Math.PI) * this.offset * 0.1);
        const posY = y + this.offset;

        ctx.globalAlpha = Math.min(this.t * 3, 1 - this.t) * 0.8;
        ctx.fillStyle = this.isAlpha && this.t > 0.7 ? alphaAccentColor : '#d1d1d1';
        
        ctx.beginPath();
        if (this.isAlpha && this.t > 0.85) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = alphaAccentColor;
          ctx.arc(posX, posY, this.size * 2, 0, Math.PI * 2);
        } else {
          ctx.shadowBlur = 0;
          ctx.rect(posX - this.size, posY - this.size, this.size * 2, this.size * 2);
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new CapitalFlow());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const innerW = width / 2;
      const innerH = height / 2;

      // Base Growth Trajectory Points
      const p0 = { x: innerW * 0.1, y: innerH * 0.85 };
      const p1 = { x: innerW * 0.45, y: innerH * 0.75 };
      const p2 = { x: innerW * 0.9, y: innerH * 0.15 };

      // High-End Perspective Grid
      ctx.strokeStyle = '#f5f5f5';
      ctx.lineWidth = 0.5;
      const horizonY = innerH * 0.3;
      for (let i = 0; i <= 20; i++) {
        // Perspective V-lines
        ctx.beginPath();
        ctx.moveTo(innerW * 0.05 + (i * (innerW * 0.9 / 20)), innerH * 0.95);
        ctx.lineTo(innerW * 0.5 + ((i - 10) * 15), horizonY);
        ctx.stroke();

        // Perspective H-lines
        const hProgress = Math.pow(i / 20, 2.5);
        const hY = innerH * 0.95 - (hProgress * (innerH * 0.7));
        ctx.beginPath();
        ctx.moveTo(innerW * 0.05, hY);
        ctx.lineTo(innerW * 0.95, hY);
        ctx.stroke();
      }

      // Draw active trajectory path (dotted)
      ctx.setLineDash([2, 10]);
      ctx.strokeStyle = '#e0e0e0';
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
        
        // Link node to mouse if close
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = alphaAccentColor;
          ctx.globalAlpha = (120 - dist) / 400;
          ctx.lineWidth = 0.5;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      // Capital Flow Particles
      particles.forEach(p => {
        p.update();
        p.draw(p0, p1, p2);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * (width / 2 / rect.width),
        y: (e.clientY - rect.top) * (height / 2 / rect.height)
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      width = (canvas.width = canvas.offsetWidth * 2);
      height = (canvas.height = canvas.offsetHeight * 2);
      ctx.scale(2, 2);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-white cursor-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Structural Framing */}
      <div className="absolute inset-0 pointer-events-none border border-[#e9eaeb] bg-gradient-to-tr from-black/[0.02] to-transparent"></div>
      
      {/* UI Elements inside Canvas */}
      <div className="absolute top-8 left-8 flex flex-col items-start gap-1">
        <div className="w-10 h-[1px] bg-[#111111]"></div>
        <span className="text-[7px] font-bold tracking-[0.5em] uppercase text-gray-300">Strategy Matrix V2.0</span>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1">
        <span className="text-[7px] font-bold tracking-[0.2em] uppercase text-gray-300">Alpha Coefficient: 1.42</span>
        <div className="w-16 h-[2px] bg-[#16D12E]"></div>
      </div>
    </div>
  );
};

export default CapitalArchitecture;
