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
                  src='https://s3-alpha-sig.figma.com/img/c2d0/ec52/03489ef9ce37ce4d546df1433d0dcf37?Expires=1701648000&Signature=Lunz3DF8IPwZsOpv2G0A1GDtbuFNq4O8powthzDJ2QDqbyMLtaepEX-6ACvVLsrzUXt7ijhT6pHmnVEFxRSxL80wMTmnZ9m14ISHHbuXk9OIM2d~dkMPbM96PtNGmKxkSpRm5rALWq~Jcivkhg5DogT6-qZLqtxqJIBA75nRqUoasPsHNsWUbfKXn14Ds0JBBGgIrHYRw2FiDzeXtu34rcSYPNsuYrP6eV0~swSYe69r43-BHSqRlOY13kbSQ2CPF6In8iTlEizCxjiVa1QgDI0CDa5XLw7Hq9NTU0t6jPHOYrwdK2WvGDB~5PhPEMN78UUzoNuRG~iKgCVsa3jOVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
                  src='https://s3-alpha-sig.figma.com/img/c2d0/ec52/03489ef9ce37ce4d546df1433d0dcf37?Expires=1701648000&Signature=Lunz3DF8IPwZsOpv2G0A1GDtbuFNq4O8powthzDJ2QDqbyMLtaepEX-6ACvVLsrzUXt7ijhT6pHmnVEFxRSxL80wMTmnZ9m14ISHHbuXk9OIM2d~dkMPbM96PtNGmKxkSpRm5rALWq~Jcivkhg5DogT6-qZLqtxqJIBA75nRqUoasPsHNsWUbfKXn14Ds0JBBGgIrHYRw2FiDzeXtu34rcSYPNsuYrP6eV0~swSYe69r43-BHSqRlOY13kbSQ2CPF6In8iTlEizCxjiVa1QgDI0CDa5XLw7Hq9NTU0t6jPHOYrwdK2WvGDB~5PhPEMN78UUzoNuRG~iKgCVsa3jOVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
                  src='https://s3-alpha-sig.figma.com/img/c2d0/ec52/03489ef9ce37ce4d546df1433d0dcf37?Expires=1701648000&Signature=Lunz3DF8IPwZsOpv2G0A1GDtbuFNq4O8powthzDJ2QDqbyMLtaepEX-6ACvVLsrzUXt7ijhT6pHmnVEFxRSxL80wMTmnZ9m14ISHHbuXk9OIM2d~dkMPbM96PtNGmKxkSpRm5rALWq~Jcivkhg5DogT6-qZLqtxqJIBA75nRqUoasPsHNsWUbfKXn14Ds0JBBGgIrHYRw2FiDzeXtu34rcSYPNsuYrP6eV0~swSYe69r43-BHSqRlOY13kbSQ2CPF6In8iTlEizCxjiVa1QgDI0CDa5XLw7Hq9NTU0t6jPHOYrwdK2WvGDB~5PhPEMN78UUzoNuRG~iKgCVsa3jOVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
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
            <div className={styles.all}>Читать все отзывы</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
