import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a <span className='text-gradient'>better card</span> deal <br className='sm:block hidden' /> in few <span className='text-gradient'>easy</span> steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Browse best-in-class credit cards for cash back, points and miles, 0% APR, credit building and more. Find the right fit for your needs and apply in seconds.</p>
        <Button styles='mt-10' />
      </div>
      
      <div className={layout.sectionImg}>
        <img src={card} alt='card deal' className='w-[100%] h-[100%] relative z-[5]'/> 
        <div className='absolute z-[3] -right-1/2 top 0 w-[70%] h-[70%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -right-1/2 bottom 0 w-[70%] h-[70%] rounded-full blue__gradient'/>
      </div>

    </section>
  )

export default CardDeal