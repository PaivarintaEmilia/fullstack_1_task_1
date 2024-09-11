import React, { useEffect } from 'react';


const HighlightApi: React.FC = () => {
    useEffect(() => {
        // Hae kaikki p-elementit
        const paragraphs = document.querySelectorAll('p');

        // Muunna NodeList HTMLCollection:ksi
        paragraphs.forEach((pElement: HTMLElement) => {
            const text = pElement.textContent || '';

            // KOKO LAUSEEN HIGHLIGHT
            // Jos teksti sisältää sanan example niin suoritetaan tämä
            if (text.includes('example')) {
                // Aseta tyyli
                pElement.style.backgroundColor = 'red';
                pElement.style.color = 'white';
            }

            // VAIN YHDEN SANAN HIGLIGHT
            // Luo tyhjä taulukko sanoille (huom taas typescriptin määrittely)
            let words: string[] = [];

            // Pilko lause sanoiksi ja lisää taulukkoon
            const splitWords = text.split(/\s+/);
            words = words.concat(splitWords);

            // Käy läpi words-taulukko ja lisää span-tagi "for"-sanan ympärille
            const highlightedText = words.map((word) => {
                if (word === 'for') {
                    // Luo span-elementti ja aseta tyyli
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.style.backgroundColor = 'blue';
                    span.style.color = 'white';

                    return span.outerHTML; // Palautetaan span-elementti HTML-muodossa
                }
                return word; // Muut sanat säilytetään sellaisenaan
            }).join(' '); // Yhdistä sanat takaisin lauseeksi

            // Päivitä p-elementin sisältö uudella HTML:llä
            pElement.innerHTML = highlightedText;
        });
    }, []); // Tyhjä koska suoritetaan vaan kerran. useEffectin ominaisuus. 

    return (
        <div>
            <p>This is an example paragraph.</p>
            <h3>Highlight only spesific word:</h3>
            <p>Another paragraph for demonstration.</p>
            <h3>Combination:</h3>
            <p>This is a example with the word for in it.</p>
        </div>
    );
};

export default HighlightApi;
