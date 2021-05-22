import React, {useState} from 'react'
import Sound from 'react-sound';
import './NotePlayer.scss';

export default function NotePlayer(props) {

    return (
        <div className="note__player">
            <div className="note__player-main">
                <div onClick={() => {props.notePlayerHandeler(true)}} className="note__player-main-btn">
                    <span className="material-icons">volume_up</span>
                </div>

                <p className="note__player-label">Play the note</p>

                <Sound
                    url= {`./audio/${props.audioName}.wav`}
                    playStatus={props.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                    playFromPosition={0}
                    onFinishedPlaying={() => {props.notePlayerHandeler(false)}}
                />
            </div>
            
            <div class="note__player-root">
                <div onClick={() => {props.rootNotePlayerHandeler(true)}} class="note__player-root-btn">
                    <span class="material-icons">music_note</span>
                </div>
                <p class="note__player-label">Play root note</p>

                <Sound
                    url= {`./audio/${props.rootAudioName}.wav`}
                    playStatus={props.isRootNotePlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                    playFromPosition={0}
                    onFinishedPlaying={() => {props.rootNotePlayerHandeler(false)}}
                />
            </div>
        </div>
    )
}
