const _0xabca85=_0x26c7;(function(_0xe92248,_0x35ca75){const _0x1db4ce=_0x26c7,_0x2d24f2=_0xe92248();while(!![]){try{const _0x20528b=parseInt(_0x1db4ce(0x130))/0x1+parseInt(_0x1db4ce(0x144))/0x2+parseInt(_0x1db4ce(0x132))/0x3*(-parseInt(_0x1db4ce(0x143))/0x4)+-parseInt(_0x1db4ce(0x13a))/0x5+-parseInt(_0x1db4ce(0x148))/0x6*(-parseInt(_0x1db4ce(0x142))/0x7)+-parseInt(_0x1db4ce(0x131))/0x8*(-parseInt(_0x1db4ce(0x136))/0x9)+-parseInt(_0x1db4ce(0x146))/0xa;if(_0x20528b===_0x35ca75)break;else _0x2d24f2['push'](_0x2d24f2['shift']());}catch(_0x3db5ad){_0x2d24f2['push'](_0x2d24f2['shift']());}}}(_0x3302,0xa02a6));import{UtilLibWrapper}from'./PatcherLibWrapper.js';import{Config}from'./Config.js';import{LGT}from'./Util.js';import{UtilNotifications}from'./UtilNotifications.js';function _0x3302(){const _0xddfaf0=['8770335UHDxIb','6796acLPwF','231554YyllWc','string','2056710tTiedY','_MARKER','6LRuSsP','__PLUT_REPLACE_MARKER__','_CACHE_STRING_START','173178bWXqVX','520944yqfpVA','1011oHhgOg','_CACHE_STRING_END','i18n','_lw_ui_notifications_notify','153BoPzIl','split','get','format','6072970lWXUHD','warn','LIBWRAPPER_MODE_MIXED','endsWith','startsWith','init','isSuppressMissingRollDataNotifications','warning'];_0x3302=function(){return _0xddfaf0;};return _0x3302();}class Patcher_Notifications{static [_0xabca85(0x147)]=_0xabca85(0x12e);static ['_CACHE_STRING_START']=null;static [_0xabca85(0x133)]=null;static[_0xabca85(0x13f)](){const _0x2a521d=_0xabca85;UtilLibWrapper['addPatch']('ui.notifications.notify',this[_0x2a521d(0x135)],UtilLibWrapper[_0x2a521d(0x13c)]);const _0x1eaa1b=game[_0x2a521d(0x134)][_0x2a521d(0x139)]('DICE.WarnMissingData',{'match':Patcher_Notifications[_0x2a521d(0x147)]}),[_0x3d155f,_0x1cd355]=_0x1eaa1b[_0x2a521d(0x137)](Patcher_Notifications[_0x2a521d(0x147)]);Patcher_Notifications[_0x2a521d(0x12f)]=_0x3d155f,Patcher_Notifications[_0x2a521d(0x133)]=_0x1cd355;}static[_0xabca85(0x135)](_0x42219c,..._0x5c54b8){const _0x3331c0=_0xabca85;if(!Config[_0x3331c0(0x138)]('ui',_0x3331c0(0x140)))return _0x42219c(..._0x5c54b8);if(!Patcher_Notifications['_isSuppressed'](..._0x5c54b8))return _0x42219c(..._0x5c54b8);const [_0x352b64]=_0x5c54b8;if(!UtilNotifications['isAddSeen']({'message':_0x352b64}))console[_0x3331c0(0x13b)](...LGT,_0x352b64);}static['_isSuppressed'](_0x14123d,_0x53245e){const _0x31a217=_0xabca85;if(_0x53245e!==_0x31a217(0x141))return![];if(typeof _0x14123d!==_0x31a217(0x145))return![];if(!_0x14123d[_0x31a217(0x13e)](Patcher_Notifications[_0x31a217(0x12f)])||!_0x14123d[_0x31a217(0x13d)](Patcher_Notifications['_CACHE_STRING_END']))return![];return!![];}}function _0x26c7(_0x11515d,_0xb9262){const _0x3302c4=_0x3302();return _0x26c7=function(_0x26c79b,_0xfc6b99){_0x26c79b=_0x26c79b-0x12e;let _0xd10495=_0x3302c4[_0x26c79b];return _0xd10495;},_0x26c7(_0x11515d,_0xb9262);}export{Patcher_Notifications};