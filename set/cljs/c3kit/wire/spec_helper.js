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
var seq__30479_30483 = cljs.core.seq(cljs.core.deref(c3kit.wire.spec_helper.render_roots));
var chunk__30480_30484 = null;
var count__30481_30485 = (0);
var i__30482_30486 = (0);
while(true){
if((i__30482_30486 < count__30481_30485)){
var root_30487 = chunk__30480_30484.cljs$core$IIndexed$_nth$arity$2(null,i__30482_30486);
reagent.dom.unmount_component_at_node(root_30487);


var G__30488 = seq__30479_30483;
var G__30489 = chunk__30480_30484;
var G__30490 = count__30481_30485;
var G__30491 = (i__30482_30486 + (1));
seq__30479_30483 = G__30488;
chunk__30480_30484 = G__30489;
count__30481_30485 = G__30490;
i__30482_30486 = G__30491;
continue;
} else {
var temp__5804__auto___30492 = cljs.core.seq(seq__30479_30483);
if(temp__5804__auto___30492){
var seq__30479_30493__$1 = temp__5804__auto___30492;
if(cljs.core.chunked_seq_QMARK_(seq__30479_30493__$1)){
var c__4556__auto___30494 = cljs.core.chunk_first(seq__30479_30493__$1);
var G__30495 = cljs.core.chunk_rest(seq__30479_30493__$1);
var G__30496 = c__4556__auto___30494;
var G__30497 = cljs.core.count(c__4556__auto___30494);
var G__30498 = (0);
seq__30479_30483 = G__30495;
chunk__30480_30484 = G__30496;
count__30481_30485 = G__30497;
i__30482_30486 = G__30498;
continue;
} else {
var root_30499 = cljs.core.first(seq__30479_30493__$1);
reagent.dom.unmount_component_at_node(root_30499);


var G__30500 = cljs.core.next(seq__30479_30493__$1);
var G__30501 = null;
var G__30502 = (0);
var G__30503 = (0);
seq__30479_30483 = G__30500;
chunk__30480_30484 = G__30501;
count__30481_30485 = G__30502;
i__30482_30486 = G__30503;
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
var G__30505 = arguments.length;
switch (G__30505) {
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
var G__30508 = arguments.length;
switch (G__30508) {
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
var G__30512 = arguments.length;
switch (G__30512) {
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
var slice = (function (p1__30510_SHARP_){
return Array.prototype.slice.call(p1__30510_SHARP_);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,slice(results));
}));

(c3kit.wire.spec_helper.select_all.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.select_map = (function c3kit$wire$spec_helper$select_map(var_args){
var G__30515 = arguments.length;
switch (G__30515) {
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
var G__30518 = arguments.length;
switch (G__30518) {
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
var G__30521 = arguments.length;
switch (G__30521) {
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
}catch (e30522){var e = e30522;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Render Error",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,e], null));
}}));

(c3kit.wire.spec_helper.render.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.flush = (function c3kit$wire$spec_helper$flush(){
return reagent.core.flush();
});
c3kit.wire.spec_helper.simulator = ReactTestUtils.Simulate;
c3kit.wire.spec_helper.resolve_node = (function c3kit$wire$spec_helper$resolve_node(var_args){
var G__30525 = arguments.length;
switch (G__30525) {
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
var G__30528 = arguments.length;
switch (G__30528) {
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

var G__30529 = node;
var G__30530 = cljs.core.clj__GT_js(event_data);
return (event_fn.cljs$core$IFn$_invoke$arity$2 ? event_fn.cljs$core$IFn$_invoke$arity$2(G__30529,G__30530) : event_fn.call(null,G__30529,G__30530));
}));

(c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$4 = (function (event_name,root,selector,event_data){
return c3kit.wire.spec_helper.simulate.cljs$core$IFn$_invoke$arity$3(event_name,c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(root,selector),event_data);
}));

(c3kit.wire.spec_helper.simulate.cljs$lang$maxFixedArity = 4);

c3kit.wire.spec_helper.simulate_BANG_ = (function c3kit$wire$spec_helper$simulate_BANG_(var_args){
var G__30533 = arguments.length;
switch (G__30533) {
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
var G__30536 = arguments.length;
switch (G__30536) {
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
var G__30538 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_down,thing);
var G__30539 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(c3kit.wire.spec_helper.keypresses,key_code,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$code,key_code,cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_code)], null)));
var fexpr__30537 = c3kit.wire.spec_helper.simulator.keyDown;
return (fexpr__30537.cljs$core$IFn$_invoke$arity$2 ? fexpr__30537.cljs$core$IFn$_invoke$arity$2(G__30538,G__30539) : fexpr__30537.call(null,G__30538,G__30539));
}));

(c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key_code){
return c3kit.wire.spec_helper.key_down.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_down,root,selector),key_code);
}));

(c3kit.wire.spec_helper.key_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_down_BANG_ = (function c3kit$wire$spec_helper$key_down_BANG_(var_args){
var G__30542 = arguments.length;
switch (G__30542) {
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
var G__30545 = arguments.length;
switch (G__30545) {
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
var G__30547 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_up,thing);
var G__30548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.keypresses,key);
var fexpr__30546 = c3kit.wire.spec_helper.simulator.keyUp;
return (fexpr__30546.cljs$core$IFn$_invoke$arity$2 ? fexpr__30546.cljs$core$IFn$_invoke$arity$2(G__30547,G__30548) : fexpr__30546.call(null,G__30547,G__30548));
}));

(c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_up.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_up,root,selector),key);
}));

(c3kit.wire.spec_helper.key_up.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_up_BANG_ = (function c3kit$wire$spec_helper$key_up_BANG_(var_args){
var G__30551 = arguments.length;
switch (G__30551) {
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
var G__30554 = arguments.length;
switch (G__30554) {
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
var G__30556 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_press,thing);
var G__30557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.keypresses,key);
var fexpr__30555 = c3kit.wire.spec_helper.simulator.keyPress;
return (fexpr__30555.cljs$core$IFn$_invoke$arity$2 ? fexpr__30555.cljs$core$IFn$_invoke$arity$2(G__30556,G__30557) : fexpr__30555.call(null,G__30556,G__30557));
}));

(c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,key){
return c3kit.wire.spec_helper.key_press.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$key_DASH_press,root,selector),key);
}));

(c3kit.wire.spec_helper.key_press.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.key_press_BANG_ = (function c3kit$wire$spec_helper$key_press_BANG_(var_args){
var G__30560 = arguments.length;
switch (G__30560) {
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
var G__30563 = arguments.length;
switch (G__30563) {
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
var G__30565 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$touchend,thing);
var fexpr__30564 = c3kit.wire.spec_helper.simulator.touchend;
return (fexpr__30564.cljs$core$IFn$_invoke$arity$1 ? fexpr__30564.cljs$core$IFn$_invoke$arity$1(G__30565) : fexpr__30564.call(null,G__30565));
}));

(c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_end.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$touchend,root,selector));
}));

(c3kit.wire.spec_helper.touch_end.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_end_BANG_ = (function c3kit$wire$spec_helper$touch_end_BANG_(var_args){
var G__30568 = arguments.length;
switch (G__30568) {
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
var G__30571 = arguments.length;
switch (G__30571) {
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
var G__30573 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$touchstart,thing);
var fexpr__30572 = c3kit.wire.spec_helper.simulator.touchstart;
return (fexpr__30572.cljs$core$IFn$_invoke$arity$1 ? fexpr__30572.cljs$core$IFn$_invoke$arity$1(G__30573) : fexpr__30572.call(null,G__30573));
}));

(c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.touch_start.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$touchstart,root,selector));
}));

(c3kit.wire.spec_helper.touch_start.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.touch_start_BANG_ = (function c3kit$wire$spec_helper$touch_start_BANG_(var_args){
var G__30576 = arguments.length;
switch (G__30576) {
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
var G__30579 = arguments.length;
switch (G__30579) {
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
var G__30581 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$click,thing);
var fexpr__30580 = c3kit.wire.spec_helper.simulator.click;
return (fexpr__30580.cljs$core$IFn$_invoke$arity$1 ? fexpr__30580.cljs$core$IFn$_invoke$arity$1(G__30581) : fexpr__30580.call(null,G__30581));
}));

(c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.click.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$click,root,selector));
}));

(c3kit.wire.spec_helper.click.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.click_BANG_ = (function c3kit$wire$spec_helper$click_BANG_(var_args){
var G__30584 = arguments.length;
switch (G__30584) {
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
var G__30587 = arguments.length;
switch (G__30587) {
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
var G__30589 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_enter,thing);
var fexpr__30588 = c3kit.wire.spec_helper.simulator.mouseEnter;
return (fexpr__30588.cljs$core$IFn$_invoke$arity$1 ? fexpr__30588.cljs$core$IFn$_invoke$arity$1(G__30589) : fexpr__30588.call(null,G__30589));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_enter.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_enter,root,selector));
}));

(c3kit.wire.spec_helper.mouse_enter.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_enter_BANG_ = (function c3kit$wire$spec_helper$mouse_enter_BANG_(var_args){
var G__30592 = arguments.length;
switch (G__30592) {
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
var G__30595 = arguments.length;
switch (G__30595) {
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
var G__30597 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_up,thing);
var fexpr__30596 = c3kit.wire.spec_helper.simulator.mouseUp;
return (fexpr__30596.cljs$core$IFn$_invoke$arity$1 ? fexpr__30596.cljs$core$IFn$_invoke$arity$1(G__30597) : fexpr__30596.call(null,G__30597));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_up.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_up,root,selector));
}));

(c3kit.wire.spec_helper.mouse_up.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_up_BANG_ = (function c3kit$wire$spec_helper$mouse_up_BANG_(var_args){
var G__30600 = arguments.length;
switch (G__30600) {
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
var G__30603 = arguments.length;
switch (G__30603) {
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
var G__30605 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_move,thing);
var fexpr__30604 = c3kit.wire.spec_helper.simulator.mouseMove;
return (fexpr__30604.cljs$core$IFn$_invoke$arity$1 ? fexpr__30604.cljs$core$IFn$_invoke$arity$1(G__30605) : fexpr__30604.call(null,G__30605));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_move.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_move,root,selector));
}));

(c3kit.wire.spec_helper.mouse_move.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_move_BANG_ = (function c3kit$wire$spec_helper$mouse_move_BANG_(var_args){
var G__30608 = arguments.length;
switch (G__30608) {
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
var G__30611 = arguments.length;
switch (G__30611) {
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
var G__30613 = node;
var G__30614 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$button,button,cljs.core.cst$kw$buttons,(1)], null));
var fexpr__30612 = c3kit.wire.spec_helper.simulator.mouseDown;
return (fexpr__30612.cljs$core$IFn$_invoke$arity$2 ? fexpr__30612.cljs$core$IFn$_invoke$arity$2(G__30613,G__30614) : fexpr__30612.call(null,G__30613,G__30614));
}));

(c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$3 = (function (root,button,selector){
return c3kit.wire.spec_helper.mouse_down.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_down,root,selector),button);
}));

(c3kit.wire.spec_helper.mouse_down.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.mouse_down_BANG_ = (function c3kit$wire$spec_helper$mouse_down_BANG_(var_args){
var G__30617 = arguments.length;
switch (G__30617) {
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
var G__30620 = arguments.length;
switch (G__30620) {
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
var G__30622 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mouse_DASH_leave,thing);
var fexpr__30621 = c3kit.wire.spec_helper.simulator.mouseLeave;
return (fexpr__30621.cljs$core$IFn$_invoke$arity$1 ? fexpr__30621.cljs$core$IFn$_invoke$arity$1(G__30622) : fexpr__30621.call(null,G__30622));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.mouse_leave.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$mouse_DASH_leave,root,selector));
}));

(c3kit.wire.spec_helper.mouse_leave.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.mouse_leave_BANG_ = (function c3kit$wire$spec_helper$mouse_leave_BANG_(var_args){
var G__30625 = arguments.length;
switch (G__30625) {
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
var G__30628 = arguments.length;
switch (G__30628) {
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
var G__30630 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag,thing);
var G__30631 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30629 = c3kit.wire.spec_helper.simulator.drag;
return (fexpr__30629.cljs$core$IFn$_invoke$arity$2 ? fexpr__30629.cljs$core$IFn$_invoke$arity$2(G__30630,G__30631) : fexpr__30629.call(null,G__30630,G__30631));
}));

(c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_BANG_ = (function c3kit$wire$spec_helper$drag_BANG_(var_args){
var G__30634 = arguments.length;
switch (G__30634) {
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
var G__30637 = arguments.length;
switch (G__30637) {
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
var G__30639 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_start,thing);
var G__30640 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30638 = c3kit.wire.spec_helper.simulator.dragStart;
return (fexpr__30638.cljs$core$IFn$_invoke$arity$2 ? fexpr__30638.cljs$core$IFn$_invoke$arity$2(G__30639,G__30640) : fexpr__30638.call(null,G__30639,G__30640));
}));

(c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_start.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_start,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_start.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_start_BANG_ = (function c3kit$wire$spec_helper$drag_start_BANG_(var_args){
var G__30643 = arguments.length;
switch (G__30643) {
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
var G__30646 = arguments.length;
switch (G__30646) {
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
var G__30648 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_enter,thing);
var G__30649 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30647 = c3kit.wire.spec_helper.simulator.dragEnter;
return (fexpr__30647.cljs$core$IFn$_invoke$arity$2 ? fexpr__30647.cljs$core$IFn$_invoke$arity$2(G__30648,G__30649) : fexpr__30647.call(null,G__30648,G__30649));
}));

(c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_enter.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_enter,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_enter.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_enter_BANG_ = (function c3kit$wire$spec_helper$drag_enter_BANG_(var_args){
var G__30652 = arguments.length;
switch (G__30652) {
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
var G__30655 = arguments.length;
switch (G__30655) {
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
var G__30657 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_leave,thing);
var G__30658 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30656 = c3kit.wire.spec_helper.simulator.dragLeave;
return (fexpr__30656.cljs$core$IFn$_invoke$arity$2 ? fexpr__30656.cljs$core$IFn$_invoke$arity$2(G__30657,G__30658) : fexpr__30656.call(null,G__30657,G__30658));
}));

(c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_leave.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_leave,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_leave.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_leave_BANG_ = (function c3kit$wire$spec_helper$drag_leave_BANG_(var_args){
var G__30661 = arguments.length;
switch (G__30661) {
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
var G__30664 = arguments.length;
switch (G__30664) {
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
var G__30666 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_end,thing);
var G__30667 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30665 = c3kit.wire.spec_helper.simulator.dragEnd;
return (fexpr__30665.cljs$core$IFn$_invoke$arity$2 ? fexpr__30665.cljs$core$IFn$_invoke$arity$2(G__30666,G__30667) : fexpr__30665.call(null,G__30666,G__30667));
}));

(c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_end.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_end,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_end.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_end_BANG_ = (function c3kit$wire$spec_helper$drag_end_BANG_(var_args){
var G__30670 = arguments.length;
switch (G__30670) {
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
var G__30673 = arguments.length;
switch (G__30673) {
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
var G__30675 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$drag_DASH_over,thing);
var G__30676 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30674 = c3kit.wire.spec_helper.simulator.dragOver;
return (fexpr__30674.cljs$core$IFn$_invoke$arity$2 ? fexpr__30674.cljs$core$IFn$_invoke$arity$2(G__30675,G__30676) : fexpr__30674.call(null,G__30675,G__30676));
}));

(c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.drag_over.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$drag_DASH_over,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.drag_over.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.drag_over_BANG_ = (function c3kit$wire$spec_helper$drag_over_BANG_(var_args){
var G__30679 = arguments.length;
switch (G__30679) {
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
var G__30682 = arguments.length;
switch (G__30682) {
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
var G__30684 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_drop,thing);
var G__30685 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dataTransfer,data_transfer], null));
var fexpr__30683 = c3kit.wire.spec_helper.simulator.drop;
return (fexpr__30683.cljs$core$IFn$_invoke$arity$2 ? fexpr__30683.cljs$core$IFn$_invoke$arity$2(G__30684,G__30685) : fexpr__30683.call(null,G__30684,G__30685));
}));

(c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$3 = (function (root,selector,data_transfer){
return c3kit.wire.spec_helper.on_drop.cljs$core$IFn$_invoke$arity$2(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$on_DASH_drop,root,selector),data_transfer);
}));

(c3kit.wire.spec_helper.on_drop.cljs$lang$maxFixedArity = 3);

c3kit.wire.spec_helper.on_drop_BANG_ = (function c3kit$wire$spec_helper$on_drop_BANG_(var_args){
var G__30688 = arguments.length;
switch (G__30688) {
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
var G__30691 = arguments.length;
switch (G__30691) {
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
var G__30693 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$focus,thing);
var fexpr__30692 = c3kit.wire.spec_helper.simulator.focus;
return (fexpr__30692.cljs$core$IFn$_invoke$arity$1 ? fexpr__30692.cljs$core$IFn$_invoke$arity$1(G__30693) : fexpr__30692.call(null,G__30693));
}));

(c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.focus.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$focus,root,selector));
}));

(c3kit.wire.spec_helper.focus.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.focus_BANG_ = (function c3kit$wire$spec_helper$focus_BANG_(var_args){
var G__30696 = arguments.length;
switch (G__30696) {
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
var G__30699 = arguments.length;
switch (G__30699) {
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
var G__30701 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blur,thing);
var fexpr__30700 = c3kit.wire.spec_helper.simulator.blur;
return (fexpr__30700.cljs$core$IFn$_invoke$arity$1 ? fexpr__30700.cljs$core$IFn$_invoke$arity$1(G__30701) : fexpr__30700.call(null,G__30701));
}));

(c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$2 = (function (root,selector){
return c3kit.wire.spec_helper.blur.cljs$core$IFn$_invoke$arity$1(c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$blur,root,selector));
}));

(c3kit.wire.spec_helper.blur.cljs$lang$maxFixedArity = 2);

c3kit.wire.spec_helper.blur_BANG_ = (function c3kit$wire$spec_helper$blur_BANG_(var_args){
var G__30704 = arguments.length;
switch (G__30704) {
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
var G__30707 = arguments.length;
switch (G__30707) {
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
var G__30709 = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change,thing);
var G__30710 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,thing], null);
var fexpr__30708 = c3kit.wire.spec_helper.simulator.change;
return (fexpr__30708.cljs$core$IFn$_invoke$arity$2 ? fexpr__30708.cljs$core$IFn$_invoke$arity$2(G__30709,G__30710) : fexpr__30708.call(null,G__30709,G__30710));
}));

(c3kit.wire.spec_helper.change.cljs$core$IFn$_invoke$arity$2 = (function (thing,value){
var node = c3kit.wire.spec_helper.resolve_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$change,thing);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",node.type)){
var G__30712 = node;
var G__30713 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$files,value], null)], null));
var fexpr__30711 = c3kit.wire.spec_helper.simulator.change;
return (fexpr__30711.cljs$core$IFn$_invoke$arity$2 ? fexpr__30711.cljs$core$IFn$_invoke$arity$2(G__30712,G__30713) : fexpr__30711.call(null,G__30712,G__30713));
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
var G__30716 = arguments.length;
switch (G__30716) {
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
var G__30719 = arguments.length;
switch (G__30719) {
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
var G__30722 = arguments.length;
switch (G__30722) {
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
var G__30725 = arguments.length;
switch (G__30725) {
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
var G__30728 = arguments.length;
switch (G__30728) {
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
var G__30729 = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(selector_or_elem);
if((G__30729 == null)){
return null;
} else {
return c3kit.wire.js.node_text(G__30729);
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
var G__30730 = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$2(root,selector);
if((G__30730 == null)){
return null;
} else {
return c3kit.wire.js.node_text(G__30730);
}
}));

(c3kit.wire.spec_helper.text.cljs$lang$maxFixedArity = 2);

/**
 * Throws exception if the node doesn't exist.
 */
c3kit.wire.spec_helper.html_BANG_ = (function c3kit$wire$spec_helper$html_BANG_(var_args){
var G__30733 = arguments.length;
switch (G__30733) {
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
var G__30736 = arguments.length;
switch (G__30736) {
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
var G__30739 = arguments.length;
switch (G__30739) {
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
var G__30742 = arguments.length;
switch (G__30742) {
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
var G__30745 = arguments.length;
switch (G__30745) {
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
var G__30748 = arguments.length;
switch (G__30748) {
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
var G__30751 = arguments.length;
switch (G__30751) {
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
var G__30754 = arguments.length;
switch (G__30754) {
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
var G__30757 = arguments.length;
switch (G__30757) {
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
var G__30760 = arguments.length;
switch (G__30760) {
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
var G__30763 = arguments.length;
switch (G__30763) {
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
var G__30766 = arguments.length;
switch (G__30766) {
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
var G__30769 = arguments.length;
switch (G__30769) {
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
var G__30772 = arguments.length;
switch (G__30772) {
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
return speclj.components.new_around((function (it__30078__auto__){
var post_BANG__orig_val__30774 = c3kit.wire.ajax.post_BANG_;
var get_BANG__orig_val__30775 = c3kit.wire.ajax.get_BANG_;
var post_BANG__temp_val__30776 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ajax_SLASH_post_BANG_,cljs.core.PersistentArrayMap.EMPTY);
var get_BANG__temp_val__30777 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ajax_SLASH_get_BANG_,cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.ajax.post_BANG_ = post_BANG__temp_val__30776);

(c3kit.wire.ajax.get_BANG_ = get_BANG__temp_val__30777);

try{return (it__30078__auto__.cljs$core$IFn$_invoke$arity$0 ? it__30078__auto__.cljs$core$IFn$_invoke$arity$0() : it__30078__auto__.call(null));
}finally {(c3kit.wire.ajax.get_BANG_ = get_BANG__orig_val__30775);

(c3kit.wire.ajax.post_BANG_ = post_BANG__orig_val__30774);
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
var G__30778 = c3kit.wire.spec_helper.last_ajax_post_handler();
if((G__30778 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__30778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
c3kit.wire.spec_helper.invoke_last_ajax_get_handler = (function c3kit$wire$spec_helper$invoke_last_ajax_get_handler(payload){
var G__30779 = c3kit.wire.spec_helper.last_ajax_get_handler();
if((G__30779 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__30779,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
c3kit.wire.spec_helper.stub_ws = (function c3kit$wire$spec_helper$stub_ws(){
return speclj.components.new_around((function (it__30078__auto__){
var call_BANG__orig_val__30780 = c3kit.wire.websocket.call_BANG_;
var call_BANG__temp_val__30781 = speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ws_SLASH_call_BANG_,cljs.core.PersistentArrayMap.EMPTY);
(c3kit.wire.websocket.call_BANG_ = call_BANG__temp_val__30781);

try{return (it__30078__auto__.cljs$core$IFn$_invoke$arity$0 ? it__30078__auto__.cljs$core$IFn$_invoke$arity$0() : it__30078__auto__.call(null));
}finally {(c3kit.wire.websocket.call_BANG_ = call_BANG__orig_val__30780);
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
var G__30782 = c3kit.wire.spec_helper.last_ws_call_handler();
if((G__30782 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__30782,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0));
}
});
