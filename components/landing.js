import { useEffect, useState } from "react";


const Landing = () => {

    // tygr links
    const openseaLink = '';
    const instagramLink = '';
    const twitterLink = '';
    const discordLink = '';

    // tesla displayLogic
    const [hideTesla, setHideTesla ] = useState(false);
    useEffect(() => {
        if(window.innerWidth < 900){
                setHideTesla(true);
            }else{
                setHideTesla(false);

            }

        window.addEventListener('resize',()=>{
            if(window.innerWidth < 900){
                setHideTesla(true);
            }else{
                setHideTesla(false);

            }
        })
      
    }, [])


    /////////////////     countdown logic      //////////////////////
 
    // presale date
    const target = new Date('3/14/23 20:00:00');

    // initial time difference setup
    const now = new Date();
    const difference = target.getTime() - now.getTime()
    
    // calculates time
    const d = Math.floor(difference/ (1000 * 60 * 60 * 24)); 
    const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60 )); 
    const s = Math.floor(
        (difference % (1000 * 60)) / (1000)); 


    const [days, setDays] = useState(d);
    const [hours, setHours] = useState(h);
    const [minutes, setMinutes] = useState(m);
    const [seconds, setSeconds] = useState(s);



    // time update func
    useEffect(() => {
        
        // update new time difference every 1000ms
        const interval = setInterval(()=>{

            const now = new Date();
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference/ (1000 * 60 * 60 * 24)); 
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
            setHours(h);

            const m = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60 )); 
            setMinutes(m);

            const s = Math.floor(
                (difference % (1000 * 60)) / (1000)); 
            setSeconds(s);


        }, 1000)
        return () => clearInterval(interval)

    }, [])


    /////////////////     inc/dec logic      //////////////////////

    const maxAmt = 3;

    const [mintAmt, updateAmt] = useState(0);

    const inc = () => {
        mintAmt +=1;

        if (mintAmt > maxAmt) mintAmt = maxAmt
        updateAmt(mintAmt)
    }

     const dec = () => {
        mintAmt -=1;

        if (mintAmt < 0) mintAmt = 0
        updateAmt(mintAmt)
    }


    return ( 
        <header className="masthead text-center mt-0 mt-sm-5 justify-content-center mx-2 landing " id='home'>
            {/* container justify-content-center */}
            <div className="container-fluid " >
                
                <div className='row justify-content-start '>
                    {/* <!-- socials--> */}
                    <div className='col-2 d-none d-md-block justify-content-start'>
                        <div className='d-flex align-items-center h-100 justify-content-start' id='glow-mid'>
                            <div className='row justify-content-start'>

                                {/* opensea */}
                                <a >
                                    <div className='col-12 col-md-5'>
                                        < div className ='figure'>
                                        <img  className="img-fluid image-main " src="socials/opensea.png" alt="..." />
                                         <img  className="img-fluid image-hover" src="socials/opensea-glow.png" alt="..." />
                                         </div>
                                    </div>
                                </a>
                                {/* twitter */}
                                <a >
                                    <div className='col-12 col-md-5'>
                                        <div className='figure'>
                                            <img className="img-fluid image-main" src="socials/twitter.png" alt="..." />
                                            <img className="img-fluid image-hover" src="socials/twitter-glow.png" alt="..." />
                                        </div>
                                    </div>
                                </a>
                                {/* instagram */}
                                <a >
                                    <div className='col-12 col-md-5'>
                                        <div className='figure'>
                                            <img className="img-fluid image-main" src="socials/insta.png" alt="..." />
                                            <img className="img-fluid image-hover" src="socials/insta-glow.png" alt="..." />
                                        </div>
                                    </div>
                                </a>
                                {/* discord */}
                                <a >
                                    <div className='col-12 col-md-5'>
                                        <div className='figure'>
                                            <img className="img-fluid image-main" src="socials/discord.png" alt="..." />
                                            <img className="img-fluid image-hover" src="socials/discord-glow.png" alt="..." />
                                        </div>
                                    </div>
                                </a>
                               
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className="col-12 navSpacer"></div> */}

                    {/* <!-- Masthead Heading--> */}
                    <div className='col-12 col-md-8 mt-5 pt-5 pt-sm-0 mt-sm-3'>
                        
                        {/* <!-- Title--> */}
                        <h1 className="mt-5 mt-md-3 pt-5 banner" id="glow-bright">TYGR CUB ALLIANCE</h1>
     
                        {/* <!-- Masthead Avatar Image--> */}
                        <div className='col-10 col-sm-7 col-lg-7 col-xl-6 mx-auto'>
                            <img className="img-fluid w-100" src="cubs/group.png" alt="..." />
                        </div>
                    </div>

                    {/* <!-- Countdown --> */}
                    <div className='col-12 col-md-2 d-sm-block '>
                    
                         <div className='cointer d-flex align-items-center justify-content-center h-100' id='glow-mid'>
                            <div className='row w-100 align-items-center justify-content-center'>

                                <div className='col-6 col-md-12  order-first  align-items-start'>
                                    <h4 className='text-start text-md-center fs-3' id='glow-bright'>NFT Presale</h4>
                                </div>

                                {/* Presale title */}
                                <div className='col-3 col-md-12'>
                                    <div className='row align-items-end justify-content-end'>
                                        <h3 className='col-12 col-md-5 text-center text-md-end headText time' id='glow-bright'>{days}</h3>
                                        <h5 className='col-12 col-md-7 text-center text-md-start countDownSub time' id='glow-bright'>Day{days != 1 ?'s':''}</h5>
                                    </div>
                                </div>

                                {/* Presale days */}
                                 <div className='col-3 col-md-12 ' >
                                    <div className='row align-items-end'>
                                        <h3 className='col-12 col-md-5 text-center text-md-end headText time' id='glow-bright'>{hours}</h3>
                                        <h5 className='col-12 col-md-7 ext-center text-md-start countDownSub time' id='glow-bright'>Hr{hours != 1 ?'s':''}</h5>
                                    </div>
                                </div>

                                 {/* Presale mins */}
                                  <div className='col-3 col-md-12' >
                                    <div className='row align-items-end'>
                                        <h3 className='col-12 col-md-5 text-center text-md-end headText time' id='glow-bright'>{minutes}</h3>
                                        <h5 className='col-12 col-md-7 text-center text-md-start countDownSub time' id='glow-bright'>Min{minutes != 1 ?'s':''}</h5>
                                    </div>
                                </div>

                                {/* Presale sec */}
                                  <div className='col-3 col-md-12' >
                                    <div className='row align-items-end'>
                                        <h3 className='col-12 col-md-5 text-center text-md-end headText time' id='glow-bright'>{seconds}</h3>
                                        <h5 className='col-12 col-md-7 text-center text-md-start countDownSub time' id='glow-bright'>Secs</h5>
                                    </div>
                                </div>
                                
                            
                                {/* <h3 className='col-12 text-right' id='glow-mid'>{hours} Hrs</h3>
                                <h3 className='col-12 text-right' id='glow-mid'>{minutes} Min</h3> */}
                                
                                {/* Presale mins */}
                                <div className='col-6 col-md-12  order-first order-md-last ' >
                                    <div className='row align-items-end w-100 '>
                                        <h5 className='col-md-12 text-end text-xl-center fs-2 justify-content-end time' id='glow-bright'>3.14.23</h5>
                                  </div>
                                </div>

                            </div>

                        </div>
                        
                
                    </div>
                </div>

                {/* sub head group btn */}
                <div className='row justify-content-center'>

                    {/* tesla btn */}
                    <div className='col-4 col-sm-3 pb-5 mb-xl-5  order-sm-first d-none d-sm-block' >
                         {!hideTesla && <a href={'#tesla'}>
                            <div className='figure mx-5'>
                                <img className="img-fluid image-main" src="containers/teslaBtn.png" alt="..." />
                                <img className="img-fluid image-hover" src="containers/teslaBtn-glow.png" alt="..." />
                            </div>
                        </a>}

                    </div>
               
                    {/* <!-- btn Group--> */}
                    <div className='container-fluid col-sm-6 align-items-center justify-content-center mb-sm-5 '>

                        <div className='row justify-content-center align-items-center'>

                            <div className='col-12 '>
                                {/* <!--Mint Bts--> */}
                                <div className="row justify-content-center"> 
                                    {/* ether */}
                                        <div className="col-8 col-md-6">
                                            <button className="btn btn-default shadow-none">
                                            <div className='figure'>
                                                {/* <img className="img-fluid image-main"src="containers/mintBtn-ETH.png" alt="..." /> */}
                                                <img className="img-fluid image-main" src="containers/mintBtn-ETH-grayed.png" alt="..." />
                                            </div>
                                        </button>
                                    </div>

                                    {/* usd */}
                                    <div className="col-8 col-md-6">
                                            <button className="btn btn-default shadow-none">
                                            <div className='figure'>
                                                {/* <img className="img-fluid image-main" src="containers/mintBtn-USD.png" alt="..." /> */}
                                                <img className="img-fluid image-main" src="containers/mintBtn-USD-grayed.png" alt="..." />
                                            </div>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className='col-6 col-sm-10 justify-content-center'>

                              
                                {/* <!--Inc/dec Bts--> */}
                                {/* <div className='row justify-content-center d-none d-sm-block '>
                                   
                                    <div className="col-5 col-sm-12 mt-2 justify-content-center align-items-center">

                                        
                                        <div className='container d-flex  justify-content-center align-items-center '>
                                            <div className="row justify-content-center align-items-center rounded-pill" >
                                            
                                                <div className='col-6 col-sm-4 order-sm-first'>
                                                    <button onClick={dec} type="button" className="btn btn-default shadow-none">
                                                    <div className='figure'>
                                                            <img className="img-fluid image-main"src="containers/dec.png" alt="..." />
                                                            <img className="img-fluid image-hover" src="containers/dec-press.png" alt="..." />
                                                        </div>
                                                    </button>
                                                </div>   */}

                                                {/* mint num */}
                                                {/* <div className='col-12 col-sm-3 order-first order-sm-2 text-center justify-content-end align-items-center '>   
                                                    <h1 className='fs-1 mt-3' id='glow-bright'>{mintAmt}</h1>
                                                </div>  

                                                <div className='col-6 col-sm-4 order-sm-last'> 
                                                    <button onClick={inc} type="button" className="btn btn-default shadow-none" id='glow-btn'>
                                                        <div className='figure'>
                                                            <img className="img-fluid image-main"src="containers/inc.png" alt="..." />
                                                            <img className="img-fluid image-hover" src="containers/inc-press.png" alt="..." />
                                                        </div>
                                                    </button>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>

                                   
                              

                                </div> */}

                            </div>
                        </div>
                    </div>

                    {/* bottom right */}
                    <div className='col-10 col-sm-3 '></div>

                 </div>
            </div>


        </header>
     );
}
 
export default Landing;