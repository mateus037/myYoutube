import React, { Component } from 'react'
import { connect } from "react-redux";
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import { reproduzVideo } from "../store/actions/reproduz.video";
import "./videoList.css";

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List animated verticalAlign='middle' className='items' key={video.etag}>
                <List.Item onClick={() => this.props.reproduz(video)}>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
                
            </List>
        )
    }

    render() {
        return (
            <div className='video-list'>
                <div className='lista'>

                    {
                        this.props.carregando && (<Dimmer active inverted>
                            <Loader size='medium'>Loading</Loader>
                        </Dimmer>)
                    }
                    {
                        this.props.videos.map(video => {
                            return this.renderVideo(video)
                        })
                    }
                </div>
            </div>
        )
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        reproduz: (video) => dispatch(reproduzVideo(video))
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.busca.videos,
        carregando: state.busca.carregando,
        erro: state.busca.erro
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)