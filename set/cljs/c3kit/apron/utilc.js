// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.apron.utilc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.schema');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cognitect.transit');
/**
 * Convenience.  Convert the form to EDN
 */
c3kit.apron.utilc.__GT_edn = (function c3kit$apron$utilc$__GT_edn(v){
var G__21835 = v;
if((G__21835 == null)){
return null;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__21835], 0));
}
});
/**
 * Convenience.  Convert the EDN string to a Clojure form
 */
c3kit.apron.utilc._LT__edn = (function c3kit$apron$utilc$_LT__edn(s){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Convert integer to a hex string
 */
c3kit.apron.utilc.__GT_hex = (function c3kit$apron$utilc$__GT_hex(n){
return n.toString((16));
});
/**
 * Convert hex string to an integer
 */
c3kit.apron.utilc._LT__hex = (function c3kit$apron$utilc$_LT__hex(hex){
return parseInt(hex,(16));
});
/**
 * Give a list of entities with unique :id's, return a map with the ids as keys and the entities as values
 */
c3kit.apron.utilc.index_by_id = (function c3kit$apron$utilc$index_by_id(entities){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21836_SHARP_,p2__21837_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21836_SHARP_,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p2__21837_SHARP_),p2__21837_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,entities);
});
/**
 * Makes sure and entity has the keyword as the value of :kind
 */
c3kit.apron.utilc.keywordize_kind = (function c3kit$apron$utilc$keywordize_kind(entity){
var temp__5802__auto__ = cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(temp__5802__auto__)){
var kind = temp__5802__auto__;
if((kind instanceof cljs.core.Keyword)){
return entity;
} else {
if(typeof kind === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$kind,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kind));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid :kind type",entity);

}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing :kind",entity);
}
});
/**
 * Parse a string into a UUID or return nil if it's not a vlid UUID format
 */
c3kit.apron.utilc.__GT_uuid_or_nil = (function c3kit$apron$utilc$__GT_uuid_or_nil(uuid_str){
try{return c3kit.apron.schema.__GT_uuid(uuid_str);
}catch (e21838){var _ = e21838;
return null;
}});
c3kit.apron.utilc.transit_reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,new cljs.core.PersistentArrayMap(null, 2, ["f",parseFloat,"n",parseInt], null)], null));
c3kit.apron.utilc.transit_writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
/**
 * Convert data into transit string
 */
c3kit.apron.utilc.__GT_transit = (function c3kit$apron$utilc$__GT_transit(var_args){
var G__21840 = arguments.length;
switch (G__21840) {
case 3:
return c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$3 = (function (type,opts,data){
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts),data);
}));

(c3kit.apron.utilc.__GT_transit.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cognitect.transit.write(c3kit.apron.utilc.transit_writer,data);
}));

(c3kit.apron.utilc.__GT_transit.cljs$lang$maxFixedArity = 3);

/**
 * Convert transit string into data
 */
c3kit.apron.utilc._LT__transit = (function c3kit$apron$utilc$_LT__transit(var_args){
var G__21843 = arguments.length;
switch (G__21843) {
case 3:
return c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$3 = (function (type,opts,transit_str){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,opts),transit_str);
}));

(c3kit.apron.utilc._LT__transit.cljs$core$IFn$_invoke$arity$1 = (function (transit_str){
return cognitect.transit.read(c3kit.apron.utilc.transit_reader,transit_str);
}));

(c3kit.apron.utilc._LT__transit.cljs$lang$maxFixedArity = 3);

/**
 * Convert the clj data structure to JSON.
 *   Note: this transition may be lossy since some clj data types (keywords) have no JSON equivalent.
 */
c3kit.apron.utilc.__GT_json = (function c3kit$apron$utilc$__GT_json(v){
return JSON.stringify(cljs.core.clj__GT_js(v));
});
/**
 * Convert JSON into clj data structure.
 */
c3kit.apron.utilc._LT__json = (function c3kit$apron$utilc$_LT__json(v){
if(cljs.core.truth_((function (){var G__21845 = v;
if((G__21845 == null)){
return null;
} else {
return (c3kit.apron.corec.not_blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? c3kit.apron.corec.not_blank_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21845) : c3kit.apron.corec.not_blank_QMARK_.call(null,G__21845));
}
})())){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(v));
} else {
return null;
}
});
/**
 * Convert JSON into clj data structure with all keys as keywords
 */
c3kit.apron.utilc._LT__json_kw = (function c3kit$apron$utilc$_LT__json_kw(v){
return clojure.walk.keywordize_keys(c3kit.apron.utilc._LT__json(v));
});
c3kit.apron.utilc.csv_maybe_quote = (function c3kit$apron$utilc$csv_maybe_quote(value){
if(cljs.core.truth_(cljs.core.re_find(/[,\"]/,value))){
return ["\"",clojure.string.replace(value,"\"","\"\""),"\""].join('');
} else {
return value;
}
});
c3kit.apron.utilc.cell__GT_csv = (function c3kit$apron$utilc$cell__GT_csv(cell){
return c3kit.apron.utilc.csv_maybe_quote(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell));
});
c3kit.apron.utilc.row__GT_csv = (function c3kit$apron$utilc$row__GT_csv(row){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.apron.utilc.cell__GT_csv,row));
});
/**
 * Simple CSV generator for a list of lists
 */
c3kit.apron.utilc.__GT_csv = (function c3kit$apron$utilc$__GT_csv(rows){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\r\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.apron.utilc.row__GT_csv,rows));
});
/**
 * Sanatize string into valid filename
 */
c3kit.apron.utilc.__GT_filename = (function c3kit$apron$utilc$__GT_filename(var_args){
var G__21847 = arguments.length;
switch (G__21847) {
case 1:
return c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$1 = (function (name){
return clojure.string.replace(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[ -]/,"_"),/[',.-\/\\<>:\"\\|?*\[\]]/,"");
}));

(c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$2 = (function (name,ext){
return [c3kit.apron.utilc.__GT_filename.cljs$core$IFn$_invoke$arity$1(name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
}));

(c3kit.apron.utilc.__GT_filename.cljs$lang$maxFixedArity = 2);

