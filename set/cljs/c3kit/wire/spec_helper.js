// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.spec_helper');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.ajax');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.websocket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('speclj.core');
goog.require('speclj.stub');
c3kit.apron.log.warn_BANG_();
c3kit.wire.spec_helper.pprint = cljs.pprint.pprint;
c3kit.wire.spec_helper.render_roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
c3kit.wire.spec_helper.unmount_render_roots = (function c3kit$wire$spec_helper$unmount_render_roots(){
var seq__23893_23897 = cljs.core.seq(cljs.core.deref(c3kit.wire.spec_helper.render_roots));
var chunk__23894_23898 = null;
var count__23895_23899 = (0);
var i__23896_23900 = (0);
while(true){
if((i__23896_23900 < count__23895_23899)){
var root_23901 = chunk__23894_23898.cljs$core$IIndexed$_nth$arity$2(null,i__23896_23900);
reagent.dom.unmount_component_at_node(root_23901);


var G__23902 = seq__23893_23897;
var G__23903 = chunk__23894_23898;
var G__23904 = count__23895_23899;
var G__23905 = (i__23896_23900 + (1));
seq__23893_23897 = G__23902;
chunk__23894_23898 = G__23903;
count__23895_23899 = G__23904;
i__23896_23900 = G__23905;
continue;
} else {
var temp__5804__auto___23906 = cljs.core.seq(seq__23893_23897);
if(temp__5804__auto___23906){
var seq__23893_23907__$1 = temp__5804__auto___23906;
if(cljs.core.chunked_seq_QMARK_(seq__23893_23907__$1)){
var c__4556__auto___23908 = cljs.core.chunk_first(seq__23893_23907__$1);
var G__23909 = cljs.core.chunk_rest(seq__23893_23907__$1);
var G__23910 = c__4556__auto___23908;
var G__23911 = cljs.core.count(c__4556__auto___23908);
var G__23912 = (0);
seq__23893_23897 = G__23909;
chunk__23894_23898 = G__23910;
count__23895_23899 = G__23911;
i__23896_23900 = G__23912;
continue;
} else {
var root_23913 = cljs.core.first(seq__23893_23907__$1);
reagent.dom.unmount_component_at_node(root_23913);


var G__23914 = cljs.core.next(seq__23893_23907__$1);
var G__23915 = null;
var G__23916 = (0);
var G__23917 = (0);
seq__23893_23897 = G__23914;
chunk__23894_23898 = G__23915;
count__23895_23899 = G__23916;
i__23896_23900 = G__23917;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(c3kit.wire.spec_helper.render_roots,cljs.core.PersistentVector.EMPTY);
});
c3kit.wire.spec_helper.reset_dom_BANG_ = (function c3kit$wire$spec_helper$reset_dom_BANG_(content){
var body = document.body;
c3kit.wire.spec_helper.unmount_render_roots();

return (body.innerHTML = content);
});
c3kit.wire.spec_helper.with_clean_dom = (function c3kit$wire$spec_helper$with_clean_dom(var_args){
var G__23919 = arguments.length;
switch (G__23919) {
case 0:
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}));

(c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1 = (function (content){
return speclj.components.new_before((function (){
return c3kit.wire.spec_helper.reset_dom_BANG_(content);
}));
}));

(c3kit.wire.spec_helper.with_clean_dom.cljs$lang$maxFixedArity = 1);

c3kit.wire.spec_helper.with_root_dom = (function c3kit$wire$spec_helper$with_root_dom(){
return c3kit.wire.spec_helper.with_clean_dom.cljs$core$IFn$_invoke$arity$1("<div id='root'/>");
});
c3kit.wire.spec_helper.select = (function c3kit$wire$spec_helper$select(var_args){
var G__23922 = arguments.length;
switch (G__23922) {
case 1:
return c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
if(cljs.core.truth_(root)){
} else {
throw (new Error(["Assert failed: ",["select: can't select inside nil nodes. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","root"].join('')));
}

if(typeof selector === 'string'){
} else {
throw (new Error(["Assert failed: ",["select: selector must be a string!: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","(string? selector)"].join('')));
}

return root.querySelector(selector);
}));

(c3kit.wire.spec_helper.select.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.select_all = (function c3kit$wire$spec_helper$select_all(var_args){
var G__23926 = arguments.length;
switch (G__23926) {
case 1:
return c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2(document,sel);
}));

(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
if(cljs.core.truth_(root)){
} else {
throw (new Error(["Assert failed: ",["select-all: can't select inside nil nodes. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","root"].join('')));
}

if(typeof selector === 'string'){
} else {
throw (new Error(["Assert failed: ",["select-all: selector must be a string!: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),"\n","(string? selector)"].join('')));
}

var results = root.querySelectorAll(selector);
var slice = (function (p1__23924_SHARP_){
return Array.prototype.slice.call(p1__23924_SHARP_);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,slice(results));
}));

(c3kit.wire.spec_helper.select_all.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.select_map = (function c3kit$wire$spec_helper$select_map(var_args){
var G__23929 = arguments.length;
switch (G__23929) {
case 2:
return c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$2 = (function (f,selector){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1(selector));
}));

(c3kit.wire.spec_helper.select_map.cljs$core$IFn$_invoke$arity$3 = (function (f,root,selector){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2(root,selector));
}));

(c3kit.wire.spec_helper.select_map.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.count_all = (function c3kit$wire$spec_helper$count_all(var_args){
var G__23932 = arguments.length;
switch (G__23932) {
case 1:
return c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return cljs.core.count(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$1(selector));
}));

(c3kit.wire.spec_helper.count_all.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return cljs.core.count(c3kit.wire.spec_helper.select_all.cljs$core$IFn$_invoke$arity$2(root,selector));
}));

(c3kit.wire.spec_helper.count_all.cljs$lang$maxFixedArity = 2);

/**
 * Use me to render components for testing.  Using reagent/render directly may work, but is not as good.
 */
c3kit.wire.spec_helper.render = (function c3kit$wire$spec_helper$render(var_args){
var G__23935 = arguments.length;
switch (G__23935) {
case 1:
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1 = (function (component){
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$2(component,c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1("#root"));
}));

(c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$2 = (function (component,root){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.wire.spec_helper.render_roots,cljs.core.conj,root);

(window.Slider = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,(function (){
return null;
})], null)));

(jwplayer = (function (elem_id){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$setup,c3kit.apron.corec.noop,cljs.core.cst$kw$remove,c3kit.apron.corec.noop], null));
}));

try{return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(component,root);
}catch (e23936){var e = e23936;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Render Error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,e], null));
}}));

(c3kit.wire.spec_helper.render.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.flush = (function c3kit$wire$spec_helper$flush(){
return reagent.core.flush();
});
c3kit.wire.spec_helper.simulator = ReactTestUtils.Simulate;
c3kit.wire.spec_helper.resolve_node = (function c3kit$wire$spec_helper$resolve_node(var_args){
var G__23939 = arguments.length;
switch (G__23939) {
case 2:
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2 = (function (action,thing){
if(typeof thing === 'string'){
var temp__5802__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(thing);
if(cljs.core.truth_(temp__5802__auto__)){
var node = temp__5802__auto__;
return node;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - can't find node: ",thing].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$thing,thing], null));
}
} else {
if(cljs.core.truth_(thing)){
return thing;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - node is nil"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$thing,thing], null));
}
}
}));

(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3 = (function (action,root,selector){
if((root == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - root node is nil"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$root,root,cljs.core.cst$kw$selector,selector], null));
} else {
}

var temp__5802__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2(root,selector);
if(cljs.core.truth_(temp__5802__auto__)){
var node = temp__5802__auto__;
return node;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)," - can't find child node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$action,action,cljs.core.cst$kw$root,root,cljs.core.cst$kw$selector,selector], null));
}
}));

(c3kit.wire.spec_helper.resolve_node.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.assoc_key_event = (function c3kit$wire$spec_helper$assoc_key_event(m,code,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,code,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$code,code,cljs.core.cst$kw$key,key], null)));
});
c3kit.wire.spec_helper.keypresses = cljs.core.reduce_kv(c3kit.wire.spec_helper.assoc_key_event,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([c3kit.wire.js.TAB,c3kit.wire.js.DIGIT5,c3kit.wire.js.DIGIT6,c3kit.wire.js.ENTER,c3kit.wire.js.UP,c3kit.wire.js.DIGIT1,c3kit.wire.js.DIGIT3,c3kit.wire.js.DIGIT0,c3kit.wire.js.DIGIT2,c3kit.wire.js.ESC,c3kit.wire.js.DIGIT4,c3kit.wire.js.DIGIT9,c3kit.wire.js.RIGHT,c3kit.wire.js.DIGIT7,c3kit.wire.js.LEFT,c3kit.wire.js.DIGIT8,c3kit.wire.js.DOWN],["Tab","5","6","Enter","ArrowUp","1","3","0","2","Escape","4","9","ArrowRight","7","ArrowLeft","8","ArrowDown"]));
c3kit.wire.spec_helper.simulate = (function c3kit$wire$spec_helper$simulate(var_args){
var G__23942 = arguments.length;
switch (G__23942) {
case 3:
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3 = (function (event_name,thing,event_data){
var node = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$simulate,thing);
var event_fn = c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.simulator,event_name);
if(cljs.core.truth_(event_fn)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["simulate - event doesn't exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_name)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$thing,thing,cljs.core.cst$kw$event_DASH_name,event_name,cljs.core.cst$kw$event_DASH_data,event_data], null));
}

var G__23943 = node;
var G__23944 = cljs.core.clj__GT_js(event_data);
return (event_fn.cljs$core$IFn$_invoke$arity$2 ? event_fn.cljs$core$IFn$_invoke$arity$2(G__23943,G__23944) : event_fn.call(null,G__23943,G__23944));
}));

(c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4 = (function (event_name,root,selector,event_data){
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3(event_name,c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(root,selector),event_data);
}));

(c3kit.wire.spec_helper.simulate.cljs$lang$maxFixedArity = 4);

c3kit.wire.spec_helper.simulate_BANG_ = (function c3kit$wire$spec_helper$simulate_BANG_(var_args){
var G__23947 = arguments.length;
switch (G__23947) {
case 3:
return c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (event_name,thing,event_data){
c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3(event_name,thing,event_data);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.simulate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (event_name,root,selector,event_data){
c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4(event_name,root,selector,event_data);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.simulate_BANG_.cljs$lang$maxFixedArity = 4);

c3kit.wire.spec_helper.key_down = (function c3kit$wire$spec_helper$key_down(var_args){
var G__23950 = arguments.length;
switch (G__23950) {
case 2:
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2 = (function (thing,key_code){
var G__23952 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_down,thing);
var G__23953 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(c3kit.wire.spec_helper.keypresses,key_code,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$code,key_code,cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_code)], null)));
var fexpr__23951 = c3kit.wire.spec_helper.simulator.keyDown;
return (fexpr__23951.cljs$core$IFn$_invoke$arity$2 ? fexpr__23951.cljs$core$IFn$_invoke$arity$2(G__23952,G__23953) : fexpr__23951.call(null,G__23952,G__23953));
}));

(c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key_code){
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_down,root,selector),key_code);
}));

(c3kit.wire.spec_helper.key_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_down_BANG_ = (function c3kit$wire$spec_helper$key_down_BANG_(var_args){
var G__23956 = arguments.length;
switch (G__23956) {
case 2:
return c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key_code){
c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2(thing,key_code);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_down_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key_code){
c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3(root,selector,key_code);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_down_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_up = (function c3kit$wire$spec_helper$key_up(var_args){
var G__23959 = arguments.length;
switch (G__23959) {
case 2:
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
var G__23961 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_up,thing);
var G__23962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.keypresses,key);
var fexpr__23960 = c3kit.wire.spec_helper.simulator.keyUp;
return (fexpr__23960.cljs$core$IFn$_invoke$arity$2 ? fexpr__23960.cljs$core$IFn$_invoke$arity$2(G__23961,G__23962) : fexpr__23960.call(null,G__23961,G__23962));
}));

(c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_up,root,selector),key);
}));

(c3kit.wire.spec_helper.key_up.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_up_BANG_ = (function c3kit$wire$spec_helper$key_up_BANG_(var_args){
var G__23965 = arguments.length;
switch (G__23965) {
case 2:
return c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2(thing,key);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_up_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3(root,selector,key);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_up_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_press = (function c3kit$wire$spec_helper$key_press(var_args){
var G__23968 = arguments.length;
switch (G__23968) {
case 2:
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
var G__23970 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_press,thing);
var G__23971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.keypresses,key);
var fexpr__23969 = c3kit.wire.spec_helper.simulator.keyPress;
return (fexpr__23969.cljs$core$IFn$_invoke$arity$2 ? fexpr__23969.cljs$core$IFn$_invoke$arity$2(G__23970,G__23971) : fexpr__23969.call(null,G__23970,G__23971));
}));

(c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_press,root,selector),key);
}));

(c3kit.wire.spec_helper.key_press.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_press_BANG_ = (function c3kit$wire$spec_helper$key_press_BANG_(var_args){
var G__23974 = arguments.length;
switch (G__23974) {
case 2:
return c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,key){
c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2(thing,key);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_press_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3(root,selector,key);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.key_press_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.touch_end = (function c3kit$wire$spec_helper$touch_end(var_args){
var G__23977 = arguments.length;
switch (G__23977) {
case 1:
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__23979 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$touchend,thing);
var fexpr__23978 = c3kit.wire.spec_helper.simulator.touchend;
return (fexpr__23978.cljs$core$IFn$_invoke$arity$1 ? fexpr__23978.cljs$core$IFn$_invoke$arity$1(G__23979) : fexpr__23978.call(null,G__23979));
}));

(c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$touchend,root,selector));
}));

(c3kit.wire.spec_helper.touch_end.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_end_BANG_ = (function c3kit$wire$spec_helper$touch_end_BANG_(var_args){
var G__23982 = arguments.length;
switch (G__23982) {
case 1:
return c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.touch_end_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_start = (function c3kit$wire$spec_helper$touch_start(var_args){
var G__23985 = arguments.length;
switch (G__23985) {
case 1:
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__23987 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$touchstart,thing);
var fexpr__23986 = c3kit.wire.spec_helper.simulator.touchstart;
return (fexpr__23986.cljs$core$IFn$_invoke$arity$1 ? fexpr__23986.cljs$core$IFn$_invoke$arity$1(G__23987) : fexpr__23986.call(null,G__23987));
}));

(c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$touchstart,root,selector));
}));

(c3kit.wire.spec_helper.touch_start.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_start_BANG_ = (function c3kit$wire$spec_helper$touch_start_BANG_(var_args){
var G__23990 = arguments.length;
switch (G__23990) {
case 1:
return c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.touch_start_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.click = (function c3kit$wire$spec_helper$click(var_args){
var G__23993 = arguments.length;
switch (G__23993) {
case 1:
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__23995 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click,thing);
var fexpr__23994 = c3kit.wire.spec_helper.simulator.click;
return (fexpr__23994.cljs$core$IFn$_invoke$arity$1 ? fexpr__23994.cljs$core$IFn$_invoke$arity$1(G__23995) : fexpr__23994.call(null,G__23995));
}));

(c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$click,root,selector));
}));

(c3kit.wire.spec_helper.click.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.click_BANG_ = (function c3kit$wire$spec_helper$click_BANG_(var_args){
var G__23998 = arguments.length;
switch (G__23998) {
case 1:
return c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.click_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_enter = (function c3kit$wire$spec_helper$mouse_enter(var_args){
var G__24001 = arguments.length;
switch (G__24001) {
case 1:
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24003 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_enter,thing);
var fexpr__24002 = c3kit.wire.spec_helper.simulator.mouseEnter;
return (fexpr__24002.cljs$core$IFn$_invoke$arity$1 ? fexpr__24002.cljs$core$IFn$_invoke$arity$1(G__24003) : fexpr__24002.call(null,G__24003));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_enter,root,selector));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_enter_BANG_ = (function c3kit$wire$spec_helper$mouse_enter_BANG_(var_args){
var G__24006 = arguments.length;
switch (G__24006) {
case 1:
return c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_enter_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_up = (function c3kit$wire$spec_helper$mouse_up(var_args){
var G__24009 = arguments.length;
switch (G__24009) {
case 1:
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24011 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_up,thing);
var fexpr__24010 = c3kit.wire.spec_helper.simulator.mouseUp;
return (fexpr__24010.cljs$core$IFn$_invoke$arity$1 ? fexpr__24010.cljs$core$IFn$_invoke$arity$1(G__24011) : fexpr__24010.call(null,G__24011));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_up,root,selector));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_up_BANG_ = (function c3kit$wire$spec_helper$mouse_up_BANG_(var_args){
var G__24014 = arguments.length;
switch (G__24014) {
case 1:
return c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_up_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_move = (function c3kit$wire$spec_helper$mouse_move(var_args){
var G__24017 = arguments.length;
switch (G__24017) {
case 1:
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24019 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_move,thing);
var fexpr__24018 = c3kit.wire.spec_helper.simulator.mouseMove;
return (fexpr__24018.cljs$core$IFn$_invoke$arity$1 ? fexpr__24018.cljs$core$IFn$_invoke$arity$1(G__24019) : fexpr__24018.call(null,G__24019));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_move,root,selector));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_move_BANG_ = (function c3kit$wire$spec_helper$mouse_move_BANG_(var_args){
var G__24022 = arguments.length;
switch (G__24022) {
case 1:
return c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_move_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_down = (function c3kit$wire$spec_helper$mouse_down(var_args){
var G__24025 = arguments.length;
switch (G__24025) {
case 1:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2(thing,(0));
}));

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2 = (function (thing,button){
var node = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_down,thing);
var G__24027 = node;
var G__24028 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$button,button,cljs.core.cst$kw$buttons,(1)], null));
var fexpr__24026 = c3kit.wire.spec_helper.simulator.mouseDown;
return (fexpr__24026.cljs$core$IFn$_invoke$arity$2 ? fexpr__24026.cljs$core$IFn$_invoke$arity$2(G__24027,G__24028) : fexpr__24026.call(null,G__24027,G__24028));
}));

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$3 = (function (root,button,selector){
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_down,root,selector),button);
}));

(c3kit.wire.spec_helper.mouse_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.mouse_down_BANG_ = (function c3kit$wire$spec_helper$mouse_down_BANG_(var_args){
var G__24031 = arguments.length;
switch (G__24031) {
case 1:
return c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_down_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_leave = (function c3kit$wire$spec_helper$mouse_leave(var_args){
var G__24034 = arguments.length;
switch (G__24034) {
case 1:
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24036 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_leave,thing);
var fexpr__24035 = c3kit.wire.spec_helper.simulator.mouseLeave;
return (fexpr__24035.cljs$core$IFn$_invoke$arity$1 ? fexpr__24035.cljs$core$IFn$_invoke$arity$1(G__24036) : fexpr__24035.call(null,G__24036));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_leave,root,selector));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_leave_BANG_ = (function c3kit$wire$spec_helper$mouse_leave_BANG_(var_args){
var G__24039 = arguments.length;
switch (G__24039) {
case 1:
return c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.mouse_leave_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.drag = (function c3kit$wire$spec_helper$drag(var_args){
var G__24042 = arguments.length;
switch (G__24042) {
case 2:
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24044 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag,thing);
var G__24045 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24043 = c3kit.wire.spec_helper.simulator.drag;
return (fexpr__24043.cljs$core$IFn$_invoke$arity$2 ? fexpr__24043.cljs$core$IFn$_invoke$arity$2(G__24044,G__24045) : fexpr__24043.call(null,G__24044,G__24045));
}));

(c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_BANG_ = (function c3kit$wire$spec_helper$drag_BANG_(var_args){
var G__24048 = arguments.length;
switch (G__24048) {
case 2:
return c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_start = (function c3kit$wire$spec_helper$drag_start(var_args){
var G__24051 = arguments.length;
switch (G__24051) {
case 2:
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24053 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_start,thing);
var G__24054 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24052 = c3kit.wire.spec_helper.simulator.dragStart;
return (fexpr__24052.cljs$core$IFn$_invoke$arity$2 ? fexpr__24052.cljs$core$IFn$_invoke$arity$2(G__24053,G__24054) : fexpr__24052.call(null,G__24053,G__24054));
}));

(c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_start,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_start.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_start_BANG_ = (function c3kit$wire$spec_helper$drag_start_BANG_(var_args){
var G__24057 = arguments.length;
switch (G__24057) {
case 2:
return c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_start_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_enter = (function c3kit$wire$spec_helper$drag_enter(var_args){
var G__24060 = arguments.length;
switch (G__24060) {
case 2:
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24062 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_enter,thing);
var G__24063 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24061 = c3kit.wire.spec_helper.simulator.dragEnter;
return (fexpr__24061.cljs$core$IFn$_invoke$arity$2 ? fexpr__24061.cljs$core$IFn$_invoke$arity$2(G__24062,G__24063) : fexpr__24061.call(null,G__24062,G__24063));
}));

(c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_enter,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_enter.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_enter_BANG_ = (function c3kit$wire$spec_helper$drag_enter_BANG_(var_args){
var G__24066 = arguments.length;
switch (G__24066) {
case 2:
return c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_enter_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_leave = (function c3kit$wire$spec_helper$drag_leave(var_args){
var G__24069 = arguments.length;
switch (G__24069) {
case 2:
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24071 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_leave,thing);
var G__24072 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24070 = c3kit.wire.spec_helper.simulator.dragLeave;
return (fexpr__24070.cljs$core$IFn$_invoke$arity$2 ? fexpr__24070.cljs$core$IFn$_invoke$arity$2(G__24071,G__24072) : fexpr__24070.call(null,G__24071,G__24072));
}));

(c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_leave,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_leave.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_leave_BANG_ = (function c3kit$wire$spec_helper$drag_leave_BANG_(var_args){
var G__24075 = arguments.length;
switch (G__24075) {
case 2:
return c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_leave_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_end = (function c3kit$wire$spec_helper$drag_end(var_args){
var G__24078 = arguments.length;
switch (G__24078) {
case 2:
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24080 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_end,thing);
var G__24081 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24079 = c3kit.wire.spec_helper.simulator.dragEnd;
return (fexpr__24079.cljs$core$IFn$_invoke$arity$2 ? fexpr__24079.cljs$core$IFn$_invoke$arity$2(G__24080,G__24081) : fexpr__24079.call(null,G__24080,G__24081));
}));

(c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_end,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_end.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_end_BANG_ = (function c3kit$wire$spec_helper$drag_end_BANG_(var_args){
var G__24084 = arguments.length;
switch (G__24084) {
case 2:
return c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_end_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_over = (function c3kit$wire$spec_helper$drag_over(var_args){
var G__24087 = arguments.length;
switch (G__24087) {
case 2:
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24089 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_over,thing);
var G__24090 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24088 = c3kit.wire.spec_helper.simulator.dragOver;
return (fexpr__24088.cljs$core$IFn$_invoke$arity$2 ? fexpr__24088.cljs$core$IFn$_invoke$arity$2(G__24089,G__24090) : fexpr__24088.call(null,G__24089,G__24090));
}));

(c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_over,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_over.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_over_BANG_ = (function c3kit$wire$spec_helper$drag_over_BANG_(var_args){
var G__24093 = arguments.length;
switch (G__24093) {
case 2:
return c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.drag_over_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.on_drop = (function c3kit$wire$spec_helper$on_drop(var_args){
var G__24096 = arguments.length;
switch (G__24096) {
case 2:
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
var G__24098 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_drop,thing);
var G__24099 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__24097 = c3kit.wire.spec_helper.simulator.drop;
return (fexpr__24097.cljs$core$IFn$_invoke$arity$2 ? fexpr__24097.cljs$core$IFn$_invoke$arity$2(G__24098,G__24099) : fexpr__24097.call(null,G__24098,G__24099));
}));

(c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$on_DASH_drop,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.on_drop.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.on_drop_BANG_ = (function c3kit$wire$spec_helper$on_drop_BANG_(var_args){
var G__24102 = arguments.length;
switch (G__24102) {
case 2:
return c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,data_transfer){
c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2(thing,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3(root,selector,data_transfer);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.on_drop_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.focus = (function c3kit$wire$spec_helper$focus(var_args){
var G__24105 = arguments.length;
switch (G__24105) {
case 1:
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24107 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$focus,thing);
var fexpr__24106 = c3kit.wire.spec_helper.simulator.focus;
return (fexpr__24106.cljs$core$IFn$_invoke$arity$1 ? fexpr__24106.cljs$core$IFn$_invoke$arity$1(G__24107) : fexpr__24106.call(null,G__24107));
}));

(c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$focus,root,selector));
}));

(c3kit.wire.spec_helper.focus.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.focus_BANG_ = (function c3kit$wire$spec_helper$focus_BANG_(var_args){
var G__24110 = arguments.length;
switch (G__24110) {
case 1:
return c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.blur = (function c3kit$wire$spec_helper$blur(var_args){
var G__24113 = arguments.length;
switch (G__24113) {
case 1:
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24115 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blur,thing);
var fexpr__24114 = c3kit.wire.spec_helper.simulator.blur;
return (fexpr__24114.cljs$core$IFn$_invoke$arity$1 ? fexpr__24114.cljs$core$IFn$_invoke$arity$1(G__24115) : fexpr__24114.call(null,G__24115));
}));

(c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$blur,root,selector));
}));

(c3kit.wire.spec_helper.blur.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.blur_BANG_ = (function c3kit$wire$spec_helper$blur_BANG_(var_args){
var G__24118 = arguments.length;
switch (G__24118) {
case 1:
return c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1(thing);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.blur_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2(root,selector);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.blur_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.change = (function c3kit$wire$spec_helper$change(var_args){
var G__24121 = arguments.length;
switch (G__24121) {
case 1:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24123 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change,thing);
var G__24124 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,thing], null);
var fexpr__24122 = c3kit.wire.spec_helper.simulator.change;
return (fexpr__24122.cljs$core$IFn$_invoke$arity$2 ? fexpr__24122.cljs$core$IFn$_invoke$arity$2(G__24123,G__24124) : fexpr__24122.call(null,G__24123,G__24124));
}));

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
var node = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change,thing);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",node.type)){
var G__24126 = node;
var G__24127 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$files,value], null)], null));
var fexpr__24125 = c3kit.wire.spec_helper.simulator.change;
return (fexpr__24125.cljs$core$IFn$_invoke$arity$2 ? fexpr__24125.cljs$core$IFn$_invoke$arity$2(G__24126,G__24127) : fexpr__24125.call(null,G__24126,G__24127));
} else {
(node.value = value);

return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1(node);
}
}));

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$change,root,selector),value);
}));

(c3kit.wire.spec_helper.change.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.change_BANG_ = (function c3kit$wire$spec_helper$change_BANG_(var_args){
var G__24130 = arguments.length;
switch (G__24130) {
case 2:
return c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2(thing,value);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.change_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$3(root,selector,value);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.change_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.check_box = (function c3kit$wire$spec_helper$check_box(var_args){
var G__24133 = arguments.length;
switch (G__24133) {
case 2:
return c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
var node = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$check_DASH_box,thing);
(node.checked = value);

return c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$1(node);
}));

(c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
return c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$check_DASH_box,root,selector),value);
}));

(c3kit.wire.spec_helper.check_box.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.check_box_BANG_ = (function c3kit$wire$spec_helper$check_box_BANG_(var_args){
var G__24136 = arguments.length;
switch (G__24136) {
case 2:
return c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$2(thing,value);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.check_box_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,value){
c3kit.wire.spec_helper.check_box.cljs$core$IFn$_invoke$arity$3(root,selector,value);

return c3kit.wire.spec_helper.flush();
}));

(c3kit.wire.spec_helper.check_box_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Throws exception if the node doesn't exist.
 */
c3kit.wire.spec_helper.text_BANG_ = (function c3kit$wire$spec_helper$text_BANG_(var_args){
var G__24139 = arguments.length;
switch (G__24139) {
case 1:
return c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,thing).innerText;
}));

(c3kit.wire.spec_helper.text_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$text,root,selector).innerText;
}));

(c3kit.wire.spec_helper.text_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Return nil if the node doesn't exist.
 */
c3kit.wire.spec_helper.text = (function c3kit$wire$spec_helper$text(var_args){
var G__24142 = arguments.length;
switch (G__24142) {
case 0:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.node_text(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0());
}));

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$1 = (function (selector_or_elem){
if(typeof selector_or_elem === 'string'){
var G__24143 = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(selector_or_elem);
if((G__24143 == null)){
return null;
} else {
return c3kit.wire.js.node_text(G__24143);
}
} else {
if((selector_or_elem == null)){
return null;
} else {
return c3kit.wire.js.node_text(selector_or_elem);

}
}
}));

(c3kit.wire.spec_helper.text.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
var G__24144 = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2(root,selector);
if((G__24144 == null)){
return null;
} else {
return c3kit.wire.js.node_text(G__24144);
}
}));

(c3kit.wire.spec_helper.text.cljs$lang$maxFixedArity = 2);

/**
 * Throws exception if the node doesn't exist.
 */
c3kit.wire.spec_helper.html_BANG_ = (function c3kit$wire$spec_helper$html_BANG_(var_args){
var G__24147 = arguments.length;
switch (G__24147) {
case 1:
return c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$html,thing).innerHTML;
}));

(c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$html,root,selector).innerHTML;
}));

(c3kit.wire.spec_helper.html_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Return nil if the node doesn't exist.
 */
c3kit.wire.spec_helper.html = (function c3kit$wire$spec_helper$html(var_args){
var G__24150 = arguments.length;
switch (G__24150) {
case 0:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body.innerHTML;
}));

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$1 = (function (selector_or_elem){
if(typeof selector_or_elem === 'string'){
var temp__5804__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(selector_or_elem);
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
return e.innerHTML;
} else {
return null;
}
} else {
if((selector_or_elem == null)){
return null;
} else {
return selector_or_elem.innerHTML;

}
}
}));

(c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
var temp__5804__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2(root,selector);
if(cljs.core.truth_(temp__5804__auto__)){
var e = temp__5804__auto__;
return e.innerHTML;
} else {
return null;
}
}));

(c3kit.wire.spec_helper.html.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.class_name = (function c3kit$wire$spec_helper$class_name(var_args){
var G__24153 = arguments.length;
switch (G__24153) {
case 1:
return c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_name,thing).className;
}));

(c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class_DASH_name,root,selector).className;
}));

(c3kit.wire.spec_helper.class_name.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.tag_name = (function c3kit$wire$spec_helper$tag_name(var_args){
var G__24156 = arguments.length;
switch (G__24156) {
case 1:
return c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag_DASH_name,thing).tagName;
}));

(c3kit.wire.spec_helper.tag_name.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$tag_DASH_name,root,selector).tagName;
}));

(c3kit.wire.spec_helper.tag_name.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.href = (function c3kit$wire$spec_helper$href(var_args){
var G__24159 = arguments.length;
switch (G__24159) {
case 1:
return c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$href,thing).href;
}));

(c3kit.wire.spec_helper.href.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$href,root,selector).href;
}));

(c3kit.wire.spec_helper.href.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.id = (function c3kit$wire$spec_helper$id(var_args){
var G__24162 = arguments.length;
switch (G__24162) {
case 1:
return c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,thing).id;
}));

(c3kit.wire.spec_helper.id.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,root,selector).id;
}));

(c3kit.wire.spec_helper.id.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.value = (function c3kit$wire$spec_helper$value(var_args){
var G__24165 = arguments.length;
switch (G__24165) {
case 1:
return c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,thing).value;
}));

(c3kit.wire.spec_helper.value.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$value,root,selector).value;
}));

(c3kit.wire.spec_helper.value.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.placeholder = (function c3kit$wire$spec_helper$placeholder(var_args){
var G__24168 = arguments.length;
switch (G__24168) {
case 1:
return c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$placeholder,thing).placeholder;
}));

(c3kit.wire.spec_helper.placeholder.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$placeholder,root,selector).placeholder;
}));

(c3kit.wire.spec_helper.placeholder.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.checked_QMARK_ = (function c3kit$wire$spec_helper$checked_QMARK_(var_args){
var G__24171 = arguments.length;
switch (G__24171) {
case 1:
return c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$checked_QMARK_,thing).checked;
}));

(c3kit.wire.spec_helper.checked_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$checked_QMARK_,root,selector).checked;
}));

(c3kit.wire.spec_helper.checked_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.disabled_QMARK_ = (function c3kit$wire$spec_helper$disabled_QMARK_(var_args){
var G__24174 = arguments.length;
switch (G__24174) {
case 1:
return c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$disabled_QMARK_,thing).disabled;
}));

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$disabled_QMARK_,root,selector).disabled;
}));

(c3kit.wire.spec_helper.disabled_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.readonly_QMARK_ = (function c3kit$wire$spec_helper$readonly_QMARK_(var_args){
var G__24177 = arguments.length;
switch (G__24177) {
case 1:
return c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$readonly_QMARK_,thing).readOnly;
}));

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$readonly_QMARK_,root,selector).readOnly;
}));

(c3kit.wire.spec_helper.readonly_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.src = (function c3kit$wire$spec_helper$src(var_args){
var G__24180 = arguments.length;
switch (G__24180) {
case 1:
return c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$src,thing).src;
}));

(c3kit.wire.spec_helper.src.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$src,root,selector).src;
}));

(c3kit.wire.spec_helper.src.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.alt = (function c3kit$wire$spec_helper$alt(var_args){
var G__24183 = arguments.length;
switch (G__24183) {
case 1:
return c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alt,thing).alt;
}));

(c3kit.wire.spec_helper.alt.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$alt,root,selector).alt;
}));

(c3kit.wire.spec_helper.alt.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.style = (function c3kit$wire$spec_helper$style(var_args){
var G__24186 = arguments.length;
switch (G__24186) {
case 1:
return c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,thing).style;
}));

(c3kit.wire.spec_helper.style.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,root,selector).style;
}));

(c3kit.wire.spec_helper.style.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.print_html = (function c3kit$wire$spec_helper$print_html(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HTML: ",c3kit.wire.spec_helper.html.cljs$core$IFn$_invoke$arity$0()], 0));
});
c3kit.wire.spec_helper.print_error = (function c3kit$wire$spec_helper$print_error(e,file,line,col){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["********* JS ERROR *********"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",e], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t",clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [file,line,col], null))], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["****************************"], 0));
});
c3kit.wire.spec_helper.print_js_errors = (function c3kit$wire$spec_helper$print_js_errors(){
return (window.onerror = c3kit.wire.spec_helper.print_error);
});
c3kit.wire.spec_helper.stub_ajax = (function c3kit$wire$spec_helper$stub_ajax(){
return speclj.components.new_around((function (it__23492__auto__){
var post_BANG__orig_val__24188 = c3kit.wire.ajax.post_BANG_;
var get_BANG__orig_val__24189 = c3kit.wire.ajax.get_BANG_;
var post_BANG__temp_val__24190 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ajax_SLASH_post_BANG_,cljs.core.PersistentArrayMap.EMPTY);
var get_BANG__temp_val__24191 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ajax_SLASH_get_BANG_,cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.ajax.post_BANG_ = post_BANG__temp_val__24190);

(c3kit.wire.ajax.get_BANG_ = get_BANG__temp_val__24191);

try{return (it__23492__auto__.cljs$core$IFn$_invoke$arity$0 ? it__23492__auto__.cljs$core$IFn$_invoke$arity$0() : it__23492__auto__.call(null));
}finally {(c3kit.wire.ajax.get_BANG_ = get_BANG__orig_val__24189);

(c3kit.wire.ajax.post_BANG_ = post_BANG__orig_val__24188);
}}));
});
c3kit.wire.spec_helper.last_ajax_post_url = (function c3kit$wire$spec_helper$last_ajax_post_url(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_post_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.first(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_url = (function c3kit$wire$spec_helper$last_ajax_get_url(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_get_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.first(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_params = (function c3kit$wire$spec_helper$last_ajax_post_params(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_post_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.second(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_params = (function c3kit$wire$spec_helper$last_ajax_get_params(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_get_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.second(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_handler = (function c3kit$wire$spec_helper$last_ajax_post_handler(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_post_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_handler = (function c3kit$wire$spec_helper$last_ajax_get_handler(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_get_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_post_options = (function c3kit$wire$spec_helper$last_ajax_post_options(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_post_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return c3kit.apron.corec.__GT_options(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ajax_get_options = (function c3kit$wire$spec_helper$last_ajax_get_options(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ajax_SLASH_get_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return c3kit.apron.corec.__GT_options(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.invoke_last_ajax_post_handler = (function c3kit$wire$spec_helper$invoke_last_ajax_post_handler(payload){
var G__24192 = c3kit.wire.spec_helper.last_ajax_post_handler();
if((G__24192 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__24192,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
c3kit.wire.spec_helper.invoke_last_ajax_get_handler = (function c3kit$wire$spec_helper$invoke_last_ajax_get_handler(payload){
var G__24193 = c3kit.wire.spec_helper.last_ajax_get_handler();
if((G__24193 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__24193,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
c3kit.wire.spec_helper.stub_ws = (function c3kit$wire$spec_helper$stub_ws(){
return speclj.components.new_around((function (it__23492__auto__){
var call_BANG__orig_val__24194 = c3kit.wire.websocket.call_BANG_;
var call_BANG__temp_val__24195 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ws_SLASH_call_BANG_,cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.websocket.call_BANG_ = call_BANG__temp_val__24195);

try{return (it__23492__auto__.cljs$core$IFn$_invoke$arity$0 ? it__23492__auto__.cljs$core$IFn$_invoke$arity$0() : it__23492__auto__.call(null));
}finally {(c3kit.wire.websocket.call_BANG_ = call_BANG__orig_val__24194);
}}));
});
c3kit.wire.spec_helper.last_ws_call_id = (function c3kit$wire$spec_helper$last_ws_call_id(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ws_SLASH_call_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.first(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_params = (function c3kit$wire$spec_helper$last_ws_call_params(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ws_SLASH_call_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.second(args);
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_handler = (function c3kit$wire$spec_helper$last_ws_call_handler(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ws_SLASH_call_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2));
} else {
return null;
}
});
c3kit.wire.spec_helper.last_ws_call_options = (function c3kit$wire$spec_helper$last_ws_call_options(){
var temp__5804__auto__ = speclj.stub.last_invocation_of(cljs.core.cst$kw$ws_SLASH_call_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var args = temp__5804__auto__;
return c3kit.apron.corec.__GT_options(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),args));
} else {
return null;
}
});
c3kit.wire.spec_helper.invoke_last_ws_call_handler = (function c3kit$wire$spec_helper$invoke_last_ws_call_handler(payload){
var G__24196 = c3kit.wire.spec_helper.last_ws_call_handler();
if((G__24196 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__24196,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
