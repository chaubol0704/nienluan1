import { Routes, Route } from "react-router-dom";
import { SliderComponent } from "./components";
import {Home, Homepage, Login, DetailPost, Header,Footer, Menu} from './containers/Public'
import {path} from './ultils/constant'
import { System , CreatePost ,Admin, Customers} from './containers/System'

import slider1 from './assets/img/SLIDER2.jpg'
import slider2 from './assets/img/slider01.jpg'
import slider3 from './assets/img/fzn_0370_ll12.jpg'
import slider4 from './assets/img/menu.jpg'

function App() {
  const arrImages=[slider1,slider2,slider3,slider4]
  return (
    
    <div className="bg-primary w-full relative">
      <Header />
      {/* <SliderComponent  arrImages={arrImages} className='z-10'/> */}
      <Routes>
         <Route path={path.HOME} element={<Home/>}>
          < Route path={path.LOGIN} element={<Login/>} />  
       </Route>
          
          <Route path={path.HOME_PAGE} element={<Homepage/>}/> 
          <Route path={path.DETAIL_POST} element={<DetailPost/>}/>
          < Route path={path.MENU} element={<Menu/>} />
          {/* < Route path={path.DETAIL} element={<DetailPost/>} /> */}
        <Route path={path.SYSTEM} element={<System/>}>
          <Route path={path.CREATE_POST} element={<CreatePost/>}/>
           
        </Route>
        <Route path={path.ADMIN} element={<Admin/>}>
            {/* <Route path="/customers" element={<Customers />}></Route>  */}
        </Route>
         
      </Routes>
      <Footer className='pb-0'/>
    </div>
  );
}

export default App;
