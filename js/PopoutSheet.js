const _0x3f6049=_0x103c;(function(_0x982efe,_0x1b7b62){const _0x3ee3ce=_0x103c,_0x4902fd=_0x982efe();while(!![]){try{const _0x4f87ad=-parseInt(_0x3ee3ce(0x1e2))/0x1*(-parseInt(_0x3ee3ce(0x1cb))/0x2)+-parseInt(_0x3ee3ce(0x1e3))/0x3+-parseInt(_0x3ee3ce(0x221))/0x4*(parseInt(_0x3ee3ce(0x220))/0x5)+parseInt(_0x3ee3ce(0x21d))/0x6+-parseInt(_0x3ee3ce(0x1df))/0x7*(parseInt(_0x3ee3ce(0x223))/0x8)+parseInt(_0x3ee3ce(0x1d7))/0x9*(parseInt(_0x3ee3ce(0x1f7))/0xa)+-parseInt(_0x3ee3ce(0x1f0))/0xb;if(_0x4f87ad===_0x1b7b62)break;else _0x4902fd['push'](_0x4902fd['shift']());}catch(_0x1c3a2c){_0x4902fd['push'](_0x4902fd['shift']());}}}(_0x5a8f,0x379e8));import{LGT}from'./Util.js';import{UtilApplications}from'./UtilApplications.js';import{Config}from'./Config.js';import{UtilEvents}from'./UtilEvents.js';function _0x103c(_0x5edf15,_0x51222d){const _0x5a8f33=_0x5a8f();return _0x103c=function(_0x103c3f,_0x554f1e){_0x103c3f=_0x103c3f-0x1be;let _0x5392fe=_0x5a8f33[_0x103c3f];return _0x5392fe;},_0x103c(_0x5edf15,_0x51222d);}import{UtilLibWrapper}from'./PatcherLibWrapper.js';class PopoutSheet{static['init'](){const _0x5a3130=_0x103c;PopoutSheet[_0x5a3130(0x1d2)][_0x5a3130(0x219)](_0x498be9=>{Hooks['on'](_0x498be9,(_0x5cd382,_0x5e31d1,_0x345fe3)=>{const _0xefd761=_0x103c;PopoutSheet[_0xefd761(0x1f5)](_0x5cd382,_0x5e31d1,_0x345fe3),PopoutSheet['_doHandleSubPopout'](_0x5cd382,_0x5e31d1,_0x345fe3);});}),UtilLibWrapper[_0x5a3130(0x224)]('Application.prototype.bringToTop',this[_0x5a3130(0x1e0)],UtilLibWrapper['LIBWRAPPER_MODE_WRAPPER']);}static[_0x3f6049(0x1e0)](_0x1c85ce,..._0x504763){const _0x3d65fe=_0x3f6049,_0x9fac0f=_0x1c85ce(..._0x504763);if(this[_0x3d65fe(0x214)])try{this['_plut_popoutWindow'][_0x3d65fe(0x1c8)]();}catch(_0x4f4aa3){}return _0x9fac0f;}static[_0x3f6049(0x1f5)](_0x40d8ec,_0x3822d1,_0x362233){const _0x55d6a9=_0x3f6049,_0x3f561f=UtilApplications[_0x55d6a9(0x1fb)](_0x40d8ec)[_0x55d6a9(0x215)](_0x55d6a9(0x207))[_0x55d6a9(0x206)](_0x55d6a9(0x209));_0x3f561f[_0x55d6a9(0x206)](_0x55d6a9(0x21f))[_0x55d6a9(0x200)](),$(_0x55d6a9(0x1d5))[_0x55d6a9(0x1f6)](_0x14467a=>this[_0x55d6a9(0x202)](_0x14467a,_0x40d8ec,_0x3822d1,_0x362233))[_0x55d6a9(0x1ec)](_0x3f561f[_0x55d6a9(0x206)](_0x55d6a9(0x1c3)));}static[_0x3f6049(0x202)](_0x8d55ca,_0x449771,_0x4b3d4c,_0x1d0286){const _0x15a94b=_0x3f6049;_0x8d55ca[_0x15a94b(0x20a)](),this[_0x15a94b(0x1cf)](_0x449771,_0x1d0286);}static[_0x3f6049(0x211)](){const _0x5c871d=_0x3f6049,_0xab6e50=[],_0x46033f=_0x128fcc=>{const _0x2dbfbb=_0x103c,_0x37929e=_0x2dbfbb(0x1de)in _0x128fcc?_0x128fcc[_0x2dbfbb(0x1de)]:_0x128fcc[_0x2dbfbb(0x20f)];if(!_0x37929e)return;const _0x467821=[];[..._0x37929e||[]][_0x2dbfbb(0x219)](_0xf7746b=>{const _0x481a67=_0x2dbfbb;let _0x4c34c5=_0x481a67(0x1d1)in _0xf7746b?_0xf7746b[_0x481a67(0x1d1)]:_0xf7746b[_0x481a67(0x1d8)]+_0x481a67(0x1c9)+_0xf7746b[_0x481a67(0x1ce)]['cssText']+_0x481a67(0x1ca);_0x4c34c5[_0x481a67(0x1f3)](_0x481a67(0x203))&&(_0x4c34c5=_0x4c34c5['replace'](/(url\(")([^"]+)("\))/g,(..._0x432592)=>{const _0x2098fa=_0x481a67;if(_0x432592[0x2]['startsWith']('/')||!_0x128fcc[_0x2098fa(0x225)])return''+_0x432592[0x1]+_0x432592[0x2]+_0x432592[0x3];else{const _0x42caad=new URL(_0x128fcc[_0x2098fa(0x225)])[_0x2098fa(0x1d4)][_0x2098fa(0x1eb)]('/')[_0x2098fa(0x1fe)](0x0,-0x1)[_0x2098fa(0x218)]('/');return''+_0x432592[0x1]+_0x42caad+'/'+_0x432592[0x2]+_0x432592[0x3];}})),_0x467821[_0x481a67(0x1fc)](_0x4c34c5);}),_0xab6e50[_0x2dbfbb(0x1fc)](_0x2dbfbb(0x1c7)+_0x467821[_0x2dbfbb(0x218)]('\x0a')+_0x2dbfbb(0x1dc));};return[...document[_0x5c871d(0x1e7)]||[]][_0x5c871d(0x219)](_0x495ca9=>{const _0x15f29a=_0x5c871d;try{_0x46033f(_0x495ca9);}catch(_0x562b18){console[_0x15f29a(0x1ff)](...LGT,_0x562b18);if(_0x495ca9[_0x15f29a(0x225)])_0xab6e50[_0x15f29a(0x1fc)](_0x15f29a(0x1dd)+_0x495ca9['href']+'\x22>');}}),_0xab6e50['join']('\x0a');}static[_0x3f6049(0x1cf)](_0x555039,_0x46f89){const _0x3c2cfe=_0x3f6049,_0x56454d=_0x555039['title']||UtilApplications[_0x3c2cfe(0x1e4)](_0x46f89),_0x43a0da=_0x555039[_0x3c2cfe(0x21c)]?.[_0x3c2cfe(0x21b)]||0x320,_0x33d033=_0x555039[_0x3c2cfe(0x21c)]?.[_0x3c2cfe(0x1db)]||0x320,_0x27869e=open('',_0x56454d,_0x3c2cfe(0x1d9)+_0x43a0da+_0x3c2cfe(0x1c2)+_0x33d033+',location=0,menubar=0,status=0,titlebar=0,toolbar=0,directories=0');if(_0x27869e==null){ui[_0x3c2cfe(0x212)][_0x3c2cfe(0x1ff)](_0x3c2cfe(0x1e8));throw new Error(_0x3c2cfe(0x1cc));}_0x27869e[_0x3c2cfe(0x1c5)][_0x3c2cfe(0x1fa)](_0x3c2cfe(0x1cd)+_0x56454d+_0x3c2cfe(0x217)+this[_0x3c2cfe(0x211)]()+_0x3c2cfe(0x1d6)+document[_0x3c2cfe(0x1ed)][_0x3c2cfe(0x1c6)]+_0x3c2cfe(0x1c4));const _0x57715c=$(_0x27869e['document'][_0x3c2cfe(0x1ed)]);_0x555039['_plut_popoutWindow']=_0x27869e;const _0xa8644d=_0x555039[_0x3c2cfe(0x1f4)];_0x555039[_0x3c2cfe(0x1f4)]=async()=>{};const _0x1d7d58=UtilApplications[_0x3c2cfe(0x1fb)](_0x555039)[_0x3c2cfe(0x215)](_0x3c2cfe(0x207));_0x1d7d58[_0x3c2cfe(0x1f9)](_0x3c2cfe(0x1e5)),_0x57715c[_0x3c2cfe(0x1d3)](_0x1d7d58);const _0x3f1fba=_0x1d7d58[_0x3c2cfe(0x206)](_0x3c2cfe(0x213))[_0x3c2cfe(0x1f9)]('ve-hidden');UtilEvents[_0x3c2cfe(0x20e)]({'element':_0x27869e['document'][_0x3c2cfe(0x1ed)]}),_0x27869e[_0x3c2cfe(0x1be)](_0x3c2cfe(0x208),()=>{const _0x7e8934=_0x3c2cfe;UtilEvents['unbindDocumentHandlers']({'element':_0x27869e['document']['body']}),$(document['body'])['append'](_0x1d7d58),_0x1d7d58['removeClass']('pop__window'),_0x3f1fba[_0x7e8934(0x1bf)]('ve-hidden'),delete _0x555039[_0x7e8934(0x214)],_0x555039[_0x7e8934(0x1f4)]=_0xa8644d,_0x555039[_0x7e8934(0x1e6)]();}),window['addEventListener'](_0x3c2cfe(0x21a),()=>{const _0x1ade09=_0x3c2cfe;_0x27869e[_0x1ade09(0x1e6)]();});}static['_doHandleSubPopout'](_0x578df3,_0x213b99,_0x273ef2){const _0x5f28a3=_0x3f6049;if(!Config[_0x5f28a3(0x1f8)]('ui',_0x5f28a3(0x1ea)))return;if(_0x578df3['_plut_popoutWindow'])return;const _0x455c15=_0x578df3?.[_0x5f28a3(0x20c)]?.[_0x5f28a3(0x1e9)]?.['apps']||{};if(!_0x455c15)return;const _0x494ebd=Object[_0x5f28a3(0x204)](_0x455c15)[_0x5f28a3(0x1fd)](_0x18ef85=>!!_0x18ef85[_0x5f28a3(0x214)]);if(!_0x494ebd)return;this['doPopout'](_0x578df3,_0x273ef2);}static[_0x3f6049(0x216)](_0x8e7084){const _0x476540=_0x3f6049;return!!_0x8e7084[_0x476540(0x214)];}}PopoutSheet['_POPOUT_HOOKS']=[_0x3f6049(0x1d0),_0x3f6049(0x205),_0x3f6049(0x1f1),'renderJournalSheet',_0x3f6049(0x201),'renderCardsConfig',_0x3f6049(0x20d),_0x3f6049(0x21e),_0x3f6049(0x1c1),_0x3f6049(0x1da),_0x3f6049(0x1c0),'renderSceneDirectory',_0x3f6049(0x1f2),_0x3f6049(0x1ee),_0x3f6049(0x210),_0x3f6049(0x222),'renderCardsDirectory','renderPlaylistDirectory',_0x3f6049(0x1ef),_0x3f6049(0x1e1),_0x3f6049(0x20b)];export{PopoutSheet};function _0x5a8f(){const _0x3daa97=['2YvcQTs','Could\x20not\x20open\x20popout\x20window!','\x0a\x09\x09<!DOCTYPE\x20html>\x0a\x09\x09<html\x20lang=\x22en\x22><head>\x0a\x09\x09\x09<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x09\x09\x09<title>','style','doPopout','renderSceneConfig','cssText','_POPOUT_HOOKS','append','pathname','<a\x20class=\x22pop__btn-open\x22\x20title=\x22Pop\x20Out\x22><span\x20class=\x22fas\x20fa-fw\x20fa-external-link-alt\x22></span></a>','\x0a\x09\x09</head><body\x20class=\x22ve-flex-col\x20overflow-overlay\x20','27JOsSnP','selectorText','width=','renderImportList','height','\x0a\x09\x09\x09</style>','<link\x20rel=\x22stylesheet\x22\x20href=\x22','cssRules','35gzraKK','_lw_Application_prototype_bringToTop','renderSettings','157789xNFSoq','157119zwAZJT','getDataName','pop__window','close','styleSheets','Could\x20not\x20open\x20pop-up\x20window!\x20Please\x20check\x20your\x20browser\x20settings,\x20and\x20allow\x20this\x20site\x20to\x20open\x20(multiple)\x20pop-up\x20windows.','parent','isEnableSubPopouts','split','insertBefore','body','renderItemDirectory','renderCompendiumDirectory','855261QTuIpV','renderItemSheet','renderActorDirectory','includes','minimize','_doAddButtonSheet','click','642660HHTpHC','get','addClass','write','$getAppElement','push','some','slice','error','remove','renderRollTableConfig','pHandleButtonClick','@font-face','values','renderActorSheet','find','.app','unload','.window-header','preventDefault','renderMacroDirectory','object','renderCardConfig','bindDocumentHandlers','rules','renderJournalDirectory','_getDocumentStyleHtml','notifications','.window-resizable-handle','_plut_popoutWindow','closest','isPoppedOut','</title>\x0a\x0a\x09\x09\x09','join','forEach','beforeunload','width','position','2363604MMTwaf','renderArtBrowserApp','.pop__btn-open','55QMLTqo','85104nqYTCk','renderRollTableDirectory','244072LqatGN','addPatch','href','addEventListener','removeClass','renderCombatTracker','renderChooseImporter',',height=','.close','\x22></body></html>\x0a\x09\x09','document','className','<style>\x0a\x09\x09\x09\x09','focus','\x20{\x0a','\x0a}\x0a'];_0x5a8f=function(){return _0x3daa97;};return _0x5a8f();}