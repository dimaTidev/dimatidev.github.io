'use client';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import Button from '@/lib/UIComponents/Button';
import {IconArrowLeft, IconArrowRight } from '@/lib/icons/icons';

export default function SwiperGallery({items}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbnailSwiperRef = useRef(undefined)

  const itemsToDraw = items.map((url, id) => {
    const isEmbededVideo = typeof url === "string" && url.toLowerCase().includes("youtube");
    return (
        <SwiperSlide key={id}>
            {isEmbededVideo ? (
                <iframe
                    src={url}
                    className="swiper-gallery-video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <Image src={url} alt={""} fill style={{objectFit: "cover"}}/>
            )}
        </SwiperSlide>
    )
  });

  const thumbnailsToDraw = items.map((url, id) => {
    const isEmbededVideo = typeof url === "string" && url.toLowerCase().includes("youtube");
    return (
        <SwiperSlide key={id}>
            <Image src={isEmbededVideo ? `https://img.youtube.com/vi/${url.split('/embed/')[1]}/0.jpg` : url} alt={""} fill style={{objectFit: "cover"}}/>
        </SwiperSlide>
    )
  });

  return (
    <>
      <Swiper
        slidesPerView="auto"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        {itemsToDraw}
      </Swiper>

    <div className='u-layout_flex-row u-layout_flex-space-between-center gap-l u-width-100perc'>
      <Button className='swiper-thumbnail-button swiper-thumbnail-button-prev'>
        <IconArrowLeft />
      </Button>

      <Swiper
        ref={thumbnailSwiperRef}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-thumbnail-button-next',
          prevEl: '.swiper-thumbnail-button-prev',
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="horizontal-thumbnails"
        style={{width: "2px", flexGrow: 1}}
      >
        {thumbnailsToDraw}
      </Swiper>

      <Button className='swiper-thumbnail-button swiper-thumbnail-button-next'>
        <IconArrowRight />
      </Button>
    </div>
      
    </>
  );
}