// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
speclj.components.SpecComponent = function(){};

var speclj$components$SpecComponent$install$dyn_21200 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.components.install[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4429__auto__.call(null,this$,description));
} else {
var m__4426__auto__ = (speclj.components.install["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4426__auto__.call(null,this$,description));
} else {
throw cljs.core.missing_protocol("SpecComponent.install",this$);
}
}
});
speclj.components.install = (function speclj$components$install(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$components$SpecComponent$install$arity$2 == null)))))){
return this$.speclj$components$SpecComponent$install$arity$2(this$,description);
} else {
return speclj$components$SpecComponent$install$dyn_21200(this$,description);
}
});

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__21201 = cljs.core.seq(cljs.core.seq(this$__$1));
var chunk__21202 = null;
var count__21203 = (0);
var i__21204 = (0);
while(true){
if((i__21204 < count__21203)){
var component = chunk__21202.cljs$core$IIndexed$_nth$arity$2(null,i__21204);
speclj.components.install(component,description);


var G__21217 = seq__21201;
var G__21218 = chunk__21202;
var G__21219 = count__21203;
var G__21220 = (i__21204 + (1));
seq__21201 = G__21217;
chunk__21202 = G__21218;
count__21203 = G__21219;
i__21204 = G__21220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21201);
if(temp__5804__auto__){
var seq__21201__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21201__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21201__$1);
var G__21221 = cljs.core.chunk_rest(seq__21201__$1);
var G__21222 = c__4556__auto__;
var G__21223 = cljs.core.count(c__4556__auto__);
var G__21224 = (0);
seq__21201 = G__21221;
chunk__21202 = G__21222;
count__21203 = G__21223;
i__21204 = G__21224;
continue;
} else {
var component = cljs.core.first(seq__21201__$1);
speclj.components.install(component,description);


var G__21225 = cljs.core.next(seq__21201__$1);
var G__21226 = null;
var G__21227 = (0);
var G__21228 = (0);
seq__21201 = G__21225;
chunk__21202 = G__21226;
count__21203 = G__21227;
i__21204 = G__21228;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.List.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__21205 = cljs.core.seq(cljs.core.seq(this$__$1));
var chunk__21206 = null;
var count__21207 = (0);
var i__21208 = (0);
while(true){
if((i__21208 < count__21207)){
var component = chunk__21206.cljs$core$IIndexed$_nth$arity$2(null,i__21208);
speclj.components.install(component,description);


var G__21229 = seq__21205;
var G__21230 = chunk__21206;
var G__21231 = count__21207;
var G__21232 = (i__21208 + (1));
seq__21205 = G__21229;
chunk__21206 = G__21230;
count__21207 = G__21231;
i__21208 = G__21232;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21205);
if(temp__5804__auto__){
var seq__21205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21205__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21205__$1);
var G__21233 = cljs.core.chunk_rest(seq__21205__$1);
var G__21234 = c__4556__auto__;
var G__21235 = cljs.core.count(c__4556__auto__);
var G__21236 = (0);
seq__21205 = G__21233;
chunk__21206 = G__21234;
count__21207 = G__21235;
i__21208 = G__21236;
continue;
} else {
var component = cljs.core.first(seq__21205__$1);
speclj.components.install(component,description);


var G__21237 = cljs.core.next(seq__21205__$1);
var G__21238 = null;
var G__21239 = (0);
var G__21240 = (0);
seq__21205 = G__21237;
chunk__21206 = G__21238;
count__21207 = G__21239;
i__21208 = G__21240;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__21209 = cljs.core.seq(cljs.core.seq(this$__$1));
var chunk__21210 = null;
var count__21211 = (0);
var i__21212 = (0);
while(true){
if((i__21212 < count__21211)){
var component = chunk__21210.cljs$core$IIndexed$_nth$arity$2(null,i__21212);
speclj.components.install(component,description);


var G__21241 = seq__21209;
var G__21242 = chunk__21210;
var G__21243 = count__21211;
var G__21244 = (i__21212 + (1));
seq__21209 = G__21241;
chunk__21210 = G__21242;
count__21211 = G__21243;
i__21212 = G__21244;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21209);
if(temp__5804__auto__){
var seq__21209__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21209__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21209__$1);
var G__21245 = cljs.core.chunk_rest(seq__21209__$1);
var G__21246 = c__4556__auto__;
var G__21247 = cljs.core.count(c__4556__auto__);
var G__21248 = (0);
seq__21209 = G__21245;
chunk__21210 = G__21246;
count__21211 = G__21247;
i__21212 = G__21248;
continue;
} else {
var component = cljs.core.first(seq__21209__$1);
speclj.components.install(component,description);


var G__21249 = cljs.core.next(seq__21209__$1);
var G__21250 = null;
var G__21251 = (0);
var G__21252 = (0);
seq__21209 = G__21249;
chunk__21210 = G__21250;
count__21211 = G__21251;
i__21212 = G__21252;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__21213 = cljs.core.seq(cljs.core.seq(this$__$1));
var chunk__21214 = null;
var count__21215 = (0);
var i__21216 = (0);
while(true){
if((i__21216 < count__21215)){
var component = chunk__21214.cljs$core$IIndexed$_nth$arity$2(null,i__21216);
speclj.components.install(component,description);


var G__21253 = seq__21213;
var G__21254 = chunk__21214;
var G__21255 = count__21215;
var G__21256 = (i__21216 + (1));
seq__21213 = G__21253;
chunk__21214 = G__21254;
count__21215 = G__21255;
i__21216 = G__21256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21213);
if(temp__5804__auto__){
var seq__21213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21213__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21213__$1);
var G__21257 = cljs.core.chunk_rest(seq__21213__$1);
var G__21258 = c__4556__auto__;
var G__21259 = cljs.core.count(c__4556__auto__);
var G__21260 = (0);
seq__21213 = G__21257;
chunk__21214 = G__21258;
count__21215 = G__21259;
i__21216 = G__21260;
continue;
} else {
var component = cljs.core.first(seq__21213__$1);
speclj.components.install(component,description);


var G__21261 = cljs.core.next(seq__21213__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__21213 = G__21261;
chunk__21214 = G__21262;
count__21215 = G__21263;
i__21216 = G__21264;
continue;
}
} else {
return null;
}
}
break;
}
}));

goog.object.set(speclj.components.SpecComponent,"null",true);

goog.object.set(speclj.components.install,"null",(function (this$,description){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Oops!  It looks like you tried to add 'nil' to a spec.  That's probably not what you wanted.",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(speclj.components.SpecComponent,"object",true);

goog.object.set(speclj.components.install,"object",(function (this$,description){
return null;
}));

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Description = (function (name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
this.name = name;
this.is_focused_QMARK_ = is_focused_QMARK_;
this.has_focus_QMARK_ = has_focus_QMARK_;
this.ns = ns;
this.parent = parent;
this.children = children;
this.characteristics = characteristics;
this.tags = tags;
this.befores = befores;
this.before_alls = before_alls;
this.afters = afters;
this.after_alls = after_alls;
this.withs = withs;
this.with_alls = with_alls;
this.arounds = arounds;
this.around_alls = around_alls;
});
(speclj.components.Description.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(this$__$1.parent,description);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.children,cljs.core.conj,this$__$1);
}));

(speclj.components.Description.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["Description: ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Description.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$is_DASH_focused_QMARK_,cljs.core.cst$sym$has_DASH_focus_QMARK_,cljs.core.cst$sym$ns,cljs.core.cst$sym$parent,cljs.core.cst$sym$children,cljs.core.cst$sym$characteristics,cljs.core.cst$sym$tags,cljs.core.cst$sym$befores,cljs.core.cst$sym$before_DASH_alls,cljs.core.cst$sym$afters,cljs.core.cst$sym$after_DASH_alls,cljs.core.cst$sym$withs,cljs.core.cst$sym$with_DASH_alls,cljs.core.cst$sym$arounds,cljs.core.cst$sym$around_DASH_alls], null);
}));

(speclj.components.Description.cljs$lang$type = true);

(speclj.components.Description.cljs$lang$ctorStr = "speclj.components/Description");

(speclj.components.Description.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/Description");
}));

/**
 * Positional factory function for speclj.components/Description.
 */
speclj.components.__GT_Description = (function speclj$components$__GT_Description(name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
return (new speclj.components.Description(name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls));
});

speclj.components.new_description = (function speclj$components$new_description(name,is_focused_QMARK_,ns){
return (new speclj.components.Description(name,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(is_focused_QMARK_),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),ns,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
});
speclj.components.is_description_QMARK_ = (function speclj$components$is_description_QMARK_(component){
return (component instanceof speclj.components.Description);
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Characteristic = (function (name,parent,body,is_focused_QMARK_){
this.name = name;
this.parent = parent;
this.body = body;
this.is_focused_QMARK_ = is_focused_QMARK_;
});
(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(this$__$1.parent,description);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.characteristics,cljs.core.conj,this$__$1);
}));

(speclj.components.Characteristic.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Characteristic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$parent,cljs.core.cst$sym$body,cljs.core.cst$sym$is_DASH_focused_QMARK_], null);
}));

(speclj.components.Characteristic.cljs$lang$type = true);

(speclj.components.Characteristic.cljs$lang$ctorStr = "speclj.components/Characteristic");

(speclj.components.Characteristic.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/Characteristic");
}));

/**
 * Positional factory function for speclj.components/Characteristic.
 */
speclj.components.__GT_Characteristic = (function speclj$components$__GT_Characteristic(name,parent,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,parent,body,is_focused_QMARK_));
});

speclj.components.new_characteristic = (function speclj$components$new_characteristic(var_args){
var G__21266 = arguments.length;
switch (G__21266) {
case 3:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3 = (function (name,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),body,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(is_focused_QMARK_)));
}));

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$4 = (function (name,description,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(description),body,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(is_focused_QMARK_)));
}));

(speclj.components.new_characteristic.cljs$lang$maxFixedArity = 4);

speclj.components.is_characteristic_QMARK_ = (function speclj$components$is_characteristic_QMARK_(component){
return (component instanceof speclj.components.Characteristic);
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Before = (function (body){
this.body = body;
});
(speclj.components.Before.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Before.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.befores,cljs.core.conj,this$__$1);
}));

(speclj.components.Before.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.Before.cljs$lang$type = true);

(speclj.components.Before.cljs$lang$ctorStr = "speclj.components/Before");

(speclj.components.Before.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/Before");
}));

/**
 * Positional factory function for speclj.components/Before.
 */
speclj.components.__GT_Before = (function speclj$components$__GT_Before(body){
return (new speclj.components.Before(body));
});

speclj.components.new_before = (function speclj$components$new_before(body){
return (new speclj.components.Before(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.After = (function (body){
this.body = body;
});
(speclj.components.After.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.After.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.afters,cljs.core.conj,this$__$1);
}));

(speclj.components.After.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.After.cljs$lang$type = true);

(speclj.components.After.cljs$lang$ctorStr = "speclj.components/After");

(speclj.components.After.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/After");
}));

/**
 * Positional factory function for speclj.components/After.
 */
speclj.components.__GT_After = (function speclj$components$__GT_After(body){
return (new speclj.components.After(body));
});

speclj.components.new_after = (function speclj$components$new_after(body){
return (new speclj.components.After(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Around = (function (body){
this.body = body;
});
(speclj.components.Around.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Around.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.arounds,cljs.core.conj,this$__$1);
}));

(speclj.components.Around.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.Around.cljs$lang$type = true);

(speclj.components.Around.cljs$lang$ctorStr = "speclj.components/Around");

(speclj.components.Around.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/Around");
}));

/**
 * Positional factory function for speclj.components/Around.
 */
speclj.components.__GT_Around = (function speclj$components$__GT_Around(body){
return (new speclj.components.Around(body));
});

speclj.components.new_around = (function speclj$components$new_around(body){
return (new speclj.components.Around(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.BeforeAll = (function (body){
this.body = body;
});
(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.before_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.BeforeAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.BeforeAll.cljs$lang$type = true);

(speclj.components.BeforeAll.cljs$lang$ctorStr = "speclj.components/BeforeAll");

(speclj.components.BeforeAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/BeforeAll");
}));

/**
 * Positional factory function for speclj.components/BeforeAll.
 */
speclj.components.__GT_BeforeAll = (function speclj$components$__GT_BeforeAll(body){
return (new speclj.components.BeforeAll(body));
});

speclj.components.new_before_all = (function speclj$components$new_before_all(body){
return (new speclj.components.BeforeAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AfterAll = (function (body){
this.body = body;
});
(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.after_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AfterAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.AfterAll.cljs$lang$type = true);

(speclj.components.AfterAll.cljs$lang$ctorStr = "speclj.components/AfterAll");

(speclj.components.AfterAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/AfterAll");
}));

/**
 * Positional factory function for speclj.components/AfterAll.
 */
speclj.components.__GT_AfterAll = (function speclj$components$__GT_AfterAll(body){
return (new speclj.components.AfterAll(body));
});

speclj.components.new_after_all = (function speclj$components$new_after_all(body){
return (new speclj.components.AfterAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AroundAll = (function (body){
this.body = body;
});
(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.around_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AroundAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$body], null);
}));

(speclj.components.AroundAll.cljs$lang$type = true);

(speclj.components.AroundAll.cljs$lang$ctorStr = "speclj.components/AroundAll");

(speclj.components.AroundAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/AroundAll");
}));

/**
 * Positional factory function for speclj.components/AroundAll.
 */
speclj.components.__GT_AroundAll = (function speclj$components$__GT_AroundAll(body){
return (new speclj.components.AroundAll(body));
});

speclj.components.new_around_all = (function speclj$components$new_around_all(body){
return (new speclj.components.AroundAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.With = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.With.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.With.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.withs,cljs.core.conj,this$__$1);
}));

(speclj.components.With.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speclj$components_SLASH_none,cljs.core.deref(self__.value))){
cljs.core.reset_BANG_(self__.value,(self__.body.cljs$core$IFn$_invoke$arity$0 ? self__.body.cljs$core$IFn$_invoke$arity$0() : self__.body.call(null)));
} else {
}

return cljs.core.deref(self__.value);
}));

(speclj.components.With.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$unique_DASH_name,cljs.core.cst$sym$body,cljs.core.cst$sym$value,cljs.core.cst$sym$bang], null);
}));

(speclj.components.With.cljs$lang$type = true);

(speclj.components.With.cljs$lang$ctorStr = "speclj.components/With");

(speclj.components.With.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/With");
}));

/**
 * Positional factory function for speclj.components/With.
 */
speclj.components.__GT_With = (function speclj$components$__GT_With(name,unique_name,body,value,bang){
return (new speclj.components.With(name,unique_name,body,value,bang));
});

speclj.components.reset_with = (function speclj$components$reset_with(with$){
cljs.core.reset_BANG_(with$.value,cljs.core.cst$kw$speclj$components_SLASH_none);

if(cljs.core.truth_(with$.bang)){
return cljs.core.deref(with$);
} else {
return null;
}
});
speclj.components.new_with = (function speclj$components$new_with(name,unique_name,body,bang){
var with$ = (new speclj.components.With(name,unique_name,body,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$speclj$components_SLASH_none),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref(with$);
} else {
}

return with$;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.WithAll = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.WithAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.WithAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.with_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.WithAll.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speclj$components_SLASH_none,cljs.core.deref(self__.value))){
cljs.core.reset_BANG_(self__.value,(self__.body.cljs$core$IFn$_invoke$arity$0 ? self__.body.cljs$core$IFn$_invoke$arity$0() : self__.body.call(null)));
} else {
}

return cljs.core.deref(self__.value);
}));

(speclj.components.WithAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$unique_DASH_name,cljs.core.cst$sym$body,cljs.core.cst$sym$value,cljs.core.cst$sym$bang], null);
}));

(speclj.components.WithAll.cljs$lang$type = true);

(speclj.components.WithAll.cljs$lang$ctorStr = "speclj.components/WithAll");

(speclj.components.WithAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/WithAll");
}));

/**
 * Positional factory function for speclj.components/WithAll.
 */
speclj.components.__GT_WithAll = (function speclj$components$__GT_WithAll(name,unique_name,body,value,bang){
return (new speclj.components.WithAll(name,unique_name,body,value,bang));
});

speclj.components.new_with_all = (function speclj$components$new_with_all(name,unique_name,body,bang){
var with_all = (new speclj.components.WithAll(name,unique_name,body,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$speclj$components_SLASH_none),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref(with_all);
} else {
}

return with_all;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Tag = (function (name){
this.name = name;
});
(speclj.components.Tag.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Tag.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(description.tags,cljs.core.conj,self__.name);
}));

(speclj.components.Tag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name], null);
}));

(speclj.components.Tag.cljs$lang$type = true);

(speclj.components.Tag.cljs$lang$ctorStr = "speclj.components/Tag");

(speclj.components.Tag.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.components/Tag");
}));

/**
 * Positional factory function for speclj.components/Tag.
 */
speclj.components.__GT_Tag = (function speclj$components$__GT_Tag(name){
return (new speclj.components.Tag(name));
});

speclj.components.new_tag = (function speclj$components$new_tag(name){
return (new speclj.components.Tag(name));
});
