const _0x7ad43b=_0x3d37;(function(_0xf95723,_0xbc91){const _0x34f331=_0x3d37,_0x1504aa=_0xf95723();while(!![]){try{const _0x290d0c=-parseInt(_0x34f331(0xde))/0x1+parseInt(_0x34f331(0xd2))/0x2*(-parseInt(_0x34f331(0xc8))/0x3)+parseInt(_0x34f331(0xdb))/0x4+parseInt(_0x34f331(0xd5))/0x5+-parseInt(_0x34f331(0xc4))/0x6+-parseInt(_0x34f331(0xcd))/0x7+parseInt(_0x34f331(0xd9))/0x8;if(_0x290d0c===_0xbc91)break;else _0x1504aa['push'](_0x1504aa['shift']());}catch(_0x780c84){_0x1504aa['push'](_0x1504aa['shift']());}}}(_0x104f,0x56b3c));import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{ImportListCreature}from'./ImportListCreature.js';import{NamedTokenCreator}from'./NamedTokenCreator.js';import{UtilHooks}from'./UtilHooks.js';import{UtilActors}from'./UtilActors.js';function _0x3d37(_0x8be0d1,_0x4e2b92){const _0x104f88=_0x104f();return _0x3d37=function(_0x3d379,_0x14a639){_0x3d379=_0x3d379-0xc4;let _0xa1cd6f=_0x104f88[_0x3d379];return _0xa1cd6f;},_0x3d37(_0x8be0d1,_0x4e2b92);}import{ChooseImporter}from'./ChooseImporter.js';import{ImportListSpell}from'./ImportListSpell.js';import{Config}from'./Config.js';import{Vetools}from'./Vetools.js';import{UtilFolders}from'./UtilFolders.js';function _0x104f(){const _0x4502f7=['api_getWikiSummary','468516SWpZBV','getTokenDimensionsAndScale','_API','get','modules','4020534aEnrJI','MODULE_NAME_FAKE','MODULE_NAME','pAwaitAppClose','api_pOpen','2ssEQKI','$getAppElement','set','122550fBzZUo','api','api_pImportEntry','bind','9787296nRBAye','init','834848zbBnvw','pCreateToken','pLoadTempImage','47283ghwjSJ','1942110TPfVkh','pCreateFoldersGetId','autoResizeApplication'];_0x104f=function(){return _0x4502f7;};return _0x104f();}import{UtilImage}from'./UtilImage.js';import{UtilTokens}from'./UtilTokens.js';class Api{static ['_API']={'importer':{'pOpen':ChooseImporter[_0x7ad43b(0xd1)]['bind'](ChooseImporter),'creature':{'pImportEntry':ImportListCreature[_0x7ad43b(0xd7)][_0x7ad43b(0xd8)](ImportListCreature)},'spell':{'pImportEntry':ImportListSpell[_0x7ad43b(0xd7)]['bind'](ImportListSpell)}},'token':{'pCreateToken':NamedTokenCreator[_0x7ad43b(0xdc)][_0x7ad43b(0xd8)](NamedTokenCreator)},'util':{'apps':{'doAutoResize':UtilApplications[_0x7ad43b(0xc6)][_0x7ad43b(0xd8)](UtilApplications),'$getAppElement':UtilApplications[_0x7ad43b(0xd3)][_0x7ad43b(0xd8)](UtilApplications),'pAwaitAppClose':UtilApplications[_0x7ad43b(0xd0)]['bind'](UtilApplications)},'actors':{'isImporterTempActor':UtilActors['isImporterTempActor'][_0x7ad43b(0xd8)](UtilActors)},'tokens':{'getTokenDimensionsAndScale':UtilTokens[_0x7ad43b(0xc9)]['bind'](UtilTokens)},'requests':{'getWithCache':Vetools['pGetWithCache'][_0x7ad43b(0xd8)](Vetools),'pSaveImageToServerAndGetUrl':Vetools['pSaveImageToServerAndGetUrl'][_0x7ad43b(0xd8)](Vetools)},'folders':{'pCreateFoldersGetId':UtilFolders[_0x7ad43b(0xc5)]['bind'](UtilFolders)},'image':{'pLoadTempImage':UtilImage[_0x7ad43b(0xdd)][_0x7ad43b(0xd8)](UtilImage)}},'hooks':{'on':UtilHooks['on'][_0x7ad43b(0xd8)](UtilHooks),'off':UtilHooks['off'][_0x7ad43b(0xd8)](UtilHooks)},'config':{'getWikiSummary':Config[_0x7ad43b(0xc7)][_0x7ad43b(0xd8)](Config),'getWikiSummaryMarkdown':Config['api_getWikiSummaryMarkdown'][_0x7ad43b(0xd8)](Config)}};static[_0x7ad43b(0xda)](){const _0x24735a=_0x7ad43b;game[_0x24735a(0xcc)][_0x24735a(0xcb)](SharedConsts[_0x24735a(0xcf)])[_0x24735a(0xd6)]=Api[_0x24735a(0xca)];const _0x283220=MiscUtil['copy'](game[_0x24735a(0xcc)]['get'](SharedConsts['MODULE_NAME']));_0x283220['id']=SharedConsts[_0x24735a(0xce)],_0x283220['api']=Api[_0x24735a(0xca)],game[_0x24735a(0xcc)][_0x24735a(0xd4)](SharedConsts[_0x24735a(0xce)],_0x283220);}}export{Api};