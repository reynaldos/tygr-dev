

const Footer = () => {

  // tygr links
  const openseaLink = '';
  const instagramLink = '';
  const twitterLink = '';
  const discordLink = '';

  const nftCalLink = '';

    return ( 

    
    <footer className="top-lvl container-fluid w-100 h-100 bg-dark fixed">
        <div className='row justify-content-between align-items-center mt-3 pt-3'>
            


            <div className='col-2 col-sm-3'>
            {/* <a >   
                    <div className="row">
                        <div className='col-12 col-sm-8 col-lg-6 figure'>
                        {/* /nftCal.png 
                            <img className='img-fluid' src='/nftCalTrans.png '/>
                           
                        </div>
                    </div>
                    </a> */}
            </div> 


            <div className="col-8 col-sm-6 col-lg-3">
                <div className='row justify-content-center'>

                    {/* opensea */}
                    <div className='col-3'>
                        <a >
                            < div className ='figure'>
                                <img  className="img-fluid image-main " src="socials/opensea.png" alt="..." />
                                <img  className="img-fluid image-hover" src="socials/opensea-glow.png" alt="..." />
                            </div>
                        </a>
                    </div>
                    
                    {/* twitter */}          
                        <div className='col-3'>
                        <a >
                            <div className='figure'>
                                <img className="img-fluid image-main" src="socials/twitter.png" alt="..." />
                                <img className="img-fluid image-hover" src="socials/twitter-glow.png" alt="..." />
                            </div>
                            </a>
                        </div>
                    
                    {/* instagram */}
                        <div className='col-3'>
                        <a >
                            <div className='figure'>
                                <img className="img-fluid image-main" src="socials/insta.png" alt="..." />
                                <img className="img-fluid image-hover" src="socials/insta-glow.png" alt="..." />
                            </div>
                            </a>
                        </div>
                    
                    {/* discord */}
                        <div className='col-3'>
                        <a >
                            <div className='figure'>
                                <img className="img-fluid image-main" src="socials/discord.png" alt="..." />
                                <img className="img-fluid image-hover" src="socials/discord-glow.png" alt="..." />
                            </div>
                            </a>
                        </div>                            
                </div>
            </div>

            <div className='col-2 col-sm-3'>
                {/* <img className='img-fluid' src='/nftCal.png'/> */}
            </div> 

            {/* <div className='col-12 text-center p-3'>
                <h6 className='' id='glow-bright'>Powered by innovation.eth</h6>
            </div> */}

            

        </div>

      
    </footer>

     );
}
 
export default Footer;