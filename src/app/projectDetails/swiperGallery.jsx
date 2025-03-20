import { useState } from 'react';
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

export default function SwiperGallery({items}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="horizontal-thumbnails"
        style={{width: "2px", minWidth: "100%"}}
      >
        {thumbnailsToDraw}
      </Swiper>
    </>
  );
}