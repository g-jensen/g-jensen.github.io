// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.websocket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.wire.js');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.websocketc');
goog.require('reagent.core');
c3kit.wire.websocket.client = null;
c3kit.wire.websocket.open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
c3kit.wire.websocket.reconnection_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.pending_calls !== 'undefined')){
} else {
c3kit.wire.websocket.pending_calls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
c3kit.wire.websocket.handle_remote_response = (function c3kit$wire$websocket$handle_remote_response(remote_call,response){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote response: ",response], null);
}),null)),null,(51),null);

return c3kit.wire.api.handle_api_response(response,remote_call);
});
c3kit.wire.websocket.build_remote_call = (function c3kit$wire$websocket$build_remote_call(kind,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$options,c3kit.apron.corec.__GT_options(opt_args),cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$params,params,cljs.core.cst$kw$handler,handler], null);
});
c3kit.wire.websocket.make_call_BANG_ = (function c3kit$wire$websocket$make_call_BANG_(p__21908){
var map__21909 = p__21908;
var map__21909__$1 = (((((!((map__21909 == null))))?(((((map__21909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21909):map__21909);
var remote_call = map__21909__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,cljs.core.cst$kw$kind);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,cljs.core.cst$kw$params);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["call: ",kind,params], null);
}),null)),null,(52),null);

return c3kit.wire.websocketc.call_BANG_(c3kit.wire.websocket.client,kind,params,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocket.handle_remote_response,remote_call));
});
c3kit.wire.websocket.call_BANG_ = (function c3kit$wire$websocket$call_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21915 = arguments.length;
var i__4737__auto___21916 = (0);
while(true){
if((i__4737__auto___21916 < len__4736__auto___21915)){
args__4742__auto__.push((arguments[i__4737__auto___21916]));

var G__21917 = (i__4737__auto___21916 + (1));
i__4737__auto___21916 = G__21917;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (kind,params,handler,opt_args){
var remote_call = c3kit.wire.websocket.build_remote_call(kind,params,handler,opt_args);
if(cljs.core.truth_(cljs.core.deref(c3kit.wire.websocket.open_QMARK_))){
return c3kit.wire.websocket.make_call_BANG_(remote_call);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.wire.websocket.pending_calls,cljs.core.conj,remote_call);
}
}));

(c3kit.wire.websocket.call_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.websocket.call_BANG_.cljs$lang$applyTo = (function (seq21911){
var G__21912 = cljs.core.first(seq21911);
var seq21911__$1 = cljs.core.next(seq21911);
var G__21913 = cljs.core.first(seq21911__$1);
var seq21911__$2 = cljs.core.next(seq21911__$1);
var G__21914 = cljs.core.first(seq21911__$2);
var seq21911__$3 = cljs.core.next(seq21911__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21912,G__21913,G__21914,seq21911__$3);
}));

c3kit.wire.websocket.on_open = (function c3kit$wire$websocket$on_open(_){
var calls = cljs.core.deref(c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_(c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__21918 = cljs.core.seq(calls);
var chunk__21919 = null;
var count__21920 = (0);
var i__21921 = (0);
while(true){
if((i__21921 < count__21920)){
var call = chunk__21919.cljs$core$IIndexed$_nth$arity$2(null,i__21921);
c3kit.wire.websocket.make_call_BANG_(call);


var G__21922 = seq__21918;
var G__21923 = chunk__21919;
var G__21924 = count__21920;
var G__21925 = (i__21921 + (1));
seq__21918 = G__21922;
chunk__21919 = G__21923;
count__21920 = G__21924;
i__21921 = G__21925;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21918);
if(temp__5804__auto__){
var seq__21918__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21918__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21918__$1);
var G__21926 = cljs.core.chunk_rest(seq__21918__$1);
var G__21927 = c__4556__auto__;
var G__21928 = cljs.core.count(c__4556__auto__);
var G__21929 = (0);
seq__21918 = G__21926;
chunk__21919 = G__21927;
count__21920 = G__21928;
i__21921 = G__21929;
continue;
} else {
var call = cljs.core.first(seq__21918__$1);
c3kit.wire.websocket.make_call_BANG_(call);


var G__21930 = cljs.core.next(seq__21918__$1);
var G__21931 = null;
var G__21932 = (0);
var G__21933 = (0);
seq__21918 = G__21930;
chunk__21919 = G__21931;
count__21920 = G__21932;
i__21921 = G__21933;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.push_handler !== 'undefined')){
} else {
c3kit.wire.websocket.push_handler = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__21934 = cljs.core.get_global_hierarchy;
return (fexpr__21934.cljs$core$IFn$_invoke$arity$0 ? fexpr__21934.cljs$core$IFn$_invoke$arity$0() : fexpr__21934.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("c3kit.wire.websocket","push-handler"),cljs.core.cst$kw$kind,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_ping,(function (_){
return null;
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (message){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled push event: ",message], null);
}),null)),null,(53),null);
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_hello,(function (p__21935){
var map__21936 = p__21935;
var map__21936__$1 = (((((!((map__21936 == null))))?(((((map__21936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21936):map__21936);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,cljs.core.cst$kw$params);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello: ",params], null);
}),null)),null,(54),null);
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_open,(function (_){
cljs.core.reset_BANG_(c3kit.wire.websocket.open_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref(c3kit.wire.websocket.reconnection_QMARK_))){
cljs.core.reset_BANG_(c3kit.wire.websocket.reconnection_QMARK_,false);

var temp__5804__auto___21942 = cljs.core.cst$kw$ws_DASH_on_DASH_reconnected.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config));
if(cljs.core.truth_(temp__5804__auto___21942)){
var on_reconnected_21943 = temp__5804__auto___21942;
(on_reconnected_21943.cljs$core$IFn$_invoke$arity$0 ? on_reconnected_21943.cljs$core$IFn$_invoke$arity$0() : on_reconnected_21943.call(null));
} else {
}
} else {
}

var calls = cljs.core.deref(c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_(c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__21938 = cljs.core.seq(calls);
var chunk__21939 = null;
var count__21940 = (0);
var i__21941 = (0);
while(true){
if((i__21941 < count__21940)){
var call = chunk__21939.cljs$core$IIndexed$_nth$arity$2(null,i__21941);
c3kit.wire.websocket.make_call_BANG_(call);


var G__21944 = seq__21938;
var G__21945 = chunk__21939;
var G__21946 = count__21940;
var G__21947 = (i__21941 + (1));
seq__21938 = G__21944;
chunk__21939 = G__21945;
count__21940 = G__21946;
i__21941 = G__21947;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21938);
if(temp__5804__auto__){
var seq__21938__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21938__$1);
var G__21948 = cljs.core.chunk_rest(seq__21938__$1);
var G__21949 = c__4556__auto__;
var G__21950 = cljs.core.count(c__4556__auto__);
var G__21951 = (0);
seq__21938 = G__21948;
chunk__21939 = G__21949;
count__21940 = G__21950;
i__21941 = G__21951;
continue;
} else {
var call = cljs.core.first(seq__21938__$1);
c3kit.wire.websocket.make_call_BANG_(call);


var G__21952 = cljs.core.next(seq__21938__$1);
var G__21953 = null;
var G__21954 = (0);
var G__21955 = (0);
seq__21938 = G__21952;
chunk__21939 = G__21953;
count__21940 = G__21954;
i__21941 = G__21955;
continue;
}
} else {
return null;
}
}
break;
}
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_close,(function (_){
cljs.core.reset_BANG_(c3kit.wire.websocket.open_QMARK_,false);

cljs.core.reset_BANG_(c3kit.wire.websocket.reconnection_QMARK_,true);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connection closed... reconnecting"], null);
}),null)),null,(55),null);

return c3kit.wire.js.timeout((1000),(c3kit.wire.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$0 ? c3kit.wire.websocket.connect_BANG_.cljs$core$IFn$_invoke$arity$0() : c3kit.wire.websocket.connect_BANG_.call(null)));
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_error,(function (_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error"], null);
}),null)),null,(56),null);
}));
c3kit.wire.websocket.message_handler = (function c3kit$wire$websocket$message_handler(message){
return (c3kit.wire.websocket.push_handler.cljs$core$IFn$_invoke$arity$1 ? c3kit.wire.websocket.push_handler.cljs$core$IFn$_invoke$arity$1(message) : c3kit.wire.websocket.push_handler.call(null,message));
});
c3kit.wire.websocket.connect_BANG_ = (function c3kit$wire$websocket$connect_BANG_(){
return c3kit.wire.websocketc.connect_BANG_(c3kit.wire.websocket.client,cljs.core.cst$kw$ws_DASH_uri_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config)),cljs.core.cst$kw$ws_DASH_csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config)));
});
c3kit.wire.websocket.start_BANG_ = (function c3kit$wire$websocket$start_BANG_(){
if(cljs.core.truth_(c3kit.wire.websocket.client)){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$ws_DASH_csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config)))){
(c3kit.wire.websocket.client = c3kit.wire.websocketc.create.cljs$core$IFn$_invoke$arity$variadic(c3kit.wire.websocket.message_handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$atom_DASH_fn,reagent.core.atom], 0)));

return c3kit.wire.websocket.connect_BANG_();
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CSRF Token missing.  Unable to start websocket."], null);
}),null)),null,(57),null);
}
}
});
c3kit.wire.websocket.stop_BANG_ = (function c3kit$wire$websocket$stop_BANG_(){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stopping websocket"], null);
}),null)),null,(58),null);
});
c3kit.wire.websocket.disconnected_button = (function c3kit$wire$websocket$disconnected_button(){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$contextual_DASH_menu_DASH_anchor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_SHARP__DASH_disconnected_DASH_button$disconnected$naked,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$fas$fa_DASH_exclamation_DASH_triangle$animation$error$small_DASH_margin_DASH_left], null)], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP__DASH_disconnected_DASH_menu_DASH_overlay$contextual_DASH_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP__DASH_disconnected_DASH_menu$card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$small_DASH_margin_DASH_bottom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$fas$fa_DASH_link], null),"Connection Broken"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$margin_DASH_bottom,"Your connection with the server has been broken. ","We are trying to reconnect.  If that doesn't seem to help, please try reloading this page."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,c3kit.wire.js.page_reload_BANG_], null),"Reload Page"], null)], null)], null):null)], null);
});
});
c3kit.wire.websocket.connection_status = (function c3kit$wire$websocket$connection_status(){
if(cljs.core.truth_(cljs.core.deref(c3kit.wire.websocket.open_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.websocket.disconnected_button], null);
}
});
