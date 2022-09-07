import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>

      <div className='absolute z-[3] -left-1/2 top 0 w-[70%] h-[70%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom 0 w-[70%] h-[70%] rounded-full pink__gradient'/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily <span className='text-gradient'>control</span> your <br className='sm:block hidden'/><span className='text-gradient'>billing</span> & <span className='text-gradient'>invoicing</span></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> We are committed to meeting ur personal obligations, including timely payment for agreed goods/services.  
        In order to meet this goal we ask all our clients to comply with minimum requirements for orders and invoices.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='google_store' className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
    </div>
  </section>
)
  
export default Billing