import Head from 'next/head'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Section_Third from '../component/Section_Third'
import Section_Four from '../component/Section_Four'
import Trusted_By from '../component/Trusted_By'
import What_is_Raaghu from '../component/What_is_Raaghu'
import Great_UI from '../component/Great_UI'
import Stand_Behind from '../component/Stand_Behind'
import Robust from '../component/Robust'
import Get_In_Touch from '../component/Get_In_Touch'
import Testimonials from '../component/Testimonials'
import Get_Started from '../component/Get_Started'


export default function Home() {
 return (
        <><Head>
     <title>Raaghu Website</title>
     
    
   </Head>
     <Navbar />
      <Banner />
     <Trusted_By />
     <What_is_Raaghu />
    <Section_Third />
     <Section_Four />
     <Great_UI />
     <Stand_Behind />
     <Robust />
     <Get_In_Touch />
     <Testimonials />
     <Get_Started />
     <Footer />
    
     </>
 
  )
  
};
