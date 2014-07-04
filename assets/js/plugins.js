// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//http://css-tricks.com/snippets/jquery/jquery-sticky-footer
// Window load event used just in case window height is dependant upon images

( function( window ) {

'use strict';

$(window).bind("load", function() { 
       
       var footerHeight = 0,
           footerTop = 0,
           $footer = $("footer");
           
       positionFooter();
       
       function positionFooter() {
       
                footerHeight = $footer.height();
                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
       
               if ( ($('.main').height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        bottom: "0"
                   })
               } else {
                   $footer.css({
                        position: "static"
                   })
               }
               
       }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)
               
});

})( window );




/*
 * jQuery MiniColors: A tiny color picker built on jQuery
 * Copyright Cory LaViska for A Beautiful Site, LLC. (http://www.abeautifulsite.net/)
 * Licensed under the MIT license: http://opensource.org/licenses/MIT
 */
jQuery&&function(a){function b(b,c){var d=a('<div class="minicolors" />'),e=a.minicolors.defaults;b.data("minicolors-initialized")||(c=a.extend(!0,{},e,c),d.addClass("minicolors-theme-"+c.theme).toggleClass("minicolors-with-opacity",c.opacity),void 0!==c.position&&a.each(c.position.split(" "),function(){d.addClass("minicolors-position-"+this)}),b.addClass("minicolors-input").data("minicolors-initialized",!1).data("minicolors-settings",c).prop("size",7).wrap(d).after('<div class="minicolors-panel minicolors-slider-'+c.control+'">'+'<div class="minicolors-slider">'+'<div class="minicolors-picker"></div>'+"</div>"+'<div class="minicolors-opacity-slider">'+'<div class="minicolors-picker"></div>'+"</div>"+'<div class="minicolors-grid">'+'<div class="minicolors-grid-inner"></div>'+'<div class="minicolors-picker"><div></div></div>'+"</div>"+"</div>"),c.inline||(b.after('<span class="minicolors-swatch"><span class="minicolors-swatch-color"></span></span>'),b.next(".minicolors-swatch").on("click",function(a){a.preventDefault(),b.focus()})),b.parent().find(".minicolors-panel").on("selectstart",function(){return!1}).end(),c.inline&&b.parent().addClass("minicolors-inline"),h(b,!1),b.data("minicolors-initialized",!0))}function c(a){var b=a.parent();a.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"),b.before(a).remove()}function d(a){var b=a.parent(),c=b.find(".minicolors-panel"),d=a.data("minicolors-settings");!a.data("minicolors-initialized")||a.prop("disabled")||b.hasClass("minicolors-inline")||b.hasClass("minicolors-focus")||(e(),b.addClass("minicolors-focus"),c.stop(!0,!0).fadeIn(d.showSpeed,function(){d.show&&d.show.call(a.get(0))}))}function e(){a(".minicolors-focus").each(function(){var b=a(this),c=b.find(".minicolors-input"),d=b.find(".minicolors-panel"),e=c.data("minicolors-settings");d.fadeOut(e.hideSpeed,function(){e.hide&&e.hide.call(c.get(0)),b.removeClass("minicolors-focus")})})}function f(a,b,c){var m,n,o,p,d=a.parents(".minicolors").find(".minicolors-input"),e=d.data("minicolors-settings"),f=a.find("[class$=-picker]"),h=a.offset().left,i=a.offset().top,j=Math.round(b.pageX-h),k=Math.round(b.pageY-i),l=c?e.animationSpeed:0;b.originalEvent.changedTouches&&(j=b.originalEvent.changedTouches[0].pageX-h,k=b.originalEvent.changedTouches[0].pageY-i),0>j&&(j=0),0>k&&(k=0),j>a.width()&&(j=a.width()),k>a.height()&&(k=a.height()),a.parent().is(".minicolors-slider-wheel")&&f.parent().is(".minicolors-grid")&&(m=75-j,n=75-k,o=Math.sqrt(m*m+n*n),p=Math.atan2(n,m),0>p&&(p+=2*Math.PI),o>75&&(o=75,j=75-75*Math.cos(p),k=75-75*Math.sin(p)),j=Math.round(j),k=Math.round(k)),a.is(".minicolors-grid")?f.stop(!0).animate({top:k+"px",left:j+"px"},l,e.animationEasing,function(){g(d,a)}):f.stop(!0).animate({top:k+"px"},l,e.animationEasing,function(){g(d,a)})}function g(a,b){function c(a,b){var c,d;return a.length&&b?(c=a.offset().left,d=a.offset().top,{x:c-b.offset().left+a.outerWidth()/2,y:d-b.offset().top+a.outerHeight()/2}):null}var d,e,f,g,h,j,k,m=a.val(),o=a.attr("data-opacity"),p=a.parent(),r=a.data("minicolors-settings"),s=p.find(".minicolors-swatch"),t=p.find(".minicolors-grid"),u=p.find(".minicolors-slider"),v=p.find(".minicolors-opacity-slider"),w=t.find("[class$=-picker]"),x=u.find("[class$=-picker]"),y=v.find("[class$=-picker]"),z=c(w,t),A=c(x,u),B=c(y,v);if(b.is(".minicolors-grid, .minicolors-slider")){switch(r.control){case"wheel":g=t.width()/2-z.x,h=t.height()/2-z.y,j=Math.sqrt(g*g+h*h),k=Math.atan2(h,g),0>k&&(k+=2*Math.PI),j>75&&(j=75,z.x=69-75*Math.cos(k),z.y=69-75*Math.sin(k)),e=n(j/.75,0,100),d=n(180*k/Math.PI,0,360),f=n(100-Math.floor(A.y*(100/u.height())),0,100),m=q({h:d,s:e,b:f}),u.css("backgroundColor",q({h:d,s:e,b:100}));break;case"saturation":d=n(parseInt(z.x*(360/t.width()),10),0,360),e=n(100-Math.floor(A.y*(100/u.height())),0,100),f=n(100-Math.floor(z.y*(100/t.height())),0,100),m=q({h:d,s:e,b:f}),u.css("backgroundColor",q({h:d,s:100,b:f})),p.find(".minicolors-grid-inner").css("opacity",e/100);break;case"brightness":d=n(parseInt(z.x*(360/t.width()),10),0,360),e=n(100-Math.floor(z.y*(100/t.height())),0,100),f=n(100-Math.floor(A.y*(100/u.height())),0,100),m=q({h:d,s:e,b:f}),u.css("backgroundColor",q({h:d,s:e,b:100})),p.find(".minicolors-grid-inner").css("opacity",1-f/100);break;default:d=n(360-parseInt(A.y*(360/u.height()),10),0,360),e=n(Math.floor(z.x*(100/t.width())),0,100),f=n(100-Math.floor(z.y*(100/t.height())),0,100),m=q({h:d,s:e,b:f}),t.css("backgroundColor",q({h:d,s:100,b:100}))}a.val(l(m,r.letterCase))}b.is(".minicolors-opacity-slider")&&(o=r.opacity?parseFloat(1-B.y/v.height()).toFixed(2):1,r.opacity&&a.attr("data-opacity",o)),s.find("SPAN").css({backgroundColor:m,opacity:o}),i(a,m,o)}function h(a,b){var c,d,e,f,g,h,j,k=a.parent(),o=a.data("minicolors-settings"),p=k.find(".minicolors-swatch"),s=k.find(".minicolors-grid"),t=k.find(".minicolors-slider"),u=k.find(".minicolors-opacity-slider"),v=s.find("[class$=-picker]"),w=t.find("[class$=-picker]"),x=u.find("[class$=-picker]");switch(c=l(m(a.val(),!0),o.letterCase),c||(c=l(m(o.defaultValue,!0),o.letterCase)),d=r(c),b||a.val(c),o.opacity&&(e=""===a.attr("data-opacity")?1:n(parseFloat(a.attr("data-opacity")).toFixed(2),0,1),isNaN(e)&&(e=1),a.attr("data-opacity",e),p.find("SPAN").css("opacity",e),g=n(u.height()-u.height()*e,0,u.height()),x.css("top",g+"px")),p.find("SPAN").css("backgroundColor",c),o.control){case"wheel":h=n(Math.ceil(.75*d.s),0,s.height()/2),j=d.h*Math.PI/180,f=n(75-Math.cos(j)*h,0,s.width()),g=n(75-Math.sin(j)*h,0,s.height()),v.css({top:g+"px",left:f+"px"}),g=150-d.b/(100/s.height()),""===c&&(g=0),w.css("top",g+"px"),t.css("backgroundColor",q({h:d.h,s:d.s,b:100}));break;case"saturation":f=n(5*d.h/12,0,150),g=n(s.height()-Math.ceil(d.b/(100/s.height())),0,s.height()),v.css({top:g+"px",left:f+"px"}),g=n(t.height()-d.s*(t.height()/100),0,t.height()),w.css("top",g+"px"),t.css("backgroundColor",q({h:d.h,s:100,b:d.b})),k.find(".minicolors-grid-inner").css("opacity",d.s/100);break;case"brightness":f=n(5*d.h/12,0,150),g=n(s.height()-Math.ceil(d.s/(100/s.height())),0,s.height()),v.css({top:g+"px",left:f+"px"}),g=n(t.height()-d.b*(t.height()/100),0,t.height()),w.css("top",g+"px"),t.css("backgroundColor",q({h:d.h,s:d.s,b:100})),k.find(".minicolors-grid-inner").css("opacity",1-d.b/100);break;default:f=n(Math.ceil(d.s/(100/s.width())),0,s.width()),g=n(s.height()-Math.ceil(d.b/(100/s.height())),0,s.height()),v.css({top:g+"px",left:f+"px"}),g=n(t.height()-d.h/(360/t.height()),0,t.height()),w.css("top",g+"px"),s.css("backgroundColor",q({h:d.h,s:100,b:100}))}a.data("minicolors-initialized")&&i(a,c,e)}function i(a,b,c){var d=a.data("minicolors-settings"),e=a.data("minicolors-lastChange");e&&e.hex===b&&e.opacity===c||(a.data("minicolors-lastChange",{hex:b,opacity:c}),d.change&&(d.changeDelay?(clearTimeout(a.data("minicolors-changeTimeout")),a.data("minicolors-changeTimeout",setTimeout(function(){d.change.call(a.get(0),b,c)},d.changeDelay))):d.change.call(a.get(0),b,c)),a.trigger("change").trigger("input"))}function j(b){var c=m(a(b).val(),!0),d=t(c),e=a(b).attr("data-opacity");return d?(void 0!==e&&a.extend(d,{a:parseFloat(e)}),d):null}function k(b,c){var d=m(a(b).val(),!0),e=t(d),f=a(b).attr("data-opacity");return e?(void 0===f&&(f=1),c?"rgba("+e.r+", "+e.g+", "+e.b+", "+parseFloat(f)+")":"rgb("+e.r+", "+e.g+", "+e.b+")"):null}function l(a,b){return"uppercase"===b?a.toUpperCase():a.toLowerCase()}function m(a,b){return a=a.replace(/[^A-F0-9]/gi,""),3!==a.length&&6!==a.length?"":(3===a.length&&b&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),"#"+a)}function n(a,b,c){return b>a&&(a=b),a>c&&(a=c),a}function o(a){var b={},c=Math.round(a.h),d=Math.round(255*a.s/100),e=Math.round(255*a.b/100);if(0===d)b.r=b.g=b.b=e;else{var f=e,g=(255-d)*e/255,h=(f-g)*(c%60)/60;360===c&&(c=0),60>c?(b.r=f,b.b=g,b.g=g+h):120>c?(b.g=f,b.b=g,b.r=f-h):180>c?(b.g=f,b.r=g,b.b=g+h):240>c?(b.b=f,b.r=g,b.g=f-h):300>c?(b.b=f,b.g=g,b.r=g+h):360>c?(b.r=f,b.g=g,b.b=f-h):(b.r=0,b.g=0,b.b=0)}return{r:Math.round(b.r),g:Math.round(b.g),b:Math.round(b.b)}}function p(b){var c=[b.r.toString(16),b.g.toString(16),b.b.toString(16)];return a.each(c,function(a,b){1===b.length&&(c[a]="0"+b)}),"#"+c.join("")}function q(a){return p(o(a))}function r(a){var b=s(t(a));return 0===b.s&&(b.h=360),b}function s(a){var b={h:0,s:0,b:0},c=Math.min(a.r,a.g,a.b),d=Math.max(a.r,a.g,a.b),e=d-c;return b.b=d,b.s=0!==d?255*e/d:0,b.h=0!==b.s?a.r===d?(a.g-a.b)/e:a.g===d?2+(a.b-a.r)/e:4+(a.r-a.g)/e:-1,b.h*=60,b.h<0&&(b.h+=360),b.s*=100/255,b.b*=100/255,b}function t(a){return a=parseInt(a.indexOf("#")>-1?a.substring(1):a,16),{r:a>>16,g:(65280&a)>>8,b:255&a}}a.minicolors={defaults:{animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",defaultValue:"",hide:null,hideSpeed:100,inline:!1,letterCase:"lowercase",opacity:!1,position:"bottom left",show:null,showSpeed:100,theme:"default"}},a.extend(a.fn,{minicolors:function(f,g){switch(f){case"destroy":return a(this).each(function(){c(a(this))}),a(this);case"hide":return e(),a(this);case"opacity":return void 0===g?a(this).attr("data-opacity"):(a(this).each(function(){h(a(this).attr("data-opacity",g))}),a(this));case"rgbObject":return j(a(this),"rgbaObject"===f);case"rgbString":case"rgbaString":return k(a(this),"rgbaString"===f);case"settings":return void 0===g?a(this).data("minicolors-settings"):(a(this).each(function(){var b=a(this).data("minicolors-settings")||{};c(a(this)),a(this).minicolors(a.extend(!0,b,g))}),a(this));case"show":return d(a(this).eq(0)),a(this);case"value":return void 0===g?a(this).val():(a(this).each(function(){h(a(this).val(g))}),a(this));default:return"create"!==f&&(g=f),a(this).each(function(){b(a(this),g)}),a(this)}}}),a(document).on("mousedown.minicolors touchstart.minicolors",function(b){a(b.target).parents().add(b.target).hasClass("minicolors")||e()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(b){var c=a(this);b.preventDefault(),a(document).data("minicolors-target",c),f(c,b,!0)}).on("mousemove.minicolors touchmove.minicolors",function(b){var c=a(document).data("minicolors-target");c&&f(c,b)}).on("mouseup.minicolors touchend.minicolors",function(){a(this).removeData("minicolors-target")}).on("mousedown.minicolors touchstart.minicolors",".minicolors-swatch",function(b){var c=a(this).parent().find(".minicolors-input");b.preventDefault(),d(c)}).on("focus.minicolors",".minicolors-input",function(){var b=a(this);b.data("minicolors-initialized")&&d(b)}).on("blur.minicolors",".minicolors-input",function(){var b=a(this),c=b.data("minicolors-settings");b.data("minicolors-initialized")&&(b.val(m(b.val(),!0)),""===b.val()&&b.val(m(c.defaultValue,!0)),b.val(l(b.val(),c.letterCase)))}).on("keydown.minicolors",".minicolors-input",function(b){var c=a(this);if(c.data("minicolors-initialized"))switch(b.keyCode){case 9:e();break;case 13:case 27:e(),c.blur()}}).on("keyup.minicolors",".minicolors-input",function(){var b=a(this);b.data("minicolors-initialized")&&h(b,!0)}).on("paste.minicolors",".minicolors-input",function(){var b=a(this);b.data("minicolors-initialized")&&setTimeout(function(){h(b,!0)},1)})}(jQuery);

  $('.picker').minicolors({position: 'top left', changeDelay: 200});

  //available settings
  $.minicolors = {
  settings: {
      animationSpeed: 50,
      animationEasing: 'swing',
      change: null,
      changeDelay: 0,
      control: 'hue',
      defaultValue: '',
      hide: null,
      hideSpeed: 100,
      inline: false,
      letterCase: 'lowercase',
      opacity: false,
      position: 'top left',
      show: null,
      showSpeed: 100,
      theme: 'default'
  }
  };

/*!
 * Bootstrap MODAL ONLY v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(".st-pusher"),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery)


/*
Spinner from Pano demo
*/
//fgnass.github.com/spin.js#v1.2.7
!function(e,t,n){function o(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function u(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function f(e,t,n,r){var o=["opacity",t,~~(e*100),n,r].join("-"),u=.01+n/r*100,f=Math.max(1-(1-e)/t*(100-u),e),l=s.substring(0,s.indexOf("Animation")).toLowerCase(),c=l&&"-"+l+"-"||"";return i[o]||(a.insertRule("@"+c+"keyframes "+o+"{"+"0%{opacity:"+f+"}"+u+"%{opacity:"+e+"}"+(u+.01)+"%{opacity:1}"+(u+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+f+"}"+"}",a.cssRules.length),i[o]=1),o}function l(e,t){var i=e.style,s,o;if(i[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(o=0;o<r.length;o++){s=r[o]+t;if(i[s]!==n)return s}}function c(e,t){for(var n in t)e.style[l(e,n)||n]=t[n];return e}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function p(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var r=["webkit","Moz","ms","O"],i={},s,a=function(){var e=o("style",{type:"text/css"});return u(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},v=function m(e){if(!this.spin)return new m(e);this.opts=h(e||{},m.defaults,d)};v.defaults={},h(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,r=t.el=c(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),i=n.radius+n.length+n.width,u,a;e&&(e.insertBefore(r,e.firstChild||null),a=p(e),u=p(r),c(r,{left:(n.left=="auto"?a.x-u.x+(e.offsetWidth>>1):parseInt(n.left,10)+i)+"px",top:(n.top=="auto"?a.y-u.y+(e.offsetHeight>>1):parseInt(n.top,10)+i)+"px"})),r.setAttribute("aria-role","progressbar"),t.lines(r,t.opts);if(!s){var f=0,l=n.fps,h=l/n.speed,d=(1-n.opacity)/(h*n.trail/100),v=h/n.lines;(function m(){f++;for(var e=n.lines;e;e--){var i=Math.max(1-(f+e*v)%h*d,n.opacity);t.opacity(r,n.lines-e,i,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/l))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function i(e,r){return c(o(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:r,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*n+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var n=0,r;for(;n<t.lines;n++)r=c(o(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:s&&f(t.opacity,t.trail,n,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&u(r,c(i("#000","0 0 4px #000"),{top:"2px"})),u(e,u(r,i(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),function(){function e(e,t){return o("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=c(o("group"),{behavior:"url(#default#VML)"});!l(t,"transform")&&t.adj?(a.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function s(){return c(e("group",{coordsize:i+" "+i,coordorigin:-r+" "+ -r}),{width:i,height:i})}function l(t,i,o){u(a,u(c(s(),{rotation:360/n.lines*t+"deg",left:~~i}),u(c(e("roundrect",{arcsize:n.corners}),{width:r,height:n.width,left:n.radius,top:-n.width>>1,filter:o}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var r=n.length+n.width,i=2*r,o=-(n.width+n.length)*2+"px",a=c(s(),{position:"absolute",top:o,left:o}),f;if(n.shadow)for(f=1;f<=n.lines;f++)l(f,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(f=1;f<=n.lines;f++)l(f);return u(t,a)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):s=l(t,"animation")}(),typeof define=="function"&&define.amd?define(function(){return v}):e.Spinner=v}(window,document);


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



/**
 * sidebarEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 var SidebarMenuEffects = (function() {

    function hasParentClass( e, classname ) {
        if(e === document) return false;
        if( classie.has( e, classname ) ) {
            return true;
        }
        return e.parentNode && hasParentClass( e.parentNode, classname );
    }

    // http://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {

        var container = document.getElementById( 'st-container' ),
            buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
            // event type (if mobile use touch events)
            eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function() {
                classie.remove( container, 'st-menu-open' );
            },
            bodyClickFn = function(evt) {
                if( !hasParentClass( evt.target, 'st-menu' ) ) {
                    resetMenu();
                    document.removeEventListener( eventtype, bodyClickFn );
                }
            };

        buttons.forEach( function( el, i ) {
            var effect = el.getAttribute( 'data-effect' );

            el.addEventListener( eventtype, function( ev ) {
                ev.stopPropagation();
                ev.preventDefault();
                container.className = 'st-container'; // clear
                classie.add( container, effect );
                setTimeout( function() {
                    classie.add( container, 'st-menu-open' );
                }, 25 );
                document.addEventListener( eventtype, bodyClickFn );
            });
        } );

    }

    init();

})();