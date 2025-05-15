import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ForestIllustration: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Faster animation by adjusting the transform values
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

    // Smooth mouse movement values
    const smoothX = useSpring(0, { damping: 50, stiffness: 400 });
    const smoothY = useSpring(0, { damping: 50, stiffness: 400 });

    // Handle mouse movement
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        // Calculate relative mouse position (-1 to 1)
        const x = ((clientX - left) / width - 0.5) * 2;
        const y = ((clientY - top) / height - 0.5) * 2;

        smoothX.set(x * 10); // Reduced movement intensity
        smoothY.set(y * 10);
        setMousePosition({ x, y });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 2064;
        canvas.height = 1402;

        const image = new Image();
        imageRef.current = image;
        image.src = '/forest-illustration.jpg';

        image.onload = () => {
            const drawImage = () => {
                if (!ctx || !canvas) return;

                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw the image
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                // Apply cyan tint effect
                ctx.globalCompositeOperation = 'color';
                ctx.fillStyle = '#7CFFE9';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Reset composite operation
                ctx.globalCompositeOperation = 'source-over';

                // Add subtle glow to the center sun
                const centerX = canvas.width / 2;
                const centerY = canvas.height * 0.4;
                const gradient = ctx.createRadialGradient(
                    centerX, centerY, 0,
                    centerX, centerY, 200
                );
                gradient.addColorStop(0, 'rgba(124, 255, 233, 0.3)');
                gradient.addColorStop(1, 'rgba(124, 255, 233, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            };

            // Initial draw
            drawImage();

            // Add subtle animation with increased speed
            let frame = 0;
            const animate = () => {
                frame += 1.0;

                // Add very subtle movement
                canvas.style.transform = `translateY(${Math.sin(frame * 0.03) * 2}px)`;

                requestAnimationFrame(animate);
            };

            animate();
        };

        return () => {
            imageRef.current = null;
        };
    }, []); // Removed mousePosition dependency

    return (
        <motion.div
            ref={containerRef}
            className="overflow-hidden relative w-full"
            style={{
                opacity,
                scale,
                height: 'calc(100vh - 80px)',
            }}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="flex absolute inset-0 justify-center items-center"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
            >
                <canvas
                    ref={canvasRef}
                    className="object-cover w-full h-full"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        willChange: 'transform',
                    }}
                />
            </motion.div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,18,51,0) 0%, rgba(0,18,51,0) 70%, rgba(0,18,51,1) 100%)',
                }}
            />
        </motion.div>
    );
};

export default ForestIllustration; 