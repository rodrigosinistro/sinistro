function _0x3370(_0x4e3ebc,_0x447a1d){const _0x1f882c=_0x1f88();return _0x3370=function(_0x3370c5,_0x56cfe4){_0x3370c5=_0x3370c5-0x159;let _0x6322ba=_0x1f882c[_0x3370c5];return _0x6322ba;},_0x3370(_0x4e3ebc,_0x447a1d);}const _0x3bc46d=_0x3370;(function(_0x2a96dc,_0x495809){const _0x9b9ffb=_0x3370,_0x369511=_0x2a96dc();while(!![]){try{const _0x8a5c78=parseInt(_0x9b9ffb(0x16f))/0x1+-parseInt(_0x9b9ffb(0x175))/0x2+-parseInt(_0x9b9ffb(0x16c))/0x3*(-parseInt(_0x9b9ffb(0x178))/0x4)+parseInt(_0x9b9ffb(0x164))/0x5+-parseInt(_0x9b9ffb(0x163))/0x6+-parseInt(_0x9b9ffb(0x15e))/0x7*(parseInt(_0x9b9ffb(0x176))/0x8)+parseInt(_0x9b9ffb(0x161))/0x9;if(_0x8a5c78===_0x495809)break;else _0x369511['push'](_0x369511['shift']());}catch(_0x33714b){_0x369511['push'](_0x369511['shift']());}}}(_0x1f88,0x18f54));import{DataConverter}from'./DataConverter.js';class DataConverterActor extends DataConverter{static ['_ActionEntryParseState']=class{constructor(){const _0x3a8a14=_0x3370;this[_0x3a8a14(0x15b)]=!![],this[_0x3a8a14(0x16e)]=[],this[_0x3a8a14(0x16a)]=_0x3a8a14(0x172),this['attackBonus']=0x0;}};static[_0x3bc46d(0x171)](_0xcd2527,_0x56506d,_0x4c7098,{mode:mode='creature',summonSpellLevel:summonSpellLevel=null}={}){const _0xb78f96=_0x3bc46d;if(!(_0x56506d[_0xb78f96(0x160)]&&_0x56506d[_0xb78f96(0x160)][0x0]&&typeof _0x56506d[_0xb78f96(0x160)][0x0]==='string'))return;const _0xea8665=new this['_ActionEntryParseState'](),_0x1be4fe=_0x56506d[_0xb78f96(0x160)][0x0],{damageTupleMetas:_0x282c63}=DataConverter[_0xb78f96(0x16d)](_0x1be4fe,{'summonSpellLevel':summonSpellLevel}),{damageParts:_0x1ef79e,formula:_0x44d3f2}=DataConverter[_0xb78f96(0x166)](_0x282c63);_0xea8665[_0xb78f96(0x16e)][_0xb78f96(0x167)](..._0x1ef79e);const {rangeShort:_0x4d8d17,rangeLong:_0x2e7faa}=DataConverter['getAttackRange'](_0x1be4fe);this[_0xb78f96(0x174)]({'entity':_0xcd2527,'action':_0x56506d,'dataBuilderOpts':_0x4c7098,'mode':mode,'state':_0xea8665});const {isAttack:_0x33bf94,actionType:_0x85ace1}=DataConverter[_0xb78f96(0x168)](_0x1be4fe);return{'formula':_0x44d3f2,'isAttack':_0x33bf94,'rangeShort':_0x4d8d17,'rangeLong':_0x2e7faa,'actionType':_0x85ace1,'damageTuples':_0xea8665[_0xb78f96(0x16e)],'offensiveAbility':_0xea8665[_0xb78f96(0x16a)],'isProficient':_0xea8665[_0xb78f96(0x15b)],'attackBonus':_0xea8665[_0xb78f96(0x15f)]};}static[_0x3bc46d(0x174)]({entity:_0x5151c4,action:_0x13b47c,dataBuilderOpts:_0x44dd98,mode:_0x5c10be,state:_0x29d820}){const _0x3d456a=_0x3bc46d,_0x1173ba=_0x13b47c[_0x3d456a(0x160)][0x0];if(/{@hitYourSpellAttack}/gi['test'](_0x1173ba)){_0x29d820[_0x3d456a(0x15b)]=!![],_0x29d820[_0x3d456a(0x16a)]=null,_0x29d820['attackBonus']=_0x3d456a(0x17a);return;}const _0x430d80=/{@hit (?<bonus>[^|}]+)(?:\|[^}]+)?}/gi[_0x3d456a(0x15d)](_0x1173ba);if(!_0x430d80)return;const {partsNonNumerical:_0x56f944,totalNumerical:_0x38cc3a}=this[_0x3d456a(0x179)](_0x430d80[_0x3d456a(0x177)][_0x3d456a(0x16b)]),_0x114619=/\+(\d)/[_0x3d456a(0x15d)](_0x13b47c['name']||''),_0x16c8fa=_0x114619?Number(_0x114619[0x0]):0x0,_0x6e31dc=_0x38cc3a-_0x16c8fa-(_0x44dd98[_0x3d456a(0x15a)]||0x0),_0x4124f7=_0x29d820[_0x3d456a(0x16e)][_0x3d456a(0x169)]?_0x29d820[_0x3d456a(0x16e)][0x0][0x0]||'':'',_0x4d85ac=/\d+\s*([-+]\s*\d+)$/[_0x3d456a(0x15d)](_0x4124f7['trim']());let _0x389487;if(_0x4d85ac)_0x389487=Number(_0x4d85ac[0x1][_0x3d456a(0x173)](/\s+/g,''))-_0x16c8fa;let _0x526ae7=_0x6e31dc;if(_0x389487!=null&&_0x6e31dc!==_0x389487){_0x526ae7=_0x389487;if(_0x6e31dc<_0x389487)_0x29d820['isProficient']=![];else{const _0x16c43e=_0x6e31dc-_0x389487;_0x44dd98['pb']===0x0?_0x44dd98['assumedPb']=_0x44dd98[_0x3d456a(0x15a)]||_0x16c43e:_0x29d820[_0x3d456a(0x15f)]=_0x16c43e;}}let _0x2ff529=![];for(const _0x37f0de of Parser['ABIL_ABVS']){if(_0x5151c4[_0x37f0de]==null)continue;const _0x40f209=Parser[_0x3d456a(0x15c)](_0x5151c4[_0x37f0de]);if(_0x40f209===_0x526ae7){_0x29d820[_0x3d456a(0x16a)]=_0x37f0de,_0x2ff529=!![];break;}}if(_0x5c10be===_0x3d456a(0x170)){if(!_0x2ff529&&_0x44dd98[_0x3d456a(0x15a)]){const _0x3cadef=_0x44dd98['assumedPb']+Parser['getAbilityModNumber'](_0x5151c4[_0x29d820[_0x3d456a(0x16a)]])+_0x29d820[_0x3d456a(0x15f)];if(_0x3cadef!==_0x38cc3a){const _0x36475b=_0x38cc3a-_0x3cadef;_0x29d820[_0x3d456a(0x15f)]+=_0x36475b;}}else{if(!_0x29d820['isProficient']){const _0x272efe=Parser[_0x3d456a(0x15c)](_0x5151c4[_0x29d820[_0x3d456a(0x16a)]])+_0x29d820[_0x3d456a(0x15f)];if(_0x272efe!==_0x38cc3a){const _0x89b673=_0x38cc3a-_0x272efe;_0x29d820[_0x3d456a(0x15f)]+=_0x89b673;}}}}_0x5c10be===_0x3d456a(0x159)&&(_0x29d820[_0x3d456a(0x15f)]=_0x38cc3a),_0x5c10be===_0x3d456a(0x162)&&(_0x56f944['some'](_0x26574e=>/^\+?PB$/i[_0x3d456a(0x165)](_0x26574e))&&(_0x29d820[_0x3d456a(0x15f)]+='\x20+\x20@srd5e.userchar.pb',_0x29d820[_0x3d456a(0x15b)]=![]));}}function _0x1f88(){const _0x2fbf1c=['bonus','99RPUJaV','getDamageTupleMetas','damageTuples','159165otGgax','creature','getParsedActionEntryData','str','replace','_getParsedActionEntryData_hit','394998QqXGIZ','1304trhUZL','groups','6468ECmdZG','_getProfBonusExpressionParts','-\x20@attributes.prof\x20-\x20@mod\x20+\x20@srd5e.userchar.spellAttackRanged','object','assumedPb','isProficient','getAbilityModNumber','exec','6769WdCTxT','attackBonus','entries','1566486QGVJdB','creature_altImplementation','614148emkhMf','865630nuuHZm','test','getDamagePartsAndOtherFormula','push','getAttackActionType','length','offensiveAbility'];_0x1f88=function(){return _0x2fbf1c;};return _0x1f88();}export{DataConverterActor};