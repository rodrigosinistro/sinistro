const _0x42a7dd=_0x5d79;(function(_0x1a4159,_0x2b91f3){const _0x184f11=_0x5d79,_0x5eff0d=_0x1a4159();while(!![]){try{const _0x5a2e4c=parseInt(_0x184f11(0x134))/0x1*(-parseInt(_0x184f11(0x11f))/0x2)+-parseInt(_0x184f11(0x190))/0x3*(-parseInt(_0x184f11(0x143))/0x4)+-parseInt(_0x184f11(0x116))/0x5*(-parseInt(_0x184f11(0x194))/0x6)+-parseInt(_0x184f11(0x181))/0x7*(parseInt(_0x184f11(0x187))/0x8)+parseInt(_0x184f11(0x144))/0x9+-parseInt(_0x184f11(0x147))/0xa*(-parseInt(_0x184f11(0x185))/0xb)+-parseInt(_0x184f11(0x12f))/0xc*(parseInt(_0x184f11(0x126))/0xd);if(_0x5a2e4c===_0x2b91f3)break;else _0x5eff0d['push'](_0x5eff0d['shift']());}catch(_0x1d686d){_0x5eff0d['push'](_0x5eff0d['shift']());}}}(_0x5a06,0x3615c));function _0x5d79(_0x27714e,_0x4d48cc){const _0x5a063a=_0x5a06();return _0x5d79=function(_0x5d79c3,_0x252795){_0x5d79c3=_0x5d79c3-0x10e;let _0x2777ad=_0x5a063a[_0x5d79c3];return _0x2777ad;},_0x5d79(_0x27714e,_0x4d48cc);}import{Consts}from'./Consts.js';import{UtilDataConverter}from'./UtilDataConverter.js';import{DataConverter}from'./DataConverter.js';import{LGT}from'./Util.js';import{Charactermancer_Util}from'./UtilCharactermancer.js';class Charactermancer_Spell_Util{static[_0x42a7dd(0x117)]({casterProgression:_0x2c19b8,curLevel:_0x4e94fa,targetLevel:_0x5e5a6f,isBreakpointsOnly:isBreakpointsOnly=![]}){const _0x13f2c0=_0x42a7dd;if(_0x2c19b8==null||_0x4e94fa==null||_0x5e5a6f==null)return null;const _0x271926=UtilDataConverter['CASTER_TYPE_TO_PROGRESSION'][_0x2c19b8];if(!_0x271926)return null;const _0x3c6a89=[];let _0x137bd8=0x0;_0x271926['forEach'](_0x462775=>{const _0x12bb01=_0x5d79;let _0x135c30=![];for(let _0x5aad4b=0x0;_0x5aad4b<_0x462775['length'];++_0x5aad4b){const _0x40b239=_0x5aad4b+0x1;if(_0x462775[_0x5aad4b]&&_0x40b239>_0x137bd8){_0x3c6a89[_0x12bb01(0x195)](_0x40b239),_0x137bd8=_0x40b239,_0x135c30=!![];break;}}if(!_0x135c30){if(isBreakpointsOnly)_0x3c6a89['push'](null);else _0x3c6a89[_0x12bb01(0x195)](_0x3c6a89['length']?_0x3c6a89[_0x12bb01(0x171)]():null);}});const _0x24fd2b=_0x3c6a89[_0x13f2c0(0x130)](_0x4e94fa,_0x5e5a6f)[_0x13f2c0(0x15f)](Boolean);if(!_0x24fd2b['length'])return null;const _0x143d85=Math[_0x13f2c0(0x15e)](..._0x24fd2b),_0x12f528=Math[_0x13f2c0(0x167)](..._0x24fd2b),_0x456e25=Math['max'](0x0,_0x5e5a6f-_0x4e94fa),_0x4df838=_0x12f528-_0x143d85;return{'spellLevelLow':_0x143d85,'spellLevelHigh':_0x12f528,'deltaLevels':_0x456e25,'deltaSpellLevels':_0x4df838};}static[_0x42a7dd(0x120)]({cls:_0x12389a,sc:_0x22a904,curLevel:_0x3b2de7,targetLevel:_0x12886b}){const _0x35791a=_0x42a7dd;if(_0x12389a==null||_0x3b2de7==null||_0x12886b==null)return null;const _0x5cf586=_0x3b2de7===0x0?0x0:this[_0x35791a(0x191)]({'cls':_0x12389a,'sc':_0x22a904,'targetLevel':_0x3b2de7}),_0x5302c7=this[_0x35791a(0x191)]({'cls':_0x12389a,'sc':_0x22a904,'targetLevel':_0x12886b});if(_0x5cf586==null||_0x5302c7==null)return null;const _0x52bacf=Math['max'](0x0,_0x12886b-_0x3b2de7),_0x4b3f45=_0x5302c7-_0x5cf586;return{'maxCantripsLow':_0x5cf586,'maxCantripsHigh':_0x5302c7,'deltaLevels':_0x52bacf,'deltaMaxCantrips':_0x4b3f45};}static[_0x42a7dd(0x191)]({cls:_0x5a47a4,sc:_0x4f6ce9,targetLevel:_0x802d6c}){const _0x25bc6b=_0x42a7dd;if(!_0x5a47a4||_0x802d6c==null)return null;let _0x4a495c=DataConverter[_0x25bc6b(0x157)](_0x5a47a4[_0x25bc6b(0x19d)],_0x4f6ce9?.[_0x25bc6b(0x19d)]);if(BrewUtil2[_0x25bc6b(0x19c)](_0x5a47a4[_0x25bc6b(0x169)])||_0x4f6ce9&&BrewUtil2[_0x25bc6b(0x19c)](_0x4f6ce9['source']))_0x4a495c=_0x4a495c||this['_getApproximateCantripProgression']({'cls':_0x5a47a4,'sc':_0x4f6ce9});if(!_0x4a495c)return null;return _0x4a495c[_0x802d6c-0x1];}static[_0x42a7dd(0x12d)]({cls:_0x32e0c9,sc:_0x15993c}){const _0x553871=_0x42a7dd;return this[_0x553871(0x15d)]({'cls':_0x32e0c9,'sc':_0x15993c,'colNameLower':_0x553871(0x148)});}static[_0x42a7dd(0x179)](_0x3d0f08,_0x52dc01){const _0x3a55fc=_0x42a7dd;return this[_0x3a55fc(0x15d)]({'cls':_0x3d0f08,'sc':_0x52dc01,'colNameLower':_0x3a55fc(0x188)});}static[_0x42a7dd(0x15d)]({cls:_0x5ed8a7,sc:_0x13f844,colNameLower:_0x806a1e}){const _0x3552e2=_0x42a7dd,_0x5abcf3=(BrewUtil2[_0x3552e2(0x19c)](_0x5ed8a7['source'])?_0x5ed8a7[_0x3552e2(0x19e)]:null)||(_0x13f844&&BrewUtil2[_0x3552e2(0x19c)](_0x13f844[_0x3552e2(0x169)])?_0x13f844?.[_0x3552e2(0x111)]:null);if(!_0x5abcf3)return;for(const _0x3a2c0f of _0x5abcf3){const _0x112665=(_0x3a2c0f[_0x3552e2(0x19a)]||[])['findIndex'](_0xc6ed54=>(''+_0xc6ed54)[_0x3552e2(0x119)]()[_0x3552e2(0x113)](_0x806a1e));if(!~_0x112665)continue;const _0x2c170d=(_0x3a2c0f[_0x3552e2(0x137)]||_0x3a2c0f['rows']||[])[_0x3552e2(0x13d)](_0x18ce3c=>_0x18ce3c['filter']((_0x1b89ce,_0x58c2c9)=>_0x58c2c9===_0x112665))['flat']();if(_0x2c170d[_0x3552e2(0x14f)](_0x5089ce=>!isNaN(_0x5089ce)))return _0x2c170d['map'](_0x615720=>Number(_0x615720));}}static[_0x42a7dd(0x11a)]({cls:_0x4df8e7,sc:_0xa6a1c2,targetLevel:_0x51b797,isExistingClass:_0x2c8c68,isDefault:isDefault=![],formDataSlotSelectFromComp:_0x9e639}={}){const _0x5a4160=_0x42a7dd;if(_0x51b797==null)return null;const _0x5c0477=DataConverter[_0x5a4160(0x173)](_0x4df8e7[_0x5a4160(0x12e)],_0xa6a1c2?.['casterProgression']);if(!_0x5c0477||!UtilDataConverter['CASTER_TYPE_TO_PROGRESSION'][_0x5c0477])return null;const _0x3b1844=[...new Array(0x9)][_0x5a4160(0x13d)](()=>0x0);let _0x3d431f=![];const _0x49038f=_0x2c8c68||isDefault?Charactermancer_Spell_SlotLevelSelect[_0x5a4160(0x17f)]({'targetLevel':_0x51b797,'casterProgression':_0x5c0477,'spellsKnownProgression':_0x4df8e7?.['spellsKnownProgression']||_0xa6a1c2?.[_0x5a4160(0x16c)],'spellsKnownProgressionFixed':_0x4df8e7?.[_0x5a4160(0x15c)]||_0xa6a1c2?.[_0x5a4160(0x15c)]}):_0x9e639;if(_0x49038f){_0x3d431f=_0x3d431f||_0x49038f?.[_0x5a4160(0x13a)];if(_0x49038f?.[_0x5a4160(0x13b)])_0x49038f[_0x5a4160(0x13b)][_0x5a4160(0x174)]((_0x4c289c,_0x172faf)=>_0x3b1844[_0x172faf]+=_0x4c289c);}_0x4df8e7[_0x5a4160(0x158)]&&(_0x3d431f=!![],Object[_0x5a4160(0x16b)](_0x4df8e7[_0x5a4160(0x158)])[_0x5a4160(0x174)](([_0x5dacb2,_0x1998dc])=>{if(Number(_0x5dacb2)>_0x51b797)return;Object['entries'](_0x1998dc)['forEach'](([_0x2f4cfe,_0x5d12c0])=>{_0x2f4cfe=Number(_0x2f4cfe),_0x3b1844[_0x2f4cfe-0x1]+=_0x5d12c0;});}));if(!_0x3d431f)return null;return _0x3b1844;}static[_0x42a7dd(0x10f)]({cls:_0xc2dde5,sc:_0x34d1ef,targetLevel:_0x1b02b6,existingAbilityScores:_0x226541,abilityScoresFromComp:_0x5ef82e}={}){const _0x2ba297=_0x42a7dd;if(!_0xc2dde5||_0x1b02b6==null)return null;const _0x269248=DataConverter[_0x2ba297(0x173)](_0xc2dde5[_0x2ba297(0x12e)],_0x34d1ef?.[_0x2ba297(0x12e)]);if(!_0x269248||!UtilDataConverter['CASTER_TYPE_TO_PROGRESSION'][_0x269248])return null;const _0x361e9d=UtilDataConverter[_0x2ba297(0x136)][_0x269248][_0x1b02b6-0x1];if(!_0x361e9d)return null;if(!_0x361e9d[_0x2ba297(0x14c)](Boolean))return null;let _0xc9764=_0xc2dde5['preparedSpells'];BrewUtil2['hasSourceJson'](_0xc2dde5['source'])&&(_0xc9764=_0xc9764||this[_0x2ba297(0x131)](_0xc2dde5,_0x34d1ef));if(!_0xc9764)return null;const _0x3e3b3b=_0x5ef82e,_0x49b67f=_0xc9764[_0x2ba297(0x19f)](/<\$([^$]+)\$>/g,(..._0x26de22)=>{const _0x3b8c00=_0x2ba297;switch(_0x26de22[0x1]){case _0x3b8c00(0x16e):return _0x1b02b6;case _0x3b8c00(0x12c):return this['_getMaxPreparedSpells_getAbilityScore']({'ability':'str','totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});case'dex_mod':return this[_0x3b8c00(0x122)]({'ability':_0x3b8c00(0x16a),'totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});case _0x3b8c00(0x18e):return this['_getMaxPreparedSpells_getAbilityScore']({'ability':_0x3b8c00(0x175),'totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});case'int_mod':return this[_0x3b8c00(0x122)]({'ability':_0x3b8c00(0x182),'totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});case _0x3b8c00(0x124):return this[_0x3b8c00(0x122)]({'ability':'wis','totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});case _0x3b8c00(0x160):return this[_0x3b8c00(0x122)]({'ability':_0x3b8c00(0x13f),'totalsAsi':_0x3e3b3b,'existingAbilityScores':_0x226541});default:throw new Error(_0x3b8c00(0x178)+_0x26de22[0x1]+'\x22');}}),_0x145c94=eval(_0x49b67f);if(isNaN(_0x145c94))return console[_0x2ba297(0x172)](...LGT,_0x2ba297(0x18a)+_0x49b67f+'\x22\x20(originally\x20\x22'+_0xc9764+_0x2ba297(0x13c)),null;return Math[_0x2ba297(0x167)](0x1,Math['floor'](_0x145c94));}static[_0x42a7dd(0x17d)]({cls:_0x272bba,sc:_0x44ce87}={}){const _0x83f57a=_0x42a7dd;if(!_0x272bba)return null;const _0x372ae3=DataConverter[_0x83f57a(0x173)](_0x272bba[_0x83f57a(0x12e)],_0x44ce87?.['casterProgression']);if(!_0x372ae3||!UtilDataConverter[_0x83f57a(0x136)][_0x372ae3])return null;let _0x306af1=_0x272bba[_0x83f57a(0x110)];BrewUtil2[_0x83f57a(0x19c)](_0x272bba[_0x83f57a(0x169)])&&(_0x306af1=_0x306af1||this['_getApproximatePreparedFormula'](_0x272bba,_0x44ce87));if(!_0x306af1)return null;const _0xb8de46=_0x306af1[_0x83f57a(0x19f)](/<\$([^$]+)\$>/g,(..._0x2f1825)=>{const _0x55f8ff=_0x83f57a;switch(_0x2f1825[0x1]){case _0x55f8ff(0x16e):return _0x55f8ff(0x192)+Parser[_0x55f8ff(0x11e)](_0x272bba['name'])+_0x55f8ff(0x17b);case _0x55f8ff(0x12c):case _0x55f8ff(0x186):case _0x55f8ff(0x18e):case _0x55f8ff(0x10e):case _0x55f8ff(0x124):case _0x55f8ff(0x160):return _0x55f8ff(0x140)+_0x2f1825[0x1][_0x55f8ff(0x119)]()[_0x55f8ff(0x130)](0x0,0x3)+'.mod';default:throw new Error('Unknown\x20variable\x20\x22'+_0x2f1825[0x1]+'\x22');}});return'max(1,\x20floor('+_0xb8de46+'))';}static[_0x42a7dd(0x122)]({totalsAsi:_0x227539,existingAbilityScores:_0x3972c0,ability:_0x523c16}){const _0x4cb982=_0x42a7dd;if(_0x3972c0)return _0x3972c0[_0x523c16]||0x0;return Parser[_0x4cb982(0x193)](_0x227539?.[_0x4cb982(0x196)]?.[_0x227539[_0x4cb982(0x11d)]]?.[_0x523c16]||0x0);}static[_0x42a7dd(0x131)](_0x54767b,_0x36493f){const _0x243b34=_0x42a7dd;if(!_0x54767b)return null;const _0x2373ab=DataConverter[_0x243b34(0x173)](_0x54767b[_0x243b34(0x12e)],_0x36493f?.[_0x243b34(0x12e)]);if(!_0x2373ab||!_0x54767b[_0x243b34(0x19e)]&&!_0x36493f?.['subclassTableGroups']||_0x2373ab===_0x243b34(0x16f))return null;const _0x4f7ffd=[_0x54767b[_0x243b34(0x19e)],_0x36493f?.[_0x243b34(0x111)]][_0x243b34(0x15f)](Boolean)[_0x243b34(0x14c)](_0x160bd8=>{const _0x532953=_0x243b34;_0x160bd8[_0x532953(0x13d)](_0x5d2b4e=>_0x5d2b4e['colLabels']||[])[_0x532953(0x199)]()['map'](_0x345578=>Renderer[_0x532953(0x149)]((''+_0x345578)[_0x532953(0x123)]()))[_0x532953(0x14c)](_0x3ba07a=>{const _0x247303=_0x532953,_0x56750e=_0x3ba07a[_0x247303(0x119)]()[_0x247303(0x115)](/[^a-z0-9]/g)[_0x247303(0x13d)](_0x22336e=>_0x22336e[_0x247303(0x123)]())['filter'](Boolean);return _0x56750e[_0x247303(0x14c)](_0xa17e8e=>_0xa17e8e===_0x247303(0x155)||_0xa17e8e===_0x247303(0x153))&&_0x56750e[_0x247303(0x14c)](_0x2a1c3a=>_0x2a1c3a==='known');});});if(_0x4f7ffd)return null;return _0x243b34(0x162)+(_0x2373ab!==_0x243b34(0x135)?'/\x202\x20':'')+'+\x20'+(_0x54767b[_0x243b34(0x180)]?'<$'+_0x54767b[_0x243b34(0x180)]+_0x243b34(0x14d):'5');}static['getExistingCasterMeta']({cls:_0x36289d,sc:_0x38216b,actor:_0x21160d,targetLevel:_0x3ff8c3,formDataSlotSelectFromComp:formDataSlotSelectFromComp=null,abilityScoresFromComp:abilityScoresFromComp=null}){const _0x7bf0b0=_0x42a7dd;if(!_0x3ff8c3)return null;const _0x13ed7b=DataConverter['getMaxCasterProgression'](_0x36289d?.[_0x7bf0b0(0x12e)],_0x38216b?.[_0x7bf0b0(0x12e)]),_0x49b76a=Charactermancer_Spell_Util['getCasterProgressionMeta']({'casterProgression':_0x13ed7b,'curLevel':0x0,'targetLevel':_0x3ff8c3});return{'maxLearnedCantrips':this['getMaxLearnedCantrips']({'cls':_0x36289d,'sc':_0x38216b,'targetLevel':_0x3ff8c3}),'fixedLearnedProgression':this[_0x7bf0b0(0x11a)]({'cls':_0x36289d,'sc':_0x38216b,'targetLevel':_0x3ff8c3,'isExistingClass':!![],'formDataSlotSelectFromComp':formDataSlotSelectFromComp}),'maxPreparedSpells':this['getMaxPreparedSpells']({'cls':_0x36289d,'sc':_0x38216b,'targetLevel':_0x3ff8c3,'existingAbilityScores':Charactermancer_Util['getCurrentAbilityScores'](_0x21160d),'abilityScoresFromComp':abilityScoresFromComp}),'spellLevelLow':_0x49b76a?.[_0x7bf0b0(0x121)],'spellLevelLowHigh':_0x49b76a?.['spellLevelHigh']};}}class Charactermancer_Spell_SlotLevelSelect extends BaseComponent{constructor(_0x378ce9){super(),this['_className']=_0x378ce9;}set[_0x42a7dd(0x11c)](_0x49c7df){const _0x53c1ae=_0x42a7dd;this[_0x53c1ae(0x125)]['curLevel']=_0x49c7df;}set['targetLevel'](_0x14944d){const _0x43fa6f=_0x42a7dd;this['_state'][_0x43fa6f(0x129)]=_0x14944d;}set[_0x42a7dd(0x16c)](_0x525393){const _0x2c01c5=_0x42a7dd;this[_0x2c01c5(0x125)]['spellsKnownProgression']=_0x525393;}set[_0x42a7dd(0x12e)](_0x551a87){const _0xbbeb3a=_0x42a7dd;this[_0xbbeb3a(0x125)]['casterProgression']=_0x551a87;}set[_0x42a7dd(0x15c)](_0x39354a){const _0x1cf90f=_0x42a7dd;this[_0x1cf90f(0x125)][_0x1cf90f(0x15c)]=_0x39354a;}set[_0x42a7dd(0x12a)](_0x4a3aeb){const _0x5b819f=_0x42a7dd;this[_0x5b819f(0x125)][_0x5b819f(0x12a)]=_0x4a3aeb;}set[_0x42a7dd(0x13e)](_0x3f1907){const _0x43b914=_0x42a7dd;this[_0x43b914(0x125)]['spellsKnownProgressionFixedAllowHigherLevel']=_0x3f1907;}[_0x42a7dd(0x165)](_0x3abf05){const _0x2718ca=_0x42a7dd;this[_0x2718ca(0x15b)](_0x2718ca(0x164),_0x3abf05);}['_doPulseFixedLearnedProgression'](){const _0x428543=_0x42a7dd;this[_0x428543(0x125)][_0x428543(0x164)]=!this['_state'][_0x428543(0x164)];}[_0x42a7dd(0x18c)](_0x4191c8){const _0x37e6ec=_0x42a7dd,_0x52db90=$('<div\x20class=\x22ve-flex-col\x20w-100\x22></div>')[_0x37e6ec(0x1a1)](_0x4191c8['empty']()),_0x43aa54=()=>_0x52db90[_0x37e6ec(0x184)](this[_0x37e6ec(0x18d)]());this[_0x37e6ec(0x15b)](_0x37e6ec(0x11c),_0x43aa54),this[_0x37e6ec(0x15b)](_0x37e6ec(0x129),_0x43aa54),this[_0x37e6ec(0x15b)](_0x37e6ec(0x12e),_0x43aa54),this[_0x37e6ec(0x15b)]('spellsKnownProgressionFixed',_0x43aa54),this['_addHookBase']('spellsKnownProgressionFixedAllowLowerLevel',_0x43aa54),this[_0x37e6ec(0x15b)](_0x37e6ec(0x13e),_0x43aa54),this['_addHookBase']('spellsKnownProgression',_0x43aa54),_0x43aa54();const _0x5c35f3=()=>this[_0x37e6ec(0x1a3)]();this['_addHookBase'](_0x37e6ec(0x11c),_0x5c35f3),this[_0x37e6ec(0x15b)](_0x37e6ec(0x129),_0x5c35f3),this[_0x37e6ec(0x15b)](_0x37e6ec(0x12e),_0x5c35f3),this[_0x37e6ec(0x15b)](_0x37e6ec(0x16c),_0x5c35f3),this[_0x37e6ec(0x15b)]('spellsKnownAllowLowerLevel',_0x5c35f3),this[_0x37e6ec(0x15b)](_0x37e6ec(0x139),_0x5c35f3),_0x5c35f3();const _0x8b77a2=()=>this[_0x37e6ec(0x12b)]();this[_0x37e6ec(0x15b)](_0x37e6ec(0x11c),_0x8b77a2),this[_0x37e6ec(0x15b)]('targetLevel',_0x8b77a2),this[_0x37e6ec(0x15b)](_0x37e6ec(0x12e),_0x8b77a2),this[_0x37e6ec(0x15b)](_0x37e6ec(0x15c),_0x8b77a2),this[_0x37e6ec(0x15b)](_0x37e6ec(0x12a),_0x8b77a2),this[_0x37e6ec(0x15b)](_0x37e6ec(0x13e),_0x8b77a2),_0x8b77a2();const _0x26202a=$('<div\x20class=\x22py-1\x20clickable\x20ve-muted\x22>[+]</div>')['click'](()=>{const _0x19c5c3=_0x37e6ec;_0x26202a['text'](_0x26202a[_0x19c5c3(0x141)]()===_0x19c5c3(0x168)?_0x19c5c3(0x146):_0x19c5c3(0x168)),_0x5b4346[_0x19c5c3(0x184)]();}),_0xed0b65=[...new Array(Consts[_0x37e6ec(0x14a)])][_0x37e6ec(0x13d)]((_0x18ceed,_0x32d87e)=>{const _0x27d91c=_0x37e6ec,_0x4e0662=_0x32d87e+0x1,_0x5a8b4e=$('<div\x20class=\x22col-10\x20ve-flex-v-center\x20ve-flex-wrap\x22></div>'),{propSpellLevelMax:_0x5a961e}=this['constructor']['_getPropsGeneral'](_0x4e0662),{propCnt:_0x23bbd1}=this[_0x27d91c(0x150)]['_getPropsLevel'](_0x4e0662,_0x27d91c(0x198)),{propCnt:_0x1afa66}=this[_0x27d91c(0x150)][_0x27d91c(0x15a)](_0x4e0662,_0x27d91c(0x132)),_0x5bded9=[],_0x4c74eb=[],_0x42a47c=$$`<div class="ve-flex-v-center stripe-odd">
				<div class="col-2 text-center">${_0x32d87e+0x1}</div>
				${_0x5a8b4e}
			</div>`,_0x4badd3=$('<div>—</div>')[_0x27d91c(0x1a1)](_0x5a8b4e),_0x5db6ba=()=>{const _0x6c9a49=_0x27d91c;let _0x1d4e59=0x0;_0x1d4e59=_0x1d4e59+this[_0x6c9a49(0x163)]({'namespace':_0x6c9a49(0x198),'selMetas':_0x5bded9,'propCnt':_0x23bbd1,'propIsAllowLower':_0x6c9a49(0x170),'propIsAllowHigher':_0x6c9a49(0x139),'lvl':_0x4e0662,'propSpellLevelMax':_0x5a961e,'$cellSpells':_0x5a8b4e}),_0x1d4e59=_0x1d4e59+this[_0x6c9a49(0x163)]({'namespace':_0x6c9a49(0x132),'selMetas':_0x4c74eb,'propCnt':_0x1afa66,'propIsAllowLower':_0x6c9a49(0x12a),'propIsAllowHigher':_0x6c9a49(0x13e),'lvl':_0x4e0662,'propSpellLevelMax':_0x5a961e,'$cellSpells':_0x5a8b4e}),_0x4badd3[_0x6c9a49(0x184)](_0x1d4e59===0x0),_0x42a47c[_0x6c9a49(0x184)](_0x4e0662>(this[_0x6c9a49(0x125)][_0x6c9a49(0x11c)]??0x0)&&(this[_0x6c9a49(0x125)][_0x6c9a49(0x129)]??0x0)>=_0x4e0662);};return this[_0x27d91c(0x15b)](_0x1afa66,_0x5db6ba),this['_addHookBase'](_0x23bbd1,_0x5db6ba),this[_0x27d91c(0x15b)](_0x5a961e,_0x5db6ba),this[_0x27d91c(0x15b)](_0x27d91c(0x11c),_0x5db6ba),this[_0x27d91c(0x15b)]('targetLevel',_0x5db6ba),this[_0x27d91c(0x15b)](_0x27d91c(0x170),_0x5db6ba),this[_0x27d91c(0x15b)](_0x27d91c(0x139),_0x5db6ba),this[_0x27d91c(0x15b)](_0x27d91c(0x12a),_0x5db6ba),this[_0x27d91c(0x15b)]('spellsKnownProgressionFixedAllowHigherLevel',_0x5db6ba),_0x5db6ba(),_0x42a47c;}),_0x5b4346=$$`<div class="ve-flex-col w-100">
			<div class="ve-muted italic ve-small mb-1">If you wish to swap out learned spell levels for lower/higher (for example, when you swap out a spell on gaining a level as a Bard), you may do so here. Note that your final choices are not validated, so swap with caution, and according to the rules!</div>
			<div class="ve-flex-v-center">
				<div class="col-2 text-center">${this[_0x37e6ec(0x166)]} Level</div>
				<div class="col-10">Learned Spell Levels</div>
			</div>
			${_0xed0b65}
		</div>`['toggleVe']();$$(_0x52db90)`<div class="ve-flex-col w-100">
			<div class="split-v-center">
				<div class="bold">Learned Slot Level</div>
				${_0x26202a}
			</div>

			${_0x5b4346}
		</div>`;}[_0x42a7dd(0x163)]({namespace:_0x9fbbd4,propCnt:_0x4fca4d,selMetas:_0x2e0201,lvl:_0x105da5,propSpellLevelMax:_0x549c4b,$cellSpells:_0xe52d88,propIsAllowLower:_0xb01d50,propIsAllowHigher:_0x4dcb60}){const _0x178400=_0x42a7dd;let _0xedf65f=0x0;const _0x200527=this[_0x178400(0x125)][_0x4fca4d];for(let _0x2c8a43=0x0,_0x89b48b=Math[_0x178400(0x167)](_0x200527,_0x2e0201['length']);_0x2c8a43<_0x89b48b;++_0x2c8a43){let _0x1024e8=_0x2e0201[_0x2c8a43];if(_0x2c8a43>_0x200527){_0x1024e8[_0x178400(0x133)][_0x178400(0x16d)](),_0x1024e8['$dispStatic']['hideVe']();continue;}const {propSpellLevel:_0x5aa765}=this[_0x178400(0x150)]['_getPropsSpell'](_0x105da5,_0x9fbbd4,_0x2c8a43);if(!_0x2e0201[_0x2c8a43]){_0x1024e8=ComponentUiUtil['$getSelEnum'](this,_0x5aa765,{'values':this[_0x178400(0x151)](_0xb01d50,_0x4dcb60,_0x549c4b),'asMeta':!![],'fnDisplay':_0x351aaf=>this[_0x178400(0x150)][_0x178400(0x127)](_0x351aaf)}),_0x1024e8[_0x178400(0x133)][_0x178400(0x114)](_0x178400(0x1a0))[_0x178400(0x1a1)](_0xe52d88),_0x2e0201[_0x2c8a43]=_0x1024e8;const _0x504e1f=()=>_0x1024e8[_0x178400(0x133)][_0x178400(0x183)](_0x178400(0x197)+this[_0x178400(0x125)][_0x5aa765]+_0x178400(0x145));this['_addHookBase'](_0x5aa765,_0x504e1f),_0x504e1f(),this['_addHookBase'](_0x5aa765,()=>this[_0x178400(0x154)]());const _0x566ac7=$('<div\x20class=\x22ve-flex-vh-center\x20manc-sp__sel-slot-level\x20text-center\x20ve-muted\x22></div>')[_0x178400(0x1a1)](_0xe52d88),_0x534263=()=>{const _0x158d33=_0x178400;_0x566ac7[_0x158d33(0x184)](this['_isShowStaticFixedValue'](_0xb01d50,_0x4dcb60,_0x549c4b)),_0x566ac7[_0x158d33(0x141)](this[_0x158d33(0x150)]['_getSpellLevelDisplay'](this[_0x158d33(0x125)][_0x549c4b]))[_0x158d33(0x183)](_0x158d33(0x18f)+this['_state'][_0x549c4b]+'-level\x20spell\x20at\x20this\x20level.');};this[_0x178400(0x15b)](_0x5aa765,_0x534263),this['_addHookBase'](_0x549c4b,_0x534263),this[_0x178400(0x15b)](_0xb01d50,_0x534263),this[_0x178400(0x15b)](_0x4dcb60,_0x534263),this[_0x178400(0x15b)](_0x178400(0x11c),_0x534263),this[_0x178400(0x15b)](_0x178400(0x129),_0x534263),_0x534263(),_0x1024e8[_0x178400(0x156)]=_0x566ac7;const _0x57f02a=()=>{const _0x37a329=_0x178400;_0x1024e8[_0x37a329(0x128)](this[_0x37a329(0x151)](_0xb01d50,_0x4dcb60,_0x549c4b));};this[_0x178400(0x15b)](_0x549c4b,_0x57f02a),this[_0x178400(0x15b)](_0xb01d50,_0x57f02a),this[_0x178400(0x15b)](_0x4dcb60,_0x57f02a),this[_0x178400(0x15b)](_0x178400(0x11c),_0x57f02a),this['_addHookBase'](_0x178400(0x129),_0x57f02a);}_0xedf65f++;const _0x1a81ab=this['_isShowStaticFixedValue'](_0xb01d50,_0x4dcb60,_0x549c4b);_0x1024e8['$sel'][_0x178400(0x184)](!_0x1a81ab),_0x1024e8[_0x178400(0x156)][_0x178400(0x184)](_0x1a81ab);}return _0xedf65f;}static[_0x42a7dd(0x127)](_0x508feb){const _0x4422f6=_0x42a7dd;return Parser[_0x4422f6(0x118)](_0x508feb)+_0x4422f6(0x112);}static[_0x42a7dd(0x18b)](_0x142ccf,_0x2bac71,_0x592351){const _0x5e386d=_0x42a7dd;return{'propSpellLevel':_0x142ccf+'_'+_0x2bac71+'_'+_0x592351+_0x5e386d(0x152)};}static['_getPropsLevel'](_0x40c163,_0x546f15){return{'propCnt':_0x40c163+'_'+_0x546f15+'_cntFixed'};}static[_0x42a7dd(0x177)](_0x3f9787){return{'propSpellLevelMax':_0x3f9787+'_spellLevelMax'};}[_0x42a7dd(0x18d)](){const _0x2c17eb=_0x42a7dd;if(this['_state'][_0x2c17eb(0x11c)]==null||this[_0x2c17eb(0x125)]['targetLevel']==null||this['_state'][_0x2c17eb(0x12e)]==null)return![];return!!(this[_0x2c17eb(0x125)][_0x2c17eb(0x15c)]&&(this[_0x2c17eb(0x125)]['spellsKnownProgressionFixedAllowLowerLevel']||this[_0x2c17eb(0x125)][_0x2c17eb(0x13e)])||this[_0x2c17eb(0x125)][_0x2c17eb(0x16c)]&&(this[_0x2c17eb(0x125)][_0x2c17eb(0x170)]||this['_state'][_0x2c17eb(0x139)]));}[_0x42a7dd(0x151)](_0x29be18,_0x21ce37,_0x320013){const _0x5c7c7f=_0x42a7dd,_0x32b9e3=Charactermancer_Spell_Util['getCasterProgressionMeta']({'casterProgression':this['_state']['casterProgression'],'curLevel':this[_0x5c7c7f(0x125)][_0x5c7c7f(0x11c)],'targetLevel':this[_0x5c7c7f(0x125)][_0x5c7c7f(0x129)]})?.['spellLevelHigh']||0x0,_0x1b4540=this[_0x5c7c7f(0x125)][_0x29be18]?0x1:_0x32b9e3,_0x2f5167=this['_state'][_0x21ce37]?_0x32b9e3:this['_state'][_0x320013],_0xc40deb=[];for(let _0x3a0007=_0x1b4540;_0x3a0007<=_0x2f5167;++_0x3a0007)_0xc40deb['push'](_0x3a0007);return _0xc40deb;}[_0x42a7dd(0x1a3)](){const _0x32b35f=_0x42a7dd;[...new Array(Consts[_0x32b35f(0x14a)])][_0x32b35f(0x174)]((_0x44c5a5,_0x28a970)=>this['_doPopulateGenericKnownState_forLevel'](_0x28a970+0x1)),this[_0x32b35f(0x154)]();}[_0x42a7dd(0x17e)](_0x1721d5){const _0x5bfdb5=_0x42a7dd;if(this[_0x5bfdb5(0x17a)]()||!this['_state'][_0x5bfdb5(0x16c)]){this[_0x5bfdb5(0x11b)]({'lvl':_0x1721d5,'namespace':_0x5bfdb5(0x198)});return;}const _0x339a4d=this[_0x5bfdb5(0x125)][_0x5bfdb5(0x16c)][_0x1721d5-0x2]||0x0,_0x5eb579=this[_0x5bfdb5(0x125)]['spellsKnownProgression'][_0x1721d5-0x1]||0x0,_0x305224=_0x5eb579-_0x339a4d;this[_0x5bfdb5(0x161)]({'lvl':_0x1721d5,'namespace':_0x5bfdb5(0x198),'numSpells':_0x305224,'propIsAllowLower':_0x5bfdb5(0x170),'propIsAllowHigher':_0x5bfdb5(0x139)});}[_0x42a7dd(0x17a)](){const _0xf6de8=_0x42a7dd;return this[_0xf6de8(0x125)][_0xf6de8(0x11c)]==null||this[_0xf6de8(0x125)]['targetLevel']==null||this[_0xf6de8(0x125)][_0xf6de8(0x12e)]==null||UtilDataConverter[_0xf6de8(0x136)][this[_0xf6de8(0x125)][_0xf6de8(0x12e)]]==null;}[_0x42a7dd(0x11b)]({lvl:_0x3c62bd,namespace:_0x4ae2df}){const _0x447b18=_0x42a7dd,{propCnt:_0x28abde}=this[_0x447b18(0x150)][_0x447b18(0x15a)](_0x3c62bd,_0x4ae2df);this['_state'][_0x28abde]=null;}[_0x42a7dd(0x161)]({lvl:_0x4bff31,namespace:_0x7a1b94,numSpells:_0x2eaf94,propIsAllowLower:_0x4484d6,propIsAllowHigher:_0x1404f5}){const _0x429059=_0x42a7dd,_0x36ce2a=Charactermancer_Spell_Util[_0x429059(0x117)]({'casterProgression':this[_0x429059(0x125)][_0x429059(0x12e)],'curLevel':0x0,'targetLevel':_0x4bff31})?.[_0x429059(0x176)]||0x0;[...new Array(_0x2eaf94)]['map']((_0xe736fc,_0x519a1c)=>{const _0x242b73=_0x429059,{propSpellLevel:_0x1b13c1}=this['constructor'][_0x242b73(0x18b)](_0x4bff31,_0x7a1b94,_0x519a1c);if(this['_state'][_0x1b13c1]==null)this[_0x242b73(0x125)][_0x1b13c1]=_0x36ce2a;else{let _0x2d7b8b=this[_0x242b73(0x125)][_0x1b13c1];if(!this[_0x242b73(0x125)][_0x4484d6])_0x2d7b8b=Math[_0x242b73(0x167)](_0x2d7b8b,_0x36ce2a);if(!this[_0x242b73(0x125)][_0x1404f5])_0x2d7b8b=Math[_0x242b73(0x15e)](_0x2d7b8b,_0x36ce2a);this[_0x242b73(0x125)][_0x1b13c1]=_0x2d7b8b;}});const {propCnt:_0x438715}=this[_0x429059(0x150)][_0x429059(0x15a)](_0x4bff31,_0x7a1b94);this['_state'][_0x438715]=_0x2eaf94;const {propSpellLevelMax:_0x41c4d4}=this['constructor'][_0x429059(0x177)](_0x4bff31);this[_0x429059(0x125)][_0x41c4d4]=_0x36ce2a;}['_doPopulateFixedKnownState'](){const _0x4ca7db=_0x42a7dd;[...new Array(Consts[_0x4ca7db(0x14a)])][_0x4ca7db(0x174)]((_0x5562a8,_0x4ea9be)=>this[_0x4ca7db(0x14e)](_0x4ea9be+0x1)),this[_0x4ca7db(0x154)]();}['_doPopulateFixedKnownState_forLevel'](_0x22e4bc){const _0x4e686a=_0x42a7dd;if(this[_0x4e686a(0x17a)]()||!this[_0x4e686a(0x125)][_0x4e686a(0x15c)]){this[_0x4e686a(0x11b)]({'lvl':_0x22e4bc,'namespace':_0x4e686a(0x132)});return;}const _0x16fa00=this[_0x4e686a(0x125)][_0x4e686a(0x15c)][_0x22e4bc-0x1]||0x0;this[_0x4e686a(0x161)]({'lvl':_0x22e4bc,'namespace':_0x4e686a(0x132),'numSpells':_0x16fa00,'propIsAllowLower':_0x4e686a(0x12a),'propIsAllowHigher':'spellsKnownProgressionFixedAllowHigherLevel'});}['_isShowStaticFixedValue'](_0x952fc3,_0x5b17d3,_0x586b4c){const _0x4ca99f=_0x42a7dd,_0x366f8a=Charactermancer_Spell_Util[_0x4ca99f(0x117)]({'casterProgression':this['_state'][_0x4ca99f(0x12e)],'curLevel':this[_0x4ca99f(0x125)][_0x4ca99f(0x11c)],'targetLevel':this[_0x4ca99f(0x125)][_0x4ca99f(0x129)]})?.[_0x4ca99f(0x176)]||0x0;if(_0x366f8a<=0x1)return!![];const _0x4500d1=this[_0x4ca99f(0x125)][_0x952fc3]&&this['_state'][_0x586b4c]!==0x1,_0xfebeff=this[_0x4ca99f(0x125)][_0x5b17d3]&&this[_0x4ca99f(0x125)][_0x586b4c]!==0x9;return!_0x4500d1&&!_0xfebeff;}static[_0x42a7dd(0x17f)]({targetLevel:_0x599dd5,casterProgression:_0x398fda,spellsKnownProgression:_0x2a2605,spellsKnownProgressionFixed:_0x2f4c95}){const _0x432eda=_0x42a7dd,_0x3e52e7=[...new Array(0x9)][_0x432eda(0x13d)](()=>0x0);let _0x504257=![];return _0x2a2605&&_0x599dd5!=null&&_0x398fda&&(_0x504257=!![],this[_0x432eda(0x14b)](_0x3e52e7,{'targetLevel':_0x599dd5,'casterProgression':_0x398fda,'spellsKnownProgression':_0x2a2605})),_0x2f4c95&&_0x599dd5!=null&&_0x398fda&&(_0x504257=!![],this[_0x432eda(0x1a2)](_0x3e52e7,{'targetLevel':_0x599dd5,'casterProgression':_0x398fda,'spellsKnownProgressionFixed':_0x2f4c95})),{'isFormComplete':!![],'isAnyData':_0x504257,'data':_0x3e52e7};}['getFormData'](){const _0x20d87a=_0x42a7dd,_0x3cf66e=[...new Array(0x9)][_0x20d87a(0x13d)](()=>0x0);let _0x44319c=![];return this[_0x20d87a(0x125)][_0x20d87a(0x16c)]&&this[_0x20d87a(0x125)][_0x20d87a(0x129)]!=null&&this[_0x20d87a(0x125)][_0x20d87a(0x12e)]&&(_0x44319c=!![],this[_0x20d87a(0x159)](_0x3cf66e)),this[_0x20d87a(0x125)]['spellsKnownProgressionFixed']&&this[_0x20d87a(0x125)]['targetLevel']!=null&&this[_0x20d87a(0x125)][_0x20d87a(0x12e)]&&(_0x44319c=!![],this[_0x20d87a(0x142)](_0x3cf66e)),{'isFormComplete':!![],'isAnyData':_0x44319c,'data':_0x3cf66e};}[_0x42a7dd(0x159)](_0x1526d1){const _0xd51293=_0x42a7dd;if(!this['_state']['spellsKnownAllowLowerLevel']&&!this['_state']['spellsKnownAllowHigherLevel'])this[_0xd51293(0x150)][_0xd51293(0x14b)](_0x1526d1,{'targetLevel':this[_0xd51293(0x125)]['targetLevel'],'casterProgression':this[_0xd51293(0x125)][_0xd51293(0x12e)],'spellsKnownProgression':this[_0xd51293(0x125)][_0xd51293(0x16c)]});else this[_0xd51293(0x19b)](_0x1526d1);}[_0x42a7dd(0x142)](_0x176397){const _0x437b53=_0x42a7dd;if(!this[_0x437b53(0x125)]['spellsKnownProgressionFixedAllowLowerLevel']&&this[_0x437b53(0x125)][_0x437b53(0x13e)])this[_0x437b53(0x150)][_0x437b53(0x1a2)](_0x176397,{'targetLevel':this[_0x437b53(0x125)][_0x437b53(0x129)],'casterProgression':this[_0x437b53(0x125)][_0x437b53(0x12e)],'spellsKnownProgressionFixed':this['_state']['spellsKnownProgressionFixed']});else this[_0x437b53(0x138)](_0x176397);}static['_getFormData_handleKnownProgressionGeneric_noChoice'](_0x2f5941,{targetLevel:_0x9e5378,casterProgression:_0x1829c4,spellsKnownProgression:_0x156bda}){const _0x457b76=_0x42a7dd;[...new Array(_0x9e5378)][_0x457b76(0x174)]((_0x532ec1,_0x14aeee)=>{const _0x19d922=_0x457b76,_0x17c2a7=Charactermancer_Spell_Util['getCasterProgressionMeta']({'casterProgression':_0x1829c4,'curLevel':0x0,'targetLevel':_0x14aeee+0x1})?.[_0x19d922(0x176)]||0x0,_0x268684=_0x17c2a7-0x1;if(_0x268684<0x0)return;const _0x101d7e=_0x156bda[_0x14aeee-0x1]||0x0,_0x31264e=_0x156bda[_0x14aeee]||0x0,_0x25c857=_0x31264e-_0x101d7e;_0x2f5941[_0x268684]+=_0x25c857;});}[_0x42a7dd(0x19b)](_0x532606){const _0x144181=_0x42a7dd;this[_0x144181(0x17c)]({'namespace':_0x144181(0x198),'totalKnownPerLevel':_0x532606,'propIsAllowLower':'spellsKnownAllowLowerLevel','propIsAllowHigher':_0x144181(0x139)});}static[_0x42a7dd(0x1a2)](_0x38b816,{targetLevel:_0x24e9ec,casterProgression:_0x1845ac,spellsKnownProgressionFixed:_0x27782b}){_0x27782b['slice'](0x0,_0x24e9ec)['forEach']((_0x2617e5,_0x373b7b)=>{const _0x3f2948=_0x5d79,_0x36f0c8=Charactermancer_Spell_Util[_0x3f2948(0x117)]({'casterProgression':_0x1845ac,'curLevel':0x0,'targetLevel':_0x373b7b+0x1})?.['spellLevelHigh']||0x0,_0x9b8ff3=_0x36f0c8-0x1;if(_0x9b8ff3<0x0)return;_0x38b816[_0x9b8ff3]+=_0x2617e5;});}[_0x42a7dd(0x138)](_0x5ed018){const _0x213d6b=_0x42a7dd;this[_0x213d6b(0x17c)]({'namespace':_0x213d6b(0x132),'totalKnownPerLevel':_0x5ed018,'propIsAllowLower':_0x213d6b(0x12a),'propIsAllowHigher':_0x213d6b(0x13e)});}[_0x42a7dd(0x17c)]({namespace:_0xa3b751,totalKnownPerLevel:_0x3e2dac,propIsAllowLower:_0x4cf441,propIsAllowHigher:_0x4c71dd}){const _0x54f160=_0x42a7dd,_0x19964e=Charactermancer_Spell_Util['getCasterProgressionMeta']({'casterProgression':this[_0x54f160(0x125)][_0x54f160(0x12e)],'curLevel':this[_0x54f160(0x125)][_0x54f160(0x11c)],'targetLevel':this[_0x54f160(0x125)][_0x54f160(0x129)]})?.[_0x54f160(0x176)]||0x0;[...new Array(this[_0x54f160(0x125)]['targetLevel'])][_0x54f160(0x13d)]((_0x592c59,_0x5cb23f)=>{const _0x27c845=_0x54f160,_0x5a5d71=_0x5cb23f+0x1,_0x304cea=Charactermancer_Spell_Util[_0x27c845(0x117)]({'casterProgression':this['_state'][_0x27c845(0x12e)],'curLevel':0x0,'targetLevel':_0x5a5d71})?.[_0x27c845(0x176)]||0x0,{propCnt:_0x356c0b}=this[_0x27c845(0x150)][_0x27c845(0x15a)](_0x5a5d71,_0xa3b751),_0x70a948=this[_0x27c845(0x125)][_0x356c0b];for(let _0x51ed9a=0x0;_0x51ed9a<_0x70a948;++_0x51ed9a){const {propSpellLevel:_0x417d42}=this['constructor'][_0x27c845(0x18b)](_0x5a5d71,_0xa3b751,_0x51ed9a);let _0x1e75fa=this[_0x27c845(0x125)][_0x417d42];if(!this['_state'][_0x4cf441])_0x1e75fa=Math[_0x27c845(0x167)](_0x1e75fa,_0x304cea);if(!this[_0x27c845(0x125)][_0x4c71dd])_0x1e75fa=Math['min'](_0x1e75fa,_0x304cea);_0x1e75fa=Math[_0x27c845(0x15e)](_0x1e75fa,_0x19964e),_0x3e2dac[_0x1e75fa-0x1]++;}});}[_0x42a7dd(0x189)](){return{'curLevel':null,'targetLevel':null,'casterProgression':null,'spellsKnownProgression':null,'spellsKnownAllowLowerLevel':!![],'spellsKnownAllowHigherLevel':!![],'spellsKnownProgressionFixed':null,'spellsKnownProgressionFixedAllowLowerLevel':![],'spellsKnownProgressionFixedAllowHigherLevel':![],'pulseFixedLearnedProgression':![]};}}function _0x5a06(){const _0x49bc8e=['replace','manc-sp__sel-slot-level\x20text-center\x20p-0\x20clickable','appendTo','_getFormData_handleKnownProgressionFixed_noChoice','_doPopulateGenericKnownState','int_mod','getMaxPreparedSpells','preparedSpells','subclassTableGroups','-level\x20sp.','includes','addClass','split','10bkyzSJ','getCasterProgressionMeta','getOrdinalForm','toLowerCase','getFixedLearnedProgression','_doPopulateState_forLevel_doReset','curLevel','mode','stringToSlug','265008lWBVkf','getCasterCantripProgressionMeta','spellLevelLow','_getMaxPreparedSpells_getAbilityScore','trim','wis_mod','_state','1000896rpbfND','_getSpellLevelDisplay','setValues','targetLevel','spellsKnownProgressionFixedAllowLowerLevel','_doPopulateFixedKnownState','str_mod','_getApproximateCantripProgression','casterProgression','12UoazJt','slice','_getApproximatePreparedFormula','fixed','$sel','2KpfRDU','full','CASTER_TYPE_TO_PROGRESSION','rowsSpellProgression','_getFormData_handleKnownProgressionFixed_choice','spellsKnownAllowHigherLevel','isAnyData','data','\x22)\x20as\x20a\x20number!','map','spellsKnownProgressionFixedAllowHigherLevel','cha','@abilities.','text','_getFormData_handleKnownProgressionFixed','4IVSYEu','2095470SSzrtI','-level\x20spell\x20at\x20this\x20level.','[‒]','1401540zliaWc','cantrips\x20known','stripTags','CHAR_MAX_LEVEL','_getFormData_handleKnownProgressionGeneric_noChoice','some','_mod$>','_doPopulateFixedKnownState_forLevel','every','constructor','_geSpellLevelSelValues','_spellLevel','spells','_doPulseFixedLearnedProgression','spell','$dispStatic','getMaxCantripProgression','spellsKnownProgressionFixedByLevel','_getFormData_handleKnownProgressionGeneric','_getPropsLevel','_addHookBase','spellsKnownProgressionFixed','_getApproximateNumberCol','min','filter','cha_mod','_doPopulateState_forLevel_doPopulateForNumSpells','<$level$>\x20','_hkRow_doAdjustElements','pulseFixedLearnedProgression','addHookPulseFixedLearnedProgression','_className','max','[+]','source','dex','entries','spellsKnownProgression','hideVe','level','pact','spellsKnownAllowLowerLevel','last','warn','getMaxCasterProgression','forEach','con','spellLevelHigh','_getPropsGeneral','Unknown\x20variable\x20\x22','_getApproximateSpellsKnownProgression','_doPopulateState_forLevel_isDoReset','.levels','_getFormData_handleKnownProgression_choice','getMaxPreparedSpellsFormula','_doPopulateGenericKnownState_forLevel','getDefaultFormData','spellcastingAbility','66710WvcWgQ','int','title','toggleVe','22oSmdJq','dex_mod','16QdTeBM','spells\x20known','_getDefaultState','Could\x20not\x20evaluate\x20expression\x20\x22','_getPropsSpell','render','_isAnyChoice','con_mod','This\x20box\x20indicates\x20you\x20will\x20learn\x20a\x20','151992VilOuU','getMaxLearnedCantrips','@classes.','getAbilityModNumber','56370mGFbFJ','push','totals','You\x20have\x20selected\x20to\x20learn\x20a\x20','generic','flat','colLabels','_getFormData_handleKnownProgressionGeneric_choice','hasSourceJson','cantripProgression','classTableGroups'];_0x5a06=function(){return _0x49bc8e;};return _0x5a06();}export{Charactermancer_Spell_Util,Charactermancer_Spell_SlotLevelSelect};