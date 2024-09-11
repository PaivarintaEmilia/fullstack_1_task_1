import React, { useRef, useEffect } from 'react';

const CanvasApi: React.FC = () => {

    // Käytetään useRef hookkia, jotta saadaan asetettua referenssi canvas-elementille
    // Syntaksi ilman typescriptiä const myRef = useRef(initialValue);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        // Jos canvasissa ei ole sisältöä niin ei palauteta mitään näytettävää
        if (!canvas) return;

        // luodaan muuttuja context, jotta saadaan luotua suorakulmio
        const context = canvas.getContext('2d');
        // Jos cotext on null niin ei palauteta mitään
        if (!context) return;
        // luodaan muuttuja contextNew, jotta saadaan luotua kolmio        
        const contextNew = canvas.getContext('2d');
        // Jos cotextNew on null niin ei palauteta mitään
        if (!contextNew) return;

        // Suorakulmio
        context.fillStyle = 'blue';
        context.fillRect(40, 40, 150, 100);

        // Ympyrä
        contextNew.beginPath();
        contextNew.arc(100, 75, 50, 0, Math.PI * 2); 
        contextNew.stroke(); 
    }, []);

    // Palautetaan canvas ja määritetään sen koko
    return <canvas ref={canvasRef} width={380} height={200} />;
};

export default CanvasApi;
