(function(){var I={Version:"7.5.5900.27885"},c,A;"undefined"!==typeof window?(c=window.sfx,A=window.cfx):(c=require("./jchartfx.system.js"),A=c.cfx,module.exports=I);A.handdrawn=I;var g=function(){};g.k=function(c,t,k,p,m,l,q,f,a){l=g.j(p/2,l,q);t+=p/2;k+=m/2;for(m=0;m<l.length;m++)l[m].x=l[m].x+t+g.c(f,a),l[m].y=l[m].y+k+g.c(f,a);c.j(l);return l[l.length-1]};g.d=function(x,t,k,p,m,l,q){var f=p-t,a=m-k,b=c.a.d(f),a=c.a.d(a),e=0,d=0,h=0,u=0;20>b||20>a?0!=f?(e=t,d=k+g.b(l,q),h=t,u=k+g.b(l,q)):(e=t+
g.b(l,q),d=k,h=t+g.b(l,q),u=k):(e=(2*t+p)/3,d=(2*k+m)/3,h=(t+2*p)/3,u=(k+2*m)/3,f=g.c(l,1.5*q),l=g.c(l,1.5*q),b>a?(d+=f,u+=l):(e+=f,h+=l));x.i(t,k,e,d,h,u,p,m)};g.j=function(x,t,k){0>t&&(t+=360);t=t*c.a.c/180;k=k*c.a.c/180;var p=t+k,m=!1;0>k&&(k=t,t=p,p=k,m=!0);0>t&&(t+=6.28318530717959,p+=6.28318530717959);var l=t;k=c.a.k(l/1.5707963267949);for(var p=c.a.p(6.28318530717959,p-t),q=1,f=p;1E-5<f;){var a=l+c.a.p(f,1.5707963267949),b=c.a.k(a/1.5707963267949);k!=b&&(a=1.5707963267949*(k+1));q+=3;f-=a-
l;l=a;k=b}f=c.f._ca(q);l=t;k=c.a.k(l/1.5707963267949);t=x*c.a.i(l);var e=x*c.a.t(l),d=0,h=0;m?(h=q-1,d=-1):(h=0,d=1);f[h].x=t;f[h].y=e;for(h+=d;1E-5<p;)a=l+c.a.p(p,1.5707963267949),b=c.a.k(a/1.5707963267949),k!=b&&(a=1.5707963267949*(k+1)),m=x*c.a.i(a),q=x*c.a.t(a),l=a-l,h=g.m(x,l,k,t,e,m,q,f,h,d),p-=l,6.28318530717959<=a&&(b=a=0),l=a,k=b,t=m,e=q;return f};g.m=function(g,t,k,p,m,l,q,f,a,b){var e=1,d=1;3==k?d=-1:2==k?d=e=-1:1==k&&(e=-1);.01>c.a.d(t-1.5707963267949)?(p=.5522847498*g,3==k||1==k?(f[a].x=
p*e,f[a].y=g*d,a+=b,f[a].x=g*e,f[a].y=p*d):(f[a].x=g*e,f[a].y=p*d,a+=b,f[a].x=p*e,f[a].y=g*d)):(g=p*p+m*m,k=g+p*l+m*q,g=1.333333*(c.a.u(2*g*k)-k)/(p*q-m*l),f[a].x=p-g*m,f[a].y=m+g*p,a+=b,f[a].x=l+g*q,f[a].y=q-g*l);a+=b;f[a].x=l;f[a].y=q;return a+b};g.h=function(x,t,k,p,m,l,q,f){var a=(new c.aA)._0aA();g.k(a,x,t,k,p,m,l,q,f);return a};g.l=function(x,t,k,p,m,l){var q=(new c.aA)._0aA(),f=c.f._ca(13);f[0]._i1(k,p/2);f[1]._i1(g.a(1,m,l,k),g.a(.775,m,l,p));f[2]._i1(g.a(.775,m,l,k),g.a(1,m,l,p));f[3]._i1(g.a(.5,
m,l,k),g.a(1,m,l,p));f[4]._i1(g.a(.225,m,l,k),g.a(1,m,l,p));f[5]._i1(g.a(0,m,l,k),g.a(.775,m,l,p));f[6]._i1(g.a(0,m,l,k),g.a(.5,m,l,p));f[7]._i1(g.a(0,m,l,k),g.a(.225,m,l,p));f[8]._i1(g.a(.225,m,l,k),g.a(0,m,l,p));f[9]._i1(g.a(.5,m,l,k),g.a(0,m,l,p));f[10]._i1(g.a(.775,m,l,k),g.a(0,m,l,p));f[11]._i1(g.a(1,m,l,k),g.a(.225,m,l,p));f[12]._i1(k,p/2);for(k=0;k<f.length;k++)f[k].x+=x,f[k].y+=t;q.j(f);return q};g.f=function(x,t,k,p,m,l,q){var f=(new c.aA)._0aA(),a=0,b=!0;5>c.a.d(x-k)?b=70<c.a.d(t-p):5>c.a.d(t-
p)&&(b=70<c.a.d(x-k));b&&(a=g.c(m,q),g.c(m,q));g.d(f,x,t,k+a,p+a,m,l);return f};g.e=function(x,t,k){var p=!1;if(D.Q&&void 0!==x._reuse){p=x._hdclone;if(void 0!==p)return p;p=!0}x.hasArcs=!1;var m=x.c();if(null==m||0==m.length)return x;for(var l=x.d(),q=(new c.aA)._0aA(),f=m[0]._nc(),a=0,a=0==l[0]?1:0;a<l.length;){var b=m[a]._nc(),e=l[a]&15;if(1==e||0==e)0==e&&0!=a?q.H():g.d(q,f.x,f.y,b.x,b.y,t,k),a++,f._cf(b);else if(3==e){var e=m[a+1]._nc(),d=m[a+2]._nc();b.x+=g.b(t,k);b.y+=g.b(t,k);e.x+=g.b(t,k);
e.y+=g.b(t,k);d.x+=g.b(t,k-.5);d.y+=g.b(t,k-.5);q.i(f.x,f.y,b.x,b.y,e.x,e.y,d.x,d.y);f._cf(d);a+=3}else 4==e&&(e=m[a+1],d=m[a+2],f._cf(g.k(q,b.x,b.y,e.x,e.y,d.x,d.y,t,k)),a+=3)}0!=(l[l.length-1]&128)&&q.E();p&&(q._reuse=!0,x._hdclone=q);return q};g.g=function(x,t,k,p,m,l,q,f){if(k<=f)return g.f(x,t,x,t+p,m,l,0);if(p<=f)return g.f(x,t,x+k,t,m,l,0);f=c.a.p(k/2,q+m.d()*l);var a=c.a.p(k/2,q+m.d()*l),b=c.a.p(k/2,q+m.d()*l),e=c.a.p(k/2,q+m.d()*l),d=c.a.p(p/2,q+m.d()*l),h=c.a.p(p/2,q+m.d()*l),u=c.a.p(p/
2,q+m.d()*l),r=c.a.p(p/2,q+m.d()*l);q=(new c.aA)._0aA();var n=c.f._ca(25);n[0]._i1(0,d);n[1]._i1(0,d/2);n[2]._i1(f/2,0);n[3]._i1(f,0);n[4]._i1(k/2,g.b(m,l));n[5]._i1(k/2,g.b(m,l));n[6]._i1(k-a,0);n[7]._i1(k-a/2,0);n[8]._i1(k,h/2);n[9]._i1(k,h);n[10]._i1(g.a(1,m,l,k),p/2);n[11]._i1(g.a(1,m,l,k),p/2);n[12]._i1(k,p-r);n[13]._i1(k,p-r/2);n[14]._i1(k-e/2,p);n[15]._i1(k-e,p);n[16]._i1(k/2,g.a(1,m,l,p));n[17]._i1(k/2,g.a(1,m,l,p));n[18]._i1(b,p);n[19]._i1(b/2,p);n[20]._i1(0,p-u/2);n[21]._i1(0,p-u);n[22]._i1(g.b(m,
l),p/2);n[23]._i1(g.b(m,l),p/2);n[24]._i1(0,d);for(k=0;k<n.length;k++)n[k].x+=x,n[k].y+=t;q.j(n);return q};g.c=function(c,g){return 2*c.d()*g-g};g.a=function(c,g,k,p){var m=g.d();1!=g.b()%3&&(m*=-1);return p*c+m*k};g.b=function(c,g){var k=c.d();1!=c.b()%3&&(k*=-1);return k*g};var E=function t(){t._ic();this.a=this.i=0;this.e=!1;this.d=this.f=null};E.prototype={_0dO:function(){this.b=new c.c;return this},sg:function(c){this.f=c.b()},sj:function(c){this.d=null==c?null:c.n()},l:function(c,k){},h:function(c){this.b.x=
c.x;this.b.y=c.y;this.b.w=c.w;this.b.h=c.h}};E._dt("CWHR",c.SA,0);var J=function k(){k._ic();this.m=this.o=null;this.p=0;this.n=null;this.q=this.r=0};J.prototype={_0dP:function(){this._bc._0dO.call(this);this.u=new c.d;return this},sv:function(c){this.o=null==c?null:c.k()},st:function(k){this.m=new c.at;this.m.sb(k.b());this.m.sd(k.d())},k:function(c,g,m){1<=m&&(0==this.p?c.idE(this.n,this.o,this.f,this.r,this.q,this.m):1==this.p&&c.idC(this.n,this.o,this.f,this.u,this.m))}};J._dt("CWHR",E,0);var K=
function p(){p._ic();this.m=this.n=0};K.prototype={_0dQ:function(){this._bc._0dO.call(this);this.e=!0;return this},k:function(c,g,l){switch(this.n){case 0:c.side(this.m)}}};K._dt("CWHR",E,0);var M=function m(){m._ic()};M.prototype={_0dR:function(g,l,q){this._bc._0dO.call(this);this.m=new c.d;this.m._cf(g);this.a=1;null!=l?(this.sg(l),this.e=!0):this.sj(q);return this},l:function(c,g){0==this.b.w&&this.h(this.m);g._cf(this.b)},k:function(c,g,q){null!=this.d?c.idz(this.d,this.m):c.idP(this.f,this.m)}};
M._dt("CWHR",E,0);var G=function l(){l._ic()};G.prototype={_0dS:function(c,g,f){this._bc._0dO.call(this);this.m=c.D();null!=g?(this.sg(g),this.a=1,this.e=!0):(this.sj(f),this.a=this.m.c().length,this.e=50<this.a);return this},l:function(c,g){0==this.b.w&&this.h(this.m.F());g._cf(this.b)},k:function(g,q,f){f=this.m;if(q<this.a){f=(new c.aA)._0aA();for(var a=this.m.d(),b=this.m.c(),e=0,d=(new c.f)._01e(0,0),h=new c.f;e<q;e++){var u=a[e];h._cf(b[e]);0==u?d._cf(h):1==u?(f.r(d,h),d._cf(h)):3==u&&(u=b[e+
2],f.h(d,h,b[e+1],u),d._cf(u),e+=2)}}null!=this.d?g.idr(this.d,f):g.idK(this.f,f);f!=this.m&&f._d()}};G._dt("CWHR",E,0);var H=function q(){q._ic();this.m=null};H.prototype={_0dT:function(c){this._bc._0dO.call(this);this.e=!0;null!=c&&(this.m=c.b());return this},l:function(c,f){null!=this.m&&(0==this.b.w&&this.h(this.m.c(c)),f._cf(this.b))},k:function(c,f,a){c.sida(this.m)}};H._dt("CWHR",E,0);var L=function f(){f._ic();this.j=this.k=this.l=null;this.i=0;this.h=!1;this.c=this.g=0};L.prototype={_0dU:function(f){this.a=
(new c._L)._0_L();this.b=f;this.f=this.d=-1;return this},ic_:function(){return 0},sic_:function(f){},ida:function(){return this.l},sida:function(f){this.l=f;f=(new H)._0dT(f);this.a.Si(f)},idb:function(){return this.j},sidb:function(f){this.j=f},idc:function(){return this.k},sidc:function(f){this.k=f},idd:function(){return this.b.idd()},sidd:function(f){this.b.sidd(f)},ide:function(){return this.g},side:function(f){this.g=f;var a=(new K)._0dQ();a.n=0;a.m=f;this.a.Si(a)},idf:function(){throw new c.T;
},sidf:function(f){throw new c.T;},_d:function(){throw new c.T;},idg:function(f,a,b,e,d,h,g){throw new c.T;},idi:function(f,a,b,e,d){throw new c.T;},idj:function(f,a,b,e,d){throw new c.T;},idk:function(f,a,b,e,d){throw new c.T;},idl:function(f,a){throw new c.T;},idm:function(f,a,b){throw new c.T;},idn:function(f,a,b,e,d,h,g,r){throw new c.T;},idp:function(f,a,b,e,d){throw new c.T;},idq:function(f,a,b,e,d){throw new c.T;},idr:function(f,a){var b=(new G)._0dS(a,null,f);this.c+=b.a;this.a.Si(b)},ids:function(f,
a,b,e){throw new c.T;},idt:function(f,a){throw new c.T;},idu:function(f,a){throw new c.T;},idv:function(f,a){throw new c.T;},idw:function(f,a){throw new c.T;},idx:function(f,a){throw new c.T;},idy:function(f,a){throw new c.T;},idz:function(f,a){throw new c.T;},idA:function(f,a,b,e,d){throw new c.T;},idB:function(f,a,b,e,d){throw new c.T;},idC:function(f,a,b,e,d){var h=(new J)._0dP();h.n=f;h.sv(a);h.sg(b);h.st(d);h.u._cf(e);h.p=1;this.a.Si(h);this.b.idC(f,a,b,e,d)},idD:function(f,a,b,e,d,h){var c=
(new J)._0dP();c.n=f;c.sv(a);c.sg(b);c.st(h);c.r=e;c.q=d;this.a.Si(c);this.b.idD(f,a,b,e,d,h)},idE:function(f,a,b,e,d,h){this.idD(f,a,b,e,d,h)},idF:function(f,a,b,e,d,h){throw new c.T;},idH:function(f,a,b,e,d,h,g){throw new c.T;},idI:function(f,a,b,e,d){throw new c.T;},idJ:function(f,a,b,e,d){throw new c.T;},idK:function(f,a){var b=(new G)._0dS(a,f,null);this.c+=b.a;this.a.Si(b)},idL:function(f,a,b,e){throw new c.T;},idM:function(f,a){throw new c.T;},idN:function(f,a){throw new c.T;},idO:function(f,
a){this.e(f,c.d.r(a))},idP:function(f,a){this.e(f,a)},idQ:function(f,a,b,e,d){this.e(f,(new c.d)._02c(a,b,e,d))},idR:function(f,a,b,e,d){this.e(f,(new c.d)._02c(a,b,e,d))},e:function(f,a){var b=(new M)._0dR(a,f,null);this.c+=b.a;this.a.Si(b)},idS:function(f){return this.b.idS(f)},n:function(f,a){var b=1<=f;this.f=-1;if(-1!=this.d){var e=this.d+1;if(e<this.a.Se()){var d=this.c*f,h=this.a.So(e);10>h.a||!b||!(this.i+h.a>d||b)||(b=h,-1!=h.i&&(b=this.a.So(h.i)),b.l(this.b.idd(),a),this.f=e)}}},idT:function(f,
a){return this.b.idT(f,a)},idU:function(f,a,b){return this.b.idU(f,a,b)},m:function(f,a){if(!this.h){this.h=!0;for(var b=this.a.Se(),e=0,d=0;d<b;d++){var h=this.a.So(d);h.e||(d!=e&&(this.a.Sn(d),this.a.Sl(e,h)),e++)}e=-1;for(d=0;d<b;d++)h=this.a.So(d),c.V.E(h,H)?e=d:h.i=e}for(var b=0,d=this.c*a,e=0,g=this.a.A,r=g.length,n=0;n<r;n++){h=g[n];h.k(f,d-b,a);b+=h.a;if(b>d)break;this.d=e;this.i=b;e++}},idW:function(f,a){throw new c.T;},idX:function(f,a,b){throw new c.T;},idY:function(f,a,b){throw new c.T;
}};L._dt("CWHR",c.SA,0,A.ic$,c.Su);var D=function a(){a._ic();this.B=null;this.H=0;this.p=!1;this.G=null;this.o=this.h=this.c=0;this.z=this.A=null;this.n=0;this.y=null;this.g=!1;this.E=this.a=this.F=null;this.e=0;this.x=this.l=!1;this.b=null;this.k=0;this.j=null;this.d=this.i=0;this.w=null;this._0_1()};I.HandDrawn=D;D.prototype={_0_1:function(){this.b=0!=D.m?(new c.U)._01U(D.m):new c.U;this.e=this.d=this.c=this.k=3;this.g=!0;this.n=3;this.h=.25;this.o=20;this.w=(new c.ar)._0ar(c.m.l(0,255,255,255));
this.i=1;return this},ic_:function(){var a=1;this.g&&(a|=128);this.F.st&&(a|=8);return a|52},sic_:function(a){this.p=0!=(a&1024)},ida:function(){return this.a.ida()},sida:function(a){this.a.sida(a)},idb:function(){return this.E},sidb:function(a){this.E=a;this.F.CH(a)},idc:function(){return this.G},sidc:function(a){this.x?this.x=!1:this.l=!1;"number"==typeof a&&(a=null);this.G=a;var b=c.V.C(a,A.ifi);null!=b&&(b=b.ifj(2),"Border"==b||"PlotArea"==b?this.l=!0:"BorderNext"==b&&(this.x=this.l=!0));this.F.CO(a)},
getFillStrokeAngle:function(){return this.o},setFillStrokeAngle:function(a){this.o=a;this.f()},getFillStrokeCurvePercentage:function(){return this.h},setFillStrokeCurvePercentage:function(a){this.h=a;this.f()},getFillStrokeThickness:function(){return this.n},setFillStrokeThickness:function(a){this.n=a;this.f()},getFillWithStrokes:function(){return this.g},setFillWithStrokes:function(a){this.g=a;this.f()},idd:function(){return this.F},sidd:function(a){this.F=a;this.a=(new A.bm)._0bm(a)},getMessiness:function(){return this.e},
setMessiness:function(a){this.e=a;this.f()},getRandomness:function(){return this.k},setRandomness:function(a){this.c=this.k=a;this.f()},ide:function(){return this.a.ide()},side:function(a){this.a.side(a)},getStrokeOffsetRandomness:function(){return this.d},setStrokeOffsetRandomness:function(a){this.d=a;this.f()},idf:function(){return this.a.idf()},sidf:function(a){this.a.sidf(a);this.i=null==a?1:a.b()[0];this.O()},icq:function(a){this.B=c.V.C(a,A.iQ);return!0},O:function(){this.c=this.k/this.i},u:function(){var a=
(new c.aA)._0aA();a.Z=!1;return a},_d:function(){},idg:function(a,b,e,d,h,c,g){this.T(a,b,e,d,h,c,g)},T:function(a,b,e,d,h,u,r){var n=this.e,z=this.c;if(10>=d||10>=h)z=n=2;for(var v=0,v=1>=n&&0==this.d?1:c.a.o(n,1),n=0;n<v;n++){var y=g.h(b,e,d,h,u,r,this.b,z);this.a.idr(a,y);y._d()}},idi:function(a,b,e,d,c){this.a.idi(a,b,e,d,c)},idj:function(a,b,e,d,c){this.N(a,b,e,d,c)},idk:function(a,b,e,d,c){this.N(a,b,e,d,c)},N:function(a,b,e,d,h){var u=this.e,r=this.c;if(10>=d||10>=h)r=u=2;for(var n=0,n=1>=
u&&0==this.d?1:c.a.o(u,1),u=0;u<n;u++){var z=g.l(b,e,d,h,this.b,r);this.a.idr(a,z);z._d()}},idl:function(a,b){this.a.idl(a,b)},idm:function(a,b,e){this.a.idm(a,b,e)},idn:function(a,b,e,d,c,g,r,n){this.a.idn(a,b,e,d,c,g,r,n)},idp:function(a,b,e,d,c){this.M(a,b,e,d,c)},idq:function(a,b,e,d,c){this.M(a,b,e,d,c)},M:function(a,b,e,d,h){for(var u=0,u=1>=this.e&&0==this.d?1:c.a.o(this.e,1),r=0;r<u;r++){var n=g.f(b,e,d,h,this.b,this.c,this.d);this.a.idr(a,n);n._d()}},t:function(a,b,e){if(1>=this.e&&0==this.d){for(var d=
this.u(),h=b[0]._nc(),u=1;u<b.length;u++){var r=b[u]._nc();g.d(d,h.x,h.y,r.x,r.y,this.b,this.c);h._cf(r)}e&&(r=b[0]._nc(),g.d(d,h.x,h.y,r.x,r.y,this.b,this.c));this.a.idr(a,d);d._d()}else for(var n=c.a.o(this.e,1),u=0;u<n;u++){for(var d=this.u(),h=b[0]._nc(),z=-1,v=1;v<b.length;)r=b[v]._nc(),g.d(d,h.x,h.y,r.x,r.y,this.b,this.c),h._cf(r),v++,v<b.length&&0<this.d&&3<=v-z&&.7<this.b.d()&&(this.a.idr(a,d),d._d(),d=this.u(),h.x+=g.c(this.b,this.d),h.y+=g.c(this.b,this.d),z=v);e&&(r=b[0]._nc(),g.d(d,h.x,
h.y,r.x,r.y,this.b,this.c));this.a.idr(a,d);d._d()}},idr:function(a,b){for(var e=this.e,d=0,d=1>=e&&0==this.d?1:c.a.o(e,1),e=0;e<d;e++){var h=g.e(b,this.b,this.c);this.a.idr(a,h);h!=b&&h._d()}},ids:function(a,b,e,d){this.a.ids(a,b,e,d)},idt:function(a,b){this.t(a,b,!0)},idu:function(a,b){this.t(a,b,!0)},idv:function(a,b){for(var e=b.length,d=1;d<e;d++)this.a.idp(a,b[d-1].x,b[d-1].y,b[d].x,b[d].y);this.a.idp(a,b[e-1].x,b[e-1].y,b[0].x,b[0].y)},idw:function(a,b){this.t(a,b,!1)},idx:function(a,b){this.t(a,
b,!1)},idy:function(a,b){this.r(a,b.x,b.y,b.w,b.h)},idz:function(a,b){this.r(a,b.x,b.y,b.w,b.h)},idA:function(a,b,e,d,c){this.r(a,b,e,d,c)},idB:function(a,b,e,d,c){this.r(a,b,e,d,c)},r:function(a,b,e,d,h){for(var u=this.e,r=0,r=1>=u&&0==this.d?1:c.a.o(u,1),u=0;u<r;u++){var n=g.g(b,e,d,h,this.b,this.c,0,1);this.a.idr(a,n);n._d()}},idC:function(a,b,e,d,c){this.a.idC(a,b,e,d,c)},idD:function(a,b,e,d,c,g){this.a.idD(a,b,e,d,c,g)},idE:function(a,b,e,d,c,g){this.a.idE(a,b,e,d,c,g)},idF:function(a,b,e,d,
c,g){this.a.idF(a,b,e,d,c,g)},idH:function(a,b,e,d,c,g,r){this.a.idH(a,b,e,d,c,g,r)},idI:function(a,b,e,d,c){this.L(a,b,e,d,c)},idJ:function(a,b,e,d,c){this.L(a,b,e,d,c)},L:function(a,b,e,d,c){b=g.h(b,e,d,c,0,360,this.b,this.c);this.K(a,b,b);b._d()},idK:function(a,b){this.R(a,b)},R:function(a,b){var c=g.e(b,this.b,this.c);this.K(a,b,c);c!=b&&c._d()},K:function(a,b,e){var d=!0;if(this.g&&!this.p){b.hasArcs=!1;var g=b.c();null!=g&&0!=g.length&&(b=b.d(),g=this.I(g,b),this.v(a,g.x,g.y,g.w,g.h)&&(d=this.a.ida(),
this.a.sida((new c.aq)._01aq(e)),this.D(a,g.x,g.y,g.w,g.h,this.b),this.a.sida(d),d=!1))}d&&this.a.idK(a,e)},idL:function(a,b,c,d){this.a.idL(a,b,c,d)},idM:function(a,b){this.J(a,b)},idN:function(a,b){this.J(a,b)},J:function(a,b){var e=this.P(b);if(this.g&&!this.p){var d=this.I(b,null);if(this.v(a,d.x,d.y,d.w,d.h)){var h=this.a.ida();this.a.sida((new c.aq)._01aq(e));this.D(a,d.x,d.y,d.w,d.h,this.b);this.a.sida(h);return}}d=g.e(e,this.b,this.c);this.a.idK(a,d);d!=e&&d._d()},idO:function(a,b){this.q(a,
b.x,b.y,b.w,b.h,this.b)},idP:function(a,b){this.q(a,b.x,b.y,b.w,b.h,this.b)},idQ:function(a,b,c,d,g){this.q(a,b,c,d,g,this.b)},idR:function(a,b,c,d,g){this.q(a,b,c,d,g,this.b)},q:function(a,b,c,d,h,u){this.v(a,b,c,d,h)?this.D(a,b,c,d,h,u):(b=g.g(b,c,d,h,this.b,this.c,0,1),this.a.idK(a,b),b._d())},D:function(a,b,e,d,h,u){if(0!=d&&0!=h){var r=this.n,n=this.o,z=null;if(4>h)n=0,r=1,null==this.A&&(this.A=this.C(0)),z=this.A;else if(4>d)n=90,r=1,null==this.y&&(this.y=this.C(90)),z=this.y;else{if(n!=this.H||
null==this.z)this.z=this.C(n);z=this.z}a=(new c.ao)._02ao(a,r);a.sj(2);b+=.6*r;d-=1.6*r;h-=r;for(var v=b,y=e+2*r,D=b+d,A=e+h,w=0,B=0,C=0,F=0,E=!0,J=z.length,G=this.u(),F=C=0,H=.8*r,I=.6*r,K=r,M=0!=this.h&&1!=this.h,L=1==this.h,O=0,P=0;800>P;P++){B=u.b()%J;if(E){w=v+d;B=y-d*z[B];B<e&&(C=(B-y)/(w-v),F=y-C*v,B=e,w=(e-F)/C);w>D&&(C=(B-y)/(w-v),F=y-C*v,w=D,B=C*w+F);var C=w,F=B,N=this.b.d();.15>N?w=w+I+this.b.d()*H:.85>N&&(w-=this.b.d()*H)}else w=v-d,B=y+d*z[B],w<b&&(C=(B-y)/(w-v),F=y-C*v,w=b,B=C*w+F),
B>A&&(C=(B-y)/(w-v),F=y-C*v,B=A,w=(B-F)/C),C=w,F=B,N=this.b.d(),.15>N?w-=I+this.b.d()*H:.85>N&&(w+=this.b.d()*H);if(B>=A&&w>=D&&0!=O)break;M&&(L=u.d()<this.h);L?g.d(G,v,y,w,B,this.b,this.c):G.u(v,y,w,B);O++;v=C;y=F;E?(w=1.2*r*this.b.d(),1>w&&(w=1),y+=w):(C>=w&&(y+=1.2*r*this.b.d()),v+=this.b.d()*(r-1));E=!E;if(c.a.d(y-A)<K&&c.a.d(v-D)<K)break;if(0==n&&y>A)break}0!=(this.a.ic_()&8)?(u=this.a.idc(),this.a.sidc(null),this.a.idR(this.w,b,e,d,h),this.a.sidc(u)):this.a.idR(this.w,b,e,d,h);this.a.idr(a,
G);G._d();a._d()}},idS:function(a){return this.a.idS(a)},I:function(a,b){var e=0,d=0,h=0,u=0,r=0;null==b||4!=b[0]?(e=a[0].x,h=a[0].y,d=e,u=h,r=1):(e=h=c.C.b,d=u=c.C.c,r=0);for(;r<a.length;r++){var n=a[r]._nc();if(null!=b&&4==b[r]){var z=a[r+1],v=a[r+2],y=z.x/2,A=n.x+y,z=n.y+z.y/2,v=g.j(y,v.x,v.y);A<e&&(e=A);A>d&&(d=A);z<h&&(h=z);z>u&&(u=z);for(y=0;y<v.length;y++)n._cf(v[y]),n.x+=A,n.y+=z,n.x<e?e=n.x:n.x>d&&(d=n.x),n.y<h?h=n.y:n.y>u&&(u=n.y);n.x=A;n.y=z;r+=2}n.x<e?e=n.x:n.x>d&&(d=n.x);n.y<h?h=n.y:
n.y>u&&(u=n.y)}return(new c.d)._02c(e,h,d-e,u-h)},C:function(a){this.H=a;var b=Array(5);a=.0174532925199433*a-.03490658;for(var e=0;e<b.length;e++)b[e]=c.a.t(a),a+=.01745329;return b},ic8:function(a,b){this.j.n(a,b)},idT:function(a,b){return this.a.idT(a,b)},idU:function(a,b,c){return this.a.idU(a,b,c)},P:function(a){var b=(new c.aA)._0aA();b.A(a);return b},ic9:function(a){0==a||null==this.j?this.j=(new L)._0dU(this.a):this.j.m(this.a,a);1>a&&(this.a=this.j)},f:function(){null!=this.B&&this.B.iag(1048608)},
idW:function(a,b){this.a.idW(a,b)},idX:function(a,b,c){this.i*=a;this.O();this.a.idX(a,b,c)},v:function(a,b,e,d,g){if(!this.g||this.l||this.p)return!1;a=c.V.D(a,c.ar);return null==a||0==a.j().a||16>d&&16>g?!1:!0},idY:function(a,b,c){this.a.idY(a,b,c)}};D.m=0;D.reusePaths=function(a){D.Q=a};D.useRandomSeed=function(a){D.m=a};D._dt("CWHH",c.SA,0,A.icp,A.ic7,A.ic$,c.Su)})();