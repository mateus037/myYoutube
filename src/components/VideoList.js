import React, { Component } from 'react'
import { connect } from "react-redux";
import { List, Image } from 'semantic-ui-react'

class VideoList extends Component {

    renderVideo(video) {
        return (
            <div className='video-list'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <Image src={video.snippet.thumbnails.default.url} />

                        <List.Content>
                            <List.Header>{video.snippet.title}</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        )
    }

    render() {
        return (
            <div className='video-list'>
                {
                    this.props.videos.map(video => {
                        console.log('meu video', video)
                        return this.renderVideo(video)
                    })
                }
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

export default connect(mapStateToProps, null)(VideoList)