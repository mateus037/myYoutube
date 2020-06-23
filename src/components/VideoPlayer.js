import React from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed, Segment, Responsive } from "semantic-ui-react";
import './videoPlayer.css'

const VideoPlayer = props => {
    return (
        <div className='video-player'>


            {
                !props.video.id && (
                    <Advertisement style={{ 'height': '473px', 'width': '720px' }} className="video" unit='top banner' test='Escolha um video para reproduzir' />
                )
            } {
                props.video.id && (
                    <Responsive>

                        <div className="video">
                            <Embed id={props.video.id.videoId}
                                autoplay={true}
                                color='blue'
                                hd={true}

                                iframe={{
                                    allowFullScreen: true,
                                    style: {
                                        padding: 10,
                                    },
                                }}

                                source='youtube' placeholder={props.video.snippet.thumbnails.medium.url} />
                        </div>
                        <Segment placeholder raised>
                        
                            <p className='video-titulo'>{props.video.snippet.title}</p>
                            <p className='video-descricao'>{props.video.snippet.description}</p>
                       
                        </Segment>
                        </Responsive>
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