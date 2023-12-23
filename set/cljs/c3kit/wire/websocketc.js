// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.websocketc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.utilc');
goog.require('c3kit.apron.cursor');
goog.require('c3kit.apron.time');
c3kit.wire.websocketc.request = (function c3kit$wire$websocketc$request(var_args){
var G__28014 = arguments.length;
switch (G__28014) {
case 2:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$2 = (function (id,kind){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request_DASH_id,id,cljs.core.cst$kw$kind,kind], null);
}));

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3 = (function (id,kind,params){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$2(id,kind),cljs.core.cst$kw$params,params);
}));

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$4 = (function (id,kind,params,reply_QMARK_){
if(cljs.core.truth_(reply_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3(id,kind,params),cljs.core.cst$kw$reply_QMARK_,true);
} else {
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3(id,kind,params);
}
}));

(c3kit.wire.websocketc.request.cljs$lang$maxFixedArity = 4);

c3kit.wire.websocketc.response = (function c3kit$wire$websocketc$response(id,data){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_id,id,cljs.core.cst$kw$payload,data], null);
});
c3kit.wire.websocketc.request_QMARK_ = (function c3kit$wire$websocketc$request_QMARK_(message){
return ((cljs.core.map_QMARK_(message)) && (cljs.core.contains_QMARK_(message,cljs.core.cst$kw$request_DASH_id)));
});
c3kit.wire.websocketc.response_QMARK_ = (function c3kit$wire$websocketc$response_QMARK_(message){
return ((cljs.core.map_QMARK_(message)) && (cljs.core.contains_QMARK_(message,cljs.core.cst$kw$response_DASH_id)));
});
/**
 * Returns a map holding connection data.  A connection will contain, but is not limited to, these keys:
 * 
 *   :id               - a unique string id for the connection
 *   :socket           - network communication channel
 *   :request-counter  - to generate next request id in sequence for this connection
 *   :open?            - boolean
 *   :responders       - (maybe) map of request-id -> (fn [payload]) to handle responses
 *   :last-active-at   - time of last send or receive of data
 */
c3kit.wire.websocketc.connection = (function c3kit$wire$websocketc$connection(id,socket){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$socket,socket,cljs.core.cst$kw$request_DASH_counter,(0),cljs.core.cst$kw$open_QMARK_,false], null);
});
c3kit.wire.websocketc.unpack = (function c3kit$wire$websocketc$unpack(data){
try{return c3kit.apron.utilc._LT__edn(data);
}catch (e28016){var _ = e28016;
return data;
}});
c3kit.wire.websocketc.pack = (function c3kit$wire$websocketc$pack(message){
return c3kit.apron.utilc.__GT_edn(message);
});
c3kit.wire.websocketc.handle_request = (function c3kit$wire$websocketc$handle_request(server,connection,message){
var temp__5802__auto__ = cljs.core.cst$kw$message_DASH_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server));
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
var handler_msg = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,cljs.core.cst$kw$connection_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection)));
var handler_msg__$1 = (function (){var temp__5802__auto____$1 = cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
if(cljs.core.truth_(temp__5802__auto____$1)){
var request = temp__5802__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(handler_msg,cljs.core.cst$kw$request,request);
} else {
return handler_msg;
}
})();
var result = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(handler_msg__$1) : handler.call(null,handler_msg__$1));
if(cljs.core.truth_(cljs.core.cst$kw$reply_QMARK_.cljs$core$IFn$_invoke$arity$1(handler_msg__$1))){
var reply = c3kit.wire.websocketc.response(cljs.core.cst$kw$request_DASH_id.cljs$core$IFn$_invoke$arity$1(handler_msg__$1),result);
var G__28017 = server;
var G__28018 = connection;
var G__28019 = cljs.core.cst$kw$socket.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
var G__28020 = reply;
return (c3kit.wire.websocketc.send_to_BANG_.cljs$core$IFn$_invoke$arity$4 ? c3kit.wire.websocketc.send_to_BANG_.cljs$core$IFn$_invoke$arity$4(G__28017,G__28018,G__28019,G__28020) : c3kit.wire.websocketc.send_to_BANG_.call(null,G__28017,G__28018,G__28019,G__28020));
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket MISSING :message-handler!"], null);
}),null)),null,(41),null);
}
});
c3kit.wire.websocketc.send_internal_message = (function c3kit$wire$websocketc$send_internal_message(server,connection,kind,payload){
return c3kit.wire.websocketc.handle_request(server,connection,c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3(null,kind,payload));
});
c3kit.wire.websocketc.connection_responder_BANG_ = (function c3kit$wire$websocketc$connection_responder_BANG_(conn_atom,id){
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conn_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$responders,id], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn_atom,cljs.core.update,cljs.core.cst$kw$responders,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return old;
});
c3kit.wire.websocketc._cancel_timeout_BANG_ = (function c3kit$wire$websocketc$_cancel_timeout_BANG_(timeout){
return clearTimeout(timeout);
});
c3kit.wire.websocketc._activity_BANG_ = (function c3kit$wire$websocketc$_activity_BANG_(var_args){
var G__28022 = arguments.length;
switch (G__28022) {
case 1:
return c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (connection){
return c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$2(connection,c3kit.apron.time.now());
}));

(c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (connection,moment){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(connection,cljs.core.assoc,cljs.core.cst$kw$last_DASH_active_DASH_at,moment);
}));

(c3kit.wire.websocketc._activity_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.websocketc._activity_since_QMARK_ = (function c3kit$wire$websocketc$_activity_since_QMARK_(connection,moment){
var temp__5802__auto__ = cljs.core.cst$kw$last_DASH_active_DASH_at.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
if(cljs.core.truth_(temp__5802__auto__)){
var activity = temp__5802__auto__;
return c3kit.apron.time.before_QMARK_(moment,activity);
} else {
return false;
}
});
c3kit.wire.websocketc._handle_response = (function c3kit$wire$websocketc$_handle_response(connection,response){
var temp__5802__auto__ = c3kit.wire.websocketc.connection_responder_BANG_(connection,cljs.core.cst$kw$response_DASH_id.cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(temp__5802__auto__)){
var responder = temp__5802__auto__;
var vec__28024 = responder;
var responder_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(0),null);
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(1),null);
if(cljs.core.truth_(timeout)){
c3kit.wire.websocketc._cancel_timeout_BANG_(timeout);
} else {
}

var G__28027 = cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(response);
return (responder_fn.cljs$core$IFn$_invoke$arity$1 ? responder_fn.cljs$core$IFn$_invoke$arity$1(G__28027) : responder_fn.call(null,G__28027));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket connection MISSING responder:",cljs.core.cst$kw$response_DASH_id.cljs$core$IFn$_invoke$arity$1(response)], null);
}),null)),null,(42),null);
}
});
c3kit.wire.websocketc.handle_data = (function c3kit$wire$websocketc$handle_data(server,data){
var temp__5802__auto__ = cljs.core.cst$kw$on_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server));
if(cljs.core.truth_(temp__5802__auto__)){
var data_handler = temp__5802__auto__;
return (data_handler.cljs$core$IFn$_invoke$arity$1 ? data_handler.cljs$core$IFn$_invoke$arity$1(data) : data_handler.call(null,data));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket UNHANDLED data received:",data], null);
}),null)),null,(43),null);
}
});
c3kit.wire.websocketc.handle_message = (function c3kit$wire$websocketc$handle_message(server,connection,data){
if(cljs.core.truth_(cljs.core.deref(connection))){
var message = c3kit.wire.websocketc.unpack(data);
c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1(connection);

if(c3kit.wire.websocketc.request_QMARK_(message)){
return c3kit.wire.websocketc.handle_request(server,connection,message);
} else {
if(c3kit.wire.websocketc.response_QMARK_(message)){
return c3kit.wire.websocketc._handle_response(connection,message);
} else {
return c3kit.wire.websocketc.handle_data(server,message);

}
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket MISSING connection:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([connection], 0))], null);
}),null)),null,(44),null);
}
});
c3kit.wire.websocketc._timeout_BANG_ = (function c3kit$wire$websocketc$_timeout_BANG_(server,connection,request_id){
if(cljs.core.truth_(c3kit.wire.websocketc.connection_responder_BANG_(connection,request_id))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket TIMEOUT: ",request_id], null);
}),null)),null,(45),null);

return c3kit.wire.websocketc.send_internal_message(server,connection,cljs.core.cst$kw$ws_SLASH_timeout,request_id);
} else {
return null;
}
});
c3kit.wire.websocketc._create_timeout_BANG_ = (function c3kit$wire$websocketc$_create_timeout_BANG_(server,connection,request_id,timeout_millis){
return setTimeout((function (){
return c3kit.wire.websocketc._timeout_BANG_(server,connection,request_id);
}),timeout_millis);
});
c3kit.wire.websocketc.connection_request_BANG_ = (function c3kit$wire$websocketc$connection_request_BANG_(server,conn_atom,kind,params,responder){
var connection = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn_atom,(function (conn){
var request_counter = (cljs.core.cst$kw$request_DASH_counter.cljs$core$IFn$_invoke$arity$2(conn,(0)) + (1));
var conn__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$request_DASH_counter,request_counter);
if(cljs.core.truth_(responder)){
var timeout = (function (){var temp__5804__auto__ = cljs.core.cst$kw$request_DASH_timeout.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server));
if(cljs.core.truth_(temp__5804__auto__)){
var timeout_millis = temp__5804__auto__;
return c3kit.wire.websocketc._create_timeout_BANG_(server,conn__$1,request_counter,timeout_millis);
} else {
return null;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(conn__$1,cljs.core.cst$kw$responders,cljs.core.assoc,request_counter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [responder,timeout], null));
} else {
return conn__$1;
}
}));
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$request_DASH_counter.cljs$core$IFn$_invoke$arity$1(connection),kind,params,(!((responder == null))));
});
c3kit.wire.websocketc._do_call_BANG_ = (function c3kit$wire$websocketc$_do_call_BANG_(state,connection,kind,params,handler,options){
var options__$1 = (cljs.core.truth_(options)?c3kit.apron.corec.__GT_options(options):null);
if(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection)))){
var message = c3kit.wire.websocketc.connection_request_BANG_(state,connection,kind,params,handler);
var socket = cljs.core.cst$kw$socket.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1(connection);

if(cljs.core.truth_(socket)){
return (c3kit.wire.websocketc.send_to_BANG_.cljs$core$IFn$_invoke$arity$4 ? c3kit.wire.websocketc.send_to_BANG_.cljs$core$IFn$_invoke$arity$4(state,connection,socket,message) : c3kit.wire.websocketc.send_to_BANG_.call(null,state,connection,socket,message));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket send! with missing socket: ",message], null);
}),null)),null,(46),null);

return false;
}
} else {
return false;
}
});
c3kit.wire.websocketc._ping_BANG_ = (function c3kit$wire$websocketc$_ping_BANG_(state,connection){
return c3kit.wire.websocketc._do_call_BANG_(state,connection,cljs.core.cst$kw$ws_SLASH_ping,null,null,null);
});
c3kit.wire.websocketc._ping_inactive_connections_BANG_ = (function c3kit$wire$websocketc$_ping_inactive_connections_BANG_(state){
var temp__5804__auto__ = cljs.core.cst$kw$ping_DASH_interval.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5804__auto__)){
var interval = temp__5804__auto__;
var moment = c3kit.apron.time.ago(c3kit.apron.time.seconds(interval));
var seq__28028 = cljs.core.seq((c3kit.wire.websocketc.connections.cljs$core$IFn$_invoke$arity$1 ? c3kit.wire.websocketc.connections.cljs$core$IFn$_invoke$arity$1(state) : c3kit.wire.websocketc.connections.call(null,state)));
var chunk__28029 = null;
var count__28030 = (0);
var i__28031 = (0);
while(true){
if((i__28031 < count__28030)){
var connection = chunk__28029.cljs$core$IIndexed$_nth$arity$2(null,i__28031);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(connection);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
if(cljs.core.truth_(and__4115__auto____$1)){
return (!(c3kit.wire.websocketc._activity_since_QMARK_(connection,moment)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
c3kit.wire.websocketc._ping_BANG_(state,connection);
} else {
}


var G__28032 = seq__28028;
var G__28033 = chunk__28029;
var G__28034 = count__28030;
var G__28035 = (i__28031 + (1));
seq__28028 = G__28032;
chunk__28029 = G__28033;
count__28030 = G__28034;
i__28031 = G__28035;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__28028);
if(temp__5804__auto____$1){
var seq__28028__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28028__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28028__$1);
var G__28036 = cljs.core.chunk_rest(seq__28028__$1);
var G__28037 = c__4556__auto__;
var G__28038 = cljs.core.count(c__4556__auto__);
var G__28039 = (0);
seq__28028 = G__28036;
chunk__28029 = G__28037;
count__28030 = G__28038;
i__28031 = G__28039;
continue;
} else {
var connection = cljs.core.first(seq__28028__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(connection);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection));
if(cljs.core.truth_(and__4115__auto____$1)){
return (!(c3kit.wire.websocketc._activity_since_QMARK_(connection,moment)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
c3kit.wire.websocketc._ping_BANG_(state,connection);
} else {
}


var G__28040 = cljs.core.next(seq__28028__$1);
var G__28041 = null;
var G__28042 = (0);
var G__28043 = (0);
seq__28028 = G__28040;
chunk__28029 = G__28041;
count__28030 = G__28042;
i__28031 = G__28043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
c3kit.wire.websocketc.connection_closed_BANG_ = (function c3kit$wire$websocketc$connection_closed_BANG_(server,connection){
if(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(connection)))){
c3kit.wire.websocketc.send_internal_message(server,connection,cljs.core.cst$kw$ws_SLASH_close,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(connection,cljs.core.assoc,cljs.core.cst$kw$open_QMARK_,false);
} else {
return null;
}
});
c3kit.wire.websocketc._connection_uri = (function c3kit$wire$websocketc$_connection_uri(var_args){
var G__28045 = arguments.length;
switch (G__28045) {
case 3:
return c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$3 = (function (path,connection_id,csrf_token){
return c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$4(window.location,path,connection_id,csrf_token);
}));

(c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$4 = (function (location,path,connection_id,csrf_token){
var protocol = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https:",location.protocol))?"wss:":"ws:");
var host = location.host;
return [protocol,"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?connection-id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(connection_id),"&ws-csrf-token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(csrf_token)].join('');
}));

(c3kit.wire.websocketc._connection_uri.cljs$lang$maxFixedArity = 4);


c3kit.wire.websocketc._connection_cursor = (function c3kit$wire$websocketc$_connection_cursor(state){
return c3kit.apron.cursor.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection], null));
});

c3kit.wire.websocketc.connections = (function c3kit$wire$websocketc$connections(state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.websocketc._connection_cursor(state)], null);
});

c3kit.wire.websocketc._socket_send_BANG_ = (function c3kit$wire$websocketc$_socket_send_BANG_(socket,data){
socket.send(data);

return true;
});

c3kit.wire.websocketc.send_to_BANG_ = (function c3kit$wire$websocketc$send_to_BANG_(_,connection,socket,message){
return c3kit.wire.websocketc._socket_send_BANG_(socket,c3kit.wire.websocketc.pack(message));
});

c3kit.wire.websocketc._data_received = (function c3kit$wire$websocketc$_data_received(client,e){
var data = e.data;
return c3kit.wire.websocketc.handle_message(client,c3kit.wire.websocketc._connection_cursor(client),data);
});

c3kit.wire.websocketc._handle_open = (function c3kit$wire$websocketc$_handle_open(client,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket opened"], null);
}),null)),null,(47),null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(client,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$open_QMARK_], null),true);

return c3kit.wire.websocketc.send_internal_message(client,c3kit.wire.websocketc._connection_cursor(client),cljs.core.cst$kw$ws_SLASH_open,null);
});

c3kit.wire.websocketc._handle_close = (function c3kit$wire$websocketc$_handle_close(client,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket close:"], null);
}),null)),null,(48),null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(client,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$open_QMARK_], null),false);

return c3kit.wire.websocketc.send_internal_message(client,c3kit.wire.websocketc._connection_cursor(client),cljs.core.cst$kw$ws_SLASH_close,null);
});

c3kit.wire.websocketc._handle_error = (function c3kit$wire$websocketc$_handle_error(client,e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error:"], null);
}),null)),null,(49),null);

return c3kit.wire.websocketc.send_internal_message(client,c3kit.wire.websocketc._connection_cursor(client),cljs.core.cst$kw$ws_SLASH_error,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)));
});

c3kit.wire.websocketc._add_connection_BANG_ = (function c3kit$wire$websocketc$_add_connection_BANG_(client,path,csrf_token,cid,socket){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(client,cljs.core.assoc,cljs.core.cst$kw$connection,c3kit.wire.websocketc.connection(cid,socket),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path,path,cljs.core.cst$kw$ws_DASH_csrf_DASH_token,csrf_token], 0));
});

c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_ = (function c3kit$wire$websocketc$_ping_inactive_connections_and_set_timeout_BANG_(state,interval){
c3kit.wire.websocketc._ping_inactive_connections_BANG_(state);

return setTimeout((function (){
return (c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_.cljs$core$IFn$_invoke$arity$2 ? c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_.cljs$core$IFn$_invoke$arity$2(state,interval) : c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_.call(null,state,interval));
}),interval);
});

c3kit.wire.websocketc.add_ping_task_BANG_ = (function c3kit$wire$websocketc$add_ping_task_BANG_(state,interval){
var task = (function (){
return c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_(state,interval);
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$ping_DASH_task,setTimeout(task,interval));
});
c3kit.wire.websocketc.default_options = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_data,null,cljs.core.cst$kw$request_DASH_timeout,(5000),cljs.core.cst$kw$ping_DASH_interval,(30)], null);
/**
 * Returns a atom to hold all the state and configuration to run a websocket client or server.
 * 
 *   message-handler - (fn [REQUEST]) to handle incoming RPC requests.
 * 
 *   REQUEST:
 *   :request-id    - each connection has it's own sequence starting at 1
 *   :kind          - used to dispatch behavior (see BUILTIN KINDS below)
 *   :params        - any clj form (data) needed to support the :kind of request
 *   :reply?        - true iff a response is expected
 *   :connection-id - uniquely identifying the connection to the server
 *   :request       - (server only) the ring request that initiated the websocket connection
 * 
 *   BUILTIN KINDS (values for :kind key in requests)
 *   :ws/open       - a connection is opened {:params nil}
 *   :ws/close      - a connection is closed {:params nil}
 *   :ws/hello      - sent from server to client when a connection is opened {:params nil}
 *   :ws/error      - an error occurred {:params error-map}
 *   :ws/timeout    - a request with {:reply? true} did not receive a response within :request-timeout milliseconds
 * 
 *   RESPONSE:
 *   :response-id   - id corresponding to originating request
 *   :payload       - any form
 * 
 *   OPTIONS - a map and/or key/value pairs:
 *   :on-data         	- (fn [data]) when incoming data fails to parse (edn) or satisfy request? or response?
 *   :request-timeout 	- (default: 5000) milliseconds to wait before cancelling request.  nil -> never timeout.
 *   :atom-fn      		- (default: core/atom) type of atom to story the state. Maybe reagent/atom.
 *   :ping-interval	 	- (default: 30) seconds between keep-alive pings on inactive connections. nil -> no pings
 *   
 */
c3kit.wire.websocketc.create = (function c3kit$wire$websocketc$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28049 = arguments.length;
var i__4737__auto___28050 = (0);
while(true){
if((i__4737__auto___28050 < len__4736__auto___28049)){
args__4742__auto__.push((arguments[i__4737__auto___28050]));

var G__28051 = (i__4737__auto___28050 + (1));
i__4737__auto___28050 = G__28051;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.wire.websocketc.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.wire.websocketc.create.cljs$core$IFn$_invoke$arity$variadic = (function (message_handler,args){
var options = c3kit.apron.corec.__GT_options(args);
var atom_fn = cljs.core.cst$kw$atom_DASH_fn.cljs$core$IFn$_invoke$arity$2(options,cljs.core.atom);
var server = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c3kit.wire.websocketc.default_options,cljs.core.select_keys(options,cljs.core.keys(c3kit.wire.websocketc.default_options)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$connection,null], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message_DASH_handler,message_handler], null)], 0));
var state_atom = (atom_fn.cljs$core$IFn$_invoke$arity$1 ? atom_fn.cljs$core$IFn$_invoke$arity$1(server) : atom_fn.call(null,server));
var temp__5804__auto___28052 = cljs.core.cst$kw$ping_DASH_interval.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
if(cljs.core.truth_(temp__5804__auto___28052)){
var interval_28053 = temp__5804__auto___28052;
c3kit.wire.websocketc.add_ping_task_BANG_(state_atom,interval_28053);
} else {
}

return state_atom;
}));

(c3kit.wire.websocketc.create.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.websocketc.create.cljs$lang$applyTo = (function (seq28047){
var G__28048 = cljs.core.first(seq28047);
var seq28047__$1 = cljs.core.next(seq28047);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28048,seq28047__$1);
}));

/**
 * Open a websocket connection to the server.
 * 
 *   client     - client state atom
 *   path       - URI path to the websocket handler.  The protocol and host are determined by the window location.
 *   csrf-token - required for security.  Default strategy is session/key from server.
 */
c3kit.wire.websocketc.connect_BANG_ = (function c3kit$wire$websocketc$connect_BANG_(client,path,csrf_token){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.websocketc",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket connect!"], null);
}),null)),null,(50),null);

var connection_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid());
var uri = c3kit.wire.websocketc._connection_uri.cljs$core$IFn$_invoke$arity$3(path,connection_id,csrf_token);
var socket = (new WebSocket(uri));
c3kit.wire.websocketc._add_connection_BANG_(client,path,csrf_token,connection_id,socket);

socket.addEventListener("open",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocketc._handle_open,client));

socket.addEventListener("message",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocketc._data_received,client));

socket.addEventListener("close",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocketc._handle_close,client));

return socket.addEventListener("error",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.websocketc._handle_error,client));
});
/**
 * Make a websocket RPC.
 * 
 *   state         - client or sever state (from create fn)
 *   connection-id - (server only) to select the client connection you want to call
 *   kind          - used to dispatch behavior, typically a keyword
 *   params        - (optional) any clj form (data) needed to support the :kind of request
 *   handler       - (optional) (fn [RESPONSE]) invoked when a response to the request is received (reply? implied true)
 * 
 *   OPTIONS - a map and/or key/value pairs:
 *   
 */
c3kit.wire.websocketc.call_BANG_ = (function c3kit$wire$websocketc$call_BANG_(var_args){
var G__28060 = arguments.length;
switch (G__28060) {
case 2:
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28062 = arguments.length;
var i__4737__auto___28063 = (0);
while(true){
if((i__4737__auto___28063 < len__4736__auto___28062)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28063]));

var G__28064 = (i__4737__auto___28063 + (1));
i__4737__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,kind){
return c3kit.wire.websocketc.call_BANG_(state,kind,null,null);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,kind,params){
return c3kit.wire.websocketc.call_BANG_(state,kind,params,null);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,kind,params,handler,options){
return c3kit.wire.websocketc._do_call_BANG_(state,c3kit.wire.websocketc._connection_cursor(state),kind,params,handler,options);
}));

/** @this {Function} */
(c3kit.wire.websocketc.call_BANG_.cljs$lang$applyTo = (function (seq28055){
var G__28056 = cljs.core.first(seq28055);
var seq28055__$1 = cljs.core.next(seq28055);
var G__28057 = cljs.core.first(seq28055__$1);
var seq28055__$2 = cljs.core.next(seq28055__$1);
var G__28058 = cljs.core.first(seq28055__$2);
var seq28055__$3 = cljs.core.next(seq28055__$2);
var G__28059 = cljs.core.first(seq28055__$3);
var seq28055__$4 = cljs.core.next(seq28055__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28056,G__28057,G__28058,G__28059,seq28055__$4);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$lang$maxFixedArity = (4));

c3kit.wire.websocketc.open_QMARK_ = (function c3kit$wire$websocketc$open_QMARK_(client){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$open_QMARK_], null));
});
/**
 * Close the connection.
 *   code   (optional) https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#status_codes
 *   reason (optional) A human-readable string explaining why the connection is closing
 */
c3kit.wire.websocketc.close_BANG_ = (function c3kit$wire$websocketc$close_BANG_(var_args){
var G__28066 = arguments.length;
switch (G__28066) {
case 1:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$socket], null)).close();
}));

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,code_or_reason){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$socket], null)).close(code_or_reason);
}));

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,code,reason){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$connection,cljs.core.cst$kw$socket], null)).close(code,reason);
}));

(c3kit.wire.websocketc.close_BANG_.cljs$lang$maxFixedArity = 3);

