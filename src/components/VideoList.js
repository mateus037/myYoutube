import React, { Component } from 'react'
import { connect } from "react-redux";
import { List, Image, Dimmer, Loader, Segment, Responsive } from 'semantic-ui-react'
import { reproduzVideo } from "../store/actions/reproduz.video";
import "./videoList.css";

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List selection verticalAlign='middle' className='items' key={video.etag}>
                <List.Item onClick={() => this.props.reproduz(video)}>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <Responsive >
                        <List.Content>
                            <List.Header>
                                <p>
                                    {video.snippet.title}
                                </p>
                            </List.Header>
                        </List.Content>
                    </Responsive>
                </List.Item>

            </List>
        )
    }

    render() {
        return (
            <div className='video-list'>
                <Segment tertiary raised>
                <Responsive >

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
                </Responsive>
                </Segment>
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