// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_24829 = (function (obj){
var x__4428__auto__ = (((obj == null))?null:obj);
var m__4429__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4429__auto__.call(null,obj));
} else {
var m__4426__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4426__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_24829(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__24830 = millis;
if((G__24830 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__24830);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4529__auto__ = (function cljs_time$coerce$from_string_$_iter__24831(s__24832){
return (new cljs.core.LazySeq(null,(function (){
var s__24832__$1 = s__24832;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24832__$1);
if(temp__5804__auto__){
var s__24832__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24832__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__24832__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__24834 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__24833 = (0);
while(true){
if((i__24833 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__24833);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e24835){if((e24835 instanceof Error)){
var _ = e24835;
return null;
} else {
throw e24835;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__24834,d);

var G__24837 = (i__24833 + (1));
i__24833 = G__24837;
continue;
} else {
var G__24838 = (i__24833 + (1));
i__24833 = G__24838;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24834),cljs_time$coerce$from_string_$_iter__24831(cljs.core.chunk_rest(s__24832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24834),null);
}
} else {
var f = cljs.core.first(s__24832__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e24836){if((e24836 instanceof Error)){
var _ = e24836;
return null;
} else {
throw e24836;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__24831(cljs.core.rest(s__24832__$2)));
} else {
var G__24839 = cljs.core.rest(s__24832__$2);
s__24832__$1 = G__24839;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__24840 = date;
var G__24840__$1 = (((G__24840 == null))?null:G__24840.getTime());
if((G__24840__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__24840__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__24841 = obj;
var G__24841__$1 = (((G__24841 == null))?null:cljs_time.coerce.to_date_time(G__24841));
if((G__24841__$1 == null)){
return null;
} else {
return G__24841__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__4115__auto__ = millis;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__4115__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__24842 = obj;
var G__24842__$1 = (((G__24842 == null))?null:cljs_time.coerce.to_date_time(G__24842));
var G__24842__$2 = (((G__24842__$1 == null))?null:G__24842__$1.getTime());
if((G__24842__$2 == null)){
return null;
} else {
return (new Date(G__24842__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__24843 = obj;
var G__24843__$1 = (((G__24843 == null))?null:cljs_time.coerce.to_date_time(G__24843));
if((G__24843__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__24843__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
var G__24844 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__24844.setHours(dt.getHours());

G__24844.setMinutes(dt.getMinutes());

G__24844.setSeconds(dt.getSeconds());

G__24844.setMilliseconds(dt.getMilliseconds());

return G__24844;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long(long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string(string);
}));
