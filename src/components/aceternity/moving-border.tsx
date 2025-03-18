import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderRadius?: string;
  className?: string;
  backgroundClass?: string;
  as?: React.ElementType;
  duration?: number;
  children?: React.ReactNode;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
  borderRadius = "rounded-full",
  className,
  backgroundClass = "bg-gradient-to-r from-blue-600 to-indigo-600",
  as: Component = "div",
  duration = 2000,
  children,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Simulate movement when component mounts for demo purposes
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    const interval = setInterval(() => {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      setPosition({ x, y });
      setOpacity(1);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden", 
        borderRadius, 
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity",
          backgroundClass
        )}
        style={{
          opacity: 0.2,
        }}
      />
      <div
        className={cn(
          "absolute inset-[2px] z-10",
          borderRadius,
          "bg-white dark:bg-gray-950"
        )}
      />
      <div
        className={cn(
          "absolute left-0 top-0 h-40 w-40 translate-x-[-50%] translate-y-[-50%] rounded-full",
          backgroundClass
        )}
        style={{
          left: position.x,
          top: position.y,
          opacity,
          transition: "opacity 0.5s",
          filter: "blur(40px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </Component>
  );
};
