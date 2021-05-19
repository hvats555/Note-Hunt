import React, {useState, useContext, useEffect} from 'react';
import NotePlayer from '../../components/NotePlayer/NotePlayer';
import SelectNotes from '../../components/SelectNotes/SelectNotes';
import DisplayResult from '../../components/DisplayResult/DisplayResult';
import Dashboard from '../../components/Dashboard/Dashboard';
import GameInfo from '../../components/GameInfo/GameInfo';
import GameOverReport from '../../components/Reports/GameOverReport/GameOverReport';
import NextLevelReport from '../../components/Reports/NextLevelReport/NextLevelReport';

import musicScales from '../../musicScales';

import './Play.scss';

import {ScaleContext} from '../../context/ScaleContext';

function Play() {
    const [randomlySelectedNote, setRandomlySelectedNote] = useState();
    const [guessResult, setGuessResult] = useState();
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [gameOver, setGameOver] = useState(false); // share in context
    let [btnColor, setBtnColor] = useState({});
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
  
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRootNotePlaying, setIsRootNotePlaying] = useState(false);

    const [selectedScale, setSelectedScale] = useContext(ScaleContext);

    const randomNoteGenerator = () => {
      let randomNoteIndex = Math.floor(Math.random() * 7);
      let randomNote = musicScales[selectedScale][randomNoteIndex];
      setRandomlySelectedNote(randomNote);
    }

    const changeBtnColor = (e) => {
      if(e != randomlySelectedNote){
          setBtnColor({[e]: "game__controls-btn-failure"});
          return;
      }

      if(e == randomlySelectedNote) {
          setBtnColor({[e]: "game__controls-btn-success"});
          return;
      }
  }

    const newLevelHandler = () => {
      let currentLevel = level;
      let updatedLevel = currentLevel + 1;
      setLevel(updatedLevel);
      randomNoteGenerator();

      setAttemptsLeft(3);
      setGuessResult();
    }

    const scoreHandler = () => {
      let currentScore = score;
      let updatedScore = currentScore + 10;
      setScore(updatedScore);
    }

    const attemptsHandler = () => {
      if (attemptsLeft > 1){
        let currentAttemptsLeft = attemptsLeft;
        let updatedAttemptsLeft = currentAttemptsLeft - 1;
        setAttemptsLeft(updatedAttemptsLeft);
      } else {
        setAttemptsLeft(0);
        setGameOver(true);
      }
    }
  
    const guessedNoteValidator = (guessedNote) => {
      if(guessedNote === randomlySelectedNote){
        setGuessResult(true);
        scoreHandler();
      }else {
        setGuessResult(false);
        attemptsHandler();
      }
    }
  
    const notePlayerHandeler = (option) => {
      setIsPlaying(option);
    }
  
    const rootNotePlayerHandeler = (option) => {
      setIsRootNotePlaying(option);
    }
  
    const noteSanatizer = (note) => {
      const noteMap = {
        'a': 'a',
        'a#': 'a-sharp',
        'b': 'b',
        'b#': 'c',
        'Bb': 'a-sharp',
        'c': 'c',
        'c#': 'c-sharp',
        'd': 'd',
        'd#': 'd-sharp',
        'e': 'e',
        'e#': 'f',
        'f': 'f',
        'f#': 'f-sharp',
        'f##': 'g',
        'c##': 'd',
        'g##': 'a',
        'g': 'g',
        'g#': 'g-sharp',
      }
  
      return noteMap[note];
    }

    const newGameHandler = () => {
        setAttemptsLeft(3);
        setGuessResult();
        setScore(0);
        setLevel(1);
        setBtnColor();
        if(gameOver == true) { // if user is playing after game over
            setGameOver(false);
            randomNoteGenerator();
        }else { // if user is continuing
            randomNoteGenerator();
        }
    }

    useEffect(() => {
        newGameHandler(); // setup new game on load
    }, []);

    return (
      <div>
        <div className="game__playground">
          {
              gameOver ? (
                  <GameOverReport level={level} score={score} randomlySelectedNote={randomlySelectedNote} newGameHandler={newGameHandler}/>
              ) : null
          }

          {
            guessResult ? (
              <NextLevelReport nextLevelHandler = {newLevelHandler} level={level + 1}/>
            ) : null
          }

          <GameInfo level={level} score={score} selectedScale={selectedScale} attemptsLeft={attemptsLeft}/>
          <NotePlayer 
            notePlayerHandeler={notePlayerHandeler} 
            audioName={noteSanatizer(randomlySelectedNote)} 
            isPlaying={isPlaying}

            rootNotePlayerHandeler={rootNotePlayerHandeler}
            rootAudioName={noteSanatizer(selectedScale)}
            isRootNotePlaying={isRootNotePlaying}
          />
          <SelectNotes selectedScale={selectedScale} changeBtnColor={changeBtnColor} btnColor={btnColor} guessedNoteValidator={guessedNoteValidator}/>
          <DisplayResult guessResult={guessResult} attemptsLeft={attemptsLeft} gameOver={gameOver}/>
        </div>

        <Dashboard newGameHandler={newGameHandler} />
      </div>
    )
}

export default Play
