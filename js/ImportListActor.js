const _0x87abb5=_0x56a8;(function(_0x2d0ab0,_0x30cf6a){const _0x4ebe52=_0x56a8,_0x4398d3=_0x2d0ab0();while(!![]){try{const _0x295368=parseInt(_0x4ebe52(0x1f8))/0x1*(parseInt(_0x4ebe52(0x24f))/0x2)+parseInt(_0x4ebe52(0x1a3))/0x3*(-parseInt(_0x4ebe52(0x232))/0x4)+-parseInt(_0x4ebe52(0x1f6))/0x5*(-parseInt(_0x4ebe52(0x21b))/0x6)+-parseInt(_0x4ebe52(0x24b))/0x7+-parseInt(_0x4ebe52(0x1dd))/0x8+-parseInt(_0x4ebe52(0x238))/0x9*(parseInt(_0x4ebe52(0x249))/0xa)+parseInt(_0x4ebe52(0x1fe))/0xb;if(_0x295368===_0x30cf6a)break;else _0x4398d3['push'](_0x4398d3['shift']());}catch(_0x8fd7ed){_0x4398d3['push'](_0x4398d3['shift']());}}}(_0xfadc,0xba6a5));import{ImportedDocument,ImportList,ImportSummary}from'./ImportList.js';import{DataConverter}from'./DataConverter.js';import{Vetools}from'./Vetools.js';import{Config}from'./Config.js';import{UtilApplications}from'./UtilApplications.js';import{UtilActors}from'./UtilActors.js';import{LGT}from'./Util.js';import{Consts}from'./Consts.js';import{UtilCompendium}from'./UtilCompendium.js';import{SharedConsts}from'../shared/SharedConsts.js';import{DataConverterItem}from'./DataConverterItem.js';import{UtilGameSettings}from'./UtilGameSettings.js';import{ConfigConsts}from'./ConfigConsts.js';import{UtilDataConverter}from'./UtilDataConverter.js';import{UtilDocuments}from'./UtilDocuments.js';import{UtilTokens}from'./UtilTokens.js';function _0x56a8(_0x2bea41,_0x10cac4){const _0xfadcaf=_0xfadc();return _0x56a8=function(_0x56a8f3,_0x172ab9){_0x56a8f3=_0x56a8f3-0x19f;let _0x50e14f=_0xfadcaf[_0x56a8f3];return _0x50e14f;},_0x56a8(_0x2bea41,_0x10cac4);}class ImportListActor extends ImportList{static get[_0x87abb5(0x254)](){const _0x26897f=_0x87abb5;return _0x26897f(0x19f);}constructor(_0x3b86e8,_0x3b63da,_0x3517f9,_0x3a7427){const _0x4fd208=_0x87abb5;super(_0x3b86e8,_0x3b63da,_0x3517f9),this[_0x4fd208(0x1c3)]=_0x3a7427[_0x4fd208(0x1a1)],this[_0x4fd208(0x221)]=_0x3a7427[_0x4fd208(0x1f2)];}async[_0x87abb5(0x23a)](_0x1b3c73,_0x5e662c){const _0x2fb122=_0x87abb5;_0x5e662c=_0x5e662c||{};if((_0x5e662c[_0x2fb122(0x1b6)]||_0x5e662c['isDataOnly'])&&_0x5e662c[_0x2fb122(0x217)])throw new Error(_0x2fb122(0x1e1));if(this[_0x2fb122(0x212)]&&_0x5e662c['isImportToTempDirectory'])throw new Error(_0x2fb122(0x251));console[_0x2fb122(0x228)](...LGT,_0x2fb122(0x233)+this[_0x2fb122(0x1c3)]+'\x20\x22'+_0x1b3c73[_0x2fb122(0x204)]+_0x2fb122(0x1e4)+Parser[_0x2fb122(0x222)](_0x1b3c73[_0x2fb122(0x1c4)])+'\x22)');if(this[_0x2fb122(0x244)])throw new Error(_0x2fb122(0x235)+this[_0x2fb122(0x1c3)]+_0x2fb122(0x214));let _0x3c267b;const _0x477117=this['_getDuplicateMeta']({'entity':_0x1b3c73,'importOpts':_0x5e662c});if(_0x477117['isSkip'])return new ImportSummary({'status':UtilApplications[_0x2fb122(0x23b)],'imported':[new ImportedDocument({'isExisting':!![],'document':_0x477117[_0x2fb122(0x1ca)]})]});else _0x477117[_0x2fb122(0x252)]?(_0x5e662c[_0x2fb122(0x243)]=!![],_0x3c267b=_0x477117[_0x2fb122(0x1ca)]):_0x3c267b=this['_pack']?null:await Actor[_0x2fb122(0x1f1)]({'name':Consts[_0x2fb122(0x236)],'type':this['_actorType'],'flags':{[SharedConsts[_0x2fb122(0x1fb)]]:{'isImporterTempActor':!![]}}},{'renderSheet':!!_0x5e662c[_0x2fb122(0x1b6)],'temporary':!!_0x5e662c[_0x2fb122(0x1b6)]});const {dataBuilderOpts:_0x509ee3,actorData:_0x518e92}=await this[_0x2fb122(0x1e0)](_0x3c267b,_0x1b3c73,_0x5e662c),_0x359a4a=this[_0x2fb122(0x221)]?await this[_0x2fb122(0x221)]['_pGetDataSideLoaded'](_0x1b3c73):null;if(_0x359a4a)Object[_0x2fb122(0x225)](_0x518e92['data']||{},_0x359a4a);const _0x329b6a=this[_0x2fb122(0x221)]?await this[_0x2fb122(0x221)]['_pGetFlagsSideLoaded'](_0x1b3c73):null;if(_0x329b6a)Object[_0x2fb122(0x225)](_0x518e92[_0x2fb122(0x22d)]||{},_0x329b6a);const _0x14b070=_0x518e92[_0x2fb122(0x1d2)]??_0x518e92[_0x2fb122(0x1a8)]?.[_0x2fb122(0x1d2)];if(_0x5e662c['isTemp']){_0x3c267b=await Actor['create']({..._0x518e92,'type':this['_actorType']},{'renderSheet':!_0x5e662c['isDataOnly'],'temporary':!![]}),_0x509ee3[_0x2fb122(0x257)]=_0x3c267b;const _0x13f0a0=this[_0x2fb122(0x221)]?await this[_0x2fb122(0x221)]['_pGetEffectsSideLoaded']({'ent':_0x1b3c73,'actor':_0x509ee3[_0x2fb122(0x257)],'img':_0x14b070}):null;if(_0x13f0a0?.['length'])_0x509ee3[_0x2fb122(0x1ff)]['push'](..._0x13f0a0);await this[_0x2fb122(0x1fa)](_0x1b3c73,_0x518e92,_0x509ee3,_0x5e662c),await this[_0x2fb122(0x256)](_0x509ee3,_0x5e662c),await this['_pImportEntry_pHandlePostItemItemUpdates'](_0x3c267b,_0x5e662c,_0x509ee3);if(_0x5e662c[_0x2fb122(0x1ae)])return new ImportSummary({'status':UtilApplications['TASK_EXIT_COMPLETE_DATA_ONLY'],'imported':[new ImportedDocument({'document':_0x3c267b})]});return new ImportSummary({'status':UtilApplications[_0x2fb122(0x1b0)],'imported':[new ImportedDocument({'document':_0x3c267b})]});}else{if(this[_0x2fb122(0x212)]){if(_0x477117['isOverwrite']){_0x509ee3[_0x2fb122(0x257)]=_0x3c267b;const _0x24aef2=this[_0x2fb122(0x221)]?await this[_0x2fb122(0x221)][_0x2fb122(0x1b9)]({'ent':_0x1b3c73,'actor':_0x509ee3[_0x2fb122(0x257)],'img':_0x14b070}):null;if(_0x24aef2?.[_0x2fb122(0x1ce)])_0x509ee3[_0x2fb122(0x1ff)][_0x2fb122(0x20c)](..._0x24aef2);return await _0x3c267b['deleteEmbeddedDocuments'](_0x2fb122(0x245),_0x3c267b[_0x2fb122(0x1e6)][_0x2fb122(0x1f7)](_0x5c9e06=>_0x5c9e06['id'])),await _0x3c267b[_0x2fb122(0x248)]('ActiveEffect',_0x3c267b[_0x2fb122(0x1ff)][_0x2fb122(0x1f7)](_0x4eafe1=>_0x4eafe1['id'])),await this[_0x2fb122(0x1fa)](_0x1b3c73,_0x518e92,_0x509ee3,_0x5e662c),await this[_0x2fb122(0x256)](_0x509ee3,_0x5e662c),await UtilDocuments[_0x2fb122(0x253)](_0x3c267b,_0x518e92),await this[_0x2fb122(0x1da)](_0x3c267b,_0x5e662c,_0x509ee3),await this[_0x2fb122(0x1ac)]([_0x3c267b],_0x477117),new ImportSummary({'status':UtilApplications[_0x2fb122(0x1d4)],'imported':[new ImportedDocument({'document':_0x3c267b})]});}else{_0x3c267b=await Actor[_0x2fb122(0x1f1)]({..._0x518e92,'type':this[_0x2fb122(0x1c3)]},{'temporary':!![]}),_0x509ee3[_0x2fb122(0x257)]=_0x3c267b;const _0x8030e5=this['_DataConverter']?await this[_0x2fb122(0x221)][_0x2fb122(0x1b9)]({'ent':_0x1b3c73,'actor':_0x509ee3['actor'],'img':_0x14b070}):null;if(_0x8030e5?.[_0x2fb122(0x1ce)])_0x509ee3[_0x2fb122(0x1ff)][_0x2fb122(0x20c)](..._0x8030e5);await this[_0x2fb122(0x1fa)](_0x1b3c73,_0x518e92,_0x509ee3,_0x5e662c),await this['_pImportEntry_pApplyEffects'](_0x509ee3,_0x5e662c);const _0x30e791=await this['_pack'][_0x2fb122(0x20a)](_0x3c267b);return await this[_0x2fb122(0x1da)](_0x30e791,_0x5e662c,_0x509ee3),await this[_0x2fb122(0x1ac)]([_0x3c267b],_0x477117),new ImportSummary({'status':UtilApplications[_0x2fb122(0x1b0)],'imported':[new ImportedDocument({'document':_0x3c267b})]});}}else{const _0x3ce204=this['_DataConverter']?await this[_0x2fb122(0x221)][_0x2fb122(0x1b9)]({'ent':_0x1b3c73,'actor':_0x509ee3[_0x2fb122(0x257)],'img':_0x14b070}):null;if(_0x3ce204?.['length'])_0x509ee3[_0x2fb122(0x1ff)][_0x2fb122(0x20c)](..._0x3ce204);return _0x477117[_0x2fb122(0x252)]&&(await _0x3c267b[_0x2fb122(0x248)](_0x2fb122(0x245),_0x3c267b[_0x2fb122(0x1e6)][_0x2fb122(0x1f7)](_0x1658dc=>_0x1658dc['id'])),await _0x3c267b[_0x2fb122(0x248)](_0x2fb122(0x1a0),_0x3c267b['effects'][_0x2fb122(0x1f7)](_0x1ad3e1=>_0x1ad3e1['id']))),await this[_0x2fb122(0x1fa)](_0x1b3c73,_0x518e92,_0x509ee3,_0x5e662c),await this['_pImportEntry_pApplyEffects'](_0x509ee3,_0x5e662c),await UtilDocuments[_0x2fb122(0x253)](_0x3c267b,_0x518e92),await _0x3c267b[_0x2fb122(0x1d6)](SharedConsts[_0x2fb122(0x1fb)],'isImporterTempActor'),await game[_0x2fb122(0x229)][_0x2fb122(0x22a)](_0x3c267b['id'],_0x3c267b),await this[_0x2fb122(0x1da)](_0x3c267b,_0x5e662c,_0x509ee3),new ImportSummary({'status':_0x477117['isOverwrite']?UtilApplications[_0x2fb122(0x1d4)]:UtilApplications[_0x2fb122(0x1b0)],'imported':[new ImportedDocument({'isExisting':_0x477117[_0x2fb122(0x252)],'document':_0x3c267b})]});}}}async[_0x87abb5(0x256)](_0x489b2d,_0x57ca02){const _0xc86860=_0x87abb5;if(!_0x489b2d[_0xc86860(0x1ff)]?.[_0xc86860(0x1ce)])return;const _0x5b84da=_0x57ca02[_0xc86860(0x1b6)]||this[_0xc86860(0x212)]!=null;await UtilActors[_0xc86860(0x1d0)](_0x489b2d[_0xc86860(0x257)],_0x489b2d[_0xc86860(0x1ff)],{'isTemporary':_0x5b84da});}async[_0x87abb5(0x1da)](_0x56eb30,_0x40702d,_0x3cdcc3){const _0x5ecf82=_0x87abb5;if(!_0x3cdcc3[_0x5ecf82(0x1e3)])return;for(const _0x250497 of _0x3cdcc3[_0x5ecf82(0x1e3)]){await _0x250497({'actor':_0x56eb30,'isTemp':_0x40702d[_0x5ecf82(0x1b6)],'isPack':this[_0x5ecf82(0x212)]!=null,'pack':this[_0x5ecf82(0x212)]});}}[_0x87abb5(0x1e0)](){const _0xadac13=_0x87abb5;throw new Error(_0xadac13(0x1df));}[_0x87abb5(0x1fa)](){const _0x45f636=_0x87abb5;throw new Error(_0x45f636(0x1df));}[_0x87abb5(0x1cb)](_0x4d38c7){const _0x3aaef5=_0x87abb5;return this[_0x3aaef5(0x208)][_0x3aaef5(0x1f3)](_0x2e3d22=>Vetools[_0x3aaef5(0x240)](_0x2e3d22,_0x4d38c7));}async[_0x87abb5(0x1a4)](_0x41af87){const _0x389c7c=_0x87abb5,_0x3e2c74=[this[_0x389c7c(0x1c9)][_0x389c7c(0x234)](this,_0x41af87),this[_0x389c7c(0x1b5)][_0x389c7c(0x234)](this,_0x41af87)];if(Config[_0x389c7c(0x1a2)](_0x389c7c(0x1d9),_0x389c7c(0x1eb)))_0x3e2c74[_0x389c7c(0x1d5)]();for(const _0x2c2204 of _0x3e2c74){const _0x52c26e=await _0x2c2204();if(_0x52c26e)return _0x52c26e;}return Vetools[_0x389c7c(0x206)]();}async[_0x87abb5(0x1c9)](_0x56e023){const _0x1e9317=_0x87abb5,_0x3c4f36=await this['_props'][_0x1e9317(0x23c)](_0x38fe5f=>Vetools[_0x1e9317(0x240)](_0x38fe5f,_0x56e023));if(_0x3c4f36)return Vetools[_0x1e9317(0x22e)](_0x3c4f36,_0x56e023);}async[_0x87abb5(0x1b5)](_0x421ddb){const _0x32f372=_0x87abb5;return this[_0x32f372(0x215)](_0x421ddb);}async[_0x87abb5(0x246)](_0x1086f2,_0x46d56f,_0x217b0a,_0x454a34){const _0x148b99=_0x87abb5;_0x454a34=_0x454a34||{},_0x46d56f['name']=this[_0x148b99(0x1a7)](_0x1086f2),_0x46d56f[_0x148b99(0x1d2)]=_0x454a34[_0x148b99(0x1d2)]||await Vetools['pOptionallySaveImageToServerAndGetUrl'](await this[_0x148b99(0x1cf)](_0x1086f2,_0x217b0a,_0x454a34)),_0x46d56f['type']=this[_0x148b99(0x1c3)],_0x46d56f[_0x148b99(0x22d)]=this['_getActorFlags'](_0x1086f2);}async[_0x87abb5(0x1cf)](_0x2ca4ad,_0x1c4456,_0x3c5c02){const _0x233ced=_0x87abb5;if(_0x2ca4ad['foundryImg'])return _0x2ca4ad[_0x233ced(0x220)];const _0x5d1146=[this[_0x233ced(0x1d8)][_0x233ced(0x234)](this,_0x2ca4ad,_0x1c4456,_0x3c5c02),this[_0x233ced(0x1b2)][_0x233ced(0x234)](this,_0x2ca4ad,_0x3c5c02)];if(Config['get'](_0x233ced(0x1d9),_0x233ced(0x1b4)))_0x5d1146['reverse']();for(const _0x487933 of _0x5d1146){const _0x3f6a4d=await _0x487933();if(_0x3f6a4d)return _0x3f6a4d;}return this[_0x233ced(0x1a4)](_0x2ca4ad);}async[_0x87abb5(0x1d8)](_0x172acc,_0x43798e,_0x45f072){const _0x1e6964=_0x87abb5,_0x3d80ba=_0x45f072[_0x1e6964(0x1ba)]?null:await Vetools[_0x1e6964(0x203)](_0x43798e);if(_0x3d80ba)return _0x3d80ba;if(await this['_pImportEntry_pHasTokenImage'](_0x172acc))return this[_0x1e6964(0x1a4)](_0x172acc);}async[_0x87abb5(0x1b2)](_0x46123e,_0x2fe9da){const _0x4216ad=_0x87abb5,_0x44ddac=_0x2fe9da[_0x4216ad(0x1ba)]?null:await this['_pImportEntry_pFillBase_pGetCompendiumImage'](_0x46123e);if(_0x44ddac)return _0x44ddac;return this[_0x4216ad(0x215)](_0x46123e);}async[_0x87abb5(0x24a)](_0x1e1a27,_0x30598f,_0x35bf4d){const _0x56731f=_0x87abb5;if(_0x35bf4d[_0x56731f(0x243)])return;if(_0x35bf4d[_0x56731f(0x217)]){const _0x83ae70=await this[_0x56731f(0x231)]();if(_0x83ae70)_0x30598f['folder']=_0x83ae70;return;}if(_0x35bf4d[_0x56731f(0x1b6)]||this[_0x56731f(0x212)])return;const _0x48c66f=await this[_0x56731f(0x250)](_0x1e1a27);if(_0x48c66f)_0x30598f[_0x56731f(0x226)]=_0x48c66f;}[_0x87abb5(0x1a7)](_0x539327){const _0x13fa98=_0x87abb5;return UtilDataConverter[_0x13fa98(0x20d)](_0x539327);}[_0x87abb5(0x219)](_0x3f65d9){const _0x90c5c3=_0x87abb5;return{[SharedConsts[_0x90c5c3(0x1fb)]]:{'page':this['_page'],'source':_0x3f65d9[_0x90c5c3(0x1c4)],'hash':UrlUtil['URL_TO_HASH_BUILDER'][this[_0x90c5c3(0x24e)]](_0x3f65d9)}};}async[_0x87abb5(0x1a5)](_0x166a6b){const _0x3f683b=_0x87abb5;for(const _0x68596 of this['_props']){const _0x481380=await UtilCompendium[_0x3f683b(0x1bf)](_0x68596,_0x166a6b);if(_0x481380&&!_0x481380[_0x3f683b(0x205)]()[_0x3f683b(0x1dc)]('mystery-man.svg'))return _0x481380;}return null;}async[_0x87abb5(0x215)](_0x49db6f){const _0xd4ed56=_0x87abb5;for(const _0x5b0aae of this[_0xd4ed56(0x208)]){const _0x87e3f1=await UtilCompendium[_0xd4ed56(0x1fd)](_0x5b0aae,_0x49db6f),_0x155cfc=_0x87e3f1?.[_0xd4ed56(0x1a8)]?.[_0xd4ed56(0x1d2)];if(_0x155cfc&&!_0x155cfc['toLowerCase']()[_0xd4ed56(0x1dc)](_0xd4ed56(0x1bb)))return _0x155cfc;}return null;}async['_pImportEntry_pFillToken']({importable:_0x35d665,actor:_0x52c8f6,img:img=null}){const _0x51c666=_0x87abb5,_0x2cecc9=[_0x35d665[_0x51c666(0x1ad)]||SZ_MEDIUM]['flat'](0x2)[0x0]||SZ_MEDIUM,{dimensions:_0x4ccf62,scale:_0xfd5429}=UtilTokens[_0x51c666(0x1c2)](_0x2cecc9),{dataToken:_0x450409}=DataConverter[_0x51c666(0x24c)]({'dataAttributesSenses':MiscUtil[_0x51c666(0x1a2)](_0x52c8f6,'data',_0x51c666(0x1a6),_0x51c666(0x230)),'dataToken':{'dimSight':0x0,'brightSight':0x0}});img=img||await this[_0x51c666(0x1a4)](_0x35d665);const _0x5326c7=(img||'')[_0x51c666(0x1e7)]()[_0x51c666(0x1aa)]('*');_0x52c8f6[_0x51c666(0x1a8)]={...this[_0x51c666(0x23f)]['_getMergedTokenData']({'configGroup':this['_configGroup'],'maxDimSight':_0x450409[_0x51c666(0x1c1)],'maxBrightSight':_0x450409['brightSight']}),'name':UtilApplications['getCleanEntityName'](_0x35d665[_0x51c666(0x1c7)]||_0x35d665[_0x51c666(0x204)]),'img':await Vetools[_0x51c666(0x241)](img,{'imageType':_0x51c666(0x1a8)}),'width':_0x4ccf62??0x1,'height':_0x4ccf62??0x1,'scale':_0xfd5429??0x1,'elevation':0x0,'rotation':0x0,'actorLink':![],'actorData':{},'flags':{},'effects':[],'randomImg':_0x5326c7};}static[_0x87abb5(0x1f5)]({configGroup:_0x54c1af,maxDimSight:_0x4b828a,maxBrightSight:_0x402dc8}){const _0xfef55a=_0x87abb5,_0x4e24c6=UtilGameSettings[_0xfef55a(0x22f)]('core',_0xfef55a(0x21a))||{};if(Config['get'](_0x54c1af,_0xfef55a(0x1c0))!==ConfigConsts[_0xfef55a(0x21e)])_0x4e24c6[_0xfef55a(0x1e9)]=Config['get'](_0x54c1af,_0xfef55a(0x1c0));if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x201))!==ConfigConsts[_0xfef55a(0x21e)])_0x4e24c6['vision']=Config['get'](_0x54c1af,'tokenIsAddVision')===ConfigConsts[_0xfef55a(0x1ea)];if(Config['get'](_0x54c1af,_0xfef55a(0x1e2))!==ConfigConsts['C_USE_GAME_DEFAULT'])_0x4e24c6[_0xfef55a(0x237)]=Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1e2));if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x21f))!==ConfigConsts[_0xfef55a(0x21e)])_0x4e24c6[_0xfef55a(0x218)]=Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x21f));if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1bc))!==ConfigConsts['C_USE_GAME_DEFAULT'])MiscUtil[_0xfef55a(0x22a)](_0x4e24c6,_0xfef55a(0x1cd),'attribute',Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1bc)));if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x213))!==ConfigConsts[_0xfef55a(0x21e)])MiscUtil[_0xfef55a(0x22a)](_0x4e24c6,_0xfef55a(0x1c5),_0xfef55a(0x242),Config['get'](_0x54c1af,_0xfef55a(0x213)));if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1db))!==ConfigConsts[_0xfef55a(0x21e)])_0x4e24c6[_0xfef55a(0x1c1)]=_0x4b828a;if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x23e))!==ConfigConsts[_0xfef55a(0x21e)])_0x4e24c6[_0xfef55a(0x1b1)]=_0x402dc8;if(Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1cc))!=null)_0x4e24c6[_0xfef55a(0x1c8)]=Config[_0xfef55a(0x1a2)](_0x54c1af,_0xfef55a(0x1cc));return _0x4e24c6;}[_0x87abb5(0x1d1)](_0xf586e3,_0x2b2cb1,_0x5748c8){const _0x14e5a5=_0x87abb5,_0x54476c={};Parser[_0x14e5a5(0x1d7)][_0x14e5a5(0x1fc)](_0x11be63=>{const _0x165cf1=_0x14e5a5,_0x483a83=_0xf586e3[_0x11be63]??0x0,_0x3de699=Parser[_0x165cf1(0x1b7)](_0x483a83),{profType:_0x1c3308,bonusCheck:_0x3f0c24}=this[_0x165cf1(0x258)]({'imp':_0xf586e3,'impOpts':_0x5748c8,'score':_0x483a83,'ab':_0x11be63});_0x54476c[_0x11be63]={'value':_0x483a83,'proficient':_0x1c3308??0x0,'mod':_0x3de699,'bonuses':{'check':_0x3f0c24??'','save':''}};}),_0x2b2cb1[_0x14e5a5(0x210)]=_0x54476c;}['_pImportEntry_fillData_getAbilitySaveMeta']({imp:_0x404ce4,impOpts:_0x106f55,score:_0xda7feb,ab:_0x229670}){const _0x897ceb=_0x87abb5;if(!_0x404ce4['save']?.[_0x229670])return{'profType':0x0,'bonusCheck':0x0};const _0x1a18ed=/^\s*(?<number>[-+]?\s*\d+)\s*(?:[-+]|$)/[_0x897ceb(0x223)](''+_0x404ce4[_0x897ceb(0x22b)][_0x229670]);if(!_0x1a18ed)return{'profType':0x0,'bonusCheck':0x0};const _0x4a4201=Number(_0x1a18ed[_0x897ceb(0x1f0)][_0x897ceb(0x1ab)][_0x897ceb(0x209)](/\s+/g,'')),_0x190dc8=Parser[_0x897ceb(0x1b7)](_0xda7feb);if(_0x4a4201===_0x190dc8)return{'profType':0x0,'bonusCheck':0x0};const _0x41c902=_0x190dc8+(_0x106f55[_0x897ceb(0x1be)]||_0x106f55['pb']),_0xf5fe31=_0x190dc8+0x2*(_0x106f55[_0x897ceb(0x1be)]||_0x106f55['pb']);if(_0x41c902===_0x4a4201)return{'profType':0x1,'bonusCheck':0x0};if(_0xf5fe31===_0x4a4201)return{'profType':0x2,'bonusCheck':0x0};const _0x180d8d=_0x4a4201>=_0xf5fe31?0x2:_0x4a4201>=_0x41c902?0x1:0x0;return{'profType':_0x180d8d,'bonusCheck':_0x180d8d===0x0?_0x4a4201:_0x180d8d===0x1?_0x4a4201-_0x41c902:_0x4a4201-_0xf5fe31};}async[_0x87abb5(0x224)](_0x238365,_0x4314ed,{isImportText:_0x30daef,isImportImages:_0x2b9baa,additionalHtml:_0x3c3785}={}){const _0x55598c=_0x87abb5;if(!_0x30daef&&!_0x2b9baa&&!_0x3c3785||![_0x4314ed?.[_0x55598c(0x1f4)]&&_0x30daef,_0x4314ed?.[_0x55598c(0x207)]&&_0x2b9baa,_0x3c3785][_0x55598c(0x227)](Boolean))return'';return UtilDataConverter['pGetWithDescriptionPlugins'](()=>{const _0x3f3340=_0x55598c;return[_0x2b9baa&&_0x4314ed?.[_0x3f3340(0x207)]?.[_0x3f3340(0x1ce)]?Renderer[_0x3f3340(0x1a2)]()[_0x3f3340(0x247)](!![])[_0x3f3340(0x1e5)]({'type':_0x3f3340(0x1f4),'entries':[_0x4314ed[_0x3f3340(0x207)][0x0]]}):null,_0x30daef&&_0x4314ed?.['entries']?.[_0x3f3340(0x1ce)]?Renderer['utils'][_0x3f3340(0x1b3)]({'entity':_0x238365,'fluff':_0x4314ed,'isImageTab':![]}):null,_0x3c3785||null,_0x2b9baa&&_0x4314ed?.[_0x3f3340(0x207)]&&_0x4314ed?.[_0x3f3340(0x207)][_0x3f3340(0x1ce)]>0x1?Renderer['get']()['setFirstSection'](!![])[_0x3f3340(0x1e5)]({'type':_0x3f3340(0x1f4),'entries':[..._0x4314ed[_0x3f3340(0x207)][_0x3f3340(0x1ec)](0x1)]}):null][_0x3f3340(0x255)](Boolean)[_0x3f3340(0x1f9)]('');});}[_0x87abb5(0x1ed)](_0x1fbb8e,_0x5f1b5e){const _0x14326e=_0x87abb5;Object[_0x14326e(0x225)](_0x5f1b5e,DataConverter[_0x14326e(0x1ee)](_0x1fbb8e));}async[_0x87abb5(0x239)](_0x2d8abc,_0x585fc2,_0x46437d,_0x17b8f1,{offensiveAbility:_0x1e31d9,damageParts:_0x590b60,formula:_0x48fffe,rangeShort:_0x7bc501,rangeLong:_0x32d55d,actionType:_0x3609b4,isProficient:_0x544224,description:_0x319b6b,saveAbility:_0x4b7935,saveDc:_0x566bcb,saveScaling:_0x29de44,attackBonus:_0x1cd4f4,_foundryData:_0x4e60fc,foundryData:_0x352c0f,_foundryFlags:_0x9ee958,foundryFlags:_0x51ca19,img:_0x3e35de,isSiegeWeapon:_0x4e1816,isMagical:_0x108d3c}){const _0xc8a06=_0x87abb5,_0x491b14=DataConverter[_0xc8a06(0x1de)](_0x352c0f,_0x4e60fc),_0x25a230=DataConverter[_0xc8a06(0x24d)](_0x51ca19,_0x9ee958),_0x4c9ad4={'name':UtilApplications[_0xc8a06(0x1a9)](Renderer[_0xc8a06(0x1ef)](_0x46437d[_0xc8a06(0x204)]||'')||'\x20'),'type':_0xc8a06(0x1b8),'data':{'source':UtilDataConverter['getSourceWithPagePart'](_0x2d8abc),'description':{'value':_0x319b6b},'range':{'value':_0x7bc501,'long':_0x32d55d,'units':'ft'},'actionType':_0x3609b4,'proficient':_0x544224,'ability':_0x1e31d9,'activation':{'type':_0xc8a06(0x1e8),'cost':0x1},'attackBonus':_0x1cd4f4,'formula':_0x48fffe,'save':{'ability':_0x4b7935,'dc':_0x566bcb,'scaling':_0x29de44},..._0x491b14||{}},'img':_0x3e35de,'flags':{..._0x25a230||{}},'effects':[]};Object[_0xc8a06(0x1f4)](_0x4c9ad4)[_0xc8a06(0x1fc)](([_0x11eb99,_0x13c834])=>{const _0x16115c=_0xc8a06;if(typeof _0x13c834!==_0x16115c(0x211)||_0x13c834 instanceof Array){_0x4c9ad4[_0x11eb99]=MiscUtil[_0x16115c(0x20e)](_0x13c834);return;}_0x4c9ad4[_0x11eb99]=foundry['utils'][_0x16115c(0x202)](_0x13c834);});const _0x38a8e0=await DataConverterItem[_0xc8a06(0x216)]({'size':_0x2d8abc[_0xc8a06(0x1ad)],'action':_0x46437d,'damageParts':_0x590b60,'isSiegeWeapon':_0x4e1816,'isMagical':_0x108d3c,'isInfiniteAmmo':!![]});delete _0x38a8e0[_0xc8a06(0x1ff)];const _0x512021=foundry[_0xc8a06(0x21c)][_0xc8a06(0x200)](MiscUtil['copy'](_0x38a8e0),MiscUtil[_0xc8a06(0x20e)](_0x4c9ad4));if(_0x38a8e0[_0xc8a06(0x22c)][_0xc8a06(0x20f)])_0x512021[_0xc8a06(0x22c)][_0xc8a06(0x20f)]=CONFIG[_0xc8a06(0x21d)][_0xc8a06(0x20b)]['ATTUNED'];if(_0x38a8e0[_0xc8a06(0x1d2)])_0x512021[_0xc8a06(0x1d2)]=_0x38a8e0[_0xc8a06(0x1d2)];_0x512021[_0xc8a06(0x1d2)]=await Vetools[_0xc8a06(0x241)](_0x512021['img']);const _0x2751f1=foundry[_0xc8a06(0x21c)][_0xc8a06(0x1d3)](_0x512021);return _0x17b8f1[_0xc8a06(0x1e6)][_0xc8a06(0x20c)](_0x2751f1),_0x2751f1;}['_getSavingThrowData'](_0x230ed3){const _0x36ea6b=_0x87abb5;if(!_0x230ed3)return MiscUtil[_0x36ea6b(0x20e)](ImportListActor[_0x36ea6b(0x23d)]);let _0x1fab09=![],{saveAbility:_0x5b3013,saveScaling:_0x22350d,saveDc:_0x36c0b9}=MiscUtil['copy'](ImportListActor['_DEFAULT_SAVING_THROW_DATA']);const _0x412620=/(?:{@dc (\d+)}|DC\s*(\d+))\s*(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)/i[_0x36ea6b(0x223)](_0x230ed3);return _0x412620&&(_0x36c0b9=Number(_0x412620[0x1]||_0x412620[0x2]),_0x5b3013=_0x412620[0x3]['toLowerCase']()[_0x36ea6b(0x1af)](0x0,0x3),_0x22350d='flat',_0x1fab09=!![]),{'saveAbility':_0x5b3013,'saveScaling':_0x22350d,'saveDc':_0x36c0b9,'isFoundParse':_0x1fab09};}}function _0xfadc(){const _0x3bb648=['isPreferFoundryImages','_pImportEntry_pGetTokenImage_fromFoundry','isTemp','getAbilityModNumber','weapon','_pGetEffectsSideLoaded','isUseTokenImageAsPortrait','mystery-man.svg','tokenBar1Attribute','fluff','assumedPb','pGetCompendiumImage','tokenNameDisplay','dimSight','getTokenDimensionsAndScale','_actorType','source','bar2','spell','_displayName','scale','_pImportEntry_pGetTokenImage_fromPlutonium','existing','_pImportEntry_pHasTokenImage','tokenScale','bar1','length','_pImportEntry_pFillBase_pGetPortraitImagePath','pAddActorEffects','_pImportEntry_fillData_Abilities','img','expandObject','TASK_EXIT_COMPLETE_UPDATE_OVERWRITE','reverse','unsetFlag','ABIL_ABVS','_pImportEntry_pFillBase_pGetPortraitImagePath_fromPlutonium','import','_pImportEntry_pHandlePostItemItemUpdates','tokenDimSight','includes','7837200pruhsH','getCombinedFoundryData','Unimplemented!','_pImportEntry_pGetImportMetadata','Incompatible\x20options\x20\x22isTemp\x22/\x22isDataOnly\x22\x20and\x20\x22isImportToTempDirectory\x22\x20supplied!','tokenDisposition','postItemItemUpdates','\x22\x20(from\x20\x22','render','items','trim','action','displayName','C_BOOL_ENABLED','isPreferFoundryTokens','slice','_pImportEntry_fillConditionsDamage','getActorDamageResImmVulnConditionImm','stripTags','groups','create','DataConverter','pSerialAwaitSome','entries','_getMergedTokenData','60730puQAnt','map','1492703ZGrhvV','join','_pImportEntry_pFillItems','MODULE_NAME_FAKE','forEach','getSrdCompendiumEntity','12720752qKTszu','effects','mergeObject','tokenIsAddVision','flattenObject','pGetImageUrlFromFluff','name','toLowerCase','getBlankTokenUrl','images','_props','replace','importDocument','attunementTypes','push','getNameWithSourcePart','copy','attunement','abilities','object','_pack','tokenBar2Attribute','\x20to\x20actor!','_pGetCompendiumToken','pGetActionWeaponDetails','isImportToTempDirectory','displayBars','_getActorFlags','defaultToken','510poAMNf','utils','DND5E','C_USE_GAME_DEFAULT','tokenBarDisplay','foundryImg','_DataConverter','sourceJsonToAbv','exec','_pGetBiographyValue','assign','folder','some','log','actors','set','save','data','flags','pGetTokenUrl','getSafe','senses','_pImportEntry_pCreateTempDirectoryGetId','40KbnmxK','Importing\x20','bind','Cannot\x20import\x20','ACTOR_TEMP_NAME','disposition','209421TtROaQ','_pFillWeaponItem','_pImportEntry','TASK_EXIT_SKIPPED_DUPLICATE','pSerialAwaitFind','_DEFAULT_SAVING_THROW_DATA','tokenBrightSight','constructor','pHasTokenUrl','pOptionallySaveImageToServerAndGetUrl','attribute','isSkipFolder','_actor','Item','_pImportEntry_pFillBase','setFirstSection','deleteEmbeddedDocuments','280muyAQe','_pImportEntry_pFillFolder','5376602ymlLOf','mutTokenSight','getCombinedFoundryFlags','_page','2KOvdLm','_pImportEntry_pGetFolderId','Option\x20\x22isImportToTempDirectory\x22\x20cannot\x20be\x20used\x20in\x20conjunction\x20with\x20compendium\x20imports!','isOverwrite','pUpdateDocument','FOLDER_TYPE','filter','_pImportEntry_pApplyEffects','actor','_pImportEntry_fillData_getAbilitySaveMeta','Actor','ActiveEffect','actorType','get','155616eJhGAw','_pImportEntry_pGetTokenImage','_pImportEntry_pFillBase_pGetCompendiumImage','attributes','_getActorSheetName','token','getCleanEntityName','endsWith','number','_pImportEntry_pAddToTargetTableIfRequired','size','isDataOnly','substring','TASK_EXIT_COMPLETE','brightSight','_pImportEntry_pFillBase_pGetPortraitImagePath_fromFoundry','getFluffTabContent'];_0xfadc=function(){return _0x3bb648;};return _0xfadc();}ImportListActor[_0x87abb5(0x23d)]={'saveAbility':'','saveScaling':_0x87abb5(0x1c6),'saveDc':null},ImportListActor['ImportEntryOpts']=class{constructor(_0x34a867){const _0x221315=_0x87abb5;_0x34a867=_0x34a867||{},this[_0x221315(0x257)]=_0x34a867[_0x221315(0x257)],this[_0x221315(0x1bd)]=_0x34a867[_0x221315(0x1bd)],this[_0x221315(0x1e6)]=[],this['effects']=[],this[_0x221315(0x1e3)]=[];}};export{ImportListActor};