"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),a=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),l=n(t),i=n(a);const o=i.default.svg`
  animation: ${e=>{return t=e.direction,a.keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${t});
  }
`;var t}} ${e=>e.speed}
    linear infinite;
  color: ${e=>e.color};
  opacity: ${e=>e.opacity};
`;function s({color1:e="#FF6F61",color2:t="#ffa9a1",opacity1:a=.5,opacity2:n=1,speed:l="1s",direction:i="-360deg",size:s="100"}){return r.default.createElement(r.default.Fragment,null,r.default.createElement(o,{xmlns:"http://www.w3.org/2000/svg",width:s,height:s,fill:"none",speed:l,direction:i,viewBox:"0 0 110 110"},r.default.createElement("path",{fill:e,d:"M110 55c0 30.376-24.624 55-55 55S0 85.376 0 55 24.624 0 55 0s55 24.624 55 55Zm-92.85 0c0 20.904 16.946 37.85 37.85 37.85S92.85 75.904 92.85 55 75.904 17.15 55 17.15 17.15 34.096 17.15 55Z",opacity:a}),r.default.createElement("path",{fill:t,d:"M101.425 55c4.736 0 8.643-3.862 7.908-8.54A54.999 54.999 0 0 0 63.54.667C58.862-.068 55 3.84 55 8.575c0 4.736 3.887 8.478 8.502 9.542a37.843 37.843 0 0 1 18.262 10.119 37.85 37.85 0 0 1 10.119 18.262C92.947 51.113 96.689 55 101.425 55Z",opacity:n})))}s.propTypes={color1:l.default.string,color2:l.default.string,opacity1:l.default.number,opacity2:l.default.number,speed:l.default.string,direction:l.default.string,size:l.default.string};const d=a.keyframes`
	0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	}
  
`,f=i.default.svg`
  color: ${e=>e.color};
`,c=i.default.circle`
  animation: ${d} 1.3s linear infinite;

  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: -1.1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
`;function p({colors:e=["#22333B","#FF6F61","#B7AEA3"]}){const t=Array.from({length:e.length});return r.default.createElement(f,{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",viewBox:"0 0 100 100",fill:"none"},t.map(((t,a)=>r.default.createElement(c,{cx:20*(a+1),cy:"49.5",r:"8",fill:e[a],key:a}))))}p.propTypes={colors:l.default.arrayOf(l.default.string),duration:l.default.string};const u=a.keyframes`
  0%, 50%, 100% {
    border-radius: 12px; /* Square with rounded corners */
    transform: scale(1); /* Default size */
  }
  25% {
    border-radius: 50%; /* Circle shape */
    transform: scale(0.7); /* Smaller circle */
  }
`,m=i.default.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`,h=i.default.div`
  transform: scale(0.5); /* Adjust this scale value to change size */
  transform-origin: center; /* Scale from the center */
`,x=i.default.div`
  width: 100px;
  height: 100px;
  background-color: ${e=>e.color||"#333"};
  border-radius: 12px;
  animation: ${u} 4s infinite ease-in-out;
  animation-delay: ${e=>e.delay||"0s"};
`,g=a.keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`,y=i.default.svg`
  width: ${e=>e.size||"100px"};
  height: ${e=>e.size||"100px"};
  fill: none;
  display: flex;
`,$=i.default.path`
  animation: ${g} ${e=>e.speed||"2s"} ease-in-out
    infinite;
  animation-delay: ${e=>e.delay||"0s"};
  fill: ${e=>e.fill||"black"};
  opacity: ${e=>e.opacity||"1"};
`;function C({size:e,color:t,opacity:a,speed:n}){const l=t||["#ffa9a1","#FF6F61"];return r.default.createElement(y,{xmlns:"http://www.w3.org/2000/svg",width:e||"30",height:e||"26",viewBox:"0 0 30 26",fill:"none",size:e},r.default.createElement("g",{clipPath:"url(#clip0_395_73)"},r.default.createElement($,{d:"M-20.1557 23.1651L-22.4453 24.8897C-24.419 26.3763 -25.5797 28.7038 -25.5797 31.1747V49.1513C-25.5797 53.4969 -22.0568 57.0198 -17.7112 57.0198H177.69C182.035 57.0198 185.558 53.4969 185.558 49.1513V35.4992C185.558 33.2551 184.6 31.1178 182.925 29.6248L170.864 18.8764C168.17 16.4757 164.188 16.2151 161.204 18.2441L147.546 27.5318C144.981 29.2756 141.632 29.3505 138.992 27.7229L129.697 21.9924C127.336 20.5365 124.382 20.4316 121.924 21.7163L116.746 24.4218C113.56 26.0864 109.652 25.3807 107.249 22.7074L100.606 15.315C97.1909 11.5146 91.1157 11.9265 88.2447 16.1532L84.2741 21.9989C81.7837 25.6652 76.758 26.5523 73.163 23.9599L65.3646 18.3367C62.4675 16.2476 58.5267 16.3719 55.767 18.6395L48.0492 24.9813C45.3673 27.185 41.5583 27.371 38.6745 25.4392L34.8228 22.8589C31.9672 20.9459 28.2003 21.1079 25.5194 23.2588L24.128 24.3752C21.0483 26.8461 16.6143 26.652 13.7623 23.9214L11.6883 21.9356C8.71581 19.0897 4.0525 19.0148 0.990242 21.7639L-0.363153 22.9788C-3.13543 25.4676 -7.27311 25.671 -10.2762 23.4663L-10.765 23.1074C-13.5648 21.0518 -17.3813 21.0752 -20.1557 23.1651Z",fill:l[0],speed:n||"2s",delay:"0s",opacity:a||1}),r.default.createElement($,{d:"M-167.683 26.3393L-169.973 28.0639C-171.946 29.5506 -173.107 31.878 -173.107 34.3489V52.3255C-173.107 56.6711 -169.584 60.194 -165.238 60.194H30.1625C34.5082 60.194 38.031 56.6711 38.031 52.3255V38.6734C38.031 36.4294 37.0729 34.2921 35.3975 32.7991L23.3363 22.0507C20.6424 19.6499 16.6607 19.3893 13.6768 21.4184L0.0185394 30.706C-2.54597 32.4499 -5.89561 32.5247 -8.53546 30.8971L-17.8301 25.1666C-20.1915 23.7107 -23.1449 23.6058 -25.6036 24.8905L-30.7814 27.5961C-33.9669 29.2606 -37.8755 28.5549 -40.2779 25.8816L-46.921 18.4892C-50.3363 14.6888 -56.4115 15.1007 -59.2825 19.3274L-63.2531 25.1731C-65.7435 28.8395 -70.7692 29.7265 -74.3642 27.1342L-82.1626 21.5109C-85.0597 19.4218 -89.0005 19.5461 -91.7602 21.8138L-99.478 28.1555C-102.16 30.3592 -105.969 30.5453 -108.853 28.6134L-112.704 26.0331C-115.56 24.1202 -119.327 24.2821 -122.008 26.4331L-123.399 27.5494C-126.479 30.0203 -130.913 29.8262 -133.765 27.0956L-135.839 25.1098C-138.811 22.2639 -143.475 22.189 -146.537 24.9381L-147.89 26.1531C-150.663 28.6418 -154.8 28.8453 -157.803 26.6405L-158.292 26.2816C-161.092 24.226 -164.909 24.2495 -167.683 26.3393Z",fill:l[1],speed:n||"2s",delay:"0.2s",opacity:a||1})),r.default.createElement("defs",null,r.default.createElement("clipPath",{id:"clip0_395_73"},r.default.createElement("rect",{width:"30",height:"26",rx:"13",fill:"white"}))))}C.propTypes={size:l.default.string,color:l.default.arrayOf(l.default.string),opacity:l.default.number,speed:l.default.string};const w=({size:t=90,color1:a="#FF6F61",color2:n="#22333B",color3:l="#ffa9a1",duration:i=3})=>{const[o,s]=e.useState({}),[d,f]=e.useState({}),[c,p]=e.useState({});e.useEffect((()=>{s({animation:`morph1 ${i}s infinite ease-in-out`}),f({animation:`morph2 ${i}s infinite ease-in-out`}),p({animation:`morph3 ${i}s infinite ease-in-out`})}),[i]);const u=4*t;return r.default.createElement(r.default.Fragment,null,r.default.createElement("style",null,`\n          @keyframes morph1 {\n            0%, 100% {\n              transform: translate(0px, 0px);\n              width: ${t}px;\n              height: ${t}px;\n            } \n            33% {\n              transform: translate(${1.66*t}px, -${1.11*t}px);\n              width: ${.66*t}px;\n              height: ${.66*t}px;\n            } \n            66% {\n              transform: translate(${1.11*t}px, ${1.11*t}px);\n              width: ${1.55*t}px;\n              height: ${1.55*t}px;\n            }\n          } \n\n          @keyframes morph2 {\n            0%, 100% {\n              transform: translate(${1.66*t}px, -${1.11*t}px);\n              width: ${.66*t}px;\n              height: ${.66*t}px;\n            }\n            33% {\n              transform: translate(${1.11*t}px, ${1.11*t}px);\n              width: ${1.55*t}px;\n              height: ${1.55*t}px;\n            }\n            66% {\n              transform: translate(0px, 0px);\n              width: ${t}px;\n              height: ${t}px;\n            }\n          }\n\n          @keyframes morph3 {\n            0%, 100% {\n              transform: translate(${1.11*t}px, ${1.11*t}px);\n              width: ${1.55*t}px;\n              height: ${1.55*t}px;\n            }\n            33% {\n              transform: translate(0px, 0px);\n              width: ${t}px;\n              height: ${t}px;\n            }\n            66% {\n              transform: translate(${1.66*t}px, -${1.11*t}px);\n              width: ${.66*t}px;\n              height: ${.66*t}px;\n            }\n          }\n        `),r.default.createElement("div",{style:{position:"relative",width:`${u}px`,height:.75*u+"px",margin:"50px auto"}},r.default.createElement("div",{style:{position:"absolute",borderRadius:"50%",backgroundColor:a,...o}}),r.default.createElement("div",{style:{position:"absolute",borderRadius:"50%",backgroundColor:n,...d}}),r.default.createElement("div",{style:{position:"absolute",borderRadius:"50%",backgroundColor:l,...c}})))};w.propTypes={size:l.default.number,color1:l.default.string,color2:l.default.string,color3:l.default.string,duration:l.default.number},exports.Circles=w,exports.Dots=p,exports.PulseBox=({colors:e=["#22333B","#FF6F61","#ffa9a1","#22333B"]})=>r.default.createElement(h,null,r.default.createElement(m,null,r.default.createElement(x,{color:e[0],delay:"0s"}),r.default.createElement(x,{color:e[1],delay:"1s"}),r.default.createElement(x,{color:e[2],delay:"3s"}),r.default.createElement(x,{color:e[3],delay:"2s"}))),exports.Spin=s,exports.Wave=C;
