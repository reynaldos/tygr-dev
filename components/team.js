// import '../pages/api/team.js';
import { useEffect, useState } from "react";

const Team = () => {

    /////////////////     twitter handles     //////////////////////
    const twitter_qp = 'https://twitter.com';
    const twitter_nino = 'https://twitter.com';
    const twitter_cto = 'https://twitter.com';
    const twitter_cxo = 'https://twitter.com';
    const twitter_knight = 'https://twitter.com';
    const twitter_serb = 'https://twitter.com';
    const twitter_dev = 'https://twitter.com';
    const twitter_madre = 'https://twitter.com';





    /////////////////     team scrol logic      //////////////////////
    useEffect(() => {
        let items = document.querySelectorAll('.carousel .carousel-item')

        items.forEach((el) => {
            const minPerSlide = 3
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        });
    }, [])
    

    return ( 
            <div className='masterhead justify-content-center mx-2 mt-0 mt-sm-5 pt-5' id='team'>
                <div className="container align-items-center px-5 mt-5">
                  <h1 className="mt-5 pt-3 pt-0" id="glow-mid">Team</h1>
                </div>

                <div className="container-fluid text-center my-3 ">
                    <div className="row justify-content-center align-items-end w-100">
                        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel" interval="false">
                            <div className="carousel-inner" role="listbox">

                                {/* marq */}
                                <div className="carousel-item active">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1 ">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/qp.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Founder &<br/>Creator</h2>
                                           
                                        </div></a>
                                    </div>
                                </div>

                                {/* nino */}
                                <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                        <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/nino.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Co-Founder<br/>& Strategist</h2>
                                            
                                        </div></a>
                                    </div>
                                </div>

                                {/* cto */}
                                <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1 ">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/cto.png" className="img-fluid"/>
                                            </div>
                                             <h2 className='my-4' id="glow-mid">Co-Founder<br/>& CTO</h2>
                                            
                                        </div></a>
                                    </div>
                                </div>

                                {/* cxo */}
                                <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/cxo.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Lead<br/>Developer</h2>
                                            
                                        </div></a>
                                    </div>
                                </div>

                                {/* dev */}
                                <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/dev.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Front-end<br/>Developer</h2>
                                           
                                        </div></a>
                                    </div>
                                </div>

                                {/* serb */}
                                <div className="carousel-item">
                                <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                <a ><div className="card">
                                        <div className="card-img">
                                            <img src="/team/serb.png" className="img-fluid"/>
                                        </div>
                                        <h2 className='my-4' id="glow-mid">Community<br/>Manager</h2>
        
                                    </div></a>
                                </div>
                            </div>


                                {/* madre */}
                                   <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/madre.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Media<br/>Director</h2>
                                            {/* <div className="card-img-overlay">Slide 6</div> */}
                                        </div></a>
                                    </div>
                                </div>

                                  {/* kn1ght */}
                                  <div className="carousel-item">
                                    <div className="col-8 col-sm-3 mx-5 mx-sm-1">
                                    <a ><div className="card">
                                            <div className="card-img">
                                                <img src="/team/knight.png" className="img-fluid"/>
                                            </div>
                                            <h2 className='my-4' id="glow-mid">Marketing<br/>Advisor</h2>
                                            
                                        </div></a>
                                    </div>
                                </div>
              
                               
                            </div>

                            {/* controls */}
                            <div className='row align-items-center justify-content-between'>
                                {/* prev */}
                                <a className="carousel-control-prev " href="#recipeCarousel" role="button" data-bs-slide="prev"> 
                                     <img src="/containers/prev.png" className="img-fluid "/>
                                </a>
                                {/* next */}
                                <a className="carousel-control-next" href="#recipeCarousel" role="button" data-bs-slide="next">     
                                     <img src="/containers/next.png" className="img-fluid "/>
                                </a>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
     );
}
 
export default Team;