import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem';

const CarouselContainer = styled.div`
  position: relative;
`;

const CarouselInner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

interface ItemProps {
  isShow: boolean
}

// const CarouselItem = styled.div<ItemProps>`
//   position: relative;
//   display: ${props => props.isShow ? 'block' : 'none'};
//   align-items: center;
//   width: 100%;
//   height: 720px;
//   transition: transform .6s ease;
//   transition: transform .6s ease;
//   backface-visibility: hidden;
//   perspective: 1000px;
// `;

const IndicatorContainer = styled.ol`
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;

  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
`;

interface IndicatorItemProps {
  active: boolean
}

const IndicatorItem = styled.li<IndicatorItemProps>`
  position: relative;

  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  background-color: ${props => props.active
    ? '#fff'
    : 'rgba(255,255,255,.5)'
  };
`;

const PostImgWrapper = styled.img`
  max-width: 100%;
  width: 100%;
  height: 720px;
  object-fit: cover;
`;

const IMG_PREFIX_PATH = 'https://image.tmdb.org/t/p/w1280';

interface ImageProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface BannerProps {
  imgBackDropList: ImageProps[]
}

// start -> transform: translateX(100%);
// end   -> transform: translateX(-100%);

// 2 -> start -> 0.6s -> 1 display: none
// 3 -> start -> o.6s -> 2 display: none

const Banner = ({ imgBackDropList = [] } : BannerProps) => {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex(prev => {
        if (prev + 1 > imgBackDropList.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [imgBackDropList]);

  return (
    <CarouselContainer>
      <IndicatorContainer>
        {
          imgBackDropList.map((backdropPath, index) => {
            return (
              <IndicatorItem
                key={backdropPath.backdrop_path}
                active={curIndex === index}
                onClick={() => setCurIndex(index)}
              />
            )
          })
        }

      </IndicatorContainer>
      <CarouselInner>
        {
          imgBackDropList.map((backdropPath, index) => {
            return (
              <CarouselItem
                key={backdropPath.backdrop_path}
                isShow={index === curIndex}
              >
                <PostImgWrapper
                  src={`${IMG_PREFIX_PATH}${backdropPath.backdrop_path}`}
                  alt={backdropPath.backdrop_path}
                />
              </CarouselItem>
            )
          })
        }
      </CarouselInner>
    </CarouselContainer>
  )
};

export default Banner;
