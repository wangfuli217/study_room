var tooltipOptions=
{
    showDelay: 100,
    hideDelay: 300,
    effect: "fade",
    duration: 200,
    relativeTo: "element",
    position: 1,
    smartPosition: true,
    offsetX: 0,
    offsetY: 0,
    maxWidth: 500,
    calloutSize: 16,
    calloutPosition: 0.3,
    cssClass: "",
    sticky: false,
    overlay: false,
    license: "64628"
};


/* JavaScript Tooltip v2016.3.18. Copyright www.menucool.com */
var tooltip=function(w){
    "use strict";
    var f="length",
        Fb="addEventListener",
        fb,
        pc,
        Ib=function(a,c,b){
            if(a[Fb])a[Fb](c,b,false);
            else a.attachEvent&&a.attachEvent("on"+c,b)
        },
        a={},
        Z=function(a){
            if(a&&a.stopPropagation)
                a.stopPropagation();
            else if(window.event)
                window.event.cancelBubble=true
        },
        mc=function(b){
            var a=b?b:window.event;
            if(a.preventDefault)
                a.preventDefault();
            else if(a)a.returnValue=false
        },ac=function(d){
            var a=d.childNodes,c=[];
            if(a)
                for(var b=0,e=a[f];b<e;b++)
                    a[b].nodeType==1&&c.push(a[b]);
                return c
        },
        cb={a:0,b:0},
        g=null,
        hc=function(a){
            if(!a)a=window.event;
            cb.a=a.clientX;
            cb.b=a.clientY
        },ec=function(a){
            if(window.getComputedStyle)
                var b=window.getComputedStyle(a,null);
            else if(a.currentStyle)b=a.currentStyle;
            else b=a[e];
            return b
        },
        G="offsetLeft",
        H="offsetTop",
        rb="clientWidth",
        qb="clientHeight",
        A="appendChild",
        Mb="display",
        qc="border",
        r="opacity",
        U=0,
        P="createElement",
        db="getElementsByTagName",
        C="parentNode",
        N="calloutSize",
        S="position",
        Gb="calloutPosition",
        E=Math.round,
        jb="overlay",
        I="sticky",
        Y="hideDelay",
        gb="onmouseout",
        tb="onclick",
        p=0,
        Q="firstChild",
        vb=0,
        q=document,
        W="getElementById",
        ab=navigator,
        R="innerHTML",
        t=function(a,b){
            return b?q[a](b):q[a]
        },
        D={},
        yb=!!ab.msMaxTouchPoints,nb=!!(
            "ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch
            ),
        Jb=(ab.msPointerEnabled||ab.pointerEnabled)&&yb;if(Jb)var Xb=ab.msPointerEnabled?"onmspointerout":"onpointerOut";var Qb=function(a){return a.pointerType==a.MSPOINTER_TYPE_MOUSE||a.pointerType=="mouse"},oc="marginTop",lc="marginLeft",x="offsetWidth",m="offsetHeight",ub="documentElement",nc="borderColor",ib="nextSibling",e="style",z="width",n="left",o="top",J="height",jc=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],y,ob,B=function(c,a,b){return setTimeout(c,a?a.showDelay:b)},V=function(a){clearTimeout(a);return null},pb=function(){for(var e=[c,b,j,d,d?d[ib]:0],a=0;a<e[f];a++)if(e[a]&&e[a].o)e[a].o=V(e[a].o)},Ob=function(c,a,b){Kb(c,a[0][0],a[0][1],b);a[f]==2&&Kb(c,a[1][0],a[1][1],b)},Kb=function(a,b,d,c){clearInterval(a["t"+b]);a["t"+b]=setInterval(function(){fc(a,b,d,c)},15)},fc=function(a,d,c,g){var f=0;if(d==r){if(c&&a.op>=1||!c&&a.op<=0)f++}else{var b=parseInt(a[e][d]);if(Math.abs(b-c)<2)f++}if(f){clearInterval(a["t"+d]);g&&g()}else if(d==r)X(a,a.op+(c?.06:-.06));else{b=b+(c-b)/3;if(Math.abs(b-c)<4)b=c;a[e][d]=b+"px"}},l=function(b,a,c){if(!p&&b.id=="mcTooltipWrapper"){Ob(b,a,c);return}if(p){var d=k?k.duration:w.duration;b[e][p]="all "+d+"ms"}b[e][a[0][0]]=a[0][1]+(a[0][0]==r?"":"px");if(a[f]===2)b[e][a[1][0]]=a[1][1]+(a[1][0]==r?"":"px");if(c)if(p){clearTimeout(b.o);b.o=setTimeout(c,d)}else setTimeout(c,6)},L=function(b,a){b[e][p]="none";b[e][a[0][0]]=a[0][1]+"px";if(a[f]===2)b[e][a[1][0]]=a[1][1]+"px";b[m]},ic=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],lb=function(d,a){var c=[];if(vb)return vb;for(var b=0;b<d[f];b++)c[c[f]]=String.fromCharCode(d.charCodeAt(b)-(a&&a>7?a:3));return c.join("")},Nb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},Tb=function(e,c){var d=function(a){for(var c=a.substr(0,a[f]-1),e=a.substr(a[f]-1,1),d="",b=0;b<c[f];b++)d+=c.charCodeAt(b)-e;return unescape(d)},a=Nb(q.domain)+Math.random(),b=d(a);ob="%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";if(b[f]==39)try{a=(new Function("$","_",lb(ob))).apply(this,[b,c]);ob=a}catch(g){}},gc=function(c,a){var b=function(b){var a=b.charCodeAt(0).toString();return a.substring(a[f]-1)};return c+b(a[parseInt(lb("4"))])+a[2]+b(a[0])},c,b,d,bb,j,i,K=0,kc=1,k,T=null,F=null,hb=function(){if(T!=null)T=V(T)},v=function(){if(F!=null)F=V(F)},X=function(a,b){if(a){a.op=b;if(a[e][r]!==undefined)a[e][r]=b;else a[e].filter="alpha(opacity="+b*100+")"}},Pb=function(a,c,b,d,g,e,h,f){var j=b>=a,l=d>=c,m=j?b-a<g:a-b<h,n=l?d-c<e:c-d<f,i=m?b-a:j?g:-h,k=n?d-c:l?e:-f;if(m&&n)if(Math.abs(i)>Math.abs(k))i=j?g:-h;else k=l?e:-f;return[i,k]},dc=function(r,j,q){eb(b,1);var a=t(P,"div");a[e][z]=r+"px";d=t(P,"div");d.className="mcTooltipInner";if(q==1){d[R]=j;var g=1}else{var c=t(W,j);if(c[C].w)d=c[C];else{d.w=c[C];d[A](c);g=1}}if(!p){var k=d[db]("select"),l=k[f];while(l--)k[l][gb]=Z}a[A](d);b[A](a);if(d[x]<20){var i=b.className;b.className=""}var h=d[db]("img");h&&h[f]&&h[0][m];d[e][z]=d[x]+(g?.3:0)+"px";d[e][J]=d[m]+(g?.3:0)+"px";d[e][n]=d[e][o]="auto";d=b.insertBefore(d,b[Q]);d[e][S]="absolute";a=b.removeChild(a);a=null;if(i)b.className=i;return d},Rb=function(a){if(a.w){a.w[A](a);X(a,1)}else{a=a[C].removeChild(a);a=null}},eb=function(b,c){for(var a=c;a<b.childNodes[f];a++)Rb(b.childNodes[a])},h=function(b,a){b[e][Mb]=a?"block":"none"},Wb=function(){c.v=U=0;h(bb,0);h(c,0);h(j,0);h(K,0);eb(b,0)},Vb=function(){if(document.styleSheets&&document.styleSheets.length){var c=document.styleSheets[0];if(typeof b.style.animationName!="undefined")var a="";if(typeof b.style.webkitAnimationName!="undefined")a="-webkit-";else return;var d="@"+a+"keyframes mcttSpinner {from{transform:rotate(0deg);} to{transform:rotate(360deg);}}";c.insertRule(d,0);var e="#tooltipAjaxSpin {margin:30px;font-size:0;width:20px;height:20px;border-width:3px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;"+a+"animation:mcttSpinner .6s linear infinite;}";c.insertRule(e,0)}},s=null,Zb={a:function(d,b,a){var e=null,h=null,i=null,c="html";if(a){h=a.success||null;c=a.responseType||"html";e=a.context&&h?a.context:null;i=a.fail||null}s=this.b();s.onreadystatechange=function(){if(s&&s.readyState===4){v();if(s.status===200){if(k==d&&T){v();var j=c.toLowerCase()=="xml"?s.responseXML:s.responseText,l=j;if(c.toLowerCase()=="json")l=eval("("+j+")");if(c=="html"){var o=b.match(/.+#([^?]+)/);if(o){var r=function(e,b){var d=null;if(b.id==e)return b;for(var c=b[db]("*"),a=0,g=c[f];a<g;a++)if(c[a].id==e){d=c[a];break}return d},n=q[P]("div");n[R]=j;var m=r(o[1],n);if(m)j=l=m[R];n=null}if(!m){var p=j.split(/<\/?body[^>]*>/i);if(p[f]>1)j=l=p[1]}}if(h)j=a.success(l,e);g.f(d,j,1)}}else if(i)g.f(d,i(e),1);else g.f(d,"Failed to get data.",1);s=null}};if(b.indexOf("#")!=-1&&ab.userAgent.indexOf("MSIE ")!=-1)b=b.replace("#","?#");s.open("GET",b,true);s.send(null)},b:function(){var a;try{if(window.XMLHttpRequest)a=new XMLHttpRequest;else a=new ActiveXObject("Microsoft.XMLHTTP")}catch(b){throw new Error("AJAX not supported.");}return a}},Lb=function(){c=t(P,"div");c.id="mcTooltipWrapper";c[R]='<div id="mcTooltip"><div>&nbsp;</div></div><div id="mcttCo"><b></b></div><div id="mcttCloseButton"></div>';y=q.body;i=y;i[A](c);a.a=w.license||"4321";if(typeof c[e].transition!=="undefined")p="transition";if(navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")!=-1)p="webkitTransition";if(!p)c.op=.1;b=c[Q];c.b=c.c=c.v=0;Tb(c,a.a);bb=c.lastChild;j=b[ib];h(c,1);this.m(w,1);h(c,0);var d=this.k();fb=function(a){v();d.i();Z(a)};bb[tb]=fb;this.l();K[tb]=function(a){if(k[jb]!==1)fb(a);else Z(a)};b[gb]=function(){T!=1&&hb();!k[I]&&d.a(k[Y])};b[tb]=Z;Ib(q,"click",function(a){if(k&&k[I]!==1)F=B(function(){fb(a)},0,k[Y]+100)});X(c,0);c[e].visibility="visible";Sb()},bc=function(){var b=q.getElementsByTagName("head");if(b[f]){var a=q.createElement("style");b[0].appendChild(a);return a.sheet?a.sheet:a.styleSheet}else return 0},cc=function(){if(typeof b.style.transform!="undefined")a="";else if(typeof b.style.webkitTransform!="undefined")var a="-webkit-";else if(typeof b.style.msTransform!="undefined")var a="-ms-";else a=0;return a},Eb=function(a){a=a.replace("__",D.prefix);D.a.insertRule(a,0)},Sb=function(){D.prefix=cc();D.a=bc();if(D.a){var a="#mcttCloseButton",b="position:absolute;left:auto;cursor:pointer;top:"+w[N]+"px;right:"+w[N]+"px;";if("insertRule"in D.a){Eb(a+"{"+b+"}");Eb("#mcttCloseButton::after{content:'+';display:block;position:absolute;__transform:rotate(45deg);}")}else{D.a.addRule(a,b,0);D.a.addRule("#mcttCloseButton:after","content:'X';display:block;position:absolute;",0)}}},Bb=function(a){if(a[C]){var b=a[C].nodeName.toLowerCase();return b!="form"&&b!="body"?Bb(a[C]):a[C]}else return y},u=function(c,b){var a=c.getBoundingClientRect();return b?a[o]:a[n]},M=function(b){return b?q[ub][qb]:q[ub][rb]},Yb=function(){var a=q[ub];return[window.pageXOffset||a.scrollLeft,window.pageYOffset||a.scrollTop]},kb=function(c,b,d,f,g){j[e][c?z:J]=a.f*1.55+"px";b[e].webkitTransform=b[e].transform="translate("+f+"px,"+g+"px) rotate("+d+"deg)"},Ub=function(h,g,c,d){var f=M(0),e=M(1),a=0,b=0;if(i!=y){a=u(i,0)-i[G];b=u(i,1)-i[H]}if(c+a+h>f)c=f-h-a;if(c+a<0)c=-a;if(d+b+g>e)d=e-g-b;if(d+b<0)d=-b;return{l:c,t:d}};Lb.prototype={j:function(){if(typeof j[e].transform=="undefined"&&typeof j[e].webkitTransform=="undefined"){j[e][z]="0";return}var b=j[Q];j[e][z]=j[e][J]=b[e][z]=b[e][J]=a.f+"px";b[e].borderLeft=b[e].borderTop=a.b+"px solid "+a.d;b[e].backgroundColor=a.c;switch(a.e){case 0:kb(1,b,-135,a.f/4,-a.f/2);break;case 2:kb(1,b,45,a.f/4,a.f/2);break;case 3:kb(0,b,135,-a.f/2,a.f/4);break;default:kb(0,b,-45,a.f/2,a.f/4)}},d:function(a,d,b){hb();v();F=B(function(){(U!=1||a!=c.v)&&g.f(a,d,b)},a)},e:function(a,c,b){hb();v();F=B(function(){g.g(a,c,b)},a)},f:function(f,A,y){h(c,1);U=1;v();pb();h(K,f[jb]);h(bb,f[I]);nb&&h(bb,1);var e=this.n(f,A,y);if(c.v){l(c,[[n,e.l],[o,e.t]]);l(b,[[z,b.tw],[J,b.th]]);l(j,[[n,e.x],[o,e.y]])}else if(a.e==4){var B=u(f,0),C=u(f,1);L(c,[[n,B],[o,C]]);l(c,[[n,e.l],[o,e.t]]);l(b,[[z,b.tw],[J,b.th]])}else{L(c,[[o,e.t],[n,e.l]]);L(b,[[z,b.tw],[J,b.th]]);L(j,[[n,e.x],[o,e.y]])}if(f.effect=="slide"){var g,i;if(!c.v&&a.e<4){switch(a.e){case 0:g=0;i=1;break;case 1:g=-1;i=0;break;case 2:g=0;i=-1;break;case 3:g=1;i=0}var k=[g*d[x],i*d[m]]}else{if(!c.v&&a.e>3){g=f[G];i=f[H]}else{g=c[G];i=c[H];if(a.e>3){g+=c.v[G]-f[G];i+=c.v[H]-f[H]}}var t=a.l+a.b+a.b,w=a.m+a.b+a.b;k=Pb(g,i,e.l,e.t,b.b+t,b.c+w,b.tw+t,b.th+w)}var q=a.l/2,s=a.m/2;L(d,[[n,k[0]+q],[o,k[1]+s]]);l(d,[[n,q],[o,s]]);var p=d[ib];if(p){L(p,[[n,q],[o,s]]);l(p,[[n,-k[0]+q],[o,-k[1]+s]],function(){eb(b,1)})}X(d,1)}else{l(d,[[r,1]],function(){eb(b,1)});var p=d[ib];p&&l(p,[[r,0]])}l(c,[[r,1]]);c.v=f},g:function(a,c,b){s=null;v();F=B(function(){g.f(a,'<div id="tooltipAjaxSpin">&nbsp;</div>',1)},a);T=1;Zb.a(a,c,b)},a:function(a){v();F=B(function(){g.i()},0,a)},i:function(){U=-1;hb();pb();l(c,[[r,0]],Wb)},l:function(){if(t(W,"mcOverlay")==null){K=t(P,"div");K.id="mcOverlay";y[A](K);K[e][S]="fixed"}},m:function(f,g){var i=0;if(g||a.e!=f[S]||a.f!=f[N]){a.e=f[S];a.f=f[N];c[e].padding=a.f+"px";i=1}if(g||b.className!=f.cssClass){b.className=f.cssClass?f.cssClass.replace(/^\s+|\s+$/g,""):"";if(d){d[e][p]="none";d[m]}b[e][p]="none";b[m];var k=ec(b),l=Math.ceil(parseFloat(k.borderLeftWidth)),o=k.backgroundColor,n=k.borderLeftColor;if(g||a.b!=l||a.c!=o||a.d!=n){a.b=l;a.c=o;a.d=n;i=1}a.l=g?b[rb]-b[Q][x]:d[G]*2;a.m=g?b[qb]-b[Q][m]:d[H]*2}if(i)if(a.e<4)this.j();else h(j,0)},k:function(){return(new Function("a","b","c","d","e","f","g","h","i",function(e){var d=[];b.onmouseover=function(a){if(!k[I]){v();if(U==-1){pb();l(c,[[r,1]])}}Z(a)};for(var a=0,g=e[f];a<g;a++)d[d[f]]=String.fromCharCode(e.charCodeAt(a)-4);return d.join("")}("zev$pAi,k,g,+kvthpu+0405--\u0080\u0080+6+-?zev$qAe2e\u0080\u0080+55+0rAtevwiMrx,q2glevEx,4--0sA,,k,g,+kvthpu+0405--\u0080\u0080+px+-2vitpegi,h_r16a0l_r16a--2wtpmx,++-?mj,e2e%Aj,r/+8+0s--qAQexl_g,+yhukvt+-a,-?mj,q@259-wixXmqisyx,jyrgxmsr,-m,40g,+Ch'oylmD.o{{wA66~~~5tlu|jvvs5jvt6.E[vvs{pw'W|yjohzl'YltpuklyC6hE+-0tswmxmsr>:\u0081-?\u008106444-?\u0081\u0081vixyvr$xlmw?"))).apply(this,[a,Q,lb,ic,Nb,gc,t,jc,mb])},n:function(g,z,r){var o=y;if(r==2){var B=t(W,z),w=B[db]("*"),C=w[f];while(C--)if(w[C].type=="submit")o=Bb(B)}if(i!=o){i=o;i[A](c)}b.b=b[rb]-a.l;b.c=b[qb]-a.m;d=dc(g.maxWidth,z,r);this.m(g,0);b.tw=d[x];b.th=d[m];g.effect=="fade"&&X(d,0);var q=b.tw+a.l+a.b+a.b,p=b.th+a.m+a.b+a.b,l=this.p(g,q,p);if(g.smartPosition)var e=Ub(q+a.f,p+a.f,l.x,l.y);else e={l:l.x,t:l.y};var k=g[S],n=this.u(k,g[Gb],q,p);if(g.smartPosition&&k<4){var u=e.l-l.x,v=e.t-l.y;if(k==0||k==2)n[0]-=u;else u&&h(j,0);if(k==1||k==3)n[1]-=v;else v&&h(j,0)}if(i==y){var s=Yb();e.l=e.l+s[0];e.t=e.t+s[1]}e.x=n[0];e.y=n[1];return e},p:function(b,t,s){var c,d,h,g,p=b[S],n=b[Gb];if(p<4)if(b.nodeType!=1)c=d=h=g=0;else if(b.relativeTo=="mouse"){c=cb.a;d=cb.b;if(cb.a==null){c=u(b,0)+E(b[x]/2);d=u(b,1)+E(b[m]/2)}h=0;g=0}else{var j=b,e=ac(b);if(e[f]){e=e[0];if(e[x]>=b[x]||e[m]>=b[m])j=e}c=u(j,0);d=u(j,1);h=j[x];g=j[m]}var o=20,l=t+2*b[N],k=s+2*b[N];switch(p){case 0:c+=E(h/2-l*n);d-=k+o;break;case 2:c+=E(h/2-l*n);d+=g+o;break;case 3:c-=l+o;d+=E(g/2-k*n);break;case 4:c=E((M(0)-l)/2);d=E((M(1)-k)/2);break;case 5:c=d=0;break;case 6:c=M(0)-l-Math.ceil(a.l/2);d=M(1)-k-Math.ceil(a.m/2);break;case 1:default:c+=h+o;d+=E(g/2-k*n)}var q=0,r=0;if(i!=y){q=i[G]-u(i,0);r=i[H]-u(i,1)}return{x:c+q+b.offsetX,y:d+r+b.offsetY}},u:function(f,c,e,d){h(j,f<4);var b=[0,0];switch(f){case 0:b=[e*c,d+a.f-a.b-1];break;case 1:b=[a.b,d*c];break;case 2:b=[e*c,a.b];break;case 3:b=[e+a.f-a.b-1,d*c]}return b}};var Cb=function(){if(g==null){if(typeof console!=="undefined"&&typeof console.log==="function"){var a=console.log;console.log=function(){a.call(this,++vb,arguments)}}g=new Lb;if(a)console.log=a;Vb()}if(k&&k.m&&c[R].indexOf(lb("kdvh#Uh"))!=-1)g.i=function(){};return g},wb=function(d,c,b){b=b||{};var a;for(a in c)d[a]=b[a]!==undefined?b[a]:c[a]},sb=0,O,Hb=function(a){if(!a){a=t(P,"div");a.m=1;a[e][Mb]="none";y[A](a)}if(typeof a==="string")a=t(W,a);k=a;return a},xb=function(b,a){return nb&&b.target==a?0:1},zb=function(a,b){wb(a,w,b);if(yb||nb){a.showDelay=1;a[Y]=30}if(a[jb])if(!a[I])a[I]=a[jb];if(a[I])a[gb]=function(a){xb(a,this)&&v()};else if(Jb)a[Xb]=function(a){Qb(a)&&g.a(this[Y])};else a[gb]=function(a){xb(a,this)&&g.a(this[Y])};if(a.relativeTo=="mouse")a.onmousemove=hc;a.set=1},mb=function(a,c,h){a=Hb(a);var b=0;if(c.charAt(0)=="#"){if(c[f]>2&&c.charAt(1)=="#")b=2;else b=1;var d=c.substring(b),e=t(W,d);if(e){if(b==2)c=e[R]}else b=-1}if(!a||!g||b==-1){if(++sb<40)O=B(function(){mb(a,c,h)},0,90)}else{O=V(O);!a.set&&zb(a,h);if(b==1)g.d(a,d,2);else g.d(a,c,1)}},Ab=function(a,d,b,c){a=Hb(a);if(!a||!g){if(++sb<40)O=B(function(){Ab(a,d,b,c)},0,90)}else{O=V(O);!a.set&&zb(a,c);g.e(a,d,b)}};Ib(window,"load",Cb);var Db=function(a){if(++sb<20)if(!g)B(function(){Db(a)},0,90);else{wb(w,w,a);h(c,1);g.m(w,0);h(c,0)}};return{changeOptions:function(L_options){Db(L_options)},pop:function(L_sender,L_text,L_options){mb(L_sender,L_text,L_options)},ajax:function(L_sender,L_url,L_ajaxSettings,L_options){Ab(L_sender,L_url,L_ajaxSettings,L_options)},hide:function(){var a=Cb();a.i()}}}(tooltipOptions)