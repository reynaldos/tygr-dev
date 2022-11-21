
const Tech = () => {

    const creditCard = 'You can mint an NFT using a Credit Card (Visa, Mastercard, Amex). No need to convert to ETH.';
    const batchMint = 'You can mint 1 or up to 3 NFT\'s simultaneously for one gas fee!!';
    const smartContract = 'Our Smart Contract is optimized to reduce multiple blockchains writes, resulting in the lowest gas fees possible per transaction.';


    return ( 
        <div className='masterhead justify-content-center mt-3 mt-md-5 pt-5 mx-2' id='tech'>
            {/* heading */}
            <div className='container mt-md-3'>
                <div className='row'>
                    <div className='col align-items-center '>
                        <h1 className="header mt-5 mt-sm-2 px-2 pt-2" id="glow-mid">Tech</h1>
                     </div>
                </div>
            </div>
            
            <div className="row justify-content-center align-items-start">

            {/* <!-- Content section 1--> */}
            <section className='col-12 col-sm-8 col-lg-4'>
                <div className="container px-2">
                    <div className="row align-items-center">

                    {/* text box */}
                    <div className="col-12 pic-box ">
                            <img className="img-fluid" src="containers/techBox.png" alt="..." />

                            <div className="row p-5 p-md-1 w-100 pic-inner justify-content-center">
                                <div className='col-10 align-items-center justify-content-center'>
                                    <h3 className="text-center techText mt-3" id="glow-mid">Credit Card Minting</h3>
                                    <p  className="px-2  text-center techTextInner" id="glow-mid">{creditCard}</p>
                                </div>
                            </div>
                        </div>

                        {/* img */}
                        <div className="col-12">
                            <div className=""><img className="img-fluid" src="cubs/low.png" alt="..." /></div>
                        </div>        
                    </div>
                </div>
            </section>

        

            {/* <!-- Content section 2--> */}
            <section className='col-12 col-sm-8 col-lg-4'>
                    <div className="container px-2">
                        <div className="row align-items-center justify-content-center">

                            {/* img */}
                            <div className="col-12 order-last order-lg-first mt-3 mt-md-0">
                                <div className=""><img className="img-fluid" src="cubs/top.png" alt="..." /></div>
                            </div>
                            
                            {/* text box1*/}
                            <div className="col-12 pic-box ">
                            <img className="img-fluid" src="containers/techBox.png" alt="..." />

                            <div className="row p-5 p-md-1 w-100 pic-inner justify-content-center">
                                <div className='col-10 align-items-center justify-content-center'>
                                    <h3 className="text-center techText mt-3" id="glow-mid">Batch Minting</h3>
                                    <p  className="px-2 text-center techTextInner" id="glow-mid">{batchMint}</p>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </section>

            {/* <!-- Content section 3--> */}
        <section className='col-12 col-sm-8 col-lg-4 mt-5 mt-lg-0'>
                <div className="container px-2">
                    
                    <div className="row  align-items-center">
                    {/* text box1 */}
                    <div className="col-12 pic-box ">
                            <img className="img-fluid" src="containers/techBox.png" alt="..." />

                            <div className="row p-5 p-md-1 w-100 pic-inner justify-content-center">
                                <div className='col-10 align-items-center justify-content-center'>
                                    <h3 className="text-center techText mt-3" id="glow-mid">Low Gas Fees</h3>
                                    <p  className="px-2 text-center techTextInner" id="glow-mid">{smartContract}</p>
                                </div>
                            </div>

                        </div>
                        
                        {/* img */}
                        <div className="col-12">
                            <div className=""><img className="img-fluid" src="cubs/mid.png" alt="..." /></div>
                        </div>   
                    </div>
                </div>
            </section>

    
        </div>
    </div>
    );
}
 
export default Tech;