import React, { useRef, useEffect } from 'react';
import "../../public/styles/main.css";

const PopUpApi: React.FC = () => {
    // useRef on hookki, jota käytetään liittämään attribuutti DOM-elementtiin.
    // Palauttaa olion, jolla on ominaisuus current
    const popoverRef = useRef<HTMLDialogElement | null>(null);

    // Käytetään useEffectiä, jotta dialogiin voidaan määrittää attribuutti
    useEffect(() => {
        if (popoverRef.current) {
            popoverRef.current.setAttribute('popover', '');  // Attribuutti tulee asettaa suoraan DOM-elementille (dialog)
        }
    }, []); // Tyhjä riippuvuuslista, koska tarkoitus suorittaa vain kerran. 

    // Kyseessä on nuolifunktio, jossa tallennetaan tulos muuttujaan. 
    const openPopover = () => {
        console.log("Open: " + popoverRef.current);
        popoverRef.current?.showPopover();  // Näytetään popUp. ? määrittää, että vaan jos popoverRef.current ei ole null tai undefined
    };

    const closePopover = () => {
        console.log("Close: " + popoverRef.current);
        popoverRef.current?.hidePopover();  // Suljetaan popUp. 
    };


    return (
        <div>
            <button onClick={openPopover}>Open Popover</button>
            <dialog ref={popoverRef} className='popupContainer'>
                <p>This is a popover!</p>
                <button onClick={closePopover}>Close</button>
            </dialog>
        </div>
    );
};

export default PopUpApi;
