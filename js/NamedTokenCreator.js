const _0x375282=_0x3090;function _0x331c(){const _0x12ddf3=['8218380jCHPPW','_pGetTokenBlob','_pGetBlankTokenImage','\x22Modesto\x20Condensed\x22,\x20\x22Palatino\x20Linotype\x22,\x20serif','named-token/','_CACHE_IMAGE','_BB_X1','9mKsUpy','pCreateToken','modules/','223364rImAhC','_BB_Y0','scene','39ExuaFL','_BB_Y1','pSaveImageToServerAndGetUrl','93594BmgwjU','108JHkafp','pDrawTextGetBlob','#d0c04c','5852763raxQIG','5666592vUgWUr','_pCreateToken','6219UmKlVI','create','pLoadTempImage','19890310bUtgkA','_BB_X0'];_0x331c=function(){return _0x12ddf3;};return _0x331c();}(function(_0x1ea29f,_0x108f6b){const _0x1b7c66=_0x3090,_0x65a3fb=_0x1ea29f();while(!![]){try{const _0x4ca06d=parseInt(_0x1b7c66(0x1be))/0x1*(parseInt(_0x1b7c66(0x1b8))/0x2)+-parseInt(_0x1b7c66(0x1b4))/0x3*(-parseInt(_0x1b7c66(0x1b1))/0x4)+parseInt(_0x1b7c66(0x1c3))/0x5+-parseInt(_0x1b7c66(0x1b7))/0x6+parseInt(_0x1b7c66(0x1bb))/0x7+-parseInt(_0x1b7c66(0x1bc))/0x8+parseInt(_0x1b7c66(0x1ae))/0x9*(-parseInt(_0x1b7c66(0x1c1))/0xa);if(_0x4ca06d===_0x108f6b)break;else _0x65a3fb['push'](_0x65a3fb['shift']());}catch(_0x1fe49d){_0x65a3fb['push'](_0x65a3fb['shift']());}}}(_0x331c,0xca4ae));import{SharedConsts}from'../shared/SharedConsts.js';function _0x3090(_0xa8de89,_0x3f7975){const _0x331c3f=_0x331c();return _0x3090=function(_0x309056,_0x1497c1){_0x309056=_0x309056-0x1ae;let _0x444e97=_0x331c3f[_0x309056];return _0x444e97;},_0x3090(_0xa8de89,_0x3f7975);}import{Vetools}from'./Vetools.js';import{UtilImage}from'./UtilImage.js';class NamedTokenCreator{static async[_0x375282(0x1af)]({name:_0x1f017d,xScene:_0x2d1808,yScene:_0x20d975,width:width=0x1,height:height=0x1,scale:scale=0x1}){const _0xc5248e=_0x375282;if(!canvas['scene'])throw new Error('There\x20is\x20currently\x20no\x20active\x20scene!');const _0x17a53d=await this[_0xc5248e(0x1c5)](),_0x46b710=await this[_0xc5248e(0x1c4)]({'name':_0x1f017d,'img':_0x17a53d}),_0x40a158=await Vetools[_0xc5248e(0x1b6)]({'blob':_0x46b710,'path':_0xc5248e(0x1c7)+_0x1f017d+'.png'});return this[_0xc5248e(0x1bd)]({'name':_0x1f017d,'url':_0x40a158,'xScene':_0x2d1808,'yScene':_0x20d975,'width':width,'height':height,'scale':scale});}static async[_0x375282(0x1c5)](){const _0xd74fdd=_0x375282;return UtilImage[_0xd74fdd(0x1c0)](_0xd74fdd(0x1b0)+SharedConsts['MODULE_NAME']+'/media/img/blank.png',{'isCacheable':!![]});}static['_pGetTokenBlob']({name:_0x3fae72,img:_0x572de3}){const _0x56bdcd=_0x375282;return UtilImage[_0x56bdcd(0x1b9)]({'text':_0x3fae72,'img':_0x572de3,'bbX0':NamedTokenCreator[_0x56bdcd(0x1c2)],'bbX1':NamedTokenCreator[_0x56bdcd(0x1c9)],'bbY0':NamedTokenCreator[_0x56bdcd(0x1b2)],'bbY1':NamedTokenCreator[_0x56bdcd(0x1b5)],'color':_0x56bdcd(0x1ba),'font':_0x56bdcd(0x1c6)});}static[_0x375282(0x1bd)]({name:_0x4d1cc2,url:_0x3811b1,xScene:_0x1651ce,yScene:_0xc39dee,width:_0x52fbea,height:_0x10d058,scale:_0x24156e}){const _0x5581ea=_0x375282;return TokenDocument[_0x5581ea(0x1bf)]({'name':_0x4d1cc2,'x':_0x1651ce,'y':_0xc39dee,'img':_0x3811b1,'width':_0x52fbea,'height':_0x10d058,'scale':_0x24156e},{'parent':canvas[_0x5581ea(0x1b3)]});}}NamedTokenCreator[_0x375282(0x1c2)]=0x1f,NamedTokenCreator[_0x375282(0x1c9)]=0xf6,NamedTokenCreator['_BB_Y0']=0x5d,NamedTokenCreator[_0x375282(0x1b5)]=0xb6,NamedTokenCreator[_0x375282(0x1c8)]=null;export{NamedTokenCreator};