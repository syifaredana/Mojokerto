// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/FoldableTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(B,l,y,c,w,p,n,m,D,C,E,z){return B([D,C],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"close" tabindex\x3d"0" data-dojo-attach-point\x3d"closeNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn();this.own(w(this.domNode,"keydown",l.hitch(this,function(e){c.hasClass(e.target,"close-btn")||e.keyCode!==p.ESCAPE||this.closeNode.focus()})))},startup:function(){this.viewStack=new E({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize();this.nodes.length&&this.nodes[0].focus()},resize:function(){var e=this._calculateGridParam();if(null!==e){c.setStyle(this.domNode,z.getPositionStyle(e.position));
this.nodeWidth=e.cellSize-this.margin;this.oldGridParam&&this.oldGridParam.rows===e.rows&&this.oldGridParam.cols===e.cols||(this.clearPages(),this.createPages(e));this.nodes.forEach(l.hitch(this,function(g,f){this.setItemNodePosition(g,f,e)}));this.oldGridParam=e;var k=m("div.close",this.domNode)[0];c.setStyle(k,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})}else this.oldGridParam=null,c.setStyle(this.domNode,z.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=
0},setItemNodePosition:function(e,k,g){var f=48,q=16;var r=0===k%g.cols?0:this.margin/2;var t=k%(g.rows*g.cols)<g.cols?0:this.margin/2;k={};"number"===typeof this.nodeWidth&&(k.width=this.nodeWidth+"px",k.height=this.nodeWidth+"px");"number"===typeof r&&(window.isRTL?k.marginRight=r+"px":k.marginLeft=r+"px");"number"===typeof t&&(k.marginTop=t+"px");if(r=m("img",e)[0])g.iconScaled&&(f*=this.nodeWidth/120),c.setStyle(r,{width:f+"px",height:f+"px"});if(f=m("div.node-label",e)[0])g.showLabel?(g.iconScaled&&
(q*=this.nodeWidth/120),c.setStyle(f,{"font-size":q+"px",display:"block"})):c.setStyle(f,{"font-size":q+"px",display:"none"});c.setStyle(e,k)},clearPages:function(){y.forEach(this.pages,function(e){this.viewStack.removeView(e.pageNode)},this);n.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(e){var k;var g=Math.ceil(this.items.length/(e.rows*e.cols));for(k=0;k<g;k++){var f=n.create("div",{"class":"page"});this.createPageItems(k,f,e);this.viewStack.addView(f);if(1<g){var q=
k===g-1;var r=n.create("div",{"class":"point",role:"button",tabindex:0},this.pointsNode);this.own(w(r,"click",l.hitch(this,this._onPageNodeClick,k)));this.own(w(r,"keydown",l.hitch(this,function(t,F,A){A.keyCode===p.ENTER||A.keyCode===p.SPACE?(this._onPageNodeClick(t),m(".page.view",this.viewStack.domNode)[t].children[0].focus()):F&&!A.shiftKey&&A.keyCode===p.TAB&&A.preventDefault()},k,q)))}this.pages.push({pageNode:f,pointNode:r})}0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(e){this._selectPage(e)},
_selectPage:function(e){1<this.pages.length&&(m(".point",this.domNode).removeClass("point-selected"),c.addClass(this.pages[e].pointNode,"point-selected"));this.viewStack.switchView(this.pages[e].pageNode)},createPageItems:function(e,k,g){var f=this.items.length;var q=g.rows*g.cols;g=(e+1)*q;var r=g-f;g=Math.min(g,f);for(e*=q;e<g;e++)this.createItemNode(e,k);for(e=f;e<f+r;e++)this.createEmptyItemNode(k)},createItemNode:function(e,k){e=this.items[e];var g=n.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",
title:e.label,settingId:e.id,"data-widget-name":e.name,role:"button",tabindex:0},k);k=n.create("img",{src:e.icon},g);window.isRTL&&e.mirrorIconForRTL&&c.addClass(k,"jimu-flipx");n.create("div",{"class":"node-label",title:e.label,innerHTML:z.stripHTML(e.label)},g);g.config=e;this.own(w(g,"click",l.hitch(this,function(){this.onNodeClicked(g)})));this.own(w(g,"keydown",l.hitch(this,function(f){if(f.keyCode===p.ENTER||f.keyCode===p.SPACE)this.onNodeClicked(g)})));this.nodes.push(g)},createEmptyItemNode:function(e){e=
n.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",tabindex:0},e);this.own(w(e,"focus",l.hitch(this,function(k){z.isInNavMode()&&(1===this.viewStack.domNode.children.length?k.target.parentNode.children[0].focus():m(".point-selected",this.pointsNode)[0].previousSibling.focus())})));this.nodes.push(e);return e},createCloseBtn:function(){n.create("div",{role:"button","class":"close-inner jimu-main-background"},this.closeNode);this.own(w(this.closeNode,"click",l.hitch(this,function(){this.hide()})));
this.own(w(this.closeNode,"keydown",l.hitch(this,function(e){e.keyCode===p.ENTER||e.keyCode===p.SPACE||e.keyCode===p.ESCAPE?this.hide():e.shiftKey&&e.keyCode===p.TAB&&e.preventDefault()})));return this.closeNode},hide:function(){c.setStyle(this.domNode,"display","none")},show:function(){c.setStyle(this.domNode,"display","block")},onNodeClicked:function(e){this.hide()},openNodebyId:function(e){for(var k=0,g=this.nodes.length;k<g;k++){var f=this.nodes[k];if(e&&e===c.getAttr(f,"settingId"))return this.onNodeClicked(f),
f}},_calculateGridParam:function(){var e=!1,k=!0;var g=c.getContentBox(jimuConfig.mapId);var f=Math.min(g.w,g.h)-40;if(360<=f)var q=120;else{q=Math.floor(f/3);if(10>q)return null;e=!0;80>q&&(k=!1)}f=Math.floor((g.h-40)/q);var r=Math.floor((g.w-40)/q);f=4<f?4:f;f=3>f?3:f;r=3>f?3:4<r?4:r;return{rows:f,cols:r,cellSize:q,iconScaled:e,showLabel:k,position:{top:(g.h-q*f)/2,bottom:(g.h-q*f)/2,left:(g.w-q*r)/2,right:(g.w-q*r)/2,width:q*r-this.margin*(r-1)/2,height:q*f-this.margin*(f-1)/2,zIndex:111}}}})})},
"themes/FoldableTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/FoldableTheme/widgets/HeaderController/Widget.html":'\x3cdiv data-a11y-label-by\x3d"foldable_label foldable_title foldable_subtitle"\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3ca role\x3d"link" data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n      \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3c/a\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"screen-readers-only" data-a11y-label-id\x3d"foldable_label"\x3e${label}\x3c/div\x3e\r\n      \x3ch1 class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode" data-a11y-label-id\x3d"foldable_title"\x3e\x3c/h1\x3e\r\n      \x3ch2 class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode" data-a11y-label-id\x3d"foldable_subtitle"\x3e\x3c/h2\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca role\x3d"link" href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca role\x3d"link" href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca role\x3d"link" href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/FoldableTheme/widgets/HeaderController/css/style.css":".jimu-widget-header-controller{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section{height: 100%; overflow: hidden;}.jimu-widget-header-controller .container-section{height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo{cursor: pointer; color: #fff;}.jimu-widget-header-controller .hide-logo{display: none;}.jimu-widget-header-controller .titles{height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title{text-align: center; height: 100%; margin-top: 0;}.jimu-widget-header-controller .jimu-subtitle{text-align: center; height: 100%; margin-top: 0;}.jimu-widget-header-controller .links{height: 100%; overflow: hidden; display: flex;}.jimu-widget-header-controller .dynamic-section,.jimu-widget-header-controller .signin-section{height: 100%; display: flex;}.jimu-widget-header-controller .links .jimu-link{height: 30px; margin-top: 5px;}.jimu-widget-header-controller .signin-section .jimu-link{color: #d9dde0; margin: auto 2px;}.jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-right: 1em;}.jimu-rtl .jimu-widget-header-controller .dynamic-section .jimu-link:last-child,.jimu-rtl .jimu-widget-header-controller .signin-section .jimu-link:last-child{margin-left: 1em;}.jimu-widget-header-controller .icon-node{cursor: pointer; opacity: 0.6; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img{height: 24px; width: 24px;}.jimu-widget-header-controller .icon-node:first-child{border: none;}.jimu-widget-header-controller .icon-node:hover{opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected{background-color: rgba(0, 0, 0, 0.3); opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle{position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu{box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item{overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover{background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img{width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label{cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title{}.popup-links .logo{height: 30px;}.popup-links .title{color:#fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line{width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px;}.popup-links a{color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a{color: #d9dde0;}.jimu-header-more-popup{position: absolute; border-radius: 2px; z-index: 111; background-color: #516070;}.jimu-header-more-popup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner{overflow: hidden; display: flex; height: 20px; width: 100%; align-items: center; justify-content: center;}.jimu-header-more-popup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-nav-mode .jimu-header-more-popup .point:focus{outline: none !important; border: 2px solid #24B5CC;}.jimu-header-more-popup .point-selected{background-color: #485566;}.jimu-header-more-popup .page{position: relative; overflow: hidden;}.jimu-header-more-popup .close{position: absolute; top: -3.125%; right: -3.125%; border-radius: 50%; background-color: #697a8c; cursor: pointer; z-index: 1;}.jimu-rtl .jimu-header-more-popup .close{left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-rtl .jimu-header-more-popup .close-inner{margin-left: 0; margin-right: 10%;}.jimu-header-more-popup .icon-node{background-color: #697a8c; cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected{background-color: red;}.jimu-header-more-popup img{width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label{width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block;}@media screen and (max-width:600px){.jimu-header-more-popup .node-label{font-size: 14px;}}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.esriPopup .titlePane {background-color: rgba(72, 85, 102, 0.9);}.jimu-widget-header-controller{display: flex; justify-content: space-between;}.jimu-widget-header-controller .header-section,.jimu-widget-header-controller .container-section {display: flex; flex-direction: row; align-items: center; flex-wrap: nowrap;}.jimu-widget-header-controller .container-section {flex-direction: row-reverse;}.jimu-widget-header-controller .titles,.jimu-widget-header-controller .links,.jimu-widget-header-controller .icon-node{flex-shrink: 0;}.jimu-widget-header-controller .icon-node{flex-basis: 40px;}",
"*now":function(B){B(['dojo/i18n!*preload*themes/FoldableTheme/widgets/HeaderController/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/keys dijit/Tooltip dojo/Deferred dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dojo/NodeList-manipulate".split(" "),function(B,l,y,c,w,p,n,m,D,C,E,z,e,k,g,f,q,r,t,F,A){return B([k,g],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postMixInProperties:function(){this.inherited(arguments);this.isRenderIdForAttrs=!0},postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this._handleTitleColorAndLogoLink(this.appConfig);
this.position&&this.position.height&&(this.height=this.position.height);c.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,c.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",c.addClass(this.logoNode,"hide-logo"));this.switchableElements.title.innerHTML=t.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");this.switchableElements.subtitle.innerHTML=t.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:
"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(n(this.domNode,E.enter,l.hitch(this,function(){var a="",b=r.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");r.isArcGIScom(b)&&(b="ArcGIS.com");b&&(a=this.nls.signInTo+" "+b);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize();setTimeout(l.hitch(this,this.resize),100)},onAction:function(a,b){"highLight"===a&&b&&(b=p('div[settingid\x3d"'+b.widgetId+'"]',this.domNode)[0],
this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(a){this.inherited(arguments);c.setStyle(this.signinLinkNode,"display","none");c.setStyle(this.userNameLinkNode,"display","");c.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=a.userId;c.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(c.setStyle(this.popupSigninNode,"display","none"),c.setStyle(this.popupUserNameNode,"display",""),c.setStyle(this.popupSignoutNode,
"display",""),p("a",this.popupUserNameNode).html(a.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);q.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(l.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),l.hitch(this,function(a){console.error(a)}))},_onSignOut:function(a){c.setStyle(this.signinLinkNode,"display","");c.setAttr(this.signinLinkNode,"innerHTML",a);c.setStyle(this.userNameLinkNode,
"display","none");c.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(c.setStyle(this.popupSigninNode,"display",""),c.setAttr(this.popupSigninNode,"innerHTML",a),c.setStyle(this.popupUserNameNode,"display","none"),c.setStyle(this.popupSignoutNode,"display","none"),p("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){this._resize()},_resize:function(){var a=c.getContentBox(this.domNode);this._showSwitchableElements(["title",
"links","subtitle"]);this._createIconNodes(a);this.morePane&&this.morePane.resize();this.popupLinkNode&&c.setStyle(jimuConfig.layoutId,{left:c.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(c.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();c.destroy(this.popupLinkNode);
this.inherited(arguments)},onAppConfigChanged:function(a,b,d){switch(b){case "attributeChange":this._onAttributeChange(a,d);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var b=this.getConfigById(a[0]);b&&(this.openedId&&this._switchNodeToClose(this.openedId),this.openedId=a[0],b.widgets&&"openAll"===b.openType?this._switchNodeToOpen(b.id):b.widgets||(this._getIconNodeById(b.id)?
this._switchNodeToOpen(b.id):this._showIconContent(b)))}},_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=e.getMarginBox(a);this.hlDiv=z.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(z.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(a,b){"title"in b&&b.title!==this.appConfig.title&&(this.titleNode.innerHTML=
t.sanitizeHTML(b.title));"subtitle"in b&&b.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=t.sanitizeHTML(b.subtitle));"logo"in b&&b.logo!==this.appConfig.logo&&(b.logo?(c.setAttr(this.logoNode,"src",b.logo),c.removeClass(this.logoNode,"hide-logo")):(c.removeAttr(this.logoNode,"src"),c.addClass(this.logoNode,"hide-logo")));"links"in b&&this._createDynamicLinks(b.links);this._handleTitleColorAndLogoLink(a)},_handleTitleColorAndLogoLink:function(a){a.titleColor?c.setStyle(this.titleNode,
"color",a.titleColor):c.setStyle(this.titleNode,"color","");t.themesHeaderLogoA11y(a,this.tabIndex,{link:this.logoLinkNode,logo:this.logoNode,icon:this.logoNode})},_setElementsSize:function(){c.setStyle(this.logoNode,{height:"30px"});c.setStyle(this.titleNode,{lineHeight:this.height+"px"});c.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});p(".jimu-link",this.domNode).style({lineHeight:this.height-10+"px"})},_processGroupSetting:function(){y.forEach(this.appConfig.widgetPool.groups,function(a){var b;
a:{if(this.config.groupSetting)for(b=0;b<this.config.groupSetting.length;b++)if(this.config.groupSetting[b].label===a.label){b=this.config.groupSetting[b].type;break a}b="openAll"}a.openType=b},this)},_createDynamicLinks:function(a){c.empty(this.dynamicLinksNode);y.forEach(a,function(b){c.create("a",{href:t.dynamicLinkXssFilter(b.url),target:"_blank",rel:"noopener noreferrer",innerHTML:t.sanitizeHTML(b.label)+'\x3cdiv class\x3d"screen-readers-only-no-position"\x3e'+window.jimuNls.common.opensInNewWindow+
"\x3c/div\x3e","class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"},tabindex:this.tabIndex},this.dynamicLinksNode)},this)},_showSwitchableElements:function(a){var b=this.switchableElements,d;for(d in b)if(b.hasOwnProperty(d))if(-1<a.indexOf(d)){var h=c.hasClass(b[d],"links")?"flex":"block";c.setStyle(b[d],"display",h);b[d].visible=!0}else c.setStyle(b[d],"display","none"),b[d].visible=!1;this.logoClickHandle&&this.logoClickHandle.remove();this.logoKeydownHandle&&
this.logoKeydownHandle.remove();0>a.indexOf("links")?(c.setAttr(this.logoLinkNode,"tabIndex",this.tabIndex),this.logoClickHandle=n(this.logoNode,"click",l.hitch(this,this._onLogoClick)),this.logoKeydownHandle=n(this.logoLinkNode,"keydown",l.hitch(this,this._onLogoKeydown))):this.popupLinksVisible&&this._hidePopupLink()},_switchSignin:function(){var a=f.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&c.destroy(this.popupLinkNode);
this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_onLogoKeydown:function(a){a.keyCode===m.ENTER&&this._onLogoClick()},_hidePopupLink:function(){c.setStyle(this.popupLinkNode,"display","none");window.isRTL?c.setStyle(jimuConfig.layoutId,{right:0}):c.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){c.setStyle(this.popupLinkNode,"display","");window.isRTL?c.setStyle(jimuConfig.layoutId,{right:c.getContentBox(this.popupLinkNode).w+
"px"}):c.setStyle(jimuConfig.layoutId,{left:c.getContentBox(this.popupLinkNode).w+"px"});t.isInNavMode()&&(this.appConfig.links?p(".jimu-link a",this.popupLinkNode)[0].focus():p(".jimu-popup-link-close-btn",this.popupLinkNode)[0].focus());this.popupLinksVisible=!0},_createPopupLinkNode:function(){c.getContentBox(jimuConfig.mainPageId);var a=c.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?c.setStyle(a,
{right:0,left:"50px"}):c.setStyle(a,{left:0,right:"50px"});var b=c.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},a);var d=c.create("div",{"class":"jimu-float-leading jimu-leading-margin1 jimu-popup-link-close-btn",role:"button","aria-label":window.jimuNls.common.close,tabindex:"0",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},b);this.own(n(d,"click",l.hitch(this,function(){this._hidePopupLink()})));this.own(n(d,"keydown",l.hitch(this,function(u){t.isInNavMode()&&
(u.keyCode===m.ENTER||u.keyCode===m.SPACE||u.keyCode===m.ESCAPE?(this._hidePopupLink(),this.logoLinkNode.focus()):u.keyCode===m.TAB&&!u.shiftKey&&0<this.appConfig.links.length||u.preventDefault())})));this.own(n(a,"keydown",l.hitch(this,function(u){t.isInNavMode()&&u.keyCode===m.ESCAPE&&!c.hasClass(a,"jimu-popup-link-close-btn")&&d.focus()})));var h=c.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:t.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+
"px"}},b),v="auto";try{v=c.getMarginBox(b).w-c.getMarginBox(d).w-c.getMarginExtents(h).w+"px"}catch(u){console.error(u),v="auto"}c.setStyle(h,"width",v);var x=[];y.forEach(this.appConfig.links,function(u){u=this._createLinkNode(a,u,!1);x.push(u)},this);x.length&&this.own(n(x[x.length-1],"keydown",l.hitch(this,function(u){t.isInNavMode()&&u.keyCode===m.TAB&&!u.shiftKey&&(u.preventDefault(),p("a",x[0])[0].focus())})));return a},_createLinkNode:function(a,b,d){a=c.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',
a);c.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',a);d=c.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',a);c.create("a",{href:b.url,tabindex:"0","class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:t.sanitizeHTML(b.label),title:b.label,style:{lineHeight:"66px"}},d);return a},_onSigninClick:function(){f.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new F({message:this.nls.cantSignOutTip}):
f.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return c.getMarginBox(this.headerNode).w},_getContainerWidth:function(a){var b=this._getHeaderSectionWidth();return a.w-b-this._getEmptyWidth(a)},_calcContainerAndEmptyWidth:function(a){var b=this._getContainerWidth(a),d=this._getEmptyWidth(a);b<2*this.iconWidth&&(this.switchableElements.subtitle.visible?(this._showSwitchableElements(["title","links"]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(this._showSwitchableElements(["title"]),
b=this._getContainerWidth(a),b<2*this.iconWidth&&(this._showSwitchableElements([]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(d-=2*this.iconWidth-b,b=2*this.iconWidth,this._getContainerWidth(a))))):(this._showSwitchableElements([]),b=this._getContainerWidth(a),b<2*this.iconWidth&&(d-=2*this.iconWidth-b,b=2*this.iconWidth)));return{containerWidth:b,emptyWidth:d}},_getEmptyWidth:function(a){return.1*a.w},_createIconNodes:function(a){var b=this.tabIndex+20;p(".icon-node",this.containerNode).remove();
var d=this.getAllConfigs();this.iconWidth=a.h;var h=this._calcContainerAndEmptyWidth(a);a=[];this.maxIconCount=Math.floor(h.containerWidth/this.iconWidth);this.maxIconCount>=d.length?(this.headerIconCount=d.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);if(this.createMoreIcon){var v=this._createIconNode({label:this.nls.more,name:"__more"});a.push(v)}var x;for(h=this.headerIconCount-1;0<=h;h--){var u=d[h];v=this._createIconNode(u);u.openAtStart&&(x=
v);a.push(v)}a.reverse().forEach(function(G){b+=200;c.setAttr(G,"tabindex",b);G.config.inPanel||(G.config.tabIndex=b)});x&&!this.openAtStartWidget&&(this.openAtStartWidget=x.config.id,this._onIconClick(x,!0));this.openedId&&this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel&&(d=this._getIconNodeById(this.openedId),x=this.widgetManager.getWidgetById(this.openedId),d&&x?this._setOffPanelWidgetPosition(d,x):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},
_createIconNode:function(a){var b="__more"===a.name?this.folderUrl+"images/more_icon.png":a.icon;var d=c.create("div",{"class":"icon-node jimu-float-trailing"+(this.openedId===a.id?" jimu-state-selected":""),title:a.label,role:"button","aria-pressed":this.openedId===a.id?"true":"false",settingId:a.id,style:{width:this.height+"px",height:this.height+"px"},"data-widget-name":a.name},this.containerNode);b=c.create("img",{src:b,alt:a.label,style:{marginTop:(this.height-24)/2+"px"}},d);window.isRTL&&a.mirrorIconForRTL&&
c.addClass(b,"jimu-flipx");"__more"===a.name?(this._morePaneNode=d,n(d,"click",l.hitch(this,this._showMorePane,a)),n(d,"keydown",l.hitch(this,function(h){h.keyCode!==m.ENTER&&h.keyCode!==m.SPACE||this._showMorePane()}))):(n(d,"click",l.hitch(this,function(){this._onIconClick(d)})),n(d,"keydown",l.hitch(this,function(h){h.keyCode!==m.ENTER&&h.keyCode!==m.SPACE||this._onIconClick(d)})),t.addTooltipByDomNode(D,d,a.label));d.config=a;d.config.widgets&&1<d.config.widgets.length&&"dropDown"===d.config.openType&&
this._createDropTriangle(d);return d},_createDropTriangle:function(a){var b=c.getMarginBox(a);c.create("div",{"class":"drop-triangle",style:{left:b.l+b.w/2-4+"px"}},a)},_onIconClick:function(a,b){a.config.widgets&&1!==a.config.widgets.length&&"openAll"!==a.config.openType?this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a,b):this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(l.hitch(this,function(){this._closeDropMenu();
this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id)},_closeDropMenu:function(){this.dropMenuNode&&(c.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(a,b){this.dropMenuNode=c.create("div",{"class":"jimu-drop-menu jimu-main-background",title:a.config.label,style:{position:"absolute",zIndex:"101"}});c.place(this.dropMenuNode,this.containerNode);y.forEach(a.config.widgets,function(d){this._createDropMenuItem(d,a)},this);this._setDropMenuPosition(a);this.morePane&&
this.morePane.hide();this._initDropMenuEvent(a,b)},_initDropMenuEvent:function(a,b){var d=p(".menu-item",this.dropMenuNode);this.own(n(d,"keydown",l.hitch(this,function(h){if(h.keyCode===m.TAB||h.keyCode===m.ESCAPE)h.stopPropagation(),h.preventDefault(),this._closeDropMenu(),a.focus();else{var v;h.keyCode===m.DOWN_ARROW?v=h.target.nextSibling?h.target.nextSibling:h.target:h.keyCode===m.UP_ARROW?v=h.target.previousSibling?h.target.previousSibling:h.target:h.keyCode===m.HOME?v=d[0]:h.keyCode===m.END&&
(v=d[d.length-1]);v&&v.focus()}})));b||d[0].focus()},_createDropMenuItem:function(a,b){var d=c.create("div",{"class":"menu-item",tabindex:"-1",title:a.label,style:{height:this.height+"px"}},this.dropMenuNode);c.create("img",{"class":"jimu-float-leading",src:a.icon},d);c.create("div",{"class":"label jimu-float-leading",innerHTML:t.sanitizeHTML(a.label)},d);this.own(n(d,"click",l.hitch(this,function(){this._dropMenuItemClick(d)})));this.own(n(d,"keydown",l.hitch(this,function(h){h.keyCode!==m.ENTER&&
h.keyCode!==m.SPACE||this._dropMenuItemClick(d)})));d.config=a;d.config.groupNode=b;return d},_dropMenuItemClick:function(a){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(l.hitch(this,function(){this._showIconContent(a.config)})):this._showIconContent(a.config)},_setDropMenuPosition:function(a){var b={};b=c.getMarginBox(this.dropMenuNode);b=this._getDropdownPosition(a,b);b.zIndex=101;c.setStyle(this.dropMenuNode,t.getPositionStyle(b))},_getDropdownPosition:function(a,
b){var d={};a=c.getMarginBox(a);var h=c.getMarginBox(this.domNode);d.top=this.height+1;window.isRTL?d.right=0>a.l+a.w-b.w?0:a.l+a.w-b.w:a.l+b.w>h.w?d.right=0:d.left=a.l;return d},_switchNodeToOpen:function(a){a=this._getIconNodeById(a);this._showIconContent(a.config)},_switchNodeToClose:function(a){this._removeSelectedStateForIcons();var b=this.appConfig.getConfigElementById(a);if(b)return!1===b.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new C,a.resolve(),a):this.panelManager.closePanel(a+
"_panel");a=new C;a.resolve();return a},_getIconNodeById:function(a,b){a=p('.icon-node[settingId\x3d"'+a+'"]',b?this.morePane.domNode:this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){a=p('.icon-node[settingId\x3d"'+a+'"]',this.domNode);this._removeSelectedStateForIcons(a);this.openedId=""},_removeSelectedStateForIcons:function(a){a=a||p(".icon-node",this.domNode);y.forEach(a,function(b){c.removeClass(b,"jimu-state-selected");c.setAttr(b,"aria-pressed","false")},this)},_addSelectedStateForIcon:function(a){c.addClass(a,
"jimu-state-selected");c.setAttr(a,"aria-pressed","true")},_showIconContent:function(a){var b;!1===a.inPanel?this.widgetManager.loadWidget(a).then(l.hitch(this,function(d){this.openedId=a.id;(b=this._getIconNodeById(a.id))?(this._removeSelectedStateForIcons(),this._addSelectedStateForIcon(b),c.setStyle(d.domNode,"zIndex",101),this._setOffPanelWidgetPosition(b,d),this.widgetManager.openWidget(d),this.own(w.after(d,"onClose",l.hitch(this,function(){this._unSelectIcon(a.id);this._switchNodeToClose(b.config.id);
b.focus()})))):(this.openedId="",this._showMorePane(),b=this._getIconNodeById(a.id,!0),b.click())})):this.panelManager.showPanel(a).then(l.hitch(this,function(d){if(!a.groupNode){var h=this._getIconNodeById(a.id);this._removeSelectedStateForIcons();this._addSelectedStateForIcon(h)}this.openedId=a.id;this.own(w.after(d,"onClose",l.hitch(this,function(){a.groupNode?a.groupNode.focus():(this._unSelectIcon(a.id),h.focus())})));this.own(n(d.closeNode,"keydown",l.hitch(this,function(v){v.keyCode===m.ESCAPE&&
(a.groupNode?a.groupNode:h).focus()})))}))},_setOffPanelWidgetPosition:function(a,b){a=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(b));b.setPosition(a,this.containerNode)},_showMorePane:function(){var a,b=[],d=this.getAllConfigs();for(a=this.headerIconCount;a<d.length;a++){var h=d[a];b.push(h)}this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&c.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new A({openedId:this.openedId,items:b});this._createCoverNode();
c.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();w.after(this.morePane,"onNodeClicked",l.hitch(this,function(v){this._moveConfigToHeader(v.config);this._createIconNodes(c.getContentBox(this.domNode));this._onIconClick(this._getIconNodeById(v.config.id))}),!0);w.after(this.morePane,"hide",l.hitch(this,function(){c.destroy(this.moreIconPaneCoverNode);this._morePaneNode.focus()}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),d=a.index;a.index=b[this.headerIconCount-
1].index;b[this.headerIconCount-1].index=d},_createCoverNode:function(){this.moreIconPaneCoverNode=c.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});