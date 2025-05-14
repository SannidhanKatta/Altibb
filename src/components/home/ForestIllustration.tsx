import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ForestIllustration: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.98, 1]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions to match XDC's implementation
        canvas.width = 2064;
        canvas.height = 1402;

        // Create and load the image
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
                const centerY = canvas.height * 0.4; // Adjust based on sun position
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

            // Add subtle animation
            let frame = 0;
            const animate = () => {
                frame += 0.5;

                // Add very subtle movement
                canvas.style.transform = `translateY(${Math.sin(frame * 0.02) * 2}px)`;

                requestAnimationFrame(animate);
            };

            animate();
        };

        return () => {
            // Cleanup if needed
            imageRef.current = null;
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="overflow-hidden relative w-full"
            style={{
                opacity,
                scale,
                height: 'calc(100vh - 80px)',
            }}
        >
            <div className="flex absolute inset-0 justify-center items-center">
                <canvas
                    ref={canvasRef}
                    className="object-cover w-full h-full"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
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