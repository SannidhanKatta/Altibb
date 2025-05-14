import React, { useEffect, useRef } from 'react';

interface BackgroundIllustrationProps {
    className?: string;
}

const BackgroundIllustration: React.FC<BackgroundIllustrationProps> = ({ className = '' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const scale = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            ctx.scale(scale, scale);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Draw network-like pattern
        const drawPattern = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#7CFFE9';
            ctx.globalAlpha = 0.1;

            // Create a grid of points
            const spacing = 50;
            const points = [];
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    points.push({
                        x: x + (Math.random() - 0.5) * spacing,
                        y: y + (Math.random() - 0.5) * spacing,
                    });
                }
            }

            // Draw connections between nearby points
            ctx.beginPath();
            points.forEach((point) => {
                points.forEach((otherPoint) => {
                    const distance = Math.sqrt(
                        Math.pow(point.x - otherPoint.x, 2) + Math.pow(point.y - otherPoint.y, 2)
                    );
                    if (distance < spacing * 1.5) {
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(otherPoint.x, otherPoint.y);
                    }
                });
            });
            ctx.stroke();

            // Draw points
            points.forEach((point) => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        drawPattern();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full ${className}`}
            style={{ background: 'linear-gradient(to bottom, #001233, #002466)' }}
        />
    );
};

export default BackgroundIllustration; 