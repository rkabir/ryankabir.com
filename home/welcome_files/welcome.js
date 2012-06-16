// Created by iWeb 2.0.1 local-build-20070913

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,270),url:'welcome_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'welcome_files/stroke_1.png'},{rect:new IWRect(5,-5,389,10),url:'welcome_files/stroke_2.png'},{rect:new IWRect(394,-5,10,10),url:'welcome_files/stroke_3.png'},{rect:new IWRect(394,5,10,270),url:'welcome_files/stroke_4.png'},{rect:new IWRect(394,275,10,10),url:'welcome_files/stroke_5.png'},{rect:new IWRect(5,275,389,10),url:'welcome_files/stroke_6.png'},{rect:new IWRect(-5,275,10,10),url:'welcome_files/stroke_7.png'}],new IWSize(399,280)),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('welcome_files/welcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
