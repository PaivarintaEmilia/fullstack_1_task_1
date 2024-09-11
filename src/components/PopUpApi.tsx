import React, { useRef, useEffect } from 'react';

const PopUpApi: React.FC = () => {
    // useRef on hookki, jota käytetään liittämään attribuutti DOM-elementtiin.
    const popoverRef = useRef<HTMLDialogElement | null>(null);

    // Käytetään useEffectiä, jotta dialogiin voidaan määrittää attribuutti
    useEffect(() => {
        if (popoverRef.current) {
            popoverRef.current.setAttribute('popover', '');  // Attribuutti tulee asettaa suoraan DOM-elementille (dialog)
        }
    }, []); // Tyhjä riippuvuuslista, koska tarkoitus suorittaa vain kerran. 

    // Kyseessä on nuolifunktio, jossa tallennetaan tulos muuttujaan. 
    const openPopover = () => {
        popoverRef.current?.showPopover();  // Näytetään popUp. ? määrittää, että vaan jos popoverRef.current ei ole null tai undefined
    };

    const closePopover = () => {
        popoverRef.current?.hidePopover();  // Suljetaan popUp. 
    };

    return (
        <div>
            <button onClick={openPopover}>Open Popover</button>
            <dialog ref={popoverRef}>
                <p>This is a popover!</p>
                <button onClick={closePopover}>Close</button>
            </dialog>
        </div>
    );
};

export default PopUpApi;
