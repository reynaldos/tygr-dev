const Tesla = () => {
    return ( 
        <div className="masterhead align-items-center justify-content-center mt-5 mx-2" id='tesla'>
            <div className="container-fluid align-items-center mt-5 pt-3 pt-lg-0">          
                {/* <div className="container-md align-items-center "> */}
                    
                    <div className='row justify-content-evenly align-items-center'>
                   

                        {/* description */}
                        <div className="col-12 col-md-6">
                            {/* title */}
                            <div className='row'>        
                                <h1 className="header pt-3 pt-sm-0" id="glow-mid">Tesla Giveaway</h1>
                            </div>

                            {/* title */}
                            <div className='row p-3 p-lg-4 p-xl-5 '  id="glow-box">
                                <p className="lead techTextInner" id="glow-mid">Presenting our highly anticipated TYGR TESLA giveaway. Unlike 99% of NFT projects, our roadmap isn’t filled with fairytales, or promises with stock images.</p>
                                {/* <p className="lead techTextInner" id="glow-mid">Sieze the oppurtunity and try your chance on getting a tesla during the presale event.</p> */}
                                <p className="lead techTextInner" id="glow-mid">We will randomly mint a unique TYGR Cub and Tesla NFT during the sale. The NFT will be revealed simultaneously with the collection. The winner will have the opportunity to sell or redeem the NFT. The holder of the NFT can redeem the NFT for the Tesla at any time.</p>
                            </div>
                        </div>

                        {/* tesla vid */}
                        <div className="col-8 col-sm-5 col-lg-4 px-0 px-md-5 mt-5 mt-md-0 pt-0 pt-sm-5 pt-md-0 ">
                            <video className="img-fluid rounded-3" id='glow-vid' controls>

                                <source src="/teslaVId.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>                 
                        </div>
                    {/* </div> */}
                    
            </div>
        </div>
    </div>
    
     );
}
 
export default Tesla;
