const _0x45b403=_0x3b62;(function(_0x2724db,_0x5d897b){const _0x51dd37=_0x3b62,_0x481b45=_0x2724db();while(!![]){try{const _0x39d07d=parseInt(_0x51dd37(0x18e))/0x1+-parseInt(_0x51dd37(0x194))/0x2+parseInt(_0x51dd37(0x198))/0x3+parseInt(_0x51dd37(0x18d))/0x4+parseInt(_0x51dd37(0x1a7))/0x5+-parseInt(_0x51dd37(0x188))/0x6*(parseInt(_0x51dd37(0x1a0))/0x7)+parseInt(_0x51dd37(0x18a))/0x8*(-parseInt(_0x51dd37(0x19a))/0x9);if(_0x39d07d===_0x5d897b)break;else _0x481b45['push'](_0x481b45['shift']());}catch(_0x22cb98){_0x481b45['push'](_0x481b45['shift']());}}}(_0x5f05,0x425c8));import{UtilApplications}from'./UtilApplications.js';import{SharedConsts}from'../shared/SharedConsts.js';import{Config}from'./Config.js';function _0x3b62(_0x2eaf47,_0x7b517e){const _0x5f05f1=_0x5f05();return _0x3b62=function(_0x3b628e,_0x36ebdd){_0x3b628e=_0x3b628e-0x172;let _0x27f8a4=_0x5f05f1[_0x3b628e];return _0x27f8a4;},_0x3b62(_0x2eaf47,_0x7b517e);}import{Vetools}from'./Vetools.js';import{UtilActiveEffects}from'./UtilActiveEffects.js';import{DataConverterFeature}from'./DataConverterFeature.js';import{PageFilterClassesFoundry}from'./UtilCharactermancerClass.js';import{UtilDataConverter}from'./UtilDataConverter.js';import{DataConverter}from'./DataConverter.js';class DataConverterCharCreationOption extends DataConverterFeature{static [_0x45b403(0x185)]={'propBrew':'foundryCharoption','fnLoadJson':async()=>this['_pGetPreloadSideData'](),'propJson':'charoption'};static['init'](){const _0x5be708=_0x45b403;PageFilterClassesFoundry['setImplSideData'](_0x5be708(0x179),this);}static async[_0x45b403(0x1a5)](_0x320b97){const _0x45b035=_0x45b403,_0x342d01=UrlUtil[_0x45b035(0x1a1)][UrlUtil['PG_CHAR_CREATION_OPTIONS']](_0x320b97);return Renderer[_0x45b035(0x176)]['pCacheAndGet'](UrlUtil['PG_CHAR_CREATION_OPTIONS'],_0x320b97[_0x45b035(0x17b)],_0x342d01,{'isCopy':!![]});}static async[_0x45b403(0x19d)](_0x57bc91,{actor:actor=null}={}){const _0x191649={'charoption':_0x57bc91['name']+'|'+_0x57bc91['source']};return await PageFilterClassesFoundry['pInitCharCreationOptionLoadeds']({'charoption':_0x191649,'raw':_0x57bc91,'actor':actor}),_0x191649;}static async[_0x45b403(0x195)](_0x48a568,_0x30b520){const _0x4e74d1=_0x45b403;_0x30b520=_0x30b520||{};if(_0x30b520[_0x4e74d1(0x199)])_0x30b520[_0x4e74d1(0x1a9)]=!![];return this[_0x4e74d1(0x17c)](_0x48a568,_0x30b520);}static async['_pGetCharCreationOptionItem'](_0x273b21,_0x47c702){const _0x233f23=_0x45b403,_0x3fdf92=Config[_0x233f23(0x173)](_0x233f23(0x189),'isImportDescription')?await UtilDataConverter[_0x233f23(0x1aa)](()=>{const _0x9aaa69=_0x233f23,_0x51afc0=Renderer[_0x9aaa69(0x182)][_0x9aaa69(0x17e)](_0x273b21[_0x9aaa69(0x181)]);return _0x9aaa69(0x1ab)+(_0x51afc0?_0x9aaa69(0x19e)+_0x51afc0+_0x9aaa69(0x186):'')+_0x9aaa69(0x19b)+Renderer[_0x9aaa69(0x173)]()[_0x9aaa69(0x175)](!![])[_0x9aaa69(0x178)]({'entries':_0x273b21[_0x9aaa69(0x18b)]},0x2)+_0x9aaa69(0x192);}):null,_0x470b0d=await this[_0x233f23(0x1a2)](_0x273b21,{'propCompendium':_0x233f23(0x179)}),_0xa6113f=await this[_0x233f23(0x17d)](_0x273b21),_0x52089c=await this[_0x233f23(0x17f)](_0x273b21),_0x29f999=_0x47c702[_0x233f23(0x1a9)]?[]:await this['_pGetEffectsSideLoaded']({'ent':_0x273b21,'img':_0x470b0d});DataConverter['mutEffectsDisabledTransfer'](_0x29f999,_0x233f23(0x189));const _0x527c29={'name':UtilApplications[_0x233f23(0x17a)](UtilDataConverter[_0x233f23(0x197)](_0x273b21,{'isActorItem':_0x47c702['isActorItem']})),'data':{'source':UtilDataConverter[_0x233f23(0x1a8)](_0x273b21),'description':{'value':_0x3fdf92,'chat':'','unidentified':''},'activation':{'type':'','cost':0x0,'condition':''},'duration':{'value':0x0,'units':''},'target':{'value':0x0,'units':'','type':''},'range':{'value':0x0,'long':0x0,'units':null},'uses':{'value':0x0,'max':0x0,'per':''},'ability':'','actionType':'','attackBonus':null,'chatFlavor':'','critical':{'threshold':null,'damage':''},'damage':{'parts':[],'versatile':''},'formula':'','save':{'ability':'','dc':null},'requirements':'','recharge':{'value':0x0,'charged':!![]},..._0xa6113f},'permission':{'default':0x0},'type':_0x233f23(0x19f),'img':_0x470b0d,'flags':{...this[_0x233f23(0x190)](_0x273b21,_0x47c702),..._0x52089c},'effects':_0x29f999};if(_0x47c702['defaultPermission']!=null)_0x527c29['permission']={'default':_0x47c702[_0x233f23(0x18f)]};else{if(_0x47c702[_0x233f23(0x18c)])_0x527c29['permission']={'default':Config['get'](_0x233f23(0x189),_0x233f23(0x174))};}return _0x527c29;}static[_0x45b403(0x190)](_0x44d4f6,_0x18d8c0){const _0x75d9ed=_0x45b403;_0x18d8c0=_0x18d8c0||{};const _0x5497b0={[SharedConsts['MODULE_NAME_FAKE']]:{'page':UrlUtil['PG_CHAR_CREATION_OPTIONS'],'source':_0x44d4f6[_0x75d9ed(0x17b)],'hash':UrlUtil[_0x75d9ed(0x1a1)][UrlUtil[_0x75d9ed(0x180)]](_0x44d4f6)}};return _0x18d8c0['isAddDataFlags']&&(_0x5497b0[SharedConsts[_0x75d9ed(0x193)]][_0x75d9ed(0x1a6)]='charoption',_0x5497b0[SharedConsts['MODULE_NAME_FAKE']][_0x75d9ed(0x191)]=_0x18d8c0[_0x75d9ed(0x191)]),_0x5497b0;}static async[_0x45b403(0x196)](_0x47f3d8,_0x3a783f,_0x10793a,_0x4c1b00){const _0x1e36a9=await this['pGetSideLoadedMatch'](_0x10793a);this['mutActorUpdate'](_0x47f3d8,_0x3a783f,_0x10793a,{'sideData':_0x1e36a9});}static async['_pGetPreloadSideData'](){const _0x206121=_0x45b403;if(!this[_0x206121(0x184)])this['_SIDE_DATA']=await Vetools[_0x206121(0x1a3)]();return this['_SIDE_DATA'];}static async[_0x45b403(0x177)](_0x4939cd){return this['_pGetSideLoadedMatch'](_0x4939cd,this['_SIDE_LOAD_OPTS']);}static async[_0x45b403(0x1a4)](_0x60d7b3,_0x5327e0){const _0x56c047=_0x45b403;return(await this['_pGetEffectsRawSideLoaded_'](_0x5327e0,this[_0x56c047(0x185)]))?.[_0x56c047(0x19c)]>0x0;}static async['pGetCharCreationOptionItemEffects'](_0x57f64d,_0x93ab12,_0x51544f,{additionalData:_0x2717c1,img:_0x31508b}={}){const _0x209155=_0x45b403,_0x45806f=await this[_0x209155(0x183)](_0x93ab12,this[_0x209155(0x185)]);return UtilActiveEffects[_0x209155(0x187)](_0x45806f||[],{'actor':_0x57f64d,'sheetItem':_0x51544f,'parentName':_0x93ab12[_0x209155(0x172)],'additionalData':_0x2717c1,'img':_0x31508b});}}export{DataConverterCharCreationOption};function _0x5f05(){const _0x101778=['<div>\x0a\x09\x09\x09\x09\x09','name','get','permissions','setFirstSection','hover','pGetSideLoadedMatch','render','charoption','getCleanEntityName','source','_pGetCharCreationOptionItem','_pGetDataSideLoaded','getPrerequisiteHtml','_pGetFlagsSideLoaded','PG_CHAR_CREATION_OPTIONS','prerequisite','utils','_pGetEffectsRawSideLoaded_','_SIDE_DATA','_SIDE_LOAD_OPTS','</i></p>','getExpandedEffects','8562RpMsnD','importCharCreationOption','1851272NBnHVa','entries','isAddPermission','672624GPNFdh','520164bItcUa','defaultPermission','_getCharCreationOptionFlags','filterValues','\x0a\x09\x09\x09\x09</div>','MODULE_NAME_FAKE','438234nygFBx','pGetCharCreationOptionItem','pMutActorUpdateCharCreationOption','getNameWithSourcePart','977457PyIEwZ','actor','18JtYuci','\x0a\x09\x09\x09\x09\x09','length','pGetInitCharCreationOptionFeatureLoadeds','<p><i>Prerequisite:\x20','feat','2149jgqqdt','URL_TO_HASH_BUILDER','_pGetSaveImagePath','pGetCharCreationOptionSideData','pHasCharCreationOptionSideLoadedEffects','pGetDereferencedCharCreationOptionFeatureItem','propDroppable','1888505ecHOsQ','getSourceWithPagePart','isActorItem','pGetWithDescriptionPlugins'];_0x5f05=function(){return _0x101778;};return _0x5f05();}