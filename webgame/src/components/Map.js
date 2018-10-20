import React from 'react';
import './Map.scss';

const Map = ({ onClick }) => {
    return (
        <div className="map">
            <svg width="100%" height="100%" viewBox="0 0 429 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M355.184 107.059L351.872 88.2922L352.123 79.754L335.059 58.5338L321.97 43.1727" stroke="white" onClick={console.log('svg click')}/>
                <path d="M170.143 303.84L86.9925 256.744L75.3749 238.386L75.8215 224.669L62.4529 186.286L73.3735 169.313L59.7546 161.873L64.1459 129.487L89.4367 145.441L90.6336 178.041" stroke="white"/>
                <path d="M286.545 271.425L247.131 259.975L191.371 171.074L183.09 171.031L183.983 107.483" stroke="white"/>
                <path d="M87.4735 369.779L86.8274 255.232L155.523 192.524L146.092 154.931L195.791 142.862L233.782 86.6565L259.882 131.546" stroke="white"/>
                <path d="M109.145 236.537L128.236 242.254L229.564 180.025L270.611 115.553L274.462 87.0618L300.673 73.1719L308.622 70.2475L323.25 43.6313L287.944 38.571L285.019 30.6222L318.05 7.8528" stroke="white"/>
                <path d="M231.139 179.976L248.505 191.106M248.505 191.106L283.985 140.361L282.935 121.636L318.944 98.3023L378.286 110.977L396.348 160.072L371.28 149.653L353.706 162.489L335.003 169.37L261.222 199.699L248.505 191.106Z" stroke="white"/>
                <path d="M111.322 234.943L91.4502 177.886L147.581 154.665L130.115 127.186L135.202 119.122L130.268 114.023L161.969 97.7378L185.039 108.057L203.395 92.7492L235.068 86.962" stroke="#FCFCFC"/>
                <path d="M129.468 243.714L169.525 302.451L213.102 272.393L285.365 271.836L274.832 221.131L260.654 200.885" stroke="white"/>
                <circle id="club1" cx="24.5" cy="24.5" r="11.5" fill="#D80000" transform="translate(326.55192,79.690929)" onClick={() => onClick(0)}/>
                <g filter="url(#filter0_d)" transform="translate(326.55192,79.690929)">
                    <circle cx="24.5" cy="24.5" r="14" stroke="#D80000"/>
                </g>
                <line x1="24.5" y1="35" x2="24.5" y2="57" stroke="#D80000" transform="translate(326.55192,79.690929)"/>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>

                <circle id="club2" cx="24.5" cy="24.5" r="11.5" fill="#D80000" transform="translate(206.639,122.976)" onClick={() => onClick(1)}/>
                <g filter="url(#filter0_d)" transform="translate(206.639,122.976)">
                    <circle cx="24.5" cy="24.5" r="14" stroke="#D80000"/>
                </g>
                <line x1="24.5" y1="35" x2="24.5" y2="57" stroke="#D80000" transform="translate(206.639,122.976)"/>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
                <circle id="club3" cx="24.5" cy="24.5" r="11.5" fill="#D80000" transform="translate(105.61963,175.80202)" onClick={() => onClick(2)}/>
                <g filter="url(#filter0_d)" transform="translate(105.61963,175.80202)">
                    <circle cx="24.5" cy="24.5" r="14" stroke="#D80000"/>
                </g>
                <line x1="24.5" y1="35" x2="24.5" y2="57" stroke="#D80000" transform="translate(105.61963,175.80202)"/>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="49" height="49" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>

            </svg>
        </div>
    )
};

export default Map;
