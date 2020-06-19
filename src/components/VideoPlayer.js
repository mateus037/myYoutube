import React from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed } from "semantic-ui-react";
import './videoPlayer.css'

const VideoPlayer = props => {
    return (
        <div className='video-player'>
            
            
            {
                !props.video.id && (
                    <Advertisement style={{ 'height': '473px', 'width': '840px' }} unit='top banner' test='Escolha um video para reproduzir' />
                )
            } {
                props.video.id && (
                    <div className='video-are'>
                        <Embed id={props.video.id.videoId} 
                        source='youtube' placeholder={props.video.snippet.thumbnails.medium.url} />
                        <span>
                        <p className='video-titulo'>{props.video.snippet.title}</p>
                        <p className='video-descricao'>{props.video.snippet.description}</p>
                        </span>
                    </div>
                )
            }
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)