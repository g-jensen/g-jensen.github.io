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
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__25060){
var map__25061 = p__25060;
var map__25061__$1 = (((((!((map__25061 == null))))?(((((map__25061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25061):map__25061);
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25061__$1,cljs.core.cst$kw$error_DASH_code);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25061__$1,cljs.core.cst$kw$status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_DASH_error,error_code)){
var fexpr__25064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null);
return (fexpr__25064.cljs$core$IFn$_invoke$arity$1 ? fexpr__25064.cljs$core$IFn$_invoke$arity$1(status) : fexpr__25064.call(null,status));
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
if(cljs.core.truth_((function (){var G__25066 = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(ajax_call);
var fexpr__25065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null);
return (fexpr__25065.cljs$core$IFn$_invoke$arity$1 ? fexpr__25065.cljs$core$IFn$_invoke$arity$1(G__25066) : fexpr__25065.call(null,G__25066));
})())){
return cljs.core.cst$kw$query_DASH_params;
} else {
var G__25067 = cljs.core.cst$kw$params_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25067)){
return cljs.core.cst$kw$transit_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$transit,G__25067)){
return cljs.core.cst$kw$transit_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query,G__25067)){
return cljs.core.cst$kw$query_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,G__25067)){
return cljs.core.cst$kw$form_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$edn,G__25067)){
return cljs.core.cst$kw$edn_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,G__25067)){
return cljs.core.cst$kw$json_DASH_params;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$multipart,G__25067)){
return cljs.core.cst$kw$multipart_DASH_params;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25067)].join('')));

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
var map__25068 = (prep.cljs$core$IFn$_invoke$arity$1 ? prep.cljs$core$IFn$_invoke$arity$1(ajax_call) : prep.call(null,ajax_call));
var map__25068__$1 = (((((!((map__25068 == null))))?(((((map__25068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25068):map__25068);
var ajax_call__$1 = map__25068__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,cljs.core.cst$kw$options);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25068__$1,cljs.core.cst$kw$params);
var G__25070 = cljs.core.select_keys(options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25070,c3kit.wire.ajax.params_key(ajax_call__$1),params);
} else {
return G__25070;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__25071){
var map__25072 = p__25071;
var map__25072__$1 = (((((!((map__25072 == null))))?(((((map__25072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25072):map__25072);
var ajax_call = map__25072__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,cljs.core.cst$kw$method);
var method_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,cljs.core.cst$kw$method_DASH_fn);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,cljs.core.cst$kw$url);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25072__$1,cljs.core.cst$kw$params);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(39),null);

var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_25110){
var state_val_25111 = (state_25110[(1)]);
if((state_val_25111 === (7))){
var state_25110__$1 = state_25110;
var statearr_25112_25132 = state_25110__$1;
(statearr_25112_25132[(2)] = false);

(statearr_25112_25132[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (1))){
var inst_25076 = (state_25110[(7)]);
var inst_25074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_25076__$1 = c3kit.wire.ajax.request_map(ajax_call);
var inst_25077 = (method_fn.cljs$core$IFn$_invoke$arity$2 ? method_fn.cljs$core$IFn$_invoke$arity$2(url,inst_25076__$1) : method_fn.call(null,url,inst_25076__$1));
var state_25110__$1 = (function (){var statearr_25113 = state_25110;
(statearr_25113[(8)] = inst_25074);

(statearr_25113[(7)] = inst_25076__$1);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25110__$1,(2),inst_25077);
} else {
if((state_val_25111 === (4))){
var state_25110__$1 = state_25110;
var statearr_25114_25133 = state_25110__$1;
(statearr_25114_25133[(2)] = false);

(statearr_25114_25133[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (6))){
var state_25110__$1 = state_25110;
var statearr_25115_25134 = state_25110__$1;
(statearr_25115_25134[(2)] = true);

(statearr_25115_25134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (3))){
var inst_25079 = (state_25110[(9)]);
var inst_25084 = inst_25079.cljs$lang$protocol_mask$partition0$;
var inst_25085 = (inst_25084 & (64));
var inst_25086 = inst_25079.cljs$core$ISeq$;
var inst_25087 = (cljs.core.PROTOCOL_SENTINEL === inst_25086);
var inst_25088 = ((inst_25085) || (inst_25087));
var state_25110__$1 = state_25110;
if(cljs.core.truth_(inst_25088)){
var statearr_25116_25135 = state_25110__$1;
(statearr_25116_25135[(1)] = (6));

} else {
var statearr_25117_25136 = state_25110__$1;
(statearr_25117_25136[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (2))){
var inst_25079 = (state_25110[(9)]);
var inst_25079__$1 = (state_25110[(2)]);
var inst_25081 = (inst_25079__$1 == null);
var inst_25082 = cljs.core.not(inst_25081);
var state_25110__$1 = (function (){var statearr_25118 = state_25110;
(statearr_25118[(9)] = inst_25079__$1);

return statearr_25118;
})();
if(inst_25082){
var statearr_25119_25137 = state_25110__$1;
(statearr_25119_25137[(1)] = (3));

} else {
var statearr_25120_25138 = state_25110__$1;
(statearr_25120_25138[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (11))){
var inst_25076 = (state_25110[(7)]);
var inst_25100 = (state_25110[(2)]);
var inst_25101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25100,cljs.core.cst$kw$error_DASH_code);
var inst_25102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25100,cljs.core.cst$kw$status);
var inst_25103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25100,cljs.core.cst$kw$body);
var inst_25104 = (function (){var request = inst_25076;
var map__25075 = inst_25100;
var response = inst_25100;
var error_code = inst_25101;
var status = inst_25102;
var body = inst_25103;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_25105 = (new cljs.core.Delay(inst_25104,null));
var inst_25106 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.ajax",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,inst_25105,null,(40),null);
var inst_25107 = c3kit.wire.ajax.triage_response(inst_25100,ajax_call);
var inst_25108 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_25110__$1 = (function (){var statearr_25121 = state_25110;
(statearr_25121[(10)] = inst_25106);

(statearr_25121[(11)] = inst_25107);

return statearr_25121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25110__$1,inst_25108);
} else {
if((state_val_25111 === (9))){
var inst_25079 = (state_25110[(9)]);
var inst_25097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25079);
var state_25110__$1 = state_25110;
var statearr_25122_25139 = state_25110__$1;
(statearr_25122_25139[(2)] = inst_25097);

(statearr_25122_25139[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (5))){
var inst_25095 = (state_25110[(2)]);
var state_25110__$1 = state_25110;
if(cljs.core.truth_(inst_25095)){
var statearr_25123_25140 = state_25110__$1;
(statearr_25123_25140[(1)] = (9));

} else {
var statearr_25124_25141 = state_25110__$1;
(statearr_25124_25141[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (10))){
var inst_25079 = (state_25110[(9)]);
var state_25110__$1 = state_25110;
var statearr_25125_25142 = state_25110__$1;
(statearr_25125_25142[(2)] = inst_25079);

(statearr_25125_25142[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25111 === (8))){
var inst_25092 = (state_25110[(2)]);
var state_25110__$1 = state_25110;
var statearr_25126_25143 = state_25110__$1;
(statearr_25126_25143[(2)] = inst_25092);

(statearr_25126_25143[(1)] = (5));


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
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25127[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____1 = (function (state_25110){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_25110);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e25128){var ex__16399__auto__ = e25128;
var statearr_25129_25144 = state_25110;
(statearr_25129_25144[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_25110[(4)]))){
var statearr_25130_25145 = state_25110;
(statearr_25130_25145[(1)] = cljs.core.first((state_25110[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__25146 = state_25110;
state_25110 = G__25146;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__ = function(state_25110){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____1.call(this,state_25110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_25131 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_25131[(6)] = c__16522__auto__);

return statearr_25131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$options,c3kit.apron.corec.__GT_options(opt_args),cljs.core.cst$kw$method,method,cljs.core.cst$kw$method_DASH_fn,method_fn,cljs.core.cst$kw$url,url,cljs.core.cst$kw$params,params,cljs.core.cst$kw$handler,handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__25147 = method;
var G__25147__$1 = (((G__25147 instanceof cljs.core.Keyword))?G__25147.fqn:null);
switch (G__25147__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25147__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25153 = arguments.length;
var i__4737__auto___25154 = (0);
while(true){
if((i__4737__auto___25154 < len__4736__auto___25153)){
args__4742__auto__.push((arguments[i__4737__auto___25154]));

var G__25155 = (i__4737__auto___25154 + (1));
i__4737__auto___25154 = G__25155;
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
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq25149){
var G__25150 = cljs.core.first(seq25149);
var seq25149__$1 = cljs.core.next(seq25149);
var G__25151 = cljs.core.first(seq25149__$1);
var seq25149__$2 = cljs.core.next(seq25149__$1);
var G__25152 = cljs.core.first(seq25149__$2);
var seq25149__$3 = cljs.core.next(seq25149__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25150,G__25151,G__25152,seq25149__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25160 = arguments.length;
var i__4737__auto___25161 = (0);
while(true){
if((i__4737__auto___25161 < len__4736__auto___25160)){
args__4742__auto__.push((arguments[i__4737__auto___25161]));

var G__25162 = (i__4737__auto___25161 + (1));
i__4737__auto___25161 = G__25162;
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
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq25156){
var G__25157 = cljs.core.first(seq25156);
var seq25156__$1 = cljs.core.next(seq25156);
var G__25158 = cljs.core.first(seq25156__$1);
var seq25156__$2 = cljs.core.next(seq25156__$1);
var G__25159 = cljs.core.first(seq25156__$2);
var seq25156__$3 = cljs.core.next(seq25156__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25157,G__25158,G__25159,seq25156__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___25173 = arguments.length;
var i__4737__auto___25174 = (0);
while(true){
if((i__4737__auto___25174 < len__4736__auto___25173)){
args__4742__auto__.push((arguments[i__4737__auto___25174]));

var G__25175 = (i__4737__auto___25174 + (1));
i__4737__auto___25174 = G__25175;
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
var G__25176__delegate = function (url__$1,p__25168){
var vec__25169 = p__25168;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25169,(0),null);
var G__25172 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method,cljs.core.cst$kw$url,url__$1], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25172) : cljs_http.client.request.call(null,G__25172));
};
var G__25176 = function (url__$1,var_args){
var p__25168 = null;
if (arguments.length > 1) {
var G__25177__i = 0, G__25177__a = new Array(arguments.length -  1);
while (G__25177__i < G__25177__a.length) {G__25177__a[G__25177__i] = arguments[G__25177__i + 1]; ++G__25177__i;}
  p__25168 = new cljs.core.IndexedSeq(G__25177__a,0,null);
} 
return G__25176__delegate.call(this,url__$1,p__25168);};
G__25176.cljs$lang$maxFixedArity = 1;
G__25176.cljs$lang$applyTo = (function (arglist__25178){
var url__$1 = cljs.core.first(arglist__25178);
var p__25168 = cljs.core.rest(arglist__25178);
return G__25176__delegate(url__$1,p__25168);
});
G__25176.cljs$core$IFn$_invoke$arity$variadic = G__25176__delegate;
return G__25176;
})()
;
return c3kit.wire.ajax._do_ajax_request(c3kit.wire.ajax.build_ajax_call(method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq25163){
var G__25164 = cljs.core.first(seq25163);
var seq25163__$1 = cljs.core.next(seq25163);
var G__25165 = cljs.core.first(seq25163__$1);
var seq25163__$2 = cljs.core.next(seq25163__$1);
var G__25166 = cljs.core.first(seq25163__$2);
var seq25163__$3 = cljs.core.next(seq25163__$2);
var G__25167 = cljs.core.first(seq25163__$3);
var seq25163__$4 = cljs.core.next(seq25163__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25164,G__25165,G__25166,G__25167,seq25163__$4);
}));

