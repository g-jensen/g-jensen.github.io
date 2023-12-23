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
var G__18516 = arguments.length;
switch (G__18516) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18517 = (function (f,blockable,meta18518){
this.f = f;
this.blockable = blockable;
this.meta18518 = meta18518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18519,meta18518__$1){
var self__ = this;
var _18519__$1 = this;
return (new cljs.core.async.t_cljs$core$async18517(self__.f,self__.blockable,meta18518__$1));
}));

(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18519){
var self__ = this;
var _18519__$1 = this;
return self__.meta18518;
}));

(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta18518], null);
}));

(cljs.core.async.t_cljs$core$async18517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18517");

(cljs.core.async.t_cljs$core$async18517.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18517.
 */
cljs.core.async.__GT_t_cljs$core$async18517 = (function cljs$core$async$__GT_t_cljs$core$async18517(f__$1,blockable__$1,meta18518){
return (new cljs.core.async.t_cljs$core$async18517(f__$1,blockable__$1,meta18518));
});

}

return (new cljs.core.async.t_cljs$core$async18517(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18523 = arguments.length;
switch (G__18523) {
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
var G__18526 = arguments.length;
switch (G__18526) {
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
var G__18529 = arguments.length;
switch (G__18529) {
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
var val_18531 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18531) : fn1.call(null,val_18531));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18531) : fn1.call(null,val_18531));
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
var G__18533 = arguments.length;
switch (G__18533) {
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
var n__4613__auto___18535 = n;
var x_18536 = (0);
while(true){
if((x_18536 < n__4613__auto___18535)){
(a[x_18536] = x_18536);

var G__18537 = (x_18536 + (1));
x_18536 = G__18537;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18538 = (function (flag,meta18539){
this.flag = flag;
this.meta18539 = meta18539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18540,meta18539__$1){
var self__ = this;
var _18540__$1 = this;
return (new cljs.core.async.t_cljs$core$async18538(self__.flag,meta18539__$1));
}));

(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18540){
var self__ = this;
var _18540__$1 = this;
return self__.meta18539;
}));

(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18539], null);
}));

(cljs.core.async.t_cljs$core$async18538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18538");

(cljs.core.async.t_cljs$core$async18538.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18538.
 */
cljs.core.async.__GT_t_cljs$core$async18538 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18538(flag__$1,meta18539){
return (new cljs.core.async.t_cljs$core$async18538(flag__$1,meta18539));
});

}

return (new cljs.core.async.t_cljs$core$async18538(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18541 = (function (flag,cb,meta18542){
this.flag = flag;
this.cb = cb;
this.meta18542 = meta18542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18543,meta18542__$1){
var self__ = this;
var _18543__$1 = this;
return (new cljs.core.async.t_cljs$core$async18541(self__.flag,self__.cb,meta18542__$1));
}));

(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18543){
var self__ = this;
var _18543__$1 = this;
return self__.meta18542;
}));

(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18542], null);
}));

(cljs.core.async.t_cljs$core$async18541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18541");

(cljs.core.async.t_cljs$core$async18541.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18541.
 */
cljs.core.async.__GT_t_cljs$core$async18541 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18541(flag__$1,cb__$1,meta18542){
return (new cljs.core.async.t_cljs$core$async18541(flag__$1,cb__$1,meta18542));
});

}

return (new cljs.core.async.t_cljs$core$async18541(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18544_SHARP_){
var G__18546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18544_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18546) : fret.call(null,G__18546));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__18545_SHARP_){
var G__18547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18545_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18547) : fret.call(null,G__18547));
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
var G__18548 = (i + (1));
i = G__18548;
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
var len__4736__auto___18554 = arguments.length;
var i__4737__auto___18555 = (0);
while(true){
if((i__4737__auto___18555 < len__4736__auto___18554)){
args__4742__auto__.push((arguments[i__4737__auto___18555]));

var G__18556 = (i__4737__auto___18555 + (1));
i__4737__auto___18555 = G__18556;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18551){
var map__18552 = p__18551;
var map__18552__$1 = (((((!((map__18552 == null))))?(((((map__18552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18552):map__18552);
var opts = map__18552__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18549){
var G__18550 = cljs.core.first(seq18549);
var seq18549__$1 = cljs.core.next(seq18549);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18550,seq18549__$1);
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
var G__18558 = arguments.length;
switch (G__18558) {
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
var c__16522__auto___18605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18582){
var state_val_18583 = (state_18582[(1)]);
if((state_val_18583 === (7))){
var inst_18578 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
var statearr_18584_18606 = state_18582__$1;
(statearr_18584_18606[(2)] = inst_18578);

(statearr_18584_18606[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (1))){
var state_18582__$1 = state_18582;
var statearr_18585_18607 = state_18582__$1;
(statearr_18585_18607[(2)] = null);

(statearr_18585_18607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (4))){
var inst_18561 = (state_18582[(7)]);
var inst_18561__$1 = (state_18582[(2)]);
var inst_18562 = (inst_18561__$1 == null);
var state_18582__$1 = (function (){var statearr_18586 = state_18582;
(statearr_18586[(7)] = inst_18561__$1);

return statearr_18586;
})();
if(cljs.core.truth_(inst_18562)){
var statearr_18587_18608 = state_18582__$1;
(statearr_18587_18608[(1)] = (5));

} else {
var statearr_18588_18609 = state_18582__$1;
(statearr_18588_18609[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (13))){
var state_18582__$1 = state_18582;
var statearr_18589_18610 = state_18582__$1;
(statearr_18589_18610[(2)] = null);

(statearr_18589_18610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (6))){
var inst_18561 = (state_18582[(7)]);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18582__$1,(11),to,inst_18561);
} else {
if((state_val_18583 === (3))){
var inst_18580 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18582__$1,inst_18580);
} else {
if((state_val_18583 === (12))){
var state_18582__$1 = state_18582;
var statearr_18590_18611 = state_18582__$1;
(statearr_18590_18611[(2)] = null);

(statearr_18590_18611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (2))){
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18582__$1,(4),from);
} else {
if((state_val_18583 === (11))){
var inst_18571 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
if(cljs.core.truth_(inst_18571)){
var statearr_18591_18612 = state_18582__$1;
(statearr_18591_18612[(1)] = (12));

} else {
var statearr_18592_18613 = state_18582__$1;
(statearr_18592_18613[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (9))){
var state_18582__$1 = state_18582;
var statearr_18593_18614 = state_18582__$1;
(statearr_18593_18614[(2)] = null);

(statearr_18593_18614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (5))){
var state_18582__$1 = state_18582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18594_18615 = state_18582__$1;
(statearr_18594_18615[(1)] = (8));

} else {
var statearr_18595_18616 = state_18582__$1;
(statearr_18595_18616[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (14))){
var inst_18576 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
var statearr_18596_18617 = state_18582__$1;
(statearr_18596_18617[(2)] = inst_18576);

(statearr_18596_18617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (10))){
var inst_18568 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
var statearr_18597_18618 = state_18582__$1;
(statearr_18597_18618[(2)] = inst_18568);

(statearr_18597_18618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (8))){
var inst_18565 = cljs.core.async.close_BANG_(to);
var state_18582__$1 = state_18582;
var statearr_18598_18619 = state_18582__$1;
(statearr_18598_18619[(2)] = inst_18565);

(statearr_18598_18619[(1)] = (10));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_18599 = [null,null,null,null,null,null,null,null];
(statearr_18599[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_18599[(1)] = (1));

return statearr_18599;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_18582){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18582);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18600){var ex__16399__auto__ = e18600;
var statearr_18601_18620 = state_18582;
(statearr_18601_18620[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18582[(4)]))){
var statearr_18602_18621 = state_18582;
(statearr_18602_18621[(1)] = cljs.core.first((state_18582[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18622 = state_18582;
state_18582 = G__18622;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_18582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_18582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18603 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18603[(6)] = c__16522__auto___18605);

return statearr_18603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var process = (function (p__18623){
var vec__18624 = p__18623;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(1),null);
var job = vec__18624;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16522__auto___18800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18631){
var state_val_18632 = (state_18631[(1)]);
if((state_val_18632 === (1))){
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18631__$1,(2),res,v);
} else {
if((state_val_18632 === (2))){
var inst_18628 = (state_18631[(2)]);
var inst_18629 = cljs.core.async.close_BANG_(res);
var state_18631__$1 = (function (){var statearr_18633 = state_18631;
(statearr_18633[(7)] = inst_18628);

return statearr_18633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18631__$1,inst_18629);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_18634 = [null,null,null,null,null,null,null,null];
(statearr_18634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__);

(statearr_18634[(1)] = (1));

return statearr_18634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1 = (function (state_18631){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18631);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18635){var ex__16399__auto__ = e18635;
var statearr_18636_18801 = state_18631;
(statearr_18636_18801[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18631[(4)]))){
var statearr_18637_18802 = state_18631;
(statearr_18637_18802[(1)] = cljs.core.first((state_18631[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18803 = state_18631;
state_18631 = G__18803;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = function(state_18631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1.call(this,state_18631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18638 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18638[(6)] = c__16522__auto___18800);

return statearr_18638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18639){
var vec__18640 = p__18639;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(1),null);
var job = vec__18640;
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
var n__4613__auto___18804 = n;
var __18805 = (0);
while(true){
if((__18805 < n__4613__auto___18804)){
var G__18643_18806 = type;
var G__18643_18807__$1 = (((G__18643_18806 instanceof cljs.core.Keyword))?G__18643_18806.fqn:null);
switch (G__18643_18807__$1) {
case "compute":
var c__16522__auto___18809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18805,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = ((function (__18805,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function (state_18656){
var state_val_18657 = (state_18656[(1)]);
if((state_val_18657 === (1))){
var state_18656__$1 = state_18656;
var statearr_18658_18810 = state_18656__$1;
(statearr_18658_18810[(2)] = null);

(statearr_18658_18810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18657 === (2))){
var state_18656__$1 = state_18656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18656__$1,(4),jobs);
} else {
if((state_val_18657 === (3))){
var inst_18654 = (state_18656[(2)]);
var state_18656__$1 = state_18656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18656__$1,inst_18654);
} else {
if((state_val_18657 === (4))){
var inst_18646 = (state_18656[(2)]);
var inst_18647 = process(inst_18646);
var state_18656__$1 = state_18656;
if(cljs.core.truth_(inst_18647)){
var statearr_18659_18811 = state_18656__$1;
(statearr_18659_18811[(1)] = (5));

} else {
var statearr_18660_18812 = state_18656__$1;
(statearr_18660_18812[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18657 === (5))){
var state_18656__$1 = state_18656;
var statearr_18661_18813 = state_18656__$1;
(statearr_18661_18813[(2)] = null);

(statearr_18661_18813[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18657 === (6))){
var state_18656__$1 = state_18656;
var statearr_18662_18814 = state_18656__$1;
(statearr_18662_18814[(2)] = null);

(statearr_18662_18814[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18657 === (7))){
var inst_18652 = (state_18656[(2)]);
var state_18656__$1 = state_18656;
var statearr_18663_18815 = state_18656__$1;
(statearr_18663_18815[(2)] = inst_18652);

(statearr_18663_18815[(1)] = (3));


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
});})(__18805,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
;
return ((function (__18805,switch__16395__auto__,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_18664 = [null,null,null,null,null,null,null];
(statearr_18664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__);

(statearr_18664[(1)] = (1));

return statearr_18664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1 = (function (state_18656){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18656);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18665){var ex__16399__auto__ = e18665;
var statearr_18666_18816 = state_18656;
(statearr_18666_18816[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18656[(4)]))){
var statearr_18667_18817 = state_18656;
(statearr_18667_18817[(1)] = cljs.core.first((state_18656[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18818 = state_18656;
state_18656 = G__18818;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = function(state_18656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1.call(this,state_18656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__;
})()
;})(__18805,switch__16395__auto__,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
})();
var state__16524__auto__ = (function (){var statearr_18668 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18668[(6)] = c__16522__auto___18809);

return statearr_18668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
});})(__18805,c__16522__auto___18809,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
);


break;
case "async":
var c__16522__auto___18819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18805,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = ((function (__18805,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function (state_18681){
var state_val_18682 = (state_18681[(1)]);
if((state_val_18682 === (1))){
var state_18681__$1 = state_18681;
var statearr_18683_18820 = state_18681__$1;
(statearr_18683_18820[(2)] = null);

(statearr_18683_18820[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18682 === (2))){
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18681__$1,(4),jobs);
} else {
if((state_val_18682 === (3))){
var inst_18679 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18681__$1,inst_18679);
} else {
if((state_val_18682 === (4))){
var inst_18671 = (state_18681[(2)]);
var inst_18672 = async(inst_18671);
var state_18681__$1 = state_18681;
if(cljs.core.truth_(inst_18672)){
var statearr_18684_18821 = state_18681__$1;
(statearr_18684_18821[(1)] = (5));

} else {
var statearr_18685_18822 = state_18681__$1;
(statearr_18685_18822[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18682 === (5))){
var state_18681__$1 = state_18681;
var statearr_18686_18823 = state_18681__$1;
(statearr_18686_18823[(2)] = null);

(statearr_18686_18823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18682 === (6))){
var state_18681__$1 = state_18681;
var statearr_18687_18824 = state_18681__$1;
(statearr_18687_18824[(2)] = null);

(statearr_18687_18824[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18682 === (7))){
var inst_18677 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18688_18825 = state_18681__$1;
(statearr_18688_18825[(2)] = inst_18677);

(statearr_18688_18825[(1)] = (3));


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
});})(__18805,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
;
return ((function (__18805,switch__16395__auto__,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_18689 = [null,null,null,null,null,null,null];
(statearr_18689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__);

(statearr_18689[(1)] = (1));

return statearr_18689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1 = (function (state_18681){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18681);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18690){var ex__16399__auto__ = e18690;
var statearr_18691_18826 = state_18681;
(statearr_18691_18826[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18681[(4)]))){
var statearr_18692_18827 = state_18681;
(statearr_18692_18827[(1)] = cljs.core.first((state_18681[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18828 = state_18681;
state_18681 = G__18828;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = function(state_18681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1.call(this,state_18681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__;
})()
;})(__18805,switch__16395__auto__,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
})();
var state__16524__auto__ = (function (){var statearr_18693 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18693[(6)] = c__16522__auto___18819);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
});})(__18805,c__16522__auto___18819,G__18643_18806,G__18643_18807__$1,n__4613__auto___18804,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18643_18807__$1)].join('')));

}

var G__18829 = (__18805 + (1));
__18805 = G__18829;
continue;
} else {
}
break;
}

var c__16522__auto___18830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18715){
var state_val_18716 = (state_18715[(1)]);
if((state_val_18716 === (7))){
var inst_18711 = (state_18715[(2)]);
var state_18715__$1 = state_18715;
var statearr_18717_18831 = state_18715__$1;
(statearr_18717_18831[(2)] = inst_18711);

(statearr_18717_18831[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18716 === (1))){
var state_18715__$1 = state_18715;
var statearr_18718_18832 = state_18715__$1;
(statearr_18718_18832[(2)] = null);

(statearr_18718_18832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18716 === (4))){
var inst_18696 = (state_18715[(7)]);
var inst_18696__$1 = (state_18715[(2)]);
var inst_18697 = (inst_18696__$1 == null);
var state_18715__$1 = (function (){var statearr_18719 = state_18715;
(statearr_18719[(7)] = inst_18696__$1);

return statearr_18719;
})();
if(cljs.core.truth_(inst_18697)){
var statearr_18720_18833 = state_18715__$1;
(statearr_18720_18833[(1)] = (5));

} else {
var statearr_18721_18834 = state_18715__$1;
(statearr_18721_18834[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18716 === (6))){
var inst_18696 = (state_18715[(7)]);
var inst_18701 = (state_18715[(8)]);
var inst_18701__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18703 = [inst_18696,inst_18701__$1];
var inst_18704 = (new cljs.core.PersistentVector(null,2,(5),inst_18702,inst_18703,null));
var state_18715__$1 = (function (){var statearr_18722 = state_18715;
(statearr_18722[(8)] = inst_18701__$1);

return statearr_18722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18715__$1,(8),jobs,inst_18704);
} else {
if((state_val_18716 === (3))){
var inst_18713 = (state_18715[(2)]);
var state_18715__$1 = state_18715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18715__$1,inst_18713);
} else {
if((state_val_18716 === (2))){
var state_18715__$1 = state_18715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18715__$1,(4),from);
} else {
if((state_val_18716 === (9))){
var inst_18708 = (state_18715[(2)]);
var state_18715__$1 = (function (){var statearr_18723 = state_18715;
(statearr_18723[(9)] = inst_18708);

return statearr_18723;
})();
var statearr_18724_18835 = state_18715__$1;
(statearr_18724_18835[(2)] = null);

(statearr_18724_18835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18716 === (5))){
var inst_18699 = cljs.core.async.close_BANG_(jobs);
var state_18715__$1 = state_18715;
var statearr_18725_18836 = state_18715__$1;
(statearr_18725_18836[(2)] = inst_18699);

(statearr_18725_18836[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18716 === (8))){
var inst_18701 = (state_18715[(8)]);
var inst_18706 = (state_18715[(2)]);
var state_18715__$1 = (function (){var statearr_18726 = state_18715;
(statearr_18726[(10)] = inst_18706);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18715__$1,(9),results,inst_18701);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_18727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__);

(statearr_18727[(1)] = (1));

return statearr_18727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1 = (function (state_18715){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18715);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18728){var ex__16399__auto__ = e18728;
var statearr_18729_18837 = state_18715;
(statearr_18729_18837[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18715[(4)]))){
var statearr_18730_18838 = state_18715;
(statearr_18730_18838[(1)] = cljs.core.first((state_18715[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18839 = state_18715;
state_18715 = G__18839;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = function(state_18715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1.call(this,state_18715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18731 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18731[(6)] = c__16522__auto___18830);

return statearr_18731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18769){
var state_val_18770 = (state_18769[(1)]);
if((state_val_18770 === (7))){
var inst_18765 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
var statearr_18771_18840 = state_18769__$1;
(statearr_18771_18840[(2)] = inst_18765);

(statearr_18771_18840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (20))){
var state_18769__$1 = state_18769;
var statearr_18772_18841 = state_18769__$1;
(statearr_18772_18841[(2)] = null);

(statearr_18772_18841[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (1))){
var state_18769__$1 = state_18769;
var statearr_18773_18842 = state_18769__$1;
(statearr_18773_18842[(2)] = null);

(statearr_18773_18842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (4))){
var inst_18734 = (state_18769[(7)]);
var inst_18734__$1 = (state_18769[(2)]);
var inst_18735 = (inst_18734__$1 == null);
var state_18769__$1 = (function (){var statearr_18774 = state_18769;
(statearr_18774[(7)] = inst_18734__$1);

return statearr_18774;
})();
if(cljs.core.truth_(inst_18735)){
var statearr_18775_18843 = state_18769__$1;
(statearr_18775_18843[(1)] = (5));

} else {
var statearr_18776_18844 = state_18769__$1;
(statearr_18776_18844[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (15))){
var inst_18747 = (state_18769[(8)]);
var state_18769__$1 = state_18769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18769__$1,(18),to,inst_18747);
} else {
if((state_val_18770 === (21))){
var inst_18760 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
var statearr_18777_18845 = state_18769__$1;
(statearr_18777_18845[(2)] = inst_18760);

(statearr_18777_18845[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (13))){
var inst_18762 = (state_18769[(2)]);
var state_18769__$1 = (function (){var statearr_18778 = state_18769;
(statearr_18778[(9)] = inst_18762);

return statearr_18778;
})();
var statearr_18779_18846 = state_18769__$1;
(statearr_18779_18846[(2)] = null);

(statearr_18779_18846[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (6))){
var inst_18734 = (state_18769[(7)]);
var state_18769__$1 = state_18769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18769__$1,(11),inst_18734);
} else {
if((state_val_18770 === (17))){
var inst_18755 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
if(cljs.core.truth_(inst_18755)){
var statearr_18780_18847 = state_18769__$1;
(statearr_18780_18847[(1)] = (19));

} else {
var statearr_18781_18848 = state_18769__$1;
(statearr_18781_18848[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (3))){
var inst_18767 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18769__$1,inst_18767);
} else {
if((state_val_18770 === (12))){
var inst_18744 = (state_18769[(10)]);
var state_18769__$1 = state_18769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18769__$1,(14),inst_18744);
} else {
if((state_val_18770 === (2))){
var state_18769__$1 = state_18769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18769__$1,(4),results);
} else {
if((state_val_18770 === (19))){
var state_18769__$1 = state_18769;
var statearr_18782_18849 = state_18769__$1;
(statearr_18782_18849[(2)] = null);

(statearr_18782_18849[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (11))){
var inst_18744 = (state_18769[(2)]);
var state_18769__$1 = (function (){var statearr_18783 = state_18769;
(statearr_18783[(10)] = inst_18744);

return statearr_18783;
})();
var statearr_18784_18850 = state_18769__$1;
(statearr_18784_18850[(2)] = null);

(statearr_18784_18850[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (9))){
var state_18769__$1 = state_18769;
var statearr_18785_18851 = state_18769__$1;
(statearr_18785_18851[(2)] = null);

(statearr_18785_18851[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (5))){
var state_18769__$1 = state_18769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18786_18852 = state_18769__$1;
(statearr_18786_18852[(1)] = (8));

} else {
var statearr_18787_18853 = state_18769__$1;
(statearr_18787_18853[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (14))){
var inst_18747 = (state_18769[(8)]);
var inst_18747__$1 = (state_18769[(2)]);
var inst_18748 = (inst_18747__$1 == null);
var inst_18749 = cljs.core.not(inst_18748);
var state_18769__$1 = (function (){var statearr_18788 = state_18769;
(statearr_18788[(8)] = inst_18747__$1);

return statearr_18788;
})();
if(inst_18749){
var statearr_18789_18854 = state_18769__$1;
(statearr_18789_18854[(1)] = (15));

} else {
var statearr_18790_18855 = state_18769__$1;
(statearr_18790_18855[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (16))){
var state_18769__$1 = state_18769;
var statearr_18791_18856 = state_18769__$1;
(statearr_18791_18856[(2)] = false);

(statearr_18791_18856[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (10))){
var inst_18741 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
var statearr_18792_18857 = state_18769__$1;
(statearr_18792_18857[(2)] = inst_18741);

(statearr_18792_18857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (18))){
var inst_18752 = (state_18769[(2)]);
var state_18769__$1 = state_18769;
var statearr_18793_18858 = state_18769__$1;
(statearr_18793_18858[(2)] = inst_18752);

(statearr_18793_18858[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18770 === (8))){
var inst_18738 = cljs.core.async.close_BANG_(to);
var state_18769__$1 = state_18769;
var statearr_18794_18859 = state_18769__$1;
(statearr_18794_18859[(2)] = inst_18738);

(statearr_18794_18859[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_18795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__);

(statearr_18795[(1)] = (1));

return statearr_18795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1 = (function (state_18769){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18769);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18796){var ex__16399__auto__ = e18796;
var statearr_18797_18860 = state_18769;
(statearr_18797_18860[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18769[(4)]))){
var statearr_18798_18861 = state_18769;
(statearr_18798_18861[(1)] = cljs.core.first((state_18769[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18862 = state_18769;
state_18769 = G__18862;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__ = function(state_18769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1.call(this,state_18769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18799 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18799[(6)] = c__16522__auto__);

return statearr_18799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
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
var G__18864 = arguments.length;
switch (G__18864) {
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
var G__18867 = arguments.length;
switch (G__18867) {
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
var G__18870 = arguments.length;
switch (G__18870) {
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
var c__16522__auto___18920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18896){
var state_val_18897 = (state_18896[(1)]);
if((state_val_18897 === (7))){
var inst_18892 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18898_18921 = state_18896__$1;
(statearr_18898_18921[(2)] = inst_18892);

(statearr_18898_18921[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (1))){
var state_18896__$1 = state_18896;
var statearr_18899_18922 = state_18896__$1;
(statearr_18899_18922[(2)] = null);

(statearr_18899_18922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (4))){
var inst_18873 = (state_18896[(7)]);
var inst_18873__$1 = (state_18896[(2)]);
var inst_18874 = (inst_18873__$1 == null);
var state_18896__$1 = (function (){var statearr_18900 = state_18896;
(statearr_18900[(7)] = inst_18873__$1);

return statearr_18900;
})();
if(cljs.core.truth_(inst_18874)){
var statearr_18901_18923 = state_18896__$1;
(statearr_18901_18923[(1)] = (5));

} else {
var statearr_18902_18924 = state_18896__$1;
(statearr_18902_18924[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (13))){
var state_18896__$1 = state_18896;
var statearr_18903_18925 = state_18896__$1;
(statearr_18903_18925[(2)] = null);

(statearr_18903_18925[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (6))){
var inst_18873 = (state_18896[(7)]);
var inst_18879 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18873) : p.call(null,inst_18873));
var state_18896__$1 = state_18896;
if(cljs.core.truth_(inst_18879)){
var statearr_18904_18926 = state_18896__$1;
(statearr_18904_18926[(1)] = (9));

} else {
var statearr_18905_18927 = state_18896__$1;
(statearr_18905_18927[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (3))){
var inst_18894 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18896__$1,inst_18894);
} else {
if((state_val_18897 === (12))){
var state_18896__$1 = state_18896;
var statearr_18906_18928 = state_18896__$1;
(statearr_18906_18928[(2)] = null);

(statearr_18906_18928[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (2))){
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18896__$1,(4),ch);
} else {
if((state_val_18897 === (11))){
var inst_18873 = (state_18896[(7)]);
var inst_18883 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18896__$1,(8),inst_18883,inst_18873);
} else {
if((state_val_18897 === (9))){
var state_18896__$1 = state_18896;
var statearr_18907_18929 = state_18896__$1;
(statearr_18907_18929[(2)] = tc);

(statearr_18907_18929[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (5))){
var inst_18876 = cljs.core.async.close_BANG_(tc);
var inst_18877 = cljs.core.async.close_BANG_(fc);
var state_18896__$1 = (function (){var statearr_18908 = state_18896;
(statearr_18908[(8)] = inst_18876);

return statearr_18908;
})();
var statearr_18909_18930 = state_18896__$1;
(statearr_18909_18930[(2)] = inst_18877);

(statearr_18909_18930[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (14))){
var inst_18890 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18910_18931 = state_18896__$1;
(statearr_18910_18931[(2)] = inst_18890);

(statearr_18910_18931[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (10))){
var state_18896__$1 = state_18896;
var statearr_18911_18932 = state_18896__$1;
(statearr_18911_18932[(2)] = fc);

(statearr_18911_18932[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18897 === (8))){
var inst_18885 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
if(cljs.core.truth_(inst_18885)){
var statearr_18912_18933 = state_18896__$1;
(statearr_18912_18933[(1)] = (12));

} else {
var statearr_18913_18934 = state_18896__$1;
(statearr_18913_18934[(1)] = (13));

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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_18896){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18896);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18915){var ex__16399__auto__ = e18915;
var statearr_18916_18935 = state_18896;
(statearr_18916_18935[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18896[(4)]))){
var statearr_18917_18936 = state_18896;
(statearr_18917_18936[(1)] = cljs.core.first((state_18896[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18937 = state_18896;
state_18896 = G__18937;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_18896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_18896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18918 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18918[(6)] = c__16522__auto___18920);

return statearr_18918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18959){
var state_val_18960 = (state_18959[(1)]);
if((state_val_18960 === (7))){
var inst_18955 = (state_18959[(2)]);
var state_18959__$1 = state_18959;
var statearr_18961_18980 = state_18959__$1;
(statearr_18961_18980[(2)] = inst_18955);

(statearr_18961_18980[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (1))){
var inst_18938 = init;
var inst_18939 = inst_18938;
var state_18959__$1 = (function (){var statearr_18962 = state_18959;
(statearr_18962[(7)] = inst_18939);

return statearr_18962;
})();
var statearr_18963_18981 = state_18959__$1;
(statearr_18963_18981[(2)] = null);

(statearr_18963_18981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (4))){
var inst_18942 = (state_18959[(8)]);
var inst_18942__$1 = (state_18959[(2)]);
var inst_18943 = (inst_18942__$1 == null);
var state_18959__$1 = (function (){var statearr_18964 = state_18959;
(statearr_18964[(8)] = inst_18942__$1);

return statearr_18964;
})();
if(cljs.core.truth_(inst_18943)){
var statearr_18965_18982 = state_18959__$1;
(statearr_18965_18982[(1)] = (5));

} else {
var statearr_18966_18983 = state_18959__$1;
(statearr_18966_18983[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (6))){
var inst_18939 = (state_18959[(7)]);
var inst_18942 = (state_18959[(8)]);
var inst_18946 = (state_18959[(9)]);
var inst_18946__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18939,inst_18942) : f.call(null,inst_18939,inst_18942));
var inst_18947 = cljs.core.reduced_QMARK_(inst_18946__$1);
var state_18959__$1 = (function (){var statearr_18967 = state_18959;
(statearr_18967[(9)] = inst_18946__$1);

return statearr_18967;
})();
if(inst_18947){
var statearr_18968_18984 = state_18959__$1;
(statearr_18968_18984[(1)] = (8));

} else {
var statearr_18969_18985 = state_18959__$1;
(statearr_18969_18985[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (3))){
var inst_18957 = (state_18959[(2)]);
var state_18959__$1 = state_18959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18959__$1,inst_18957);
} else {
if((state_val_18960 === (2))){
var state_18959__$1 = state_18959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18959__$1,(4),ch);
} else {
if((state_val_18960 === (9))){
var inst_18946 = (state_18959[(9)]);
var inst_18939 = inst_18946;
var state_18959__$1 = (function (){var statearr_18970 = state_18959;
(statearr_18970[(7)] = inst_18939);

return statearr_18970;
})();
var statearr_18971_18986 = state_18959__$1;
(statearr_18971_18986[(2)] = null);

(statearr_18971_18986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (5))){
var inst_18939 = (state_18959[(7)]);
var state_18959__$1 = state_18959;
var statearr_18972_18987 = state_18959__$1;
(statearr_18972_18987[(2)] = inst_18939);

(statearr_18972_18987[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (10))){
var inst_18953 = (state_18959[(2)]);
var state_18959__$1 = state_18959;
var statearr_18973_18988 = state_18959__$1;
(statearr_18973_18988[(2)] = inst_18953);

(statearr_18973_18988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18960 === (8))){
var inst_18946 = (state_18959[(9)]);
var inst_18949 = cljs.core.deref(inst_18946);
var state_18959__$1 = state_18959;
var statearr_18974_18989 = state_18959__$1;
(statearr_18974_18989[(2)] = inst_18949);

(statearr_18974_18989[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16396__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16396__auto____0 = (function (){
var statearr_18975 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18975[(0)] = cljs$core$async$reduce_$_state_machine__16396__auto__);

(statearr_18975[(1)] = (1));

return statearr_18975;
});
var cljs$core$async$reduce_$_state_machine__16396__auto____1 = (function (state_18959){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18959);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e18976){var ex__16399__auto__ = e18976;
var statearr_18977_18990 = state_18959;
(statearr_18977_18990[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18959[(4)]))){
var statearr_18978_18991 = state_18959;
(statearr_18978_18991[(1)] = cljs.core.first((state_18959[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__18992 = state_18959;
state_18959 = G__18992;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16396__auto__ = function(state_18959){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16396__auto____1.call(this,state_18959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16396__auto____0;
cljs$core$async$reduce_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16396__auto____1;
return cljs$core$async$reduce_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_18979 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_18979[(6)] = c__16522__auto__);

return statearr_18979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_18998){
var state_val_18999 = (state_18998[(1)]);
if((state_val_18999 === (1))){
var inst_18993 = cljs.core.async.reduce(f__$1,init,ch);
var state_18998__$1 = state_18998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18998__$1,(2),inst_18993);
} else {
if((state_val_18999 === (2))){
var inst_18995 = (state_18998[(2)]);
var inst_18996 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18995) : f__$1.call(null,inst_18995));
var state_18998__$1 = state_18998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18998__$1,inst_18996);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16396__auto____0 = (function (){
var statearr_19000 = [null,null,null,null,null,null,null];
(statearr_19000[(0)] = cljs$core$async$transduce_$_state_machine__16396__auto__);

(statearr_19000[(1)] = (1));

return statearr_19000;
});
var cljs$core$async$transduce_$_state_machine__16396__auto____1 = (function (state_18998){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_18998);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19001){var ex__16399__auto__ = e19001;
var statearr_19002_19005 = state_18998;
(statearr_19002_19005[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_18998[(4)]))){
var statearr_19003_19006 = state_18998;
(statearr_19003_19006[(1)] = cljs.core.first((state_18998[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19007 = state_18998;
state_18998 = G__19007;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16396__auto__ = function(state_18998){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16396__auto____1.call(this,state_18998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16396__auto____0;
cljs$core$async$transduce_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16396__auto____1;
return cljs$core$async$transduce_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19004 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19004[(6)] = c__16522__auto__);

return statearr_19004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
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
var G__19009 = arguments.length;
switch (G__19009) {
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
var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_19016 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19036_19058 = state_19034__$1;
(statearr_19036_19058[(2)] = inst_19016);

(statearr_19036_19058[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (1))){
var inst_19010 = cljs.core.seq(coll);
var inst_19011 = inst_19010;
var state_19034__$1 = (function (){var statearr_19037 = state_19034;
(statearr_19037[(7)] = inst_19011);

return statearr_19037;
})();
var statearr_19038_19059 = state_19034__$1;
(statearr_19038_19059[(2)] = null);

(statearr_19038_19059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (4))){
var inst_19011 = (state_19034[(7)]);
var inst_19014 = cljs.core.first(inst_19011);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19034__$1,(7),ch,inst_19014);
} else {
if((state_val_19035 === (13))){
var inst_19028 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19039_19060 = state_19034__$1;
(statearr_19039_19060[(2)] = inst_19028);

(statearr_19039_19060[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (6))){
var inst_19019 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19019)){
var statearr_19040_19061 = state_19034__$1;
(statearr_19040_19061[(1)] = (8));

} else {
var statearr_19041_19062 = state_19034__$1;
(statearr_19041_19062[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (12))){
var state_19034__$1 = state_19034;
var statearr_19042_19063 = state_19034__$1;
(statearr_19042_19063[(2)] = null);

(statearr_19042_19063[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (2))){
var inst_19011 = (state_19034[(7)]);
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_19011)){
var statearr_19043_19064 = state_19034__$1;
(statearr_19043_19064[(1)] = (4));

} else {
var statearr_19044_19065 = state_19034__$1;
(statearr_19044_19065[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (11))){
var inst_19025 = cljs.core.async.close_BANG_(ch);
var state_19034__$1 = state_19034;
var statearr_19045_19066 = state_19034__$1;
(statearr_19045_19066[(2)] = inst_19025);

(statearr_19045_19066[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (9))){
var state_19034__$1 = state_19034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19046_19067 = state_19034__$1;
(statearr_19046_19067[(1)] = (11));

} else {
var statearr_19047_19068 = state_19034__$1;
(statearr_19047_19068[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (5))){
var inst_19011 = (state_19034[(7)]);
var state_19034__$1 = state_19034;
var statearr_19048_19069 = state_19034__$1;
(statearr_19048_19069[(2)] = inst_19011);

(statearr_19048_19069[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (10))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19049_19070 = state_19034__$1;
(statearr_19049_19070[(2)] = inst_19030);

(statearr_19049_19070[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19035 === (8))){
var inst_19011 = (state_19034[(7)]);
var inst_19021 = cljs.core.next(inst_19011);
var inst_19011__$1 = inst_19021;
var state_19034__$1 = (function (){var statearr_19050 = state_19034;
(statearr_19050[(7)] = inst_19011__$1);

return statearr_19050;
})();
var statearr_19051_19071 = state_19034__$1;
(statearr_19051_19071[(2)] = null);

(statearr_19051_19071[(1)] = (2));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_19034){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19034);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19053){var ex__16399__auto__ = e19053;
var statearr_19054_19072 = state_19034;
(statearr_19054_19072[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19034[(4)]))){
var statearr_19055_19073 = state_19034;
(statearr_19055_19073[(1)] = cljs.core.first((state_19034[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19074 = state_19034;
state_19034 = G__19074;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19056 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19056[(6)] = c__16522__auto__);

return statearr_19056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
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
var G__19076 = arguments.length;
switch (G__19076) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19078 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19078(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19079 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19079(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19080 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19080(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19081 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19081(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19082 = (function (ch,cs,meta19083){
this.ch = ch;
this.cs = cs;
this.meta19083 = meta19083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19084,meta19083__$1){
var self__ = this;
var _19084__$1 = this;
return (new cljs.core.async.t_cljs$core$async19082(self__.ch,self__.cs,meta19083__$1));
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19084){
var self__ = this;
var _19084__$1 = this;
return self__.meta19083;
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19082.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta19083], null);
}));

(cljs.core.async.t_cljs$core$async19082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19082");

(cljs.core.async.t_cljs$core$async19082.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19082.
 */
cljs.core.async.__GT_t_cljs$core$async19082 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19082(ch__$1,cs__$1,meta19083){
return (new cljs.core.async.t_cljs$core$async19082(ch__$1,cs__$1,meta19083));
});

}

return (new cljs.core.async.t_cljs$core$async19082(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16522__auto___19301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19217){
var state_val_19218 = (state_19217[(1)]);
if((state_val_19218 === (7))){
var inst_19213 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19219_19302 = state_19217__$1;
(statearr_19219_19302[(2)] = inst_19213);

(statearr_19219_19302[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (20))){
var inst_19118 = (state_19217[(7)]);
var inst_19130 = cljs.core.first(inst_19118);
var inst_19131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19130,(0),null);
var inst_19132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19130,(1),null);
var state_19217__$1 = (function (){var statearr_19220 = state_19217;
(statearr_19220[(8)] = inst_19131);

return statearr_19220;
})();
if(cljs.core.truth_(inst_19132)){
var statearr_19221_19303 = state_19217__$1;
(statearr_19221_19303[(1)] = (22));

} else {
var statearr_19222_19304 = state_19217__$1;
(statearr_19222_19304[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (27))){
var inst_19160 = (state_19217[(9)]);
var inst_19162 = (state_19217[(10)]);
var inst_19167 = (state_19217[(11)]);
var inst_19087 = (state_19217[(12)]);
var inst_19167__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19160,inst_19162);
var inst_19168 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19167__$1,inst_19087,done);
var state_19217__$1 = (function (){var statearr_19223 = state_19217;
(statearr_19223[(11)] = inst_19167__$1);

return statearr_19223;
})();
if(cljs.core.truth_(inst_19168)){
var statearr_19224_19305 = state_19217__$1;
(statearr_19224_19305[(1)] = (30));

} else {
var statearr_19225_19306 = state_19217__$1;
(statearr_19225_19306[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (1))){
var state_19217__$1 = state_19217;
var statearr_19226_19307 = state_19217__$1;
(statearr_19226_19307[(2)] = null);

(statearr_19226_19307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (24))){
var inst_19118 = (state_19217[(7)]);
var inst_19137 = (state_19217[(2)]);
var inst_19138 = cljs.core.next(inst_19118);
var inst_19096 = inst_19138;
var inst_19097 = null;
var inst_19098 = (0);
var inst_19099 = (0);
var state_19217__$1 = (function (){var statearr_19227 = state_19217;
(statearr_19227[(13)] = inst_19137);

(statearr_19227[(14)] = inst_19096);

(statearr_19227[(15)] = inst_19097);

(statearr_19227[(16)] = inst_19098);

(statearr_19227[(17)] = inst_19099);

return statearr_19227;
})();
var statearr_19228_19308 = state_19217__$1;
(statearr_19228_19308[(2)] = null);

(statearr_19228_19308[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (39))){
var state_19217__$1 = state_19217;
var statearr_19232_19309 = state_19217__$1;
(statearr_19232_19309[(2)] = null);

(statearr_19232_19309[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (4))){
var inst_19087 = (state_19217[(12)]);
var inst_19087__$1 = (state_19217[(2)]);
var inst_19088 = (inst_19087__$1 == null);
var state_19217__$1 = (function (){var statearr_19233 = state_19217;
(statearr_19233[(12)] = inst_19087__$1);

return statearr_19233;
})();
if(cljs.core.truth_(inst_19088)){
var statearr_19234_19310 = state_19217__$1;
(statearr_19234_19310[(1)] = (5));

} else {
var statearr_19235_19311 = state_19217__$1;
(statearr_19235_19311[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (15))){
var inst_19099 = (state_19217[(17)]);
var inst_19096 = (state_19217[(14)]);
var inst_19097 = (state_19217[(15)]);
var inst_19098 = (state_19217[(16)]);
var inst_19114 = (state_19217[(2)]);
var inst_19115 = (inst_19099 + (1));
var tmp19229 = inst_19098;
var tmp19230 = inst_19097;
var tmp19231 = inst_19096;
var inst_19096__$1 = tmp19231;
var inst_19097__$1 = tmp19230;
var inst_19098__$1 = tmp19229;
var inst_19099__$1 = inst_19115;
var state_19217__$1 = (function (){var statearr_19236 = state_19217;
(statearr_19236[(18)] = inst_19114);

(statearr_19236[(14)] = inst_19096__$1);

(statearr_19236[(15)] = inst_19097__$1);

(statearr_19236[(16)] = inst_19098__$1);

(statearr_19236[(17)] = inst_19099__$1);

return statearr_19236;
})();
var statearr_19237_19312 = state_19217__$1;
(statearr_19237_19312[(2)] = null);

(statearr_19237_19312[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (21))){
var inst_19141 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19241_19313 = state_19217__$1;
(statearr_19241_19313[(2)] = inst_19141);

(statearr_19241_19313[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (31))){
var inst_19167 = (state_19217[(11)]);
var inst_19171 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19167);
var state_19217__$1 = state_19217;
var statearr_19242_19314 = state_19217__$1;
(statearr_19242_19314[(2)] = inst_19171);

(statearr_19242_19314[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (32))){
var inst_19162 = (state_19217[(10)]);
var inst_19159 = (state_19217[(19)]);
var inst_19160 = (state_19217[(9)]);
var inst_19161 = (state_19217[(20)]);
var inst_19173 = (state_19217[(2)]);
var inst_19174 = (inst_19162 + (1));
var tmp19238 = inst_19159;
var tmp19239 = inst_19160;
var tmp19240 = inst_19161;
var inst_19159__$1 = tmp19238;
var inst_19160__$1 = tmp19239;
var inst_19161__$1 = tmp19240;
var inst_19162__$1 = inst_19174;
var state_19217__$1 = (function (){var statearr_19243 = state_19217;
(statearr_19243[(21)] = inst_19173);

(statearr_19243[(19)] = inst_19159__$1);

(statearr_19243[(9)] = inst_19160__$1);

(statearr_19243[(20)] = inst_19161__$1);

(statearr_19243[(10)] = inst_19162__$1);

return statearr_19243;
})();
var statearr_19244_19315 = state_19217__$1;
(statearr_19244_19315[(2)] = null);

(statearr_19244_19315[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (40))){
var inst_19186 = (state_19217[(22)]);
var inst_19190 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19186);
var state_19217__$1 = state_19217;
var statearr_19245_19316 = state_19217__$1;
(statearr_19245_19316[(2)] = inst_19190);

(statearr_19245_19316[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (33))){
var inst_19177 = (state_19217[(23)]);
var inst_19179 = cljs.core.chunked_seq_QMARK_(inst_19177);
var state_19217__$1 = state_19217;
if(inst_19179){
var statearr_19246_19317 = state_19217__$1;
(statearr_19246_19317[(1)] = (36));

} else {
var statearr_19247_19318 = state_19217__$1;
(statearr_19247_19318[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (13))){
var inst_19108 = (state_19217[(24)]);
var inst_19111 = cljs.core.async.close_BANG_(inst_19108);
var state_19217__$1 = state_19217;
var statearr_19248_19319 = state_19217__$1;
(statearr_19248_19319[(2)] = inst_19111);

(statearr_19248_19319[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (22))){
var inst_19131 = (state_19217[(8)]);
var inst_19134 = cljs.core.async.close_BANG_(inst_19131);
var state_19217__$1 = state_19217;
var statearr_19249_19320 = state_19217__$1;
(statearr_19249_19320[(2)] = inst_19134);

(statearr_19249_19320[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (36))){
var inst_19177 = (state_19217[(23)]);
var inst_19181 = cljs.core.chunk_first(inst_19177);
var inst_19182 = cljs.core.chunk_rest(inst_19177);
var inst_19183 = cljs.core.count(inst_19181);
var inst_19159 = inst_19182;
var inst_19160 = inst_19181;
var inst_19161 = inst_19183;
var inst_19162 = (0);
var state_19217__$1 = (function (){var statearr_19250 = state_19217;
(statearr_19250[(19)] = inst_19159);

(statearr_19250[(9)] = inst_19160);

(statearr_19250[(20)] = inst_19161);

(statearr_19250[(10)] = inst_19162);

return statearr_19250;
})();
var statearr_19251_19321 = state_19217__$1;
(statearr_19251_19321[(2)] = null);

(statearr_19251_19321[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (41))){
var inst_19177 = (state_19217[(23)]);
var inst_19192 = (state_19217[(2)]);
var inst_19193 = cljs.core.next(inst_19177);
var inst_19159 = inst_19193;
var inst_19160 = null;
var inst_19161 = (0);
var inst_19162 = (0);
var state_19217__$1 = (function (){var statearr_19252 = state_19217;
(statearr_19252[(25)] = inst_19192);

(statearr_19252[(19)] = inst_19159);

(statearr_19252[(9)] = inst_19160);

(statearr_19252[(20)] = inst_19161);

(statearr_19252[(10)] = inst_19162);

return statearr_19252;
})();
var statearr_19253_19322 = state_19217__$1;
(statearr_19253_19322[(2)] = null);

(statearr_19253_19322[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (43))){
var state_19217__$1 = state_19217;
var statearr_19254_19323 = state_19217__$1;
(statearr_19254_19323[(2)] = null);

(statearr_19254_19323[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (29))){
var inst_19201 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19255_19324 = state_19217__$1;
(statearr_19255_19324[(2)] = inst_19201);

(statearr_19255_19324[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (44))){
var inst_19210 = (state_19217[(2)]);
var state_19217__$1 = (function (){var statearr_19256 = state_19217;
(statearr_19256[(26)] = inst_19210);

return statearr_19256;
})();
var statearr_19257_19325 = state_19217__$1;
(statearr_19257_19325[(2)] = null);

(statearr_19257_19325[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (6))){
var inst_19151 = (state_19217[(27)]);
var inst_19150 = cljs.core.deref(cs);
var inst_19151__$1 = cljs.core.keys(inst_19150);
var inst_19152 = cljs.core.count(inst_19151__$1);
var inst_19153 = cljs.core.reset_BANG_(dctr,inst_19152);
var inst_19158 = cljs.core.seq(inst_19151__$1);
var inst_19159 = inst_19158;
var inst_19160 = null;
var inst_19161 = (0);
var inst_19162 = (0);
var state_19217__$1 = (function (){var statearr_19258 = state_19217;
(statearr_19258[(27)] = inst_19151__$1);

(statearr_19258[(28)] = inst_19153);

(statearr_19258[(19)] = inst_19159);

(statearr_19258[(9)] = inst_19160);

(statearr_19258[(20)] = inst_19161);

(statearr_19258[(10)] = inst_19162);

return statearr_19258;
})();
var statearr_19259_19326 = state_19217__$1;
(statearr_19259_19326[(2)] = null);

(statearr_19259_19326[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (28))){
var inst_19159 = (state_19217[(19)]);
var inst_19177 = (state_19217[(23)]);
var inst_19177__$1 = cljs.core.seq(inst_19159);
var state_19217__$1 = (function (){var statearr_19260 = state_19217;
(statearr_19260[(23)] = inst_19177__$1);

return statearr_19260;
})();
if(inst_19177__$1){
var statearr_19261_19327 = state_19217__$1;
(statearr_19261_19327[(1)] = (33));

} else {
var statearr_19262_19328 = state_19217__$1;
(statearr_19262_19328[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (25))){
var inst_19162 = (state_19217[(10)]);
var inst_19161 = (state_19217[(20)]);
var inst_19164 = (inst_19162 < inst_19161);
var inst_19165 = inst_19164;
var state_19217__$1 = state_19217;
if(cljs.core.truth_(inst_19165)){
var statearr_19263_19329 = state_19217__$1;
(statearr_19263_19329[(1)] = (27));

} else {
var statearr_19264_19330 = state_19217__$1;
(statearr_19264_19330[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (34))){
var state_19217__$1 = state_19217;
var statearr_19265_19331 = state_19217__$1;
(statearr_19265_19331[(2)] = null);

(statearr_19265_19331[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (17))){
var state_19217__$1 = state_19217;
var statearr_19266_19332 = state_19217__$1;
(statearr_19266_19332[(2)] = null);

(statearr_19266_19332[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (3))){
var inst_19215 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19217__$1,inst_19215);
} else {
if((state_val_19218 === (12))){
var inst_19146 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19267_19333 = state_19217__$1;
(statearr_19267_19333[(2)] = inst_19146);

(statearr_19267_19333[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (2))){
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,(4),ch);
} else {
if((state_val_19218 === (23))){
var state_19217__$1 = state_19217;
var statearr_19268_19334 = state_19217__$1;
(statearr_19268_19334[(2)] = null);

(statearr_19268_19334[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (35))){
var inst_19199 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19269_19335 = state_19217__$1;
(statearr_19269_19335[(2)] = inst_19199);

(statearr_19269_19335[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (19))){
var inst_19118 = (state_19217[(7)]);
var inst_19122 = cljs.core.chunk_first(inst_19118);
var inst_19123 = cljs.core.chunk_rest(inst_19118);
var inst_19124 = cljs.core.count(inst_19122);
var inst_19096 = inst_19123;
var inst_19097 = inst_19122;
var inst_19098 = inst_19124;
var inst_19099 = (0);
var state_19217__$1 = (function (){var statearr_19270 = state_19217;
(statearr_19270[(14)] = inst_19096);

(statearr_19270[(15)] = inst_19097);

(statearr_19270[(16)] = inst_19098);

(statearr_19270[(17)] = inst_19099);

return statearr_19270;
})();
var statearr_19271_19336 = state_19217__$1;
(statearr_19271_19336[(2)] = null);

(statearr_19271_19336[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (11))){
var inst_19096 = (state_19217[(14)]);
var inst_19118 = (state_19217[(7)]);
var inst_19118__$1 = cljs.core.seq(inst_19096);
var state_19217__$1 = (function (){var statearr_19272 = state_19217;
(statearr_19272[(7)] = inst_19118__$1);

return statearr_19272;
})();
if(inst_19118__$1){
var statearr_19273_19337 = state_19217__$1;
(statearr_19273_19337[(1)] = (16));

} else {
var statearr_19274_19338 = state_19217__$1;
(statearr_19274_19338[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (9))){
var inst_19148 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19275_19339 = state_19217__$1;
(statearr_19275_19339[(2)] = inst_19148);

(statearr_19275_19339[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (5))){
var inst_19094 = cljs.core.deref(cs);
var inst_19095 = cljs.core.seq(inst_19094);
var inst_19096 = inst_19095;
var inst_19097 = null;
var inst_19098 = (0);
var inst_19099 = (0);
var state_19217__$1 = (function (){var statearr_19276 = state_19217;
(statearr_19276[(14)] = inst_19096);

(statearr_19276[(15)] = inst_19097);

(statearr_19276[(16)] = inst_19098);

(statearr_19276[(17)] = inst_19099);

return statearr_19276;
})();
var statearr_19277_19340 = state_19217__$1;
(statearr_19277_19340[(2)] = null);

(statearr_19277_19340[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (14))){
var state_19217__$1 = state_19217;
var statearr_19278_19341 = state_19217__$1;
(statearr_19278_19341[(2)] = null);

(statearr_19278_19341[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (45))){
var inst_19207 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19279_19342 = state_19217__$1;
(statearr_19279_19342[(2)] = inst_19207);

(statearr_19279_19342[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (26))){
var inst_19151 = (state_19217[(27)]);
var inst_19203 = (state_19217[(2)]);
var inst_19204 = cljs.core.seq(inst_19151);
var state_19217__$1 = (function (){var statearr_19280 = state_19217;
(statearr_19280[(29)] = inst_19203);

return statearr_19280;
})();
if(inst_19204){
var statearr_19281_19343 = state_19217__$1;
(statearr_19281_19343[(1)] = (42));

} else {
var statearr_19282_19344 = state_19217__$1;
(statearr_19282_19344[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (16))){
var inst_19118 = (state_19217[(7)]);
var inst_19120 = cljs.core.chunked_seq_QMARK_(inst_19118);
var state_19217__$1 = state_19217;
if(inst_19120){
var statearr_19283_19345 = state_19217__$1;
(statearr_19283_19345[(1)] = (19));

} else {
var statearr_19284_19346 = state_19217__$1;
(statearr_19284_19346[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (38))){
var inst_19196 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19285_19347 = state_19217__$1;
(statearr_19285_19347[(2)] = inst_19196);

(statearr_19285_19347[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (30))){
var state_19217__$1 = state_19217;
var statearr_19286_19348 = state_19217__$1;
(statearr_19286_19348[(2)] = null);

(statearr_19286_19348[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (10))){
var inst_19097 = (state_19217[(15)]);
var inst_19099 = (state_19217[(17)]);
var inst_19107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19097,inst_19099);
var inst_19108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19107,(0),null);
var inst_19109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19107,(1),null);
var state_19217__$1 = (function (){var statearr_19287 = state_19217;
(statearr_19287[(24)] = inst_19108);

return statearr_19287;
})();
if(cljs.core.truth_(inst_19109)){
var statearr_19288_19349 = state_19217__$1;
(statearr_19288_19349[(1)] = (13));

} else {
var statearr_19289_19350 = state_19217__$1;
(statearr_19289_19350[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (18))){
var inst_19144 = (state_19217[(2)]);
var state_19217__$1 = state_19217;
var statearr_19290_19351 = state_19217__$1;
(statearr_19290_19351[(2)] = inst_19144);

(statearr_19290_19351[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (42))){
var state_19217__$1 = state_19217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19217__$1,(45),dchan);
} else {
if((state_val_19218 === (37))){
var inst_19177 = (state_19217[(23)]);
var inst_19186 = (state_19217[(22)]);
var inst_19087 = (state_19217[(12)]);
var inst_19186__$1 = cljs.core.first(inst_19177);
var inst_19187 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19186__$1,inst_19087,done);
var state_19217__$1 = (function (){var statearr_19291 = state_19217;
(statearr_19291[(22)] = inst_19186__$1);

return statearr_19291;
})();
if(cljs.core.truth_(inst_19187)){
var statearr_19292_19352 = state_19217__$1;
(statearr_19292_19352[(1)] = (39));

} else {
var statearr_19293_19353 = state_19217__$1;
(statearr_19293_19353[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19218 === (8))){
var inst_19099 = (state_19217[(17)]);
var inst_19098 = (state_19217[(16)]);
var inst_19101 = (inst_19099 < inst_19098);
var inst_19102 = inst_19101;
var state_19217__$1 = state_19217;
if(cljs.core.truth_(inst_19102)){
var statearr_19294_19354 = state_19217__$1;
(statearr_19294_19354[(1)] = (10));

} else {
var statearr_19295_19355 = state_19217__$1;
(statearr_19295_19355[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16396__auto__ = null;
var cljs$core$async$mult_$_state_machine__16396__auto____0 = (function (){
var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19296[(0)] = cljs$core$async$mult_$_state_machine__16396__auto__);

(statearr_19296[(1)] = (1));

return statearr_19296;
});
var cljs$core$async$mult_$_state_machine__16396__auto____1 = (function (state_19217){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19217);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19297){var ex__16399__auto__ = e19297;
var statearr_19298_19356 = state_19217;
(statearr_19298_19356[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19217[(4)]))){
var statearr_19299_19357 = state_19217;
(statearr_19299_19357[(1)] = cljs.core.first((state_19217[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19358 = state_19217;
state_19217 = G__19358;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16396__auto__ = function(state_19217){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16396__auto____1.call(this,state_19217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16396__auto____0;
cljs$core$async$mult_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16396__auto____1;
return cljs$core$async$mult_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19300 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19300[(6)] = c__16522__auto___19301);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var G__19360 = arguments.length;
switch (G__19360) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19362 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19362(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19363 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19363(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19364 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19364(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19365 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19365(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19366 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19366(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19377 = arguments.length;
var i__4737__auto___19378 = (0);
while(true){
if((i__4737__auto___19378 < len__4736__auto___19377)){
args__4742__auto__.push((arguments[i__4737__auto___19378]));

var G__19379 = (i__4737__auto___19378 + (1));
i__4737__auto___19378 = G__19379;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19371){
var map__19372 = p__19371;
var map__19372__$1 = (((((!((map__19372 == null))))?(((((map__19372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19372):map__19372);
var opts = map__19372__$1;
var statearr_19374_19380 = state;
(statearr_19374_19380[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19375_19381 = state;
(statearr_19375_19381[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19376_19382 = state;
(statearr_19376_19382[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19367){
var G__19368 = cljs.core.first(seq19367);
var seq19367__$1 = cljs.core.next(seq19367);
var G__19369 = cljs.core.first(seq19367__$1);
var seq19367__$2 = cljs.core.next(seq19367__$1);
var G__19370 = cljs.core.first(seq19367__$2);
var seq19367__$3 = cljs.core.next(seq19367__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19368,G__19369,G__19370,seq19367__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19383 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19384){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19384 = meta19384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19385,meta19384__$1){
var self__ = this;
var _19385__$1 = this;
return (new cljs.core.async.t_cljs$core$async19383(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19384__$1));
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19385){
var self__ = this;
var _19385__$1 = this;
return self__.meta19384;
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19383.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta19384], null);
}));

(cljs.core.async.t_cljs$core$async19383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19383");

(cljs.core.async.t_cljs$core$async19383.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19383.
 */
cljs.core.async.__GT_t_cljs$core$async19383 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19383(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19384){
return (new cljs.core.async.t_cljs$core$async19383(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19384));
});

}

return (new cljs.core.async.t_cljs$core$async19383(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16522__auto___19548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19487){
var state_val_19488 = (state_19487[(1)]);
if((state_val_19488 === (7))){
var inst_19402 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19489_19549 = state_19487__$1;
(statearr_19489_19549[(2)] = inst_19402);

(statearr_19489_19549[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (20))){
var inst_19414 = (state_19487[(7)]);
var state_19487__$1 = state_19487;
var statearr_19490_19550 = state_19487__$1;
(statearr_19490_19550[(2)] = inst_19414);

(statearr_19490_19550[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (27))){
var state_19487__$1 = state_19487;
var statearr_19491_19551 = state_19487__$1;
(statearr_19491_19551[(2)] = null);

(statearr_19491_19551[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (1))){
var inst_19389 = (state_19487[(8)]);
var inst_19389__$1 = calc_state();
var inst_19391 = (inst_19389__$1 == null);
var inst_19392 = cljs.core.not(inst_19391);
var state_19487__$1 = (function (){var statearr_19492 = state_19487;
(statearr_19492[(8)] = inst_19389__$1);

return statearr_19492;
})();
if(inst_19392){
var statearr_19493_19552 = state_19487__$1;
(statearr_19493_19552[(1)] = (2));

} else {
var statearr_19494_19553 = state_19487__$1;
(statearr_19494_19553[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (24))){
var inst_19438 = (state_19487[(9)]);
var inst_19447 = (state_19487[(10)]);
var inst_19461 = (state_19487[(11)]);
var inst_19461__$1 = (inst_19438.cljs$core$IFn$_invoke$arity$1 ? inst_19438.cljs$core$IFn$_invoke$arity$1(inst_19447) : inst_19438.call(null,inst_19447));
var state_19487__$1 = (function (){var statearr_19495 = state_19487;
(statearr_19495[(11)] = inst_19461__$1);

return statearr_19495;
})();
if(cljs.core.truth_(inst_19461__$1)){
var statearr_19496_19554 = state_19487__$1;
(statearr_19496_19554[(1)] = (29));

} else {
var statearr_19497_19555 = state_19487__$1;
(statearr_19497_19555[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (4))){
var inst_19405 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19405)){
var statearr_19498_19556 = state_19487__$1;
(statearr_19498_19556[(1)] = (8));

} else {
var statearr_19499_19557 = state_19487__$1;
(statearr_19499_19557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (15))){
var inst_19432 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19432)){
var statearr_19500_19558 = state_19487__$1;
(statearr_19500_19558[(1)] = (19));

} else {
var statearr_19501_19559 = state_19487__$1;
(statearr_19501_19559[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (21))){
var inst_19437 = (state_19487[(12)]);
var inst_19437__$1 = (state_19487[(2)]);
var inst_19438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19437__$1,cljs.core.cst$kw$solos);
var inst_19439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19437__$1,cljs.core.cst$kw$mutes);
var inst_19440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19437__$1,cljs.core.cst$kw$reads);
var state_19487__$1 = (function (){var statearr_19502 = state_19487;
(statearr_19502[(12)] = inst_19437__$1);

(statearr_19502[(9)] = inst_19438);

(statearr_19502[(13)] = inst_19439);

return statearr_19502;
})();
return cljs.core.async.ioc_alts_BANG_(state_19487__$1,(22),inst_19440);
} else {
if((state_val_19488 === (31))){
var inst_19469 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19469)){
var statearr_19503_19560 = state_19487__$1;
(statearr_19503_19560[(1)] = (32));

} else {
var statearr_19504_19561 = state_19487__$1;
(statearr_19504_19561[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (32))){
var inst_19446 = (state_19487[(14)]);
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19487__$1,(35),out,inst_19446);
} else {
if((state_val_19488 === (33))){
var inst_19437 = (state_19487[(12)]);
var inst_19414 = inst_19437;
var state_19487__$1 = (function (){var statearr_19505 = state_19487;
(statearr_19505[(7)] = inst_19414);

return statearr_19505;
})();
var statearr_19506_19562 = state_19487__$1;
(statearr_19506_19562[(2)] = null);

(statearr_19506_19562[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (13))){
var inst_19414 = (state_19487[(7)]);
var inst_19421 = inst_19414.cljs$lang$protocol_mask$partition0$;
var inst_19422 = (inst_19421 & (64));
var inst_19423 = inst_19414.cljs$core$ISeq$;
var inst_19424 = (cljs.core.PROTOCOL_SENTINEL === inst_19423);
var inst_19425 = ((inst_19422) || (inst_19424));
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19425)){
var statearr_19507_19563 = state_19487__$1;
(statearr_19507_19563[(1)] = (16));

} else {
var statearr_19508_19564 = state_19487__$1;
(statearr_19508_19564[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (22))){
var inst_19446 = (state_19487[(14)]);
var inst_19447 = (state_19487[(10)]);
var inst_19445 = (state_19487[(2)]);
var inst_19446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19445,(0),null);
var inst_19447__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19445,(1),null);
var inst_19448 = (inst_19446__$1 == null);
var inst_19449 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19447__$1,change);
var inst_19450 = ((inst_19448) || (inst_19449));
var state_19487__$1 = (function (){var statearr_19509 = state_19487;
(statearr_19509[(14)] = inst_19446__$1);

(statearr_19509[(10)] = inst_19447__$1);

return statearr_19509;
})();
if(cljs.core.truth_(inst_19450)){
var statearr_19510_19565 = state_19487__$1;
(statearr_19510_19565[(1)] = (23));

} else {
var statearr_19511_19566 = state_19487__$1;
(statearr_19511_19566[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (36))){
var inst_19437 = (state_19487[(12)]);
var inst_19414 = inst_19437;
var state_19487__$1 = (function (){var statearr_19512 = state_19487;
(statearr_19512[(7)] = inst_19414);

return statearr_19512;
})();
var statearr_19513_19567 = state_19487__$1;
(statearr_19513_19567[(2)] = null);

(statearr_19513_19567[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (29))){
var inst_19461 = (state_19487[(11)]);
var state_19487__$1 = state_19487;
var statearr_19514_19568 = state_19487__$1;
(statearr_19514_19568[(2)] = inst_19461);

(statearr_19514_19568[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (6))){
var state_19487__$1 = state_19487;
var statearr_19515_19569 = state_19487__$1;
(statearr_19515_19569[(2)] = false);

(statearr_19515_19569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (28))){
var inst_19457 = (state_19487[(2)]);
var inst_19458 = calc_state();
var inst_19414 = inst_19458;
var state_19487__$1 = (function (){var statearr_19516 = state_19487;
(statearr_19516[(15)] = inst_19457);

(statearr_19516[(7)] = inst_19414);

return statearr_19516;
})();
var statearr_19517_19570 = state_19487__$1;
(statearr_19517_19570[(2)] = null);

(statearr_19517_19570[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (25))){
var inst_19483 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19518_19571 = state_19487__$1;
(statearr_19518_19571[(2)] = inst_19483);

(statearr_19518_19571[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (34))){
var inst_19481 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19519_19572 = state_19487__$1;
(statearr_19519_19572[(2)] = inst_19481);

(statearr_19519_19572[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (17))){
var state_19487__$1 = state_19487;
var statearr_19520_19573 = state_19487__$1;
(statearr_19520_19573[(2)] = false);

(statearr_19520_19573[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (3))){
var state_19487__$1 = state_19487;
var statearr_19521_19574 = state_19487__$1;
(statearr_19521_19574[(2)] = false);

(statearr_19521_19574[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (12))){
var inst_19485 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19487__$1,inst_19485);
} else {
if((state_val_19488 === (2))){
var inst_19389 = (state_19487[(8)]);
var inst_19394 = inst_19389.cljs$lang$protocol_mask$partition0$;
var inst_19395 = (inst_19394 & (64));
var inst_19396 = inst_19389.cljs$core$ISeq$;
var inst_19397 = (cljs.core.PROTOCOL_SENTINEL === inst_19396);
var inst_19398 = ((inst_19395) || (inst_19397));
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19398)){
var statearr_19522_19575 = state_19487__$1;
(statearr_19522_19575[(1)] = (5));

} else {
var statearr_19523_19576 = state_19487__$1;
(statearr_19523_19576[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (23))){
var inst_19446 = (state_19487[(14)]);
var inst_19452 = (inst_19446 == null);
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19452)){
var statearr_19524_19577 = state_19487__$1;
(statearr_19524_19577[(1)] = (26));

} else {
var statearr_19525_19578 = state_19487__$1;
(statearr_19525_19578[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (35))){
var inst_19472 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
if(cljs.core.truth_(inst_19472)){
var statearr_19526_19579 = state_19487__$1;
(statearr_19526_19579[(1)] = (36));

} else {
var statearr_19527_19580 = state_19487__$1;
(statearr_19527_19580[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (19))){
var inst_19414 = (state_19487[(7)]);
var inst_19434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19414);
var state_19487__$1 = state_19487;
var statearr_19528_19581 = state_19487__$1;
(statearr_19528_19581[(2)] = inst_19434);

(statearr_19528_19581[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (11))){
var inst_19414 = (state_19487[(7)]);
var inst_19418 = (inst_19414 == null);
var inst_19419 = cljs.core.not(inst_19418);
var state_19487__$1 = state_19487;
if(inst_19419){
var statearr_19529_19582 = state_19487__$1;
(statearr_19529_19582[(1)] = (13));

} else {
var statearr_19530_19583 = state_19487__$1;
(statearr_19530_19583[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (9))){
var inst_19389 = (state_19487[(8)]);
var state_19487__$1 = state_19487;
var statearr_19531_19584 = state_19487__$1;
(statearr_19531_19584[(2)] = inst_19389);

(statearr_19531_19584[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (5))){
var state_19487__$1 = state_19487;
var statearr_19532_19585 = state_19487__$1;
(statearr_19532_19585[(2)] = true);

(statearr_19532_19585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (14))){
var state_19487__$1 = state_19487;
var statearr_19533_19586 = state_19487__$1;
(statearr_19533_19586[(2)] = false);

(statearr_19533_19586[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (26))){
var inst_19447 = (state_19487[(10)]);
var inst_19454 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19447);
var state_19487__$1 = state_19487;
var statearr_19534_19587 = state_19487__$1;
(statearr_19534_19587[(2)] = inst_19454);

(statearr_19534_19587[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (16))){
var state_19487__$1 = state_19487;
var statearr_19535_19588 = state_19487__$1;
(statearr_19535_19588[(2)] = true);

(statearr_19535_19588[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (38))){
var inst_19477 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19536_19589 = state_19487__$1;
(statearr_19536_19589[(2)] = inst_19477);

(statearr_19536_19589[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (30))){
var inst_19438 = (state_19487[(9)]);
var inst_19439 = (state_19487[(13)]);
var inst_19447 = (state_19487[(10)]);
var inst_19464 = cljs.core.empty_QMARK_(inst_19438);
var inst_19465 = (inst_19439.cljs$core$IFn$_invoke$arity$1 ? inst_19439.cljs$core$IFn$_invoke$arity$1(inst_19447) : inst_19439.call(null,inst_19447));
var inst_19466 = cljs.core.not(inst_19465);
var inst_19467 = ((inst_19464) && (inst_19466));
var state_19487__$1 = state_19487;
var statearr_19537_19590 = state_19487__$1;
(statearr_19537_19590[(2)] = inst_19467);

(statearr_19537_19590[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (10))){
var inst_19389 = (state_19487[(8)]);
var inst_19410 = (state_19487[(2)]);
var inst_19411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19410,cljs.core.cst$kw$solos);
var inst_19412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19410,cljs.core.cst$kw$mutes);
var inst_19413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19410,cljs.core.cst$kw$reads);
var inst_19414 = inst_19389;
var state_19487__$1 = (function (){var statearr_19538 = state_19487;
(statearr_19538[(16)] = inst_19411);

(statearr_19538[(17)] = inst_19412);

(statearr_19538[(18)] = inst_19413);

(statearr_19538[(7)] = inst_19414);

return statearr_19538;
})();
var statearr_19539_19591 = state_19487__$1;
(statearr_19539_19591[(2)] = null);

(statearr_19539_19591[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (18))){
var inst_19429 = (state_19487[(2)]);
var state_19487__$1 = state_19487;
var statearr_19540_19592 = state_19487__$1;
(statearr_19540_19592[(2)] = inst_19429);

(statearr_19540_19592[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (37))){
var state_19487__$1 = state_19487;
var statearr_19541_19593 = state_19487__$1;
(statearr_19541_19593[(2)] = null);

(statearr_19541_19593[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19488 === (8))){
var inst_19389 = (state_19487[(8)]);
var inst_19407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19389);
var state_19487__$1 = state_19487;
var statearr_19542_19594 = state_19487__$1;
(statearr_19542_19594[(2)] = inst_19407);

(statearr_19542_19594[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__16396__auto__ = null;
var cljs$core$async$mix_$_state_machine__16396__auto____0 = (function (){
var statearr_19543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19543[(0)] = cljs$core$async$mix_$_state_machine__16396__auto__);

(statearr_19543[(1)] = (1));

return statearr_19543;
});
var cljs$core$async$mix_$_state_machine__16396__auto____1 = (function (state_19487){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19487);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19544){var ex__16399__auto__ = e19544;
var statearr_19545_19595 = state_19487;
(statearr_19545_19595[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19487[(4)]))){
var statearr_19546_19596 = state_19487;
(statearr_19546_19596[(1)] = cljs.core.first((state_19487[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19597 = state_19487;
state_19487 = G__19597;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16396__auto__ = function(state_19487){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16396__auto____1.call(this,state_19487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16396__auto____0;
cljs$core$async$mix_$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16396__auto____1;
return cljs$core$async$mix_$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19547 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19547[(6)] = c__16522__auto___19548);

return statearr_19547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19600 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19600(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19601 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19601(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19602 = (function() {
var G__19603 = null;
var G__19603__1 = (function (p){
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
var G__19603__2 = (function (p,v){
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
G__19603 = function(p,v){
switch(arguments.length){
case 1:
return G__19603__1.call(this,p);
case 2:
return G__19603__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19603.cljs$core$IFn$_invoke$arity$1 = G__19603__1;
G__19603.cljs$core$IFn$_invoke$arity$2 = G__19603__2;
return G__19603;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19599 = arguments.length;
switch (G__19599) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19602.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19602.cljs$core$IFn$_invoke$arity$2(p,v);
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
var G__19607 = arguments.length;
switch (G__19607) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19605_SHARP_){
if(cljs.core.truth_((p1__19605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19605_SHARP_.call(null,topic)))){
return p1__19605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19608 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19609){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19609 = meta19609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19610,meta19609__$1){
var self__ = this;
var _19610__$1 = this;
return (new cljs.core.async.t_cljs$core$async19608(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19609__$1));
}));

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19610){
var self__ = this;
var _19610__$1 = this;
return self__.meta19609;
}));

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19609], null);
}));

(cljs.core.async.t_cljs$core$async19608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19608");

(cljs.core.async.t_cljs$core$async19608.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19608.
 */
cljs.core.async.__GT_t_cljs$core$async19608 = (function cljs$core$async$__GT_t_cljs$core$async19608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19609){
return (new cljs.core.async.t_cljs$core$async19608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19609));
});

}

return (new cljs.core.async.t_cljs$core$async19608(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16522__auto___19729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19682){
var state_val_19683 = (state_19682[(1)]);
if((state_val_19683 === (7))){
var inst_19678 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19684_19730 = state_19682__$1;
(statearr_19684_19730[(2)] = inst_19678);

(statearr_19684_19730[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (20))){
var state_19682__$1 = state_19682;
var statearr_19685_19731 = state_19682__$1;
(statearr_19685_19731[(2)] = null);

(statearr_19685_19731[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (1))){
var state_19682__$1 = state_19682;
var statearr_19686_19732 = state_19682__$1;
(statearr_19686_19732[(2)] = null);

(statearr_19686_19732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (24))){
var inst_19661 = (state_19682[(7)]);
var inst_19670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19661);
var state_19682__$1 = state_19682;
var statearr_19687_19733 = state_19682__$1;
(statearr_19687_19733[(2)] = inst_19670);

(statearr_19687_19733[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (4))){
var inst_19613 = (state_19682[(8)]);
var inst_19613__$1 = (state_19682[(2)]);
var inst_19614 = (inst_19613__$1 == null);
var state_19682__$1 = (function (){var statearr_19688 = state_19682;
(statearr_19688[(8)] = inst_19613__$1);

return statearr_19688;
})();
if(cljs.core.truth_(inst_19614)){
var statearr_19689_19734 = state_19682__$1;
(statearr_19689_19734[(1)] = (5));

} else {
var statearr_19690_19735 = state_19682__$1;
(statearr_19690_19735[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (15))){
var inst_19655 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19691_19736 = state_19682__$1;
(statearr_19691_19736[(2)] = inst_19655);

(statearr_19691_19736[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (21))){
var inst_19675 = (state_19682[(2)]);
var state_19682__$1 = (function (){var statearr_19692 = state_19682;
(statearr_19692[(9)] = inst_19675);

return statearr_19692;
})();
var statearr_19693_19737 = state_19682__$1;
(statearr_19693_19737[(2)] = null);

(statearr_19693_19737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (13))){
var inst_19637 = (state_19682[(10)]);
var inst_19639 = cljs.core.chunked_seq_QMARK_(inst_19637);
var state_19682__$1 = state_19682;
if(inst_19639){
var statearr_19694_19738 = state_19682__$1;
(statearr_19694_19738[(1)] = (16));

} else {
var statearr_19695_19739 = state_19682__$1;
(statearr_19695_19739[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (22))){
var inst_19667 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
if(cljs.core.truth_(inst_19667)){
var statearr_19696_19740 = state_19682__$1;
(statearr_19696_19740[(1)] = (23));

} else {
var statearr_19697_19741 = state_19682__$1;
(statearr_19697_19741[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (6))){
var inst_19613 = (state_19682[(8)]);
var inst_19661 = (state_19682[(7)]);
var inst_19663 = (state_19682[(11)]);
var inst_19661__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19613) : topic_fn.call(null,inst_19613));
var inst_19662 = cljs.core.deref(mults);
var inst_19663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19662,inst_19661__$1);
var state_19682__$1 = (function (){var statearr_19698 = state_19682;
(statearr_19698[(7)] = inst_19661__$1);

(statearr_19698[(11)] = inst_19663__$1);

return statearr_19698;
})();
if(cljs.core.truth_(inst_19663__$1)){
var statearr_19699_19742 = state_19682__$1;
(statearr_19699_19742[(1)] = (19));

} else {
var statearr_19700_19743 = state_19682__$1;
(statearr_19700_19743[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (25))){
var inst_19672 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19701_19744 = state_19682__$1;
(statearr_19701_19744[(2)] = inst_19672);

(statearr_19701_19744[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (17))){
var inst_19637 = (state_19682[(10)]);
var inst_19646 = cljs.core.first(inst_19637);
var inst_19647 = cljs.core.async.muxch_STAR_(inst_19646);
var inst_19648 = cljs.core.async.close_BANG_(inst_19647);
var inst_19649 = cljs.core.next(inst_19637);
var inst_19623 = inst_19649;
var inst_19624 = null;
var inst_19625 = (0);
var inst_19626 = (0);
var state_19682__$1 = (function (){var statearr_19702 = state_19682;
(statearr_19702[(12)] = inst_19648);

(statearr_19702[(13)] = inst_19623);

(statearr_19702[(14)] = inst_19624);

(statearr_19702[(15)] = inst_19625);

(statearr_19702[(16)] = inst_19626);

return statearr_19702;
})();
var statearr_19703_19745 = state_19682__$1;
(statearr_19703_19745[(2)] = null);

(statearr_19703_19745[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (3))){
var inst_19680 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19682__$1,inst_19680);
} else {
if((state_val_19683 === (12))){
var inst_19657 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19704_19746 = state_19682__$1;
(statearr_19704_19746[(2)] = inst_19657);

(statearr_19704_19746[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (2))){
var state_19682__$1 = state_19682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19682__$1,(4),ch);
} else {
if((state_val_19683 === (23))){
var state_19682__$1 = state_19682;
var statearr_19705_19747 = state_19682__$1;
(statearr_19705_19747[(2)] = null);

(statearr_19705_19747[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (19))){
var inst_19663 = (state_19682[(11)]);
var inst_19613 = (state_19682[(8)]);
var inst_19665 = cljs.core.async.muxch_STAR_(inst_19663);
var state_19682__$1 = state_19682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19682__$1,(22),inst_19665,inst_19613);
} else {
if((state_val_19683 === (11))){
var inst_19623 = (state_19682[(13)]);
var inst_19637 = (state_19682[(10)]);
var inst_19637__$1 = cljs.core.seq(inst_19623);
var state_19682__$1 = (function (){var statearr_19706 = state_19682;
(statearr_19706[(10)] = inst_19637__$1);

return statearr_19706;
})();
if(inst_19637__$1){
var statearr_19707_19748 = state_19682__$1;
(statearr_19707_19748[(1)] = (13));

} else {
var statearr_19708_19749 = state_19682__$1;
(statearr_19708_19749[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (9))){
var inst_19659 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19709_19750 = state_19682__$1;
(statearr_19709_19750[(2)] = inst_19659);

(statearr_19709_19750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (5))){
var inst_19620 = cljs.core.deref(mults);
var inst_19621 = cljs.core.vals(inst_19620);
var inst_19622 = cljs.core.seq(inst_19621);
var inst_19623 = inst_19622;
var inst_19624 = null;
var inst_19625 = (0);
var inst_19626 = (0);
var state_19682__$1 = (function (){var statearr_19710 = state_19682;
(statearr_19710[(13)] = inst_19623);

(statearr_19710[(14)] = inst_19624);

(statearr_19710[(15)] = inst_19625);

(statearr_19710[(16)] = inst_19626);

return statearr_19710;
})();
var statearr_19711_19751 = state_19682__$1;
(statearr_19711_19751[(2)] = null);

(statearr_19711_19751[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (14))){
var state_19682__$1 = state_19682;
var statearr_19715_19752 = state_19682__$1;
(statearr_19715_19752[(2)] = null);

(statearr_19715_19752[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (16))){
var inst_19637 = (state_19682[(10)]);
var inst_19641 = cljs.core.chunk_first(inst_19637);
var inst_19642 = cljs.core.chunk_rest(inst_19637);
var inst_19643 = cljs.core.count(inst_19641);
var inst_19623 = inst_19642;
var inst_19624 = inst_19641;
var inst_19625 = inst_19643;
var inst_19626 = (0);
var state_19682__$1 = (function (){var statearr_19716 = state_19682;
(statearr_19716[(13)] = inst_19623);

(statearr_19716[(14)] = inst_19624);

(statearr_19716[(15)] = inst_19625);

(statearr_19716[(16)] = inst_19626);

return statearr_19716;
})();
var statearr_19717_19753 = state_19682__$1;
(statearr_19717_19753[(2)] = null);

(statearr_19717_19753[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (10))){
var inst_19624 = (state_19682[(14)]);
var inst_19626 = (state_19682[(16)]);
var inst_19623 = (state_19682[(13)]);
var inst_19625 = (state_19682[(15)]);
var inst_19631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19624,inst_19626);
var inst_19632 = cljs.core.async.muxch_STAR_(inst_19631);
var inst_19633 = cljs.core.async.close_BANG_(inst_19632);
var inst_19634 = (inst_19626 + (1));
var tmp19712 = inst_19624;
var tmp19713 = inst_19623;
var tmp19714 = inst_19625;
var inst_19623__$1 = tmp19713;
var inst_19624__$1 = tmp19712;
var inst_19625__$1 = tmp19714;
var inst_19626__$1 = inst_19634;
var state_19682__$1 = (function (){var statearr_19718 = state_19682;
(statearr_19718[(17)] = inst_19633);

(statearr_19718[(13)] = inst_19623__$1);

(statearr_19718[(14)] = inst_19624__$1);

(statearr_19718[(15)] = inst_19625__$1);

(statearr_19718[(16)] = inst_19626__$1);

return statearr_19718;
})();
var statearr_19719_19754 = state_19682__$1;
(statearr_19719_19754[(2)] = null);

(statearr_19719_19754[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (18))){
var inst_19652 = (state_19682[(2)]);
var state_19682__$1 = state_19682;
var statearr_19720_19755 = state_19682__$1;
(statearr_19720_19755[(2)] = inst_19652);

(statearr_19720_19755[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19683 === (8))){
var inst_19626 = (state_19682[(16)]);
var inst_19625 = (state_19682[(15)]);
var inst_19628 = (inst_19626 < inst_19625);
var inst_19629 = inst_19628;
var state_19682__$1 = state_19682;
if(cljs.core.truth_(inst_19629)){
var statearr_19721_19756 = state_19682__$1;
(statearr_19721_19756[(1)] = (10));

} else {
var statearr_19722_19757 = state_19682__$1;
(statearr_19722_19757[(1)] = (11));

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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_19723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19723[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_19723[(1)] = (1));

return statearr_19723;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_19682){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19682);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19724){var ex__16399__auto__ = e19724;
var statearr_19725_19758 = state_19682;
(statearr_19725_19758[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19682[(4)]))){
var statearr_19726_19759 = state_19682;
(statearr_19726_19759[(1)] = cljs.core.first((state_19682[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19760 = state_19682;
state_19682 = G__19760;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_19682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_19682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19727 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19727[(6)] = c__16522__auto___19729);

return statearr_19727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var G__19762 = arguments.length;
switch (G__19762) {
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
var G__19765 = arguments.length;
switch (G__19765) {
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
var G__19768 = arguments.length;
switch (G__19768) {
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
var c__16522__auto___19846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19811){
var state_val_19812 = (state_19811[(1)]);
if((state_val_19812 === (7))){
var state_19811__$1 = state_19811;
var statearr_19813_19847 = state_19811__$1;
(statearr_19813_19847[(2)] = null);

(statearr_19813_19847[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (1))){
var state_19811__$1 = state_19811;
var statearr_19814_19848 = state_19811__$1;
(statearr_19814_19848[(2)] = null);

(statearr_19814_19848[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (4))){
var inst_19772 = (state_19811[(7)]);
var inst_19771 = (state_19811[(8)]);
var inst_19774 = (inst_19772 < inst_19771);
var state_19811__$1 = state_19811;
if(cljs.core.truth_(inst_19774)){
var statearr_19815_19849 = state_19811__$1;
(statearr_19815_19849[(1)] = (6));

} else {
var statearr_19816_19850 = state_19811__$1;
(statearr_19816_19850[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (15))){
var inst_19797 = (state_19811[(9)]);
var inst_19802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19797);
var state_19811__$1 = state_19811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19811__$1,(17),out,inst_19802);
} else {
if((state_val_19812 === (13))){
var inst_19797 = (state_19811[(9)]);
var inst_19797__$1 = (state_19811[(2)]);
var inst_19798 = cljs.core.some(cljs.core.nil_QMARK_,inst_19797__$1);
var state_19811__$1 = (function (){var statearr_19817 = state_19811;
(statearr_19817[(9)] = inst_19797__$1);

return statearr_19817;
})();
if(cljs.core.truth_(inst_19798)){
var statearr_19818_19851 = state_19811__$1;
(statearr_19818_19851[(1)] = (14));

} else {
var statearr_19819_19852 = state_19811__$1;
(statearr_19819_19852[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (6))){
var state_19811__$1 = state_19811;
var statearr_19820_19853 = state_19811__$1;
(statearr_19820_19853[(2)] = null);

(statearr_19820_19853[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (17))){
var inst_19804 = (state_19811[(2)]);
var state_19811__$1 = (function (){var statearr_19822 = state_19811;
(statearr_19822[(10)] = inst_19804);

return statearr_19822;
})();
var statearr_19823_19854 = state_19811__$1;
(statearr_19823_19854[(2)] = null);

(statearr_19823_19854[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (3))){
var inst_19809 = (state_19811[(2)]);
var state_19811__$1 = state_19811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19811__$1,inst_19809);
} else {
if((state_val_19812 === (12))){
var _ = (function (){var statearr_19824 = state_19811;
(statearr_19824[(4)] = cljs.core.rest((state_19811[(4)])));

return statearr_19824;
})();
var state_19811__$1 = state_19811;
var ex19821 = (state_19811__$1[(2)]);
var statearr_19825_19855 = state_19811__$1;
(statearr_19825_19855[(5)] = ex19821);


if((ex19821 instanceof Object)){
var statearr_19826_19856 = state_19811__$1;
(statearr_19826_19856[(1)] = (11));

(statearr_19826_19856[(5)] = null);

} else {
throw ex19821;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (2))){
var inst_19770 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19771 = cnt;
var inst_19772 = (0);
var state_19811__$1 = (function (){var statearr_19827 = state_19811;
(statearr_19827[(11)] = inst_19770);

(statearr_19827[(8)] = inst_19771);

(statearr_19827[(7)] = inst_19772);

return statearr_19827;
})();
var statearr_19828_19857 = state_19811__$1;
(statearr_19828_19857[(2)] = null);

(statearr_19828_19857[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (11))){
var inst_19776 = (state_19811[(2)]);
var inst_19777 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19811__$1 = (function (){var statearr_19829 = state_19811;
(statearr_19829[(12)] = inst_19776);

return statearr_19829;
})();
var statearr_19830_19858 = state_19811__$1;
(statearr_19830_19858[(2)] = inst_19777);

(statearr_19830_19858[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (9))){
var inst_19772 = (state_19811[(7)]);
var _ = (function (){var statearr_19831 = state_19811;
(statearr_19831[(4)] = cljs.core.cons((12),(state_19811[(4)])));

return statearr_19831;
})();
var inst_19783 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19772) : chs__$1.call(null,inst_19772));
var inst_19784 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19772) : done.call(null,inst_19772));
var inst_19785 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19783,inst_19784);
var ___$1 = (function (){var statearr_19832 = state_19811;
(statearr_19832[(4)] = cljs.core.rest((state_19811[(4)])));

return statearr_19832;
})();
var state_19811__$1 = state_19811;
var statearr_19833_19859 = state_19811__$1;
(statearr_19833_19859[(2)] = inst_19785);

(statearr_19833_19859[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (5))){
var inst_19795 = (state_19811[(2)]);
var state_19811__$1 = (function (){var statearr_19834 = state_19811;
(statearr_19834[(13)] = inst_19795);

return statearr_19834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19811__$1,(13),dchan);
} else {
if((state_val_19812 === (14))){
var inst_19800 = cljs.core.async.close_BANG_(out);
var state_19811__$1 = state_19811;
var statearr_19835_19860 = state_19811__$1;
(statearr_19835_19860[(2)] = inst_19800);

(statearr_19835_19860[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (16))){
var inst_19807 = (state_19811[(2)]);
var state_19811__$1 = state_19811;
var statearr_19836_19861 = state_19811__$1;
(statearr_19836_19861[(2)] = inst_19807);

(statearr_19836_19861[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (10))){
var inst_19772 = (state_19811[(7)]);
var inst_19788 = (state_19811[(2)]);
var inst_19789 = (inst_19772 + (1));
var inst_19772__$1 = inst_19789;
var state_19811__$1 = (function (){var statearr_19837 = state_19811;
(statearr_19837[(14)] = inst_19788);

(statearr_19837[(7)] = inst_19772__$1);

return statearr_19837;
})();
var statearr_19838_19862 = state_19811__$1;
(statearr_19838_19862[(2)] = null);

(statearr_19838_19862[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19812 === (8))){
var inst_19793 = (state_19811[(2)]);
var state_19811__$1 = state_19811;
var statearr_19839_19863 = state_19811__$1;
(statearr_19839_19863[(2)] = inst_19793);

(statearr_19839_19863[(1)] = (5));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_19840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19840[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_19840[(1)] = (1));

return statearr_19840;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_19811){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19811);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19841){var ex__16399__auto__ = e19841;
var statearr_19842_19864 = state_19811;
(statearr_19842_19864[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19811[(4)]))){
var statearr_19843_19865 = state_19811;
(statearr_19843_19865[(1)] = cljs.core.first((state_19811[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19866 = state_19811;
state_19811 = G__19866;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_19811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_19811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19844 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19844[(6)] = c__16522__auto___19846);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var G__19869 = arguments.length;
switch (G__19869) {
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
var c__16522__auto___19924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19901){
var state_val_19902 = (state_19901[(1)]);
if((state_val_19902 === (7))){
var inst_19880 = (state_19901[(7)]);
var inst_19881 = (state_19901[(8)]);
var inst_19880__$1 = (state_19901[(2)]);
var inst_19881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19880__$1,(0),null);
var inst_19882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19880__$1,(1),null);
var inst_19883 = (inst_19881__$1 == null);
var state_19901__$1 = (function (){var statearr_19903 = state_19901;
(statearr_19903[(7)] = inst_19880__$1);

(statearr_19903[(8)] = inst_19881__$1);

(statearr_19903[(9)] = inst_19882);

return statearr_19903;
})();
if(cljs.core.truth_(inst_19883)){
var statearr_19904_19925 = state_19901__$1;
(statearr_19904_19925[(1)] = (8));

} else {
var statearr_19905_19926 = state_19901__$1;
(statearr_19905_19926[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (1))){
var inst_19870 = cljs.core.vec(chs);
var inst_19871 = inst_19870;
var state_19901__$1 = (function (){var statearr_19906 = state_19901;
(statearr_19906[(10)] = inst_19871);

return statearr_19906;
})();
var statearr_19907_19927 = state_19901__$1;
(statearr_19907_19927[(2)] = null);

(statearr_19907_19927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (4))){
var inst_19871 = (state_19901[(10)]);
var state_19901__$1 = state_19901;
return cljs.core.async.ioc_alts_BANG_(state_19901__$1,(7),inst_19871);
} else {
if((state_val_19902 === (6))){
var inst_19897 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19908_19928 = state_19901__$1;
(statearr_19908_19928[(2)] = inst_19897);

(statearr_19908_19928[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (3))){
var inst_19899 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19901__$1,inst_19899);
} else {
if((state_val_19902 === (2))){
var inst_19871 = (state_19901[(10)]);
var inst_19873 = cljs.core.count(inst_19871);
var inst_19874 = (inst_19873 > (0));
var state_19901__$1 = state_19901;
if(cljs.core.truth_(inst_19874)){
var statearr_19910_19929 = state_19901__$1;
(statearr_19910_19929[(1)] = (4));

} else {
var statearr_19911_19930 = state_19901__$1;
(statearr_19911_19930[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (11))){
var inst_19871 = (state_19901[(10)]);
var inst_19890 = (state_19901[(2)]);
var tmp19909 = inst_19871;
var inst_19871__$1 = tmp19909;
var state_19901__$1 = (function (){var statearr_19912 = state_19901;
(statearr_19912[(11)] = inst_19890);

(statearr_19912[(10)] = inst_19871__$1);

return statearr_19912;
})();
var statearr_19913_19931 = state_19901__$1;
(statearr_19913_19931[(2)] = null);

(statearr_19913_19931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (9))){
var inst_19881 = (state_19901[(8)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19901__$1,(11),out,inst_19881);
} else {
if((state_val_19902 === (5))){
var inst_19895 = cljs.core.async.close_BANG_(out);
var state_19901__$1 = state_19901;
var statearr_19914_19932 = state_19901__$1;
(statearr_19914_19932[(2)] = inst_19895);

(statearr_19914_19932[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (10))){
var inst_19893 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19915_19933 = state_19901__$1;
(statearr_19915_19933[(2)] = inst_19893);

(statearr_19915_19933[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19902 === (8))){
var inst_19871 = (state_19901[(10)]);
var inst_19880 = (state_19901[(7)]);
var inst_19881 = (state_19901[(8)]);
var inst_19882 = (state_19901[(9)]);
var inst_19885 = (function (){var cs = inst_19871;
var vec__19876 = inst_19880;
var v = inst_19881;
var c = inst_19882;
return (function (p1__19867_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19867_SHARP_);
});
})();
var inst_19886 = cljs.core.filterv(inst_19885,inst_19871);
var inst_19871__$1 = inst_19886;
var state_19901__$1 = (function (){var statearr_19916 = state_19901;
(statearr_19916[(10)] = inst_19871__$1);

return statearr_19916;
})();
var statearr_19917_19934 = state_19901__$1;
(statearr_19917_19934[(2)] = null);

(statearr_19917_19934[(1)] = (2));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_19918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19918[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_19918[(1)] = (1));

return statearr_19918;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_19901){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19901);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19919){var ex__16399__auto__ = e19919;
var statearr_19920_19935 = state_19901;
(statearr_19920_19935[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19901[(4)]))){
var statearr_19921_19936 = state_19901;
(statearr_19921_19936[(1)] = cljs.core.first((state_19901[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19937 = state_19901;
state_19901 = G__19937;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_19901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_19901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19922 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19922[(6)] = c__16522__auto___19924);

return statearr_19922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
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
var G__19939 = arguments.length;
switch (G__19939) {
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
var c__16522__auto___19985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_19963){
var state_val_19964 = (state_19963[(1)]);
if((state_val_19964 === (7))){
var inst_19945 = (state_19963[(7)]);
var inst_19945__$1 = (state_19963[(2)]);
var inst_19946 = (inst_19945__$1 == null);
var inst_19947 = cljs.core.not(inst_19946);
var state_19963__$1 = (function (){var statearr_19965 = state_19963;
(statearr_19965[(7)] = inst_19945__$1);

return statearr_19965;
})();
if(inst_19947){
var statearr_19966_19986 = state_19963__$1;
(statearr_19966_19986[(1)] = (8));

} else {
var statearr_19967_19987 = state_19963__$1;
(statearr_19967_19987[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (1))){
var inst_19940 = (0);
var state_19963__$1 = (function (){var statearr_19968 = state_19963;
(statearr_19968[(8)] = inst_19940);

return statearr_19968;
})();
var statearr_19969_19988 = state_19963__$1;
(statearr_19969_19988[(2)] = null);

(statearr_19969_19988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (4))){
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19963__$1,(7),ch);
} else {
if((state_val_19964 === (6))){
var inst_19958 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19970_19989 = state_19963__$1;
(statearr_19970_19989[(2)] = inst_19958);

(statearr_19970_19989[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (3))){
var inst_19960 = (state_19963[(2)]);
var inst_19961 = cljs.core.async.close_BANG_(out);
var state_19963__$1 = (function (){var statearr_19971 = state_19963;
(statearr_19971[(9)] = inst_19960);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19963__$1,inst_19961);
} else {
if((state_val_19964 === (2))){
var inst_19940 = (state_19963[(8)]);
var inst_19942 = (inst_19940 < n);
var state_19963__$1 = state_19963;
if(cljs.core.truth_(inst_19942)){
var statearr_19972_19990 = state_19963__$1;
(statearr_19972_19990[(1)] = (4));

} else {
var statearr_19973_19991 = state_19963__$1;
(statearr_19973_19991[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (11))){
var inst_19940 = (state_19963[(8)]);
var inst_19950 = (state_19963[(2)]);
var inst_19951 = (inst_19940 + (1));
var inst_19940__$1 = inst_19951;
var state_19963__$1 = (function (){var statearr_19974 = state_19963;
(statearr_19974[(10)] = inst_19950);

(statearr_19974[(8)] = inst_19940__$1);

return statearr_19974;
})();
var statearr_19975_19992 = state_19963__$1;
(statearr_19975_19992[(2)] = null);

(statearr_19975_19992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (9))){
var state_19963__$1 = state_19963;
var statearr_19976_19993 = state_19963__$1;
(statearr_19976_19993[(2)] = null);

(statearr_19976_19993[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (5))){
var state_19963__$1 = state_19963;
var statearr_19977_19994 = state_19963__$1;
(statearr_19977_19994[(2)] = null);

(statearr_19977_19994[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (10))){
var inst_19955 = (state_19963[(2)]);
var state_19963__$1 = state_19963;
var statearr_19978_19995 = state_19963__$1;
(statearr_19978_19995[(2)] = inst_19955);

(statearr_19978_19995[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19964 === (8))){
var inst_19945 = (state_19963[(7)]);
var state_19963__$1 = state_19963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19963__$1,(11),out,inst_19945);
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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_19979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19979[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_19979[(1)] = (1));

return statearr_19979;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_19963){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_19963);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e19980){var ex__16399__auto__ = e19980;
var statearr_19981_19996 = state_19963;
(statearr_19981_19996[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_19963[(4)]))){
var statearr_19982_19997 = state_19963;
(statearr_19982_19997[(1)] = cljs.core.first((state_19963[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__19998 = state_19963;
state_19963 = G__19998;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_19963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_19963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_19983 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_19983[(6)] = c__16522__auto___19985);

return statearr_19983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20000 = (function (f,ch,meta20001){
this.f = f;
this.ch = ch;
this.meta20001 = meta20001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20002,meta20001__$1){
var self__ = this;
var _20002__$1 = this;
return (new cljs.core.async.t_cljs$core$async20000(self__.f,self__.ch,meta20001__$1));
}));

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20002){
var self__ = this;
var _20002__$1 = this;
return self__.meta20001;
}));

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20003 = (function (f,ch,meta20001,_,fn1,meta20004){
this.f = f;
this.ch = ch;
this.meta20001 = meta20001;
this._ = _;
this.fn1 = fn1;
this.meta20004 = meta20004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20005,meta20004__$1){
var self__ = this;
var _20005__$1 = this;
return (new cljs.core.async.t_cljs$core$async20003(self__.f,self__.ch,self__.meta20001,self__._,self__.fn1,meta20004__$1));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20005){
var self__ = this;
var _20005__$1 = this;
return self__.meta20004;
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19999_SHARP_){
var G__20006 = (((p1__19999_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19999_SHARP_) : self__.f.call(null,p1__19999_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20006) : f1.call(null,G__20006));
});
}));

(cljs.core.async.t_cljs$core$async20003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20001,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20000], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20004], null);
}));

(cljs.core.async.t_cljs$core$async20003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20003");

(cljs.core.async.t_cljs$core$async20003.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async20003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20003.
 */
cljs.core.async.__GT_t_cljs$core$async20003 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20003(f__$1,ch__$1,meta20001__$1,___$2,fn1__$1,meta20004){
return (new cljs.core.async.t_cljs$core$async20003(f__$1,ch__$1,meta20001__$1,___$2,fn1__$1,meta20004));
});

}

return (new cljs.core.async.t_cljs$core$async20003(self__.f,self__.ch,self__.meta20001,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20007 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20007) : self__.f.call(null,G__20007));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20001], null);
}));

(cljs.core.async.t_cljs$core$async20000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20000");

(cljs.core.async.t_cljs$core$async20000.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async20000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20000.
 */
cljs.core.async.__GT_t_cljs$core$async20000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20000(f__$1,ch__$1,meta20001){
return (new cljs.core.async.t_cljs$core$async20000(f__$1,ch__$1,meta20001));
});

}

return (new cljs.core.async.t_cljs$core$async20000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20008 = (function (f,ch,meta20009){
this.f = f;
this.ch = ch;
this.meta20009 = meta20009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20010,meta20009__$1){
var self__ = this;
var _20010__$1 = this;
return (new cljs.core.async.t_cljs$core$async20008(self__.f,self__.ch,meta20009__$1));
}));

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20010){
var self__ = this;
var _20010__$1 = this;
return self__.meta20009;
}));

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20009], null);
}));

(cljs.core.async.t_cljs$core$async20008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20008");

(cljs.core.async.t_cljs$core$async20008.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async20008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20008.
 */
cljs.core.async.__GT_t_cljs$core$async20008 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20008(f__$1,ch__$1,meta20009){
return (new cljs.core.async.t_cljs$core$async20008(f__$1,ch__$1,meta20009));
});

}

return (new cljs.core.async.t_cljs$core$async20008(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20011 = (function (p,ch,meta20012){
this.p = p;
this.ch = ch;
this.meta20012 = meta20012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20013,meta20012__$1){
var self__ = this;
var _20013__$1 = this;
return (new cljs.core.async.t_cljs$core$async20011(self__.p,self__.ch,meta20012__$1));
}));

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20013){
var self__ = this;
var _20013__$1 = this;
return self__.meta20012;
}));

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20012], null);
}));

(cljs.core.async.t_cljs$core$async20011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20011");

(cljs.core.async.t_cljs$core$async20011.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async20011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20011.
 */
cljs.core.async.__GT_t_cljs$core$async20011 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20011(p__$1,ch__$1,meta20012){
return (new cljs.core.async.t_cljs$core$async20011(p__$1,ch__$1,meta20012));
});

}

return (new cljs.core.async.t_cljs$core$async20011(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20015 = arguments.length;
switch (G__20015) {
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
var c__16522__auto___20056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20036){
var state_val_20037 = (state_20036[(1)]);
if((state_val_20037 === (7))){
var inst_20032 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20038_20057 = state_20036__$1;
(statearr_20038_20057[(2)] = inst_20032);

(statearr_20038_20057[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (1))){
var state_20036__$1 = state_20036;
var statearr_20039_20058 = state_20036__$1;
(statearr_20039_20058[(2)] = null);

(statearr_20039_20058[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (4))){
var inst_20018 = (state_20036[(7)]);
var inst_20018__$1 = (state_20036[(2)]);
var inst_20019 = (inst_20018__$1 == null);
var state_20036__$1 = (function (){var statearr_20040 = state_20036;
(statearr_20040[(7)] = inst_20018__$1);

return statearr_20040;
})();
if(cljs.core.truth_(inst_20019)){
var statearr_20041_20059 = state_20036__$1;
(statearr_20041_20059[(1)] = (5));

} else {
var statearr_20042_20060 = state_20036__$1;
(statearr_20042_20060[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (6))){
var inst_20018 = (state_20036[(7)]);
var inst_20023 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20018) : p.call(null,inst_20018));
var state_20036__$1 = state_20036;
if(cljs.core.truth_(inst_20023)){
var statearr_20043_20061 = state_20036__$1;
(statearr_20043_20061[(1)] = (8));

} else {
var statearr_20044_20062 = state_20036__$1;
(statearr_20044_20062[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (3))){
var inst_20034 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20036__$1,inst_20034);
} else {
if((state_val_20037 === (2))){
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20036__$1,(4),ch);
} else {
if((state_val_20037 === (11))){
var inst_20026 = (state_20036[(2)]);
var state_20036__$1 = state_20036;
var statearr_20045_20063 = state_20036__$1;
(statearr_20045_20063[(2)] = inst_20026);

(statearr_20045_20063[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (9))){
var state_20036__$1 = state_20036;
var statearr_20046_20064 = state_20036__$1;
(statearr_20046_20064[(2)] = null);

(statearr_20046_20064[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (5))){
var inst_20021 = cljs.core.async.close_BANG_(out);
var state_20036__$1 = state_20036;
var statearr_20047_20065 = state_20036__$1;
(statearr_20047_20065[(2)] = inst_20021);

(statearr_20047_20065[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (10))){
var inst_20029 = (state_20036[(2)]);
var state_20036__$1 = (function (){var statearr_20048 = state_20036;
(statearr_20048[(8)] = inst_20029);

return statearr_20048;
})();
var statearr_20049_20066 = state_20036__$1;
(statearr_20049_20066[(2)] = null);

(statearr_20049_20066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20037 === (8))){
var inst_20018 = (state_20036[(7)]);
var state_20036__$1 = state_20036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20036__$1,(11),out,inst_20018);
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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_20050 = [null,null,null,null,null,null,null,null,null];
(statearr_20050[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_20050[(1)] = (1));

return statearr_20050;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_20036){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20036);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20051){var ex__16399__auto__ = e20051;
var statearr_20052_20067 = state_20036;
(statearr_20052_20067[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20036[(4)]))){
var statearr_20053_20068 = state_20036;
(statearr_20053_20068[(1)] = cljs.core.first((state_20036[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20069 = state_20036;
state_20036 = G__20069;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_20036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_20036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20054 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20054[(6)] = c__16522__auto___20056);

return statearr_20054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20071 = arguments.length;
switch (G__20071) {
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
var c__16522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20134){
var state_val_20135 = (state_20134[(1)]);
if((state_val_20135 === (7))){
var inst_20130 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20136_20175 = state_20134__$1;
(statearr_20136_20175[(2)] = inst_20130);

(statearr_20136_20175[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (20))){
var inst_20100 = (state_20134[(7)]);
var inst_20111 = (state_20134[(2)]);
var inst_20112 = cljs.core.next(inst_20100);
var inst_20086 = inst_20112;
var inst_20087 = null;
var inst_20088 = (0);
var inst_20089 = (0);
var state_20134__$1 = (function (){var statearr_20137 = state_20134;
(statearr_20137[(8)] = inst_20111);

(statearr_20137[(9)] = inst_20086);

(statearr_20137[(10)] = inst_20087);

(statearr_20137[(11)] = inst_20088);

(statearr_20137[(12)] = inst_20089);

return statearr_20137;
})();
var statearr_20138_20176 = state_20134__$1;
(statearr_20138_20176[(2)] = null);

(statearr_20138_20176[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (1))){
var state_20134__$1 = state_20134;
var statearr_20139_20177 = state_20134__$1;
(statearr_20139_20177[(2)] = null);

(statearr_20139_20177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (4))){
var inst_20075 = (state_20134[(13)]);
var inst_20075__$1 = (state_20134[(2)]);
var inst_20076 = (inst_20075__$1 == null);
var state_20134__$1 = (function (){var statearr_20140 = state_20134;
(statearr_20140[(13)] = inst_20075__$1);

return statearr_20140;
})();
if(cljs.core.truth_(inst_20076)){
var statearr_20141_20178 = state_20134__$1;
(statearr_20141_20178[(1)] = (5));

} else {
var statearr_20142_20179 = state_20134__$1;
(statearr_20142_20179[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (15))){
var state_20134__$1 = state_20134;
var statearr_20146_20180 = state_20134__$1;
(statearr_20146_20180[(2)] = null);

(statearr_20146_20180[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (21))){
var state_20134__$1 = state_20134;
var statearr_20147_20181 = state_20134__$1;
(statearr_20147_20181[(2)] = null);

(statearr_20147_20181[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (13))){
var inst_20089 = (state_20134[(12)]);
var inst_20086 = (state_20134[(9)]);
var inst_20087 = (state_20134[(10)]);
var inst_20088 = (state_20134[(11)]);
var inst_20096 = (state_20134[(2)]);
var inst_20097 = (inst_20089 + (1));
var tmp20143 = inst_20088;
var tmp20144 = inst_20086;
var tmp20145 = inst_20087;
var inst_20086__$1 = tmp20144;
var inst_20087__$1 = tmp20145;
var inst_20088__$1 = tmp20143;
var inst_20089__$1 = inst_20097;
var state_20134__$1 = (function (){var statearr_20148 = state_20134;
(statearr_20148[(14)] = inst_20096);

(statearr_20148[(9)] = inst_20086__$1);

(statearr_20148[(10)] = inst_20087__$1);

(statearr_20148[(11)] = inst_20088__$1);

(statearr_20148[(12)] = inst_20089__$1);

return statearr_20148;
})();
var statearr_20149_20182 = state_20134__$1;
(statearr_20149_20182[(2)] = null);

(statearr_20149_20182[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (22))){
var state_20134__$1 = state_20134;
var statearr_20150_20183 = state_20134__$1;
(statearr_20150_20183[(2)] = null);

(statearr_20150_20183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (6))){
var inst_20075 = (state_20134[(13)]);
var inst_20084 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20075) : f.call(null,inst_20075));
var inst_20085 = cljs.core.seq(inst_20084);
var inst_20086 = inst_20085;
var inst_20087 = null;
var inst_20088 = (0);
var inst_20089 = (0);
var state_20134__$1 = (function (){var statearr_20151 = state_20134;
(statearr_20151[(9)] = inst_20086);

(statearr_20151[(10)] = inst_20087);

(statearr_20151[(11)] = inst_20088);

(statearr_20151[(12)] = inst_20089);

return statearr_20151;
})();
var statearr_20152_20184 = state_20134__$1;
(statearr_20152_20184[(2)] = null);

(statearr_20152_20184[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (17))){
var inst_20100 = (state_20134[(7)]);
var inst_20104 = cljs.core.chunk_first(inst_20100);
var inst_20105 = cljs.core.chunk_rest(inst_20100);
var inst_20106 = cljs.core.count(inst_20104);
var inst_20086 = inst_20105;
var inst_20087 = inst_20104;
var inst_20088 = inst_20106;
var inst_20089 = (0);
var state_20134__$1 = (function (){var statearr_20153 = state_20134;
(statearr_20153[(9)] = inst_20086);

(statearr_20153[(10)] = inst_20087);

(statearr_20153[(11)] = inst_20088);

(statearr_20153[(12)] = inst_20089);

return statearr_20153;
})();
var statearr_20154_20185 = state_20134__$1;
(statearr_20154_20185[(2)] = null);

(statearr_20154_20185[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (3))){
var inst_20132 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20134__$1,inst_20132);
} else {
if((state_val_20135 === (12))){
var inst_20120 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20155_20186 = state_20134__$1;
(statearr_20155_20186[(2)] = inst_20120);

(statearr_20155_20186[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (2))){
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20134__$1,(4),in$);
} else {
if((state_val_20135 === (23))){
var inst_20128 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20156_20187 = state_20134__$1;
(statearr_20156_20187[(2)] = inst_20128);

(statearr_20156_20187[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (19))){
var inst_20115 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20157_20188 = state_20134__$1;
(statearr_20157_20188[(2)] = inst_20115);

(statearr_20157_20188[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (11))){
var inst_20086 = (state_20134[(9)]);
var inst_20100 = (state_20134[(7)]);
var inst_20100__$1 = cljs.core.seq(inst_20086);
var state_20134__$1 = (function (){var statearr_20158 = state_20134;
(statearr_20158[(7)] = inst_20100__$1);

return statearr_20158;
})();
if(inst_20100__$1){
var statearr_20159_20189 = state_20134__$1;
(statearr_20159_20189[(1)] = (14));

} else {
var statearr_20160_20190 = state_20134__$1;
(statearr_20160_20190[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (9))){
var inst_20122 = (state_20134[(2)]);
var inst_20123 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20134__$1 = (function (){var statearr_20161 = state_20134;
(statearr_20161[(15)] = inst_20122);

return statearr_20161;
})();
if(cljs.core.truth_(inst_20123)){
var statearr_20162_20191 = state_20134__$1;
(statearr_20162_20191[(1)] = (21));

} else {
var statearr_20163_20192 = state_20134__$1;
(statearr_20163_20192[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (5))){
var inst_20078 = cljs.core.async.close_BANG_(out);
var state_20134__$1 = state_20134;
var statearr_20164_20193 = state_20134__$1;
(statearr_20164_20193[(2)] = inst_20078);

(statearr_20164_20193[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (14))){
var inst_20100 = (state_20134[(7)]);
var inst_20102 = cljs.core.chunked_seq_QMARK_(inst_20100);
var state_20134__$1 = state_20134;
if(inst_20102){
var statearr_20165_20194 = state_20134__$1;
(statearr_20165_20194[(1)] = (17));

} else {
var statearr_20166_20195 = state_20134__$1;
(statearr_20166_20195[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (16))){
var inst_20118 = (state_20134[(2)]);
var state_20134__$1 = state_20134;
var statearr_20167_20196 = state_20134__$1;
(statearr_20167_20196[(2)] = inst_20118);

(statearr_20167_20196[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20135 === (10))){
var inst_20087 = (state_20134[(10)]);
var inst_20089 = (state_20134[(12)]);
var inst_20094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20087,inst_20089);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20134__$1,(13),out,inst_20094);
} else {
if((state_val_20135 === (18))){
var inst_20100 = (state_20134[(7)]);
var inst_20109 = cljs.core.first(inst_20100);
var state_20134__$1 = state_20134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20134__$1,(20),out,inst_20109);
} else {
if((state_val_20135 === (8))){
var inst_20089 = (state_20134[(12)]);
var inst_20088 = (state_20134[(11)]);
var inst_20091 = (inst_20089 < inst_20088);
var inst_20092 = inst_20091;
var state_20134__$1 = state_20134;
if(cljs.core.truth_(inst_20092)){
var statearr_20168_20197 = state_20134__$1;
(statearr_20168_20197[(1)] = (10));

} else {
var statearr_20169_20198 = state_20134__$1;
(statearr_20169_20198[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____0 = (function (){
var statearr_20170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20170[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__);

(statearr_20170[(1)] = (1));

return statearr_20170;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____1 = (function (state_20134){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20134);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20171){var ex__16399__auto__ = e20171;
var statearr_20172_20199 = state_20134;
(statearr_20172_20199[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20134[(4)]))){
var statearr_20173_20200 = state_20134;
(statearr_20173_20200[(1)] = cljs.core.first((state_20134[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20201 = state_20134;
state_20134 = G__20201;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__ = function(state_20134){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____1.call(this,state_20134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20174 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20174[(6)] = c__16522__auto__);

return statearr_20174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));

return c__16522__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20203 = arguments.length;
switch (G__20203) {
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
var G__20206 = arguments.length;
switch (G__20206) {
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
var G__20209 = arguments.length;
switch (G__20209) {
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
var c__16522__auto___20257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20233){
var state_val_20234 = (state_20233[(1)]);
if((state_val_20234 === (7))){
var inst_20228 = (state_20233[(2)]);
var state_20233__$1 = state_20233;
var statearr_20235_20258 = state_20233__$1;
(statearr_20235_20258[(2)] = inst_20228);

(statearr_20235_20258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (1))){
var inst_20210 = null;
var state_20233__$1 = (function (){var statearr_20236 = state_20233;
(statearr_20236[(7)] = inst_20210);

return statearr_20236;
})();
var statearr_20237_20259 = state_20233__$1;
(statearr_20237_20259[(2)] = null);

(statearr_20237_20259[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (4))){
var inst_20213 = (state_20233[(8)]);
var inst_20213__$1 = (state_20233[(2)]);
var inst_20214 = (inst_20213__$1 == null);
var inst_20215 = cljs.core.not(inst_20214);
var state_20233__$1 = (function (){var statearr_20238 = state_20233;
(statearr_20238[(8)] = inst_20213__$1);

return statearr_20238;
})();
if(inst_20215){
var statearr_20239_20260 = state_20233__$1;
(statearr_20239_20260[(1)] = (5));

} else {
var statearr_20240_20261 = state_20233__$1;
(statearr_20240_20261[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (6))){
var state_20233__$1 = state_20233;
var statearr_20241_20262 = state_20233__$1;
(statearr_20241_20262[(2)] = null);

(statearr_20241_20262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (3))){
var inst_20230 = (state_20233[(2)]);
var inst_20231 = cljs.core.async.close_BANG_(out);
var state_20233__$1 = (function (){var statearr_20242 = state_20233;
(statearr_20242[(9)] = inst_20230);

return statearr_20242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20233__$1,inst_20231);
} else {
if((state_val_20234 === (2))){
var state_20233__$1 = state_20233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20233__$1,(4),ch);
} else {
if((state_val_20234 === (11))){
var inst_20213 = (state_20233[(8)]);
var inst_20222 = (state_20233[(2)]);
var inst_20210 = inst_20213;
var state_20233__$1 = (function (){var statearr_20243 = state_20233;
(statearr_20243[(10)] = inst_20222);

(statearr_20243[(7)] = inst_20210);

return statearr_20243;
})();
var statearr_20244_20263 = state_20233__$1;
(statearr_20244_20263[(2)] = null);

(statearr_20244_20263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (9))){
var inst_20213 = (state_20233[(8)]);
var state_20233__$1 = state_20233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20233__$1,(11),out,inst_20213);
} else {
if((state_val_20234 === (5))){
var inst_20213 = (state_20233[(8)]);
var inst_20210 = (state_20233[(7)]);
var inst_20217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20213,inst_20210);
var state_20233__$1 = state_20233;
if(inst_20217){
var statearr_20246_20264 = state_20233__$1;
(statearr_20246_20264[(1)] = (8));

} else {
var statearr_20247_20265 = state_20233__$1;
(statearr_20247_20265[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (10))){
var inst_20225 = (state_20233[(2)]);
var state_20233__$1 = state_20233;
var statearr_20248_20266 = state_20233__$1;
(statearr_20248_20266[(2)] = inst_20225);

(statearr_20248_20266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20234 === (8))){
var inst_20210 = (state_20233[(7)]);
var tmp20245 = inst_20210;
var inst_20210__$1 = tmp20245;
var state_20233__$1 = (function (){var statearr_20249 = state_20233;
(statearr_20249[(7)] = inst_20210__$1);

return statearr_20249;
})();
var statearr_20250_20267 = state_20233__$1;
(statearr_20250_20267[(2)] = null);

(statearr_20250_20267[(1)] = (2));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_20251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20251[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_20251[(1)] = (1));

return statearr_20251;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_20233){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20233);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20252){var ex__16399__auto__ = e20252;
var statearr_20253_20268 = state_20233;
(statearr_20253_20268[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20233[(4)]))){
var statearr_20254_20269 = state_20233;
(statearr_20254_20269[(1)] = cljs.core.first((state_20233[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20270 = state_20233;
state_20233 = G__20270;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_20233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_20233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20255 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20255[(6)] = c__16522__auto___20257);

return statearr_20255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20272 = arguments.length;
switch (G__20272) {
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
var c__16522__auto___20339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20310){
var state_val_20311 = (state_20310[(1)]);
if((state_val_20311 === (7))){
var inst_20306 = (state_20310[(2)]);
var state_20310__$1 = state_20310;
var statearr_20312_20340 = state_20310__$1;
(statearr_20312_20340[(2)] = inst_20306);

(statearr_20312_20340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (1))){
var inst_20273 = (new Array(n));
var inst_20274 = inst_20273;
var inst_20275 = (0);
var state_20310__$1 = (function (){var statearr_20313 = state_20310;
(statearr_20313[(7)] = inst_20274);

(statearr_20313[(8)] = inst_20275);

return statearr_20313;
})();
var statearr_20314_20341 = state_20310__$1;
(statearr_20314_20341[(2)] = null);

(statearr_20314_20341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (4))){
var inst_20278 = (state_20310[(9)]);
var inst_20278__$1 = (state_20310[(2)]);
var inst_20279 = (inst_20278__$1 == null);
var inst_20280 = cljs.core.not(inst_20279);
var state_20310__$1 = (function (){var statearr_20315 = state_20310;
(statearr_20315[(9)] = inst_20278__$1);

return statearr_20315;
})();
if(inst_20280){
var statearr_20316_20342 = state_20310__$1;
(statearr_20316_20342[(1)] = (5));

} else {
var statearr_20317_20343 = state_20310__$1;
(statearr_20317_20343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (15))){
var inst_20300 = (state_20310[(2)]);
var state_20310__$1 = state_20310;
var statearr_20318_20344 = state_20310__$1;
(statearr_20318_20344[(2)] = inst_20300);

(statearr_20318_20344[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (13))){
var state_20310__$1 = state_20310;
var statearr_20319_20345 = state_20310__$1;
(statearr_20319_20345[(2)] = null);

(statearr_20319_20345[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (6))){
var inst_20275 = (state_20310[(8)]);
var inst_20296 = (inst_20275 > (0));
var state_20310__$1 = state_20310;
if(cljs.core.truth_(inst_20296)){
var statearr_20320_20346 = state_20310__$1;
(statearr_20320_20346[(1)] = (12));

} else {
var statearr_20321_20347 = state_20310__$1;
(statearr_20321_20347[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (3))){
var inst_20308 = (state_20310[(2)]);
var state_20310__$1 = state_20310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20310__$1,inst_20308);
} else {
if((state_val_20311 === (12))){
var inst_20274 = (state_20310[(7)]);
var inst_20298 = cljs.core.vec(inst_20274);
var state_20310__$1 = state_20310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20310__$1,(15),out,inst_20298);
} else {
if((state_val_20311 === (2))){
var state_20310__$1 = state_20310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20310__$1,(4),ch);
} else {
if((state_val_20311 === (11))){
var inst_20290 = (state_20310[(2)]);
var inst_20291 = (new Array(n));
var inst_20274 = inst_20291;
var inst_20275 = (0);
var state_20310__$1 = (function (){var statearr_20322 = state_20310;
(statearr_20322[(10)] = inst_20290);

(statearr_20322[(7)] = inst_20274);

(statearr_20322[(8)] = inst_20275);

return statearr_20322;
})();
var statearr_20323_20348 = state_20310__$1;
(statearr_20323_20348[(2)] = null);

(statearr_20323_20348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (9))){
var inst_20274 = (state_20310[(7)]);
var inst_20288 = cljs.core.vec(inst_20274);
var state_20310__$1 = state_20310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20310__$1,(11),out,inst_20288);
} else {
if((state_val_20311 === (5))){
var inst_20274 = (state_20310[(7)]);
var inst_20275 = (state_20310[(8)]);
var inst_20278 = (state_20310[(9)]);
var inst_20283 = (state_20310[(11)]);
var inst_20282 = (inst_20274[inst_20275] = inst_20278);
var inst_20283__$1 = (inst_20275 + (1));
var inst_20284 = (inst_20283__$1 < n);
var state_20310__$1 = (function (){var statearr_20324 = state_20310;
(statearr_20324[(12)] = inst_20282);

(statearr_20324[(11)] = inst_20283__$1);

return statearr_20324;
})();
if(cljs.core.truth_(inst_20284)){
var statearr_20325_20349 = state_20310__$1;
(statearr_20325_20349[(1)] = (8));

} else {
var statearr_20326_20350 = state_20310__$1;
(statearr_20326_20350[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (14))){
var inst_20303 = (state_20310[(2)]);
var inst_20304 = cljs.core.async.close_BANG_(out);
var state_20310__$1 = (function (){var statearr_20328 = state_20310;
(statearr_20328[(13)] = inst_20303);

return statearr_20328;
})();
var statearr_20329_20351 = state_20310__$1;
(statearr_20329_20351[(2)] = inst_20304);

(statearr_20329_20351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (10))){
var inst_20294 = (state_20310[(2)]);
var state_20310__$1 = state_20310;
var statearr_20330_20352 = state_20310__$1;
(statearr_20330_20352[(2)] = inst_20294);

(statearr_20330_20352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20311 === (8))){
var inst_20274 = (state_20310[(7)]);
var inst_20283 = (state_20310[(11)]);
var tmp20327 = inst_20274;
var inst_20274__$1 = tmp20327;
var inst_20275 = inst_20283;
var state_20310__$1 = (function (){var statearr_20331 = state_20310;
(statearr_20331[(7)] = inst_20274__$1);

(statearr_20331[(8)] = inst_20275);

return statearr_20331;
})();
var statearr_20332_20353 = state_20310__$1;
(statearr_20332_20353[(2)] = null);

(statearr_20332_20353[(1)] = (2));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_20333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20333[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_20333[(1)] = (1));

return statearr_20333;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_20310){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20310);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20334){var ex__16399__auto__ = e20334;
var statearr_20335_20354 = state_20310;
(statearr_20335_20354[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20310[(4)]))){
var statearr_20336_20355 = state_20310;
(statearr_20336_20355[(1)] = cljs.core.first((state_20310[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20356 = state_20310;
state_20310 = G__20356;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_20310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_20310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20337 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20337[(6)] = c__16522__auto___20339);

return statearr_20337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20358 = arguments.length;
switch (G__20358) {
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
var c__16522__auto___20429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16523__auto__ = (function (){var switch__16395__auto__ = (function (state_20400){
var state_val_20401 = (state_20400[(1)]);
if((state_val_20401 === (7))){
var inst_20396 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20402_20430 = state_20400__$1;
(statearr_20402_20430[(2)] = inst_20396);

(statearr_20402_20430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (1))){
var inst_20359 = [];
var inst_20360 = inst_20359;
var inst_20361 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20400__$1 = (function (){var statearr_20403 = state_20400;
(statearr_20403[(7)] = inst_20360);

(statearr_20403[(8)] = inst_20361);

return statearr_20403;
})();
var statearr_20404_20431 = state_20400__$1;
(statearr_20404_20431[(2)] = null);

(statearr_20404_20431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (4))){
var inst_20364 = (state_20400[(9)]);
var inst_20364__$1 = (state_20400[(2)]);
var inst_20365 = (inst_20364__$1 == null);
var inst_20366 = cljs.core.not(inst_20365);
var state_20400__$1 = (function (){var statearr_20405 = state_20400;
(statearr_20405[(9)] = inst_20364__$1);

return statearr_20405;
})();
if(inst_20366){
var statearr_20406_20432 = state_20400__$1;
(statearr_20406_20432[(1)] = (5));

} else {
var statearr_20407_20433 = state_20400__$1;
(statearr_20407_20433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (15))){
var inst_20390 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20408_20434 = state_20400__$1;
(statearr_20408_20434[(2)] = inst_20390);

(statearr_20408_20434[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (13))){
var state_20400__$1 = state_20400;
var statearr_20409_20435 = state_20400__$1;
(statearr_20409_20435[(2)] = null);

(statearr_20409_20435[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (6))){
var inst_20360 = (state_20400[(7)]);
var inst_20385 = inst_20360.length;
var inst_20386 = (inst_20385 > (0));
var state_20400__$1 = state_20400;
if(cljs.core.truth_(inst_20386)){
var statearr_20410_20436 = state_20400__$1;
(statearr_20410_20436[(1)] = (12));

} else {
var statearr_20411_20437 = state_20400__$1;
(statearr_20411_20437[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (3))){
var inst_20398 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20400__$1,inst_20398);
} else {
if((state_val_20401 === (12))){
var inst_20360 = (state_20400[(7)]);
var inst_20388 = cljs.core.vec(inst_20360);
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20400__$1,(15),out,inst_20388);
} else {
if((state_val_20401 === (2))){
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20400__$1,(4),ch);
} else {
if((state_val_20401 === (11))){
var inst_20364 = (state_20400[(9)]);
var inst_20368 = (state_20400[(10)]);
var inst_20378 = (state_20400[(2)]);
var inst_20379 = [];
var inst_20380 = inst_20379.push(inst_20364);
var inst_20360 = inst_20379;
var inst_20361 = inst_20368;
var state_20400__$1 = (function (){var statearr_20412 = state_20400;
(statearr_20412[(11)] = inst_20378);

(statearr_20412[(12)] = inst_20380);

(statearr_20412[(7)] = inst_20360);

(statearr_20412[(8)] = inst_20361);

return statearr_20412;
})();
var statearr_20413_20438 = state_20400__$1;
(statearr_20413_20438[(2)] = null);

(statearr_20413_20438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (9))){
var inst_20360 = (state_20400[(7)]);
var inst_20376 = cljs.core.vec(inst_20360);
var state_20400__$1 = state_20400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20400__$1,(11),out,inst_20376);
} else {
if((state_val_20401 === (5))){
var inst_20364 = (state_20400[(9)]);
var inst_20368 = (state_20400[(10)]);
var inst_20361 = (state_20400[(8)]);
var inst_20368__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20364) : f.call(null,inst_20364));
var inst_20369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20368__$1,inst_20361);
var inst_20370 = cljs.core.keyword_identical_QMARK_(inst_20361,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20371 = ((inst_20369) || (inst_20370));
var state_20400__$1 = (function (){var statearr_20414 = state_20400;
(statearr_20414[(10)] = inst_20368__$1);

return statearr_20414;
})();
if(cljs.core.truth_(inst_20371)){
var statearr_20415_20439 = state_20400__$1;
(statearr_20415_20439[(1)] = (8));

} else {
var statearr_20416_20440 = state_20400__$1;
(statearr_20416_20440[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (14))){
var inst_20393 = (state_20400[(2)]);
var inst_20394 = cljs.core.async.close_BANG_(out);
var state_20400__$1 = (function (){var statearr_20418 = state_20400;
(statearr_20418[(13)] = inst_20393);

return statearr_20418;
})();
var statearr_20419_20441 = state_20400__$1;
(statearr_20419_20441[(2)] = inst_20394);

(statearr_20419_20441[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (10))){
var inst_20383 = (state_20400[(2)]);
var state_20400__$1 = state_20400;
var statearr_20420_20442 = state_20400__$1;
(statearr_20420_20442[(2)] = inst_20383);

(statearr_20420_20442[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20401 === (8))){
var inst_20360 = (state_20400[(7)]);
var inst_20364 = (state_20400[(9)]);
var inst_20368 = (state_20400[(10)]);
var inst_20373 = inst_20360.push(inst_20364);
var tmp20417 = inst_20360;
var inst_20360__$1 = tmp20417;
var inst_20361 = inst_20368;
var state_20400__$1 = (function (){var statearr_20421 = state_20400;
(statearr_20421[(14)] = inst_20373);

(statearr_20421[(7)] = inst_20360__$1);

(statearr_20421[(8)] = inst_20361);

return statearr_20421;
})();
var statearr_20422_20443 = state_20400__$1;
(statearr_20422_20443[(2)] = null);

(statearr_20422_20443[(1)] = (2));


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
var cljs$core$async$state_machine__16396__auto__ = null;
var cljs$core$async$state_machine__16396__auto____0 = (function (){
var statearr_20423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20423[(0)] = cljs$core$async$state_machine__16396__auto__);

(statearr_20423[(1)] = (1));

return statearr_20423;
});
var cljs$core$async$state_machine__16396__auto____1 = (function (state_20400){
while(true){
var ret_value__16397__auto__ = (function (){try{while(true){
var result__16398__auto__ = switch__16395__auto__(state_20400);
if(cljs.core.keyword_identical_QMARK_(result__16398__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16398__auto__;
}
break;
}
}catch (e20424){var ex__16399__auto__ = e20424;
var statearr_20425_20444 = state_20400;
(statearr_20425_20444[(2)] = ex__16399__auto__);


if(cljs.core.seq((state_20400[(4)]))){
var statearr_20426_20445 = state_20400;
(statearr_20426_20445[(1)] = cljs.core.first((state_20400[(4)])));

} else {
throw ex__16399__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16397__auto__,cljs.core.cst$kw$recur)){
var G__20446 = state_20400;
state_20400 = G__20446;
continue;
} else {
return ret_value__16397__auto__;
}
break;
}
});
cljs$core$async$state_machine__16396__auto__ = function(state_20400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16396__auto____1.call(this,state_20400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16396__auto____0;
cljs$core$async$state_machine__16396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16396__auto____1;
return cljs$core$async$state_machine__16396__auto__;
})()
})();
var state__16524__auto__ = (function (){var statearr_20427 = (f__16523__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16523__auto__.cljs$core$IFn$_invoke$arity$0() : f__16523__auto__.call(null));
(statearr_20427[(6)] = c__16522__auto___20429);

return statearr_20427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16524__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

