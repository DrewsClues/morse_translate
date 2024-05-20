import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import '../css-sheets/translation-sheet.css';


const Translate2 = () => {
    const [morse, setMorse] = useState('');
    const [translation, setTranslation] = useState('');
    const dotDuration = 200;
    const dashDuration = 400;


     // Function for Morse Dot Sound
    const playMorseDotSound = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        setTimeout(() => oscillator.stop(), dotDuration);
    };

     // Function for Morse Dash Sound
     const playMorseDashSound = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        setTimeout(() => oscillator.stop(), dotDuration);
    };

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
            '121212': '.',
            '112211': '?',
            '212122': '!',
            '221122': ',',
            '21121': '/',
            '112212': '-',
            '122221': `'`,
            '3': '',
            '33': ' ',
        };
        //Split words by 33
        const morseWords = morseCode.trim().split('33'); 
        const englishWords = morseWords.map((morseWord) => {
        //Delineate different characters
            const morseChars = morseWord.split('3'); 
            const englishChars = morseChars.map((morseChar) => {
                return morseCodeMap[morseChar] || '?';
            });
            return englishChars.join('');
        });

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

    const handleKeyDown = (event) => {
        
        if (event.key === 'Enter') {
          event.preventDefault(); 
          if ('speechSynthesis' in window) {
            // Create a new Speech
            const speech = new SpeechSynthesisUtterance(translation);
            // Use the default voice
            speechSynthesis.speak(speech);
          } else {
            alert('Text-to-speech is not supported in your browser.');
          }
        }

        if (event.key === '.'){
            event.preventDefault();
            setMorse(morse.slice(0, -1));
        }

        if (event.key === '1') {
            playMorseDotSound();
          }
      
        if (event.key === '2') {
        playMorseDashSound();
        }


        
      };

    return (
        <div>
            <h1>Morse Code Translator</h1>
            <Accordion defaultActiveKey={['0']} className="Accordion-style">
                <Accordion.Item eventKey="0" className="Accordion-item" >
                    <Accordion.Header>Morse Code Key</Accordion.Header>
                    <Accordion.Body>
                    <table >
                            <tr>
                                <td className="character-td">A:</td>
                                <td className="number-td">12</td>

                                <td className="character-td">B:</td>
                                <td className="number-td">2111</td>

                                <td className="character-td">C:</td>
                                <td className="number-td">2121</td>

                                <td className="character-td">D:</td>
                                <td className="number-td">211</td>

                                <td className="character-td">E:</td>
                                <td className="number-td">1</td>

                                <td className="character-td">F:</td>
                                <td className="number-td">1121</td>
                            </tr>

                            <tr>
                                <td className="character-td">G:</td>
                                <td className="number-td">221</td>

                                <td className="character-td">H:</td>
                                <td className="number-td">1111</td>

                                <td className="character-td">I:</td>
                                <td className="number-td">11</td>

                                <td className="character-td">J:</td>
                                <td className="number-td">1222</td>

                                <td className="character-td">K:</td>
                                <td className="number-td">212</td>

                                <td className="character-td">L:</td>
                                <td className="number-td">1211</td>
                            </tr>

                            <tr>
                                <td className="character-td">M:</td>
                                <td className="number-td">22</td>

                                <td className="character-td">N:</td>
                                <td className="number-td">21</td>

                                <td className="character-td">O:</td>
                                <td className="number-td">222</td>

                                <td className="character-td">P:</td>
                                <td className="number-td">1221</td>

                                <td className="character-td">Q:</td>
                                <td className="number-td">2212</td>

                                <td className="character-td">R:</td>
                                <td className="number-td">121</td>
                            </tr>

                            <tr>
                                <td className="character-td">S:</td>
                                <td className="number-td">111</td>

                                <td className="character-td">T:</td>
                                <td className="number-td">2</td>

                                <td className="character-td">U:</td>
                                <td className="number-td">112</td>

                                <td className="character-td">V:</td>
                                <td className="number-td">1112</td>

                                <td className="character-td">W:</td>
                                <td className="number-td">122</td>

                                <td className="character-td">X:</td>
                                <td className="number-td">2112</td>
                            </tr>

                            <tr>
                                <td className="character-td">Y:</td>
                                <td className="number-td">2122</td>

                                <td className="character-td">Z:</td>
                                <td className="number-td">2211</td>

                                <td className="character-td">1:</td>
                                <td className="number-td">12222</td>

                                <td className="character-td">2:</td>
                                <td className="number-td">11222</td>

                                <td className="character-td">3:</td>
                                <td className="number-td">11122</td>

                                <td className="character-td">4:</td>
                                <td className="number-td">11112</td>
                            </tr>

                            <tr>
                                <td className="character-td">5:</td>
                                <td className="number-td">11111</td>

                                <td className="character-td">6:</td>
                                <td className="number-td">21111</td>

                                <td className="character-td">7:</td>
                                <td className="number-td">22111</td>

                                <td className="character-td">8:</td>
                                <td className="number-td">22211</td>

                                <td className="character-td">9:</td>
                                <td className="number-td">22221</td>

                                <td className="character-td">0:</td>
                                <td className="number-td">22222</td>
                            </tr>

                            <tr>
                                <td className="character-td">.:</td>
                                <td className="number-td">121212</td>

                                <td className="character-td">?:</td>
                                <td className="number-td">112211</td>

                                <td className="character-td">!:</td>
                                <td className="number-td">212122</td>

                                <td className="character-td">,:</td>
                                <td className="number-td">221122</td>

                                <td className="character-td">/:</td>
                                <td className="number-td">21121</td>

                                <td className="character-td">-:</td>
                                <td className="number-td">112212</td>
                            </tr>

                            <tr> 
                            <td className="character-td">'</td>
                                <td className="number-td">122221:</td>
                            </tr>

                            <tr>
                                <td className="character-td">Break:</td>
                                <td className="number-td">3</td>

                                <td className="character-td">Speech:</td>
                                <td className="number-td">Enter</td>
                            </tr>

                            <tr>
                                
                                <td className="character-td">Space:</td>
                                <td className="number-td">33</td>

                                <td className="character-td">Back:</td>
                                <td className="number-td">Del</td>
                            </tr>

                           
                        
                    </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                <textarea
                    value={morse}
                    className='translation_area'
                    onChange={handleMorseChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter Morse code to translate 1 =. 2 =-, 3 respresents a break between characters, and 33 = space."
                    rows={5}
                    cols={50}
                />
            </div>
            <div>
                <textarea
                    value={translation}
                    className='translation_area'
                    onChange={handleTranslationChange}
                    placeholder="Translation"
                    rows={5}
                    cols={50}
                    readOnly 
                />
            </div>
        </div>
    );
};

export default Translate2;
