import Image from 'next/image';

import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book, or rent a Car — quickly and easily!
            </h1>
            
            <p className="hero__subtitle"> 
                Streamline your car rental journey with our hassle-free and exhilarating booking adventure.
            </p>

            <CustomButton />

        </div>
    </div>
  )
}

export default Hero