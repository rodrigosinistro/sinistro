const _0x355f83=_0x4361;(function(_0x3c4c1b,_0x1e0636){const _0x30c534=_0x4361,_0xf479bf=_0x3c4c1b();while(!![]){try{const _0x5a54a5=-parseInt(_0x30c534(0x180))/0x1*(parseInt(_0x30c534(0x144))/0x2)+parseInt(_0x30c534(0x162))/0x3+-parseInt(_0x30c534(0x16f))/0x4+-parseInt(_0x30c534(0x14e))/0x5*(parseInt(_0x30c534(0x169))/0x6)+parseInt(_0x30c534(0x179))/0x7+-parseInt(_0x30c534(0x18f))/0x8+parseInt(_0x30c534(0x157))/0x9;if(_0x5a54a5===_0x1e0636)break;else _0xf479bf['push'](_0xf479bf['shift']());}catch(_0xdea8bf){_0xf479bf['push'](_0xf479bf['shift']());}}}(_0x5be4,0xe072a));import{UtilLibWrapper}from'./PatcherLibWrapper.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';import{LGT}from'./Util.js';import{ConfigConsts}from'./ConfigConsts.js';function _0x5be4(){const _0x1dd749=['_lw_Token_prototype__getTextStyle','handleConfigUpdate','text','tooltip','show-bloodsplat','data','isMonksLittleDetailsActive','parent','damageDealtBloodiedThreshold','drawEffects','nameplateFontSizeMultiplier','1888uFOifs','_handleConfigUpdate_displayDamageDealt_doAddDisplay','max','fill','warn','_handleConfigUpdate_displayDamageDealt_doRefreshTokens','removeChild','LIBWRAPPER_MODE_WRAPPER','round','isDisplayDamageDealt','17955RHrust','isAllowNameplateFontWrap','target','destroy','style','hud','size','handleFailedInitConfigApplication','Token.prototype._getTextStyle','16258221jeijRd','_lw_Token_prototype__onUpdate','nameplateFontWrapWidthMultiplier','_isForceDisabled','Container','_drawNameplate','bars','MonksLittleDetails','Token.prototype._onUpdate','_lw_Token_prototype_refresh','TokenDocument.prototype._onUpdateBaseActor','3202338CPwHMy','_handleConfigUpdate_doDraw','height','_doRemove','_handleConfigUpdate_displayDamageDealt_doUpdateDisplay','position','_doDestroyText','1176iuovzI','Failed\x20to\x20refresh\x20token\x20\x22','controls','isDefeated','some','fontSize','2843808SOBETA','get','togglePatch','attributes','dimensions','_drawAttributeBars','set','visible','nameplate','TokenDocument.prototype._onUpdateTokenActor','10392445TstlKf','_handleConfigUpdate_displayDamageDealt_','refresh','_pDoTokenFakeDraw','Token.prototype.refresh','addChild','wordWrapWidth','1707LbNiTc','isDamageDealtBelowToken','C_USE_GAME_DEFAULT','_handleConfigUpdate_togglePatches','canvasTextStyle','tokens','wordWrap','object','plut_dispDamageDealt','_lw_TokenDocument_prototype__onUpdateBaseActor','texture','getSafe','Failed\x20to\x20update\x20\x22damage\x20dealt\x22\x20display\x20for\x20token\x20\x22','anchor','clone','3304128bscYkh','_lw_TokenDocument_prototype__onUpdateTokenActor'];_0x5be4=function(){return _0x1dd749;};return _0x5be4();}import{UtilCompat}from'./UtilCompat.js';import{UtilGameSettings}from'./UtilGameSettings.js';class Patcher_Token{static[_0x355f83(0x160)](_0xa568a4,..._0x2ff9f1){const _0x25b634=_0x355f83,_0x4c8ab7=_0xa568a4(..._0x2ff9f1);return Patcher_Token[_0x25b634(0x166)](this),_0x4c8ab7;}static[_0x355f83(0x158)](_0x47ff78,..._0x6af626){const _0x27e87f=_0x47ff78(..._0x6af626);return Patcher_Token['_handleConfigUpdate_displayDamageDealt_doUpdateDisplay'](this),_0x27e87f;}static[_0x355f83(0x190)](_0x1c0635,..._0x6c534a){const _0x39cfe1=_0x355f83,_0x552438=_0x1c0635(..._0x6c534a);return Patcher_Token[_0x39cfe1(0x166)](this[_0x39cfe1(0x187)]),_0x552438;}static[_0x355f83(0x189)](_0x5a0018,..._0x38d63b){const _0x1411f3=_0x355f83,_0x3988de=_0x5a0018(..._0x38d63b);return Patcher_Token[_0x1411f3(0x166)](this[_0x1411f3(0x187)]),_0x3988de;}static[_0x355f83(0x191)](_0x34030a,..._0x340496){const _0xe74e5c=_0x355f83,_0x392ac4=_0x34030a(..._0x340496),_0x2aca4e=Config['get'](_0xe74e5c(0x185),_0xe74e5c(0x143));if(_0x2aca4e!=null){if(_0x392ac4['fontSize']!=null)_0x392ac4[_0xe74e5c(0x16e)]*=_0x2aca4e;}const _0x4f2ecc=Config[_0xe74e5c(0x170)](_0xe74e5c(0x185),'isAllowNameplateFontWrap');_0x4f2ecc!==ConfigConsts[_0xe74e5c(0x182)]&&(_0x392ac4[_0xe74e5c(0x186)]=!!_0x4f2ecc);const _0x4bc177=Config[_0xe74e5c(0x170)]('tokens',_0xe74e5c(0x159));if(_0x4bc177!=null){if(_0x392ac4[_0xe74e5c(0x17f)]!=null)_0x392ac4['wordWrapWidth']*=_0x4bc177;}return _0x392ac4;}static[_0x355f83(0x192)]({isInit:isInit=![],current:_0x33cb4f,previous:_0x5da31c}={}){const _0x503c17=_0x355f83,_0x5ab89e=MiscUtil[_0x503c17(0x170)](canvas,'tokens','placeables')||[];this['_handleConfigUpdate_displayDamageDealt']({'isInit':isInit,'tokens':_0x5ab89e}),this[_0x503c17(0x183)]();if(!this['_handleConfigUpdate_isDoDraw']({'isInit':isInit,'current':_0x33cb4f,'previous':_0x5da31c}))return;this[_0x503c17(0x163)]({'tokens':_0x5ab89e});}static[_0x355f83(0x183)](){const _0x389a88=_0x355f83;UtilLibWrapper[_0x389a88(0x171)](_0x389a88(0x17d),this[_0x389a88(0x160)],UtilLibWrapper[_0x389a88(0x14b)],Config['get'](_0x389a88(0x185),_0x389a88(0x14d))),UtilLibWrapper[_0x389a88(0x171)](_0x389a88(0x15f),this['_lw_Token_prototype__onUpdate'],UtilLibWrapper[_0x389a88(0x14b)],Config[_0x389a88(0x170)]('tokens',_0x389a88(0x14d))),UtilLibWrapper[_0x389a88(0x171)](_0x389a88(0x178),this[_0x389a88(0x190)],UtilLibWrapper[_0x389a88(0x14b)],Config['get']('tokens',_0x389a88(0x14d))),UtilLibWrapper[_0x389a88(0x171)](_0x389a88(0x161),this[_0x389a88(0x189)],UtilLibWrapper[_0x389a88(0x14b)],Config[_0x389a88(0x170)]('tokens',_0x389a88(0x14d))),UtilLibWrapper[_0x389a88(0x171)](_0x389a88(0x156),this[_0x389a88(0x191)],UtilLibWrapper[_0x389a88(0x14b)],[Config[_0x389a88(0x170)](_0x389a88(0x185),_0x389a88(0x143)),Config['get'](_0x389a88(0x185),'isAllowNameplateFontWrap'),Config[_0x389a88(0x170)](_0x389a88(0x185),_0x389a88(0x159))][_0x389a88(0x16d)](_0x1b4898=>_0x1b4898!=null));}static[_0x355f83(0x15a)](_0x1d5fa2){const _0x443121=_0x355f83;if(UtilCompat[_0x443121(0x197)]()&&UtilGameSettings[_0x443121(0x18b)](UtilCompat['MODULE_MONKS_LITTLE_DETAILS'],_0x443121(0x195))&&UtilCompat[_0x443121(0x15e)][_0x443121(0x16c)](_0x1d5fa2))return!![];return![];}static['_handleConfigUpdate_isDoDraw']({isInit:_0x1e3398,current:_0x4593,previous:_0x20ab47}){const _0x9ebfe=_0x355f83;if(_0x1e3398)return!![];if(!_0x4593||!_0x20ab47)return![];const _0x32f5ec=['isDisplayDamageDealt',_0x9ebfe(0x199),_0x9ebfe(0x181),'nameplateFontSizeMultiplier',_0x9ebfe(0x14f),_0x9ebfe(0x159)];return _0x32f5ec['some'](_0x4ba1a6=>MiscUtil[_0x9ebfe(0x170)](_0x4593,_0x9ebfe(0x185),_0x4ba1a6)!==MiscUtil[_0x9ebfe(0x170)](_0x20ab47,_0x9ebfe(0x185),_0x4ba1a6));}static[_0x355f83(0x163)]({tokens:_0x4ba526}){const _0x5c0da1=_0x355f83;for(const _0x61b94e of _0x4ba526){try{const _0x5cee6b=_0x61b94e['visible'];this[_0x5c0da1(0x17c)]({'token':_0x61b94e}),_0x61b94e[_0x5c0da1(0x176)]=_0x5cee6b;}catch(_0x9caa24){console[_0x5c0da1(0x148)](...LGT,_0x5c0da1(0x16a)+_0x61b94e['id']+'\x22!',_0x9caa24);}}}static async[_0x355f83(0x17c)]({token:_0x4c0d1b}){const _0x195d44=_0x355f83;if(!_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x198)])canvas[_0x195d44(0x16b)]['hud'][_0x195d44(0x17e)](_0x4c0d1b[_0x195d44(0x153)]);_0x4c0d1b['hud'][_0x195d44(0x14a)](_0x4c0d1b[_0x195d44(0x153)]['bars'])[_0x195d44(0x151)](),_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x14a)](_0x4c0d1b['hud'][_0x195d44(0x194)])[_0x195d44(0x151)](),_0x4c0d1b[_0x195d44(0x153)]['removeChild'](_0x4c0d1b[_0x195d44(0x153)]['effects'])[_0x195d44(0x151)](),_0x4c0d1b[_0x195d44(0x153)]['removeChild'](_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x150)])['destroy'](),_0x4c0d1b['hud'][_0x195d44(0x14a)](_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x177)])[_0x195d44(0x151)](),_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x15d)]=_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x17e)](_0x4c0d1b[_0x195d44(0x174)]()),_0x4c0d1b['hud'][_0x195d44(0x194)]=_0x4c0d1b['hud'][_0x195d44(0x17e)](_0x4c0d1b['_drawTooltip']()),_0x4c0d1b[_0x195d44(0x153)]['effects']=_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x17e)](new PIXI[(_0x195d44(0x15b))]()),_0x4c0d1b[_0x195d44(0x153)]['target']=_0x4c0d1b['hud'][_0x195d44(0x17e)](new PIXI['Graphics']()),_0x4c0d1b[_0x195d44(0x153)]['nameplate']=_0x4c0d1b[_0x195d44(0x153)][_0x195d44(0x17e)](_0x4c0d1b[_0x195d44(0x15c)]()),_0x4c0d1b[_0x195d44(0x17b)](),await _0x4c0d1b[_0x195d44(0x19a)](),_0x4c0d1b['drawBars']();}static['_handleConfigUpdate_displayDamageDealt']({isInit:isInit=![],tokens:_0x45a53d}={}){const _0x5e9d32=_0x355f83;try{return this[_0x5e9d32(0x17a)]({'tokens':_0x45a53d});}catch(_0x4a8992){if(!isInit)throw _0x4a8992;Config[_0x5e9d32(0x155)](_0x5e9d32(0x185),_0x5e9d32(0x14d),_0x4a8992);}}static[_0x355f83(0x17a)]({tokens:_0x113249}){const _0x4d5768=_0x355f83;this['_handleConfigUpdate_displayDamageDealt_doRefreshTokens']({'tokens':_0x113249,'isRemoveDisplays':!Config[_0x4d5768(0x170)](_0x4d5768(0x185),_0x4d5768(0x14d))});}static[_0x355f83(0x149)]({tokens:_0x5d64dd,isRemoveDisplays:_0x5b400a}){const _0x3ec6e6=_0x355f83;for(const _0x1e27d3 of _0x5d64dd){try{if(_0x5b400a)Patcher_Token[_0x3ec6e6(0x165)](_0x1e27d3);}catch(_0x205a45){}}}static['_doRemove'](_0x3507ae){const _0x4a4229=_0x355f83;if(!_0x3507ae[_0x4a4229(0x153)]?.[_0x4a4229(0x188)])return;this[_0x4a4229(0x168)](_0x3507ae[_0x4a4229(0x14a)](_0x3507ae[_0x4a4229(0x153)]?.[_0x4a4229(0x188)])),delete _0x3507ae[_0x4a4229(0x153)][_0x4a4229(0x188)];}static['_handleConfigUpdate_displayDamageDealt_doUpdateDisplay'](_0xd0920e){const _0x1f0620=_0x355f83;if(!_0xd0920e?.[_0x1f0620(0x153)])return;try{if(this[_0x1f0620(0x15a)](_0xd0920e)){Patcher_Token[_0x1f0620(0x165)](_0xd0920e);return;}this[_0x1f0620(0x145)](_0xd0920e);const _0x4a5820=MiscUtil['get'](_0xd0920e['actor'],_0x1f0620(0x196),_0x1f0620(0x196),_0x1f0620(0x172),'hp','max')||0x0,_0xfb2454=MiscUtil[_0x1f0620(0x170)](_0xd0920e['actor'],_0x1f0620(0x196),'data','attributes','hp','value')||0x0,_0x1c4b9d=Math['min'](_0x4a5820,Math[_0x1f0620(0x146)](0x0,_0x4a5820-_0xfb2454));_0xd0920e['hud'][_0x1f0620(0x188)][_0x1f0620(0x193)]='-'+_0x1c4b9d,_0xd0920e['hud']['plut_dispDamageDealt']['visible']=!!_0x1c4b9d;const _0x35fe00=Config['get']('tokens','nameplateFontSizeMultiplier');if(Config[_0x1f0620(0x170)](_0x1f0620(0x185),_0x1f0620(0x181)))_0xd0920e[_0x1f0620(0x153)][_0x1f0620(0x188)]['style'][_0x1f0620(0x16e)]=0x12*(_0x35fe00??0x1),_0xd0920e[_0x1f0620(0x153)]['plut_dispDamageDealt']['anchor']['set'](0.5,0x0),_0xd0920e[_0x1f0620(0x153)][_0x1f0620(0x188)][_0x1f0620(0x167)][_0x1f0620(0x175)](Math[_0x1f0620(0x14c)](_0xd0920e['w']/0x2),_0xd0920e['h']+0x1);else{_0xd0920e[_0x1f0620(0x153)][_0x1f0620(0x188)]['style'][_0x1f0620(0x16e)]=0x18*(_0x35fe00??0x1),_0xd0920e['hud'][_0x1f0620(0x188)][_0x1f0620(0x18d)]['set'](0x1,0x1);const _0xdf6dbb=Math[_0x1f0620(0x146)](canvas[_0x1f0620(0x173)][_0x1f0620(0x154)]/0xc,0x8)*(_0xd0920e[_0x1f0620(0x196)][_0x1f0620(0x164)]>=0x2?1.6:0x1);_0xd0920e[_0x1f0620(0x153)][_0x1f0620(0x188)][_0x1f0620(0x167)][_0x1f0620(0x175)](_0xd0920e['w']-0x3,_0xd0920e['h']-_0xdf6dbb);}if(_0xfb2454<=Math['floor'](_0x4a5820*Config['get']('tokens',_0x1f0620(0x199))))_0xd0920e[_0x1f0620(0x153)][_0x1f0620(0x188)][_0x1f0620(0x152)][_0x1f0620(0x147)]=0xff0000;else _0xd0920e[_0x1f0620(0x153)]['plut_dispDamageDealt'][_0x1f0620(0x152)]['fill']=0xffffff;}catch(_0x1bacf5){console[_0x1f0620(0x148)](...LGT,_0x1f0620(0x18c)+_0xd0920e['id']+'\x22!',_0x1bacf5);}}static[_0x355f83(0x145)](_0x4e0c09){const _0x401195=_0x355f83;if(_0x4e0c09['hud']?.[_0x401195(0x188)]&&_0x4e0c09[_0x401195(0x153)]?.[_0x401195(0x188)]['parent'])return;_0x4e0c09[_0x401195(0x153)]?.[_0x401195(0x188)]&&!_0x4e0c09[_0x401195(0x153)]?.[_0x401195(0x188)]?.[_0x401195(0x198)]&&(_0x4e0c09[_0x401195(0x14a)](_0x4e0c09[_0x401195(0x153)]?.['plut_dispDamageDealt']),this[_0x401195(0x168)](_0x4e0c09[_0x401195(0x153)]?.['plut_dispDamageDealt']),_0x4e0c09['hud'][_0x401195(0x188)]=null),_0x4e0c09[_0x401195(0x153)]['plut_dispDamageDealt']=new PreciseText('',CONFIG[_0x401195(0x184)][_0x401195(0x18e)]()),_0x4e0c09[_0x401195(0x17e)](_0x4e0c09[_0x401195(0x153)]?.[_0x401195(0x188)]);}static[_0x355f83(0x168)](_0x599223){const _0x179c2b=_0x355f83;if(!_0x599223?.[_0x179c2b(0x18a)])return;_0x599223[_0x179c2b(0x151)]();}}function _0x4361(_0x592cb2,_0x507623){const _0x5be45a=_0x5be4();return _0x4361=function(_0x436183,_0x5cb24a){_0x436183=_0x436183-0x143;let _0x2e5f7b=_0x5be45a[_0x436183];return _0x2e5f7b;},_0x4361(_0x592cb2,_0x507623);}export{Patcher_Token};