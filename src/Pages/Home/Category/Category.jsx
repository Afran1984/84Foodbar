import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// img import 
import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading = {"ORder Online"}
            >
                
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups..</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Vanilla</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;