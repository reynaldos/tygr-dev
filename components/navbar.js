import { useEffect,useState  } from "react";

const NavBar = () => {


    // tygr links
    const openseaLink = 'https://opensea.io/collection/tygrcuballiance';
    const instagramLink = 'https://www.instagram.com/tygrnft/';
    const twitterLink = 'https://twitter.com/TYGRNFT';
    const discordLink = 'https://discord.com/invite/ctBxt6zDsC';
    
 


    return ( 

        <div className='container-fluid w-100 position-fixed top-lvl '>

        
             {/* wallet btn */}
            <div className='row w-100 position-fixed top-lvl' id='customNav'>
                <div className='navbar col-12 justify-content-end'>
                    {/* change id from 'grayed-nav' to 'glow-nav to have actiavted css*/}
                    <div className='mx-2 wallet ' id='grayed-nav'>
                        <button className="btn btn-default" id='walletBtn'>
                            <h1 className="fs-4 pt-2" id="glow-mid">Connect Wallet</h1>
                        </button> 
                    </div>    
                </div>
            </div>



            {/* nav bar */}
            <div className=" position-fixed top-lvl " >
                <nav className="navbar navbar-expand-md navbar-dark ">

                <div className="container-fluid px-2">
                    
                    <button className="navbar-toggler"  id="glow-box" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon m-2 p-1" ></span>
                        
                    </button>

                        
                        <div className="container collapse navbar-collapse" display="" id="navbarSupportedContent">
                             <div className='row mt-3 mt-sm-0' id='glow-nav'>

                                {/* tesla btn */}
                                {/* mobile view only */}
                                <div className='col-8 d-sm-none order-last'>
                                   <a href={'#tesla'}>
                                        <div className='figure'>
                                            <img className="img-fluid image-main" src="containers/teslaBtn.png" alt="..." />
                                            <img className="img-fluid image-hover" src="containers/teslaBtn-glow.png" alt="..." />
                                        </div>
                                    </a>
                                </div>

                                {/* tabs */}
                                <ul className="col-4 col-sm-12 navbar-nav me-auto mb-2 mb-md-0  ps-2 glow-mid"  >
                                    

                                    <li className=" nav-item d-sm-none">
                                    <a className="nav-link fs-4" id="glow-mid" href='#home'>TYGR</a>
                                    </li>

                                    <li className="nav-item ">
                                    <a className="nav-link fs-4" id="glow-mid" href='#thecubs'>The Cubs</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link fs-4" id="glow-mid" href="#tech">Tech</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                    <a className="nav-link fs-4" id="glow-mid" href="#team">Team</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link fs-4" id="glow-mid" href="#mintmap">MintMap</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link fs-4" id="glow-mid" href="#roadmap">RoadMap</a>
                                    </li>

                                    <li className="nav-item">
                                    <a className="nav-link fs-4" id="glow-mid" href="#faq">Faq</a>
                                    </li>  
                                </ul>

                                {/* socials */}
                                {/* mobile view only */}
                                <div className="nav-item d-block d-sm-none order-last">
                                    <div className='container '>
                                    <div className='row justify-content-start'>
                                            {/* opensea */}
                                            <div className='col-3'>
                                                {/* <a href={openseaLink}> */}
                                                    <div className ='figure'>
                                                        <img  className="img-fluid image-main " src="socials/opensea.png" alt="..." />
                                                        <img  className="img-fluid image-hover" src="socials/opensea-glow.png" alt="..." />
                                                    </div>
                                                {/* </a> */}
                                            </div>
                                        
                                        {/* twitter */}
                                        <div className='col-3'>
                                            <a href={twitterLink}>
                                                <div className='figure'>
                                                    <img className="img-fluid image-main" src="socials/twitter.png" alt="..." />
                                                    <img className="img-fluid image-hover" src="socials/twitter-glow.png" alt="..." />
                                                </div>
                                            </a>
                                        </div>
                                        
                                        {/* instagram */}                              
                                        <div className='col-3'>
                                            <a href={instagramLink}>
                                                <div className='figure'>
                                                    <img className="img-fluid image-main" src="socials/insta.png" alt="..." />
                                                    <img className="img-fluid image-hover" src="socials/insta-glow.png" alt="..." />
                                                </div>
                                            </a>
                                        </div>
                                        
                                        {/* discord */}
                                            <div className='col-3'>
                                                <a href={discordLink}>
                                                <div className='figure'>
                                                    <img className="img-fluid image-main" src="socials/discord.png" alt="..." />
                                                    <img className="img-fluid image-hover" src="socials/discord-glow.png" alt="..." />
                                                </div>
                                                </a>
                                            </div>
                                        
                                    </div>
                                    </div>
                                </div>

                            </div>
                        
                        </div>
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default NavBar;