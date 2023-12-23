// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__20540 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__20540.cljs$core$IFn$_invoke$arity$1 ? fexpr__20540.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__20540.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20541){
var vec__20542 = p__20541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20545 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__20545)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__20545)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__20545)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__20545)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__20545)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20545)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20545)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20546){
var map__20547 = p__20546;
var map__20547__$1 = (((((!((map__20547 == null))))?(((((map__20547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20547):map__20547);
var request = map__20547__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20547__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20549 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__20549,default_headers);

cljs_http.core.apply_response_type_BANG_(G__20549,response_type);

G__20549.setTimeoutInterval(timeout);

G__20549.setWithCredentials(send_credentials);

return G__20549;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20550){
var map__20551 = p__20550;
var map__20551__$1 = (((((!((map__20551 == null))))?(((((map__20551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20551):map__20551);
var request = map__20551__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20551__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__20553 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__20553) : cljs_http.core.error_kw.call(null,G__20553));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_20577 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__20554_20578 = xhr;
G__20554_20578.setProgressEventsEnabled(true);

G__20554_20578.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_20577,cljs.core.cst$kw$upload));

G__20554_20578.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_20577,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16522__auto___20579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20565){
var state_val_20566 = (state_20565[(1)]);
if((state_val_20566 === (1))){
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20565__$1,(2),cancel);
} else {
if((state_val_20566 === (2))){
var inst_20556 = (state_20565[(2)]);
var inst_20557 = xhr.isComplete();
var inst_20558 = cljs.core.not(inst_20557);
var state_20565__$1 = (function (){var statearr_20567 = state_20565;
(statearr_20567[(7)] = inst_20556);

return statearr_20567;
})();
if(inst_20558){
var statearr_20568_20580 = state_20565__$1;
(statearr_20568_20580[(1)] = (3));

} else {
var statearr_20569_20581 = state_20565__$1;
(statearr_20569_20581[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20566 === (3))){
var inst_20560 = xhr.abort();
var state_20565__$1 = state_20565;
var statearr_20570_20582 = state_20565__$1;
(statearr_20570_20582[(2)] = inst_20560);

(statearr_20570_20582[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20566 === (4))){
var state_20565__$1 = state_20565;
var statearr_20571_20583 = state_20565__$1;
(statearr_20571_20583[(2)] = null);

(statearr_20571_20583[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20566 === (5))){
var inst_20563 = (state_20565[(2)]);
var state_20565__$1 = state_20565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20565__$1,inst_20563);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__16396__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16396__auto____0 = (function (){
var statearr_20572 = [null,null,null,null,null,null,null,null];
(statearr_20572[(0)] = cljs_http$core$xhr_$_state_machine__16396__auto__);

(statearr_20572[(1)] = (1));

return statearr_20572;
});
var cljs_http$core$xhr_$_state_machine__16396__auto____1 = (function (state_20565){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20565);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20573){var ex__16399__auto__ = e20573;
var statearr_20574_20584 = state_20565;
(statearr_20574_20584[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20565[(4)]))){
var statearr_20575_20585 = state_20565;
(statearr_20575_20585[(1)] = cljs.core.first((state_20565[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20586 = state_20565;
state_20565 = G__20586;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16396__auto__ = function(state_20565){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16396__auto____1.call(this,state_20565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16396__auto____0;
cljs_http$core$xhr_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16396__auto____1;
return cljs_http$core$xhr_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20576 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20576[(6)] = c__16522__auto___20579);

return statearr_20576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20587){
var map__20588 = p__20587;
var map__20588__$1 = (((((!((map__20588 == null))))?(((((map__20588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20588):map__20588);
var request = map__20588__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20588__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_20602 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_20602], null));

if(cljs.core.truth_(cancel)){
var c__16522__auto___20603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20594){
var state_val_20595 = (state_20594[(1)]);
if((state_val_20595 === (1))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20594__$1,(2),cancel);
} else {
if((state_val_20595 === (2))){
var inst_20591 = (state_20594[(2)]);
var inst_20592 = jsonp.cancel(req_20602);
var state_20594__$1 = (function (){var statearr_20596 = state_20594;
(statearr_20596[(7)] = inst_20591);

return statearr_20596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20594__$1,inst_20592);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__16396__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16396__auto____0 = (function (){
var statearr_20597 = [null,null,null,null,null,null,null,null];
(statearr_20597[(0)] = cljs_http$core$jsonp_$_state_machine__16396__auto__);

(statearr_20597[(1)] = (1));

return statearr_20597;
});
var cljs_http$core$jsonp_$_state_machine__16396__auto____1 = (function (state_20594){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20594);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20598){var ex__16399__auto__ = e20598;
var statearr_20599_20604 = state_20594;
(statearr_20599_20604[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20594[(4)]))){
var statearr_20600_20605 = state_20594;
(statearr_20600_20605[(1)] = cljs.core.first((state_20594[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20606 = state_20594;
state_20594 = G__20606;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16396__auto__ = function(state_20594){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16396__auto____1.call(this,state_20594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16396__auto____0;
cljs_http$core$jsonp_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16396__auto____1;
return cljs_http$core$jsonp_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20601 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20601[(6)] = c__16522__auto___20603);

return statearr_20601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20607){
var map__20608 = p__20607;
var map__20608__$1 = (((((!((map__20608 == null))))?(((((map__20608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20608):map__20608);
var request = map__20608__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
