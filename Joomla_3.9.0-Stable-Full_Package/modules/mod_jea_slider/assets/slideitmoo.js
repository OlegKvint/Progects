/**
 * SlideItMoo v1.3 - Image slider for MooTools 1.3 (MooTools 1.4 compatible)
 * (c) 2007-2010 Constantin Boiangiu <http://www.php-help.ro>
 * Contribution from Sylvain Philip <http://www.sphilip.com>
 * MIT-style license.
 **/

var SlideItMoo=new Class({Implements:[Events,Options],options:{overallContainer:null,elementScrolled:null,thumbsContainer:null,itemsSelector:null,itemsVisible:5,elemsSlide:null,itemWidth:null,itemHeight:null,itemMargin:0,navs:{fwd:".SlideItMoo_forward",bk:".SlideItMoo_back"},slideVertical:false,transition:Fx.Transitions.linear,duration:800,direction:1,autoSlide:false,mouseWheelNav:false,startIndex:0},initialize:function(c){this.setOptions(c);this.elements=document.id(this.options.thumbsContainer).getElements(this.options.itemsSelector);var g=this.elements[0].getSize();this.elementWidth=(this.options.itemWidth||g.x)+this.options.itemMargin;this.elementHeight=(this.options.itemHeight||g.y)+this.options.itemMargin;var f={};var e={};var b={};if(this.options.slideVertical){e.height=this.options.itemsVisible*this.elementHeight-this.options.itemMargin;b.height=this.elements.length*this.elementHeight}else{f.width=this.options.itemsVisible*this.elementWidth-this.options.itemMargin;e.width=this.options.itemsVisible*this.elementWidth-this.options.itemMargin;b.width=this.elements.length*this.elementWidth}document.id(this.options.overallContainer).set({styles:f});document.id(this.options.elementScrolled).set({styles:e});document.id(this.options.thumbsContainer).set({styles:b});if(this.elements.length<=this.options.itemsVisible){return}if(this.options.elemsSlide>this.options.itemsVisible){this.options.elemsSlide=this.options.itemsVisible}this.direction=this.options.direction;this.currentIndex=this.options.startIndex;this.lastIndex=this.elements.length-1;if(this.currentIndex>0&&this.currentIndex<this.elements.length){for(var d=0;d<this.currentIndex;d++){var a=this.elements[d];var h=this.elements[this.lastIndex];a.inject(h,"after");this.lastIndex=d}}if(this.options.navs){this.fwd=document.id(this.options.overallContainer).getElement(this.options.navs.fwd);this.bwd=document.id(this.options.overallContainer).getElement(this.options.navs.bk);if(this.fwd){this.fwd.addEvent("click",this.slide.pass(1,this))}if(this.bwd){this.bwd.addEvent("click",this.slide.pass(-1,this))}}this.myFx=new Fx.Tween(this.options.thumbsContainer,{property:(this.options.slideVertical?"margin-top":"margin-left"),link:"ignore",transition:this.options.transition,duration:this.options.duration});if(this.options.mouseWheelNav&&!this.options.autoSlide){document.id(this.options.thumbsContainer).addEvent("mousewheel",function(i){new Event(i).stop();this.slide(-i.wheel)}.bind(this))}if(this.options.autoSlide&&this.elements.length>this.options.itemsVisible){this.startAutoSlide()}},resetAll:function(){document.id(this.options.overallContainer).removeProperty("style");document.id(this.options.elementScrolled).removeProperty("style");document.id(this.options.thumbsContainer).removeProperty("style");this.stopAutoSlide();if(typeOf(this.fwd)!==null){this.fwd.dispose();this.bwd.dispose()}this.initialize()},slide:function(d){if(this.started){return}this.direction=d;var c={};var f=0;if(this.options.slideVertical){c["margin-top"]=this.direction==1?0:-(this.elementHeight*this.options.elemsSlide);f=this.direction==1?-(this.elementHeight*this.options.elemsSlide):0}else{c["margin-left"]=this.direction==1?0:-(this.elementWidth*this.options.elemsSlide);f=this.direction==1?-(this.elementWidth*this.options.elemsSlide):0}if(this.direction==-1){for(var b=0;b<this.options.elemsSlide;b++){var a=this.elements[this.currentIndex];var e=this.elements[this.lastIndex];e.inject(a,"before");this.currentIndex=this.currentIndex==0?this.elements.length-1:this.currentIndex-1;this.lastIndex=this.currentIndex==0?this.elements.length-1:this.currentIndex-1}$(this.options.thumbsContainer).setStyles(c)}this.started=true;this.myFx.start(f).chain(function(){if(this.direction==1){document.id(this.options.thumbsContainer).setStyles(c);for(var h=0;h<this.options.elemsSlide;h++){var g=this.elements[this.currentIndex];var j=this.elements[this.lastIndex];g.inject(j,"after");this.lastIndex=this.currentIndex;this.currentIndex=this.currentIndex>=this.elements.length-1?0:this.currentIndex+1}}this.started=false}.bind(this));this.fireEvent("onChange",this.currentIndex)},startAutoSlide:function(){var b=this.options.autoSlide+this.options.duration;var a=this.slide.pass(this.direction|1,this);this.autoSlide=a.periodical(b,this);this.elements.addEvents({mouseenter:function(){clearInterval(this.autoSlide)}.bind(this),mouseleave:function(){this.autoSlide=a.periodical(b,this)}.bind(this)})},stopAutoSlide:function(){clearInterval(this.autoSlide);this.elements.removeEvents()}});