/*

ALMIGHTY-MD

*/

const _0x53f967=_0x1756;(function(_0x294c56,_0x2c78ad){const _0x1b116a=_0x1756,_0x1fdac5=_0x294c56();while(!![]){try{const _0x4ee1dc=parseInt(_0x1b116a(0x86))/0x1*(-parseInt(_0x1b116a(0x8e))/0x2)+parseInt(_0x1b116a(0x92))/0x3*(parseInt(_0x1b116a(0x7b))/0x4)+-parseInt(_0x1b116a(0x8d))/0x5+parseInt(_0x1b116a(0x94))/0x6+parseInt(_0x1b116a(0x7e))/0x7+-parseInt(_0x1b116a(0x82))/0x8*(-parseInt(_0x1b116a(0x89))/0x9)+parseInt(_0x1b116a(0x8b))/0xa*(-parseInt(_0x1b116a(0x90))/0xb);if(_0x4ee1dc===_0x2c78ad)break;else _0x1fdac5['push'](_0x1fdac5['shift']());}catch(_0x3b8aa8){_0x1fdac5['push'](_0x1fdac5['shift']());}}}(_0x1d8d,0xa3bd7));function _0x1756(_0x187df2,_0x414916){const _0x1d8df0=_0x1d8d();return _0x1756=function(_0x175675,_0x2c0848){_0x175675=_0x175675-0x7a;let _0x3d03ee=_0x1d8df0[_0x175675];return _0x3d03ee;},_0x1756(_0x187df2,_0x414916);}function _0x1d8d(){const _0xcfb5dd=['currentTurn','6968268IotEPA','winner','4jYzktN','playerO','check','6654032JBXmys','map','toString','padStart','8eWnMJI','render','playerX','exports','9xjrLYz','turn','invalid\x20position','2107584cLhaDJ','board','10fgySXe','toBinary','6455810CcSnmJ','61756NfxWDY','_currentTurn','13990735pQRdgL','turns','3496494mzkhiE'];_0x1d8d=function(){return _0xcfb5dd;};return _0x1d8d();}class TicTacToe{constructor(_0x154950='x',_0x71abb7='o'){const _0x53a337=_0x1756;this[_0x53a337(0x84)]=_0x154950,this[_0x53a337(0x7c)]=_0x71abb7,this['_currentTurn']=![],this['_x']=0x0,this['_o']=0x0,this[_0x53a337(0x91)]=0x0;}get[_0x53f967(0x8a)](){return this['_x']|this['_o'];}get[_0x53f967(0x93)](){const _0x543624=_0x53f967;return this[_0x543624(0x8f)]?this[_0x543624(0x7c)]:this['playerX'];}get['enemyTurn'](){const _0x235e4d=_0x53f967;return this[_0x235e4d(0x8f)]?this[_0x235e4d(0x84)]:this[_0x235e4d(0x7c)];}static['check'](_0x2975cf){for(let _0xc14965 of[0x7,0x38,0x49,0x54,0x92,0x111,0x124,0x1c0])if((_0x2975cf&_0xc14965)===_0xc14965)return!0x0;return!0x1;}static[_0x53f967(0x8c)](_0xa7e773=0x0,_0x36a286=0x0){const _0x4e9026=_0x53f967;if(_0xa7e773<0x0||_0xa7e773>0x2||_0x36a286<0x0||_0x36a286>0x2)throw new Error(_0x4e9026(0x88));return 0x1<<_0xa7e773+0x3*_0x36a286;}[_0x53f967(0x87)](_0x30b5f9=0x0,_0x3d687e=0x0,_0x3437ac){const _0x44f92a=_0x53f967;if(this[_0x44f92a(0x8a)]===0x1ff)return-0x3;let _0x40e54d=0x0;if(_0x3437ac==null){if(_0x3d687e<0x0||_0x3d687e>0x8)return-0x1;_0x40e54d=0x1<<_0x3d687e;}else{if(_0x3d687e<0x0||_0x3d687e>0x2||_0x3437ac<0x0||_0x3437ac>0x2)return-0x1;_0x40e54d=TicTacToe[_0x44f92a(0x8c)](_0x3d687e,_0x3437ac);}if(this[_0x44f92a(0x8f)]^_0x30b5f9)return-0x2;if(this[_0x44f92a(0x8a)]&_0x40e54d)return 0x0;return this[this[_0x44f92a(0x8f)]?'_o':'_x']|=_0x40e54d,this[_0x44f92a(0x8f)]=!this['_currentTurn'],this[_0x44f92a(0x91)]++,0x1;}static['render'](_0x5dc2a5=0x0,_0x3a49ba=0x0){const _0x3b5ff2=_0x53f967;let _0x266d7f=parseInt(_0x5dc2a5[_0x3b5ff2(0x80)](0x2),0x4),_0x459fab=parseInt(_0x3a49ba[_0x3b5ff2(0x80)](0x2),0x4)*0x2;return[...(_0x266d7f+_0x459fab)[_0x3b5ff2(0x80)](0x4)[_0x3b5ff2(0x81)](0x9,'0')]['reverse']()[_0x3b5ff2(0x7f)]((_0xfb8d0b,_0x65a00c)=>_0xfb8d0b==0x1?'X':_0xfb8d0b==0x2?'O':++_0x65a00c);}[_0x53f967(0x83)](){const _0x5f2744=_0x53f967;return TicTacToe[_0x5f2744(0x83)](this['_x'],this['_o']);}get[_0x53f967(0x7a)](){const _0x4daa62=_0x53f967;let _0x88960=TicTacToe[_0x4daa62(0x7d)](this['_x']),_0x3eaa10=TicTacToe[_0x4daa62(0x7d)](this['_o']);return _0x88960?this['playerX']:_0x3eaa10?this[_0x4daa62(0x7c)]:![];}}new TicTacToe()[_0x53f967(0x87)],module[_0x53f967(0x85)]=TicTacToe;

/*

ALMIGHTY-MD

*/
