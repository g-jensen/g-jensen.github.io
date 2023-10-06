// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.apic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.wire.flashc');
c3kit.wire.apic.response_schema = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null),cljs.core.cst$kw$flash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ignore], null)], null),cljs.core.cst$kw$payload,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ignore], null),cljs.core.cst$kw$uri,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$version,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null)], null);
c3kit.wire.apic.conform_response = (function c3kit$wire$apic$conform_response(response){
var response__$1 = c3kit.apron.schema.conform(c3kit.wire.apic.response_schema,response);
if(c3kit.apron.schema.error_QMARK_(response__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.apic",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to conform response."], null);
}),null)),null,(28),null);

var seq__20193_20197 = cljs.core.seq(c3kit.apron.schema.messages(response__$1));
var chunk__20194_20198 = null;
var count__20195_20199 = (0);
var i__20196_20200 = (0);
while(true){
if((i__20196_20200 < count__20195_20199)){
var message_20201 = chunk__20194_20198.cljs$core$IIndexed$_nth$arity$2(null,i__20196_20200);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.apic",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (seq__20193_20197,chunk__20194_20198,count__20195_20199,i__20196_20200,message_20201,response__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_20201], null);
});})(seq__20193_20197,chunk__20194_20198,count__20195_20199,i__20196_20200,message_20201,response__$1))
,null)),null,(31),null);


var G__20202 = seq__20193_20197;
var G__20203 = chunk__20194_20198;
var G__20204 = count__20195_20199;
var G__20205 = (i__20196_20200 + (1));
seq__20193_20197 = G__20202;
chunk__20194_20198 = G__20203;
count__20195_20199 = G__20204;
i__20196_20200 = G__20205;
continue;
} else {
var temp__5804__auto___20206 = cljs.core.seq(seq__20193_20197);
if(temp__5804__auto___20206){
var seq__20193_20207__$1 = temp__5804__auto___20206;
if(cljs.core.chunked_seq_QMARK_(seq__20193_20207__$1)){
var c__4556__auto___20208 = cljs.core.chunk_first(seq__20193_20207__$1);
var G__20209 = cljs.core.chunk_rest(seq__20193_20207__$1);
var G__20210 = c__4556__auto___20208;
var G__20211 = cljs.core.count(c__4556__auto___20208);
var G__20212 = (0);
seq__20193_20197 = G__20209;
chunk__20194_20198 = G__20210;
count__20195_20199 = G__20211;
i__20196_20200 = G__20212;
continue;
} else {
var message_20213 = cljs.core.first(seq__20193_20207__$1);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.wire.apic",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (seq__20193_20197,chunk__20194_20198,count__20195_20199,i__20196_20200,message_20213,seq__20193_20207__$1,temp__5804__auto___20206,response__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_20213], null);
});})(seq__20193_20197,chunk__20194_20198,count__20195_20199,i__20196_20200,message_20213,seq__20193_20207__$1,temp__5804__auto___20206,response__$1))
,null)),null,(32),null);


var G__20214 = cljs.core.next(seq__20193_20207__$1);
var G__20215 = null;
var G__20216 = (0);
var G__20217 = (0);
seq__20193_20197 = G__20214;
chunk__20194_20198 = G__20215;
count__20195_20199 = G__20216;
i__20196_20200 = G__20217;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$status,cljs.core.cst$kw$error], null);
} else {
return response__$1;
}
});
c3kit.wire.apic.flash_success = (function c3kit$wire$apic$flash_success(response,msg){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,cljs.core.cst$kw$flash,c3kit.apron.corec.conjv,c3kit.wire.flashc.success(msg));
});
c3kit.wire.apic.flash_warn = (function c3kit$wire$apic$flash_warn(response,msg){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,cljs.core.cst$kw$flash,c3kit.apron.corec.conjv,c3kit.wire.flashc.warn(msg));
});
c3kit.wire.apic.flash_error = (function c3kit$wire$apic$flash_error(response,msg){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,cljs.core.cst$kw$flash,c3kit.apron.corec.conjv,c3kit.wire.flashc.error(msg));
});
c3kit.wire.apic.flash_level = (function c3kit$wire$apic$flash_level(response,n){
return c3kit.wire.flashc.level(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$flash.cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.flash_text = (function c3kit$wire$apic$flash_text(response,n){
return c3kit.wire.flashc.text(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$flash.cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.first_flash = (function c3kit$wire$apic$first_flash(response){
return cljs.core.first(cljs.core.cst$kw$flash.cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.first_flash_text = (function c3kit$wire$apic$first_flash_text(response){
return c3kit.wire.flashc.text(c3kit.wire.apic.first_flash(response));
});
/**
 * The request was processed without a hitch.
 */
c3kit.wire.apic.ok = (function c3kit$wire$apic$ok(var_args){
var G__20219 = arguments.length;
switch (G__20219) {
case 0:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$status,cljs.core.cst$kw$ok], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,payload,cljs.core.cst$kw$status,cljs.core.cst$kw$ok], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_success(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1(payload),msg);
}));

(c3kit.wire.apic.ok.cljs$lang$maxFixedArity = 2);

/**
 * The request failed for anticipated reasons.
 */
c3kit.wire.apic.fail = (function c3kit$wire$apic$fail(var_args){
var G__20222 = arguments.length;
switch (G__20222) {
case 0:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$status,cljs.core.cst$kw$fail], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,payload,cljs.core.cst$kw$status,cljs.core.cst$kw$fail], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1(payload),msg);
}));

(c3kit.wire.apic.fail.cljs$lang$maxFixedArity = 2);

/**
 * An unexpected exception was thrown while processing the request.
 */
c3kit.wire.apic.error = (function c3kit$wire$apic$error(var_args){
var G__20225 = arguments.length;
switch (G__20225) {
case 0:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$status,cljs.core.cst$kw$error], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payload,payload,cljs.core.cst$kw$status,cljs.core.cst$kw$error], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1(payload),msg);
}));

(c3kit.wire.apic.error.cljs$lang$maxFixedArity = 2);

c3kit.wire.apic.redirect = (function c3kit$wire$apic$redirect(var_args){
var G__20228 = arguments.length;
switch (G__20228) {
case 1:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$redirect,cljs.core.cst$kw$uri,uri], null);
}));

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2 = (function (uri,msg){
return c3kit.wire.apic.flash_warn(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1(uri),msg);
}));

(c3kit.wire.apic.redirect.cljs$lang$maxFixedArity = 2);

c3kit.wire.apic.status = (function c3kit$wire$apic$status(response){
return cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
});
c3kit.wire.apic.error_QMARK_ = (function c3kit$wire$apic$error_QMARK_(response){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.ok_QMARK_ = (function c3kit$wire$apic$ok_QMARK_(response){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ok,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.fail_QMARK_ = (function c3kit$wire$apic$fail_QMARK_(response){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fail,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.redirect_QMARK_ = (function c3kit$wire$apic$redirect_QMARK_(response){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redirect,cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.payload = (function c3kit$wire$apic$payload(response){
return cljs.core.cst$kw$payload.cljs$core$IFn$_invoke$arity$1(response);
});
