const _0x373d13=_0x5df8;(function(_0x7811bf,_0x3fa2cb){const _0x3ead09=_0x5df8,_0x24e1d5=_0x7811bf();while(!![]){try{const _0x2b6dc6=-parseInt(_0x3ead09(0x12e))/0x1+parseInt(_0x3ead09(0x118))/0x2+-parseInt(_0x3ead09(0x13c))/0x3+parseInt(_0x3ead09(0xd0))/0x4+-parseInt(_0x3ead09(0x16b))/0x5+-parseInt(_0x3ead09(0x136))/0x6+parseInt(_0x3ead09(0x15c))/0x7;if(_0x2b6dc6===_0x3fa2cb)break;else _0x24e1d5['push'](_0x24e1d5['shift']());}catch(_0x557309){_0x24e1d5['push'](_0x24e1d5['shift']());}}}(_0x4fd8,0xf30f3));import{SharedConsts}from'../shared/SharedConsts.js';import{Util}from'./Util.js';import{AppFilterBasic}from'./FilterApplications.js';import{BaseCollectionTool}from'./BaseCollectionTool.js';import{UtilApplications}from'./UtilApplications.js';function _0x5df8(_0x381e27,_0x5d3f8d){const _0x4fd864=_0x4fd8();return _0x5df8=function(_0x5df8ce,_0x95a283){_0x5df8ce=_0x5df8ce-0xb6;let _0x34c9c2=_0x4fd864[_0x5df8ce];return _0x34c9c2;},_0x5df8(_0x381e27,_0x5d3f8d);}function _0x4fd8(){const _0x2ca40b=['_pUpdateToken_populateDispositionUpdate','bar2','pSet','lightAngle','isVisionActive','model','TOKEN_DISPLAY_MODES','_$stageNameRegex','dimSight','_activateListeners_pDoLoadAndRender','title','warn','_pageFilter','contents','get','type','visionBright','system','barAttributeCharacter2','sightAngle','visionAngle','<input\x20class=\x22code\x22\x20type=\x22text\x22>','toObject','hideVe','forEach','brightSight','_sidebarTab','localize','activate','i18n','displayBars','21360514gmxfUv','isNameParseDoubleQuotes','add','lightOpacity','getData','sidebar','_pUpdateToken_populateImageUpdate','collection','entries','nameRegexFormula','actorLink','error','isHasVision','empty','isLinkActive','1961335EBhVeE','nameMode','/template/CollectionTokenUpdaterTemplate.hbs','barAttributeCharacter1','filter','lightAlpha','namePermissions','barPermissions','Quoted\x20Part\x20or\x20First\x20Name','...','toku__cb-head','data','Quoted\x20Part\x20or\x20Last\x20Name','_list','Actor','<button\x20class=\x22btn\x20btn-5et\x20btn-xs\x20ml-2\x22\x20title=\x22Reset\x20to\x20&quot;Do\x20not\x20update&quot;\x22><span\x20class=\x22glyphicon\x20glyphicon-refresh\x22></span></button>','TOKEN.BarAttributes','disposition','Saved!','TOKEN.BarValues','vision','barAttributeNpc1','close','Updated\x20','Regex','teardown','Failed\x20to\x20save!\x20','/template/CollectionTokenUpdater.hbs','last','_state','push','1571960zyScoY','<input\x20class=\x22code\x20text-right\x22\x20type=\x22text\x22\x20placeholder=\x22(No\x20update)\x22>','Full\x20Name','pUpdateDocument','_$stageNameQuotes','displayName','First\x20Name','brightLight','has','_STORAGE_KEY','Friendly','Set\x20scale\x20to\x20','ascSort','_addHookBase','token','lightBright','visionDim','values','instance','[name=\x22btn-set-template\x22]','toku__form','addClass','Last\x20Name','isNameActive','(None)','_getSelectedIds','Update\x20Complete','getMaxWindowHeight','showVe','dimLight','isResourcesActive','getActorBarAttributes','scale','Please\x20select\x20something\x20to\x20update!','state','$getIptInt','render','_DEFAULTS','NameUpdateMode','pGetState','IS_DEFAULT','$getSliderNumber','Continue','Use\x20Sheet\x20Image','fromObject','_pUpdateToken_populateNameUpdate','_pUpdateToken','keys','_pUpdateToken_populateResourcesUpdate','_activateListeners_initBtnEditTemplate','actor','character','map','<button\x20class=\x22btn-5et\x20w-100\x22>Save</button>','exec','Set\x20Sheet\x20to\x20Use\x20Token\x20Image\x20(Update\x20Actor\x20from\x20Token)','Template','isDispositionActive','name','Bulk\x20Prototype\x20Token\x20Editor','sort','Updated\x20Not\x20Configured','find','<input\x20class=\x22range-value\x20ml-2\x20form-control\x20form-control--minimal\x22>','click','You\x20have\x20not\x20yet\x20configured\x20the\x20updater.\x20Are\x20you\x20sure\x20you\x20wish\x20to\x20proceed?','split','STR_SEE_CONSOLE','pGetUserBoolean','bar1','flat','$getIptNumber','3563908AiIpaY','MODULE_LOCATION','lightDim','debounce','TOKEN.DISPLAY_','Updating...','Quoted\x20Part\x20or\x20Full\x20Name','notifications','_getAllAvailableActorBarAttributes','_activateListeners_pInitListAndFilters','npc','_$btnReset','isNameRegexIgnoreCase','trim','barAttributeNpc2','_pUpdateToken_populateLinkUpdate','imageSyncMode','info','_activateListeners_initBtnRun','activateListeners','(No\x20update)','isNameParseSingleQuotes','664733XfENZG','some','$getCbBool','_gameProp','Cancel','$getSelEnum','img','_rows','7678038WKIsdK','collection_token_updater','_pUpdateToken_populateVisionUpdate','getPod','localeCompare','_activateListeners_initBtnReset','5682606nTExaA'];_0x4fd8=function(){return _0x2ca40b;};return _0x4fd8();}import{UtilActors}from'./UtilActors.js';import{UtilDocuments}from'./UtilDocuments.js';class CollectionTokenUpdater extends BaseCollectionTool{constructor(){const _0x249c4d=_0x5df8;super({'title':_0x249c4d(0x10b),'template':SharedConsts[_0x249c4d(0x119)]+_0x249c4d(0xcc),'width':0x3c0,'height':Util[_0x249c4d(0xeb)](),'resizable':!![]},_0x249c4d(0x102)),this[_0x249c4d(0x149)]=new AppFilterBasic(),this[_0x249c4d(0xbe)]=null,this[_0x249c4d(0x123)]=null;}['activateListeners'](_0xc3c018){const _0x57ebd0=_0x5df8;super[_0x57ebd0(0x12b)](_0xc3c018),this[_0x57ebd0(0x12a)](_0xc3c018),this[_0x57ebd0(0x101)](_0xc3c018),this[_0x57ebd0(0x13b)](_0xc3c018),this[_0x57ebd0(0x121)](_0xc3c018);}[_0x373d13(0x12a)](_0x46a7b5){const _0x577a9d=_0x373d13;_0x46a7b5[_0x577a9d(0x10e)]('[name=\x22btn-run\x22]')[_0x577a9d(0x110)](async()=>{const _0x5e8cf7=_0x577a9d;if(!this[_0x5e8cf7(0xbe)])return;const _0x2323d3=this[_0x5e8cf7(0xe9)]();if(!_0x2323d3['length'])return ui[_0x5e8cf7(0x11f)][_0x5e8cf7(0x148)](_0x5e8cf7(0xf1));const _0x5f251e=await CollectionTokenUpdater[_0x5e8cf7(0x108)][_0x5e8cf7(0xf7)]();if(_0x5f251e[_0x5e8cf7(0xf8)]){const _0xfe12dc=await InputUiUtil[_0x5e8cf7(0x114)]({'title':_0x5e8cf7(0x10d),'htmlDescription':_0x5e8cf7(0x111),'textNo':_0x5e8cf7(0x132),'textYes':_0x5e8cf7(0xfa)});if(!_0xfe12dc)return;}this[_0x5e8cf7(0xc7)](),ui[_0x5e8cf7(0x161)]['activateTab'](this[_0x5e8cf7(0x157)]);const _0x11d02e=_0x2323d3['map'](({id:_0x36b832,name:_0x1fb7f6})=>new Util['Task'](_0x1fb7f6,()=>this[_0x5e8cf7(0xfe)](_0x36b832,_0x5f251e)));await UtilApplications['pRunTasks'](_0x11d02e,{'titleInitial':_0x5e8cf7(0x11d),'titleComplete':_0x5e8cf7(0xea),'fnGetRowRunningText':_0x55aab6=>'Updating\x20'+_0x55aab6+_0x5e8cf7(0xba),'fnGetRowSuccessText':_0x10d206=>_0x5e8cf7(0xc8)+_0x10d206+'.','fnGetRowErrorText':_0x26e015=>'Failed\x20to\x20update\x20'+_0x26e015+'!\x20'+VeCt[_0x5e8cf7(0x113)]}),game[this[_0x5e8cf7(0x131)]]['render']();});}[_0x373d13(0x101)](_0x55f5db){const _0x341b99=_0x373d13;_0x55f5db['find'](_0x341b99(0xe3))[_0x341b99(0x110)](()=>{const _0x38b8b2=_0x341b99,_0x5a398c=new CollectionTokenUpdater[(_0x38b8b2(0x108))]();_0x5a398c[_0x38b8b2(0xf4)](!![]);});}[_0x373d13(0x160)](){const _0x1e1a81=_0x373d13;return this['_rows']=this['_rows']=this['_mapEntitiesToRows'](),{...super[_0x1e1a81(0x160)](),'titleSearch':this['_collectionName']+'s','rows':this[_0x1e1a81(0x135)]};}async[_0x373d13(0xfe)](_0x2c4f3d,_0x2f1f46){const _0x3b950c=_0x373d13,_0x102947=CONFIG[_0x3b950c(0xbf)][_0x3b950c(0x163)][_0x3b950c(0xe2)][_0x3b950c(0x14b)](_0x2c4f3d);if(!_0x102947)return;const _0x4d2684={},_0x251989={},_0x21a0bc=[this[_0x3b950c(0x127)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989),this[_0x3b950c(0xfd)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989),this[_0x3b950c(0x13d)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989),this[_0x3b950c(0x162)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989),this[_0x3b950c(0x100)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989),this[_0x3b950c(0x138)](_0x102947,_0x2f1f46,_0x4d2684,_0x251989)];if(!_0x21a0bc[_0x3b950c(0x12f)](Boolean))return;await UtilDocuments[_0x3b950c(0xd3)](_0x102947,{..._0x251989,'token':_0x4d2684});}[_0x373d13(0x127)](_0x2bd6eb,_0x2c0903,_0x39bf5f){const _0x4b4967=_0x373d13;if(!_0x2c0903[_0x4b4967(0x16a)])return![];return _0x39bf5f[_0x4b4967(0x166)]=_0x2c0903['isLinkActorData'],!![];}['_pUpdateToken_populateNameUpdate'](_0x1dbb09,_0xb5404a,_0x268f6e){const _0x2d8325=_0x373d13;if(!_0xb5404a[_0x2d8325(0xe7)])return![];let _0x1548bb=![];const _0x5545c9=()=>_0x1dbb09[_0x2d8325(0x10a)][_0x2d8325(0x112)]('\x20')[0x0]['trim']()['replace'](/,;$/,'')['trim'](),_0x52fab7=()=>_0x1dbb09[_0x2d8325(0x10a)][_0x2d8325(0x112)]('\x20')[_0x2d8325(0xcd)]()[_0x2d8325(0x125)](),_0x48a785=()=>{const _0x164b51=_0x2d8325,_0x548a40=_0xb5404a[_0x164b51(0x15d)]&&_0xb5404a[_0x164b51(0x12d)]?'[\x22\x27]([^\x22\x27]*?)[\x22\x27]':_0xb5404a[_0x164b51(0x15d)]?'\x22([^\x22]*?)\x22':_0xb5404a[_0x164b51(0x12d)]?'\x27([^\x27]*?)\x27':'^$',_0x253f64=new RegExp(_0x548a40)[_0x164b51(0x106)](_0x1dbb09['name']);if(!_0x253f64)return null;return _0x253f64[0x1][_0x164b51(0x125)]();};if(_0xb5404a[_0x2d8325(0x16c)]!=null){_0x1548bb=!![];switch(_0xb5404a[_0x2d8325(0x16c)]){case _0x2d8325(0xd2):_0x268f6e['name']=_0x1dbb09['name'];break;case _0x2d8325(0xd6):_0x268f6e['name']=_0x5545c9();break;case _0x2d8325(0xe6):_0x268f6e[_0x2d8325(0x10a)]=_0x52fab7();break;case _0x2d8325(0x11e):{const _0x4a0b9f=_0x48a785();_0x268f6e[_0x2d8325(0x10a)]=_0x4a0b9f||_0x1dbb09[_0x2d8325(0x10a)];break;}case _0x2d8325(0xb9):{const _0x13f3d5=_0x48a785();_0x268f6e[_0x2d8325(0x10a)]=_0x13f3d5||_0x5545c9();break;}case _0x2d8325(0xbd):{const _0x39a124=_0x48a785();_0x268f6e[_0x2d8325(0x10a)]=_0x39a124||_0x52fab7();break;}case _0x2d8325(0xc9):{const _0x43278f=new RegExp(_0xb5404a[_0x2d8325(0x165)],_0xb5404a[_0x2d8325(0x124)]?'i':'')[_0x2d8325(0x106)](_0x1dbb09[_0x2d8325(0x10a)]);if(_0x43278f)_0x268f6e['name']=_0x43278f[0x1];break;}}}return _0xb5404a['namePermissions']!=null&&(_0x1548bb=!![],_0x268f6e[_0x2d8325(0xd5)]=Number(_0xb5404a[_0x2d8325(0xb7)])),_0x1548bb;}[_0x373d13(0x13d)](_0x5ac3d7,_0x279212,_0x27f874){const _0x319583=_0x373d13;if(!_0x279212[_0x319583(0x109)])return![];if(_0x279212[_0x319583(0xc2)]!=null)return _0x27f874['disposition']=_0x279212[_0x319583(0xc2)],!![];return![];}['_pUpdateToken_populateImageUpdate'](_0x1096ef,_0x572667,_0x1edc8f,_0x195419){const _0x5a4437=_0x373d13;if(!_0x572667['isImageActive'])return![];let _0x4d784a=![];if(_0x572667[_0x5a4437(0x128)]===0x0)_0x1edc8f['img']=_0x1096ef[_0x5a4437(0x134)],_0x4d784a=!![];else _0x572667[_0x5a4437(0x128)]===0x1&&(_0x195419['img']=_0x1096ef[_0x5a4437(0xbc)][_0x5a4437(0xde)]['img'],_0x4d784a=!![]);return _0x572667[_0x5a4437(0xf0)]!=null&&(_0x1edc8f[_0x5a4437(0xf0)]=_0x572667['scale'],_0x4d784a=!![]),_0x4d784a;}[_0x373d13(0x100)](_0x5bb51f,_0x47763b,_0x22f92e){const _0x307caf=_0x373d13;if(!_0x47763b[_0x307caf(0xee)])return![];let _0x11e486=![];return _0x47763b[_0x307caf(0xb8)]!=null&&(_0x11e486=!![],_0x22f92e[_0x307caf(0x15b)]=Number(_0x47763b[_0x307caf(0xb8)])),_0x5bb51f['data']['type']===_0x307caf(0x103)&&(_0x47763b[_0x307caf(0x16e)]!=null&&(_0x11e486=!![],_0x22f92e[_0x307caf(0x115)]={'attribute':_0x47763b[_0x307caf(0x16e)]===_0x307caf(0xe8)?null:_0x47763b[_0x307caf(0x16e)]}),_0x47763b[_0x307caf(0x14f)]!=null&&(_0x11e486=!![],_0x22f92e[_0x307caf(0x13e)]={'attribute':_0x47763b[_0x307caf(0x14f)]===_0x307caf(0xe8)?null:_0x47763b['barAttributeCharacter2']})),_0x5bb51f[_0x307caf(0xbc)][_0x307caf(0x14c)]===_0x307caf(0x122)&&(_0x47763b['barAttributeNpc1']!=null&&(_0x11e486=!![],_0x22f92e['bar1']={'attribute':_0x47763b[_0x307caf(0xc6)]===_0x307caf(0xe8)?null:_0x47763b[_0x307caf(0xc6)]}),_0x47763b[_0x307caf(0x126)]!=null&&(_0x11e486=!![],_0x22f92e[_0x307caf(0x13e)]={'attribute':_0x47763b[_0x307caf(0x126)]===_0x307caf(0xe8)?null:_0x47763b[_0x307caf(0x126)]})),_0x11e486;}[_0x373d13(0x138)](_0x5247de,_0x3e9dd5,_0x5eac2a){const _0x3bdf41=_0x373d13;if(!_0x3e9dd5[_0x3bdf41(0x141)])return![];let _0x1bd287=![];return _0x3e9dd5[_0x3bdf41(0x168)]!=null&&(_0x5247de['data'][_0x3bdf41(0xde)][_0x3bdf41(0xc5)]!==_0x3e9dd5['isHasVision']&&(_0x5eac2a[_0x3bdf41(0xc5)]=_0x3e9dd5[_0x3bdf41(0x168)],_0x1bd287=!![])),_0x3e9dd5[_0x3bdf41(0xe0)]!=null&&(_0x5247de['data'][_0x3bdf41(0xde)][_0x3bdf41(0x145)]!==_0x3e9dd5['visionDim']&&(_0x5eac2a['dimSight']=_0x3e9dd5[_0x3bdf41(0xe0)],_0x1bd287=!![])),_0x3e9dd5[_0x3bdf41(0x14d)]!=null&&(_0x5247de[_0x3bdf41(0xbc)][_0x3bdf41(0xde)][_0x3bdf41(0x156)]!==_0x3e9dd5[_0x3bdf41(0x14d)]&&(_0x5eac2a[_0x3bdf41(0x156)]=_0x3e9dd5[_0x3bdf41(0x14d)],_0x1bd287=!![])),_0x3e9dd5['visionAngle']!=null&&(_0x5247de['data']['token']['sightAngle']!==_0x3e9dd5[_0x3bdf41(0x151)]&&(_0x5eac2a[_0x3bdf41(0x150)]=_0x3e9dd5[_0x3bdf41(0x151)],_0x1bd287=!![])),_0x3e9dd5['lightDim']!=null&&(_0x5247de[_0x3bdf41(0xbc)]['token'][_0x3bdf41(0xed)]!==_0x3e9dd5['lightDim']&&(_0x5eac2a[_0x3bdf41(0xed)]=_0x3e9dd5[_0x3bdf41(0x11a)],_0x1bd287=!![])),_0x3e9dd5['lightBright']!=null&&(_0x5247de[_0x3bdf41(0xbc)]['token'][_0x3bdf41(0xd7)]!==_0x3e9dd5[_0x3bdf41(0xdf)]&&(_0x5eac2a[_0x3bdf41(0xd7)]=_0x3e9dd5['lightBright'],_0x1bd287=!![])),_0x3e9dd5[_0x3bdf41(0x140)]!=null&&(_0x5247de[_0x3bdf41(0xbc)][_0x3bdf41(0xde)]['lightAngle']!==_0x3e9dd5[_0x3bdf41(0x140)]&&(_0x5eac2a[_0x3bdf41(0x140)]=_0x3e9dd5[_0x3bdf41(0x140)],_0x1bd287=!![])),_0x3e9dd5[_0x3bdf41(0x15f)]!=null&&(_0x5247de[_0x3bdf41(0xbc)][_0x3bdf41(0xde)][_0x3bdf41(0xb6)]!==_0x3e9dd5['lightOpacity']&&(_0x5eac2a[_0x3bdf41(0xb6)]=_0x3e9dd5[_0x3bdf41(0x15f)],_0x1bd287=!![])),_0x1bd287;}[_0x373d13(0xc7)](..._0x4984b3){const _0x4ebc02=_0x373d13;return this[_0x4ebc02(0x149)][_0x4ebc02(0xca)](),super[_0x4ebc02(0xc7)](..._0x4984b3);}}CollectionTokenUpdater[_0x373d13(0x108)]=class extends Application{constructor(){const _0x4f5039=_0x373d13;super({'title':'Prototype\x20Token\x20Updater\x20Configuration','template':SharedConsts[_0x4f5039(0x119)]+_0x4f5039(0x16d),'width':0x258,'height':Util[_0x4f5039(0xeb)](0x384),'resizable':!![]});}[_0x373d13(0x12b)](_0x5201cd){const _0x3432ed=_0x373d13;_0x5201cd[_0x3432ed(0x169)](),this[_0x3432ed(0x146)](_0x5201cd);}static async['pGetState'](){const _0x3af7fe=_0x373d13,_0x418050=await StorageUtil['pGet'](CollectionTokenUpdater[_0x3af7fe(0x108)][_0x3af7fe(0xd9)]);return _0x418050||CollectionTokenUpdater[_0x3af7fe(0x108)][_0x3af7fe(0xf5)];}async[_0x373d13(0x146)](_0x35e03b){const _0x3f3227=_0x373d13,_0x59cd08=await StorageUtil['pGet'](CollectionTokenUpdater[_0x3f3227(0x108)][_0x3f3227(0xd9)]),_0x286cd1=BaseComponent[_0x3f3227(0xfc)](_0x59cd08||CollectionTokenUpdater['Template'][_0x3f3227(0xf5)]),_0x4a16b2=_0x286cd1[_0x3f3227(0x139)](),_0x231874=()=>{const _0x92da8d=_0x3f3227,_0x1c0607=_0x286cd1[_0x92da8d(0x153)]();delete _0x1c0607[_0x92da8d(0xf8)],StorageUtil[_0x92da8d(0x13f)](CollectionTokenUpdater[_0x92da8d(0x108)][_0x92da8d(0xd9)],_0x1c0607);},_0x550e84=MiscUtil[_0x3f3227(0x11b)](_0x231874,0x64);_0x286cd1['_addHookAll'](_0x3f3227(0xf2),_0x550e84);const _0x54af29=ComponentUiUtil['$getCbBool'](_0x286cd1,'isNameActive'),_0x4cdefd=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,_0x3f3227(0x15d)),_0x1fc684=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,'isNameParseSingleQuotes'),_0x450051=$$`<div class="ve-flex-v-center toku__row">
			<label class="ve-flex-v-center mr-2 ml-auto"><div class="mr-1">Accept Double Quotes</div>${_0x4cdefd}</label>
			<label class="ve-flex-v-center"><div class="mr-1">Accept Single Quotes</div>${_0x1fc684}</label>
		</div>`,_0x48a965=ComponentUiUtil['$getIptStr'](_0x286cd1,_0x3f3227(0x165),{'html':_0x3f3227(0x152)}),_0x31240a=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,_0x3f3227(0x124)),_0x263ab9=$$`<div class="ve-flex-col w=100">
			<label class="ve-flex-v-center ve-flex-h-right toku__row">
				<div class="mr-2 help" title="The first capture group will be used, if the expression matches">Expression</div>${_0x48a965}
			</label>

			<label class="ve-flex-v-center ve-flex-h-right toku__row">
				<div class="mr-1">Ignore Case</div>${_0x31240a}
			</label>
		</div>`,_0x382646=[new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))](_0x3f3227(0xd2),_0x450051,_0x263ab9),new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))](_0x3f3227(0xd6),_0x450051,_0x263ab9),new CollectionTokenUpdater['Template']['NameUpdateMode']('Last\x20Name',_0x450051,_0x263ab9),new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))]('Quoted\x20Part\x20or\x20Full\x20Name',_0x450051,_0x263ab9),new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))](_0x3f3227(0xb9),_0x450051,_0x263ab9),new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))]('Quoted\x20Part\x20or\x20Last\x20Name',_0x450051,_0x263ab9),new CollectionTokenUpdater[(_0x3f3227(0x108))][(_0x3f3227(0xf6))](_0x3f3227(0xc9),_0x450051,_0x263ab9)],_0xb898a5=ComponentUiUtil[_0x3f3227(0x133)](_0x286cd1,_0x3f3227(0x16c),{'values':_0x382646[_0x3f3227(0x104)](_0x354eab=>_0x354eab[_0x3f3227(0x10a)]),'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x1a9da4=()=>{const _0x53a1a9=_0x3f3227,_0x29e8dc=_0x382646[_0x53a1a9(0x10e)](_0x1b7e24=>_0x4a16b2[_0x53a1a9(0x14b)](_0x53a1a9(0x16c))===_0x1b7e24[_0x53a1a9(0x10a)]);if(_0x29e8dc)_0x29e8dc[_0x53a1a9(0x159)]();else _0x450051[_0x53a1a9(0x154)](),_0x263ab9[_0x53a1a9(0x154)]();};_0x286cd1[_0x3f3227(0xdd)](_0x3f3227(0x16c),_0x1a9da4),_0x1a9da4();const _0x13001d={};Object[_0x3f3227(0x164)](CONST[_0x3f3227(0x143)])['sort'](([,_0x23c867],[,_0x570a20])=>SortUtil[_0x3f3227(0xdc)](_0x23c867,_0x570a20))[_0x3f3227(0x155)](([_0x29b448,_0x465b44])=>_0x13001d[_0x465b44]=game[_0x3f3227(0x15a)][_0x3f3227(0x158)](_0x3f3227(0x11c)+_0x29b448));const _0x53ab3a=ComponentUiUtil['$getSelEnum'](_0x286cd1,_0x3f3227(0xb7),{'values':Object[_0x3f3227(0xff)](_0x13001d),'fnDisplay':_0x44d178=>_0x13001d[_0x44d178],'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x4240b2=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,'isLinkActive'),_0x2df2a7=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,'isLinkActorData'),_0x5a4431=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,_0x3f3227(0x109)),_0x1574e3=['Hostile','Neutral',_0x3f3227(0xda)],_0x1f310b=ComponentUiUtil[_0x3f3227(0x133)](_0x286cd1,_0x3f3227(0xc2),{'values':[-0x1,0x0,0x1],'fnDisplay':_0x41c840=>_0x1574e3[_0x41c840+0x1],'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x447c89=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,'isImageActive'),_0x567c47=[_0x3f3227(0xfb),_0x3f3227(0x107)],_0x5c026b=ComponentUiUtil[_0x3f3227(0x133)](_0x286cd1,_0x3f3227(0x128),{'values':[0x0,0x1],'isAllowNull':!![],'fnDisplay':_0x525d06=>_0x567c47[_0x525d06],'displayNullAs':'(No\x20update)'}),_0x2b3830=ComponentUiUtil[_0x3f3227(0xf9)](_0x286cd1,'scale',{'min':0.2,'max':0x3,'step':0.1}),_0x1781cc=ComponentUiUtil['$getIptNumber'](_0x286cd1,_0x3f3227(0xf0),null,{'$ele':$(_0x3f3227(0x10f)),'isAllowNull':!![],'fallbackOnNaN':null,'min':0.2,'max':0x3}),_0x5606f0=()=>_0x1781cc[_0x3f3227(0x147)](_0x286cd1['_state'][_0x3f3227(0xf0)]==null?_0x3f3227(0x12c):_0x3f3227(0xdb)+_0x286cd1[_0x3f3227(0xce)][_0x3f3227(0xf0)]);_0x286cd1['_addHookBase'](_0x3f3227(0xf0),_0x5606f0),_0x5606f0();const _0x5d6f6d=$(_0x3f3227(0xc0))[_0x3f3227(0x110)](()=>_0x286cd1[_0x3f3227(0xce)][_0x3f3227(0xf0)]=null),_0x4839e5=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,_0x3f3227(0xee)),_0x289530=ComponentUiUtil['$getSelEnum'](_0x286cd1,_0x3f3227(0xb8),{'values':Object[_0x3f3227(0xff)](_0x13001d),'fnDisplay':_0x1f62b7=>_0x13001d[_0x1f62b7],'isAllowNull':!![],'displayNullAs':'(No\x20update)'}),_0x3e8909=CollectionTokenUpdater[_0x3f3227(0x108)][_0x3f3227(0x120)]('character'),_0x348986=[_0x3f3227(0xe8),...Object[_0x3f3227(0xe1)](_0x3e8909)[_0x3f3227(0x116)]()],_0x202514=CollectionTokenUpdater[_0x3f3227(0x108)][_0x3f3227(0x120)]('npc'),_0x51e8c9=['(None)',...Object[_0x3f3227(0xe1)](_0x202514)[_0x3f3227(0x116)]()],_0x38f964=ComponentUiUtil[_0x3f3227(0x133)](_0x286cd1,'barAttributeCharacter1',{'values':_0x348986,'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x20dfc7=ComponentUiUtil['$getSelEnum'](_0x286cd1,'barAttributeCharacter2',{'values':_0x348986,'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x18fb83=ComponentUiUtil['$getSelEnum'](_0x286cd1,_0x3f3227(0xc6),{'values':_0x51e8c9,'isAllowNull':!![],'displayNullAs':_0x3f3227(0x12c)}),_0x161283=ComponentUiUtil[_0x3f3227(0x133)](_0x286cd1,_0x3f3227(0x126),{'values':_0x51e8c9,'isAllowNull':!![],'displayNullAs':'(No\x20update)'}),_0x5c4d87=ComponentUiUtil['$getCbBool'](_0x286cd1,_0x3f3227(0x141)),_0x115233=ComponentUiUtil[_0x3f3227(0x130)](_0x286cd1,_0x3f3227(0x168)),_0x230bab=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0xe0),null,{'min':0x0,'isAllowNull':!![],'html':'<input\x20class=\x22code\x20text-right\x22\x20type=\x22text\x22\x20placeholder=\x22(No\x20update)\x22>'}),_0x712aeb=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0x14d),null,{'min':0x0,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0x2dd532=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0x151),null,{'min':0x0,'max':0x168,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0xafc5d2=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0x11a),null,{'min':0x0,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0x46b7fb=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0xdf),null,{'min':0x0,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0x27d24e=ComponentUiUtil[_0x3f3227(0xf3)](_0x286cd1,_0x3f3227(0x140),null,{'min':0x0,'max':0x168,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0x3916c7=ComponentUiUtil[_0x3f3227(0x117)](_0x286cd1,_0x3f3227(0x15f),null,{'min':0x0,'max':0x1,'isAllowNull':!![],'html':_0x3f3227(0xd1)}),_0xe7dbb9=$(_0x3f3227(0x105))[_0x3f3227(0x110)](async()=>{const _0x560b4c=_0x3f3227;try{await _0x231874(),ui[_0x560b4c(0x11f)][_0x560b4c(0x129)](_0x560b4c(0xc3));}catch(_0xe1eb76){ui['notifications'][_0x560b4c(0x167)](_0x560b4c(0xcb)+VeCt[_0x560b4c(0x113)]);throw _0xe1eb76;}this[_0x560b4c(0xc7)]();});_0x35e03b['addClass'](_0x3f3227(0xe4)),$$(_0x35e03b)`
		<label class="split-v-center mb-1" title="Update Token Name">
			<div class="toku__sect-head">Name</div>
			${_0x54af29[_0x3f3227(0xe5)](_0x3f3227(0xbb))}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Update Mode</div>${_0xb898a5}</label>
			${_0x450051}
			${_0x263ab9}
			<label class="my-1 split-v-center toku__row"><div>Display Name</div>${_0x53ab3a}</label>
		</div>

		<hr class="hr-1">

		<label class="split-v-center mb-1" title="Update Token Link">
			<div class="toku__sect-head">Link</div>
			${_0x4240b2[_0x3f3227(0xe5)](_0x3f3227(0xbb))}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Link Actor Data</div>${_0x2df2a7}</label>
		</div>

		<hr class="hr-1">

		<label class="split-v-center mb-1" title="Update Token Disposition">
			<div class="toku__sect-head">Disposition</div>
			${_0x5a4431[_0x3f3227(0xe5)](_0x3f3227(0xbb))}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Token Disposition</div>${_0x1f310b}</label>
		</div>

		<hr class="hr-1">

		<label class="split-v-center mb-1" title="Update Token Image">
			<div class="toku__sect-head">Image</div>
			${_0x447c89[_0x3f3227(0xe5)](_0x3f3227(0xbb))}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Image</div>${_0x5c026b}</label>
			<label class="my-1 split-v-center toku__row">
				<div>Scale</div>
				<div class="ve-flex-v-center max-w-200p w-100">${_0x2b3830}${_0x1781cc}${_0x5d6f6d}</div>
			</label>
		</div>

		<hr class="hr-1">

		<label class="split-v-center mb-1" title="Update Token Resources">
			<div class="toku__sect-head">Resources</div>
			${_0x4839e5[_0x3f3227(0xe5)](_0x3f3227(0xbb))}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Display Bars</div>${_0x289530}</label>
			<label class="my-1 split-v-center toku__row"><div>Bar 1 Attribute (Characters)</div>${_0x38f964}</label>
			<label class="my-1 split-v-center toku__row"><div>Bar 2 Attribute (Characters)</div>${_0x20dfc7}</label>
			<label class="my-1 split-v-center toku__row"><div>Bar 1 Attribute (NPCs)</div>${_0x18fb83}</label>
			<label class="my-1 split-v-center toku__row"><div>Bar 2 Attribute (NPCs)</div>${_0x161283}</label>
		</div>

		<hr class="hr-1">

		<label class="split-v-center mb-1" title="Update Token Vision">
			<div class="toku__sect-head">Vision</div>
			${_0x5c4d87[_0x3f3227(0xe5)]('toku__cb-head')}
		</label>
		<div class="ve-flex-col w-100">
			<label class="my-1 split-v-center toku__row"><div>Has Vision</div>${_0x115233}</label>
			<label class="my-1 split-v-center toku__row"><div>Dim Vision <span class="ve-muted ve-small">(Distance)</span></div>${_0x230bab}</label>
			<label class="my-1 split-v-center toku__row"><div>Bright Vision <span class="ve-muted ve-small">(Distance)</span></div>${_0x712aeb}</label>
			<label class="my-1 split-v-center toku__row"><div>Sight Angle <span class="ve-muted ve-small">(Degrees)</span></div>${_0x2dd532}</label>
			<label class="my-1 split-v-center toku__row"><div>Emit Dim <span class="ve-muted ve-small">(Distance)</span></div>${_0xafc5d2}</label>
			<label class="my-1 split-v-center toku__row"><div>Emit Bright <span class="ve-muted ve-small">(Distance)</span></div>${_0x46b7fb}</label>
			<label class="my-1 split-v-center toku__row"><div>Emission Angle <span class="ve-muted ve-small">(Degrees)</span></div>${_0x27d24e}</label>
			<label class="my-1 split-v-center toku__row"><div>Light Opacity <span class="ve-muted ve-small">(0-1)</span></div>${_0x3916c7}</label>
		</div>

		<div class="mt-auto">
			${_0xe7dbb9}
		</div>
		`;}static[_0x373d13(0x120)](_0x3b27b8){const _0xe40efc=_0x373d13,_0x4fe7a1=CONFIG[_0xe40efc(0xbf)][_0xe40efc(0x163)][_0xe40efc(0xe2)][_0xe40efc(0x14a)][_0xe40efc(0x16f)](_0x2ef167=>_0x2ef167[_0xe40efc(0xbc)]['type']===_0x3b27b8);_0x4fe7a1[_0xe40efc(0xcf)]({'data':{'data':game[_0xe40efc(0x14e)][_0xe40efc(0x142)]['Actor'][_0x3b27b8]}});const _0x898714={},_0x1faa62={},_0x147715=[game[_0xe40efc(0x15a)]['localize'](_0xe40efc(0xc1)),game[_0xe40efc(0x15a)]['localize'](_0xe40efc(0xc4))];return _0x4fe7a1[_0xe40efc(0x155)](_0x311e3e=>{const _0x14aebb=_0xe40efc,_0x1fbd15=UtilActors[_0x14aebb(0xef)](_0x311e3e);_0x147715['forEach'](_0x53d84a=>{const _0x1950cd=_0x14aebb;(_0x1fbd15[_0x53d84a]||[])[_0x1950cd(0x155)](_0x33cc82=>{const _0x51df10=_0x1950cd,_0x3508fd=_0x1faa62[_0x53d84a]=_0x1faa62[_0x53d84a]||new Set();if(_0x3508fd[_0x51df10(0xd8)](_0x33cc82))return;_0x3508fd[_0x51df10(0x15e)](_0x33cc82),(_0x898714[_0x53d84a]=_0x898714[_0x53d84a]||[])[_0x51df10(0xcf)](_0x33cc82);});});}),_0x147715[_0xe40efc(0x155)](_0x1bb391=>{const _0x2e0937=_0xe40efc;(_0x898714[_0x1bb391]||[])[_0x2e0937(0x10c)]((_0x5abc2c,_0x2e1f21)=>_0x5abc2c[_0x2e0937(0x13a)](_0x2e1f21));}),_0x898714;}},CollectionTokenUpdater[_0x373d13(0x108)][_0x373d13(0xd9)]=_0x373d13(0x137),CollectionTokenUpdater['Template'][_0x373d13(0xf5)]={'IS_DEFAULT':!![],'isCharacterActive':![],'isNameActive':!![],'isDispositionActive':!![],'isImageActive':!![],'isResourcesActive':!![],'isVisionActive':!![],'isNameParseDoubleQuotes':!![],'isNameParseSingleQuotes':!![]},CollectionTokenUpdater[_0x373d13(0x108)][_0x373d13(0xf6)]=class{constructor(_0x34061f,_0x14b5dd,_0x239079){const _0xbaba6f=_0x373d13;this[_0xbaba6f(0x10a)]=_0x34061f,this[_0xbaba6f(0xd4)]=_0x14b5dd,this[_0xbaba6f(0x144)]=_0x239079;}['activate'](){const _0x3c5817=_0x373d13;switch(this[_0x3c5817(0x10a)]){case'Full\x20Name':case'First\x20Name':case'Last\x20Name':this[_0x3c5817(0xd4)][_0x3c5817(0x154)](),this[_0x3c5817(0x144)]['hideVe']();break;case _0x3c5817(0x11e):case _0x3c5817(0xb9):case'Quoted\x20Part\x20or\x20Last\x20Name':this[_0x3c5817(0xd4)][_0x3c5817(0xec)](),this[_0x3c5817(0x144)][_0x3c5817(0x154)]();break;case'Regex':this[_0x3c5817(0xd4)]['hideVe'](),this[_0x3c5817(0x144)][_0x3c5817(0xec)]();break;}}};export{CollectionTokenUpdater};