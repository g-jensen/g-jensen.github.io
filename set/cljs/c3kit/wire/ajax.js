// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.ajax');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.js');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.ajax.active_ajax_requests = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
c3kit.wire.ajax.activity_QMARK_ = (function c3kit$wire$ajax$activity_QMARK_(){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(c3kit.wire.ajax.active_ajax_requests));
});
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__20259){
var map__20260 = p__20259;
var map__20260__$1 = (((((!((map__20260 == null))))?(((((map__20260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20260):map__20260);
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20260__$1,cljs.core.cst$kw$error_DASH_code);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20260__$1,cljs.core.cst$kw$status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_DASH_error,error_code)){
var fexpr__20263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null);
return (fexpr__20263.cljs$core$IFn$_invoke$arity$1 ? fexpr__20263.cljs$core$IFn$_invoke$arity$1(status) : fexpr__20263.call(null,status));
} else {
return false;
}
});
c3kit.wire.ajax.handle_server_down = (function c3kit$wire$ajax$handle_server_down(ajax_call){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appears that server is down.  Will retry after in a moment."], null);
}),null)),null,(37),null);

c3kit.wire.flash.add_BANG_(c3kit.wire.api.server_down_flash);

return c3kit.wire.js.timeout((3000),(function (){
return (c3kit.wire.ajax._do_ajax_request.cljs$core$IFn$_invoke$arity$1 ? c3kit.wire.ajax._do_ajax_request.cljs$core$IFn$_invoke$arity$1(ajax_call) : c3kit.wire.ajax._do_ajax_request.call(null,ajax_call));
}));
});
c3kit.wire.ajax.handle_unexpected_response = (function c3kit$wire$ajax$handle_unexpected_response(response,ajax_call){
var temp__5802__auto__ = cljs.core.cst$kw$on_DASH_http_DASH_error.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core.truth_(temp__5802__auto__)){
var on_http_error = temp__5802__auto__;
return (on_http_error.cljs$core$IFn$_invoke$arity$1 ? on_http_error.cljs$core$IFn$_invoke$arity$1(response) : on_http_error.call(null,response));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unexpected AJAX response: ",response,ajax_call], null);
}),null)),null,(38),null);
}
});
c3kit.wire.ajax.handle_unsuccessful_response = (function c3kit$wire$ajax$handle_unsuccessful_response(response,ajax_call){
if(cljs.core.truth_(c3kit.wire.ajax.server_down_QMARK_(response))){
return c3kit.wire.ajax.handle_server_down(ajax_call);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((403),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.flash.add_BANG_(c3kit.wire.api.forbidden_flash);
} else {
return c3kit.wire.ajax.handle_unexpected_response(response,ajax_call);

}
}
});
c3kit.wire.ajax.triage_response = (function c3kit$wire$ajax$triage_response(response,ajax_call){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.api.handle_api_response(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response),ajax_call);
} else {
var temp__5802__auto__ = cljs.core.cst$kw$ajax_DASH_on_DASH_unsuccessful_DASH_response.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config));
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(response,ajax_call) : handler.call(null,response,ajax_call));
} else {
return c3kit.wire.ajax.handle_unsuccessful_response(response,ajax_call);
}

}
});
/**
 * Create a prep fn to add a CSRF header to each request
 *   (prep-csrf "X-CSRF-Token"] csrf-token)
 */
c3kit.wire.ajax.prep_csrf = (function c3kit$wire$ajax$prep_csrf(header,token){
return (function (ajax_call){
return cljs.core.assoc_in(ajax_call,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$headers,header], null),token);
});
});
c3kit.wire.ajax.params_key = (function c3kit$wire$ajax$params_key(ajax_call){
if(cljs.core.truth_((function (){var G__20265 = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(ajax_call);
var fexpr__20264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null);
return (fexpr__20264.cljs$core$IFn$_invoke$arity$1 ? fexpr__20264.cljs$core$IFn$_invoke$arity$1(G__20265) : fexpr__20264.call(null,G__20265));
})())){
return cljs.core.cst$kw$query_DASH_params;
} else {
var G__20266 = cljs.core.cst$kw$params_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20266)){
return cljs.core.cst$kw$transit_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$transit,G__20266)){
return cljs.core.cst$kw$transit_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query,G__20266)){
return cljs.core.cst$kw$query_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,G__20266)){
return cljs.core.cst$kw$form_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edn,G__20266)){
return cljs.core.cst$kw$edn_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,G__20266)){
return cljs.core.cst$kw$json_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$multipart,G__20266)){
return cljs.core.cst$kw$multipart_DASH_params;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20266)].join('')));

}
}
}
}
}
}
}
}
});
c3kit.wire.ajax.pass_through_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$accept,cljs.core.cst$kw$basic_DASH_auth,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$default_DASH_headers,cljs.core.cst$kw$headers,cljs.core.cst$kw$method,cljs.core.cst$kw$oauth_DASH_token,cljs.core.cst$kw$transit_DASH_opts,cljs.core.cst$kw$with_DASH_credentials_QMARK_], null);
c3kit.wire.ajax.request_map = (function c3kit$wire$ajax$request_map(ajax_call){
var prep = (function (){var or__4126__auto__ = cljs.core.cst$kw$ajax_DASH_prep_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.api.config));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var map__20267 = (prep.cljs$core$IFn$_invoke$arity$1 ? prep.cljs$core$IFn$_invoke$arity$1(ajax_call) : prep.call(null,ajax_call));
var map__20267__$1 = (((((!((map__20267 == null))))?(((((map__20267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20267):map__20267);
var ajax_call__$1 = map__20267__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20267__$1,cljs.core.cst$kw$options);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20267__$1,cljs.core.cst$kw$params);
var G__20269 = cljs.core.select_keys(options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20269,c3kit.wire.ajax.params_key(ajax_call__$1),params);
} else {
return G__20269;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__20270){
var map__20271 = p__20270;
var map__20271__$1 = (((((!((map__20271 == null))))?(((((map__20271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20271):map__20271);
var ajax_call = map__20271__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.cst$kw$method);
var method_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.cst$kw$method_DASH_fn);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.cst$kw$url);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.cst$kw$params);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(39),null);

var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_20309){
var state_val_20310 = (state_20309[(1)]);
if((state_val_20310 === (7))){
var state_20309__$1 = state_20309;
var statearr_20311_20331 = state_20309__$1;
(statearr_20311_20331[(2)] = false);

(statearr_20311_20331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (1))){
var inst_20275 = (state_20309[(7)]);
var inst_20273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_20275__$1 = c3kit.wire.ajax.request_map(ajax_call);
var inst_20276 = (method_fn.cljs$core$IFn$_invoke$arity$2 ? method_fn.cljs$core$IFn$_invoke$arity$2(url,inst_20275__$1) : method_fn.call(null,url,inst_20275__$1));
var state_20309__$1 = (function (){var statearr_20312 = state_20309;
(statearr_20312[(8)] = inst_20273);

(statearr_20312[(7)] = inst_20275__$1);

return statearr_20312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20309__$1,(2),inst_20276);
} else {
if((state_val_20310 === (4))){
var state_20309__$1 = state_20309;
var statearr_20313_20332 = state_20309__$1;
(statearr_20313_20332[(2)] = false);

(statearr_20313_20332[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (6))){
var state_20309__$1 = state_20309;
var statearr_20314_20333 = state_20309__$1;
(statearr_20314_20333[(2)] = true);

(statearr_20314_20333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (3))){
var inst_20278 = (state_20309[(9)]);
var inst_20283 = inst_20278.cljs$lang$protocol_mask$partition0$;
var inst_20284 = (inst_20283 & (64));
var inst_20285 = inst_20278.cljs$core$ISeq$;
var inst_20286 = (cljs.core.PROTOCOL_SENTINEL === inst_20285);
var inst_20287 = ((inst_20284) || (inst_20286));
var state_20309__$1 = state_20309;
if(cljs.core.truth_(inst_20287)){
var statearr_20315_20334 = state_20309__$1;
(statearr_20315_20334[(1)] = (6));

} else {
var statearr_20316_20335 = state_20309__$1;
(statearr_20316_20335[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (2))){
var inst_20278 = (state_20309[(9)]);
var inst_20278__$1 = (state_20309[(2)]);
var inst_20280 = (inst_20278__$1 == null);
var inst_20281 = cljs.core.not(inst_20280);
var state_20309__$1 = (function (){var statearr_20317 = state_20309;
(statearr_20317[(9)] = inst_20278__$1);

return statearr_20317;
})();
if(inst_20281){
var statearr_20318_20336 = state_20309__$1;
(statearr_20318_20336[(1)] = (3));

} else {
var statearr_20319_20337 = state_20309__$1;
(statearr_20319_20337[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (11))){
var inst_20275 = (state_20309[(7)]);
var inst_20299 = (state_20309[(2)]);
var inst_20300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20299,cljs.core.cst$kw$error_DASH_code);
var inst_20301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20299,cljs.core.cst$kw$status);
var inst_20302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20299,cljs.core.cst$kw$body);
var inst_20303 = (function (){var request = inst_20275;
var map__20274 = inst_20299;
var response = inst_20299;
var error_code = inst_20300;
var status = inst_20301;
var body = inst_20302;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_20304 = (new cljs.core.Delay(inst_20303,null));
var inst_20305 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,inst_20304,null,(40),null);
var inst_20306 = c3kit.wire.ajax.triage_response(inst_20299,ajax_call);
var inst_20307 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_20309__$1 = (function (){var statearr_20320 = state_20309;
(statearr_20320[(10)] = inst_20305);

(statearr_20320[(11)] = inst_20306);

return statearr_20320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20309__$1,inst_20307);
} else {
if((state_val_20310 === (9))){
var inst_20278 = (state_20309[(9)]);
var inst_20296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20278);
var state_20309__$1 = state_20309;
var statearr_20321_20338 = state_20309__$1;
(statearr_20321_20338[(2)] = inst_20296);

(statearr_20321_20338[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (5))){
var inst_20294 = (state_20309[(2)]);
var state_20309__$1 = state_20309;
if(cljs.core.truth_(inst_20294)){
var statearr_20322_20339 = state_20309__$1;
(statearr_20322_20339[(1)] = (9));

} else {
var statearr_20323_20340 = state_20309__$1;
(statearr_20323_20340[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (10))){
var inst_20278 = (state_20309[(9)]);
var state_20309__$1 = state_20309;
var statearr_20324_20341 = state_20309__$1;
(statearr_20324_20341[(2)] = inst_20278);

(statearr_20324_20341[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20310 === (8))){
var inst_20291 = (state_20309[(2)]);
var state_20309__$1 = state_20309;
var statearr_20325_20342 = state_20309__$1;
(statearr_20325_20342[(2)] = inst_20291);

(statearr_20325_20342[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____0 = (function (){
var statearr_20326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20326[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__);

(statearr_20326[(1)] = (1));

return statearr_20326;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____1 = (function (state_20309){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_20309);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e20327){var ex__15356__auto__ = e20327;
var statearr_20328_20343 = state_20309;
(statearr_20328_20343[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_20309[(4)]))){
var statearr_20329_20344 = state_20309;
(statearr_20329_20344[(1)] = cljs.core.first((state_20309[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__20345 = state_20309;
state_20309 = G__20345;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__ = function(state_20309){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____1.call(this,state_20309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_20330 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_20330[(6)] = c__15427__auto__);

return statearr_20330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$options,c3kit.apron.corec.__GT_options(opt_args),cljs.core.cst$kw$method,method,cljs.core.cst$kw$method_DASH_fn,method_fn,cljs.core.cst$kw$url,url,cljs.core.cst$kw$params,params,cljs.core.cst$kw$handler,handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__20346 = method;
var G__20346__$1 = (((G__20346 instanceof cljs.core.Keyword))?G__20346.fqn:null);
switch (G__20346__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20346__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20352 = arguments.length;
var i__4737__auto___20353 = (0);
while(true){
if((i__4737__auto___20353 < len__4736__auto___20352)){
args__4742__auto__.push((arguments[i__4737__auto___20353]));

var G__20354 = (i__4737__auto___20353 + (1));
i__4737__auto___20353 = G__20354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request(c3kit.wire.ajax.build_ajax_call("GET",cljs_http.client.get,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.get_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq20348){
var G__20349 = cljs.core.first(seq20348);
var seq20348__$1 = cljs.core.next(seq20348);
var G__20350 = cljs.core.first(seq20348__$1);
var seq20348__$2 = cljs.core.next(seq20348__$1);
var G__20351 = cljs.core.first(seq20348__$2);
var seq20348__$3 = cljs.core.next(seq20348__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20349,G__20350,G__20351,seq20348__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20359 = arguments.length;
var i__4737__auto___20360 = (0);
while(true){
if((i__4737__auto___20360 < len__4736__auto___20359)){
args__4742__auto__.push((arguments[i__4737__auto___20360]));

var G__20361 = (i__4737__auto___20360 + (1));
i__4737__auto___20360 = G__20361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request(c3kit.wire.ajax.build_ajax_call("POST",cljs_http.client.post,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.post_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq20355){
var G__20356 = cljs.core.first(seq20355);
var seq20355__$1 = cljs.core.next(seq20355);
var G__20357 = cljs.core.first(seq20355__$1);
var seq20355__$2 = cljs.core.next(seq20355__$1);
var G__20358 = cljs.core.first(seq20355__$2);
var seq20355__$3 = cljs.core.next(seq20355__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20356,G__20357,G__20358,seq20355__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20372 = arguments.length;
var i__4737__auto___20373 = (0);
while(true){
if((i__4737__auto___20373 < len__4736__auto___20372)){
args__4742__auto__.push((arguments[i__4737__auto___20373]));

var G__20374 = (i__4737__auto___20373 + (1));
i__4737__auto___20373 = G__20374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params,handler,opt_args){
var method_name = clojure.string.upper_case(cljs.core.name(method));
var method_fn = (function() { 
var G__20375__delegate = function (url__$1,p__20367){
var vec__20368 = p__20367;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,(0),null);
var G__20371 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method,cljs.core.cst$kw$url,url__$1], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20371) : cljs_http.client.request.call(null,G__20371));
};
var G__20375 = function (url__$1,var_args){
var p__20367 = null;
if (arguments.length > 1) {
var G__20376__i = 0, G__20376__a = new Array(arguments.length -  1);
while (G__20376__i < G__20376__a.length) {G__20376__a[G__20376__i] = arguments[G__20376__i + 1]; ++G__20376__i;}
  p__20367 = new cljs.core.IndexedSeq(G__20376__a,0,null);
} 
return G__20375__delegate.call(this,url__$1,p__20367);};
G__20375.cljs$lang$maxFixedArity = 1;
G__20375.cljs$lang$applyTo = (function (arglist__20377){
var url__$1 = cljs.core.first(arglist__20377);
var p__20367 = cljs.core.rest(arglist__20377);
return G__20375__delegate(url__$1,p__20367);
});
G__20375.cljs$core$IFn$_invoke$arity$variadic = G__20375__delegate;
return G__20375;
})()
;
return c3kit.wire.ajax._do_ajax_request(c3kit.wire.ajax.build_ajax_call(method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq20362){
var G__20363 = cljs.core.first(seq20362);
var seq20362__$1 = cljs.core.next(seq20362);
var G__20364 = cljs.core.first(seq20362__$1);
var seq20362__$2 = cljs.core.next(seq20362__$1);
var G__20365 = cljs.core.first(seq20362__$2);
var seq20362__$3 = cljs.core.next(seq20362__$2);
var G__20366 = cljs.core.first(seq20362__$3);
var seq20362__$4 = cljs.core.next(seq20362__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20363,G__20364,G__20365,G__20366,seq20362__$4);
}));

