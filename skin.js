// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: woa-def.ggsk
// Generated dom jan 1 19:54:59 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.onclick=function () {
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.39%;';
		hs+='position : absolute;';
		hs+='top : -0.29%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Fachada') {
			this.__div=document.createElement('div');
			this.__div.ggId="Fachada";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 252px;';
			hs+='position : absolute;';
			hs+='top : 258px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_2=document.createElement('div');
			this._image_2__img=document.createElement('img');
			this._image_2__img.className='ggskin ggskin_image';
			this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
			this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_2__img.className='ggskin ggskin_image';
			this._image_2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_2__img);
			this._image_2.appendChild(this._image_2__img);
			this._image_2.ggId="Image 2";
			this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_2.ggVisible=true;
			this._image_2.className='ggskin ggskin_image ';
			this._image_2.ggType='image';
			hs ='';
			hs+='height : 122px;';
			hs+='left : -52px;';
			hs+='position : absolute;';
			hs+='top : -52px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_2.setAttribute('style',hs);
			this._image_2.style[domTransform + 'Origin']='50% 50%';
			me._image_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_2);
		} else
		if (hotspot.skinid=='1-hall') {
			this.__div=document.createElement('div');
			this.__div.ggId="1-hall";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 254px;';
			hs+='position : absolute;';
			hs+='top : 196px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image ';
			this._image_1.ggType='image';
			hs ='';
			hs+='height : 123px;';
			hs+='left : -46px;';
			hs+='position : absolute;';
			hs+='top : -49px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.onclick=function () {
				me.player.openNext("{node2}","");
			}
			this._image_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_1);
		} else
		if (hotspot.skinid=='2-gourmet') {
			this.__div=document.createElement('div');
			this.__div.ggId="2-gourmet";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 122px;';
			hs+='position : absolute;';
			hs+='top : 76px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_3=document.createElement('div');
			this._image_3__img=document.createElement('img');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
			this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_3__img);
			this._image_3.appendChild(this._image_3__img);
			this._image_3.ggId="Image 3";
			this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_3.ggVisible=true;
			this._image_3.className='ggskin ggskin_image ';
			this._image_3.ggType='image';
			hs ='';
			hs+='height : 136px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -39px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_3.setAttribute('style',hs);
			this._image_3.style[domTransform + 'Origin']='50% 50%';
			me._image_3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_3.onclick=function () {
				me.player.openNext("{node25}","");
			}
			this._image_3.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_3);
		} else
		if (hotspot.skinid=='3-playground') {
			this.__div=document.createElement('div');
			this.__div.ggId="3-playground";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 226px;';
			hs+='position : absolute;';
			hs+='top : 113px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_4=document.createElement('div');
			this._image_4__img=document.createElement('img');
			this._image_4__img.className='ggskin ggskin_image';
			this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
			this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_4__img.className='ggskin ggskin_image';
			this._image_4__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_4__img);
			this._image_4.appendChild(this._image_4__img);
			this._image_4.ggId="Image 4";
			this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_4.ggVisible=true;
			this._image_4.className='ggskin ggskin_image ';
			this._image_4.ggType='image';
			hs ='';
			hs+='height : 124px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -50px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_4.setAttribute('style',hs);
			this._image_4.style[domTransform + 'Origin']='50% 50%';
			me._image_4.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_4.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_4.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_4);
		} else
		if (hotspot.skinid=='4-jogos') {
			this.__div=document.createElement('div');
			this.__div.ggId="4-jogos";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 131px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_5=document.createElement('div');
			this._image_5__img=document.createElement('img');
			this._image_5__img.className='ggskin ggskin_image';
			this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
			this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_5__img.className='ggskin ggskin_image';
			this._image_5__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_5__img);
			this._image_5.appendChild(this._image_5__img);
			this._image_5.ggId="Image 5";
			this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_5.ggVisible=true;
			this._image_5.className='ggskin ggskin_image ';
			this._image_5.ggType='image';
			hs ='';
			hs+='height : 141px;';
			hs+='left : -57px;';
			hs+='position : absolute;';
			hs+='top : -48px;';
			hs+='visibility : inherit;';
			hs+='width : 118px;';
			this._image_5.setAttribute('style',hs);
			this._image_5.style[domTransform + 'Origin']='50% 50%';
			me._image_5.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_5.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_5.onclick=function () {
				me.player.openNext("{node3}","");
			}
			this._image_5.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_5);
		} else
		if (hotspot.skinid=='5-brinquedoteca') {
			this.__div=document.createElement('div');
			this.__div.ggId="5-brinquedoteca";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 246px;';
			hs+='position : absolute;';
			hs+='top : 133px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_6=document.createElement('div');
			this._image_6__img=document.createElement('img');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
			this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_6__img.className='ggskin ggskin_image';
			this._image_6__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_6__img);
			this._image_6.appendChild(this._image_6__img);
			this._image_6.ggId="Image 6";
			this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_6.ggVisible=true;
			this._image_6.className='ggskin ggskin_image ';
			this._image_6.ggType='image';
			hs ='';
			hs+='height : 125px;';
			hs+='left : -52px;';
			hs+='position : absolute;';
			hs+='top : -51px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_6.setAttribute('style',hs);
			this._image_6.style[domTransform + 'Origin']='50% 50%';
			me._image_6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_6.onclick=function () {
				me.player.openNext("{node7}","");
			}
			this._image_6.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_6);
		} else
		if (hotspot.skinid=='6-teen') {
			this.__div=document.createElement('div');
			this.__div.ggId="6-teen";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 259px;';
			hs+='position : absolute;';
			hs+='top : 182px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_7=document.createElement('div');
			this._image_7__img=document.createElement('img');
			this._image_7__img.className='ggskin ggskin_image';
			this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
			this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_7__img.className='ggskin ggskin_image';
			this._image_7__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_7__img);
			this._image_7.appendChild(this._image_7__img);
			this._image_7.ggId="Image 7";
			this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_7.ggVisible=true;
			this._image_7.className='ggskin ggskin_image ';
			this._image_7.ggType='image';
			hs ='';
			hs+='height : 126px;';
			hs+='left : -48px;';
			hs+='position : absolute;';
			hs+='top : -44px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_7.setAttribute('style',hs);
			this._image_7.style[domTransform + 'Origin']='50% 50%';
			me._image_7.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_7.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_7.onclick=function () {
				me.player.openNext("{node5}","");
			}
			this._image_7.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_7);
		} else
		if (hotspot.skinid=='7-zen') {
			this.__div=document.createElement('div');
			this.__div.ggId="7-zen";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 190px;';
			hs+='position : absolute;';
			hs+='top : 112px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_8=document.createElement('div');
			this._image_8__img=document.createElement('img');
			this._image_8__img.className='ggskin ggskin_image';
			this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
			this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_8__img.className='ggskin ggskin_image';
			this._image_8__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_8__img);
			this._image_8.appendChild(this._image_8__img);
			this._image_8.ggId="Image 8";
			this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_8.ggVisible=true;
			this._image_8.className='ggskin ggskin_image ';
			this._image_8.ggType='image';
			hs ='';
			hs+='height : 126px;';
			hs+='left : -44px;';
			hs+='position : absolute;';
			hs+='top : -44px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_8.setAttribute('style',hs);
			this._image_8.style[domTransform + 'Origin']='50% 50%';
			me._image_8.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_8.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_8.onclick=function () {
				me.player.openNext("{node19}","");
			}
			this._image_8.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_8);
		} else
		if (hotspot.skinid=='8-quadra') {
			this.__div=document.createElement('div');
			this.__div.ggId="8-quadra";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 310px;';
			hs+='position : absolute;';
			hs+='top : 155px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_9=document.createElement('div');
			this._image_9__img=document.createElement('img');
			this._image_9__img.className='ggskin ggskin_image';
			this._image_9__img.setAttribute('src',basePath + 'images/image_9.png');
			this._image_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_9__img.className='ggskin ggskin_image';
			this._image_9__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_9__img);
			this._image_9.appendChild(this._image_9__img);
			this._image_9.ggId="Image 9";
			this._image_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_9.ggVisible=true;
			this._image_9.className='ggskin ggskin_image ';
			this._image_9.ggType='image';
			hs ='';
			hs+='height : 129px;';
			hs+='left : -59px;';
			hs+='position : absolute;';
			hs+='top : -43px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			this._image_9.setAttribute('style',hs);
			this._image_9.style[domTransform + 'Origin']='50% 50%';
			me._image_9.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_9.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_9.onclick=function () {
				me.player.openNext("{node18}","");
			}
			this._image_9.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_9);
		} else
		if (hotspot.skinid=='9-fitness') {
			this.__div=document.createElement('div');
			this.__div.ggId="9-fitness";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 292px;';
			hs+='position : absolute;';
			hs+='top : 164px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_10=document.createElement('div');
			this._image_10__img=document.createElement('img');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
			this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_10__img);
			this._image_10.appendChild(this._image_10__img);
			this._image_10.ggId="Image 10";
			this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_10.ggVisible=true;
			this._image_10.className='ggskin ggskin_image ';
			this._image_10.ggType='image';
			hs ='';
			hs+='height : 124px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : -51px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_10.setAttribute('style',hs);
			this._image_10.style[domTransform + 'Origin']='50% 50%';
			me._image_10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_10.onclick=function () {
				me.player.openNext("{node13}","");
			}
			this._image_10.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_10);
		} else
		if (hotspot.skinid=='10-piscina-aquecida') {
			this.__div=document.createElement('div');
			this.__div.ggId="10-piscina-aquecida";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 217px;';
			hs+='position : absolute;';
			hs+='top : 151px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_11=document.createElement('div');
			this._image_11__img=document.createElement('img');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
			this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_11__img);
			this._image_11.appendChild(this._image_11__img);
			this._image_11.ggId="Image 11";
			this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_11.ggVisible=true;
			this._image_11.className='ggskin ggskin_image ';
			this._image_11.ggType='image';
			hs ='';
			hs+='height : 130px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : -45px;';
			hs+='visibility : inherit;';
			hs+='width : 107px;';
			this._image_11.setAttribute('style',hs);
			this._image_11.style[domTransform + 'Origin']='50% 50%';
			me._image_11.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_11.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_11.onclick=function () {
				me.player.openNext("{node16}","");
			}
			this._image_11.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_11);
		} else
		if (hotspot.skinid=='11-piscina-externa') {
			this.__div=document.createElement('div');
			this.__div.ggId="11-piscina-externa";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 233px;';
			hs+='position : absolute;';
			hs+='top : 162px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_12=document.createElement('div');
			this._image_12__img=document.createElement('img');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
			this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_12__img);
			this._image_12.appendChild(this._image_12__img);
			this._image_12.ggId="Image 12";
			this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_12.ggVisible=true;
			this._image_12.className='ggskin ggskin_image ';
			this._image_12.ggType='image';
			hs ='';
			hs+='height : 130px;';
			hs+='left : -55px;';
			hs+='position : absolute;';
			hs+='top : -49px;';
			hs+='visibility : inherit;';
			hs+='width : 114px;';
			this._image_12.setAttribute('style',hs);
			this._image_12.style[domTransform + 'Origin']='50% 50%';
			me._image_12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_12.onclick=function () {
				me.player.openNext("{node9}","");
			}
			this._image_12.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_12);
		} else
		if (hotspot.skinid=='12-sala-estudo') {
			this.__div=document.createElement('div');
			this.__div.ggId="12-sala-estudo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 254px;';
			hs+='position : absolute;';
			hs+='top : 156px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_13=document.createElement('div');
			this._image_13__img=document.createElement('img');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img.setAttribute('src',basePath + 'images/image_13.png');
			this._image_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_13__img);
			this._image_13.appendChild(this._image_13__img);
			this._image_13.ggId="Image 13";
			this._image_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_13.ggVisible=true;
			this._image_13.className='ggskin ggskin_image ';
			this._image_13.ggType='image';
			hs ='';
			hs+='height : 126px;';
			hs+='left : -52px;';
			hs+='position : absolute;';
			hs+='top : -54px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_13.setAttribute('style',hs);
			this._image_13.style[domTransform + 'Origin']='50% 50%';
			me._image_13.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_13.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_13.onclick=function () {
				me.player.openNext("{node15}","");
			}
			this._image_13.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_13);
		} else
		if (hotspot.skinid=='13-pizza') {
			this.__div=document.createElement('div');
			this.__div.ggId="13-pizza";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 236px;';
			hs+='position : absolute;';
			hs+='top : 197px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_14=document.createElement('div');
			this._image_14__img=document.createElement('img');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img.setAttribute('src',basePath + 'images/image_14.png');
			this._image_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_14__img);
			this._image_14.appendChild(this._image_14__img);
			this._image_14.ggId="Image 14";
			this._image_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_14.ggVisible=true;
			this._image_14.className='ggskin ggskin_image ';
			this._image_14.ggType='image';
			hs ='';
			hs+='height : 145px;';
			hs+='left : -70px;';
			hs+='position : absolute;';
			hs+='top : -42px;';
			hs+='visibility : inherit;';
			hs+='width : 143px;';
			this._image_14.setAttribute('style',hs);
			this._image_14.style[domTransform + 'Origin']='50% 50%';
			me._image_14.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_14.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_14.onclick=function () {
				me.player.openNext("{node11}","");
			}
			this._image_14.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_14);
		} else
		if (hotspot.skinid=='14-lareira') {
			this.__div=document.createElement('div');
			this.__div.ggId="14-lareira";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 247px;';
			hs+='position : absolute;';
			hs+='top : 137px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_15=document.createElement('div');
			this._image_15__img=document.createElement('img');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
			this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_15__img);
			this._image_15.appendChild(this._image_15__img);
			this._image_15.ggId="Image 15";
			this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_15.ggVisible=true;
			this._image_15.className='ggskin ggskin_image ';
			this._image_15.ggType='image';
			hs ='';
			hs+='height : 126px;';
			hs+='left : -51px;';
			hs+='position : absolute;';
			hs+='top : -46px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_15.setAttribute('style',hs);
			this._image_15.style[domTransform + 'Origin']='50% 50%';
			me._image_15.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_15.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_15.onclick=function () {
				me.player.openNext("{node10}","");
			}
			this._image_15.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_15);
		} else
		if (hotspot.skinid=='0-entrada') {
			this.__div=document.createElement('div');
			this.__div.ggId="0-entrada";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 228px;';
			hs+='position : absolute;';
			hs+='top : 188px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_16=document.createElement('div');
			this._image_16__img=document.createElement('img');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
			this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_16__img);
			this._image_16.appendChild(this._image_16__img);
			this._image_16.ggId="Image 16";
			this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_16.ggVisible=true;
			this._image_16.className='ggskin ggskin_image ';
			this._image_16.ggType='image';
			hs ='';
			hs+='height : 125px;';
			hs+='left : -57px;';
			hs+='position : absolute;';
			hs+='top : -47px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_16.setAttribute('style',hs);
			this._image_16.style[domTransform + 'Origin']='50% 50%';
			me._image_16.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_16.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_16.onclick=function () {
				me.player.openNext("{node1}","");
			}
			this._image_16.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_16);
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 100px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_1=document.createElement('div');
			this._svg_1__img=document.createElement('img');
			this._svg_1__img.className='ggskin ggskin_svg';
			this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
			this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_1__img['ondragstart']=function() { return false; };
			this._svg_1.appendChild(this._svg_1__img);
			this._svg_1.ggId="Svg 1";
			this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_1.ggVisible=true;
			this._svg_1.className='ggskin ggskin_svg ';
			this._svg_1.ggType='svg';
			hs ='';
			hs+='height : 54px;';
			hs+='left : -27px;';
			hs+='position : absolute;';
			hs+='top : -74px;';
			hs+='visibility : inherit;';
			hs+='width : 54px;';
			this._svg_1.setAttribute('style',hs);
			this._svg_1.style[domTransform + 'Origin']='50% 50%';
			me._svg_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_1.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_1);
			this._svg_2=document.createElement('div');
			this._svg_2__img=document.createElement('img');
			this._svg_2__img.className='ggskin ggskin_svg';
			this._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
			this._svg_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_2__img['ondragstart']=function() { return false; };
			this._svg_2.appendChild(this._svg_2__img);
			this._svg_2.ggId="Svg 2";
			this._svg_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_2.ggVisible=true;
			this._svg_2.className='ggskin ggskin_svg ';
			this._svg_2.ggType='svg';
			hs ='';
			hs+='height : 71px;';
			hs+='left : -19px;';
			hs+='position : absolute;';
			hs+='top : -64px;';
			hs+='visibility : inherit;';
			hs+='width : 38px;';
			this._svg_2.setAttribute('style',hs);
			this._svg_2.style[domTransform + 'Origin']='50% 50%';
			me._svg_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_2.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_2);
		} else
		if (hotspot.skinid=='1b-jazz-club') {
			this.__div=document.createElement('div');
			this.__div.ggId="1b-jazz-club";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 289px;';
			hs+='position : absolute;';
			hs+='top : 298px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._svg_12=document.createElement('div');
			this._svg_12__img=document.createElement('img');
			this._svg_12__img.className='ggskin ggskin_svg';
			this._svg_12__img.setAttribute('src',basePath + 'images/svg_12.svg');
			this._svg_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._svg_12__img['ondragstart']=function() { return false; };
			this._svg_12.appendChild(this._svg_12__img);
			this._svg_12.ggId="Svg 12";
			this._svg_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_12.ggVisible=true;
			this._svg_12.className='ggskin ggskin_svg ';
			this._svg_12.ggType='svg';
			hs ='';
			hs+='height : 140px;';
			hs+='left : -71px;';
			hs+='position : absolute;';
			hs+='top : -187px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._svg_12.setAttribute('style',hs);
			this._svg_12.style[domTransform + 'Origin']='50% 50%';
			me._svg_12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._svg_12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._svg_12.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._svg_12);
			this._image_17=document.createElement('div');
			this._image_17__img=document.createElement('img');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img.setAttribute('src',basePath + 'images/image_17.png');
			this._image_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_17__img);
			this._image_17.appendChild(this._image_17__img);
			this._image_17.ggId="Image 17";
			this._image_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_17.ggVisible=true;
			this._image_17.className='ggskin ggskin_image ';
			this._image_17.ggType='image';
			hs ='';
			hs+='height : 164px;';
			hs+='left : -54px;';
			hs+='position : absolute;';
			hs+='top : -170px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_17.setAttribute('style',hs);
			this._image_17.style[domTransform + 'Origin']='50% 50%';
			me._image_17.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_17.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_17.onclick=function () {
				me.player.openNext("{node1}","");
			}
			this._image_17.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_17);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="aerea";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 235px;';
			hs+='position : absolute;';
			hs+='top : 185px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_18=document.createElement('div');
			this._image_18__img=document.createElement('img');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img.setAttribute('src',basePath + 'images/image_18.png');
			this._image_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_18__img);
			this._image_18.appendChild(this._image_18__img);
			this._image_18.ggId="Image 18";
			this._image_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_18.ggVisible=true;
			this._image_18.className='ggskin ggskin_image ';
			this._image_18.ggType='image';
			hs ='';
			hs+='height : 104px;';
			hs+='left : -53px;';
			hs+='position : absolute;';
			hs+='top : -51px;';
			hs+='visibility : inherit;';
			hs+='width : 104px;';
			this._image_18.setAttribute('style',hs);
			this._image_18.style[domTransform + 'Origin']='50% 50%';
			me._image_18.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_18.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_18.onclick=function () {
				me.player.openNext("{node26}","");
			}
			this._image_18.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._image_18);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};