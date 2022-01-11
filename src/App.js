import './style.css';
import logo from './assets/logo.png';
import Shape1 from './assets/Shape1.png';
import Shape2 from './assets/Shape2.png';
import Shape3 from './assets/Shape3.png';
import Shape4 from './assets/Shape4.png';
import Shape5 from './assets/Shape5.png';
import Shape6 from './assets/Shape6.png';
import chef1 from './assets/chef-1.png';
import chef2 from './assets/chef-2.jpg';
import chef3 from './assets/chef-3.png';
import burger from './assets/burger.png'
function App() {
  return (
    <div>
    
  <div className="container-fluid backgroundimage">
    <div className="row navgrad">
    
  
      <nav className="navbar navbar-expand-lg navbar-light  ">

        <a className="navbar-brand" href="#"><img src={logo} style={{width:"80px", height:"80px"}}  alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" >
            <li className="nav-item lipadding">
              <a className="nav-link " href="#">HOME</a>
            </li>
            <li className="nav-item lipadding">
              <a className="nav-link " href="#">PRODUCT</a>
            </li>
            <li className="nav-item lipadding">
              <a className="nav-link " href="#">PROMO</a>
            </li>
            <li className="nav-item lipadding">
              <a className="nav-link " href="#">ABOUT</a>
            </li>
            <li className="nav-item lipadding">
              <a className="nav-link " href="#">CONTACT</a>
            </li>

          </ul>

        </div>
      </nav>
      
      <div className="row">
        <div className="col-md-6 col-sm-8 col-lg-6">
          <p className="maintext"> Get Cashback<br/> up to 50%</p>
          <p className="maintextp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur justo eu nunc consequat.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6">
          <button className="orderbtn"> Order Now </button>

        </div>
      </div>
 

    </div>

  </div>
  <div className="container-fluid ourchefarea">
 
       <div className="row">
       <div className="col-md-2 col-sm-12 col-lg-2">
           
           <img src={Shape1} className="ourchefshape1"/>


       </div>

      <div className="col-md-8 col-sm-12 col-lg-8">
        <p className="ourchefheading">Our Chef</p>
        <p className="ourchefp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      </div>
       <div className="col-md-2 col-sm-12 col-lg-2">
           
        <img src={Shape2} className="ourchefshape2"/>


    </div>
    </div>
  <div className="row">
      <div className="col-md-2 col-sm-12 col-lg-2">
        <img src={Shape3} alt="" className="ourchefshape3"/>

      </div>
      <div className="col-sm-12 col-lg-8">
         <div className="row ">
           <div className=" col-sm-12 col-lg-4 text-center">
               <img src={chef1} alt="" className="ourchef1"/>
               <p className="ourchef1heading">Aiden Hunter</p>
               <p className="ourchefpara">Founder</p>
           </div>
           <div className=" col-sm-12 col-lg-4 text-center">
            <img src={chef2} alt="" className="ourchef1"/>
            <p className="ourchef1heading">Ethel Ramsey</p>
            <p className="ourchefpara">Co-Founder</p>
          </div>
          <div className=" col-sm-12 col-lg-4 text-center">
            <img src={chef3} alt="" className="ourchef1"/>
            <p className="ourchef1heading">Fannie Stewart</p>
            <p className="ourchefpara">Co-Founder</p>
          </div>
      
      </div>
    </div> 

      <div className=" col-sm-12 col-lg-2 d-flex align-items-end">
       <img src={Shape4} alt="" className="ourchefshape4"/>
      </div>



    </div>

     <div className="row">
       <div className="col-md-4 col-sm-12 col-lg-4 text-end">
        <img src={Shape5} alt="" className="ourchefshape5"/>
       </div>
       <div className="col-md-4"></div>
       <div className="col-md-4 col-sm-12 col-lg-4">
        <img src={Shape6} alt="" className="ourchefshape6"/>
       </div>

     </div>


  </div>
  {/* best burger */}
  <div className="container-fluid bestburgerarea">
  <div className="row">
    <div className="col-lg-6 text-end mt-5">
      <div className="bestburgerimgcenter">
      <img src={burger} alt="" className="bestburgerimg "/>
    </div>
    </div>

    <div className="col-lg-6 text-start  mt-5">
       <p className="bestburgerp mt-5 ml-5">Best Burger</p>
       <p className="bestburgerp2  ml-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
       <div className="orderbtn1center">
       <button className="orderbtn1 ml-5 mt-5"> Order Now </button>
      </div>
    </div>

  </div>


</div>
{/* best burger */}
{/* <!-- Big Burger --> */}
<div  class=" container-fluid bigburderarea">
  <div class="row">
    <div class="col-md-2 col-sm-12 col-lg-4">
   
       <img src={Shape4} alt="" class="ourchefshape4 mt-5 ml-0" style={{transform: "scaleX(-1)"}}/>
   
    </div>
    <div class="col-md-8 col-sm-12 col-lg-4 text-center"  >
       
      <img src={Shape2} alt="" class="ourchefshape2 " style={{transform: "scaleX(-1)", marginTop:"0px"}}/>
       
      </div>
      <div class="col-md-2 col-sm-12 col-lg-4 text-end"  >
       
          <img src={Shape5} alt="" class="ourchefshape4 mt-5 ml-0"/>
        
        </div>
  </div>

  <div class="row">
    <div class="col-md-6 ">
      <div class="mt-5 text-center"  >
      <p class="bigburderheading">Big Burger</p>
      <p class="bigburgerp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
      <button class="orderbtn"> Order Now </button>
  </div>
    </div>
    <div class="col-md-6">
    
      <div class="mt-5 text-center" >
        <img src={burger} alt="" class="bestburgerimg"/>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 col-lg-4 text-center">
      <img src={Shape1} class="ourchefshape1 mb-5" alt="" style={{transform: "scaleX(-1)"}}/>
    </div>


    <div class="col-md-4 col-lg-4 text-center">
      <img src={Shape6} alt="" class="ourchefshape6" style={{transform: "rotate(180deg)"}}/>
      
    </div>
   
    <div class="col-md-4 col-lg-4 text-end">
    <img src="assets/Shape3.png" alt="" class="ourchefshape3" style={{transform: "scaleX(-1)"}}/>
  </div>
  </div>
</div>
{/* <!-- Big Burger --> */}
</div> 
    
  );
}

export default App;
