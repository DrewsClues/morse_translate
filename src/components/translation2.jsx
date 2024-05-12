import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


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
            <Accordion defaultActiveKey={['0']} style={{ width: '600px', margin: 'auto', 'margin-bottom': '4%' }}>
                <Accordion.Item eventKey="0" style={{ width: '600px' }}>
                    <Accordion.Header>Morse Code Key</Accordion.Header>
                    <Accordion.Body>
                    <table >
                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>A:</td>
                                <td style={{ padding: '2px'}}>12</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>B:</td>
                                <td style={{ padding: '2px'}}>2111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>C:</td>
                                <td style={{ padding: '2px'}}>2121</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>D:</td>
                                <td style={{ padding: '2px'}}>211</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>E:</td>
                                <td style={{ padding: '2px'}}>1</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>F:</td>
                                <td style={{ padding: '2px'}}>1121</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>G:</td>
                                <td style={{ padding: '2px'}}>221</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>H:</td>
                                <td style={{ padding: '2px'}}>1111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>I:</td>
                                <td style={{ padding: '2px'}}>11</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>J:</td>
                                <td style={{ padding: '2px'}}>1222</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>K:</td>
                                <td style={{ padding: '2px'}}>212</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>L:</td>
                                <td style={{ padding: '2px'}}>1211</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>M:</td>
                                <td style={{ padding: '2px'}}>22</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>N:</td>
                                <td style={{ padding: '2px'}}>21</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>O:</td>
                                <td style={{ padding: '2px'}}>222</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>P:</td>
                                <td style={{ padding: '2px'}}>1221</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>Q:</td>
                                <td style={{ padding: '2px'}}>2212</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>R:</td>
                                <td style={{ padding: '2px'}}>121</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>S:</td>
                                <td style={{ padding: '2px'}}>111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>T:</td>
                                <td style={{ padding: '2px'}}>2</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>U:</td>
                                <td style={{ padding: '2px'}}>112</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>V:</td>
                                <td style={{ padding: '2px'}}>1112</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>W:</td>
                                <td style={{ padding: '2px'}}>122</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>X:</td>
                                <td style={{ padding: '2px'}}>2112</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>Y:</td>
                                <td style={{ padding: '2px'}}>2122</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>Z:</td>
                                <td style={{ padding: '2px'}}>2211</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>1:</td>
                                <td style={{ padding: '2px'}}>12222</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>2:</td>
                                <td style={{ padding: '2px'}}>11222</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>3:</td>
                                <td style={{ padding: '2px'}}>11122</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>4:</td>
                                <td style={{ padding: '2px'}}>11112</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>5:</td>
                                <td style={{ padding: '2px'}}>11111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>6:</td>
                                <td style={{ padding: '2px'}}>21111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>7:</td>
                                <td style={{ padding: '2px'}}>22111</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>8:</td>
                                <td style={{ padding: '2px'}}>22211</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>9:</td>
                                <td style={{ padding: '2px'}}>22221</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>0:</td>
                                <td style={{ padding: '2px'}}>22222</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>.:</td>
                                <td style={{ padding: '2px'}}>121212</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>?:</td>
                                <td style={{ padding: '2px'}}>112211</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>!:</td>
                                <td style={{ padding: '2px'}}>212122</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>,:</td>
                                <td style={{ padding: '2px'}}>221122</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>/:</td>
                                <td style={{ padding: '2px'}}>21121</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>-:</td>
                                <td style={{ padding: '2px'}}>112212</td>
                            </tr>

                            <tr> 
                            <td style={{ padding: '2px', fontSize: '16pt'}}>'</td>
                                <td style={{ padding: '2px'}}>122221:</td>
                            </tr>

                            <tr>
                                <td style={{ padding: '2px', fontSize: '16pt'}}>Break:</td>
                                <td style={{ padding: '2px'}}>3</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>Speech:</td>
                                <td style={{ padding: '2px'}}>Enter</td>
                            </tr>

                            <tr>
                                
                                <td style={{ padding: '2px', fontSize: '16pt'}}>Space:</td>
                                <td style={{ padding: '2px'}}>33</td>

                                <td style={{ padding: '2px', fontSize: '16pt'}}>Back:</td>
                                <td style={{ padding: '2px'}}>Del</td>
                            </tr>

                           
                        
                    </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                <textarea
                    value={morse}
                    onChange={handleMorseChange}
                    onKeyDown={handleKeyDown}
                    style={{ width: '600px', margin: 'auto'}}
                    placeholder="Enter Morse code to translate 1 =. 2 =-, 3 respresents a break between characters, and 33 = space."
                    rows={5}
                    cols={50}
                />
            </div>
            <div>
                <textarea
                    value={translation}
                    onChange={handleTranslationChange}
                    style={{ width: '600px', margin: 'auto'}}
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
