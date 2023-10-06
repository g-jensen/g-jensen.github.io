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
var temp__5804__auto__ = (function (){var fexpr__17439 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17439.cljs$core$IFn$_invoke$arity$1 ? fexpr__17439.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17439.call(null,channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17440){
var vec__17441 = p__17440;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17441,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17444 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__17444)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__17444)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__17444)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__17444)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__17444)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17444)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17444)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17445){
var map__17446 = p__17445;
var map__17446__$1 = (((((!((map__17446 == null))))?(((((map__17446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17446):map__17446);
var request = map__17446__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__4126__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17448 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17448,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17448,response_type);

G__17448.setTimeoutInterval(timeout);

G__17448.setWithCredentials(send_credentials);

return G__17448;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17449){
var map__17450 = p__17449;
var map__17450__$1 = (((((!((map__17450 == null))))?(((((map__17450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17450):map__17450);
var request = map__17450__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,cljs.core.cst$kw$progress);
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
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__17452 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17452) : cljs_http.core.error_kw.call(null,G__17452));
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
var listener_17476 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});
var G__17453_17477 = xhr;
G__17453_17477.setProgressEventsEnabled(true);

G__17453_17477.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17476,cljs.core.cst$kw$upload));

G__17453_17477.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17476,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15427__auto___17478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17464){
var state_val_17465 = (state_17464[(1)]);
if((state_val_17465 === (1))){
var state_17464__$1 = state_17464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17464__$1,(2),cancel);
} else {
if((state_val_17465 === (2))){
var inst_17455 = (state_17464[(2)]);
var inst_17456 = xhr.isComplete();
var inst_17457 = cljs.core.not(inst_17456);
var state_17464__$1 = (function (){var statearr_17466 = state_17464;
(statearr_17466[(7)] = inst_17455);

return statearr_17466;
})();
if(inst_17457){
var statearr_17467_17479 = state_17464__$1;
(statearr_17467_17479[(1)] = (3));

} else {
var statearr_17468_17480 = state_17464__$1;
(statearr_17468_17480[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17465 === (3))){
var inst_17459 = xhr.abort();
var state_17464__$1 = state_17464;
var statearr_17469_17481 = state_17464__$1;
(statearr_17469_17481[(2)] = inst_17459);

(statearr_17469_17481[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17465 === (4))){
var state_17464__$1 = state_17464;
var statearr_17470_17482 = state_17464__$1;
(statearr_17470_17482[(2)] = null);

(statearr_17470_17482[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17465 === (5))){
var inst_17462 = (state_17464[(2)]);
var state_17464__$1 = state_17464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17464__$1,inst_17462);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__15353__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15353__auto____0 = (function (){
var statearr_17471 = [null,null,null,null,null,null,null,null];
(statearr_17471[(0)] = cljs_http$core$xhr_$_state_machine__15353__auto__);

(statearr_17471[(1)] = (1));

return statearr_17471;
});
var cljs_http$core$xhr_$_state_machine__15353__auto____1 = (function (state_17464){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17464);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17472){var ex__15356__auto__ = e17472;
var statearr_17473_17483 = state_17464;
(statearr_17473_17483[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17464[(4)]))){
var statearr_17474_17484 = state_17464;
(statearr_17474_17484[(1)] = cljs.core.first((state_17464[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17485 = state_17464;
state_17464 = G__17485;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15353__auto__ = function(state_17464){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15353__auto____1.call(this,state_17464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15353__auto____0;
cljs_http$core$xhr_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15353__auto____1;
return cljs_http$core$xhr_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17475 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17475[(6)] = c__15427__auto___17478);

return statearr_17475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17486){
var map__17487 = p__17486;
var map__17487__$1 = (((((!((map__17487 == null))))?(((((map__17487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17487):map__17487);
var request = map__17487__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17487__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17487__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17487__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17487__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17501 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_17501], null));

if(cljs.core.truth_(cancel)){
var c__15427__auto___17502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17493){
var state_val_17494 = (state_17493[(1)]);
if((state_val_17494 === (1))){
var state_17493__$1 = state_17493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17493__$1,(2),cancel);
} else {
if((state_val_17494 === (2))){
var inst_17490 = (state_17493[(2)]);
var inst_17491 = jsonp.cancel(req_17501);
var state_17493__$1 = (function (){var statearr_17495 = state_17493;
(statearr_17495[(7)] = inst_17490);

return statearr_17495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17493__$1,inst_17491);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__15353__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15353__auto____0 = (function (){
var statearr_17496 = [null,null,null,null,null,null,null,null];
(statearr_17496[(0)] = cljs_http$core$jsonp_$_state_machine__15353__auto__);

(statearr_17496[(1)] = (1));

return statearr_17496;
});
var cljs_http$core$jsonp_$_state_machine__15353__auto____1 = (function (state_17493){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17493);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17497){var ex__15356__auto__ = e17497;
var statearr_17498_17503 = state_17493;
(statearr_17498_17503[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17493[(4)]))){
var statearr_17499_17504 = state_17493;
(statearr_17499_17504[(1)] = cljs.core.first((state_17493[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17505 = state_17493;
state_17493 = G__17505;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15353__auto__ = function(state_17493){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15353__auto____1.call(this,state_17493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15353__auto____0;
cljs_http$core$jsonp_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15353__auto____1;
return cljs_http$core$jsonp_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17500 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17500[(6)] = c__15427__auto___17502);

return statearr_17500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17506){
var map__17507 = p__17506;
var map__17507__$1 = (((((!((map__17507 == null))))?(((((map__17507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17507):map__17507);
var request = map__17507__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17507__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
