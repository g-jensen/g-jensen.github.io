// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.apron.schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('com.cognitect.transit.types');
c3kit.apron.schema.stdex = cljs.core.ExceptionInfo;
c3kit.apron.schema.coerce_ex = (function c3kit$apron$schema$coerce_ex(v,type){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't convert ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$type,type], null));
});
c3kit.apron.schema.coerce_ex_QMARK_ = (function c3kit$apron$schema$coerce_ex_QMARK_(e){
if((e instanceof c3kit.apron.schema.stdex)){
return cljs.core.cst$kw$coerce_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e));
} else {
return false;
}
});
c3kit.apron.schema.date = Date;
c3kit.apron.schema.exmessage = (function c3kit$apron$schema$exmessage(e){
if(cljs.core.truth_(e)){
return cljs.core.ex_message(e);
} else {
return null;
}
});
c3kit.apron.schema.present_QMARK_ = (function c3kit$apron$schema$present_QMARK_(v){
return (!((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))))));
});
c3kit.apron.schema.nil_or = (function c3kit$apron$schema$nil_or(f){
return (function (v){
var or__4126__auto__ = (v == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
});
c3kit.apron.schema.email_pattern = /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
c3kit.apron.schema.email_QMARK_ = (function c3kit$apron$schema$email_QMARK_(value){
if(cljs.core.truth_(cljs.core.re_matches(c3kit.apron.schema.email_pattern,value))){
return true;
} else {
return false;
}
});
c3kit.apron.schema.bigdec_QMARK_ = (function c3kit$apron$schema$bigdec_QMARK_(v){
return typeof v === 'number';
});
c3kit.apron.schema.uri_QMARK_ = (function c3kit$apron$schema$uri_QMARK_(value){
return typeof value === 'string';
});
c3kit.apron.schema.is_enum_QMARK_ = (function c3kit$apron$schema$is_enum_QMARK_(enum$){
var enum_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19091_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.cst$kw$enum.cljs$core$IFn$_invoke$arity$1(enum$)),cljs.core.name(p1__19091_SHARP_));
}),cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(enum$)));
return (function (value){
return (((value == null)) || (cljs.core.contains_QMARK_(enum_set,value)));
});
});
c3kit.apron.schema.parse_BANG_ = (function c3kit$apron$schema$parse_BANG_(f,v){
var result = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if(cljs.core.truth_(isNaN(result))){
throw Error("parsed NaN");
} else {
return result;
}
});
c3kit.apron.schema.__GT_boolean = (function c3kit$apron$schema$__GT_boolean(value){
if((value == null)){
return null;
} else {
if(cljs.core.boolean_QMARK_(value)){
return value;
} else {
if(typeof value === 'string'){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",clojure.string.lower_case(value))));
} else {
return cljs.core.boolean$(value);

}
}
}
});
c3kit.apron.schema.__GT_string = (function c3kit$apron$schema$__GT_string(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,value)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
});
c3kit.apron.schema.__GT_keyword = (function c3kit$apron$schema$__GT_keyword(value){
if((value == null)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return value;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
if(clojure.string.starts_with_QMARK_(s,":")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}

}
}
});
c3kit.apron.schema.__GT_float = (function c3kit$apron$schema$__GT_float(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e19092){var _ = e19092;
throw c3kit.apron.schema.coerce_ex(v,"float");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"float");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_int = (function c3kit$apron$schema$__GT_int(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseInt,v);
}catch (e19093){var _ = e19093;
throw c3kit.apron.schema.coerce_ex(v,"int");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return cljs.core.long$(v);
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"inv");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_bigdec = (function c3kit$apron$schema$__GT_bigdec(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e19094){var _ = e19094;
throw c3kit.apron.schema.coerce_ex(v,"bigdec");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"bigdec");

}
}
}
}
}
});
c3kit.apron.schema.__GT_date = (function c3kit$apron$schema$__GT_date(v){
if((v == null)){
return null;
} else {
if((v instanceof c3kit.apron.schema.date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__19095 = (new Date());
G__19095.setTime(v);

return G__19095;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_sql_date = (function c3kit$apron$schema$__GT_sql_date(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__19096 = (new Date());
G__19096.setTime(v);

return G__19096;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_timestamp = (function c3kit$apron$schema$__GT_timestamp(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__19097 = (new Date());
G__19097.setTime(v);

return G__19097;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
}
}
}
});
c3kit.apron.schema.__GT_uri = (function c3kit$apron$schema$__GT_uri(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"uri");

}
}
});
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
c3kit.apron.schema.__GT_uuid = (function c3kit$apron$schema$__GT_uuid(v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_(v)){
return v;
} else {
if(typeof v === 'string'){
return cljs.core.uuid(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"uuid");

}
}
}
});
c3kit.apron.schema.type_validators = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean],[c3kit.apron.schema.nil_or((function (p1__19101_SHARP_){
return (p1__19101_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_or((function (p1__19099_SHARP_){
return (p1__19099_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_or(cljs.core.string_QMARK_),cljs.core.constantly(true),c3kit.apron.schema.nil_or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_or(c3kit.apron.schema.bigdec_QMARK_),c3kit.apron.schema.nil_or(c3kit.apron.schema.uri_QMARK_),c3kit.apron.schema.nil_or(cljs.core.uuid_QMARK_),c3kit.apron.schema.nil_or((function (p1__19103_SHARP_){
return (p1__19103_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or((function (p1__19098_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,p1__19098_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,p1__19098_SHARP_)));
}))]);
c3kit.apron.schema.type_coercers = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean],[c3kit.apron.schema.__GT_sql_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_string,cljs.core.identity,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_bigdec,c3kit.apron.schema.__GT_uri,c3kit.apron.schema.__GT_uuid,c3kit.apron.schema.__GT_timestamp,c3kit.apron.schema.__GT_boolean]);
/**
 * Used as a :present value to remove the entry from presentation
 */
c3kit.apron.schema.omit = cljs.core.constantly(null);
c3kit.apron.schema.kind = (function c3kit$apron$schema$kind(key){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,key,cljs.core.cst$kw$validate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__19104_SHARP_){
return (((p1__19104_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__19104_SHARP_)));
})], null),cljs.core.cst$kw$coerce,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__19105_SHARP_){
var or__4126__auto__ = p1__19105_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return key;
}
})], null),cljs.core.cst$kw$message,["mismatch; must be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null);
});
c3kit.apron.schema.id = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ref], null);
c3kit.apron.schema.str_or_nil = (function c3kit$apron$schema$str_or_nil(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,v)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
});
c3kit.apron.schema.multiple_QMARK_ = (function c3kit$apron$schema$multiple_QMARK_(thing){
return ((cljs.core.sequential_QMARK_(thing)) || (cljs.core.set_QMARK_(thing)));
});
c3kit.apron.schema.__GT_vec = (function c3kit$apron$schema$__GT_vec(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return cljs.core.vec(v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
c3kit.apron.schema.__GT_seq = (function c3kit$apron$schema$__GT_seq(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return v;
} else {
return (new cljs.core.List(null,v,null,(1),null));

}
}
});
c3kit.apron.schema.type_coercer_BANG_ = (function c3kit$apron$schema$type_coercer_BANG_(type){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_coercers,type);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled coersion type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coerce_QMARK_,true], null));
}
});
c3kit.apron.schema.type_validator_BANG_ = (function c3kit$apron$schema$type_validator_BANG_(type){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_validators,type);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled validation type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
c3kit.apron.schema._coerce_value_BANG_ = (function c3kit$apron$schema$_coerce_value_BANG_(coerce_fn,value,_QMARK_seq){
if(cljs.core.truth_(_QMARK_seq)){
if((value == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19106_SHARP_){
return (coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(p1__19106_SHARP_) : coerce_fn.call(null,p1__19106_SHARP_));
}),c3kit.apron.schema.__GT_seq(value));
}
} else {
return (coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(value) : coerce_fn.call(null,value));
}
});
c3kit.apron.schema.do_coersion = (function c3kit$apron$schema$do_coersion(p__19109,value){
var map__19110 = p__19109;
var map__19110__$1 = (((((!((map__19110 == null))))?(((((map__19110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19110):map__19110);
var spec = map__19110__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,cljs.core.cst$kw$type);
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,cljs.core.cst$kw$coerce);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,cljs.core.cst$kw$message);
var _QMARK_seq = c3kit.apron.schema.multiple_QMARK_(type);
var type__$1 = ((_QMARK_seq)?cljs.core.first(type):type);
var coerce_type = c3kit.apron.schema.type_coercer_BANG_(type__$1);
var value__$1 = (cljs.core.truth_(coerce)?((c3kit.apron.schema.multiple_QMARK_(coerce))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19108_SHARP_,p2__19107_SHARP_){
return c3kit.apron.schema._coerce_value_BANG_(p2__19107_SHARP_,p1__19108_SHARP_,_QMARK_seq);
}),value,coerce):c3kit.apron.schema._coerce_value_BANG_(coerce,value,_QMARK_seq)):value);
return c3kit.apron.schema._coerce_value_BANG_(coerce_type,value__$1,_QMARK_seq);
});
c3kit.apron.schema.validation_ex = (function c3kit$apron$schema$validation_ex(message,value){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$invalid_QMARK_,true,cljs.core.cst$kw$message,(function (){var or__4126__auto__ = message;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "is invalid";
}
})(),cljs.core.cst$kw$value,value], null));
});
c3kit.apron.schema.validation_ex_QMARK_ = (function c3kit$apron$schema$validation_ex_QMARK_(e){
if((e instanceof c3kit.apron.schema.stdex)){
return cljs.core.cst$kw$invalid_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e));
} else {
return false;
}
});
c3kit.apron.schema._validate_value_BANG_ = (function c3kit$apron$schema$_validate_value_BANG_(valid_QMARK_,message,value,_QMARK_seq){
if(cljs.core.truth_((function (){var and__4115__auto__ = _QMARK_seq;
if(cljs.core.truth_(and__4115__auto__)){
return (!((value == null)));
} else {
return and__4115__auto__;
}
})())){
var seq__19112 = cljs.core.seq(value);
var chunk__19113 = null;
var count__19114 = (0);
var i__19115 = (0);
while(true){
if((i__19115 < count__19114)){
var v = chunk__19113.cljs$core$IIndexed$_nth$arity$2(null,i__19115);
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : valid_QMARK_.call(null,v)))){
} else {
throw c3kit.apron.schema.validation_ex(message,v);
}


var G__19116 = seq__19112;
var G__19117 = chunk__19113;
var G__19118 = count__19114;
var G__19119 = (i__19115 + (1));
seq__19112 = G__19116;
chunk__19113 = G__19117;
count__19114 = G__19118;
i__19115 = G__19119;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19112);
if(temp__5804__auto__){
var seq__19112__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19112__$1);
var G__19120 = cljs.core.chunk_rest(seq__19112__$1);
var G__19121 = c__4556__auto__;
var G__19122 = cljs.core.count(c__4556__auto__);
var G__19123 = (0);
seq__19112 = G__19120;
chunk__19113 = G__19121;
count__19114 = G__19122;
i__19115 = G__19123;
continue;
} else {
var v = cljs.core.first(seq__19112__$1);
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : valid_QMARK_.call(null,v)))){
} else {
throw c3kit.apron.schema.validation_ex(message,v);
}


var G__19124 = cljs.core.next(seq__19112__$1);
var G__19125 = null;
var G__19126 = (0);
var G__19127 = (0);
seq__19112 = G__19124;
chunk__19113 = G__19125;
count__19114 = G__19126;
i__19115 = G__19127;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : valid_QMARK_.call(null,value)))){
return null;
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}
}
});
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_ = (function c3kit$apron$schema$_validate_STAR__QMARK__value_BANG_(validate_fn,message,value,_QMARK_seq){
if(c3kit.apron.schema.multiple_QMARK_(validate_fn)){
var seq__19128 = cljs.core.seq(validate_fn);
var chunk__19129 = null;
var count__19130 = (0);
var i__19131 = (0);
while(true){
if((i__19131 < count__19130)){
var v_fn = chunk__19129.cljs$core$IIndexed$_nth$arity$2(null,i__19131);
c3kit.apron.schema._validate_value_BANG_(v_fn,message,value,_QMARK_seq);


var G__19132 = seq__19128;
var G__19133 = chunk__19129;
var G__19134 = count__19130;
var G__19135 = (i__19131 + (1));
seq__19128 = G__19132;
chunk__19129 = G__19133;
count__19130 = G__19134;
i__19131 = G__19135;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19128);
if(temp__5804__auto__){
var seq__19128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19128__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19128__$1);
var G__19136 = cljs.core.chunk_rest(seq__19128__$1);
var G__19137 = c__4556__auto__;
var G__19138 = cljs.core.count(c__4556__auto__);
var G__19139 = (0);
seq__19128 = G__19136;
chunk__19129 = G__19137;
count__19130 = G__19138;
i__19131 = G__19139;
continue;
} else {
var v_fn = cljs.core.first(seq__19128__$1);
c3kit.apron.schema._validate_value_BANG_(v_fn,message,value,_QMARK_seq);


var G__19140 = cljs.core.next(seq__19128__$1);
var G__19141 = null;
var G__19142 = (0);
var G__19143 = (0);
seq__19128 = G__19140;
chunk__19129 = G__19141;
count__19130 = G__19142;
i__19131 = G__19143;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return c3kit.apron.schema._validate_value_BANG_(validate_fn,message,value,_QMARK_seq);
}
});
c3kit.apron.schema.do_validation = (function c3kit$apron$schema$do_validation(p__19144,value){
var map__19145 = p__19144;
var map__19145__$1 = (((((!((map__19145 == null))))?(((((map__19145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19145):map__19145);
var spec = map__19145__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.cst$kw$type);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.cst$kw$message);
var validations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.cst$kw$validations);
var _QMARK_seq = c3kit.apron.schema.multiple_QMARK_(type);
var type__$1 = ((_QMARK_seq)?cljs.core.first(type):type);
if(cljs.core.truth_(((_QMARK_seq)?(((!(c3kit.apron.schema.multiple_QMARK_(value))))?value:false):false))){
throw c3kit.apron.schema.validation_ex(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),"] expected"].join(''),value);
} else {
}

c3kit.apron.schema._validate_value_BANG_(c3kit.apron.schema.type_validator_BANG_(type__$1),message,value,_QMARK_seq);

if(cljs.core.truth_(validate)){
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate,message,value,_QMARK_seq);
} else {
}

var seq__19147 = cljs.core.seq(validations);
var chunk__19148 = null;
var count__19149 = (0);
var i__19150 = (0);
while(true){
if((i__19150 < count__19149)){
var map__19155 = chunk__19148.cljs$core$IIndexed$_nth$arity$2(null,i__19150);
var map__19155__$1 = (((((!((map__19155 == null))))?(((((map__19155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19155):map__19155);
var validate__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155__$1,cljs.core.cst$kw$validate);
var message__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155__$1,cljs.core.cst$kw$message);
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate__$1,message__$1,value,_QMARK_seq);


var G__19159 = seq__19147;
var G__19160 = chunk__19148;
var G__19161 = count__19149;
var G__19162 = (i__19150 + (1));
seq__19147 = G__19159;
chunk__19148 = G__19160;
count__19149 = G__19161;
i__19150 = G__19162;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19147);
if(temp__5804__auto__){
var seq__19147__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19147__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__19147__$1);
var G__19163 = cljs.core.chunk_rest(seq__19147__$1);
var G__19164 = c__4556__auto__;
var G__19165 = cljs.core.count(c__4556__auto__);
var G__19166 = (0);
seq__19147 = G__19163;
chunk__19148 = G__19164;
count__19149 = G__19165;
i__19150 = G__19166;
continue;
} else {
var map__19157 = cljs.core.first(seq__19147__$1);
var map__19157__$1 = (((((!((map__19157 == null))))?(((((map__19157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19157):map__19157);
var validate__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19157__$1,cljs.core.cst$kw$validate);
var message__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19157__$1,cljs.core.cst$kw$message);
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate__$1,message__$1,value,_QMARK_seq);


var G__19167 = cljs.core.next(seq__19147__$1);
var G__19168 = null;
var G__19169 = (0);
var G__19170 = (0);
seq__19147 = G__19167;
chunk__19148 = G__19168;
count__19149 = G__19169;
i__19150 = G__19170;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.SchemaError = (function (errors,schema,before,after,__meta,__extmap,__hash){
this.errors = errors;
this.schema = schema;
this.before = before;
this.after = after;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.SchemaError.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SchemaError: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.errors)].join('');
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k19172,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__19176 = k19172;
var G__19176__$1 = (((G__19176 instanceof cljs.core.Keyword))?G__19176.fqn:null);
switch (G__19176__$1) {
case "errors":
return self__.errors;

break;
case "schema":
return self__.schema;

break;
case "before":
return self__.before;

break;
case "after":
return self__.after;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19172,else__4383__auto__);

}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__19177){
var vec__19178 = p__19177;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#c3kit.apron.schema.SchemaError{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$errors,self__.errors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$before,self__.before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$after,self__.after],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19171){
var self__ = this;
var G__19171__$1 = this;
return (new cljs.core.RecordIter((0),G__19171__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.cst$kw$schema,cljs.core.cst$kw$before,cljs.core.cst$kw$after], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__19181 = (function (coll__4377__auto__){
return (-138826815 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__19181(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19173,other19174){
var self__ = this;
var this19173__$1 = this;
return (((!((other19174 == null)))) && ((this19173__$1.constructor === other19174.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19173__$1.errors,other19174.errors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19173__$1.schema,other19174.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19173__$1.before,other19174.before)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19173__$1.after,other19174.after)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19173__$1.__extmap,other19174.__extmap)));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$errors,null,cljs.core.cst$kw$after,null,cljs.core.cst$kw$before,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__19171){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__19182 = cljs.core.keyword_identical_QMARK_;
var expr__19183 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__19185 = cljs.core.cst$kw$errors;
var G__19186 = expr__19183;
return (pred__19182.cljs$core$IFn$_invoke$arity$2 ? pred__19182.cljs$core$IFn$_invoke$arity$2(G__19185,G__19186) : pred__19182.call(null,G__19185,G__19186));
})())){
return (new c3kit.apron.schema.SchemaError(G__19171,self__.schema,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19187 = cljs.core.cst$kw$schema;
var G__19188 = expr__19183;
return (pred__19182.cljs$core$IFn$_invoke$arity$2 ? pred__19182.cljs$core$IFn$_invoke$arity$2(G__19187,G__19188) : pred__19182.call(null,G__19187,G__19188));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,G__19171,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19189 = cljs.core.cst$kw$before;
var G__19190 = expr__19183;
return (pred__19182.cljs$core$IFn$_invoke$arity$2 ? pred__19182.cljs$core$IFn$_invoke$arity$2(G__19189,G__19190) : pred__19182.call(null,G__19189,G__19190));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,G__19171,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19191 = cljs.core.cst$kw$after;
var G__19192 = expr__19183;
return (pred__19182.cljs$core$IFn$_invoke$arity$2 ? pred__19182.cljs$core$IFn$_invoke$arity$2(G__19191,G__19192) : pred__19182.call(null,G__19191,G__19192));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,G__19171,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__19171),null));
}
}
}
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$errors,self__.errors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$before,self__.before,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$after,self__.after,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__19171){
var self__ = this;
var this__4379__auto____$1 = this;
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,G__19171,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(c3kit.apron.schema.SchemaError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$errors,cljs.core.cst$sym$schema,cljs.core.cst$sym$before,cljs.core.cst$sym$after], null);
}));

(c3kit.apron.schema.SchemaError.cljs$lang$type = true);

(c3kit.apron.schema.SchemaError.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/SchemaError",null,(1),null));
}));

(c3kit.apron.schema.SchemaError.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"c3kit.apron.schema/SchemaError");
}));

/**
 * Positional factory function for c3kit.apron.schema/SchemaError.
 */
c3kit.apron.schema.__GT_SchemaError = (function c3kit$apron$schema$__GT_SchemaError(errors,schema,before,after){
return (new c3kit.apron.schema.SchemaError(errors,schema,before,after,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/SchemaError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_SchemaError = (function c3kit$apron$schema$map__GT_SchemaError(G__19175){
var extmap__4419__auto__ = (function (){var G__19193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19175,cljs.core.cst$kw$errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema,cljs.core.cst$kw$before,cljs.core.cst$kw$after], 0));
if(cljs.core.record_QMARK_(G__19175)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19193);
} else {
return G__19193;
}
})();
return (new c3kit.apron.schema.SchemaError(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(G__19175),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__19175),cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(G__19175),cljs.core.cst$kw$after.cljs$core$IFn$_invoke$arity$1(G__19175),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

c3kit.apron.schema.make_error = (function c3kit$apron$schema$make_error(errors,schema,before,after){
return (new c3kit.apron.schema.SchemaError(errors,schema,before,after,null,null,null));
});
c3kit.apron.schema.error_QMARK_ = (function c3kit$apron$schema$error_QMARK_(result){
return (((result instanceof c3kit.apron.schema.SchemaError)) || (((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$errors)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$schema)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$before)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$after)))));
});
/**
 * replace exceptions with ex-data
 */
c3kit.apron.schema.without_ex = (function c3kit$apron$schema$without_ex(result){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$errors,(function (p1__19195_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__19196){
var vec__19197 = p__19196;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(ex),cljs.core.cst$kw$schema));
}),cljs.core.PersistentArrayMap.EMPTY,p1__19195_SHARP_);
}));
});
/**
 * Nil when there are no errors, otherwise a map {<field> <message>} .
 */
c3kit.apron.schema.error_message_map = (function c3kit$apron$schema$error_message_map(result){
if(c3kit.apron.schema.error_QMARK_(result)){
var temp__5804__auto__ = cljs.core.seq(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(result));
if(temp__5804__auto__){
var errors = temp__5804__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19200){
var vec__19201 = p__19200;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19201,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19201,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(e),"is invalid")], null);
}),errors));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Sequence of error messages in a validate/coerce/conform result; nil if none.
 */
c3kit.apron.schema.messages = (function c3kit$apron$schema$messages(result){
var temp__5804__auto__ = c3kit.apron.schema.error_message_map(result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__19204){
var vec__19205 = p__19204;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19205,(1),null);
return [cljs.core.name(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),errors);
} else {
return null;
}
});
/**
 * returns coerced value or throws an exception
 */
c3kit.apron.schema.coerce_value = (function c3kit$apron$schema$coerce_value(var_args){
var G__19209 = arguments.length;
switch (G__19209) {
case 3:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{return c3kit.apron.schema.do_coersion(spec,value);
}catch (e19210){var e = e19210;
if(cljs.core.truth_(c3kit.apron.schema.coerce_ex_QMARK_(e))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("coersion failed",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(spec,"coersion failed"),cljs.core.cst$kw$value,value], null),e);
}
}}));

(c3kit.apron.schema.coerce_value.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise
 */
c3kit.apron.schema.validate_value_BANG_ = (function c3kit$apron$schema$validate_value_BANG_(var_args){
var G__19213 = arguments.length;
switch (G__19213) {
case 3:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
c3kit.apron.schema.do_validation(spec,value);

return value;
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return true or false
 */
c3kit.apron.schema.valid_value_QMARK_ = (function c3kit$apron$schema$valid_value_QMARK_(var_args){
var G__19216 = arguments.length;
switch (G__19216) {
case 3:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec,value);

return true;
}catch (e19217){var _ = e19217;
return false;
}}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise.
 */
c3kit.apron.schema.validate_coerced_value_BANG_ = (function c3kit$apron$schema$validate_coerced_value_BANG_(spec,value,coerced){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec,coerced);

return coerced;
}catch (e19219){var e = e19219;
if(cljs.core.truth_(c3kit.apron.schema.validation_ex_QMARK_(e))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("validation error",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(spec,"is invalid"),cljs.core.cst$kw$value,value,cljs.core.cst$kw$coerced,coerced], null),e);
}
}});
/**
 * coerce and validate, returns coerced value or throws
 */
c3kit.apron.schema.conform_value = (function c3kit$apron$schema$conform_value(var_args){
var G__19221 = arguments.length;
switch (G__19221) {
case 3:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
var coerced = c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2(spec,value);
return c3kit.apron.schema.validate_coerced_value_BANG_(spec,value,coerced);
}));

(c3kit.apron.schema.conform_value.cljs$lang$maxFixedArity = 3);

/**
 * returns a presentable representation of the value
 */
c3kit.apron.schema.present_value = (function c3kit$apron$schema$present_value(var_args){
var G__19226 = arguments.length;
switch (G__19226) {
case 3:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
var presenters = c3kit.apron.schema.__GT_vec(cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(spec));
var presenter_fn = (function (v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19224_SHARP_,p2__19223_SHARP_){
return (p2__19223_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__19223_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__19224_SHARP_) : p2__19223_SHARP_.call(null,p1__19224_SHARP_));
}),v,presenters);
});
if(cljs.core.sequential_QMARK_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec))){
if((value == null)){
return null;
} else {
return cljs.core.vec(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2(presenter_fn,value));
}
} else {
return presenter_fn(value);
}
}));

(c3kit.apron.schema.present_value.cljs$lang$maxFixedArity = 3);

c3kit.apron.schema.result_or_ex = (function c3kit$apron$schema$result_or_ex(f,spec,value){
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,value) : f.call(null,spec,value));
}catch (e19228){var e = e19228;
return e;
}});
c3kit.apron.schema.error_or_result = (function c3kit$apron$schema$error_or_result(errors,schema,entity,result){
if(cljs.core.seq(errors)){
return (new c3kit.apron.schema.SchemaError(errors,schema,entity,result,null,null,null));
} else {
return result;
}
});
c3kit.apron.schema.process_fields = (function c3kit$apron$schema$process_fields(processor,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result = cljs.core.PersistentArrayMap.EMPTY;
var specs = schema;
while(true){
if(cljs.core.seq(specs)){
var vec__19232 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19232,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
var field_result = c3kit.apron.schema.result_or_ex(processor,spec,value);
if(c3kit.apron.corec.ex_QMARK_(field_result)){
var G__19235 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,field_result);
var G__19236 = result;
var G__19237 = cljs.core.rest(specs);
errors = G__19235;
result = G__19236;
specs = G__19237;
continue;
} else {
var result__$1 = (((field_result == null))?result:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,field_result));
var G__19238 = errors;
var G__19239 = result__$1;
var G__19240 = cljs.core.rest(specs);
errors = G__19238;
result = G__19239;
specs = G__19240;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result);
}
break;
}
});
c3kit.apron.schema.coerce_whole_entity = (function c3kit$apron$schema$coerce_whole_entity(result,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (errors,result__$1){
return (function (p__19248){
var vec__19249 = p__19248;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19249,(1),null);
return cljs.core.cst$kw$coerce.cljs$core$IFn$_invoke$arity$1(s);
});})(errors,result__$1))
,cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
while(true){
if(cljs.core.seq(specs)){
var vec__19252 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19252,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19252,(1),null);
var value = c3kit.apron.schema.result_or_ex(c3kit.apron.schema.coerce_value,spec,result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__19255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__19256 = result__$1;
var G__19257 = cljs.core.rest(specs);
errors = G__19255;
result__$1 = G__19256;
specs = G__19257;
continue;
} else {
var G__19258 = errors;
var G__19259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__19260 = cljs.core.rest(specs);
errors = G__19258;
result__$1 = G__19259;
specs = G__19260;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
c3kit.apron.schema.validate_whole_entity = (function c3kit$apron$schema$validate_whole_entity(result,schema,entity){
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19261){
var vec__19262 = p__19261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19262,(1),null);
var or__4126__auto__ = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$1(s);
}
}),cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var vec__19269 = cljs.core.first(specs__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19269,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19269,(1),null);
var value = c3kit.apron.schema.result_or_ex(((function (errors,result__$1,specs__$1,vec__19269,key,spec,specs){
return (function (spec__$1,value){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec__$1,value);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,key);
}catch (e19272){var ex = e19272;
return ex;
}});})(errors,result__$1,specs__$1,vec__19269,key,spec,specs))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$type,cljs.core.cst$kw$ignore),result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__19273 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__19274 = result__$1;
var G__19275 = cljs.core.rest(specs__$1);
errors = G__19273;
result__$1 = G__19274;
specs__$1 = G__19275;
continue;
} else {
var G__19276 = errors;
var G__19277 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__19278 = cljs.core.rest(specs__$1);
errors = G__19276;
result__$1 = G__19277;
specs__$1 = G__19278;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
c3kit.apron.schema.present_whole_entity = (function c3kit$apron$schema$present_whole_entity(result,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (errors,result__$1){
return (function (p__19286){
var vec__19287 = p__19286;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19287,(1),null);
return cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(s);
});})(errors,result__$1))
,cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
while(true){
if(cljs.core.seq(specs)){
var vec__19290 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(1),null);
var value = c3kit.apron.schema.result_or_ex(c3kit.apron.schema.present_value,spec,result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__19293 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__19294 = result__$1;
var G__19295 = cljs.core.rest(specs);
errors = G__19293;
result__$1 = G__19294;
specs = G__19295;
continue;
} else {
var G__19296 = errors;
var G__19297 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__19298 = cljs.core.rest(specs);
errors = G__19296;
result__$1 = G__19297;
specs = G__19298;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
/**
 * Returns coerced entity or SchemaError if any coersion failed. Use error? to check result.
 *   Use Case: 'I want to change my data into the types specified by the schema.'
 */
c3kit.apron.schema.coerce = (function c3kit$apron$schema$coerce(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.coerce_value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.coerce_whole_entity(result,schema,entity);
}
});
/**
 * Returns entity with all values true, or SchemaError when one or more invalid fields. Use error? to check result.
 *   Use Case: 'I want to make sure all the data is valid according to the schema.'
 */
c3kit.apron.schema.validate = (function c3kit$apron$schema$validate(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.validate_value_BANG_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.validate_whole_entity(result,schema,entity);
}
});
/**
 * Returns coerced entity or SchemaError upon any coersion or validation failure. Use error? to check result.
 *   Use Case: 'I want to coerce my data then validate the coerced data, all according to the schema.'
 *   Use Case: Data comes in from a web-form so strings have to be coerced into numbers, etc., then
 *          we need to validate that the data is good.
 */
c3kit.apron.schema.conform = (function c3kit$apron$schema$conform(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.conform_value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
var coerced = c3kit.apron.schema.coerce_whole_entity(result,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.validate_whole_entity(coerced,schema,entity);
}
}
});
/**
 * Returns presentable entity or SchemaError upon any presentation failure. Use error? to check result.
 */
c3kit.apron.schema.present = (function c3kit$apron$schema$present(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.present_value,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
var result__$1 = c3kit.apron.schema.present_whole_entity(result,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result__$1)){
return result__$1;
} else {
return c3kit.apron.corec.remove_nils(result__$1);
}
}
});
c3kit.apron.schema.validation_errors = (function c3kit$apron$schema$validation_errors(schema,entity){
return c3kit.apron.schema.error_message_map(c3kit.apron.schema.validate(schema,entity));
});
c3kit.apron.schema.conform_errors = (function c3kit$apron$schema$conform_errors(schema,entity){
return c3kit.apron.schema.error_message_map(c3kit.apron.schema.conform(schema,entity));
});
c3kit.apron.schema.validate_BANG_ = (function c3kit$apron$schema$validate_BANG_(schema,entity){
var result = c3kit.apron.schema.validate(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid entity",result);
} else {
return result;
}
});
c3kit.apron.schema.coerce_BANG_ = (function c3kit$apron$schema$coerce_BANG_(schema,entity){
var result = c3kit.apron.schema.coerce(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Uncoercable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.conform_BANG_ = (function c3kit$apron$schema$conform_BANG_(schema,entity){
var result = c3kit.apron.schema.conform(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unconformable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.conform_all_BANG_ = (function c3kit$apron$schema$conform_all_BANG_(schema,entities){
var conforms = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19299_SHARP_){
return c3kit.apron.schema.conform(schema,p1__19299_SHARP_);
}),entities);
var errors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.error_QMARK_,conforms);
if(cljs.core.seq(errors)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unconformable entities",c3kit.apron.schema.make_error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19300_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__19300_SHARP_,cljs.core.cst$kw$errors);
}),errors)),schema,entities,conforms));
} else {
return conforms;
}
});
c3kit.apron.schema.present_BANG_ = (function c3kit$apron$schema$present_BANG_(schema,entity){
var result = c3kit.apron.schema.present(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unpresentable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.validate__GT_validations = (function c3kit$apron$schema$validate__GT_validations(p__19301){
var map__19302 = p__19301;
var map__19302__$1 = (((((!((map__19302 == null))))?(((((map__19302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19302):map__19302);
var spec = map__19302__$1;
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19302__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19302__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(validate)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$validate),cljs.core.cst$kw$validations,c3kit.apron.corec.conjv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,validate,cljs.core.cst$kw$message,message], null));
} else {
return spec;
}
});
c3kit.apron.schema.merge_specs = (function c3kit$apron$schema$merge_specs(a,b){
var a__$1 = c3kit.apron.schema.validate__GT_validations(a);
var b__$1 = c3kit.apron.schema.validate__GT_validations(b);
var temp__5802__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(b__$1,cljs.core.PersistentVector.EMPTY)));
if(temp__5802__auto__){
var validations = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0)),cljs.core.cst$kw$validations,cljs.core.vec(validations));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
}
});
c3kit.apron.schema.merge_schemas = (function c3kit$apron$schema$merge_schemas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19306 = arguments.length;
var i__4737__auto___19307 = (0);
while(true){
if((i__4737__auto___19307 < len__4736__auto___19306)){
args__4742__auto__.push((arguments[i__4737__auto___19307]));

var G__19308 = (i__4737__auto___19307 + (1));
i__4737__auto___19307 = G__19308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
var entity_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_,schemas));
var attr_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19304_SHARP_,cljs.core.cst$kw$_STAR_);
}),schemas));
if(cljs.core.seq(entity_specs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_specs,cljs.core.cst$kw$_STAR_,entity_specs);
} else {
return attr_specs;
}
}));

(c3kit.apron.schema.merge_schemas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.schema.merge_schemas.cljs$lang$applyTo = (function (seq19305){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19305));
}));

