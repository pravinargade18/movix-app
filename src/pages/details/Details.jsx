import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Cast from './cast/Cast'
import './Details.scss'
import DetailsBanner from './detailsBanner/DetailsBanner'
import VideoSection from '../details/videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'




const Details = () => {

  const {mediaType,id} =useParams();
  const {data,loading} =useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading} =useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
}

export default Details