const _0xaa7e14=_0x13f3;(function(_0x299b6b,_0x4101f8){const _0x4bbcc5=_0x13f3,_0x795db8=_0x299b6b();while(!![]){try{const _0x6bca4b=-parseInt(_0x4bbcc5(0x208))/0x1+-parseInt(_0x4bbcc5(0x234))/0x2+parseInt(_0x4bbcc5(0x1f0))/0x3+parseInt(_0x4bbcc5(0x228))/0x4*(-parseInt(_0x4bbcc5(0x25a))/0x5)+parseInt(_0x4bbcc5(0x1ec))/0x6*(parseInt(_0x4bbcc5(0x21d))/0x7)+-parseInt(_0x4bbcc5(0x212))/0x8+parseInt(_0x4bbcc5(0x20f))/0x9;if(_0x6bca4b===_0x4101f8)break;else _0x795db8['push'](_0x795db8['shift']());}catch(_0x489584){_0x795db8['push'](_0x795db8['shift']());}}}(_0x27c0,0x9c0c5));import{ActorCharactermancerBaseComponent}from'./ActorCharactermancerUtil.js';import{Charactermancer_ConditionImmunitySelect,Charactermancer_DamageImmunitySelect,Charactermancer_DamageResistanceSelect,Charactermancer_DamageVulnerabilitySelect,Charactermancer_ExpertiseSelect,Charactermancer_OtherProficiencySelect,Charactermancer_Util}from'./UtilCharactermancer.js';import{Charactermancer_Background_Characteristics,Charactermancer_Background_Features}from'./UtilCharactermancerBackground.js';function _0x13f3(_0x18afd8,_0x43f818){const _0x27c0d8=_0x27c0();return _0x13f3=function(_0x13f3e8,_0xd730d8){_0x13f3e8=_0x13f3e8-0x1e1;let _0x5ce6f5=_0x27c0d8[_0x13f3e8];return _0x5ce6f5;},_0x13f3(_0x18afd8,_0x43f818);}import{ModalFilterBackgroundsFvtt}from'./UtilModalFilter.js';import{UtilActors}from'./UtilActors.js';import{DataConverterBackground}from'./DataConverterBackground.js';class ActorCharactermancerBackground extends ActorCharactermancerBaseComponent{constructor(_0x322215){const _0x4eac74=_0x13f3;_0x322215=_0x322215||{},super(),this[_0x4eac74(0x22d)]=_0x322215[_0x4eac74(0x260)],this[_0x4eac74(0x23e)]=_0x322215['data'],this[_0x4eac74(0x207)]=_0x322215['parent'],this[_0x4eac74(0x1e6)]=_0x322215['tabBackground'],this[_0x4eac74(0x241)]=new ModalFilterBackgroundsFvtt({'namespace':_0x4eac74(0x215),'isRadio':!![],'allData':this['_data']['background']}),this['_metaCompBackgroundFeatures']=null,this[_0x4eac74(0x1fe)]=null,this[_0x4eac74(0x211)]=null,this['_compBackgroundToolProficiencies']=null,this[_0x4eac74(0x1f7)]=null,this[_0x4eac74(0x22c)]=null,this[_0x4eac74(0x1f1)]=null,this[_0x4eac74(0x254)]=null,this[_0x4eac74(0x259)]=null,this['_compBackgroundDamageImmunity']=null,this[_0x4eac74(0x221)]=null,this[_0x4eac74(0x220)]=null,this[_0x4eac74(0x21e)]=null;}get['compBackgroundFeatures'](){const _0x1d5d5f=_0x13f3;return this[_0x1d5d5f(0x1ea)]?.['comp'];}get[_0xaa7e14(0x202)](){return this['_compBackgroundSkillProficiencies'];}get[_0xaa7e14(0x25c)](){return this['_compBackgroundLanguageProficiencies'];}get[_0xaa7e14(0x25f)](){const _0x4222ed=_0xaa7e14;return this[_0x4222ed(0x24e)];}get[_0xaa7e14(0x1e9)](){const _0x5dc524=_0xaa7e14;return this[_0x5dc524(0x1f7)];}get['compBackgroundCharacteristics'](){return this['_compBackgroundCharacteristics'];}get['compBackgroundExpertise'](){const _0x2a6885=_0xaa7e14;return this[_0x2a6885(0x1f1)];}get[_0xaa7e14(0x231)](){const _0x1bcc0b=_0xaa7e14;return this[_0x1bcc0b(0x254)];}get[_0xaa7e14(0x236)](){const _0xe9e7fc=_0xaa7e14;return this[_0xe9e7fc(0x259)];}get[_0xaa7e14(0x1ff)](){const _0x10ef12=_0xaa7e14;return this[_0x10ef12(0x214)];}get['compBackgroundDamageResistance'](){const _0x588a4b=_0xaa7e14;return this[_0x588a4b(0x221)];}get[_0xaa7e14(0x21a)](){const _0x10309e=_0xaa7e14;return this[_0x10309e(0x220)];}get[_0xaa7e14(0x1f6)](){const _0x3f982e=_0xaa7e14;return this[_0x3f982e(0x21e)];}get['isCustomizeLanguagesTools'](){const _0x52a6a8=_0xaa7e14;return this[_0x52a6a8(0x1f8)]['background_isCustomizeLanguagesTools'];}async['pLoad'](){const _0x2f0e66=_0xaa7e14;await this[_0x2f0e66(0x241)]['pPreloadHidden']();}[_0xaa7e14(0x218)]({ix:_0x3b5890,isAllowStub:isAllowStub=!![]}={}){const _0x57f2be=_0xaa7e14;if(_0x3b5890!=null){if(~_0x3b5890)return this[_0x57f2be(0x23e)]['background'][_0x3b5890];if(!isAllowStub)return null;return DataConverterBackground['getBackgroundStub']();}const _0x4acf08=this[_0x57f2be(0x23e)][_0x57f2be(0x1fa)][this[_0x57f2be(0x1f8)][_0x57f2be(0x24d)]];if(!_0x4acf08)return isAllowStub?DataConverterBackground[_0x57f2be(0x233)]():null;const _0x1aadc4=MiscUtil['copy'](_0x4acf08);if(!this[_0x57f2be(0x1ea)]?.[_0x57f2be(0x22f)])return _0x1aadc4;const _0x491c47=this[_0x57f2be(0x1ea)]['comp']['getFormData']();return _0x491c47['data']?.[_0x57f2be(0x1fa)];}[_0xaa7e14(0x23d)](){const _0x5330c2=_0xaa7e14,_0x4de609=this[_0x5330c2(0x1e6)]?.[_0x5330c2(0x210)];if(!_0x4de609)return;const {$sel:_0x5aefe2,$btnFilter:_0x311b16}=Charactermancer_Util[_0x5330c2(0x266)]({'comp':this,'prop':_0x5330c2(0x24d),'data':this['_data'][_0x5330c2(0x1fa)],'modalFilter':this['_modalFilterBackgrounds'],'title':_0x5330c2(0x200)}),_0x1d0d9e=ComponentUiUtil['$getCbBool'](this,'background_isCustomizeSkills'),_0x133e9a=ComponentUiUtil['$getCbBool'](this,_0x5330c2(0x244)),_0x1664be=ComponentUiUtil[_0x5330c2(0x223)](this,_0x5330c2(0x244)),_0x1af097=ComponentUiUtil[_0x5330c2(0x223)](this,_0x5330c2(0x244)),_0x521c71=ComponentUiUtil[_0x5330c2(0x223)](this,_0x5330c2(0x244)),_0x544c37=()=>this[_0x5330c2(0x252)]({'$stgRulesCustomize':_0xadc3e3});this['_addHookBase'](_0x5330c2(0x1fc),_0x544c37),this[_0x5330c2(0x242)]('background_isCustomizeLanguagesTools',_0x544c37);const _0x400055={0x1:$$`<label class="ve-flex-v-center ve-muted mb-1" title="Toggling this off will disable customization for the whole Language &amp; Tool proficiencies section."><div class="mr-1 ml-auto">Customize</div>${_0x521c71}</label>`},_0x5b28a2=_0xbf05a7=>{const _0x4dad8b=_0x5330c2,_0x3d2b8=this[_0x4dad8b(0x218)]({'isAllowStub':![]});this[_0x4dad8b(0x257)]({'$stgSkills':_0x4a5bd4,'background':_0x3d2b8,'$cbIsCustomizeSkills':_0x1d0d9e}),this['_background_renderBackground_stgLanguages']({'$stgLanguages':_0x262bac,'background':_0x3d2b8,'$cbIsCustomizeLanguagesTools':_0x133e9a}),this[_0x4dad8b(0x209)]({'$stgTools':_0x5d90a7,'background':_0x3d2b8,'$cbIsCustomizeLanguagesTools':_0x1664be}),this[_0x4dad8b(0x248)]({'$stgLanguagesTools':_0x5cdd0b,'background':_0x3d2b8,'$cbIsCustomizeLanguagesTools':_0x1af097,'$elesPreFromGroups':_0x400055}),this[_0x4dad8b(0x1fd)]({'$stgCharacteristics':_0x159f84,'background':_0x3d2b8}),this['_background_hk_showCustomizingRules']({'$stgRulesCustomize':_0xadc3e3}),this[_0x4dad8b(0x224)]({'$dispBackground':_0xf9edd9});if(!_0xbf05a7)this['_state']['background_pulseBackground']=!this[_0x4dad8b(0x1f8)][_0x4dad8b(0x250)];};this[_0x5330c2(0x242)](_0x5330c2(0x250),_0x5b28a2);const _0x4e59b5=()=>{const _0x27fd78=_0x5330c2,_0x32e83a=Object[_0x27fd78(0x219)](this[_0x27fd78(0x245)])['filter'](_0x19f0cb=>_0x19f0cb[_0x27fd78(0x1f3)](_0x27fd78(0x239))&&_0x19f0cb!==_0x27fd78(0x24d))['mergeMap'](_0x389aee=>({[_0x389aee]:null}));this[_0x27fd78(0x1ee)](_0x27fd78(0x230),_0x32e83a);const _0x3dd5ed=this[_0x27fd78(0x23e)][_0x27fd78(0x1fa)][this[_0x27fd78(0x1f8)][_0x27fd78(0x24d)]];this[_0x27fd78(0x1eb)]({'$stgFeatures':_0x2c3d1e,'background':_0x3dd5ed}),_0x5b28a2(),this[_0x27fd78(0x264)]({'$stg':_0x2211f7,'ent':_0x3dd5ed,'propComp':_0x27fd78(0x1f1),'propProficiencies':_0x27fd78(0x22e),'title':'Expertise','CompClass':Charactermancer_ExpertiseSelect,'fnGetExistingFvtt':Charactermancer_ExpertiseSelect[_0x27fd78(0x1e1)][_0x27fd78(0x24a)](Charactermancer_ExpertiseSelect)}),this[_0x27fd78(0x264)]({'$stg':_0x327b7f,'ent':_0x3dd5ed,'propComp':_0x27fd78(0x254),'propProficiencies':_0x27fd78(0x227),'title':_0x27fd78(0x24f),'CompClass':Charactermancer_OtherProficiencySelect,'propPathActorExistingProficiencies':[_0x27fd78(0x25b),_0x27fd78(0x25b),_0x27fd78(0x21f),_0x27fd78(0x23f)],'fnGetMappedProficiencies':Charactermancer_OtherProficiencySelect[_0x27fd78(0x258)]['bind'](Charactermancer_OtherProficiencySelect)}),this[_0x27fd78(0x264)]({'$stg':_0x41a19b,'ent':_0x3dd5ed,'propComp':'_compBackgroundArmorProficiencies','propProficiencies':_0x27fd78(0x21c),'title':_0x27fd78(0x24b),'CompClass':Charactermancer_OtherProficiencySelect,'propPathActorExistingProficiencies':[_0x27fd78(0x25b),_0x27fd78(0x25b),_0x27fd78(0x21f),_0x27fd78(0x225)],'fnGetMappedProficiencies':Charactermancer_OtherProficiencySelect[_0x27fd78(0x22a)][_0x27fd78(0x24a)](Charactermancer_OtherProficiencySelect)}),this['_shared_renderEntity_stgDiDrDvCi']({'$stg':_0x527020,'ent':_0x3dd5ed,'propComp':'_compBackgroundDamageImmunity','CompClass':Charactermancer_DamageImmunitySelect,'title':_0x27fd78(0x20d),'propRaceData':_0x27fd78(0x216),'propTraits':'di'}),this[_0x27fd78(0x23b)]({'$stg':_0x3bb6cd,'ent':_0x3dd5ed,'propComp':_0x27fd78(0x221),'CompClass':Charactermancer_DamageResistanceSelect,'title':_0x27fd78(0x1ef),'propRaceData':_0x27fd78(0x22b),'propTraits':'dr'}),this[_0x27fd78(0x23b)]({'$stg':_0x3a2fee,'ent':_0x3dd5ed,'propComp':_0x27fd78(0x220),'CompClass':Charactermancer_DamageVulnerabilitySelect,'title':_0x27fd78(0x1f4),'propRaceData':_0x27fd78(0x205),'propTraits':'dv'}),this[_0x27fd78(0x23b)]({'$stg':_0x33683c,'ent':_0x3dd5ed,'propComp':'_compBackgroundConditionImmunity','CompClass':Charactermancer_ConditionImmunitySelect,'title':_0x27fd78(0x261),'propRaceData':_0x27fd78(0x1f2),'propTraits':'ci'});};this['_addHookBase'](_0x5330c2(0x24d),_0x4e59b5);const _0x2c3d1e=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x4a5bd4=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x262bac=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x5d90a7=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x5cdd0b=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x327b7f=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x41a19b=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x2211f7=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x527020=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x3bb6cd=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x3a2fee=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x33683c=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0xadc3e3=$$`<div class="ve-flex-col"></div>`['hideVe'](),_0x159f84=$$`<div class="ve-flex-col"></div>`[_0x5330c2(0x1e7)](),_0x8ecd4c=()=>{const _0x2c31c7=_0x5330c2,_0x12992b=this['_data'][_0x2c31c7(0x1fa)][this['_state'][_0x2c31c7(0x24d)]];this[_0x2c31c7(0x257)]({'$stgSkills':_0x4a5bd4,'background':_0x12992b,'$cbIsCustomizeSkills':_0x1d0d9e});};this[_0x5330c2(0x242)](_0x5330c2(0x1fc),_0x8ecd4c);const _0x5d2c19=()=>{const _0x10ddf3=_0x5330c2,_0x56eca7=this[_0x10ddf3(0x23e)]['background'][this[_0x10ddf3(0x1f8)][_0x10ddf3(0x24d)]];this[_0x10ddf3(0x255)]({'$stgLanguages':_0x262bac,'background':_0x56eca7,'$cbIsCustomizeLanguagesTools':_0x133e9a}),this[_0x10ddf3(0x209)]({'$stgTools':_0x5d90a7,'background':_0x56eca7,'$cbIsCustomizeLanguagesTools':_0x1664be}),this[_0x10ddf3(0x248)]({'$stgLanguagesTools':_0x5cdd0b,'background':_0x56eca7,'$cbIsCustomizeLanguagesTools':_0x1af097,'$elesPreFromGroups':_0x400055});};this[_0x5330c2(0x242)](_0x5330c2(0x244),_0x5d2c19);const _0xf9edd9=$$`<div class="ve-flex-col w-100"></div>`;$$(_0x4de609)`
			<div class="ve-flex w-100 h-100">
				<div class="ve-flex-col w-100 h-100 px-1 pt-1 overflow-y-auto ve-grow veapp__bg-foundry">
					<div class="bold mb-2">Select a Background</div>
					<div class="ve-flex-v-center btn-group w-100">${_0x311b16}${_0x5aefe2}</div>
					${_0x2c3d1e}
					${_0x4a5bd4}
					${_0x262bac}
					${_0x5d90a7}
					${_0x5cdd0b}
					${_0x327b7f}
					${_0x41a19b}
					${_0x2211f7}
					${_0x527020}
					${_0x3bb6cd}
					${_0x3a2fee}
					${_0x33683c}
					${_0x159f84}
				</div>

				<div class="vr-1"></div>

				<div class="ve-flex-col w-100 h-100 px-1 overflow-y-auto ve-grow veapp__bg-foundry">
					${_0xadc3e3}
					${_0xf9edd9}
				</div>
			</div>
		`;}[_0xaa7e14(0x1eb)]({$stgFeatures:_0x244784,background:_0x1224f2}){const _0x53cc74=_0xaa7e14;if(this[_0x53cc74(0x1f8)]['background_ixBackground']===this[_0x53cc74(0x1ea)]?.[_0x53cc74(0x249)])return;_0x244784[_0x53cc74(0x25e)]();if(_0x1224f2){_0x244784[_0x53cc74(0x1e8)]()[_0x53cc74(0x213)](_0x53cc74(0x20e));const _0x287efb=new Charactermancer_Background_Features({'background':_0x1224f2,'modalFilter':this['_modalFilterBackgrounds']});this['_metaCompBackgroundFeatures']={'comp':_0x287efb,'ixBackground':this[_0x53cc74(0x1f8)][_0x53cc74(0x24d)]},_0x287efb[_0x53cc74(0x23d)](_0x244784),_0x287efb[_0x53cc74(0x238)](()=>{const _0x448d9b=_0x53cc74;this[_0x448d9b(0x1f8)][_0x448d9b(0x250)]=!this[_0x448d9b(0x1f8)][_0x448d9b(0x250)];});}else _0x244784['hideVe'](),this[_0x53cc74(0x1ea)]=null;}[_0xaa7e14(0x257)]({$stgSkills:_0x1b91c7,background:_0x521b37,$cbIsCustomizeSkills:_0x3d87d2}){const _0x315c41=_0xaa7e14;_0x3d87d2[_0x315c41(0x229)](),_0x1b91c7[_0x315c41(0x25e)](),this['_parent'][_0x315c41(0x240)][_0x315c41(0x1e2)](this[_0x315c41(0x1fe)]);if(_0x521b37&&_0x521b37[_0x315c41(0x226)]){$$(_0x1b91c7['showVe']())`<hr class="hr-2">
				<div class="mb-2 split-v-center">
					<div class="bold">Skill Proficiencies</div>
					<label class="ve-flex-v-center"><div class="mr-1">Customize</div>${_0x3d87d2}</label>
				</div>`;const _0x14c85e={'skillProficiencies':MiscUtil[_0x315c41(0x204)](this[_0x315c41(0x22d)],_0x315c41(0x25b),'data',_0x315c41(0x1e3))};this[_0x315c41(0x1fe)]=new Charactermancer_OtherProficiencySelect({'featureSourceTracker':this[_0x315c41(0x207)][_0x315c41(0x240)],'existing':Charactermancer_OtherProficiencySelect[_0x315c41(0x1f9)](_0x14c85e),'existingFvtt':_0x14c85e,'available':Charactermancer_OtherProficiencySelect['getMappedSkillProficiencies'](this[_0x315c41(0x1f8)][_0x315c41(0x1fc)]?UtilActors[_0x315c41(0x235)]:_0x521b37[_0x315c41(0x226)])}),this[_0x315c41(0x1fe)][_0x315c41(0x23d)](_0x1b91c7);}else _0x1b91c7[_0x315c41(0x1e7)](),this[_0x315c41(0x1fe)]=null;}[_0xaa7e14(0x255)]({$stgLanguages:_0x15c6c0,background:_0x34d264,$cbIsCustomizeLanguagesTools:_0x14555a}){const _0x223fc7=_0xaa7e14;_0x14555a[_0x223fc7(0x229)](),_0x15c6c0[_0x223fc7(0x25e)](),this[_0x223fc7(0x207)][_0x223fc7(0x240)][_0x223fc7(0x1e2)](this[_0x223fc7(0x211)]);if(_0x34d264&&_0x34d264['languageProficiencies']&&!this[_0x223fc7(0x1f8)][_0x223fc7(0x244)]){$$(_0x15c6c0[_0x223fc7(0x1e8)]())`<hr class="hr-2">
				<div class="mb-2 split-v-center">
					<div class="bold">Language Proficiencies</div>
					<label class="ve-flex-v-center"><div class="mr-1">Customize</div>${_0x14555a}</label>
				</div>`;const _0x531ad2={'languageProficiencies':MiscUtil[_0x223fc7(0x204)](this['_actor'],_0x223fc7(0x25b),'data','traits','languages')};this['_compBackgroundLanguageProficiencies']=new Charactermancer_OtherProficiencySelect({'featureSourceTracker':this[_0x223fc7(0x207)][_0x223fc7(0x240)],'existing':Charactermancer_OtherProficiencySelect[_0x223fc7(0x1f9)](_0x531ad2),'existingFvtt':_0x531ad2,'available':Charactermancer_OtherProficiencySelect[_0x223fc7(0x20b)](_0x34d264[_0x223fc7(0x262)])}),this['_compBackgroundLanguageProficiencies'][_0x223fc7(0x23d)](_0x15c6c0);}else _0x15c6c0['hideVe'](),this[_0x223fc7(0x211)]=null;}[_0xaa7e14(0x209)]({$stgTools:_0xfce42f,background:_0x1220b9,$cbIsCustomizeLanguagesTools:_0x24be4b}){const _0x2375d1=_0xaa7e14;_0x24be4b[_0x2375d1(0x229)](),_0xfce42f[_0x2375d1(0x25e)](),this['_parent'][_0x2375d1(0x240)][_0x2375d1(0x1e2)](this[_0x2375d1(0x24e)]);if(_0x1220b9&&_0x1220b9['toolProficiencies']&&!this['_state'][_0x2375d1(0x244)]){$$(_0xfce42f[_0x2375d1(0x1e8)]())`<hr class="hr-2">
				<div class="mb-2 split-v-center">
					<div class="bold">Tool Proficiencies</div>
					<label class="ve-flex-v-center"><div class="mr-1">Customize</div>${_0x24be4b}</label>
				</div>`;const _0x40beda={'toolProficiencies':MiscUtil['get'](this['_actor'],_0x2375d1(0x25b),_0x2375d1(0x25b),'traits',_0x2375d1(0x256))};this[_0x2375d1(0x24e)]=new Charactermancer_OtherProficiencySelect({'featureSourceTracker':this['_parent']['featureSourceTracker_'],'existing':Charactermancer_OtherProficiencySelect[_0x2375d1(0x1f9)](_0x40beda),'existingFvtt':_0x40beda,'available':Charactermancer_OtherProficiencySelect[_0x2375d1(0x206)](_0x1220b9['toolProficiencies'])}),this['_compBackgroundToolProficiencies'][_0x2375d1(0x23d)](_0xfce42f);}else _0xfce42f[_0x2375d1(0x1e7)](),this[_0x2375d1(0x24e)]=null;}['_background_renderBackground_stgLanguagesTools']({$stgLanguagesTools:_0x35e303,background:_0x46a80b,$cbIsCustomizeLanguagesTools:_0x11ceed,$elesPreFromGroups:_0x10ace6}){const _0x5b246f=_0xaa7e14;_0x11ceed[_0x5b246f(0x229)](),Object[_0x5b246f(0x237)](_0x10ace6)['forEach'](_0xdfb18b=>_0xdfb18b[_0x5b246f(0x229)]()),_0x35e303[_0x5b246f(0x25e)](),this[_0x5b246f(0x207)][_0x5b246f(0x240)][_0x5b246f(0x1e2)](this[_0x5b246f(0x1f7)]);if(_0x46a80b&&(_0x46a80b['skillProficiencies']||_0x46a80b[_0x5b246f(0x253)])&&this[_0x5b246f(0x1f8)][_0x5b246f(0x244)]){$$(_0x35e303['showVe']())`<hr class="hr-2">
				<div class="mb-2 split-v-center">
					<div class="bold">Language &amp; Tool Proficiencies</div>
					<label class="ve-flex-v-center"><div class="mr-1">Customize</div>${_0x11ceed}</label>
				</div>`;const _0x1aa7a3={'languageProficiencies':MiscUtil[_0x5b246f(0x204)](this['_actor'],_0x5b246f(0x25b),_0x5b246f(0x25b),_0x5b246f(0x21f),_0x5b246f(0x263)),'toolProficiencies':MiscUtil[_0x5b246f(0x204)](this[_0x5b246f(0x22d)],_0x5b246f(0x25b),_0x5b246f(0x25b),_0x5b246f(0x21f),_0x5b246f(0x256))};this['_compBackgroundLanguageToolProficiencies']=new Charactermancer_OtherProficiencySelect({'featureSourceTracker':this[_0x5b246f(0x207)]['featureSourceTracker_'],'existing':Charactermancer_OtherProficiencySelect['getExisting'](_0x1aa7a3),'existingFvtt':_0x1aa7a3,'available':MiscUtil[_0x5b246f(0x217)](UtilActors[_0x5b246f(0x20a)]),'$elesPreFromGroups':_0x10ace6}),this[_0x5b246f(0x1f7)][_0x5b246f(0x23d)](_0x35e303);}else _0x35e303['hideVe'](),this[_0x5b246f(0x1f7)]=null;}[_0xaa7e14(0x252)]({$stgRulesCustomize:_0x4809aa}){const _0x77bf79=_0xaa7e14,_0x41df69=this[_0x77bf79(0x23e)]['background'][this[_0x77bf79(0x1f8)][_0x77bf79(0x24d)]];_0x4809aa[_0x77bf79(0x25e)](),_0x41df69&&(this[_0x77bf79(0x1f8)]['background_isCustomizeSkills']||this[_0x77bf79(0x1f8)][_0x77bf79(0x244)]||this[_0x77bf79(0x1ea)]?.[_0x77bf79(0x22f)]&&this[_0x77bf79(0x1ea)][_0x77bf79(0x22f)]?.[_0x77bf79(0x1f5)]!==Charactermancer_Background_Features[_0x77bf79(0x25d)])?$$(_0x4809aa[_0x77bf79(0x1e8)]())`
				<div class="w-100">${Renderer[_0x77bf79(0x204)]()[_0x77bf79(0x23c)](!![])[_0x77bf79(0x23d)](ActorCharactermancerBackground[_0x77bf79(0x1e4)],-0x1)}</div>
				<hr class="hr-3 hr--heavy">`:_0x4809aa[_0x77bf79(0x1e7)]();}['_background_renderBackground_stgCharacteristics']({$stgCharacteristics:_0x35101c,background:_0xe9683e}){const _0x5bf47b=_0xaa7e14;_0x35101c[_0x5bf47b(0x25e)]();if(_0xe9683e){const _0x1c445d=$('<div\x20class=\x22ve-flex-v-center\x22></div>');$$(_0x35101c[_0x5bf47b(0x1e8)]())`<hr class="hr-2">
				<div class="split-v-center mb-2">
					<div class="bold">Characteristics</div>
					${_0x1c445d}
				</div>`,this['_compBackgroundCharacteristics']=new Charactermancer_Background_Characteristics({'entries':_0xe9683e[_0x5bf47b(0x222)],'$wrpHeaderControls':_0x1c445d}),this[_0x5bf47b(0x22c)]['render'](_0x35101c);}else _0x35101c['hideVe'](),this['_compBackgroundCharacteristics']=null;}['_getRenderableBackground'](){const _0x3e6a6f=_0xaa7e14,_0x385f51=this['_data']['background'][this[_0x3e6a6f(0x1f8)][_0x3e6a6f(0x24d)]],_0x14315e=MiscUtil['copy'](_0x385f51),_0x379bf0=MiscUtil[_0x3e6a6f(0x21b)]({'keyBlacklist':MiscUtil['GENERIC_WALKER_ENTRIES_KEY_BLACKLIST'],'isAllowDeleteArrays':!![],'isAllowDeleteObjects':!![]});return _0x14315e[_0x3e6a6f(0x222)]=_0x379bf0['walk'](_0x14315e[_0x3e6a6f(0x222)]||[],{'array':_0x3235fd=>{const _0x2d73e2=_0x3e6a6f;_0x3235fd=_0x3235fd[_0x2d73e2(0x246)](_0x3a4209=>_0x3a4209!=null&&!_0x3a4209?.['data']?.[_0x2d73e2(0x203)]);if(!_0x3235fd[_0x2d73e2(0x247)])return undefined;return _0x3235fd;},'object':_0x592002=>{const _0x47d0f9=_0x3e6a6f;if(_0x592002[_0x47d0f9(0x243)]===_0x47d0f9(0x251)){_0x592002[_0x47d0f9(0x265)]=(_0x592002[_0x47d0f9(0x265)]||[])[_0x47d0f9(0x246)](_0xb3b9d5=>{const _0x388b5c=_0x47d0f9,_0x1e5093=(_0xb3b9d5['name']||'')['trim']()[_0x388b5c(0x201)]();return!(_0xb3b9d5[_0x388b5c(0x243)]===_0x388b5c(0x23a)&&(/^skill/[_0x388b5c(0x1ed)](_0x1e5093)||/^language/[_0x388b5c(0x1ed)](_0x1e5093)||/^tool/[_0x388b5c(0x1ed)](_0x1e5093)));});if(!_0x592002[_0x47d0f9(0x265)][_0x47d0f9(0x247)])return undefined;}return _0x592002;}}),_0x14315e;}[_0xaa7e14(0x224)]({$dispBackground:_0x12c08e}){const _0x728ba0=_0xaa7e14,_0x522e23=this[_0x728ba0(0x23e)][_0x728ba0(0x1fa)][this[_0x728ba0(0x1f8)][_0x728ba0(0x24d)]];_0x12c08e['empty']();if(_0x522e23)_0x12c08e[_0x728ba0(0x213)](Renderer[_0x728ba0(0x232)]['$getHoverContent_stats'](UrlUtil[_0x728ba0(0x20c)],this['_getRenderableBackground']()));}[_0xaa7e14(0x24c)](){return{'background_ixBackground':null,'background_isCustomizeSkills':![],'background_isCustomizeLanguagesTools':![],'background_pulseBackground':![]};}}ActorCharactermancerBackground[_0xaa7e14(0x1e4)]={'type':_0xaa7e14(0x222),'name':_0xaa7e14(0x1e5),'page':0x7d,'source':SRC_PHB,'entries':[_0xaa7e14(0x1fb),'If\x20you\x20can\x27t\x20find\x20a\x20feature\x20that\x20matches\x20your\x20desired\x20background,\x20work\x20with\x20your\x20DM\x20to\x20create\x20one.']};function _0x27c0(){const _0x4cd9ea=['isFeature','get','vulnerable','getMappedToolProficiencies','_parent','106020tqVrSc','_background_renderBackground_stgTools','LANG_TOOL_PROFS_CUSTOMIZE','getMappedLanguageProficiencies','PG_BACKGROUNDS','Damage\x20Immunity','<hr\x20class=\x22hr-2\x22><div\x20class=\x22bold\x20mb-2\x22>Features</div>','16231995IAJwSp','$wrpTab','_compBackgroundLanguageProficiencies','9007912gKSfaR','append','_compBackgroundDamageImmunity','ActorCharactermancer.backgrounds','immune','copy','getFeatureCustomizedBackground_','keys','compBackgroundDamageVulnerability','getWalker','armorProficiencies','259jSNKgE','_compBackgroundConditionImmunity','traits','_compBackgroundDamageVulnerability','_compBackgroundDamageResistance','entries','$getCbBool','_hk_shared_doRenderBackground','armorProf','skillProficiencies','weaponProficiencies','733788UurWyX','detach','getMappedArmorProficiencies','resist','_compBackgroundCharacteristics','_actor','expertise','comp','state','compBackgroundWeaponProficiencies','hover','getBackgroundStub','1664716TrcxuS','BG_SKILL_PROFS_CUSTOMIZE','compBackgroundArmorProficiencies','values','addHookPulseFeatures','background_','item','_shared_renderEntity_stgDiDrDvCi','setFirstSection','render','_data','weaponProf','featureSourceTracker_','_modalFilterBackgrounds','_addHookBase','type','background_isCustomizeLanguagesTools','__state','filter','length','_background_renderBackground_stgLanguagesTools','ixBackground','bind','Armor\x20Proficiencies','_getDefaultState','background_ixBackground','_compBackgroundToolProficiencies','Weapon\x20Proficiencies','background_pulseBackground','list','_background_hk_showCustomizingRules','toolProficiencies','_compBackgroundWeaponProficiencies','_background_renderBackground_stgLanguages','toolProf','_background_renderBackground_stgSkills','getMappedWeaponProficiencies','_compBackgroundArmorProficiencies','10ZBNMpk','data','compBackgroundLanguageProficiencies','_MODE_DEFAULT','empty','compBackgroundToolProficiencies','actor','Condition\x20Immunity','languageProficiencies','languages','_shared_renderEntity_stgOtherProficiencies','items','getFilterSearchMeta','getExistingFvttFromActor','unregister','skills','_ENTRY_CUSTOMIZING','Customizing\x20a\x20Background','_tabBackground','hideVe','showVe','compBackgroundLanguageToolProficiencies','_metaCompBackgroundFeatures','_background_renderBackground_stgFeatures','191154WKilZr','test','_proxyAssignSimple','Damage\x20Resistance','264288NKNqtm','_compBackgroundExpertise','conditionImmune','startsWith','Damage\x20Vulnerability','mode','compBackgroundConditionImmunity','_compBackgroundLanguageToolProficiencies','_state','getExisting','background','You\x20might\x20want\x20to\x20tweak\x20some\x20of\x20the\x20features\x20of\x20a\x20background\x20so\x20it\x20better\x20fits\x20your\x20character\x20or\x20the\x20campaign\x20setting.\x20To\x20customize\x20a\x20background,\x20you\x20can\x20replace\x20one\x20feature\x20with\x20any\x20other\x20one,\x20choose\x20any\x20two\x20skills,\x20and\x20choose\x20a\x20total\x20of\x20two\x20tool\x20proficiencies\x20or\x20languages\x20from\x20the\x20sample\x20backgrounds.\x20[...]\x20Finally,\x20choose\x20two\x20personality\x20traits,\x20one\x20ideal,\x20one\x20bond,\x20and\x20one\x20flaw.','background_isCustomizeSkills','_background_renderBackground_stgCharacteristics','_compBackgroundSkillProficiencies','compBackgroundDamageImmunity','Background','toLowerCase','compBackgroundSkillProficiencies'];_0x27c0=function(){return _0x4cd9ea;};return _0x27c0();}export{ActorCharactermancerBackground};