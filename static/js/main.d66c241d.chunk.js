(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),n=t(8),l=t.n(n),r=t(2),o=t(3),c=t(5),d=t(4),u=t(6),p=t(1),m="http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/",y=[{url:"".concat(m,"kicks/152[kb]808bd3.aif.mp3"),id:"Bassdrum-01",keyPress:"Q",keyCode:81},{url:"".concat(m,"kicks/61[kb]bass-kickers-2.wav.mp3"),id:"Bassdrum-02",keyPress:"W",keyCode:87},{url:"".concat(m,"kicks/152[kb]808distbd.aif.mp3"),id:"Bassdrum-03",keyPress:"E",keyCode:69},{url:"".concat(m,"hats/27[kb]909-bright-ohh.aif.mp3"),id:"Hat-Closed",keyPress:"A",keyCode:65},{url:"".concat(m,"hats/33[kb]909-banging-lofi-hat.aif.mp3"),id:"Hat-Open",keyPress:"S",keyCode:83},{url:"".concat(m,"claps/13[kb]707_HCP.WAV.mp3"),id:"Clap",keyPress:"D",keyCode:68},{url:"".concat(m,"various%20electronic%20hits/19[kb]fm-wave-hit.wav.mp3"),id:"Wat-hit",keyPress:"Z",keyCode:90},{url:"".concat(m,"various%20electronic%20hits/20[kb]blonky.wav.mp3"),id:"Blonk",keyPress:"X",keyCode:88},{url:"".concat(m,"various%20electronic%20hits/65[kb]jackhammer.aif.mp3"),id:"Jack-Hammer",keyPress:"C",keyCode:67}],k=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).playClip=t.playClip.bind(Object(p.a)(Object(p.a)(t))),t.handleKeyPress=t.handleKeyPress.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){var a=this;e.keyCode===this.props.keyCode&&(document.getElementById(this.props.audioId).classList.add("playing"),setTimeout(function(){return document.getElementById(a.props.audioId).classList.remove("playing")},100),this.playClip())}},{key:"playClip",value:function(){var e=document.getElementById(this.props.keyPress);e.currentTime=0,e.play(),this.props.updateDisplay(this.props.audioId.replace(/-/g," "))}},{key:"render",value:function(){return i.a.createElement("button",{style:{cursor:"pointer",borderStyle:"none",borderRadius:"5px",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.5)",backgroundColor:"rgba(93,93,93)",color:"white",outline:"none",width:"60px",height:"60px",margin:"3px"},id:this.props.audioId,onClick:this.playClip,className:"drum-pad"},i.a.createElement("audio",{className:"clip",id:this.props.keyPress,src:this.props.audio}),this.props.keyPress)}}]),a}(s.Component),h=function(e){function a(e){return Object(r.a)(this,a),Object(c.a)(this,Object(d.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return[].slice.call(document.getElementsByClassName("clip")).forEach(function(a){a.volume=e.props.volumeVal}),i.a.createElement("div",{className:"volumeSlider"},i.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.01",className:"slider",id:"myRange",value:this.props.volumeVal,onChange:this.props.updateVolume}))}}]),a}(s.Component),b=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={currentAudios:y,volumeLevel:.5,display:""},t.clearDisplay=t.clearDisplay.bind(Object(p.a)(Object(p.a)(t))),t.displayName=t.displayName.bind(Object(p.a)(Object(p.a)(t))),t.displayVolume=t.displayVolume.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"clearDisplay",value:function(){this.setState({display:""})}},{key:"displayName",value:function(e){this.setState({display:e})}},{key:"displayVolume",value:function(e){var a=this;this.setState({volumeLevel:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout(function(){return a.clearDisplay()},1e3)}},{key:"render",value:function(){var e=this,a=this.state.currentAudios.map(function(a){return i.a.createElement("div",{key:a.keyPress},i.a.createElement(k,{audioId:a.id,audio:a.url,keyPress:a.keyPress,keyCode:a.keyCode,updateDisplay:e.displayName}))});return i.a.createElement("div",{id:"drum-machine"},i.a.createElement("div",{className:"container controllers"},i.a.createElement("div",{className:"label"},"MACHINE"),i.a.createElement("div",{id:"pad-drums",className:"control-pads row col-md-7"},a),i.a.createElement("div",{id:"display-bank",className:"display-bank"},i.a.createElement("div",{id:"display",className:"control-display"},this.state.display),i.a.createElement("div",{id:"slider",className:"control-slider"},i.a.createElement(h,{volumeVal:this.state.volumeLevel,updateVolume:this.displayVolume})))))}}]),a}(s.Component);l.a.render(i.a.createElement(b,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(14)}},[[9,2,1]]]);
//# sourceMappingURL=main.d66c241d.chunk.js.map