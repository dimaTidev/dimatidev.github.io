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
import { Variant } from '@/lib/UIComponents/uiCommon';

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
      <div className='u-position-relative mainSwiper'>
        <Swiper
          slidesPerView="auto"
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-gallery__main-navigation-button-next',
            prevEl: '.swiper-gallery__main-navigation-button-prev',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {itemsToDraw}
        </Swiper>

        <div className="swiper-gallery__main-navigation-button-wrapper swiper-gallery__main-navigation-button-prev u-events-none">
          <Button variant={Variant.SECONDARY} className="u-events-all" quiet>
            <IconArrowLeft />
          </Button>
        </div>

        <div className="swiper-gallery__main-navigation-button-wrapper swiper-gallery__main-navigation-button-next u-events-none">
          <Button variant={Variant.SECONDARY} className="u-events-all" quiet>
            <IconArrowRight />
          </Button>
        </div>
      </div>

      <div className='u-layout_flex-row u-layout_flex-space-between-center gap-l u-width-100perc'>

        <Button variant={Variant.SECONDARY} className='swiper-thumbnail-button swiper-thumbnail-button-prev'>
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
          className="swiper-gallery-horizontal-thumbnails swiper-gallery-thumbnails"
          style={{width: "2px", flexGrow: 1, justifyContent: "center"}}
        >
          {thumbnailsToDraw}
        </Swiper>

        <Button variant={Variant.SECONDARY} className='swiper-thumbnail-button swiper-thumbnail-button-next'>
          <IconArrowRight />
        </Button>

      </div>
      
    </>
  );
}