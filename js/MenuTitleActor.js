var _0x39e1e0=_0x3ed2;(function(_0x4246eb,_0x3c2b51){var _0x3880d7=_0x3ed2,_0x385690=_0x4246eb();while(!![]){try{var _0x240378=-parseInt(_0x3880d7(0x189))/0x1+-parseInt(_0x3880d7(0x18e))/0x2*(parseInt(_0x3880d7(0x184))/0x3)+-parseInt(_0x3880d7(0x17c))/0x4*(-parseInt(_0x3880d7(0x18c))/0x5)+parseInt(_0x3880d7(0x17f))/0x6+-parseInt(_0x3880d7(0x178))/0x7+parseInt(_0x3880d7(0x194))/0x8+-parseInt(_0x3880d7(0x191))/0x9;if(_0x240378===_0x3c2b51)break;else _0x385690['push'](_0x385690['shift']());}catch(_0x2162ed){_0x385690['push'](_0x385690['shift']());}}}(_0x2955,0x97d5a));function _0x2955(){var _0x46fa17=['minimumRolePolymorph','190250PMWKbM','Equipment\x20Shop','get','1116306pKyNnP','Polymorpher','minimumRoleActorTools','8914152tzrwPS','tools','_TOOL_LIST','5197717NEgpvw','minimumRole','fa-eye','fa-hammer','1420004ANNiAz','fa-shopping-cart','_EVT_NAMESPACE','7132056uiEpou','fa-trash-alt','fa-hat-wizard','Show\x20Players','Import','21IAZbIT','Item\x20Cleaner','Prepared\x20Spell\x20Mass-Toggler','getModuleFaIcon','import','858593SUkzhA','fa-check-square','setRivetTargetActor','10BKltwR'];_0x2955=function(){return _0x46fa17;};return _0x2955();}import{MenuTitle}from'./MenuTitle.js';import{ChooseImporter}from'./ChooseImporter.js';import{ActorItemCleaner}from'./ActorItemCleaner.js';import{ActorSpellPreparedToggler}from'./ActorSpellPreparedToggler.js';import{ActorPolymorpher}from'./ActorPolymorpher.js';import{ActorCharactermancerSourceSelector}from'./ActorCharactermancer.js';import{Config}from'./Config.js';import{Charactermancer_StartingEquipment}from'./UtilCharactermancerEquipment.js';import{ShowSheet}from'./ShowSheet.js';import{UtilUi}from'./UtilUi.js';import{MenuToolInfo}from'./UtilMenu.js';class MenuTitleActor extends MenuTitle{}MenuTitleActor['_HOOK_NAME']='renderActorSheet',MenuTitleActor[_0x39e1e0(0x17e)]='plutonium-actor-title-menu',MenuTitleActor[_0x39e1e0(0x177)]=[new MenuToolInfo({'name':'Plutonium\x20Import','streamerName':_0x39e1e0(0x183),'Class':ChooseImporter,'getIcon':()=>UtilUi[_0x39e1e0(0x187)](),'getMinRole':()=>Config[_0x39e1e0(0x190)](_0x39e1e0(0x188),_0x39e1e0(0x179)),'isRequireOwner':!![]}),new MenuToolInfo({'name':'Charactermancer','Class':ActorCharactermancerSourceSelector,'getMinRole':()=>Config[_0x39e1e0(0x190)]('import',_0x39e1e0(0x179)),'iconClass':_0x39e1e0(0x181),'isRequireOwner':!![]}),new MenuToolInfo({'name':_0x39e1e0(0x18f),'Class':Charactermancer_StartingEquipment,'iconClass':_0x39e1e0(0x17d),'getMinRole':()=>Config['get']('equipmentShop',_0x39e1e0(0x179)),'isRequireOwner':!![]}),new MenuToolInfo({'name':_0x39e1e0(0x192),'Class':ActorPolymorpher,'iconClass':'fa-paw','getMinRole':()=>Config[_0x39e1e0(0x190)](_0x39e1e0(0x195),_0x39e1e0(0x18d)),'isRequireOwner':!![]}),new MenuToolInfo({'name':_0x39e1e0(0x185),'Class':ActorItemCleaner,'iconClass':_0x39e1e0(0x180),'getMinRole':()=>Config[_0x39e1e0(0x190)]('tools',_0x39e1e0(0x193)),'isRequireOwner':!![]}),new MenuToolInfo({'name':_0x39e1e0(0x186),'Class':ActorSpellPreparedToggler,'iconClass':_0x39e1e0(0x18a),'getMinRole':()=>Config[_0x39e1e0(0x190)](_0x39e1e0(0x195),_0x39e1e0(0x193)),'isRequireOwner':!![]}),new MenuToolInfo({'name':'Set\x20as\x20Rivet\x20Target','pFnOnClick':(_0x4cab8d,_0x31d4df)=>{var _0x18ab5d=_0x39e1e0;Config[_0x18ab5d(0x18b)](_0x31d4df['actor']);},'iconClass':_0x39e1e0(0x17b),'isRequireOwner':!![]}),new MenuToolInfo({'name':_0x39e1e0(0x182),'Class':ShowSheet,'iconClass':_0x39e1e0(0x17a),'isRequireOwner':!![]})];function _0x3ed2(_0x236547,_0xecafae){var _0x29556e=_0x2955();return _0x3ed2=function(_0x3ed20d,_0x7a750e){_0x3ed20d=_0x3ed20d-0x177;var _0x581919=_0x29556e[_0x3ed20d];return _0x581919;},_0x3ed2(_0x236547,_0xecafae);}export{MenuTitleActor};