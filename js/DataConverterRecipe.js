const _0x414fa5=_0x5ca3;(function(_0x467d1f,_0x57bce1){const _0x5d0809=_0x5ca3,_0x12f0e9=_0x467d1f();while(!![]){try{const _0x50c544=-parseInt(_0x5d0809(0x112))/0x1+parseInt(_0x5d0809(0x113))/0x2+-parseInt(_0x5d0809(0x107))/0x3*(-parseInt(_0x5d0809(0x10e))/0x4)+parseInt(_0x5d0809(0x110))/0x5+parseInt(_0x5d0809(0x111))/0x6*(parseInt(_0x5d0809(0x116))/0x7)+parseInt(_0x5d0809(0x117))/0x8+-parseInt(_0x5d0809(0x103))/0x9;if(_0x50c544===_0x57bce1)break;else _0x12f0e9['push'](_0x12f0e9['shift']());}catch(_0x3d10a2){_0x12f0e9['push'](_0x12f0e9['shift']());}}}(_0x56fe,0x88c88));import{UtilApplications}from'./UtilApplications.js';import{Config}from'./Config.js';function _0x56fe(){const _0x18f867=['4fviCJp','_pGetSaveImagePath','1552780zDcjIH','59370iHGKrC','86129HNAKKA','1986642MyAUtV','utils','importRecipe','77ozeSDP','8231264sSZoeG','data/fluff-recipes.json','recipeFluff','16201377KUVMAv','pGetFluff','isAddPermission','defaultPermission','14748xJFlfp','getBodyHtml','permissions','now','getCleanEntityName','pGetRecipeJournal','permission'];_0x56fe=function(){return _0x18f867;};return _0x56fe();}import{UtilDataConverter}from'./UtilDataConverter.js';function _0x5ca3(_0x5ec594,_0xf4b34){const _0x56fe20=_0x56fe();return _0x5ca3=function(_0x5ca3e1,_0x580b2b){_0x5ca3e1=_0x5ca3e1-0x101;let _0x5d04e8=_0x56fe20[_0x5ca3e1];return _0x5d04e8;},_0x5ca3(_0x5ec594,_0xf4b34);}import{DataConverter}from'./DataConverter.js';class DataConverterRecipe extends DataConverter{static async[_0x414fa5(0x10c)](_0x26e5e0,_0x58bb09){const _0x3d9c4d=_0x414fa5;_0x58bb09=_0x58bb09||{};const _0x40aefc=await UtilDataConverter['pGetWithDescriptionPlugins'](()=>Renderer['recipe'][_0x3d9c4d(0x108)](_0x26e5e0)),_0x5b7da2=await Renderer[_0x3d9c4d(0x114)][_0x3d9c4d(0x104)]({'entity':_0x26e5e0,'fluffUrl':_0x3d9c4d(0x101),'fluffProp':_0x3d9c4d(0x102)}),_0x2adbb2=await this[_0x3d9c4d(0x10f)](_0x26e5e0,{'fluff':_0x5b7da2}),_0x35e504={'name':UtilApplications[_0x3d9c4d(0x10b)](UtilDataConverter['getNameWithSourcePart'](_0x26e5e0)),'permission':{'default':0x0},'entryTime':Date[_0x3d9c4d(0x10a)](),'content':_0x40aefc,'img':_0x2adbb2};if(_0x58bb09[_0x3d9c4d(0x106)]!=null)_0x35e504[_0x3d9c4d(0x10d)]={'default':_0x58bb09[_0x3d9c4d(0x106)]};else{if(_0x58bb09[_0x3d9c4d(0x105)])_0x35e504[_0x3d9c4d(0x10d)]={'default':Config['get'](_0x3d9c4d(0x115),_0x3d9c4d(0x109))};}return _0x35e504;}}export{DataConverterRecipe};