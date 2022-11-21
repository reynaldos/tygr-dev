

const Mintmap = () => {

    
    /////////////////     roadmap logic      //////////////////////

    // current date difference setup
    const now = new Date();


    // whitelist date
    const whitelistDate = new Date('2/4/23 00:00:00');

    // presale date
    const preSaleDate = new Date('3/14/23  00:00:00');

    // public mint date
    const publicMintDate = new Date('3/15/23  00:00:00');

    var currentPoint;
    if (now > publicMintDate){
        currentPoint = 2;
    }else if(now > preSaleDate){
        currentPoint = 1;
    }else{
        currentPoint = 0;
    }

    

    var trailImg = '/roadmap/rm' + currentPoint + '.png'
    var blinkPointImg = '/roadmap/points/point' + currentPoint + '.png'


    return (  
        <div className='masterhead justify-content-center mt-5 pt-5 mx-2' id='mintmap'>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col align-items-center '>
                        <h1 className="header mt-5 mt-sm-2 px-2 pt-2 pic-tl" id="glow-mid">Roadmap</h1>
                     </div>
                </div>
            </div> */}

             <div className='container mt-5'>
                <div className='row'>
                    <div className="col-12 pic-box ">
                    <div className="pic-tl">
                            <h1 className="header mt-0 mt-sm-2 px-2 pic-tl" id="glow-mid">MintMap</h1>
                        </div>

                        <img className="img-fluid" src={trailImg} alt="..." />
                        {/* <div className="col-12"> */}
                        
                        <img className="img-fluid pic-inner px-2 ps-sm-0" src='/roadmap/rm-desc.png'/>
                        <img className="img-fluid pic-inner blink p-2 ps-sm-0" src={blinkPointImg}/>
                        {/* </div> */}
                        
                     </div>
                </div>
            </div>
        </div>

    );
}
 
export default Mintmap;