"use client";

import React, { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  hoverScale?: number;
  rotateIntensity?: number;
  glareOpacity?: number;
}

export function Card3D({ 
  children, 
  className,
  depth = 1, 
  hoverScale = 1.05,
  rotateIntensity = 10,
  glareOpacity = 0.1,
}: Card3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate center of card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to card center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const rotateYValue = (mouseX / (rect.width / 2)) * rotateIntensity;
    const rotateXValue = -((mouseY / (rect.height / 2)) * rotateIntensity);
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Update glare position
    const glareX = (mouseX / rect.width) + 0.5;
    const glareY = (mouseY / rect.height) + 0.5;
    setGlarePosition({ x: glareX, y: glareY });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? hoverScale : 1,
          z: isHovered ? depth * 8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Card className="relative w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
          {children}
          
          {/* Glare effect */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x * 100}% ${glarePosition.y * 100}%, rgba(255, 255, 255, ${glareOpacity}) 0%, rgba(255, 255, 255, 0) 80%)`,
                transform: "translateZ(1px)",
              }}
            />
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Re-export card components for convenience
export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
