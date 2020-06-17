import youtubeSearch from 'youtube-api-v3-search'
import YTApi from './../../service/api'
import { dispatch } from "rxjs/internal/observable/range";

const API_KEY = YTApi

export const buscaVideoInicio = () => {
    return {
        type:'BUSCA_VIDEO_INICIO',
        carrregando: true,
        erro: false
    }
}

export const buscaVideoSucesso = (videos) => {
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        videos,
        carrregando: false,
        erro: false
    }
}

export const buscaVideoErro = () => {
    return {
        type: 'BUSCA_VIDEO_ERRO',
        carregando: false,
        erro: true
    }
}

export const buscaVideo = (termo) => {
     return dispatch => {
        dispatch(buscaVideoInicio())
        youtubeSearch(API_KEY, {q: termo})
        .then((data) => dispatch(buscaVideoSucesso(data.items)))
        .catch(() => dispatch(buscaVideoErro()))
     }
}