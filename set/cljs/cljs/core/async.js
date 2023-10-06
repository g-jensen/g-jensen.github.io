// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15487 = arguments.length;
switch (G__15487) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15488 = (function (f,blockable,meta15489){
this.f = f;
this.blockable = blockable;
this.meta15489 = meta15489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15490,meta15489__$1){
var self__ = this;
var _15490__$1 = this;
return (new cljs.core.async.t_cljs$core$async15488(self__.f,self__.blockable,meta15489__$1));
}));

(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15490){
var self__ = this;
var _15490__$1 = this;
return self__.meta15489;
}));

(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15489], null);
}));

(cljs.core.async.t_cljs$core$async15488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15488");

(cljs.core.async.t_cljs$core$async15488.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15488.
 */
cljs.core.async.__GT_t_cljs$core$async15488 = (function cljs$core$async$__GT_t_cljs$core$async15488(f__$1,blockable__$1,meta15489){
return (new cljs.core.async.t_cljs$core$async15488(f__$1,blockable__$1,meta15489));
});

}

return (new cljs.core.async.t_cljs$core$async15488(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15494 = arguments.length;
switch (G__15494) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15497 = arguments.length;
switch (G__15497) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15500 = arguments.length;
switch (G__15500) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15502 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15502) : fn1.call(null,val_15502));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15502) : fn1.call(null,val_15502));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15504 = arguments.length;
switch (G__15504) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___15506 = n;
var x_15507 = (0);
while(true){
if((x_15507 < n__4613__auto___15506)){
(a[x_15507] = x_15507);

var G__15508 = (x_15507 + (1));
x_15507 = G__15508;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15509 = (function (flag,meta15510){
this.flag = flag;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15511,meta15510__$1){
var self__ = this;
var _15511__$1 = this;
return (new cljs.core.async.t_cljs$core$async15509(self__.flag,meta15510__$1));
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15511){
var self__ = this;
var _15511__$1 = this;
return self__.meta15510;
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15510], null);
}));

(cljs.core.async.t_cljs$core$async15509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15509");

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15509.
 */
cljs.core.async.__GT_t_cljs$core$async15509 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15509(flag__$1,meta15510){
return (new cljs.core.async.t_cljs$core$async15509(flag__$1,meta15510));
});

}

return (new cljs.core.async.t_cljs$core$async15509(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15512 = (function (flag,cb,meta15513){
this.flag = flag;
this.cb = cb;
this.meta15513 = meta15513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15514,meta15513__$1){
var self__ = this;
var _15514__$1 = this;
return (new cljs.core.async.t_cljs$core$async15512(self__.flag,self__.cb,meta15513__$1));
}));

(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15514){
var self__ = this;
var _15514__$1 = this;
return self__.meta15513;
}));

(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15513], null);
}));

(cljs.core.async.t_cljs$core$async15512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15512");

(cljs.core.async.t_cljs$core$async15512.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15512.
 */
cljs.core.async.__GT_t_cljs$core$async15512 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15512(flag__$1,cb__$1,meta15513){
return (new cljs.core.async.t_cljs$core$async15512(flag__$1,cb__$1,meta15513));
});

}

return (new cljs.core.async.t_cljs$core$async15512(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__15515_SHARP_){
var G__15517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15515_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15517) : fret.call(null,G__15517));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__15516_SHARP_){
var G__15518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15516_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15518) : fret.call(null,G__15518));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15519 = (i + (1));
i = G__15519;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5804__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15525 = arguments.length;
var i__4737__auto___15526 = (0);
while(true){
if((i__4737__auto___15526 < len__4736__auto___15525)){
args__4742__auto__.push((arguments[i__4737__auto___15526]));

var G__15527 = (i__4737__auto___15526 + (1));
i__4737__auto___15526 = G__15527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15522){
var map__15523 = p__15522;
var map__15523__$1 = (((((!((map__15523 == null))))?(((((map__15523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15523):map__15523);
var opts = map__15523__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15520){
var G__15521 = cljs.core.first(seq15520);
var seq15520__$1 = cljs.core.next(seq15520);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15521,seq15520__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15529 = arguments.length;
switch (G__15529) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15427__auto___15576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15553){
var state_val_15554 = (state_15553[(1)]);
if((state_val_15554 === (7))){
var inst_15549 = (state_15553[(2)]);
var state_15553__$1 = state_15553;
var statearr_15555_15577 = state_15553__$1;
(statearr_15555_15577[(2)] = inst_15549);

(statearr_15555_15577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (1))){
var state_15553__$1 = state_15553;
var statearr_15556_15578 = state_15553__$1;
(statearr_15556_15578[(2)] = null);

(statearr_15556_15578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (4))){
var inst_15532 = (state_15553[(7)]);
var inst_15532__$1 = (state_15553[(2)]);
var inst_15533 = (inst_15532__$1 == null);
var state_15553__$1 = (function (){var statearr_15557 = state_15553;
(statearr_15557[(7)] = inst_15532__$1);

return statearr_15557;
})();
if(cljs.core.truth_(inst_15533)){
var statearr_15558_15579 = state_15553__$1;
(statearr_15558_15579[(1)] = (5));

} else {
var statearr_15559_15580 = state_15553__$1;
(statearr_15559_15580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (13))){
var state_15553__$1 = state_15553;
var statearr_15560_15581 = state_15553__$1;
(statearr_15560_15581[(2)] = null);

(statearr_15560_15581[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (6))){
var inst_15532 = (state_15553[(7)]);
var state_15553__$1 = state_15553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15553__$1,(11),to,inst_15532);
} else {
if((state_val_15554 === (3))){
var inst_15551 = (state_15553[(2)]);
var state_15553__$1 = state_15553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15553__$1,inst_15551);
} else {
if((state_val_15554 === (12))){
var state_15553__$1 = state_15553;
var statearr_15561_15582 = state_15553__$1;
(statearr_15561_15582[(2)] = null);

(statearr_15561_15582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (2))){
var state_15553__$1 = state_15553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15553__$1,(4),from);
} else {
if((state_val_15554 === (11))){
var inst_15542 = (state_15553[(2)]);
var state_15553__$1 = state_15553;
if(cljs.core.truth_(inst_15542)){
var statearr_15562_15583 = state_15553__$1;
(statearr_15562_15583[(1)] = (12));

} else {
var statearr_15563_15584 = state_15553__$1;
(statearr_15563_15584[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (9))){
var state_15553__$1 = state_15553;
var statearr_15564_15585 = state_15553__$1;
(statearr_15564_15585[(2)] = null);

(statearr_15564_15585[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (5))){
var state_15553__$1 = state_15553;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15565_15586 = state_15553__$1;
(statearr_15565_15586[(1)] = (8));

} else {
var statearr_15566_15587 = state_15553__$1;
(statearr_15566_15587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (14))){
var inst_15547 = (state_15553[(2)]);
var state_15553__$1 = state_15553;
var statearr_15567_15588 = state_15553__$1;
(statearr_15567_15588[(2)] = inst_15547);

(statearr_15567_15588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (10))){
var inst_15539 = (state_15553[(2)]);
var state_15553__$1 = state_15553;
var statearr_15568_15589 = state_15553__$1;
(statearr_15568_15589[(2)] = inst_15539);

(statearr_15568_15589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15554 === (8))){
var inst_15536 = cljs.core.async.close_BANG_(to);
var state_15553__$1 = state_15553;
var statearr_15569_15590 = state_15553__$1;
(statearr_15569_15590[(2)] = inst_15536);

(statearr_15569_15590[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_15570 = [null,null,null,null,null,null,null,null];
(statearr_15570[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_15570[(1)] = (1));

return statearr_15570;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_15553){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15553);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15571){var ex__15356__auto__ = e15571;
var statearr_15572_15591 = state_15553;
(statearr_15572_15591[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15553[(4)]))){
var statearr_15573_15592 = state_15553;
(statearr_15573_15592[(1)] = cljs.core.first((state_15553[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15593 = state_15553;
state_15553 = G__15593;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_15553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_15553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15574 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15574[(6)] = c__15427__auto___15576);

return statearr_15574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__15594){
var vec__15595 = p__15594;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(1),null);
var job = vec__15595;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15427__auto___15771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15602){
var state_val_15603 = (state_15602[(1)]);
if((state_val_15603 === (1))){
var state_15602__$1 = state_15602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15602__$1,(2),res,v);
} else {
if((state_val_15603 === (2))){
var inst_15599 = (state_15602[(2)]);
var inst_15600 = cljs.core.async.close_BANG_(res);
var state_15602__$1 = (function (){var statearr_15604 = state_15602;
(statearr_15604[(7)] = inst_15599);

return statearr_15604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15602__$1,inst_15600);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_15605 = [null,null,null,null,null,null,null,null];
(statearr_15605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__);

(statearr_15605[(1)] = (1));

return statearr_15605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1 = (function (state_15602){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15602);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15606){var ex__15356__auto__ = e15606;
var statearr_15607_15772 = state_15602;
(statearr_15607_15772[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15602[(4)]))){
var statearr_15608_15773 = state_15602;
(statearr_15608_15773[(1)] = cljs.core.first((state_15602[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15774 = state_15602;
state_15602 = G__15774;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = function(state_15602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1.call(this,state_15602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15609 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15609[(6)] = c__15427__auto___15771);

return statearr_15609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15610){
var vec__15611 = p__15610;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15611,(1),null);
var job = vec__15611;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___15775 = n;
var __15776 = (0);
while(true){
if((__15776 < n__4613__auto___15775)){
var G__15614_15777 = type;
var G__15614_15778__$1 = (((G__15614_15777 instanceof cljs.core.Keyword))?G__15614_15777.fqn:null);
switch (G__15614_15778__$1) {
case "compute":
var c__15427__auto___15780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15776,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = ((function (__15776,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function (state_15627){
var state_val_15628 = (state_15627[(1)]);
if((state_val_15628 === (1))){
var state_15627__$1 = state_15627;
var statearr_15629_15781 = state_15627__$1;
(statearr_15629_15781[(2)] = null);

(statearr_15629_15781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15628 === (2))){
var state_15627__$1 = state_15627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15627__$1,(4),jobs);
} else {
if((state_val_15628 === (3))){
var inst_15625 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15627__$1,inst_15625);
} else {
if((state_val_15628 === (4))){
var inst_15617 = (state_15627[(2)]);
var inst_15618 = process(inst_15617);
var state_15627__$1 = state_15627;
if(cljs.core.truth_(inst_15618)){
var statearr_15630_15782 = state_15627__$1;
(statearr_15630_15782[(1)] = (5));

} else {
var statearr_15631_15783 = state_15627__$1;
(statearr_15631_15783[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15628 === (5))){
var state_15627__$1 = state_15627;
var statearr_15632_15784 = state_15627__$1;
(statearr_15632_15784[(2)] = null);

(statearr_15632_15784[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15628 === (6))){
var state_15627__$1 = state_15627;
var statearr_15633_15785 = state_15627__$1;
(statearr_15633_15785[(2)] = null);

(statearr_15633_15785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15628 === (7))){
var inst_15623 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
var statearr_15634_15786 = state_15627__$1;
(statearr_15634_15786[(2)] = inst_15623);

(statearr_15634_15786[(1)] = (3));


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
});})(__15776,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
;
return ((function (__15776,switch__15352__auto__,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_15635 = [null,null,null,null,null,null,null];
(statearr_15635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__);

(statearr_15635[(1)] = (1));

return statearr_15635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1 = (function (state_15627){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15627);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15636){var ex__15356__auto__ = e15636;
var statearr_15637_15787 = state_15627;
(statearr_15637_15787[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15627[(4)]))){
var statearr_15638_15788 = state_15627;
(statearr_15638_15788[(1)] = cljs.core.first((state_15627[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15789 = state_15627;
state_15627 = G__15789;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = function(state_15627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1.call(this,state_15627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__;
})()
;})(__15776,switch__15352__auto__,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
})();
var state__15429__auto__ = (function (){var statearr_15639 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15639[(6)] = c__15427__auto___15780);

return statearr_15639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
});})(__15776,c__15427__auto___15780,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
);


break;
case "async":
var c__15427__auto___15790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15776,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = ((function (__15776,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (1))){
var state_15652__$1 = state_15652;
var statearr_15654_15791 = state_15652__$1;
(statearr_15654_15791[(2)] = null);

(statearr_15654_15791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15653 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15652__$1,(4),jobs);
} else {
if((state_val_15653 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15652__$1,inst_15650);
} else {
if((state_val_15653 === (4))){
var inst_15642 = (state_15652[(2)]);
var inst_15643 = async(inst_15642);
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15643)){
var statearr_15655_15792 = state_15652__$1;
(statearr_15655_15792[(1)] = (5));

} else {
var statearr_15656_15793 = state_15652__$1;
(statearr_15656_15793[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15653 === (5))){
var state_15652__$1 = state_15652;
var statearr_15657_15794 = state_15652__$1;
(statearr_15657_15794[(2)] = null);

(statearr_15657_15794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15653 === (6))){
var state_15652__$1 = state_15652;
var statearr_15658_15795 = state_15652__$1;
(statearr_15658_15795[(2)] = null);

(statearr_15658_15795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15653 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15659_15796 = state_15652__$1;
(statearr_15659_15796[(2)] = inst_15648);

(statearr_15659_15796[(1)] = (3));


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
});})(__15776,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
;
return ((function (__15776,switch__15352__auto__,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_15660 = [null,null,null,null,null,null,null];
(statearr_15660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__);

(statearr_15660[(1)] = (1));

return statearr_15660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1 = (function (state_15652){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15652);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15661){var ex__15356__auto__ = e15661;
var statearr_15662_15797 = state_15652;
(statearr_15662_15797[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15652[(4)]))){
var statearr_15663_15798 = state_15652;
(statearr_15663_15798[(1)] = cljs.core.first((state_15652[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15799 = state_15652;
state_15652 = G__15799;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__;
})()
;})(__15776,switch__15352__auto__,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
})();
var state__15429__auto__ = (function (){var statearr_15664 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15664[(6)] = c__15427__auto___15790);

return statearr_15664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
});})(__15776,c__15427__auto___15790,G__15614_15777,G__15614_15778__$1,n__4613__auto___15775,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15614_15778__$1)].join('')));

}

var G__15800 = (__15776 + (1));
__15776 = G__15800;
continue;
} else {
}
break;
}

var c__15427__auto___15801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15686){
var state_val_15687 = (state_15686[(1)]);
if((state_val_15687 === (7))){
var inst_15682 = (state_15686[(2)]);
var state_15686__$1 = state_15686;
var statearr_15688_15802 = state_15686__$1;
(statearr_15688_15802[(2)] = inst_15682);

(statearr_15688_15802[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15687 === (1))){
var state_15686__$1 = state_15686;
var statearr_15689_15803 = state_15686__$1;
(statearr_15689_15803[(2)] = null);

(statearr_15689_15803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15687 === (4))){
var inst_15667 = (state_15686[(7)]);
var inst_15667__$1 = (state_15686[(2)]);
var inst_15668 = (inst_15667__$1 == null);
var state_15686__$1 = (function (){var statearr_15690 = state_15686;
(statearr_15690[(7)] = inst_15667__$1);

return statearr_15690;
})();
if(cljs.core.truth_(inst_15668)){
var statearr_15691_15804 = state_15686__$1;
(statearr_15691_15804[(1)] = (5));

} else {
var statearr_15692_15805 = state_15686__$1;
(statearr_15692_15805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15687 === (6))){
var inst_15667 = (state_15686[(7)]);
var inst_15672 = (state_15686[(8)]);
var inst_15672__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15674 = [inst_15667,inst_15672__$1];
var inst_15675 = (new cljs.core.PersistentVector(null,2,(5),inst_15673,inst_15674,null));
var state_15686__$1 = (function (){var statearr_15693 = state_15686;
(statearr_15693[(8)] = inst_15672__$1);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15686__$1,(8),jobs,inst_15675);
} else {
if((state_val_15687 === (3))){
var inst_15684 = (state_15686[(2)]);
var state_15686__$1 = state_15686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15686__$1,inst_15684);
} else {
if((state_val_15687 === (2))){
var state_15686__$1 = state_15686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15686__$1,(4),from);
} else {
if((state_val_15687 === (9))){
var inst_15679 = (state_15686[(2)]);
var state_15686__$1 = (function (){var statearr_15694 = state_15686;
(statearr_15694[(9)] = inst_15679);

return statearr_15694;
})();
var statearr_15695_15806 = state_15686__$1;
(statearr_15695_15806[(2)] = null);

(statearr_15695_15806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15687 === (5))){
var inst_15670 = cljs.core.async.close_BANG_(jobs);
var state_15686__$1 = state_15686;
var statearr_15696_15807 = state_15686__$1;
(statearr_15696_15807[(2)] = inst_15670);

(statearr_15696_15807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15687 === (8))){
var inst_15672 = (state_15686[(8)]);
var inst_15677 = (state_15686[(2)]);
var state_15686__$1 = (function (){var statearr_15697 = state_15686;
(statearr_15697[(10)] = inst_15677);

return statearr_15697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15686__$1,(9),results,inst_15672);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1 = (function (state_15686){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15686);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15699){var ex__15356__auto__ = e15699;
var statearr_15700_15808 = state_15686;
(statearr_15700_15808[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15686[(4)]))){
var statearr_15701_15809 = state_15686;
(statearr_15701_15809[(1)] = cljs.core.first((state_15686[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15810 = state_15686;
state_15686 = G__15810;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = function(state_15686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1.call(this,state_15686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15702 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15702[(6)] = c__15427__auto___15801);

return statearr_15702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15740){
var state_val_15741 = (state_15740[(1)]);
if((state_val_15741 === (7))){
var inst_15736 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15742_15811 = state_15740__$1;
(statearr_15742_15811[(2)] = inst_15736);

(statearr_15742_15811[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (20))){
var state_15740__$1 = state_15740;
var statearr_15743_15812 = state_15740__$1;
(statearr_15743_15812[(2)] = null);

(statearr_15743_15812[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (1))){
var state_15740__$1 = state_15740;
var statearr_15744_15813 = state_15740__$1;
(statearr_15744_15813[(2)] = null);

(statearr_15744_15813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (4))){
var inst_15705 = (state_15740[(7)]);
var inst_15705__$1 = (state_15740[(2)]);
var inst_15706 = (inst_15705__$1 == null);
var state_15740__$1 = (function (){var statearr_15745 = state_15740;
(statearr_15745[(7)] = inst_15705__$1);

return statearr_15745;
})();
if(cljs.core.truth_(inst_15706)){
var statearr_15746_15814 = state_15740__$1;
(statearr_15746_15814[(1)] = (5));

} else {
var statearr_15747_15815 = state_15740__$1;
(statearr_15747_15815[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (15))){
var inst_15718 = (state_15740[(8)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15740__$1,(18),to,inst_15718);
} else {
if((state_val_15741 === (21))){
var inst_15731 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15748_15816 = state_15740__$1;
(statearr_15748_15816[(2)] = inst_15731);

(statearr_15748_15816[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (13))){
var inst_15733 = (state_15740[(2)]);
var state_15740__$1 = (function (){var statearr_15749 = state_15740;
(statearr_15749[(9)] = inst_15733);

return statearr_15749;
})();
var statearr_15750_15817 = state_15740__$1;
(statearr_15750_15817[(2)] = null);

(statearr_15750_15817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (6))){
var inst_15705 = (state_15740[(7)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(11),inst_15705);
} else {
if((state_val_15741 === (17))){
var inst_15726 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
if(cljs.core.truth_(inst_15726)){
var statearr_15751_15818 = state_15740__$1;
(statearr_15751_15818[(1)] = (19));

} else {
var statearr_15752_15819 = state_15740__$1;
(statearr_15752_15819[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (3))){
var inst_15738 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15740__$1,inst_15738);
} else {
if((state_val_15741 === (12))){
var inst_15715 = (state_15740[(10)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(14),inst_15715);
} else {
if((state_val_15741 === (2))){
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(4),results);
} else {
if((state_val_15741 === (19))){
var state_15740__$1 = state_15740;
var statearr_15753_15820 = state_15740__$1;
(statearr_15753_15820[(2)] = null);

(statearr_15753_15820[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (11))){
var inst_15715 = (state_15740[(2)]);
var state_15740__$1 = (function (){var statearr_15754 = state_15740;
(statearr_15754[(10)] = inst_15715);

return statearr_15754;
})();
var statearr_15755_15821 = state_15740__$1;
(statearr_15755_15821[(2)] = null);

(statearr_15755_15821[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (9))){
var state_15740__$1 = state_15740;
var statearr_15756_15822 = state_15740__$1;
(statearr_15756_15822[(2)] = null);

(statearr_15756_15822[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (5))){
var state_15740__$1 = state_15740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15757_15823 = state_15740__$1;
(statearr_15757_15823[(1)] = (8));

} else {
var statearr_15758_15824 = state_15740__$1;
(statearr_15758_15824[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (14))){
var inst_15718 = (state_15740[(8)]);
var inst_15718__$1 = (state_15740[(2)]);
var inst_15719 = (inst_15718__$1 == null);
var inst_15720 = cljs.core.not(inst_15719);
var state_15740__$1 = (function (){var statearr_15759 = state_15740;
(statearr_15759[(8)] = inst_15718__$1);

return statearr_15759;
})();
if(inst_15720){
var statearr_15760_15825 = state_15740__$1;
(statearr_15760_15825[(1)] = (15));

} else {
var statearr_15761_15826 = state_15740__$1;
(statearr_15761_15826[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (16))){
var state_15740__$1 = state_15740;
var statearr_15762_15827 = state_15740__$1;
(statearr_15762_15827[(2)] = false);

(statearr_15762_15827[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (10))){
var inst_15712 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15763_15828 = state_15740__$1;
(statearr_15763_15828[(2)] = inst_15712);

(statearr_15763_15828[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (18))){
var inst_15723 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15764_15829 = state_15740__$1;
(statearr_15764_15829[(2)] = inst_15723);

(statearr_15764_15829[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15741 === (8))){
var inst_15709 = cljs.core.async.close_BANG_(to);
var state_15740__$1 = state_15740;
var statearr_15765_15830 = state_15740__$1;
(statearr_15765_15830[(2)] = inst_15709);

(statearr_15765_15830[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_15766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__);

(statearr_15766[(1)] = (1));

return statearr_15766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1 = (function (state_15740){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15740);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15767){var ex__15356__auto__ = e15767;
var statearr_15768_15831 = state_15740;
(statearr_15768_15831[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15740[(4)]))){
var statearr_15769_15832 = state_15740;
(statearr_15769_15832[(1)] = cljs.core.first((state_15740[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15833 = state_15740;
state_15740 = G__15833;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15770 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15770[(6)] = c__15427__auto__);

return statearr_15770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15835 = arguments.length;
switch (G__15835) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15838 = arguments.length;
switch (G__15838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15841 = arguments.length;
switch (G__15841) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15427__auto___15891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15867){
var state_val_15868 = (state_15867[(1)]);
if((state_val_15868 === (7))){
var inst_15863 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15869_15892 = state_15867__$1;
(statearr_15869_15892[(2)] = inst_15863);

(statearr_15869_15892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (1))){
var state_15867__$1 = state_15867;
var statearr_15870_15893 = state_15867__$1;
(statearr_15870_15893[(2)] = null);

(statearr_15870_15893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (4))){
var inst_15844 = (state_15867[(7)]);
var inst_15844__$1 = (state_15867[(2)]);
var inst_15845 = (inst_15844__$1 == null);
var state_15867__$1 = (function (){var statearr_15871 = state_15867;
(statearr_15871[(7)] = inst_15844__$1);

return statearr_15871;
})();
if(cljs.core.truth_(inst_15845)){
var statearr_15872_15894 = state_15867__$1;
(statearr_15872_15894[(1)] = (5));

} else {
var statearr_15873_15895 = state_15867__$1;
(statearr_15873_15895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (13))){
var state_15867__$1 = state_15867;
var statearr_15874_15896 = state_15867__$1;
(statearr_15874_15896[(2)] = null);

(statearr_15874_15896[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (6))){
var inst_15844 = (state_15867[(7)]);
var inst_15850 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15844) : p.call(null,inst_15844));
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15850)){
var statearr_15875_15897 = state_15867__$1;
(statearr_15875_15897[(1)] = (9));

} else {
var statearr_15876_15898 = state_15867__$1;
(statearr_15876_15898[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (3))){
var inst_15865 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15867__$1,inst_15865);
} else {
if((state_val_15868 === (12))){
var state_15867__$1 = state_15867;
var statearr_15877_15899 = state_15867__$1;
(statearr_15877_15899[(2)] = null);

(statearr_15877_15899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (2))){
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15867__$1,(4),ch);
} else {
if((state_val_15868 === (11))){
var inst_15844 = (state_15867[(7)]);
var inst_15854 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15867__$1,(8),inst_15854,inst_15844);
} else {
if((state_val_15868 === (9))){
var state_15867__$1 = state_15867;
var statearr_15878_15900 = state_15867__$1;
(statearr_15878_15900[(2)] = tc);

(statearr_15878_15900[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (5))){
var inst_15847 = cljs.core.async.close_BANG_(tc);
var inst_15848 = cljs.core.async.close_BANG_(fc);
var state_15867__$1 = (function (){var statearr_15879 = state_15867;
(statearr_15879[(8)] = inst_15847);

return statearr_15879;
})();
var statearr_15880_15901 = state_15867__$1;
(statearr_15880_15901[(2)] = inst_15848);

(statearr_15880_15901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (14))){
var inst_15861 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15881_15902 = state_15867__$1;
(statearr_15881_15902[(2)] = inst_15861);

(statearr_15881_15902[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (10))){
var state_15867__$1 = state_15867;
var statearr_15882_15903 = state_15867__$1;
(statearr_15882_15903[(2)] = fc);

(statearr_15882_15903[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15868 === (8))){
var inst_15856 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15856)){
var statearr_15883_15904 = state_15867__$1;
(statearr_15883_15904[(1)] = (12));

} else {
var statearr_15884_15905 = state_15867__$1;
(statearr_15884_15905[(1)] = (13));

}

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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_15885 = [null,null,null,null,null,null,null,null,null];
(statearr_15885[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_15885[(1)] = (1));

return statearr_15885;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_15867){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15867);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15886){var ex__15356__auto__ = e15886;
var statearr_15887_15906 = state_15867;
(statearr_15887_15906[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15867[(4)]))){
var statearr_15888_15907 = state_15867;
(statearr_15888_15907[(1)] = cljs.core.first((state_15867[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15908 = state_15867;
state_15867 = G__15908;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_15867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_15867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15889 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15889[(6)] = c__15427__auto___15891);

return statearr_15889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15930){
var state_val_15931 = (state_15930[(1)]);
if((state_val_15931 === (7))){
var inst_15926 = (state_15930[(2)]);
var state_15930__$1 = state_15930;
var statearr_15932_15951 = state_15930__$1;
(statearr_15932_15951[(2)] = inst_15926);

(statearr_15932_15951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (1))){
var inst_15909 = init;
var inst_15910 = inst_15909;
var state_15930__$1 = (function (){var statearr_15933 = state_15930;
(statearr_15933[(7)] = inst_15910);

return statearr_15933;
})();
var statearr_15934_15952 = state_15930__$1;
(statearr_15934_15952[(2)] = null);

(statearr_15934_15952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (4))){
var inst_15913 = (state_15930[(8)]);
var inst_15913__$1 = (state_15930[(2)]);
var inst_15914 = (inst_15913__$1 == null);
var state_15930__$1 = (function (){var statearr_15935 = state_15930;
(statearr_15935[(8)] = inst_15913__$1);

return statearr_15935;
})();
if(cljs.core.truth_(inst_15914)){
var statearr_15936_15953 = state_15930__$1;
(statearr_15936_15953[(1)] = (5));

} else {
var statearr_15937_15954 = state_15930__$1;
(statearr_15937_15954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (6))){
var inst_15910 = (state_15930[(7)]);
var inst_15913 = (state_15930[(8)]);
var inst_15917 = (state_15930[(9)]);
var inst_15917__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15910,inst_15913) : f.call(null,inst_15910,inst_15913));
var inst_15918 = cljs.core.reduced_QMARK_(inst_15917__$1);
var state_15930__$1 = (function (){var statearr_15938 = state_15930;
(statearr_15938[(9)] = inst_15917__$1);

return statearr_15938;
})();
if(inst_15918){
var statearr_15939_15955 = state_15930__$1;
(statearr_15939_15955[(1)] = (8));

} else {
var statearr_15940_15956 = state_15930__$1;
(statearr_15940_15956[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (3))){
var inst_15928 = (state_15930[(2)]);
var state_15930__$1 = state_15930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15930__$1,inst_15928);
} else {
if((state_val_15931 === (2))){
var state_15930__$1 = state_15930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15930__$1,(4),ch);
} else {
if((state_val_15931 === (9))){
var inst_15917 = (state_15930[(9)]);
var inst_15910 = inst_15917;
var state_15930__$1 = (function (){var statearr_15941 = state_15930;
(statearr_15941[(7)] = inst_15910);

return statearr_15941;
})();
var statearr_15942_15957 = state_15930__$1;
(statearr_15942_15957[(2)] = null);

(statearr_15942_15957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (5))){
var inst_15910 = (state_15930[(7)]);
var state_15930__$1 = state_15930;
var statearr_15943_15958 = state_15930__$1;
(statearr_15943_15958[(2)] = inst_15910);

(statearr_15943_15958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (10))){
var inst_15924 = (state_15930[(2)]);
var state_15930__$1 = state_15930;
var statearr_15944_15959 = state_15930__$1;
(statearr_15944_15959[(2)] = inst_15924);

(statearr_15944_15959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15931 === (8))){
var inst_15917 = (state_15930[(9)]);
var inst_15920 = cljs.core.deref(inst_15917);
var state_15930__$1 = state_15930;
var statearr_15945_15960 = state_15930__$1;
(statearr_15945_15960[(2)] = inst_15920);

(statearr_15945_15960[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15353__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15353__auto____0 = (function (){
var statearr_15946 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15946[(0)] = cljs$core$async$reduce_$_state_machine__15353__auto__);

(statearr_15946[(1)] = (1));

return statearr_15946;
});
var cljs$core$async$reduce_$_state_machine__15353__auto____1 = (function (state_15930){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15930);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15947){var ex__15356__auto__ = e15947;
var statearr_15948_15961 = state_15930;
(statearr_15948_15961[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15930[(4)]))){
var statearr_15949_15962 = state_15930;
(statearr_15949_15962[(1)] = cljs.core.first((state_15930[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15963 = state_15930;
state_15930 = G__15963;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15353__auto__ = function(state_15930){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15353__auto____1.call(this,state_15930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15353__auto____0;
cljs$core$async$reduce_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15353__auto____1;
return cljs$core$async$reduce_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15950 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15950[(6)] = c__15427__auto__);

return statearr_15950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_15969){
var state_val_15970 = (state_15969[(1)]);
if((state_val_15970 === (1))){
var inst_15964 = cljs.core.async.reduce(f__$1,init,ch);
var state_15969__$1 = state_15969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15969__$1,(2),inst_15964);
} else {
if((state_val_15970 === (2))){
var inst_15966 = (state_15969[(2)]);
var inst_15967 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15966) : f__$1.call(null,inst_15966));
var state_15969__$1 = state_15969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15969__$1,inst_15967);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15353__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15353__auto____0 = (function (){
var statearr_15971 = [null,null,null,null,null,null,null];
(statearr_15971[(0)] = cljs$core$async$transduce_$_state_machine__15353__auto__);

(statearr_15971[(1)] = (1));

return statearr_15971;
});
var cljs$core$async$transduce_$_state_machine__15353__auto____1 = (function (state_15969){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_15969);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e15972){var ex__15356__auto__ = e15972;
var statearr_15973_15976 = state_15969;
(statearr_15973_15976[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_15969[(4)]))){
var statearr_15974_15977 = state_15969;
(statearr_15974_15977[(1)] = cljs.core.first((state_15969[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__15978 = state_15969;
state_15969 = G__15978;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15353__auto__ = function(state_15969){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15353__auto____1.call(this,state_15969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15353__auto____0;
cljs$core$async$transduce_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15353__auto____1;
return cljs$core$async$transduce_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_15975 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_15975[(6)] = c__15427__auto__);

return statearr_15975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15980 = arguments.length;
switch (G__15980) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16005){
var state_val_16006 = (state_16005[(1)]);
if((state_val_16006 === (7))){
var inst_15987 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16007_16029 = state_16005__$1;
(statearr_16007_16029[(2)] = inst_15987);

(statearr_16007_16029[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (1))){
var inst_15981 = cljs.core.seq(coll);
var inst_15982 = inst_15981;
var state_16005__$1 = (function (){var statearr_16008 = state_16005;
(statearr_16008[(7)] = inst_15982);

return statearr_16008;
})();
var statearr_16009_16030 = state_16005__$1;
(statearr_16009_16030[(2)] = null);

(statearr_16009_16030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (4))){
var inst_15982 = (state_16005[(7)]);
var inst_15985 = cljs.core.first(inst_15982);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16005__$1,(7),ch,inst_15985);
} else {
if((state_val_16006 === (13))){
var inst_15999 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16010_16031 = state_16005__$1;
(statearr_16010_16031[(2)] = inst_15999);

(statearr_16010_16031[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (6))){
var inst_15990 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
if(cljs.core.truth_(inst_15990)){
var statearr_16011_16032 = state_16005__$1;
(statearr_16011_16032[(1)] = (8));

} else {
var statearr_16012_16033 = state_16005__$1;
(statearr_16012_16033[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (3))){
var inst_16003 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16005__$1,inst_16003);
} else {
if((state_val_16006 === (12))){
var state_16005__$1 = state_16005;
var statearr_16013_16034 = state_16005__$1;
(statearr_16013_16034[(2)] = null);

(statearr_16013_16034[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (2))){
var inst_15982 = (state_16005[(7)]);
var state_16005__$1 = state_16005;
if(cljs.core.truth_(inst_15982)){
var statearr_16014_16035 = state_16005__$1;
(statearr_16014_16035[(1)] = (4));

} else {
var statearr_16015_16036 = state_16005__$1;
(statearr_16015_16036[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (11))){
var inst_15996 = cljs.core.async.close_BANG_(ch);
var state_16005__$1 = state_16005;
var statearr_16016_16037 = state_16005__$1;
(statearr_16016_16037[(2)] = inst_15996);

(statearr_16016_16037[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (9))){
var state_16005__$1 = state_16005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16017_16038 = state_16005__$1;
(statearr_16017_16038[(1)] = (11));

} else {
var statearr_16018_16039 = state_16005__$1;
(statearr_16018_16039[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (5))){
var inst_15982 = (state_16005[(7)]);
var state_16005__$1 = state_16005;
var statearr_16019_16040 = state_16005__$1;
(statearr_16019_16040[(2)] = inst_15982);

(statearr_16019_16040[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (10))){
var inst_16001 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16020_16041 = state_16005__$1;
(statearr_16020_16041[(2)] = inst_16001);

(statearr_16020_16041[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (8))){
var inst_15982 = (state_16005[(7)]);
var inst_15992 = cljs.core.next(inst_15982);
var inst_15982__$1 = inst_15992;
var state_16005__$1 = (function (){var statearr_16021 = state_16005;
(statearr_16021[(7)] = inst_15982__$1);

return statearr_16021;
})();
var statearr_16022_16042 = state_16005__$1;
(statearr_16022_16042[(2)] = null);

(statearr_16022_16042[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_16023 = [null,null,null,null,null,null,null,null];
(statearr_16023[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_16023[(1)] = (1));

return statearr_16023;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_16005){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16005);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16024){var ex__15356__auto__ = e16024;
var statearr_16025_16043 = state_16005;
(statearr_16025_16043[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16005[(4)]))){
var statearr_16026_16044 = state_16005;
(statearr_16026_16044[(1)] = cljs.core.first((state_16005[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16045 = state_16005;
state_16005 = G__16045;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_16005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_16005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16027 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16027[(6)] = c__15427__auto__);

return statearr_16027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16047 = arguments.length;
switch (G__16047) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16049 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16049(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16050 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16050(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16051 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16051(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16052 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16052(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16053 = (function (ch,cs,meta16054){
this.ch = ch;
this.cs = cs;
this.meta16054 = meta16054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16055,meta16054__$1){
var self__ = this;
var _16055__$1 = this;
return (new cljs.core.async.t_cljs$core$async16053(self__.ch,self__.cs,meta16054__$1));
}));

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16055){
var self__ = this;
var _16055__$1 = this;
return self__.meta16054;
}));

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16053.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16054], null);
}));

(cljs.core.async.t_cljs$core$async16053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16053");

(cljs.core.async.t_cljs$core$async16053.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16053.
 */
cljs.core.async.__GT_t_cljs$core$async16053 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16053(ch__$1,cs__$1,meta16054){
return (new cljs.core.async.t_cljs$core$async16053(ch__$1,cs__$1,meta16054));
});

}

return (new cljs.core.async.t_cljs$core$async16053(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15427__auto___16272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16188){
var state_val_16189 = (state_16188[(1)]);
if((state_val_16189 === (7))){
var inst_16184 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16190_16273 = state_16188__$1;
(statearr_16190_16273[(2)] = inst_16184);

(statearr_16190_16273[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (20))){
var inst_16089 = (state_16188[(7)]);
var inst_16101 = cljs.core.first(inst_16089);
var inst_16102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16101,(0),null);
var inst_16103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16101,(1),null);
var state_16188__$1 = (function (){var statearr_16191 = state_16188;
(statearr_16191[(8)] = inst_16102);

return statearr_16191;
})();
if(cljs.core.truth_(inst_16103)){
var statearr_16192_16274 = state_16188__$1;
(statearr_16192_16274[(1)] = (22));

} else {
var statearr_16193_16275 = state_16188__$1;
(statearr_16193_16275[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (27))){
var inst_16131 = (state_16188[(9)]);
var inst_16133 = (state_16188[(10)]);
var inst_16138 = (state_16188[(11)]);
var inst_16058 = (state_16188[(12)]);
var inst_16138__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16131,inst_16133);
var inst_16139 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16138__$1,inst_16058,done);
var state_16188__$1 = (function (){var statearr_16194 = state_16188;
(statearr_16194[(11)] = inst_16138__$1);

return statearr_16194;
})();
if(cljs.core.truth_(inst_16139)){
var statearr_16195_16276 = state_16188__$1;
(statearr_16195_16276[(1)] = (30));

} else {
var statearr_16196_16277 = state_16188__$1;
(statearr_16196_16277[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (1))){
var state_16188__$1 = state_16188;
var statearr_16197_16278 = state_16188__$1;
(statearr_16197_16278[(2)] = null);

(statearr_16197_16278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (24))){
var inst_16089 = (state_16188[(7)]);
var inst_16108 = (state_16188[(2)]);
var inst_16109 = cljs.core.next(inst_16089);
var inst_16067 = inst_16109;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16188__$1 = (function (){var statearr_16198 = state_16188;
(statearr_16198[(13)] = inst_16108);

(statearr_16198[(14)] = inst_16067);

(statearr_16198[(15)] = inst_16068);

(statearr_16198[(16)] = inst_16069);

(statearr_16198[(17)] = inst_16070);

return statearr_16198;
})();
var statearr_16199_16279 = state_16188__$1;
(statearr_16199_16279[(2)] = null);

(statearr_16199_16279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (39))){
var state_16188__$1 = state_16188;
var statearr_16203_16280 = state_16188__$1;
(statearr_16203_16280[(2)] = null);

(statearr_16203_16280[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (4))){
var inst_16058 = (state_16188[(12)]);
var inst_16058__$1 = (state_16188[(2)]);
var inst_16059 = (inst_16058__$1 == null);
var state_16188__$1 = (function (){var statearr_16204 = state_16188;
(statearr_16204[(12)] = inst_16058__$1);

return statearr_16204;
})();
if(cljs.core.truth_(inst_16059)){
var statearr_16205_16281 = state_16188__$1;
(statearr_16205_16281[(1)] = (5));

} else {
var statearr_16206_16282 = state_16188__$1;
(statearr_16206_16282[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (15))){
var inst_16070 = (state_16188[(17)]);
var inst_16067 = (state_16188[(14)]);
var inst_16068 = (state_16188[(15)]);
var inst_16069 = (state_16188[(16)]);
var inst_16085 = (state_16188[(2)]);
var inst_16086 = (inst_16070 + (1));
var tmp16200 = inst_16068;
var tmp16201 = inst_16067;
var tmp16202 = inst_16069;
var inst_16067__$1 = tmp16201;
var inst_16068__$1 = tmp16200;
var inst_16069__$1 = tmp16202;
var inst_16070__$1 = inst_16086;
var state_16188__$1 = (function (){var statearr_16207 = state_16188;
(statearr_16207[(18)] = inst_16085);

(statearr_16207[(14)] = inst_16067__$1);

(statearr_16207[(15)] = inst_16068__$1);

(statearr_16207[(16)] = inst_16069__$1);

(statearr_16207[(17)] = inst_16070__$1);

return statearr_16207;
})();
var statearr_16208_16283 = state_16188__$1;
(statearr_16208_16283[(2)] = null);

(statearr_16208_16283[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (21))){
var inst_16112 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16212_16284 = state_16188__$1;
(statearr_16212_16284[(2)] = inst_16112);

(statearr_16212_16284[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (31))){
var inst_16138 = (state_16188[(11)]);
var inst_16142 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16138);
var state_16188__$1 = state_16188;
var statearr_16213_16285 = state_16188__$1;
(statearr_16213_16285[(2)] = inst_16142);

(statearr_16213_16285[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (32))){
var inst_16133 = (state_16188[(10)]);
var inst_16130 = (state_16188[(19)]);
var inst_16131 = (state_16188[(9)]);
var inst_16132 = (state_16188[(20)]);
var inst_16144 = (state_16188[(2)]);
var inst_16145 = (inst_16133 + (1));
var tmp16209 = inst_16131;
var tmp16210 = inst_16130;
var tmp16211 = inst_16132;
var inst_16130__$1 = tmp16210;
var inst_16131__$1 = tmp16209;
var inst_16132__$1 = tmp16211;
var inst_16133__$1 = inst_16145;
var state_16188__$1 = (function (){var statearr_16214 = state_16188;
(statearr_16214[(21)] = inst_16144);

(statearr_16214[(19)] = inst_16130__$1);

(statearr_16214[(9)] = inst_16131__$1);

(statearr_16214[(20)] = inst_16132__$1);

(statearr_16214[(10)] = inst_16133__$1);

return statearr_16214;
})();
var statearr_16215_16286 = state_16188__$1;
(statearr_16215_16286[(2)] = null);

(statearr_16215_16286[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (40))){
var inst_16157 = (state_16188[(22)]);
var inst_16161 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16157);
var state_16188__$1 = state_16188;
var statearr_16216_16287 = state_16188__$1;
(statearr_16216_16287[(2)] = inst_16161);

(statearr_16216_16287[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (33))){
var inst_16148 = (state_16188[(23)]);
var inst_16150 = cljs.core.chunked_seq_QMARK_(inst_16148);
var state_16188__$1 = state_16188;
if(inst_16150){
var statearr_16217_16288 = state_16188__$1;
(statearr_16217_16288[(1)] = (36));

} else {
var statearr_16218_16289 = state_16188__$1;
(statearr_16218_16289[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (13))){
var inst_16079 = (state_16188[(24)]);
var inst_16082 = cljs.core.async.close_BANG_(inst_16079);
var state_16188__$1 = state_16188;
var statearr_16219_16290 = state_16188__$1;
(statearr_16219_16290[(2)] = inst_16082);

(statearr_16219_16290[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (22))){
var inst_16102 = (state_16188[(8)]);
var inst_16105 = cljs.core.async.close_BANG_(inst_16102);
var state_16188__$1 = state_16188;
var statearr_16220_16291 = state_16188__$1;
(statearr_16220_16291[(2)] = inst_16105);

(statearr_16220_16291[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (36))){
var inst_16148 = (state_16188[(23)]);
var inst_16152 = cljs.core.chunk_first(inst_16148);
var inst_16153 = cljs.core.chunk_rest(inst_16148);
var inst_16154 = cljs.core.count(inst_16152);
var inst_16130 = inst_16153;
var inst_16131 = inst_16152;
var inst_16132 = inst_16154;
var inst_16133 = (0);
var state_16188__$1 = (function (){var statearr_16221 = state_16188;
(statearr_16221[(19)] = inst_16130);

(statearr_16221[(9)] = inst_16131);

(statearr_16221[(20)] = inst_16132);

(statearr_16221[(10)] = inst_16133);

return statearr_16221;
})();
var statearr_16222_16292 = state_16188__$1;
(statearr_16222_16292[(2)] = null);

(statearr_16222_16292[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (41))){
var inst_16148 = (state_16188[(23)]);
var inst_16163 = (state_16188[(2)]);
var inst_16164 = cljs.core.next(inst_16148);
var inst_16130 = inst_16164;
var inst_16131 = null;
var inst_16132 = (0);
var inst_16133 = (0);
var state_16188__$1 = (function (){var statearr_16223 = state_16188;
(statearr_16223[(25)] = inst_16163);

(statearr_16223[(19)] = inst_16130);

(statearr_16223[(9)] = inst_16131);

(statearr_16223[(20)] = inst_16132);

(statearr_16223[(10)] = inst_16133);

return statearr_16223;
})();
var statearr_16224_16293 = state_16188__$1;
(statearr_16224_16293[(2)] = null);

(statearr_16224_16293[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (43))){
var state_16188__$1 = state_16188;
var statearr_16225_16294 = state_16188__$1;
(statearr_16225_16294[(2)] = null);

(statearr_16225_16294[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (29))){
var inst_16172 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16226_16295 = state_16188__$1;
(statearr_16226_16295[(2)] = inst_16172);

(statearr_16226_16295[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (44))){
var inst_16181 = (state_16188[(2)]);
var state_16188__$1 = (function (){var statearr_16227 = state_16188;
(statearr_16227[(26)] = inst_16181);

return statearr_16227;
})();
var statearr_16228_16296 = state_16188__$1;
(statearr_16228_16296[(2)] = null);

(statearr_16228_16296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (6))){
var inst_16122 = (state_16188[(27)]);
var inst_16121 = cljs.core.deref(cs);
var inst_16122__$1 = cljs.core.keys(inst_16121);
var inst_16123 = cljs.core.count(inst_16122__$1);
var inst_16124 = cljs.core.reset_BANG_(dctr,inst_16123);
var inst_16129 = cljs.core.seq(inst_16122__$1);
var inst_16130 = inst_16129;
var inst_16131 = null;
var inst_16132 = (0);
var inst_16133 = (0);
var state_16188__$1 = (function (){var statearr_16229 = state_16188;
(statearr_16229[(27)] = inst_16122__$1);

(statearr_16229[(28)] = inst_16124);

(statearr_16229[(19)] = inst_16130);

(statearr_16229[(9)] = inst_16131);

(statearr_16229[(20)] = inst_16132);

(statearr_16229[(10)] = inst_16133);

return statearr_16229;
})();
var statearr_16230_16297 = state_16188__$1;
(statearr_16230_16297[(2)] = null);

(statearr_16230_16297[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (28))){
var inst_16130 = (state_16188[(19)]);
var inst_16148 = (state_16188[(23)]);
var inst_16148__$1 = cljs.core.seq(inst_16130);
var state_16188__$1 = (function (){var statearr_16231 = state_16188;
(statearr_16231[(23)] = inst_16148__$1);

return statearr_16231;
})();
if(inst_16148__$1){
var statearr_16232_16298 = state_16188__$1;
(statearr_16232_16298[(1)] = (33));

} else {
var statearr_16233_16299 = state_16188__$1;
(statearr_16233_16299[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (25))){
var inst_16133 = (state_16188[(10)]);
var inst_16132 = (state_16188[(20)]);
var inst_16135 = (inst_16133 < inst_16132);
var inst_16136 = inst_16135;
var state_16188__$1 = state_16188;
if(cljs.core.truth_(inst_16136)){
var statearr_16234_16300 = state_16188__$1;
(statearr_16234_16300[(1)] = (27));

} else {
var statearr_16235_16301 = state_16188__$1;
(statearr_16235_16301[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (34))){
var state_16188__$1 = state_16188;
var statearr_16236_16302 = state_16188__$1;
(statearr_16236_16302[(2)] = null);

(statearr_16236_16302[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (17))){
var state_16188__$1 = state_16188;
var statearr_16237_16303 = state_16188__$1;
(statearr_16237_16303[(2)] = null);

(statearr_16237_16303[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (3))){
var inst_16186 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16188__$1,inst_16186);
} else {
if((state_val_16189 === (12))){
var inst_16117 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16238_16304 = state_16188__$1;
(statearr_16238_16304[(2)] = inst_16117);

(statearr_16238_16304[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (2))){
var state_16188__$1 = state_16188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16188__$1,(4),ch);
} else {
if((state_val_16189 === (23))){
var state_16188__$1 = state_16188;
var statearr_16239_16305 = state_16188__$1;
(statearr_16239_16305[(2)] = null);

(statearr_16239_16305[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (35))){
var inst_16170 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16240_16306 = state_16188__$1;
(statearr_16240_16306[(2)] = inst_16170);

(statearr_16240_16306[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (19))){
var inst_16089 = (state_16188[(7)]);
var inst_16093 = cljs.core.chunk_first(inst_16089);
var inst_16094 = cljs.core.chunk_rest(inst_16089);
var inst_16095 = cljs.core.count(inst_16093);
var inst_16067 = inst_16094;
var inst_16068 = inst_16093;
var inst_16069 = inst_16095;
var inst_16070 = (0);
var state_16188__$1 = (function (){var statearr_16241 = state_16188;
(statearr_16241[(14)] = inst_16067);

(statearr_16241[(15)] = inst_16068);

(statearr_16241[(16)] = inst_16069);

(statearr_16241[(17)] = inst_16070);

return statearr_16241;
})();
var statearr_16242_16307 = state_16188__$1;
(statearr_16242_16307[(2)] = null);

(statearr_16242_16307[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (11))){
var inst_16067 = (state_16188[(14)]);
var inst_16089 = (state_16188[(7)]);
var inst_16089__$1 = cljs.core.seq(inst_16067);
var state_16188__$1 = (function (){var statearr_16243 = state_16188;
(statearr_16243[(7)] = inst_16089__$1);

return statearr_16243;
})();
if(inst_16089__$1){
var statearr_16244_16308 = state_16188__$1;
(statearr_16244_16308[(1)] = (16));

} else {
var statearr_16245_16309 = state_16188__$1;
(statearr_16245_16309[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (9))){
var inst_16119 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16246_16310 = state_16188__$1;
(statearr_16246_16310[(2)] = inst_16119);

(statearr_16246_16310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (5))){
var inst_16065 = cljs.core.deref(cs);
var inst_16066 = cljs.core.seq(inst_16065);
var inst_16067 = inst_16066;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16188__$1 = (function (){var statearr_16247 = state_16188;
(statearr_16247[(14)] = inst_16067);

(statearr_16247[(15)] = inst_16068);

(statearr_16247[(16)] = inst_16069);

(statearr_16247[(17)] = inst_16070);

return statearr_16247;
})();
var statearr_16248_16311 = state_16188__$1;
(statearr_16248_16311[(2)] = null);

(statearr_16248_16311[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (14))){
var state_16188__$1 = state_16188;
var statearr_16249_16312 = state_16188__$1;
(statearr_16249_16312[(2)] = null);

(statearr_16249_16312[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (45))){
var inst_16178 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16250_16313 = state_16188__$1;
(statearr_16250_16313[(2)] = inst_16178);

(statearr_16250_16313[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (26))){
var inst_16122 = (state_16188[(27)]);
var inst_16174 = (state_16188[(2)]);
var inst_16175 = cljs.core.seq(inst_16122);
var state_16188__$1 = (function (){var statearr_16251 = state_16188;
(statearr_16251[(29)] = inst_16174);

return statearr_16251;
})();
if(inst_16175){
var statearr_16252_16314 = state_16188__$1;
(statearr_16252_16314[(1)] = (42));

} else {
var statearr_16253_16315 = state_16188__$1;
(statearr_16253_16315[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (16))){
var inst_16089 = (state_16188[(7)]);
var inst_16091 = cljs.core.chunked_seq_QMARK_(inst_16089);
var state_16188__$1 = state_16188;
if(inst_16091){
var statearr_16254_16316 = state_16188__$1;
(statearr_16254_16316[(1)] = (19));

} else {
var statearr_16255_16317 = state_16188__$1;
(statearr_16255_16317[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (38))){
var inst_16167 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16256_16318 = state_16188__$1;
(statearr_16256_16318[(2)] = inst_16167);

(statearr_16256_16318[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (30))){
var state_16188__$1 = state_16188;
var statearr_16257_16319 = state_16188__$1;
(statearr_16257_16319[(2)] = null);

(statearr_16257_16319[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (10))){
var inst_16068 = (state_16188[(15)]);
var inst_16070 = (state_16188[(17)]);
var inst_16078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16068,inst_16070);
var inst_16079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16078,(0),null);
var inst_16080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16078,(1),null);
var state_16188__$1 = (function (){var statearr_16258 = state_16188;
(statearr_16258[(24)] = inst_16079);

return statearr_16258;
})();
if(cljs.core.truth_(inst_16080)){
var statearr_16259_16320 = state_16188__$1;
(statearr_16259_16320[(1)] = (13));

} else {
var statearr_16260_16321 = state_16188__$1;
(statearr_16260_16321[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (18))){
var inst_16115 = (state_16188[(2)]);
var state_16188__$1 = state_16188;
var statearr_16261_16322 = state_16188__$1;
(statearr_16261_16322[(2)] = inst_16115);

(statearr_16261_16322[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (42))){
var state_16188__$1 = state_16188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16188__$1,(45),dchan);
} else {
if((state_val_16189 === (37))){
var inst_16148 = (state_16188[(23)]);
var inst_16157 = (state_16188[(22)]);
var inst_16058 = (state_16188[(12)]);
var inst_16157__$1 = cljs.core.first(inst_16148);
var inst_16158 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16157__$1,inst_16058,done);
var state_16188__$1 = (function (){var statearr_16262 = state_16188;
(statearr_16262[(22)] = inst_16157__$1);

return statearr_16262;
})();
if(cljs.core.truth_(inst_16158)){
var statearr_16263_16323 = state_16188__$1;
(statearr_16263_16323[(1)] = (39));

} else {
var statearr_16264_16324 = state_16188__$1;
(statearr_16264_16324[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16189 === (8))){
var inst_16070 = (state_16188[(17)]);
var inst_16069 = (state_16188[(16)]);
var inst_16072 = (inst_16070 < inst_16069);
var inst_16073 = inst_16072;
var state_16188__$1 = state_16188;
if(cljs.core.truth_(inst_16073)){
var statearr_16265_16325 = state_16188__$1;
(statearr_16265_16325[(1)] = (10));

} else {
var statearr_16266_16326 = state_16188__$1;
(statearr_16266_16326[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15353__auto__ = null;
var cljs$core$async$mult_$_state_machine__15353__auto____0 = (function (){
var statearr_16267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16267[(0)] = cljs$core$async$mult_$_state_machine__15353__auto__);

(statearr_16267[(1)] = (1));

return statearr_16267;
});
var cljs$core$async$mult_$_state_machine__15353__auto____1 = (function (state_16188){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16188);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16268){var ex__15356__auto__ = e16268;
var statearr_16269_16327 = state_16188;
(statearr_16269_16327[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16188[(4)]))){
var statearr_16270_16328 = state_16188;
(statearr_16270_16328[(1)] = cljs.core.first((state_16188[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16329 = state_16188;
state_16188 = G__16329;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15353__auto__ = function(state_16188){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15353__auto____1.call(this,state_16188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15353__auto____0;
cljs$core$async$mult_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15353__auto____1;
return cljs$core$async$mult_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16271 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16271[(6)] = c__15427__auto___16272);

return statearr_16271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16331 = arguments.length;
switch (G__16331) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16333 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16333(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16334 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16334(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16335 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16335(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16336 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16336(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16337 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16337(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16348 = arguments.length;
var i__4737__auto___16349 = (0);
while(true){
if((i__4737__auto___16349 < len__4736__auto___16348)){
args__4742__auto__.push((arguments[i__4737__auto___16349]));

var G__16350 = (i__4737__auto___16349 + (1));
i__4737__auto___16349 = G__16350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16342){
var map__16343 = p__16342;
var map__16343__$1 = (((((!((map__16343 == null))))?(((((map__16343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16343):map__16343);
var opts = map__16343__$1;
var statearr_16345_16351 = state;
(statearr_16345_16351[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16346_16352 = state;
(statearr_16346_16352[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16347_16353 = state;
(statearr_16347_16353[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16338){
var G__16339 = cljs.core.first(seq16338);
var seq16338__$1 = cljs.core.next(seq16338);
var G__16340 = cljs.core.first(seq16338__$1);
var seq16338__$2 = cljs.core.next(seq16338__$1);
var G__16341 = cljs.core.first(seq16338__$2);
var seq16338__$3 = cljs.core.next(seq16338__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16339,G__16340,G__16341,seq16338__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16354 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16355){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16355 = meta16355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16356,meta16355__$1){
var self__ = this;
var _16356__$1 = this;
return (new cljs.core.async.t_cljs$core$async16354(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16355__$1));
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16356){
var self__ = this;
var _16356__$1 = this;
return self__.meta16355;
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16355], null);
}));

(cljs.core.async.t_cljs$core$async16354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16354");

(cljs.core.async.t_cljs$core$async16354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16354.
 */
cljs.core.async.__GT_t_cljs$core$async16354 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16354(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16355){
return (new cljs.core.async.t_cljs$core$async16354(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16355));
});

}

return (new cljs.core.async.t_cljs$core$async16354(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15427__auto___16519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16458){
var state_val_16459 = (state_16458[(1)]);
if((state_val_16459 === (7))){
var inst_16373 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
var statearr_16460_16520 = state_16458__$1;
(statearr_16460_16520[(2)] = inst_16373);

(statearr_16460_16520[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (20))){
var inst_16385 = (state_16458[(7)]);
var state_16458__$1 = state_16458;
var statearr_16461_16521 = state_16458__$1;
(statearr_16461_16521[(2)] = inst_16385);

(statearr_16461_16521[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (27))){
var state_16458__$1 = state_16458;
var statearr_16462_16522 = state_16458__$1;
(statearr_16462_16522[(2)] = null);

(statearr_16462_16522[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (1))){
var inst_16360 = (state_16458[(8)]);
var inst_16360__$1 = calc_state();
var inst_16362 = (inst_16360__$1 == null);
var inst_16363 = cljs.core.not(inst_16362);
var state_16458__$1 = (function (){var statearr_16463 = state_16458;
(statearr_16463[(8)] = inst_16360__$1);

return statearr_16463;
})();
if(inst_16363){
var statearr_16464_16523 = state_16458__$1;
(statearr_16464_16523[(1)] = (2));

} else {
var statearr_16465_16524 = state_16458__$1;
(statearr_16465_16524[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (24))){
var inst_16409 = (state_16458[(9)]);
var inst_16418 = (state_16458[(10)]);
var inst_16432 = (state_16458[(11)]);
var inst_16432__$1 = (inst_16409.cljs$core$IFn$_invoke$arity$1 ? inst_16409.cljs$core$IFn$_invoke$arity$1(inst_16418) : inst_16409.call(null,inst_16418));
var state_16458__$1 = (function (){var statearr_16466 = state_16458;
(statearr_16466[(11)] = inst_16432__$1);

return statearr_16466;
})();
if(cljs.core.truth_(inst_16432__$1)){
var statearr_16467_16525 = state_16458__$1;
(statearr_16467_16525[(1)] = (29));

} else {
var statearr_16468_16526 = state_16458__$1;
(statearr_16468_16526[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (4))){
var inst_16376 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16376)){
var statearr_16469_16527 = state_16458__$1;
(statearr_16469_16527[(1)] = (8));

} else {
var statearr_16470_16528 = state_16458__$1;
(statearr_16470_16528[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (15))){
var inst_16403 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16403)){
var statearr_16471_16529 = state_16458__$1;
(statearr_16471_16529[(1)] = (19));

} else {
var statearr_16472_16530 = state_16458__$1;
(statearr_16472_16530[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (21))){
var inst_16408 = (state_16458[(12)]);
var inst_16408__$1 = (state_16458[(2)]);
var inst_16409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16408__$1,cljs.core.cst$kw$solos);
var inst_16410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16408__$1,cljs.core.cst$kw$mutes);
var inst_16411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16408__$1,cljs.core.cst$kw$reads);
var state_16458__$1 = (function (){var statearr_16473 = state_16458;
(statearr_16473[(12)] = inst_16408__$1);

(statearr_16473[(9)] = inst_16409);

(statearr_16473[(13)] = inst_16410);

return statearr_16473;
})();
return cljs.core.async.ioc_alts_BANG_(state_16458__$1,(22),inst_16411);
} else {
if((state_val_16459 === (31))){
var inst_16440 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16440)){
var statearr_16474_16531 = state_16458__$1;
(statearr_16474_16531[(1)] = (32));

} else {
var statearr_16475_16532 = state_16458__$1;
(statearr_16475_16532[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (32))){
var inst_16417 = (state_16458[(14)]);
var state_16458__$1 = state_16458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16458__$1,(35),out,inst_16417);
} else {
if((state_val_16459 === (33))){
var inst_16408 = (state_16458[(12)]);
var inst_16385 = inst_16408;
var state_16458__$1 = (function (){var statearr_16476 = state_16458;
(statearr_16476[(7)] = inst_16385);

return statearr_16476;
})();
var statearr_16477_16533 = state_16458__$1;
(statearr_16477_16533[(2)] = null);

(statearr_16477_16533[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (13))){
var inst_16385 = (state_16458[(7)]);
var inst_16392 = inst_16385.cljs$lang$protocol_mask$partition0$;
var inst_16393 = (inst_16392 & (64));
var inst_16394 = inst_16385.cljs$core$ISeq$;
var inst_16395 = (cljs.core.PROTOCOL_SENTINEL === inst_16394);
var inst_16396 = ((inst_16393) || (inst_16395));
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16396)){
var statearr_16478_16534 = state_16458__$1;
(statearr_16478_16534[(1)] = (16));

} else {
var statearr_16479_16535 = state_16458__$1;
(statearr_16479_16535[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (22))){
var inst_16417 = (state_16458[(14)]);
var inst_16418 = (state_16458[(10)]);
var inst_16416 = (state_16458[(2)]);
var inst_16417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16416,(0),null);
var inst_16418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16416,(1),null);
var inst_16419 = (inst_16417__$1 == null);
var inst_16420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16418__$1,change);
var inst_16421 = ((inst_16419) || (inst_16420));
var state_16458__$1 = (function (){var statearr_16480 = state_16458;
(statearr_16480[(14)] = inst_16417__$1);

(statearr_16480[(10)] = inst_16418__$1);

return statearr_16480;
})();
if(cljs.core.truth_(inst_16421)){
var statearr_16481_16536 = state_16458__$1;
(statearr_16481_16536[(1)] = (23));

} else {
var statearr_16482_16537 = state_16458__$1;
(statearr_16482_16537[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (36))){
var inst_16408 = (state_16458[(12)]);
var inst_16385 = inst_16408;
var state_16458__$1 = (function (){var statearr_16483 = state_16458;
(statearr_16483[(7)] = inst_16385);

return statearr_16483;
})();
var statearr_16484_16538 = state_16458__$1;
(statearr_16484_16538[(2)] = null);

(statearr_16484_16538[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (29))){
var inst_16432 = (state_16458[(11)]);
var state_16458__$1 = state_16458;
var statearr_16485_16539 = state_16458__$1;
(statearr_16485_16539[(2)] = inst_16432);

(statearr_16485_16539[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (6))){
var state_16458__$1 = state_16458;
var statearr_16486_16540 = state_16458__$1;
(statearr_16486_16540[(2)] = false);

(statearr_16486_16540[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (28))){
var inst_16428 = (state_16458[(2)]);
var inst_16429 = calc_state();
var inst_16385 = inst_16429;
var state_16458__$1 = (function (){var statearr_16487 = state_16458;
(statearr_16487[(15)] = inst_16428);

(statearr_16487[(7)] = inst_16385);

return statearr_16487;
})();
var statearr_16488_16541 = state_16458__$1;
(statearr_16488_16541[(2)] = null);

(statearr_16488_16541[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (25))){
var inst_16454 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
var statearr_16489_16542 = state_16458__$1;
(statearr_16489_16542[(2)] = inst_16454);

(statearr_16489_16542[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (34))){
var inst_16452 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
var statearr_16490_16543 = state_16458__$1;
(statearr_16490_16543[(2)] = inst_16452);

(statearr_16490_16543[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (17))){
var state_16458__$1 = state_16458;
var statearr_16491_16544 = state_16458__$1;
(statearr_16491_16544[(2)] = false);

(statearr_16491_16544[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (3))){
var state_16458__$1 = state_16458;
var statearr_16492_16545 = state_16458__$1;
(statearr_16492_16545[(2)] = false);

(statearr_16492_16545[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (12))){
var inst_16456 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16458__$1,inst_16456);
} else {
if((state_val_16459 === (2))){
var inst_16360 = (state_16458[(8)]);
var inst_16365 = inst_16360.cljs$lang$protocol_mask$partition0$;
var inst_16366 = (inst_16365 & (64));
var inst_16367 = inst_16360.cljs$core$ISeq$;
var inst_16368 = (cljs.core.PROTOCOL_SENTINEL === inst_16367);
var inst_16369 = ((inst_16366) || (inst_16368));
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16369)){
var statearr_16493_16546 = state_16458__$1;
(statearr_16493_16546[(1)] = (5));

} else {
var statearr_16494_16547 = state_16458__$1;
(statearr_16494_16547[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (23))){
var inst_16417 = (state_16458[(14)]);
var inst_16423 = (inst_16417 == null);
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16423)){
var statearr_16495_16548 = state_16458__$1;
(statearr_16495_16548[(1)] = (26));

} else {
var statearr_16496_16549 = state_16458__$1;
(statearr_16496_16549[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (35))){
var inst_16443 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
if(cljs.core.truth_(inst_16443)){
var statearr_16497_16550 = state_16458__$1;
(statearr_16497_16550[(1)] = (36));

} else {
var statearr_16498_16551 = state_16458__$1;
(statearr_16498_16551[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (19))){
var inst_16385 = (state_16458[(7)]);
var inst_16405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16385);
var state_16458__$1 = state_16458;
var statearr_16499_16552 = state_16458__$1;
(statearr_16499_16552[(2)] = inst_16405);

(statearr_16499_16552[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (11))){
var inst_16385 = (state_16458[(7)]);
var inst_16389 = (inst_16385 == null);
var inst_16390 = cljs.core.not(inst_16389);
var state_16458__$1 = state_16458;
if(inst_16390){
var statearr_16500_16553 = state_16458__$1;
(statearr_16500_16553[(1)] = (13));

} else {
var statearr_16501_16554 = state_16458__$1;
(statearr_16501_16554[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (9))){
var inst_16360 = (state_16458[(8)]);
var state_16458__$1 = state_16458;
var statearr_16502_16555 = state_16458__$1;
(statearr_16502_16555[(2)] = inst_16360);

(statearr_16502_16555[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (5))){
var state_16458__$1 = state_16458;
var statearr_16503_16556 = state_16458__$1;
(statearr_16503_16556[(2)] = true);

(statearr_16503_16556[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (14))){
var state_16458__$1 = state_16458;
var statearr_16504_16557 = state_16458__$1;
(statearr_16504_16557[(2)] = false);

(statearr_16504_16557[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (26))){
var inst_16418 = (state_16458[(10)]);
var inst_16425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16418);
var state_16458__$1 = state_16458;
var statearr_16505_16558 = state_16458__$1;
(statearr_16505_16558[(2)] = inst_16425);

(statearr_16505_16558[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (16))){
var state_16458__$1 = state_16458;
var statearr_16506_16559 = state_16458__$1;
(statearr_16506_16559[(2)] = true);

(statearr_16506_16559[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (38))){
var inst_16448 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
var statearr_16507_16560 = state_16458__$1;
(statearr_16507_16560[(2)] = inst_16448);

(statearr_16507_16560[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (30))){
var inst_16409 = (state_16458[(9)]);
var inst_16410 = (state_16458[(13)]);
var inst_16418 = (state_16458[(10)]);
var inst_16435 = cljs.core.empty_QMARK_(inst_16409);
var inst_16436 = (inst_16410.cljs$core$IFn$_invoke$arity$1 ? inst_16410.cljs$core$IFn$_invoke$arity$1(inst_16418) : inst_16410.call(null,inst_16418));
var inst_16437 = cljs.core.not(inst_16436);
var inst_16438 = ((inst_16435) && (inst_16437));
var state_16458__$1 = state_16458;
var statearr_16508_16561 = state_16458__$1;
(statearr_16508_16561[(2)] = inst_16438);

(statearr_16508_16561[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (10))){
var inst_16360 = (state_16458[(8)]);
var inst_16381 = (state_16458[(2)]);
var inst_16382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16381,cljs.core.cst$kw$solos);
var inst_16383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16381,cljs.core.cst$kw$mutes);
var inst_16384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16381,cljs.core.cst$kw$reads);
var inst_16385 = inst_16360;
var state_16458__$1 = (function (){var statearr_16509 = state_16458;
(statearr_16509[(16)] = inst_16382);

(statearr_16509[(17)] = inst_16383);

(statearr_16509[(18)] = inst_16384);

(statearr_16509[(7)] = inst_16385);

return statearr_16509;
})();
var statearr_16510_16562 = state_16458__$1;
(statearr_16510_16562[(2)] = null);

(statearr_16510_16562[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (18))){
var inst_16400 = (state_16458[(2)]);
var state_16458__$1 = state_16458;
var statearr_16511_16563 = state_16458__$1;
(statearr_16511_16563[(2)] = inst_16400);

(statearr_16511_16563[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (37))){
var state_16458__$1 = state_16458;
var statearr_16512_16564 = state_16458__$1;
(statearr_16512_16564[(2)] = null);

(statearr_16512_16564[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16459 === (8))){
var inst_16360 = (state_16458[(8)]);
var inst_16378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16360);
var state_16458__$1 = state_16458;
var statearr_16513_16565 = state_16458__$1;
(statearr_16513_16565[(2)] = inst_16378);

(statearr_16513_16565[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15353__auto__ = null;
var cljs$core$async$mix_$_state_machine__15353__auto____0 = (function (){
var statearr_16514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16514[(0)] = cljs$core$async$mix_$_state_machine__15353__auto__);

(statearr_16514[(1)] = (1));

return statearr_16514;
});
var cljs$core$async$mix_$_state_machine__15353__auto____1 = (function (state_16458){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16458);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16515){var ex__15356__auto__ = e16515;
var statearr_16516_16566 = state_16458;
(statearr_16516_16566[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16458[(4)]))){
var statearr_16517_16567 = state_16458;
(statearr_16517_16567[(1)] = cljs.core.first((state_16458[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16568 = state_16458;
state_16458 = G__16568;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15353__auto__ = function(state_16458){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15353__auto____1.call(this,state_16458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15353__auto____0;
cljs$core$async$mix_$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15353__auto____1;
return cljs$core$async$mix_$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16518 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16518[(6)] = c__15427__auto___16519);

return statearr_16518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16571 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16571(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16572 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16572(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16573 = (function() {
var G__16574 = null;
var G__16574__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16574__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16574 = function(p,v){
switch(arguments.length){
case 1:
return G__16574__1.call(this,p);
case 2:
return G__16574__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16574.cljs$core$IFn$_invoke$arity$1 = G__16574__1;
G__16574.cljs$core$IFn$_invoke$arity$2 = G__16574__2;
return G__16574;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16570 = arguments.length;
switch (G__16570) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16573.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16573.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16578 = arguments.length;
switch (G__16578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16576_SHARP_){
if(cljs.core.truth_((p1__16576_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16576_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16576_SHARP_.call(null,topic)))){
return p1__16576_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16576_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16580 = meta16580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16581,meta16580__$1){
var self__ = this;
var _16581__$1 = this;
return (new cljs.core.async.t_cljs$core$async16579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16580__$1));
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16581){
var self__ = this;
var _16581__$1 = this;
return self__.meta16580;
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16580], null);
}));

(cljs.core.async.t_cljs$core$async16579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16579");

(cljs.core.async.t_cljs$core$async16579.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16579.
 */
cljs.core.async.__GT_t_cljs$core$async16579 = (function cljs$core$async$__GT_t_cljs$core$async16579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16580){
return (new cljs.core.async.t_cljs$core$async16579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16580));
});

}

return (new cljs.core.async.t_cljs$core$async16579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15427__auto___16700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16653){
var state_val_16654 = (state_16653[(1)]);
if((state_val_16654 === (7))){
var inst_16649 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16655_16701 = state_16653__$1;
(statearr_16655_16701[(2)] = inst_16649);

(statearr_16655_16701[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (20))){
var state_16653__$1 = state_16653;
var statearr_16656_16702 = state_16653__$1;
(statearr_16656_16702[(2)] = null);

(statearr_16656_16702[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (1))){
var state_16653__$1 = state_16653;
var statearr_16657_16703 = state_16653__$1;
(statearr_16657_16703[(2)] = null);

(statearr_16657_16703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (24))){
var inst_16632 = (state_16653[(7)]);
var inst_16641 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16632);
var state_16653__$1 = state_16653;
var statearr_16658_16704 = state_16653__$1;
(statearr_16658_16704[(2)] = inst_16641);

(statearr_16658_16704[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (4))){
var inst_16584 = (state_16653[(8)]);
var inst_16584__$1 = (state_16653[(2)]);
var inst_16585 = (inst_16584__$1 == null);
var state_16653__$1 = (function (){var statearr_16659 = state_16653;
(statearr_16659[(8)] = inst_16584__$1);

return statearr_16659;
})();
if(cljs.core.truth_(inst_16585)){
var statearr_16660_16705 = state_16653__$1;
(statearr_16660_16705[(1)] = (5));

} else {
var statearr_16661_16706 = state_16653__$1;
(statearr_16661_16706[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (15))){
var inst_16626 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16662_16707 = state_16653__$1;
(statearr_16662_16707[(2)] = inst_16626);

(statearr_16662_16707[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (21))){
var inst_16646 = (state_16653[(2)]);
var state_16653__$1 = (function (){var statearr_16663 = state_16653;
(statearr_16663[(9)] = inst_16646);

return statearr_16663;
})();
var statearr_16664_16708 = state_16653__$1;
(statearr_16664_16708[(2)] = null);

(statearr_16664_16708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (13))){
var inst_16608 = (state_16653[(10)]);
var inst_16610 = cljs.core.chunked_seq_QMARK_(inst_16608);
var state_16653__$1 = state_16653;
if(inst_16610){
var statearr_16665_16709 = state_16653__$1;
(statearr_16665_16709[(1)] = (16));

} else {
var statearr_16666_16710 = state_16653__$1;
(statearr_16666_16710[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (22))){
var inst_16638 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16638)){
var statearr_16667_16711 = state_16653__$1;
(statearr_16667_16711[(1)] = (23));

} else {
var statearr_16668_16712 = state_16653__$1;
(statearr_16668_16712[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (6))){
var inst_16584 = (state_16653[(8)]);
var inst_16632 = (state_16653[(7)]);
var inst_16634 = (state_16653[(11)]);
var inst_16632__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16584) : topic_fn.call(null,inst_16584));
var inst_16633 = cljs.core.deref(mults);
var inst_16634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16633,inst_16632__$1);
var state_16653__$1 = (function (){var statearr_16669 = state_16653;
(statearr_16669[(7)] = inst_16632__$1);

(statearr_16669[(11)] = inst_16634__$1);

return statearr_16669;
})();
if(cljs.core.truth_(inst_16634__$1)){
var statearr_16670_16713 = state_16653__$1;
(statearr_16670_16713[(1)] = (19));

} else {
var statearr_16671_16714 = state_16653__$1;
(statearr_16671_16714[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (25))){
var inst_16643 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16672_16715 = state_16653__$1;
(statearr_16672_16715[(2)] = inst_16643);

(statearr_16672_16715[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (17))){
var inst_16608 = (state_16653[(10)]);
var inst_16617 = cljs.core.first(inst_16608);
var inst_16618 = cljs.core.async.muxch_STAR_(inst_16617);
var inst_16619 = cljs.core.async.close_BANG_(inst_16618);
var inst_16620 = cljs.core.next(inst_16608);
var inst_16594 = inst_16620;
var inst_16595 = null;
var inst_16596 = (0);
var inst_16597 = (0);
var state_16653__$1 = (function (){var statearr_16673 = state_16653;
(statearr_16673[(12)] = inst_16619);

(statearr_16673[(13)] = inst_16594);

(statearr_16673[(14)] = inst_16595);

(statearr_16673[(15)] = inst_16596);

(statearr_16673[(16)] = inst_16597);

return statearr_16673;
})();
var statearr_16674_16716 = state_16653__$1;
(statearr_16674_16716[(2)] = null);

(statearr_16674_16716[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (3))){
var inst_16651 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16653__$1,inst_16651);
} else {
if((state_val_16654 === (12))){
var inst_16628 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16675_16717 = state_16653__$1;
(statearr_16675_16717[(2)] = inst_16628);

(statearr_16675_16717[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (2))){
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16653__$1,(4),ch);
} else {
if((state_val_16654 === (23))){
var state_16653__$1 = state_16653;
var statearr_16676_16718 = state_16653__$1;
(statearr_16676_16718[(2)] = null);

(statearr_16676_16718[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (19))){
var inst_16634 = (state_16653[(11)]);
var inst_16584 = (state_16653[(8)]);
var inst_16636 = cljs.core.async.muxch_STAR_(inst_16634);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16653__$1,(22),inst_16636,inst_16584);
} else {
if((state_val_16654 === (11))){
var inst_16594 = (state_16653[(13)]);
var inst_16608 = (state_16653[(10)]);
var inst_16608__$1 = cljs.core.seq(inst_16594);
var state_16653__$1 = (function (){var statearr_16677 = state_16653;
(statearr_16677[(10)] = inst_16608__$1);

return statearr_16677;
})();
if(inst_16608__$1){
var statearr_16678_16719 = state_16653__$1;
(statearr_16678_16719[(1)] = (13));

} else {
var statearr_16679_16720 = state_16653__$1;
(statearr_16679_16720[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (9))){
var inst_16630 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16680_16721 = state_16653__$1;
(statearr_16680_16721[(2)] = inst_16630);

(statearr_16680_16721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (5))){
var inst_16591 = cljs.core.deref(mults);
var inst_16592 = cljs.core.vals(inst_16591);
var inst_16593 = cljs.core.seq(inst_16592);
var inst_16594 = inst_16593;
var inst_16595 = null;
var inst_16596 = (0);
var inst_16597 = (0);
var state_16653__$1 = (function (){var statearr_16681 = state_16653;
(statearr_16681[(13)] = inst_16594);

(statearr_16681[(14)] = inst_16595);

(statearr_16681[(15)] = inst_16596);

(statearr_16681[(16)] = inst_16597);

return statearr_16681;
})();
var statearr_16682_16722 = state_16653__$1;
(statearr_16682_16722[(2)] = null);

(statearr_16682_16722[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (14))){
var state_16653__$1 = state_16653;
var statearr_16686_16723 = state_16653__$1;
(statearr_16686_16723[(2)] = null);

(statearr_16686_16723[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (16))){
var inst_16608 = (state_16653[(10)]);
var inst_16612 = cljs.core.chunk_first(inst_16608);
var inst_16613 = cljs.core.chunk_rest(inst_16608);
var inst_16614 = cljs.core.count(inst_16612);
var inst_16594 = inst_16613;
var inst_16595 = inst_16612;
var inst_16596 = inst_16614;
var inst_16597 = (0);
var state_16653__$1 = (function (){var statearr_16687 = state_16653;
(statearr_16687[(13)] = inst_16594);

(statearr_16687[(14)] = inst_16595);

(statearr_16687[(15)] = inst_16596);

(statearr_16687[(16)] = inst_16597);

return statearr_16687;
})();
var statearr_16688_16724 = state_16653__$1;
(statearr_16688_16724[(2)] = null);

(statearr_16688_16724[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (10))){
var inst_16595 = (state_16653[(14)]);
var inst_16597 = (state_16653[(16)]);
var inst_16594 = (state_16653[(13)]);
var inst_16596 = (state_16653[(15)]);
var inst_16602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16595,inst_16597);
var inst_16603 = cljs.core.async.muxch_STAR_(inst_16602);
var inst_16604 = cljs.core.async.close_BANG_(inst_16603);
var inst_16605 = (inst_16597 + (1));
var tmp16683 = inst_16595;
var tmp16684 = inst_16594;
var tmp16685 = inst_16596;
var inst_16594__$1 = tmp16684;
var inst_16595__$1 = tmp16683;
var inst_16596__$1 = tmp16685;
var inst_16597__$1 = inst_16605;
var state_16653__$1 = (function (){var statearr_16689 = state_16653;
(statearr_16689[(17)] = inst_16604);

(statearr_16689[(13)] = inst_16594__$1);

(statearr_16689[(14)] = inst_16595__$1);

(statearr_16689[(15)] = inst_16596__$1);

(statearr_16689[(16)] = inst_16597__$1);

return statearr_16689;
})();
var statearr_16690_16725 = state_16653__$1;
(statearr_16690_16725[(2)] = null);

(statearr_16690_16725[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (18))){
var inst_16623 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16691_16726 = state_16653__$1;
(statearr_16691_16726[(2)] = inst_16623);

(statearr_16691_16726[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16654 === (8))){
var inst_16597 = (state_16653[(16)]);
var inst_16596 = (state_16653[(15)]);
var inst_16599 = (inst_16597 < inst_16596);
var inst_16600 = inst_16599;
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16600)){
var statearr_16692_16727 = state_16653__$1;
(statearr_16692_16727[(1)] = (10));

} else {
var statearr_16693_16728 = state_16653__$1;
(statearr_16693_16728[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_16694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16694[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_16694[(1)] = (1));

return statearr_16694;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_16653){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16653);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16695){var ex__15356__auto__ = e16695;
var statearr_16696_16729 = state_16653;
(statearr_16696_16729[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16653[(4)]))){
var statearr_16697_16730 = state_16653;
(statearr_16697_16730[(1)] = cljs.core.first((state_16653[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16731 = state_16653;
state_16653 = G__16731;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16698 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16698[(6)] = c__15427__auto___16700);

return statearr_16698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16733 = arguments.length;
switch (G__16733) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16736 = arguments.length;
switch (G__16736) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16739 = arguments.length;
switch (G__16739) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15427__auto___16817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16782){
var state_val_16783 = (state_16782[(1)]);
if((state_val_16783 === (7))){
var state_16782__$1 = state_16782;
var statearr_16784_16818 = state_16782__$1;
(statearr_16784_16818[(2)] = null);

(statearr_16784_16818[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (1))){
var state_16782__$1 = state_16782;
var statearr_16785_16819 = state_16782__$1;
(statearr_16785_16819[(2)] = null);

(statearr_16785_16819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (4))){
var inst_16743 = (state_16782[(7)]);
var inst_16742 = (state_16782[(8)]);
var inst_16745 = (inst_16743 < inst_16742);
var state_16782__$1 = state_16782;
if(cljs.core.truth_(inst_16745)){
var statearr_16786_16820 = state_16782__$1;
(statearr_16786_16820[(1)] = (6));

} else {
var statearr_16787_16821 = state_16782__$1;
(statearr_16787_16821[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (15))){
var inst_16768 = (state_16782[(9)]);
var inst_16773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16768);
var state_16782__$1 = state_16782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16782__$1,(17),out,inst_16773);
} else {
if((state_val_16783 === (13))){
var inst_16768 = (state_16782[(9)]);
var inst_16768__$1 = (state_16782[(2)]);
var inst_16769 = cljs.core.some(cljs.core.nil_QMARK_,inst_16768__$1);
var state_16782__$1 = (function (){var statearr_16788 = state_16782;
(statearr_16788[(9)] = inst_16768__$1);

return statearr_16788;
})();
if(cljs.core.truth_(inst_16769)){
var statearr_16789_16822 = state_16782__$1;
(statearr_16789_16822[(1)] = (14));

} else {
var statearr_16790_16823 = state_16782__$1;
(statearr_16790_16823[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (6))){
var state_16782__$1 = state_16782;
var statearr_16791_16824 = state_16782__$1;
(statearr_16791_16824[(2)] = null);

(statearr_16791_16824[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (17))){
var inst_16775 = (state_16782[(2)]);
var state_16782__$1 = (function (){var statearr_16793 = state_16782;
(statearr_16793[(10)] = inst_16775);

return statearr_16793;
})();
var statearr_16794_16825 = state_16782__$1;
(statearr_16794_16825[(2)] = null);

(statearr_16794_16825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (3))){
var inst_16780 = (state_16782[(2)]);
var state_16782__$1 = state_16782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16782__$1,inst_16780);
} else {
if((state_val_16783 === (12))){
var _ = (function (){var statearr_16795 = state_16782;
(statearr_16795[(4)] = cljs.core.rest((state_16782[(4)])));

return statearr_16795;
})();
var state_16782__$1 = state_16782;
var ex16792 = (state_16782__$1[(2)]);
var statearr_16796_16826 = state_16782__$1;
(statearr_16796_16826[(5)] = ex16792);


if((ex16792 instanceof Object)){
var statearr_16797_16827 = state_16782__$1;
(statearr_16797_16827[(1)] = (11));

(statearr_16797_16827[(5)] = null);

} else {
throw ex16792;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (2))){
var inst_16741 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16742 = cnt;
var inst_16743 = (0);
var state_16782__$1 = (function (){var statearr_16798 = state_16782;
(statearr_16798[(11)] = inst_16741);

(statearr_16798[(8)] = inst_16742);

(statearr_16798[(7)] = inst_16743);

return statearr_16798;
})();
var statearr_16799_16828 = state_16782__$1;
(statearr_16799_16828[(2)] = null);

(statearr_16799_16828[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (11))){
var inst_16747 = (state_16782[(2)]);
var inst_16748 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16782__$1 = (function (){var statearr_16800 = state_16782;
(statearr_16800[(12)] = inst_16747);

return statearr_16800;
})();
var statearr_16801_16829 = state_16782__$1;
(statearr_16801_16829[(2)] = inst_16748);

(statearr_16801_16829[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (9))){
var inst_16743 = (state_16782[(7)]);
var _ = (function (){var statearr_16802 = state_16782;
(statearr_16802[(4)] = cljs.core.cons((12),(state_16782[(4)])));

return statearr_16802;
})();
var inst_16754 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16743) : chs__$1.call(null,inst_16743));
var inst_16755 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16743) : done.call(null,inst_16743));
var inst_16756 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16754,inst_16755);
var ___$1 = (function (){var statearr_16803 = state_16782;
(statearr_16803[(4)] = cljs.core.rest((state_16782[(4)])));

return statearr_16803;
})();
var state_16782__$1 = state_16782;
var statearr_16804_16830 = state_16782__$1;
(statearr_16804_16830[(2)] = inst_16756);

(statearr_16804_16830[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (5))){
var inst_16766 = (state_16782[(2)]);
var state_16782__$1 = (function (){var statearr_16805 = state_16782;
(statearr_16805[(13)] = inst_16766);

return statearr_16805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16782__$1,(13),dchan);
} else {
if((state_val_16783 === (14))){
var inst_16771 = cljs.core.async.close_BANG_(out);
var state_16782__$1 = state_16782;
var statearr_16806_16831 = state_16782__$1;
(statearr_16806_16831[(2)] = inst_16771);

(statearr_16806_16831[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (16))){
var inst_16778 = (state_16782[(2)]);
var state_16782__$1 = state_16782;
var statearr_16807_16832 = state_16782__$1;
(statearr_16807_16832[(2)] = inst_16778);

(statearr_16807_16832[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (10))){
var inst_16743 = (state_16782[(7)]);
var inst_16759 = (state_16782[(2)]);
var inst_16760 = (inst_16743 + (1));
var inst_16743__$1 = inst_16760;
var state_16782__$1 = (function (){var statearr_16808 = state_16782;
(statearr_16808[(14)] = inst_16759);

(statearr_16808[(7)] = inst_16743__$1);

return statearr_16808;
})();
var statearr_16809_16833 = state_16782__$1;
(statearr_16809_16833[(2)] = null);

(statearr_16809_16833[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16783 === (8))){
var inst_16764 = (state_16782[(2)]);
var state_16782__$1 = state_16782;
var statearr_16810_16834 = state_16782__$1;
(statearr_16810_16834[(2)] = inst_16764);

(statearr_16810_16834[(1)] = (5));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_16811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16811[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_16811[(1)] = (1));

return statearr_16811;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_16782){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16782);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16812){var ex__15356__auto__ = e16812;
var statearr_16813_16835 = state_16782;
(statearr_16813_16835[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16782[(4)]))){
var statearr_16814_16836 = state_16782;
(statearr_16814_16836[(1)] = cljs.core.first((state_16782[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16837 = state_16782;
state_16782 = G__16837;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_16782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_16782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16815 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16815[(6)] = c__15427__auto___16817);

return statearr_16815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16840 = arguments.length;
switch (G__16840) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___16895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16872){
var state_val_16873 = (state_16872[(1)]);
if((state_val_16873 === (7))){
var inst_16851 = (state_16872[(7)]);
var inst_16852 = (state_16872[(8)]);
var inst_16851__$1 = (state_16872[(2)]);
var inst_16852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16851__$1,(0),null);
var inst_16853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16851__$1,(1),null);
var inst_16854 = (inst_16852__$1 == null);
var state_16872__$1 = (function (){var statearr_16874 = state_16872;
(statearr_16874[(7)] = inst_16851__$1);

(statearr_16874[(8)] = inst_16852__$1);

(statearr_16874[(9)] = inst_16853);

return statearr_16874;
})();
if(cljs.core.truth_(inst_16854)){
var statearr_16875_16896 = state_16872__$1;
(statearr_16875_16896[(1)] = (8));

} else {
var statearr_16876_16897 = state_16872__$1;
(statearr_16876_16897[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (1))){
var inst_16841 = cljs.core.vec(chs);
var inst_16842 = inst_16841;
var state_16872__$1 = (function (){var statearr_16877 = state_16872;
(statearr_16877[(10)] = inst_16842);

return statearr_16877;
})();
var statearr_16878_16898 = state_16872__$1;
(statearr_16878_16898[(2)] = null);

(statearr_16878_16898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (4))){
var inst_16842 = (state_16872[(10)]);
var state_16872__$1 = state_16872;
return cljs.core.async.ioc_alts_BANG_(state_16872__$1,(7),inst_16842);
} else {
if((state_val_16873 === (6))){
var inst_16868 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16879_16899 = state_16872__$1;
(statearr_16879_16899[(2)] = inst_16868);

(statearr_16879_16899[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (3))){
var inst_16870 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16872__$1,inst_16870);
} else {
if((state_val_16873 === (2))){
var inst_16842 = (state_16872[(10)]);
var inst_16844 = cljs.core.count(inst_16842);
var inst_16845 = (inst_16844 > (0));
var state_16872__$1 = state_16872;
if(cljs.core.truth_(inst_16845)){
var statearr_16881_16900 = state_16872__$1;
(statearr_16881_16900[(1)] = (4));

} else {
var statearr_16882_16901 = state_16872__$1;
(statearr_16882_16901[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (11))){
var inst_16842 = (state_16872[(10)]);
var inst_16861 = (state_16872[(2)]);
var tmp16880 = inst_16842;
var inst_16842__$1 = tmp16880;
var state_16872__$1 = (function (){var statearr_16883 = state_16872;
(statearr_16883[(11)] = inst_16861);

(statearr_16883[(10)] = inst_16842__$1);

return statearr_16883;
})();
var statearr_16884_16902 = state_16872__$1;
(statearr_16884_16902[(2)] = null);

(statearr_16884_16902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (9))){
var inst_16852 = (state_16872[(8)]);
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16872__$1,(11),out,inst_16852);
} else {
if((state_val_16873 === (5))){
var inst_16866 = cljs.core.async.close_BANG_(out);
var state_16872__$1 = state_16872;
var statearr_16885_16903 = state_16872__$1;
(statearr_16885_16903[(2)] = inst_16866);

(statearr_16885_16903[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (10))){
var inst_16864 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16886_16904 = state_16872__$1;
(statearr_16886_16904[(2)] = inst_16864);

(statearr_16886_16904[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16873 === (8))){
var inst_16842 = (state_16872[(10)]);
var inst_16851 = (state_16872[(7)]);
var inst_16852 = (state_16872[(8)]);
var inst_16853 = (state_16872[(9)]);
var inst_16856 = (function (){var cs = inst_16842;
var vec__16847 = inst_16851;
var v = inst_16852;
var c = inst_16853;
return (function (p1__16838_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16838_SHARP_);
});
})();
var inst_16857 = cljs.core.filterv(inst_16856,inst_16842);
var inst_16842__$1 = inst_16857;
var state_16872__$1 = (function (){var statearr_16887 = state_16872;
(statearr_16887[(10)] = inst_16842__$1);

return statearr_16887;
})();
var statearr_16888_16905 = state_16872__$1;
(statearr_16888_16905[(2)] = null);

(statearr_16888_16905[(1)] = (2));


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
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_16889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16889[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_16889[(1)] = (1));

return statearr_16889;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_16872){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16872);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16890){var ex__15356__auto__ = e16890;
var statearr_16891_16906 = state_16872;
(statearr_16891_16906[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16872[(4)]))){
var statearr_16892_16907 = state_16872;
(statearr_16892_16907[(1)] = cljs.core.first((state_16872[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16908 = state_16872;
state_16872 = G__16908;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_16872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_16872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16893 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16893[(6)] = c__15427__auto___16895);

return statearr_16893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16910 = arguments.length;
switch (G__16910) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___16956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (7))){
var inst_16916 = (state_16934[(7)]);
var inst_16916__$1 = (state_16934[(2)]);
var inst_16917 = (inst_16916__$1 == null);
var inst_16918 = cljs.core.not(inst_16917);
var state_16934__$1 = (function (){var statearr_16936 = state_16934;
(statearr_16936[(7)] = inst_16916__$1);

return statearr_16936;
})();
if(inst_16918){
var statearr_16937_16957 = state_16934__$1;
(statearr_16937_16957[(1)] = (8));

} else {
var statearr_16938_16958 = state_16934__$1;
(statearr_16938_16958[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (1))){
var inst_16911 = (0);
var state_16934__$1 = (function (){var statearr_16939 = state_16934;
(statearr_16939[(8)] = inst_16911);

return statearr_16939;
})();
var statearr_16940_16959 = state_16934__$1;
(statearr_16940_16959[(2)] = null);

(statearr_16940_16959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (4))){
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16934__$1,(7),ch);
} else {
if((state_val_16935 === (6))){
var inst_16929 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16941_16960 = state_16934__$1;
(statearr_16941_16960[(2)] = inst_16929);

(statearr_16941_16960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (3))){
var inst_16931 = (state_16934[(2)]);
var inst_16932 = cljs.core.async.close_BANG_(out);
var state_16934__$1 = (function (){var statearr_16942 = state_16934;
(statearr_16942[(9)] = inst_16931);

return statearr_16942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
if((state_val_16935 === (2))){
var inst_16911 = (state_16934[(8)]);
var inst_16913 = (inst_16911 < n);
var state_16934__$1 = state_16934;
if(cljs.core.truth_(inst_16913)){
var statearr_16943_16961 = state_16934__$1;
(statearr_16943_16961[(1)] = (4));

} else {
var statearr_16944_16962 = state_16934__$1;
(statearr_16944_16962[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (11))){
var inst_16911 = (state_16934[(8)]);
var inst_16921 = (state_16934[(2)]);
var inst_16922 = (inst_16911 + (1));
var inst_16911__$1 = inst_16922;
var state_16934__$1 = (function (){var statearr_16945 = state_16934;
(statearr_16945[(10)] = inst_16921);

(statearr_16945[(8)] = inst_16911__$1);

return statearr_16945;
})();
var statearr_16946_16963 = state_16934__$1;
(statearr_16946_16963[(2)] = null);

(statearr_16946_16963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (9))){
var state_16934__$1 = state_16934;
var statearr_16947_16964 = state_16934__$1;
(statearr_16947_16964[(2)] = null);

(statearr_16947_16964[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (5))){
var state_16934__$1 = state_16934;
var statearr_16948_16965 = state_16934__$1;
(statearr_16948_16965[(2)] = null);

(statearr_16948_16965[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (10))){
var inst_16926 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16949_16966 = state_16934__$1;
(statearr_16949_16966[(2)] = inst_16926);

(statearr_16949_16966[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (8))){
var inst_16916 = (state_16934[(7)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16934__$1,(11),out,inst_16916);
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
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_16950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16950[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_16950[(1)] = (1));

return statearr_16950;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_16934){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e16951){var ex__15356__auto__ = e16951;
var statearr_16952_16967 = state_16934;
(statearr_16952_16967[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_16934[(4)]))){
var statearr_16953_16968 = state_16934;
(statearr_16953_16968[(1)] = cljs.core.first((state_16934[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__16969 = state_16934;
state_16934 = G__16969;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_16954 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_16954[(6)] = c__15427__auto___16956);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16971 = (function (f,ch,meta16972){
this.f = f;
this.ch = ch;
this.meta16972 = meta16972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16973,meta16972__$1){
var self__ = this;
var _16973__$1 = this;
return (new cljs.core.async.t_cljs$core$async16971(self__.f,self__.ch,meta16972__$1));
}));

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16973){
var self__ = this;
var _16973__$1 = this;
return self__.meta16972;
}));

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16974 = (function (f,ch,meta16972,_,fn1,meta16975){
this.f = f;
this.ch = ch;
this.meta16972 = meta16972;
this._ = _;
this.fn1 = fn1;
this.meta16975 = meta16975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16976,meta16975__$1){
var self__ = this;
var _16976__$1 = this;
return (new cljs.core.async.t_cljs$core$async16974(self__.f,self__.ch,self__.meta16972,self__._,self__.fn1,meta16975__$1));
}));

(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16976){
var self__ = this;
var _16976__$1 = this;
return self__.meta16975;
}));

(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16970_SHARP_){
var G__16977 = (((p1__16970_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16970_SHARP_) : self__.f.call(null,p1__16970_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16977) : f1.call(null,G__16977));
});
}));

(cljs.core.async.t_cljs$core$async16974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16972,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16971], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16975], null);
}));

(cljs.core.async.t_cljs$core$async16974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16974");

(cljs.core.async.t_cljs$core$async16974.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16974.
 */
cljs.core.async.__GT_t_cljs$core$async16974 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16974(f__$1,ch__$1,meta16972__$1,___$2,fn1__$1,meta16975){
return (new cljs.core.async.t_cljs$core$async16974(f__$1,ch__$1,meta16972__$1,___$2,fn1__$1,meta16975));
});

}

return (new cljs.core.async.t_cljs$core$async16974(self__.f,self__.ch,self__.meta16972,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16978 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16978) : self__.f.call(null,G__16978));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16972], null);
}));

(cljs.core.async.t_cljs$core$async16971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16971");

(cljs.core.async.t_cljs$core$async16971.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16971.
 */
cljs.core.async.__GT_t_cljs$core$async16971 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16971(f__$1,ch__$1,meta16972){
return (new cljs.core.async.t_cljs$core$async16971(f__$1,ch__$1,meta16972));
});

}

return (new cljs.core.async.t_cljs$core$async16971(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16979 = (function (f,ch,meta16980){
this.f = f;
this.ch = ch;
this.meta16980 = meta16980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16981,meta16980__$1){
var self__ = this;
var _16981__$1 = this;
return (new cljs.core.async.t_cljs$core$async16979(self__.f,self__.ch,meta16980__$1));
}));

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16981){
var self__ = this;
var _16981__$1 = this;
return self__.meta16980;
}));

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16980], null);
}));

(cljs.core.async.t_cljs$core$async16979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16979");

(cljs.core.async.t_cljs$core$async16979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16979.
 */
cljs.core.async.__GT_t_cljs$core$async16979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16979(f__$1,ch__$1,meta16980){
return (new cljs.core.async.t_cljs$core$async16979(f__$1,ch__$1,meta16980));
});

}

return (new cljs.core.async.t_cljs$core$async16979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16982 = (function (p,ch,meta16983){
this.p = p;
this.ch = ch;
this.meta16983 = meta16983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16984,meta16983__$1){
var self__ = this;
var _16984__$1 = this;
return (new cljs.core.async.t_cljs$core$async16982(self__.p,self__.ch,meta16983__$1));
}));

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16984){
var self__ = this;
var _16984__$1 = this;
return self__.meta16983;
}));

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16983], null);
}));

(cljs.core.async.t_cljs$core$async16982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16982");

(cljs.core.async.t_cljs$core$async16982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16982.
 */
cljs.core.async.__GT_t_cljs$core$async16982 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16982(p__$1,ch__$1,meta16983){
return (new cljs.core.async.t_cljs$core$async16982(p__$1,ch__$1,meta16983));
});

}

return (new cljs.core.async.t_cljs$core$async16982(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16986 = arguments.length;
switch (G__16986) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___17027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17007){
var state_val_17008 = (state_17007[(1)]);
if((state_val_17008 === (7))){
var inst_17003 = (state_17007[(2)]);
var state_17007__$1 = state_17007;
var statearr_17009_17028 = state_17007__$1;
(statearr_17009_17028[(2)] = inst_17003);

(statearr_17009_17028[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (1))){
var state_17007__$1 = state_17007;
var statearr_17010_17029 = state_17007__$1;
(statearr_17010_17029[(2)] = null);

(statearr_17010_17029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (4))){
var inst_16989 = (state_17007[(7)]);
var inst_16989__$1 = (state_17007[(2)]);
var inst_16990 = (inst_16989__$1 == null);
var state_17007__$1 = (function (){var statearr_17011 = state_17007;
(statearr_17011[(7)] = inst_16989__$1);

return statearr_17011;
})();
if(cljs.core.truth_(inst_16990)){
var statearr_17012_17030 = state_17007__$1;
(statearr_17012_17030[(1)] = (5));

} else {
var statearr_17013_17031 = state_17007__$1;
(statearr_17013_17031[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (6))){
var inst_16989 = (state_17007[(7)]);
var inst_16994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16989) : p.call(null,inst_16989));
var state_17007__$1 = state_17007;
if(cljs.core.truth_(inst_16994)){
var statearr_17014_17032 = state_17007__$1;
(statearr_17014_17032[(1)] = (8));

} else {
var statearr_17015_17033 = state_17007__$1;
(statearr_17015_17033[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (3))){
var inst_17005 = (state_17007[(2)]);
var state_17007__$1 = state_17007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17007__$1,inst_17005);
} else {
if((state_val_17008 === (2))){
var state_17007__$1 = state_17007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17007__$1,(4),ch);
} else {
if((state_val_17008 === (11))){
var inst_16997 = (state_17007[(2)]);
var state_17007__$1 = state_17007;
var statearr_17016_17034 = state_17007__$1;
(statearr_17016_17034[(2)] = inst_16997);

(statearr_17016_17034[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (9))){
var state_17007__$1 = state_17007;
var statearr_17017_17035 = state_17007__$1;
(statearr_17017_17035[(2)] = null);

(statearr_17017_17035[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (5))){
var inst_16992 = cljs.core.async.close_BANG_(out);
var state_17007__$1 = state_17007;
var statearr_17018_17036 = state_17007__$1;
(statearr_17018_17036[(2)] = inst_16992);

(statearr_17018_17036[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (10))){
var inst_17000 = (state_17007[(2)]);
var state_17007__$1 = (function (){var statearr_17019 = state_17007;
(statearr_17019[(8)] = inst_17000);

return statearr_17019;
})();
var statearr_17020_17037 = state_17007__$1;
(statearr_17020_17037[(2)] = null);

(statearr_17020_17037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17008 === (8))){
var inst_16989 = (state_17007[(7)]);
var state_17007__$1 = state_17007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17007__$1,(11),out,inst_16989);
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
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_17021 = [null,null,null,null,null,null,null,null,null];
(statearr_17021[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_17021[(1)] = (1));

return statearr_17021;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_17007){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17007);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17022){var ex__15356__auto__ = e17022;
var statearr_17023_17038 = state_17007;
(statearr_17023_17038[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17007[(4)]))){
var statearr_17024_17039 = state_17007;
(statearr_17024_17039[(1)] = cljs.core.first((state_17007[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17040 = state_17007;
state_17007 = G__17040;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_17007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_17007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17025 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17025[(6)] = c__15427__auto___17027);

return statearr_17025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17042 = arguments.length;
switch (G__17042) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17105){
var state_val_17106 = (state_17105[(1)]);
if((state_val_17106 === (7))){
var inst_17101 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17107_17146 = state_17105__$1;
(statearr_17107_17146[(2)] = inst_17101);

(statearr_17107_17146[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (20))){
var inst_17071 = (state_17105[(7)]);
var inst_17082 = (state_17105[(2)]);
var inst_17083 = cljs.core.next(inst_17071);
var inst_17057 = inst_17083;
var inst_17058 = null;
var inst_17059 = (0);
var inst_17060 = (0);
var state_17105__$1 = (function (){var statearr_17108 = state_17105;
(statearr_17108[(8)] = inst_17082);

(statearr_17108[(9)] = inst_17057);

(statearr_17108[(10)] = inst_17058);

(statearr_17108[(11)] = inst_17059);

(statearr_17108[(12)] = inst_17060);

return statearr_17108;
})();
var statearr_17109_17147 = state_17105__$1;
(statearr_17109_17147[(2)] = null);

(statearr_17109_17147[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (1))){
var state_17105__$1 = state_17105;
var statearr_17110_17148 = state_17105__$1;
(statearr_17110_17148[(2)] = null);

(statearr_17110_17148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (4))){
var inst_17046 = (state_17105[(13)]);
var inst_17046__$1 = (state_17105[(2)]);
var inst_17047 = (inst_17046__$1 == null);
var state_17105__$1 = (function (){var statearr_17111 = state_17105;
(statearr_17111[(13)] = inst_17046__$1);

return statearr_17111;
})();
if(cljs.core.truth_(inst_17047)){
var statearr_17112_17149 = state_17105__$1;
(statearr_17112_17149[(1)] = (5));

} else {
var statearr_17113_17150 = state_17105__$1;
(statearr_17113_17150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (15))){
var state_17105__$1 = state_17105;
var statearr_17117_17151 = state_17105__$1;
(statearr_17117_17151[(2)] = null);

(statearr_17117_17151[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (21))){
var state_17105__$1 = state_17105;
var statearr_17118_17152 = state_17105__$1;
(statearr_17118_17152[(2)] = null);

(statearr_17118_17152[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (13))){
var inst_17060 = (state_17105[(12)]);
var inst_17057 = (state_17105[(9)]);
var inst_17058 = (state_17105[(10)]);
var inst_17059 = (state_17105[(11)]);
var inst_17067 = (state_17105[(2)]);
var inst_17068 = (inst_17060 + (1));
var tmp17114 = inst_17058;
var tmp17115 = inst_17057;
var tmp17116 = inst_17059;
var inst_17057__$1 = tmp17115;
var inst_17058__$1 = tmp17114;
var inst_17059__$1 = tmp17116;
var inst_17060__$1 = inst_17068;
var state_17105__$1 = (function (){var statearr_17119 = state_17105;
(statearr_17119[(14)] = inst_17067);

(statearr_17119[(9)] = inst_17057__$1);

(statearr_17119[(10)] = inst_17058__$1);

(statearr_17119[(11)] = inst_17059__$1);

(statearr_17119[(12)] = inst_17060__$1);

return statearr_17119;
})();
var statearr_17120_17153 = state_17105__$1;
(statearr_17120_17153[(2)] = null);

(statearr_17120_17153[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (22))){
var state_17105__$1 = state_17105;
var statearr_17121_17154 = state_17105__$1;
(statearr_17121_17154[(2)] = null);

(statearr_17121_17154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (6))){
var inst_17046 = (state_17105[(13)]);
var inst_17055 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17046) : f.call(null,inst_17046));
var inst_17056 = cljs.core.seq(inst_17055);
var inst_17057 = inst_17056;
var inst_17058 = null;
var inst_17059 = (0);
var inst_17060 = (0);
var state_17105__$1 = (function (){var statearr_17122 = state_17105;
(statearr_17122[(9)] = inst_17057);

(statearr_17122[(10)] = inst_17058);

(statearr_17122[(11)] = inst_17059);

(statearr_17122[(12)] = inst_17060);

return statearr_17122;
})();
var statearr_17123_17155 = state_17105__$1;
(statearr_17123_17155[(2)] = null);

(statearr_17123_17155[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (17))){
var inst_17071 = (state_17105[(7)]);
var inst_17075 = cljs.core.chunk_first(inst_17071);
var inst_17076 = cljs.core.chunk_rest(inst_17071);
var inst_17077 = cljs.core.count(inst_17075);
var inst_17057 = inst_17076;
var inst_17058 = inst_17075;
var inst_17059 = inst_17077;
var inst_17060 = (0);
var state_17105__$1 = (function (){var statearr_17124 = state_17105;
(statearr_17124[(9)] = inst_17057);

(statearr_17124[(10)] = inst_17058);

(statearr_17124[(11)] = inst_17059);

(statearr_17124[(12)] = inst_17060);

return statearr_17124;
})();
var statearr_17125_17156 = state_17105__$1;
(statearr_17125_17156[(2)] = null);

(statearr_17125_17156[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (3))){
var inst_17103 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17105__$1,inst_17103);
} else {
if((state_val_17106 === (12))){
var inst_17091 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17126_17157 = state_17105__$1;
(statearr_17126_17157[(2)] = inst_17091);

(statearr_17126_17157[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (2))){
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17105__$1,(4),in$);
} else {
if((state_val_17106 === (23))){
var inst_17099 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17127_17158 = state_17105__$1;
(statearr_17127_17158[(2)] = inst_17099);

(statearr_17127_17158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (19))){
var inst_17086 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17128_17159 = state_17105__$1;
(statearr_17128_17159[(2)] = inst_17086);

(statearr_17128_17159[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (11))){
var inst_17057 = (state_17105[(9)]);
var inst_17071 = (state_17105[(7)]);
var inst_17071__$1 = cljs.core.seq(inst_17057);
var state_17105__$1 = (function (){var statearr_17129 = state_17105;
(statearr_17129[(7)] = inst_17071__$1);

return statearr_17129;
})();
if(inst_17071__$1){
var statearr_17130_17160 = state_17105__$1;
(statearr_17130_17160[(1)] = (14));

} else {
var statearr_17131_17161 = state_17105__$1;
(statearr_17131_17161[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (9))){
var inst_17093 = (state_17105[(2)]);
var inst_17094 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17105__$1 = (function (){var statearr_17132 = state_17105;
(statearr_17132[(15)] = inst_17093);

return statearr_17132;
})();
if(cljs.core.truth_(inst_17094)){
var statearr_17133_17162 = state_17105__$1;
(statearr_17133_17162[(1)] = (21));

} else {
var statearr_17134_17163 = state_17105__$1;
(statearr_17134_17163[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (5))){
var inst_17049 = cljs.core.async.close_BANG_(out);
var state_17105__$1 = state_17105;
var statearr_17135_17164 = state_17105__$1;
(statearr_17135_17164[(2)] = inst_17049);

(statearr_17135_17164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (14))){
var inst_17071 = (state_17105[(7)]);
var inst_17073 = cljs.core.chunked_seq_QMARK_(inst_17071);
var state_17105__$1 = state_17105;
if(inst_17073){
var statearr_17136_17165 = state_17105__$1;
(statearr_17136_17165[(1)] = (17));

} else {
var statearr_17137_17166 = state_17105__$1;
(statearr_17137_17166[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (16))){
var inst_17089 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17138_17167 = state_17105__$1;
(statearr_17138_17167[(2)] = inst_17089);

(statearr_17138_17167[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17106 === (10))){
var inst_17058 = (state_17105[(10)]);
var inst_17060 = (state_17105[(12)]);
var inst_17065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17058,inst_17060);
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17105__$1,(13),out,inst_17065);
} else {
if((state_val_17106 === (18))){
var inst_17071 = (state_17105[(7)]);
var inst_17080 = cljs.core.first(inst_17071);
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17105__$1,(20),out,inst_17080);
} else {
if((state_val_17106 === (8))){
var inst_17060 = (state_17105[(12)]);
var inst_17059 = (state_17105[(11)]);
var inst_17062 = (inst_17060 < inst_17059);
var inst_17063 = inst_17062;
var state_17105__$1 = state_17105;
if(cljs.core.truth_(inst_17063)){
var statearr_17139_17168 = state_17105__$1;
(statearr_17139_17168[(1)] = (10));

} else {
var statearr_17140_17169 = state_17105__$1;
(statearr_17140_17169[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____0 = (function (){
var statearr_17141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17141[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__);

(statearr_17141[(1)] = (1));

return statearr_17141;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____1 = (function (state_17105){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17105);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17142){var ex__15356__auto__ = e17142;
var statearr_17143_17170 = state_17105;
(statearr_17143_17170[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17105[(4)]))){
var statearr_17144_17171 = state_17105;
(statearr_17144_17171[(1)] = cljs.core.first((state_17105[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17172 = state_17105;
state_17105 = G__17172;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__ = function(state_17105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____1.call(this,state_17105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15353__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17145 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17145[(6)] = c__15427__auto__);

return statearr_17145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));

return c__15427__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17174 = arguments.length;
switch (G__17174) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17177 = arguments.length;
switch (G__17177) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17180 = arguments.length;
switch (G__17180) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___17228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17204){
var state_val_17205 = (state_17204[(1)]);
if((state_val_17205 === (7))){
var inst_17199 = (state_17204[(2)]);
var state_17204__$1 = state_17204;
var statearr_17206_17229 = state_17204__$1;
(statearr_17206_17229[(2)] = inst_17199);

(statearr_17206_17229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (1))){
var inst_17181 = null;
var state_17204__$1 = (function (){var statearr_17207 = state_17204;
(statearr_17207[(7)] = inst_17181);

return statearr_17207;
})();
var statearr_17208_17230 = state_17204__$1;
(statearr_17208_17230[(2)] = null);

(statearr_17208_17230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (4))){
var inst_17184 = (state_17204[(8)]);
var inst_17184__$1 = (state_17204[(2)]);
var inst_17185 = (inst_17184__$1 == null);
var inst_17186 = cljs.core.not(inst_17185);
var state_17204__$1 = (function (){var statearr_17209 = state_17204;
(statearr_17209[(8)] = inst_17184__$1);

return statearr_17209;
})();
if(inst_17186){
var statearr_17210_17231 = state_17204__$1;
(statearr_17210_17231[(1)] = (5));

} else {
var statearr_17211_17232 = state_17204__$1;
(statearr_17211_17232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (6))){
var state_17204__$1 = state_17204;
var statearr_17212_17233 = state_17204__$1;
(statearr_17212_17233[(2)] = null);

(statearr_17212_17233[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (3))){
var inst_17201 = (state_17204[(2)]);
var inst_17202 = cljs.core.async.close_BANG_(out);
var state_17204__$1 = (function (){var statearr_17213 = state_17204;
(statearr_17213[(9)] = inst_17201);

return statearr_17213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17204__$1,inst_17202);
} else {
if((state_val_17205 === (2))){
var state_17204__$1 = state_17204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17204__$1,(4),ch);
} else {
if((state_val_17205 === (11))){
var inst_17184 = (state_17204[(8)]);
var inst_17193 = (state_17204[(2)]);
var inst_17181 = inst_17184;
var state_17204__$1 = (function (){var statearr_17214 = state_17204;
(statearr_17214[(10)] = inst_17193);

(statearr_17214[(7)] = inst_17181);

return statearr_17214;
})();
var statearr_17215_17234 = state_17204__$1;
(statearr_17215_17234[(2)] = null);

(statearr_17215_17234[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (9))){
var inst_17184 = (state_17204[(8)]);
var state_17204__$1 = state_17204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17204__$1,(11),out,inst_17184);
} else {
if((state_val_17205 === (5))){
var inst_17184 = (state_17204[(8)]);
var inst_17181 = (state_17204[(7)]);
var inst_17188 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17184,inst_17181);
var state_17204__$1 = state_17204;
if(inst_17188){
var statearr_17217_17235 = state_17204__$1;
(statearr_17217_17235[(1)] = (8));

} else {
var statearr_17218_17236 = state_17204__$1;
(statearr_17218_17236[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (10))){
var inst_17196 = (state_17204[(2)]);
var state_17204__$1 = state_17204;
var statearr_17219_17237 = state_17204__$1;
(statearr_17219_17237[(2)] = inst_17196);

(statearr_17219_17237[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17205 === (8))){
var inst_17181 = (state_17204[(7)]);
var tmp17216 = inst_17181;
var inst_17181__$1 = tmp17216;
var state_17204__$1 = (function (){var statearr_17220 = state_17204;
(statearr_17220[(7)] = inst_17181__$1);

return statearr_17220;
})();
var statearr_17221_17238 = state_17204__$1;
(statearr_17221_17238[(2)] = null);

(statearr_17221_17238[(1)] = (2));


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
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_17222 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17222[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_17222[(1)] = (1));

return statearr_17222;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_17204){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17204);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17223){var ex__15356__auto__ = e17223;
var statearr_17224_17239 = state_17204;
(statearr_17224_17239[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17204[(4)]))){
var statearr_17225_17240 = state_17204;
(statearr_17225_17240[(1)] = cljs.core.first((state_17204[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17241 = state_17204;
state_17204 = G__17241;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_17204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_17204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17226 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17226[(6)] = c__15427__auto___17228);

return statearr_17226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17243 = arguments.length;
switch (G__17243) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___17310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17281){
var state_val_17282 = (state_17281[(1)]);
if((state_val_17282 === (7))){
var inst_17277 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17283_17311 = state_17281__$1;
(statearr_17283_17311[(2)] = inst_17277);

(statearr_17283_17311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (1))){
var inst_17244 = (new Array(n));
var inst_17245 = inst_17244;
var inst_17246 = (0);
var state_17281__$1 = (function (){var statearr_17284 = state_17281;
(statearr_17284[(7)] = inst_17245);

(statearr_17284[(8)] = inst_17246);

return statearr_17284;
})();
var statearr_17285_17312 = state_17281__$1;
(statearr_17285_17312[(2)] = null);

(statearr_17285_17312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (4))){
var inst_17249 = (state_17281[(9)]);
var inst_17249__$1 = (state_17281[(2)]);
var inst_17250 = (inst_17249__$1 == null);
var inst_17251 = cljs.core.not(inst_17250);
var state_17281__$1 = (function (){var statearr_17286 = state_17281;
(statearr_17286[(9)] = inst_17249__$1);

return statearr_17286;
})();
if(inst_17251){
var statearr_17287_17313 = state_17281__$1;
(statearr_17287_17313[(1)] = (5));

} else {
var statearr_17288_17314 = state_17281__$1;
(statearr_17288_17314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (15))){
var inst_17271 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17289_17315 = state_17281__$1;
(statearr_17289_17315[(2)] = inst_17271);

(statearr_17289_17315[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (13))){
var state_17281__$1 = state_17281;
var statearr_17290_17316 = state_17281__$1;
(statearr_17290_17316[(2)] = null);

(statearr_17290_17316[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (6))){
var inst_17246 = (state_17281[(8)]);
var inst_17267 = (inst_17246 > (0));
var state_17281__$1 = state_17281;
if(cljs.core.truth_(inst_17267)){
var statearr_17291_17317 = state_17281__$1;
(statearr_17291_17317[(1)] = (12));

} else {
var statearr_17292_17318 = state_17281__$1;
(statearr_17292_17318[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (3))){
var inst_17279 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17281__$1,inst_17279);
} else {
if((state_val_17282 === (12))){
var inst_17245 = (state_17281[(7)]);
var inst_17269 = cljs.core.vec(inst_17245);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(15),out,inst_17269);
} else {
if((state_val_17282 === (2))){
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17281__$1,(4),ch);
} else {
if((state_val_17282 === (11))){
var inst_17261 = (state_17281[(2)]);
var inst_17262 = (new Array(n));
var inst_17245 = inst_17262;
var inst_17246 = (0);
var state_17281__$1 = (function (){var statearr_17293 = state_17281;
(statearr_17293[(10)] = inst_17261);

(statearr_17293[(7)] = inst_17245);

(statearr_17293[(8)] = inst_17246);

return statearr_17293;
})();
var statearr_17294_17319 = state_17281__$1;
(statearr_17294_17319[(2)] = null);

(statearr_17294_17319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (9))){
var inst_17245 = (state_17281[(7)]);
var inst_17259 = cljs.core.vec(inst_17245);
var state_17281__$1 = state_17281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17281__$1,(11),out,inst_17259);
} else {
if((state_val_17282 === (5))){
var inst_17245 = (state_17281[(7)]);
var inst_17246 = (state_17281[(8)]);
var inst_17249 = (state_17281[(9)]);
var inst_17254 = (state_17281[(11)]);
var inst_17253 = (inst_17245[inst_17246] = inst_17249);
var inst_17254__$1 = (inst_17246 + (1));
var inst_17255 = (inst_17254__$1 < n);
var state_17281__$1 = (function (){var statearr_17295 = state_17281;
(statearr_17295[(12)] = inst_17253);

(statearr_17295[(11)] = inst_17254__$1);

return statearr_17295;
})();
if(cljs.core.truth_(inst_17255)){
var statearr_17296_17320 = state_17281__$1;
(statearr_17296_17320[(1)] = (8));

} else {
var statearr_17297_17321 = state_17281__$1;
(statearr_17297_17321[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (14))){
var inst_17274 = (state_17281[(2)]);
var inst_17275 = cljs.core.async.close_BANG_(out);
var state_17281__$1 = (function (){var statearr_17299 = state_17281;
(statearr_17299[(13)] = inst_17274);

return statearr_17299;
})();
var statearr_17300_17322 = state_17281__$1;
(statearr_17300_17322[(2)] = inst_17275);

(statearr_17300_17322[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (10))){
var inst_17265 = (state_17281[(2)]);
var state_17281__$1 = state_17281;
var statearr_17301_17323 = state_17281__$1;
(statearr_17301_17323[(2)] = inst_17265);

(statearr_17301_17323[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17282 === (8))){
var inst_17245 = (state_17281[(7)]);
var inst_17254 = (state_17281[(11)]);
var tmp17298 = inst_17245;
var inst_17245__$1 = tmp17298;
var inst_17246 = inst_17254;
var state_17281__$1 = (function (){var statearr_17302 = state_17281;
(statearr_17302[(7)] = inst_17245__$1);

(statearr_17302[(8)] = inst_17246);

return statearr_17302;
})();
var statearr_17303_17324 = state_17281__$1;
(statearr_17303_17324[(2)] = null);

(statearr_17303_17324[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_17304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17304[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_17304[(1)] = (1));

return statearr_17304;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_17281){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17281);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17305){var ex__15356__auto__ = e17305;
var statearr_17306_17325 = state_17281;
(statearr_17306_17325[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17281[(4)]))){
var statearr_17307_17326 = state_17281;
(statearr_17307_17326[(1)] = cljs.core.first((state_17281[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17327 = state_17281;
state_17281 = G__17327;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_17281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_17281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17308 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17308[(6)] = c__15427__auto___17310);

return statearr_17308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17329 = arguments.length;
switch (G__17329) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15427__auto___17400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15428__auto__ = (function (){var switch__15352__auto__ = (function (state_17371){
var state_val_17372 = (state_17371[(1)]);
if((state_val_17372 === (7))){
var inst_17367 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
var statearr_17373_17401 = state_17371__$1;
(statearr_17373_17401[(2)] = inst_17367);

(statearr_17373_17401[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (1))){
var inst_17330 = [];
var inst_17331 = inst_17330;
var inst_17332 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17371__$1 = (function (){var statearr_17374 = state_17371;
(statearr_17374[(7)] = inst_17331);

(statearr_17374[(8)] = inst_17332);

return statearr_17374;
})();
var statearr_17375_17402 = state_17371__$1;
(statearr_17375_17402[(2)] = null);

(statearr_17375_17402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (4))){
var inst_17335 = (state_17371[(9)]);
var inst_17335__$1 = (state_17371[(2)]);
var inst_17336 = (inst_17335__$1 == null);
var inst_17337 = cljs.core.not(inst_17336);
var state_17371__$1 = (function (){var statearr_17376 = state_17371;
(statearr_17376[(9)] = inst_17335__$1);

return statearr_17376;
})();
if(inst_17337){
var statearr_17377_17403 = state_17371__$1;
(statearr_17377_17403[(1)] = (5));

} else {
var statearr_17378_17404 = state_17371__$1;
(statearr_17378_17404[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (15))){
var inst_17361 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
var statearr_17379_17405 = state_17371__$1;
(statearr_17379_17405[(2)] = inst_17361);

(statearr_17379_17405[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (13))){
var state_17371__$1 = state_17371;
var statearr_17380_17406 = state_17371__$1;
(statearr_17380_17406[(2)] = null);

(statearr_17380_17406[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (6))){
var inst_17331 = (state_17371[(7)]);
var inst_17356 = inst_17331.length;
var inst_17357 = (inst_17356 > (0));
var state_17371__$1 = state_17371;
if(cljs.core.truth_(inst_17357)){
var statearr_17381_17407 = state_17371__$1;
(statearr_17381_17407[(1)] = (12));

} else {
var statearr_17382_17408 = state_17371__$1;
(statearr_17382_17408[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (3))){
var inst_17369 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17371__$1,inst_17369);
} else {
if((state_val_17372 === (12))){
var inst_17331 = (state_17371[(7)]);
var inst_17359 = cljs.core.vec(inst_17331);
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17371__$1,(15),out,inst_17359);
} else {
if((state_val_17372 === (2))){
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17371__$1,(4),ch);
} else {
if((state_val_17372 === (11))){
var inst_17335 = (state_17371[(9)]);
var inst_17339 = (state_17371[(10)]);
var inst_17349 = (state_17371[(2)]);
var inst_17350 = [];
var inst_17351 = inst_17350.push(inst_17335);
var inst_17331 = inst_17350;
var inst_17332 = inst_17339;
var state_17371__$1 = (function (){var statearr_17383 = state_17371;
(statearr_17383[(11)] = inst_17349);

(statearr_17383[(12)] = inst_17351);

(statearr_17383[(7)] = inst_17331);

(statearr_17383[(8)] = inst_17332);

return statearr_17383;
})();
var statearr_17384_17409 = state_17371__$1;
(statearr_17384_17409[(2)] = null);

(statearr_17384_17409[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (9))){
var inst_17331 = (state_17371[(7)]);
var inst_17347 = cljs.core.vec(inst_17331);
var state_17371__$1 = state_17371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17371__$1,(11),out,inst_17347);
} else {
if((state_val_17372 === (5))){
var inst_17335 = (state_17371[(9)]);
var inst_17339 = (state_17371[(10)]);
var inst_17332 = (state_17371[(8)]);
var inst_17339__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17335) : f.call(null,inst_17335));
var inst_17340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17339__$1,inst_17332);
var inst_17341 = cljs.core.keyword_identical_QMARK_(inst_17332,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17342 = ((inst_17340) || (inst_17341));
var state_17371__$1 = (function (){var statearr_17385 = state_17371;
(statearr_17385[(10)] = inst_17339__$1);

return statearr_17385;
})();
if(cljs.core.truth_(inst_17342)){
var statearr_17386_17410 = state_17371__$1;
(statearr_17386_17410[(1)] = (8));

} else {
var statearr_17387_17411 = state_17371__$1;
(statearr_17387_17411[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (14))){
var inst_17364 = (state_17371[(2)]);
var inst_17365 = cljs.core.async.close_BANG_(out);
var state_17371__$1 = (function (){var statearr_17389 = state_17371;
(statearr_17389[(13)] = inst_17364);

return statearr_17389;
})();
var statearr_17390_17412 = state_17371__$1;
(statearr_17390_17412[(2)] = inst_17365);

(statearr_17390_17412[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (10))){
var inst_17354 = (state_17371[(2)]);
var state_17371__$1 = state_17371;
var statearr_17391_17413 = state_17371__$1;
(statearr_17391_17413[(2)] = inst_17354);

(statearr_17391_17413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17372 === (8))){
var inst_17331 = (state_17371[(7)]);
var inst_17335 = (state_17371[(9)]);
var inst_17339 = (state_17371[(10)]);
var inst_17344 = inst_17331.push(inst_17335);
var tmp17388 = inst_17331;
var inst_17331__$1 = tmp17388;
var inst_17332 = inst_17339;
var state_17371__$1 = (function (){var statearr_17392 = state_17371;
(statearr_17392[(14)] = inst_17344);

(statearr_17392[(7)] = inst_17331__$1);

(statearr_17392[(8)] = inst_17332);

return statearr_17392;
})();
var statearr_17393_17414 = state_17371__$1;
(statearr_17393_17414[(2)] = null);

(statearr_17393_17414[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15353__auto__ = null;
var cljs$core$async$state_machine__15353__auto____0 = (function (){
var statearr_17394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17394[(0)] = cljs$core$async$state_machine__15353__auto__);

(statearr_17394[(1)] = (1));

return statearr_17394;
});
var cljs$core$async$state_machine__15353__auto____1 = (function (state_17371){
while(true){
var ret_value__15354__auto__ = (function (){try{while(true){
var result__15355__auto__ = switch__15352__auto__(state_17371);
if(cljs.core.keyword_identical_QMARK_(result__15355__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15355__auto__;
}
break;
}
}catch (e17395){var ex__15356__auto__ = e17395;
var statearr_17396_17415 = state_17371;
(statearr_17396_17415[(2)] = ex__15356__auto__);


if(cljs.core.seq((state_17371[(4)]))){
var statearr_17397_17416 = state_17371;
(statearr_17397_17416[(1)] = cljs.core.first((state_17371[(4)])));

} else {
throw ex__15356__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15354__auto__,cljs.core.cst$kw$recur)){
var G__17417 = state_17371;
state_17371 = G__17417;
continue;
} else {
return ret_value__15354__auto__;
}
break;
}
});
cljs$core$async$state_machine__15353__auto__ = function(state_17371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15353__auto____1.call(this,state_17371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15353__auto____0;
cljs$core$async$state_machine__15353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15353__auto____1;
return cljs$core$async$state_machine__15353__auto__;
})()
})();
var state__15429__auto__ = (function (){var statearr_17398 = (f__15428__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15428__auto__.cljs$core$IFn$_invoke$arity$0() : f__15428__auto__.call(null));
(statearr_17398[(6)] = c__15427__auto___17400);

return statearr_17398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15429__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

