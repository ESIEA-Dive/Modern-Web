import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => (
  <div className='hover:animate-pulse'>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[4px] cursor-pointer animate-in slide-in-from-bottom-80 duration-1000 mr-10`}>
      <div className={`${styles.flexCenter} flex-col bg-primary 
      w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='text-white font-poppins fond-medium text-[22px]
          leading-[23px] mr-5'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] 
          object-contain ' />
        </div>
        <p className='text-white font-poppins fond-medium text-[22px]
          leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  </div>
  )

export default GetStarted