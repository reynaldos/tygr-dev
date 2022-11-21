
const Faq = () => {


  const q1_head = 'What is the total supply?';
  const q1_body = 'The total supply of TYGR Cub Alliance NFTs is 8,888.';

  const q2_head = 'When do we launch?';
  const q2_body = 'Pre-sale: 3/14/23 @ 8 PM EST';
  const q2_body_p2 = 'Public sale: 3/15/23 @ 8 PM EST';


  const q3_head = 'Single and Batch Mint Pricing';
  const q3_body = 'Pre-Sale is 0.069 ETH + gas';
  const q3_body_p2 = 'Public Sale is 0.08 ETH + gas';
  const q3_body_p3 = 'Limit: 3 TYGR Cubs per Wallet';
  const q3_body_p4 = 'Pre-Sale is equal to 0.069 ETH + gas';
  const q3_body_p5 = 'Public is equal to 0.08 ETH + gas';


  const q4_head = 'How to purchase?';
  const q4_body = 'We support Ethereum payments, and for the first time, you can mint an NFT using a Credit Card (Visa, Mastercard, Amex). TYGR NFT partnered with Innovation.eth to launch their patent-pending Credit Card minting capability.';
  const q4_body_p2 = 'Innovation.eth is a company specializing in Web3 technology innovations.';


  const q5_head = 'How to be whitelisted?';
  const q5_body = 'Be active on the TYGR Discord';
  const q5_body_p2 = 'Complete the instructions on the pinned tweet @TYGRNFT';
  const q5_body_p3 = 'Whitelist with a selfie: Show off any Tygr merch & tag 3 friends';


  const q6_head = 'What are the benefits of holding a TYGR NFT?';
  const q6_body = 'Eligible to participate in weekly snapshot giveaways ';
  const q6_body2 = 'Eligible for free mint of upcoming Cub Companion accessory';
  const q6_body3 = 'Exposure to residual income when TYGR staking goes live';
  const q6_body4 = 'Alpha access to desirable external whitelists ';
  const q6_body5 = 'Holding a genesis cub is the key to the TCA ecosystem. The genesis cub will unlock future capabilities.';

  const q7_head = 'Whitelist Registration';
  const q7_body = 'In order to reduce gas fees during whitelisting we require each preasale member to sign their whitelist request using their wallet.';


    return ( 

      <div className='masterhead justify-content-center mx-0 mx-sm-2 my-5 pt-5' id='faq'>
        <div className="container align-items-center" id='faq'>
             <h1 id="glow-mid" className="mt-5">FAQ</h1>

            {/* mobile accordian */}
            <div className="accordion d-block d-md-none" id="accordionExample">
              {/* quesstion 1 */}
              <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingOne">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q1_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-3 text-start fs-4" id="glow-mid">{q1_body}</p>
                  </div>

                  </div>
                </div>
              </div>

              {/* quesstion 2 */}
              <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingTwo">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q2_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-3 text-start fs-4" id="glow-mid"><li>{q2_body}</li><li>{q2_body_p2}</li></p>
                  </div>

                  </div>
                </div>
              </div>

              {/* quesstion 3 */}
              <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingThree">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q3_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" >
                  <div className="accordion-body">
                  <div className="dropDown p-3" id='glow-box'>
                  <p className="row text-left fs-5 align-items-center justify-content-evenly" id="glow-mid">
                        <div className="col-12">
                          <img src='/containers/eth-red-logo.png'></img> Ethereum<br/><li>{q3_body}</li><li>{q3_body_p2}</li>
                        </div>
                        <div className="col-12">
                          <strong id="dollar">$</strong> USD (Credit Card)<br/><li>{q3_body_p4}</li><li>{q3_body_p5}</li>
                        </div>
                      </p>
                      <p className="row text-center fs-5 align-items-center justify-content-evenly" id="glow-mid">{q3_body_p3}</p>
                      <p className="row text-center fs-5 align-items-center justify-content-evenly" id="glow-mid">**Minting one or multiple NFTs results in a SINGLE GAS FEE**</p>
                      
                  </div>

                  </div>
                </div>
              </div>

               {/* quesstion 4 */}
               <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingFour">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q4_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                  <p className="p-4 text-left fs-4 align-items-center" id="glow-mid">{q4_body}<br/><br/>{q4_body_p2}</p>
                      
                  </div>

                  </div>
                </div>
              </div>

               {/* quesstion 5 */}
               <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingFive">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q5_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      <p className="p-4 text-left fs-4 align-items-center" id="glow-mid">Complete any of the following: <li>{q5_body}</li><li>{q5_body_p2}</li><li>{q5_body_p3}</li></p>
                      <div className="col-12 px-4 pb-3 text-left fs-4 align-items-center" id="glow-mid">{q7_body}</div>
                  </div>

                  </div>
                </div>
              </div>

              {/* quesstion 6 */}
              <div className="accordion-item container align-items-center">
                <div className="accordion-header" id="headingSix">
                  
                  <button className="collapsed w-100 accordion-button align-items-center" id='glow-box' type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  
                  <div className="row align-items-center justify-content-start" >
                    <div className="col-12">
                      <h4 className="text-start align-middle" id='glow-mid'>{q6_head}</h4>
                    </div>
                  
                  </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      <p className="p-4 text-left fs-4 align-items-center" id="glow-mid"><li>{q6_body}</li><li>{q6_body2}</li><li>{q6_body3}</li><li>{q6_body4}</li><li>{q6_body5}</li></p>
                  </div>

                  </div>
                </div>
              </div>

              

            
            </div>

            {/* desktop accordian */}
            <div className="accordion d-none d-md-block" id="accordionExample">
              {/* quesstion 1 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  
                  <div className="conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start" id='glow-mid'>{q1_head}</h4>

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                  </div>
                  </button>
                </div>

              {/* text */}
              <div id="collapseOne" className="accordion-collapse collapse mx-5" aria-labelledby="headingOne" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-3 text-left fs-4 align-items-center" id="glow-mid">{q1_body}</p>
                  </div>

                  </div>
                </div>
              </div>

                {/* question 2 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  
                  <div className="conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start w-100" id='glow-mid'>{q2_head}</h4>
                  

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                    </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseTwo" className="accordion-collapse collapse mx-5" aria-labelledby="headingTwo" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-3 text-left fs-4 align-items-center" id="glow-mid"><li>{q2_body}</li><li>{q2_body_p2}</li></p>
                  </div>

                </div>
              </div>

              </div>


              {/* quesstion 3 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  
                  <div className="conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start w-100" id='glow-mid'>{q3_head}</h4>
                

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                    </div>
                  </button>
                </div>

                 {/* text */}
                 <div id="collapseThree" className="accordion-collapse collapse mx-5" aria-labelledby="headingThree" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      
                      <p className="row p-3 text-left fs-5 align-items-center justify-content-evenly" id="glow-mid">
                        <div className="col-6">
                          <img src='/containers/eth-red-logo.png'></img> Ethereum<br/><li>{q3_body}</li><li>{q3_body_p2}</li>
                        </div>
                        <div className="col-6">
                          <strong id="dollar">$</strong> USD (Credit Card)<br/><li>{q3_body_p4}</li><li>{q3_body_p5}</li>
                        </div>
                      </p>
                      <p className="row text-left fs-5 align-items-center justify-content-evenly" id="glow-mid">{q3_body_p3}</p>
                      <p className="row text-left fs-5 align-items-center justify-content-evenly" id="glow-mid">**Minting one or multiple NFTs results in a SINGLE GAS FEE**</p>
                      
                  </div>

               
              </div>
                </div>

              </div>

                {/* question 4 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingFour">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  
                  <div className=" conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start w-100" id='glow-mid'>{q4_head}</h4>
                  

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                    </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseFour" className="accordion-collapse collapse mx-5" aria-labelledby="headingFour" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-4 text-left fs-4 align-items-center" id="glow-mid">{q4_body}<br/><br/>{q4_body_p2}</p>
                  </div>

                  </div>
                </div>

              </div>

              {/* quesstion 5 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingFive">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  
                  <div className="conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start w-100" id='glow-mid'>{q5_head}</h4>
                  

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                    </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseFive" className="accordion-collapse collapse mx-5" aria-labelledby="headingFive" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      {/* <img className="img-fluid blur-img" src="containers/tile-expand.png" alt="..." /> */}
                      <p className="p-4 text-left fs-4 align-items-center" id="glow-mid">Complete any of the following: <li>{q5_body}</li><li>{q5_body_p2}</li><li>{q5_body_p3}</li></p>
                      <div className="col-12 px-4 pb-3 text-left fs-4 align-items-center" id="glow-mid">{q7_body}</div>
                  </div>

                  </div>
                </div>

              </div>

                {/* question 6 */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingSix">
                  <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  
                  <div className=" conatiner justify-content-between pic-box">
                    <img className="img-fluid" src="containers/tile-closed.png" alt="..." />
                    <h4 className="mx-5 my-auto pic-inner text-start w-100" id='glow-mid'>{q6_head}</h4>
                

                    {/* btn icon */}
                    <div  className="" id='accord'>
                        <img className="img-fluid image-main" src="containers/accord-btn.png" alt="..." /> 
                    </div>
                    </div>
                  </button>
                </div>

                {/* text */}
                <div id="collapseSix" className="accordion-collapse collapse mx-5" aria-labelledby="headingSix" >
                  <div className="accordion-body">
                  <div className="dropDown" id='glow-box'>
                      <p className="p-4 text-left fs-4 align-items-center" id="glow-mid"><li>{q6_body}</li><li>{q6_body2}</li><li>{q6_body3}</li><li>{q6_body4}</li><li>{q6_body5}</li></p>
                  </div>

                  </div>
                </div>

              </div>

            


            </div>
      </div>

      </div>
     );
}
 
export default Faq;