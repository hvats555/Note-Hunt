import React, {useState} from 'react'
import Sound from 'react-sound';
import './NotePlayer.scss';

export default function NotePlayer(props) {
    const [mainNotePlayState, setMainNotePlayState] = useState();
    const [rootNotePlayState, setRootNotePlayState] = useState();

    return (
        <div className="note__player">
            <div className="note__player-main">
                <div onClick={() => {props.notePlayerHandeler(true)}} className="note__player-main-btn">
                    <span className="material-icons">volume_up</span>
                </div>
                <p className="note__player-label">{mainNotePlayState ? mainNotePlayState : null}</p>

                <p className="note__player-label">Play the note {mainNotePlayState ? mainNotePlayState : null}</p>

                <Sound
                    url= {`./audio/${props.audioName}.wav`}
                    playStatus={props.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                    playFromPosition={0}
                    onLoading={() => (setMainNotePlayState("Loading sound, Please Wait..."))}
                    onPlaying={() => {setMainNotePlayState("Playing")}}
                    onFinishedPlaying={() => {props.notePlayerHandeler(false); setMainNotePlayState()}}
                />
            </div>
            
            <div class="note__player-root">
                <div onClick={() => {props.rootNotePlayerHandeler(true)}} class="note__player-root-btn">
                    <span class="material-icons">music_note</span>
                </div>
                <p class="note__player-label">{rootNotePlayState ? rootNotePlayState : null}</p>
                <p class="note__player-label">Play root note {rootNotePlayState ? rootNotePlayState : null}</p>

                <Sound
                    url= {`./audio/${props.rootAudioName}.wav`}
                    playStatus={props.isRootNotePlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                    playFromPosition={0}
                    onLoading={() => (setRootNotePlayState("Loading sound, Please Wait..."))}
                    onPlaying={() => {setRootNotePlayState("Playing")}}
                    onFinishedPlaying={() => {props.rootNotePlayerHandeler(false); setRootNotePlayState()}}
                />
            </div>
        </div>
    )
}
