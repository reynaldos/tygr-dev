

const Cubs = () => {




    return (  
        <div className='masterhead justify-content-center mt-5 pt-5 mx-2' id='thecubs'>
            <div className='container-fluid pt-0 pt-md-2 pt-lg-5'>

            <div className='container mt-5 mt-lg-0' id='glow-box'>
            <h1 className="header m-3 countDownMain" id="glow-mid">The Cubs</h1>
      
            {/* // <!-- About section one--> */}
            <section className="">
                <div className="container px-3 px-md-5">
                    <div className="row gx-5 align-items-center ">
                     <div className="col-lg-6 order-sm-1">
                            <p className="lead fw-normal pb-2 techTextInner" id="glow-mid">
                                On 3/14… 8,888 Cubs will descend upon the NFT Worlds metaverse, earning their stripes by dominating the $WRLD token. The bravest cubs will fight in the TYGR Tournament. Only the strong will survive–the weak must be sacrificed in order for TYGR Cub Alliance to reach its Final Form.
                                <br/><br/>The TYGR team is comprised of passionate, 
                                talented and innovative individuals who share the common goal of dissolving the barrier of entry into crypto/nfts. We intend to be responsible for onboarding 
                                thousands of first time users into the space and providing equal opportunities to the masses. We've done this by putting TYGR's community first.<br/><br/>Beyond meticulously 
                                crafting versatile art that includes lovable assets for everyone our renowned devs have invented new, patent pending technology that completely flattens crypto's steep learning curve.
                            </p>
                        </div>


                        {/* <!-- 3D Image Slideshow HTML --> */}
                        <div className="col-lg-6 order-last order-sm-2 align-items-center mb-5 mb-md-0">
                            {/* <img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /> */}
                            <div className="Scriptcontent">
                                <section className="slideshow">
                                    <div className="content">
                                        <div className="slider-content">
                                        <figure className="shadow"><img src="/slides/slide1.jpeg"/></figure>
                                        <figure className="shadow"><img src="/slides/slide2.jpeg"/></figure>
                                        <figure className="shadow"><img src="/slides/slide3.jpeg"/></figure>
                                        <figure className="shadow"><img src="/slides/slide4.jpeg"/></figure>
                                        </div>
                                    </div>
                                </section>
                            </div>
   
                        </div>
                       
                    </div>
                </div>
            </section>


            {/* // <!-- About section two--> */}
                <section className="py-2 py-lg-0">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-5 order-last order-lg-first mb-5">
                                <img className="img-fluid rounded" src="/cubs/group3.png" alt="..." />
                            </div>
                            <div className="col-lg-6">
                                <p className="lead fw-normal pb-2 techTextInner" id="glow-mid">Every purchase of TYGR merch grants a
                                                                                    presale slot for our NFT launch.
                                                                                    Claim your presale slot by taking a selfie in
                                                                                    our merch and doing one of the following:<br/>
                                                                                   <ul className="merch">
                                                                                       <li>Tweet selfie and tag us on Twitter</li>
                                                                                        <li>Story post selfie and tag us on Instagram</li>
                                                                                        <li>Join and speak with a moderator on Discord</li>
                                                                                    </ul>
                                                                                   <a id='glow-mid' href="https://tygrnft.shop">Check out the shop</a>
                                                                                    </p>
                            </div>
                        </div>
                    </div>
                </section>

                </div>
            </div>

        </div> 
        );
}
 
export default Cubs;