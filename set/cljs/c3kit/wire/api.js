// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.apic');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.flashc');
goog.require('c3kit.wire.js');
c3kit.wire.api.config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$version,"undefined",cljs.core.cst$kw$redirect_DASH_fn,c3kit.wire.js.redirect_BANG_,cljs.core.cst$kw$ajax_DASH_prep_DASH_fn,null,cljs.core.cst$kw$ajax_DASH_on_DASH_unsuccessful_DASH_response,null,cljs.core.cst$kw$ws_DASH_csrf_DASH_token,null,cljs.core.cst$kw$ws_DASH_on_DASH_reconnected,null,cljs.core.cst$kw$ws_DASH_uri_DASH_path,"/user/websocket"], null));
c3kit.wire.api.configure_BANG_ = (function c3kit$wire$api$configure_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20233 = arguments.length;
var i__4737__auto___20234 = (0);
while(true){
if((i__4737__auto___20234 < len__4736__auto___20233)){
args__4742__auto__.push((arguments[i__4737__auto___20234]));

var G__20235 = (i__4737__auto___20234 + (1));
i__4737__auto___20234 = G__20235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.wire.api.configure_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.wire.api.configure_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (options){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.wire.api.config,cljs.core.merge,c3kit.apron.corec.__GT_options(options));
}));

(c3kit.wire.api.configure_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.api.configure_BANG_.cljs$lang$applyTo = (function (seq20232){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20232));
}));

c3kit.wire.api.handle_payload = (function c3kit$wire$api$handle_payload(handler,payload){
try{return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(payload) : handler.call(null,payload));
}catch (e20236){var e = e20236;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.api",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AJAX handler error"], null);
}),null)),null,(33),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.api",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null);
}),null)),null,(34),null);

return c3kit.wire.flash.add_error_BANG_("Oh no!  I choked on some data.  Doh!");
}});
c3kit.wire.api.redirect = (function c3kit$wire$api$redirect(uri){
var G__20237 = cljs.core.deref(c3kit.wire.api.config);
var G__20237__$1 = (((G__20237 == null))?null:cljs.core.cst$kw$redirect_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__20237));
if((G__20237__$1 == null)){
return null;
} else {
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__20237__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uri], 0));
}
});
c3kit.wire.api.refresh_link = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.redirect_BANG_,c3kit.wire.js.page_href)], null),"refresh"], null);
c3kit.wire.api.server_down_flash = c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$warn,"Server Maintenance - please wait a moment as we try to reconnect.",true);
c3kit.wire.api.new_version_flash = c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$warn,(new cljs.core.List(null,"There is a newer version of this app.  Please ",(new cljs.core.List(null,c3kit.wire.api.refresh_link,(new cljs.core.List(null,".",null,(1),null)),(2),null)),(3),null)),true);
c3kit.wire.api.forbidden_flash = c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$warn,(new cljs.core.List(null,"403 - Forbidden.  Please ",(new cljs.core.List(null,c3kit.wire.api.refresh_link,(new cljs.core.List(null,".",null,(1),null)),(2),null)),(3),null)),true);
c3kit.wire.api.new_version_BANG_ = (function c3kit$wire$api$new_version_BANG_(version){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.api",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new version: ",version,", was: ",cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config))], null);
}),null)),null,(35),null);

return c3kit.wire.flash.add_BANG_(c3kit.wire.api.new_version_flash);
});
c3kit.wire.api.handle_api_response = (function c3kit$wire$api$handle_api_response(raw_response,p__20238){
var map__20239 = p__20238;
var map__20239__$1 = (((((!((map__20239 == null))))?(((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20239):map__20239);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,cljs.core.cst$kw$handler);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,cljs.core.cst$kw$options);
c3kit.wire.flash.remove_BANG_(c3kit.wire.api.server_down_flash);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"c3kit.wire.api",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["raw response: ",raw_response], null);
}),null)),null,(36),null);

var map__20241_20246 = c3kit.wire.apic.conform_response(raw_response);
var map__20241_20247__$1 = (((((!((map__20241_20246 == null))))?(((((map__20241_20246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20241_20246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20241_20246):map__20241_20246);
var status_20248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241_20247__$1,cljs.core.cst$kw$status);
var flash_20249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241_20247__$1,cljs.core.cst$kw$flash);
var payload_20250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241_20247__$1,cljs.core.cst$kw$payload);
var version_20251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241_20247__$1,cljs.core.cst$kw$version);
var uri_20252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241_20247__$1,cljs.core.cst$kw$uri);
if(cljs.core.seq(flash_20249)){
cljs.core.run_BANG_(c3kit.wire.flash.add_BANG_,flash_20249);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = version_20251;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(version_20251,cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config)));
} else {
return and__4115__auto__;
}
})())){
c3kit.wire.api.new_version_BANG_(version_20251);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ok,status_20248)){
c3kit.wire.api.handle_payload(handler,payload_20250);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redirect,status_20248)) && (cljs.core.not(cljs.core.cst$kw$no_DASH_redirect.cljs$core$IFn$_invoke$arity$1(options))))){
c3kit.wire.api.redirect(uri_20252);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fail,status_20248)){
var G__20243_20253 = options;
var G__20243_20254__$1 = (((G__20243_20253 == null))?null:cljs.core.cst$kw$on_DASH_fail.cljs$core$IFn$_invoke$arity$1(G__20243_20253));
if((G__20243_20254__$1 == null)){
} else {
c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__20243_20254__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload_20250], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,status_20248)){
var G__20244_20255 = options;
var G__20244_20256__$1 = (((G__20244_20255 == null))?null:cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__20244_20255));
if((G__20244_20256__$1 == null)){
} else {
c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic(G__20244_20256__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload_20250], 0));
}
} else {
}

var G__20245 = options;
var G__20245__$1 = (((G__20245 == null))?null:cljs.core.cst$kw$after_DASH_all.cljs$core$IFn$_invoke$arity$1(G__20245));
if((G__20245__$1 == null)){
return null;
} else {
return c3kit.apron.corec.invoke(G__20245__$1);
}
});
