import React from 'react';

function Translate() {
    const [morse, setMorse] = React.useState('');
    const [translation, setTranslation] = React.useState('');

    const morseToEnglish = (morseCode) => {
        const morseCodeMap = {
            '12': 'A',
            '2111': 'B',
            '2121': 'C',
            '211': 'D',
            '1': 'E',
            '1121': 'F',
            '221': 'G',
            '1111': 'H',
            '11': 'I',
            '1222': 'J',
            '212': 'K',
            '1211': 'L',
            '22': 'M',
            '21': 'N',
            '222': 'O',
            '1221': 'P',
            '2212': 'Q',
            '121': 'R',
            '111': 'S',
            '2': 'T',
            '112': 'U',
            '1112': 'V',
            '122': 'W',
            '2112': 'X',
            '2122': 'Y',
            '2211': 'Z',
            '12222': '1',
            '11222': '2',
            '11122': '3',
            '11112': '4',
            '11111': '5',
            '21111': '6',
            '22111': '7',
            '22211': '8',
            '22221': '9',
            '22222': '0',
            '3': '',
            '33': ' ',
        };

        // Split the Morse code input by spaces
        const morseWords = morseCode.trim().split(' ');

        // Map each Morse code word to its English equivalent
        const englishWords = morseWords.map((morseWord) => {
            // Split the Morse code word into individual Morse code characters
            const morseChars = morseWord.split('');

            // Map each Morse code character to its English equivalent
            const englishChars = morseChars.map((morseChar) => {
                return morseCodeMap[morseChar] || '?'; // Use '?' for unknown characters
            });

            // Join the English characters to form an English word
            return englishChars.join('');
        });

        // Join the English words to form the complete translation
        return englishWords.join(' ');
    };

    const handleMorseChange = (event) => {
        const inputMorse = event.target.value;
        setMorse(inputMorse);
        const translatedText = morseToEnglish(inputMorse);
        setTranslation(translatedText);
    };

    const handleTranslationChange = (event) => {
        setTranslation(event.target.value);
    };

    return (
        <div>
            <h1>Morse Code Translator</h1>
            <div>
                <textarea
                    value={morse}
                    onChange={handleMorseChange}
                    placeholder="Enter Morse code to translate"
                    rows={5}
                    cols={50}
                />
            </div>
            <div>
                <textarea
                    value={translation}
                    onChange={handleTranslationChange}
                    placeholder="Translation"
                    rows={5}
                    cols={50}
                />
            </div>
        </div>
    );
};

export default Translate;
