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
c3kit.wire.websocket.make_call_BANG_ = (function c3kit$wire$websocket$make_call_BANG_(p__28070){
var map__28071 = p__28070;
var map__28071__$1 = (((((!((map__28071 == null))))?(((((map__28071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28071):map__28071);
var remote_call = map__28071__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071__$1,cljs.core.cst$kw$kind);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071__$1,cljs.core.cst$kw$params);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["call: ",kind,params], null);
}),null)),null,(52),null);

return c3kit.wire.websocketc.call_BANG_(c3kit.wire.websocket.client,kind,params,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocket.handle_remote_response,remote_call));
});
c3kit.wire.websocket.call_BANG_ = (function c3kit$wire$websocket$call_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28077 = arguments.length;
var i__4737__auto___28078 = (0);
while(true){
if((i__4737__auto___28078 < len__4736__auto___28077)){
args__4742__auto__.push((arguments[i__4737__auto___28078]));

var G__28079 = (i__4737__auto___28078 + (1));
i__4737__auto___28078 = G__28079;
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
(c3kit.wire.websocket.call_BANG_.cljs$lang$applyTo = (function (seq28073){
var G__28074 = cljs.core.first(seq28073);
var seq28073__$1 = cljs.core.next(seq28073);
var G__28075 = cljs.core.first(seq28073__$1);
var seq28073__$2 = cljs.core.next(seq28073__$1);
var G__28076 = cljs.core.first(seq28073__$2);
var seq28073__$3 = cljs.core.next(seq28073__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28074,G__28075,G__28076,seq28073__$3);
}));

c3kit.wire.websocket.on_open = (function c3kit$wire$websocket$on_open(_){
var calls = cljs.core.deref(c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_(c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__28080 = cljs.core.seq(calls);
var chunk__28081 = null;
var count__28082 = (0);
var i__28083 = (0);
while(true){
if((i__28083 < count__28082)){
var call = chunk__28081.cljs$core$IIndexed$_nth$arity$2(null,i__28083);
c3kit.wire.websocket.make_call_BANG_(call);


var G__28084 = seq__28080;
var G__28085 = chunk__28081;
var G__28086 = count__28082;
var G__28087 = (i__28083 + (1));
seq__28080 = G__28084;
chunk__28081 = G__28085;
count__28082 = G__28086;
i__28083 = G__28087;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28080);
if(temp__5804__auto__){
var seq__28080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28080__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28080__$1);
var G__28088 = cljs.core.chunk_rest(seq__28080__$1);
var G__28089 = c__4556__auto__;
var G__28090 = cljs.core.count(c__4556__auto__);
var G__28091 = (0);
seq__28080 = G__28088;
chunk__28081 = G__28089;
count__28082 = G__28090;
i__28083 = G__28091;
continue;
} else {
var call = cljs.core.first(seq__28080__$1);
c3kit.wire.websocket.make_call_BANG_(call);


var G__28092 = cljs.core.next(seq__28080__$1);
var G__28093 = null;
var G__28094 = (0);
var G__28095 = (0);
seq__28080 = G__28092;
chunk__28081 = G__28093;
count__28082 = G__28094;
i__28083 = G__28095;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__28096 = cljs.core.get_global_hierarchy;
return (fexpr__28096.cljs$core$IFn$_invoke$arity$0 ? fexpr__28096.cljs$core$IFn$_invoke$arity$0() : fexpr__28096.call(null));
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
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_hello,(function (p__28097){
var map__28098 = p__28097;
var map__28098__$1 = (((((!((map__28098 == null))))?(((((map__28098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28098):map__28098);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28098__$1,cljs.core.cst$kw$params);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocket",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello: ",params], null);
}),null)),null,(54),null);
}));
c3kit.wire.websocket.push_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ws_SLASH_open,(function (_){
cljs.core.reset_BANG_(c3kit.wire.websocket.open_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref(c3kit.wire.websocket.reconnection_QMARK_))){
cljs.core.reset_BANG_(c3kit.wire.websocket.reconnection_QMARK_,false);

var temp__5804__auto___28104 = cljs.core.cst$kw$ws_DASH_on_DASH_reconnected.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config));
if(cljs.core.truth_(temp__5804__auto___28104)){
var on_reconnected_28105 = temp__5804__auto___28104;
(on_reconnected_28105.cljs$core$IFn$_invoke$arity$0 ? on_reconnected_28105.cljs$core$IFn$_invoke$arity$0() : on_reconnected_28105.call(null));
} else {
}
} else {
}

var calls = cljs.core.deref(c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_(c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__28100 = cljs.core.seq(calls);
var chunk__28101 = null;
var count__28102 = (0);
var i__28103 = (0);
while(true){
if((i__28103 < count__28102)){
var call = chunk__28101.cljs$core$IIndexed$_nth$arity$2(null,i__28103);
c3kit.wire.websocket.make_call_BANG_(call);


var G__28106 = seq__28100;
var G__28107 = chunk__28101;
var G__28108 = count__28102;
var G__28109 = (i__28103 + (1));
seq__28100 = G__28106;
chunk__28101 = G__28107;
count__28102 = G__28108;
i__28103 = G__28109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28100);
if(temp__5804__auto__){
var seq__28100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28100__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28100__$1);
var G__28110 = cljs.core.chunk_rest(seq__28100__$1);
var G__28111 = c__4556__auto__;
var G__28112 = cljs.core.count(c__4556__auto__);
var G__28113 = (0);
seq__28100 = G__28110;
chunk__28101 = G__28111;
count__28102 = G__28112;
i__28103 = G__28113;
continue;
} else {
var call = cljs.core.first(seq__28100__$1);
c3kit.wire.websocket.make_call_BANG_(call);


var G__28114 = cljs.core.next(seq__28100__$1);
var G__28115 = null;
var G__28116 = (0);
var G__28117 = (0);
seq__28100 = G__28114;
chunk__28101 = G__28115;
count__28102 = G__28116;
i__28103 = G__28117;
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
