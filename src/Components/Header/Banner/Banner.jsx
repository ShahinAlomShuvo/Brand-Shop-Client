import banner1 from "../../../assets/Images/slider1.jpg";
import banner2 from "../../../assets/Images/watch.png";
import banner3 from "../../../assets/Images/gucchiavif.jpg";
import banner4 from "../../../assets/Images/addidasBanner.jpg";

const Banner = () => {
  return (
    <div>
      <div className='carousel w-full'>
        {/* slide One  */}
        <div id='slide1' className='carousel-item relative w-full'>
          {/* slide One Content */}
          <div
            className='hero h-[70vh]'
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Elevate Your Style</h1>
                <p className='mb-5 font-medium'>
                  Experience innovation and style with Nike shoes that offer
                  comfort and performance like no other. Elevate your every
                  step.
                </p>
                <button className='btn btn-primary'>Go to store</button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        {/* slide Two */}
        <div id='slide2' className='carousel-item relative w-full'>
          {/* slide two content  */}
          <div
            className='hero h-[70vh]'
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className='hero-overlay bg-opacity-80'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Timeless Elegance <br /> on Your Wrist
                </h1>
                <p className='mb-5  font-medium'>
                  Indulge in the luxury of time with Gucci watches. Crafted with
                  precision and designed for the sophisticated, each piece is a
                  work of art.
                </p>
                <button className='btn btn-primary'>Go to store</button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        {/* slide Three  */}
        <div id='slide3' className='carousel-item relative w-full'>
          {/* slide three content  */}
          <div
            className='hero h-[70vh]'
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Gucci Elegance</h1>
                <p className='mb-5 font-medium'>
                  Gucci clothing represents the pinnacle of high-end fashion.
                  Discover timeless elegance, sophistication, and unique style.
                </p>
                <button className='btn btn-primary'>Go to store</button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        {/* slide four  */}
        <div id='slide4' className='carousel-item relative w-full'>
          {/* slide four content  */}
          <div
            className='hero h-[70vh]'
            style={{
              backgroundImage: `url(${banner4})`,
            }}
          >
            <div className='hero-overlay bg-opacity-80'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>
                  Unleash Your Athletic Side
                </h1>
                <p className='mb-5 font-medium'>
                  From performance wear to street style, Adidas clothing offers
                  versatility and quality. Gear up for sports and life's
                  adventures.
                </p>
                <button className='btn btn-primary'>Go to store</button>
              </div>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
