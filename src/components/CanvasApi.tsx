import React, { useRef, useEffect } from 'react';

const CanvasApi: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;        
        const contextNew = canvas.getContext('2d');
        if (!contextNew) return;

        // Suorakulmio
        context.fillStyle = 'blue';
        context.fillRect(40, 40, 150, 100);

        // Ympyrä
        contextNew.beginPath();
        contextNew.arc(100, 75, 50, 0, Math.PI * 2); 
        contextNew.stroke(); 
    }, []);

    return <canvas ref={canvasRef} width={380} height={200} />;
};

export default CanvasApi;
