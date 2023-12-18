import styles from './reviews.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useCallback, useRef } from 'react';

const Reviews = ({ isMobile = false }) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={`${styles.reviews} ${isMobile ? styles.isMobile : null}`}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.navigation}>
            <FaChevronLeft
              color={isMobile ? '#000' : '#fff'}
              size={30}
              className={styles.prevBtn}
              onClick={handlePrev}
            />
            <FaChevronRight
              color={isMobile ? '#000' : '#fff'}
              size={30}
              className={styles.nextBtn}
              onClick={handleNext}
            />
          </div>
          <div className={styles.inner}>
            <Swiper
              pagination={{
                el: `.${styles.pagination}`,
                type: 'bullets',
                bulletClass: styles.bullet,
                bulletActiveClass: styles.bulletActive,
                clickable: true,
              }}
              modules={[Pagination]}
              ref={sliderRef}
              className={styles.swiper}>
              <SwiperSlide className={styles.reviewCard}>
                <img
                  className={styles.reviewIcon}
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='AVATAR'
                />
                <p className={styles.reviewText}>
                  Уже не первый раз покупаю гамаки в этом магазине. Прекрасное
                  соотношение цены и качества!
                </p>
                <p className={styles.reviewAuthor}>Евгения Евина, покупатель</p>
              </SwiperSlide>
              <SwiperSlide className={styles.reviewCard}>
                <img
                  className={styles.reviewIcon}
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='AVATAR'
                />
                <p className={styles.reviewText}>
                  Уже не первый раз покупаю гамаки в этом магазине. Прекрасное
                  соотношение цены и качества!
                </p>
                <p className={styles.reviewAuthor}>Евгения Евина, покупатель</p>
              </SwiperSlide>
              <SwiperSlide className={styles.reviewCard}>
                <img
                  className={styles.reviewIcon}
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='AVATAR'
                />
                <p className={styles.reviewText}>
                  Уже не первый раз покупаю гамаки в этом магазине. Прекрасное
                  соотношение цены и качества!
                </p>
                <p className={styles.reviewAuthor}>Евгения Евина, покупатель</p>
              </SwiperSlide>
            </Swiper>
            <div className={styles.pagination}></div>
            <button className={styles.all}>Читать все отзывы</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
