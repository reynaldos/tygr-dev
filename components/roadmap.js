
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const data = [
     {
        id: 1,
        header: 'begin building on top of NFT worlds land purchased before mint ',
        desc:"NFT Worlds is a metaverse NFT collection of 10,000 unique Minecraft worlds that describes itself as a fully decentralized, fully customizable, community-driven, play to earn gaming platform. Each NFT contains a world seed, which is a code that generates a Minecraft world. With Minecraft being one of the most popular games of all time, we intend to use this platform as a vehicle to introduce ourselves to existing minecraft players and ease first timers into crypto land.",
        desc2: ''
    },
    // {
    //     id: 1,
    //     header: 'Buy NFT worlds land and Sandbox land',
    //     desc:"We’re creating a mutual fund to give our community a chance to own and profit from the lands they will interact, play, and earn on! A percentage of secondary sales will be used to purchase various metaverse lands/assets for TYGR Cub Alliance’s Meta Mutual Fund. TYGRNFT holders will enjoy fractionalized ownership of high growth potential assets-–many of which will be decided upon by vote within the community!",
    //     desc2: ''
    // },
     {
        id: 2,
        header: 'Staking begins',
        desc:"TYGR NFT holders who don’t have time to fight may still enjoy exposure to passive $WRLD income by staking their Cubs.",
        desc2: 'Cubs who play are able to claim $WRLD Token. Biweekly, the top 5 performers on the leaderboard will be rewarded substantially in either crypto, NFTs, alpha WL spots, or a plethora of valuable real life prizes and opportunities.'
    },{
        id: 3,
        header: 'Release Tygr Tournament p2e combat, earn $wrlds token',
        desc: 'Our goals are rooted in onboarding new users into the space and creating earning opportunities for crypto newbies. We believe the best way to help the masses into the world of crypto and NFTs is by speaking their language. With that in mind, we’re building our TYGR Tournament P2E combat game within NFT Worlds.',
        desc2: ''
    },{
        id: 4,
        header: 'Introduce TYGRNFT rent-to-earn',
        desc: 'In furtherance of this initiative, TYGR Tournament passes will be available for debit/credit card purchase in order to allow non-crypto users the chance to play and earn and most importantly learn the importance of NFTs.',
        desc2: 'Players compete to earn in the TYGR Tournament without owning a Cub may rent from the staked pool daily, allowing them to leverage staked Cubs’ access to enter. 50% of Tournament Pass purchase fees, and 50% of the rewards earned by Tournament Pass players will be distributed as rewards to staked cubs.'
    },{
        id: 5,
        header: 'Weekly benefits (Alpha WL raffle, nft giveaways, etc)',
        desc: 'We will stick to our promise of doing one of these each week starting immediately post mint for our community within discord.',
        desc2: ''
    },{
        id: 6,
        header: 'Reveal 3D MetaTYGR evolution',
        desc: 'Development of 3D MetaTYGR collection begins in preparation for game sequel within Sandbox.',
        desc2: ''
    },
];

import img from '../public/logo/logo.png'

const Roadmap = () => {

    return (  

         <div className='masterhead justify-content-center mt-5 pt-5 mx-3' id='roadmap'>
             <div className="container mt-5">
                 <div className="row">
                     <div className="col">
                         <h1 className='header' id="glow-mid">Roadmap</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <VerticalTimeline
                        lineColor='#F3FFE1'
                    >
                      <VerticalTimelineElement
                            
                                // key={object.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ backgroundColor: "#F3FFE133",
                                                border:'2px solid  #F3FFE1',
                                                backdropFilter: 'blur(4px)',
                                                borderRadius: '20px',
                                                boxShadow:" 0px 0px 5px rgba(248, 254, 239, 1)"

                                            }}

                                contentArrowStyle={{ borderRight: '10px solid  #F3FFE1' }}
                                // iconStyle={{ borderStyle:'none'}}
                                icon={<div className='container'>
                                             <img
                                        className="timelineLogo"
                                        src="https://d1fdloi71mui9q.cloudfront.net/duxEBTBjSaOmJxxkChb3_k6477NWXR4Qc2F8J"
                                        style={{
                                             marginLeft:'12px',
                                            border: "1px solid #d1c8c8"
                                        }}
                                        />
                                      </div>}
                                >

                              

                                <h3 className="vertical-timeline-element-title glow-mid">TYGR Club Alliance sells out 100%</h3>
                                <p className="glow-dim">Tesla giveaway winner revealed. </p>
                                <a id='glow-mid'  style={{float:'right'}} href={'#tesla'}><strong>More Info</strong><img src="/containers/next.png"  style={{width:'1rem'}} className="img-fluid "/></a>
{/* 
                                <p className='glow-dim'>
                                    Tesla giveaway winner revealed.
                                </p> */}
                                {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                                {/* <p className='glow-dim'>
                                    {object.desc}
                                </p> */}
                             
                        
                            </VerticalTimelineElement>

                        {data.map((object,index) =>{

                            return <VerticalTimelineElement
                            
                                key={object.id}
                                className="vertical-timeline-element--work"
                                contentStyle={{ backgroundColor: "#F3FFE133",
                                                border:'2px solid  #F3FFE1',
                                                backdropFilter: 'blur(4px)',
                                                borderRadius: '20px',
                                                boxShadow:" 0px 0px 5px rgba(248, 254, 239, 1)"

                                            }}

                                contentArrowStyle={{ borderRight: '10px solid  #F3FFE1' }}
                                // iconStyle={{ borderStyle:'none'}}
                                icon={<div className='container'>
                                    
                                     
                                             <img
                                        className="timelineLogo"
                                        src="https://d1fdloi71mui9q.cloudfront.net/duxEBTBjSaOmJxxkChb3_k6477NWXR4Qc2F8J"
                                        style={{
                                            marginLeft:'12px',
                                            border: "1px solid #d1c8c8"
                                        }}
                                        />
                                  
                                       
                                        </div>}

                                iconStyle={{ background: "transparent"}}
                             
                                >

                                <h5 className="vertical-timeline-element-title glow-mid">{object.header}</h5>
                                {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                                <p className='glow-dim'>
                                    {object.desc}
                                </p>
                                {object.desc2==''?
                                    <></> :  
                                    <p className='glow-dim'>{object.desc2}</p>
                                }
                        
                            </VerticalTimelineElement>

                            
                        })}  
                    </VerticalTimeline>

                </div>
        </div>


    );
}
 
export default Roadmap;
