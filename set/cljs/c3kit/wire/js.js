// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.apron.time');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.History');
/**
 * DEPRECATED: Use 'e-code' instead.
 */
c3kit.wire.js.e_key_code = (function c3kit$wire$js$e_key_code(e){
return e.keyCode;
});
c3kit.wire.js.e_code = (function c3kit$wire$js$e_code(e){
return e.code;
});
/**
 * On macOS, this is the ⌥ Option key.
 */
c3kit.wire.js.alt_key_QMARK_ = (function c3kit$wire$js$alt_key_QMARK_(e){
return e.altKey;
});
/**
 * On macOS, this is the ⌘ Command key.
 */
c3kit.wire.js.meta_key_QMARK_ = (function c3kit$wire$js$meta_key_QMARK_(e){
return e.metaKey;
});
c3kit.wire.js.ctrl_key_QMARK_ = (function c3kit$wire$js$ctrl_key_QMARK_(e){
return e.ctrlKey;
});
c3kit.wire.js.shift_key_QMARK_ = (function c3kit$wire$js$shift_key_QMARK_(e){
return e.shiftKey;
});
c3kit.wire.js.BACKSPACE = "Backspace";
c3kit.wire.js.TAB = "Tab";
c3kit.wire.js.ENTER = "Enter";
c3kit.wire.js.SHIFTLEFT = "ShiftLeft";
c3kit.wire.js.SHIFTRIGHT = "ShiftRight";
c3kit.wire.js.ESC = "Escape";
c3kit.wire.js.SPACE = "Space";
c3kit.wire.js.LEFT = "ArrowLeft";
c3kit.wire.js.UP = "ArrowUp";
c3kit.wire.js.RIGHT = "ArrowRight";
c3kit.wire.js.DOWN = "ArrowDown";
c3kit.wire.js.DELETE = "Delete";
c3kit.wire.js.DIGIT0 = "Digit0";
c3kit.wire.js.DIGIT1 = "Digit1";
c3kit.wire.js.DIGIT2 = "Digit2";
c3kit.wire.js.DIGIT3 = "Digit3";
c3kit.wire.js.DIGIT4 = "Digit4";
c3kit.wire.js.DIGIT5 = "Digit5";
c3kit.wire.js.DIGIT6 = "Digit6";
c3kit.wire.js.DIGIT7 = "Digit7";
c3kit.wire.js.DIGIT8 = "Digit8";
c3kit.wire.js.DIGIT9 = "Digit9";
c3kit.wire.js.NUMPAD_PLUS_ = "NumpadAdd";
c3kit.wire.js.COMMA = "Comma";
c3kit.wire.js.e_code_QMARK_ = (function c3kit$wire$js$e_code_QMARK_(var_args){
var G__24891 = arguments.length;
switch (G__24891) {
case 1:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return (function (e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(code,e);
});
}));

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (code,e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.e_code(e),code);
}));

(c3kit.wire.js.e_code_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.BACKSPACE_QMARK_ = (function c3kit$wire$js$BACKSPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.BACKSPACE,e);
});
c3kit.wire.js.TAB_QMARK_ = (function c3kit$wire$js$TAB_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.TAB,e);
});
c3kit.wire.js.ENTER_QMARK_ = (function c3kit$wire$js$ENTER_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.ENTER,e);
});
c3kit.wire.js.SHIFT_QMARK_ = (function c3kit$wire$js$SHIFT_QMARK_(e){
return ((c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SHIFTLEFT,e)) || (c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SHIFTRIGHT,e)));
});
c3kit.wire.js.ESC_QMARK_ = (function c3kit$wire$js$ESC_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.ESC,e);
});
c3kit.wire.js.SPACE_QMARK_ = (function c3kit$wire$js$SPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.SPACE,e);
});
c3kit.wire.js.LEFT_QMARK_ = (function c3kit$wire$js$LEFT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.LEFT,e);
});
c3kit.wire.js.UP_QMARK_ = (function c3kit$wire$js$UP_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.UP,e);
});
c3kit.wire.js.RIGHT_QMARK_ = (function c3kit$wire$js$RIGHT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.RIGHT,e);
});
c3kit.wire.js.DOWN_QMARK_ = (function c3kit$wire$js$DOWN_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.DOWN,e);
});
c3kit.wire.js.DELETE_QMARK_ = (function c3kit$wire$js$DELETE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.DELETE,e);
});
c3kit.wire.js.NUMPAD_PLUS__QMARK_ = (function c3kit$wire$js$NUMPAD_PLUS__QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.NUMPAD_PLUS_,e);
});
c3kit.wire.js.COMMA_QMARK_ = (function c3kit$wire$js$COMMA_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.COMMA,e);
});
c3kit.wire.js.key_modifier_QMARK_ = (function c3kit$wire$js$key_modifier_QMARK_(e,modifier){
try{return e.getModifierState(modifier);
}catch (e24893){var e__$1 = e24893;
return false;
}});
c3kit.wire.js.shift_modifier_QMARK_ = (function c3kit$wire$js$shift_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Shift");
});
c3kit.wire.js.ctl_modifier_QMARK_ = (function c3kit$wire$js$ctl_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Control");
});
c3kit.wire.js.alt_modifier_QMARK_ = (function c3kit$wire$js$alt_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_(e,"Alt");
});
c3kit.wire.js.o_get = (function c3kit$wire$js$o_get(var_args){
var G__24895 = arguments.length;
switch (G__24895) {
case 2:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,key){
return goog.object.get(js_obj,key,null);
}));

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,key,default$){
return goog.object.get(js_obj,key,default$);
}));

(c3kit.wire.js.o_get.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_set = (function c3kit$wire$js$o_set(js_obj,key,value){
return goog.object.set(js_obj,key,value);
});
c3kit.wire.js.user_agent = (function c3kit$wire$js$user_agent(var_args){
var G__24898 = arguments.length;
switch (G__24898) {
case 0:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1(navigator);
}));

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1 = (function (navigator){
return navigator.userAgent;
}));

(c3kit.wire.js.user_agent.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.user_agent_match_QMARK_ = (function c3kit$wire$js$user_agent_match_QMARK_(var_args){
var G__24901 = arguments.length;
switch (G__24901) {
case 1:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (re){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2(re,c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0());
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (re,user_agent){
return cljs.core.boolean$(cljs.core.re_find(re,user_agent));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.mac_os_QMARK_ = (function c3kit$wire$js$mac_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((Macintosh|MacIntel|MacPPC|Mac68K)/);
});
c3kit.wire.js.win_os_QMARK_ = (function c3kit$wire$js$win_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((Windows|Win32|Win64|WinCE)/);
});
c3kit.wire.js.linux_QMARK_ = (function c3kit$wire$js$linux_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\(Linux/);
});
c3kit.wire.js.ios_QMARK_ = (function c3kit$wire$js$ios_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\((iPhone|iPad|iPod)/);
});
c3kit.wire.js.android_QMARK_ = (function c3kit$wire$js$android_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1(/\(Android/);
});
c3kit.wire.js.clear_interval = (function c3kit$wire$js$clear_interval(interval){
return clearInterval(interval);
});
c3kit.wire.js.clear_timeout = (function c3kit$wire$js$clear_timeout(timeout){
return clearTimeout(timeout);
});
c3kit.wire.js.context_2d = (function c3kit$wire$js$context_2d(canvas){
return canvas.getContext("2d");
});
c3kit.wire.js.active_element = (function c3kit$wire$js$active_element(){
return document.activeElement;
});
c3kit.wire.js.doc_body = (function c3kit$wire$js$doc_body(var_args){
var G__24904 = arguments.length;
switch (G__24904) {
case 0:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body;
}));

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return doc.body;
}));

(c3kit.wire.js.doc_body.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.doc_cookie = (function c3kit$wire$js$doc_cookie(){
return document.cookie;
});
c3kit.wire.js.doc_ready_state = (function c3kit$wire$js$doc_ready_state(){
return document.readyState;
});
c3kit.wire.js.doc_ready_QMARK_ = (function c3kit$wire$js$doc_ready_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("complete",c3kit.wire.js.doc_ready_state());
});
c3kit.wire.js.document = (function c3kit$wire$js$document(var_args){
var G__24907 = arguments.length;
switch (G__24907) {
case 0:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0 = (function (){
return document;
}));

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1 = (function (node){
return node.ownerDocument;
}));

(c3kit.wire.js.document.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.e_checked_QMARK_ = (function c3kit$wire$js$e_checked_QMARK_(e){
return e.target.checked;
});
c3kit.wire.js.e_client_x = (function c3kit$wire$js$e_client_x(e){
return e.clientX;
});
c3kit.wire.js.e_client_y = (function c3kit$wire$js$e_client_y(e){
return e.clientY;
});
c3kit.wire.js.e_coordinates = (function c3kit$wire$js$e_coordinates(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
c3kit.wire.js.e_related_target = (function c3kit$wire$js$e_related_target(e){
return e.relatedTarget;
});
c3kit.wire.js.e_left_click_QMARK_ = (function c3kit$wire$js$e_left_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_wheel_click_QMARK_ = (function c3kit$wire$js$e_wheel_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_right_click_QMARK_ = (function c3kit$wire$js$e_right_click_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(e,"button"));
});
c3kit.wire.js.e_target = (function c3kit$wire$js$e_target(e){
return e.target;
});
c3kit.wire.js.e_text = (function c3kit$wire$js$e_text(e){
return e.target.value;
});
c3kit.wire.js.e_type = (function c3kit$wire$js$e_type(e){
return e.type;
});
c3kit.wire.js.file__GT_clj = (function c3kit$wire$js$file__GT_clj(file){
return c3kit.apron.corec.remove_nils(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$name,file.name,cljs.core.cst$kw$type,file.type,cljs.core.cst$kw$size,file.size,cljs.core.cst$kw$last_DASH_modified,file.lastModified,cljs.core.cst$kw$last_DASH_modified_DASH_date,file.lastModifiedDate,cljs.core.cst$kw$webkit_DASH_relative_DASH_path,file.webkitRelativePath,cljs.core.cst$kw$file,file], null));
});
c3kit.wire.js.e_files = (function c3kit$wire$js$e_files(e){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.file__GT_clj,(function (){var or__4126__auto__ = (function (){var G__24910 = e;
var G__24910__$1 = (((G__24910 == null))?null:G__24910.dataTransfer);
if((G__24910__$1 == null)){
return null;
} else {
return G__24910__$1.files;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__24912 = e;
var G__24912__$1 = (((G__24912 == null))?null:G__24912.target);
if((G__24912__$1 == null)){
return null;
} else {
return G__24912__$1.files;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})());
});
c3kit.wire.js.element_by_id = (function c3kit$wire$js$element_by_id(id){
return document.getElementById(id);
});
c3kit.wire.js.frame_window = (function c3kit$wire$js$frame_window(iframe){
return iframe.contentWindow;
});
c3kit.wire.js.interval = (function c3kit$wire$js$interval(millis,f){
return setInterval(f,millis);
});
c3kit.wire.js.node_add_class = (function c3kit$wire$js$node_add_class(node,class$){
return node.classList.add(class$);
});
c3kit.wire.js.node_append_child = (function c3kit$wire$js$node_append_child(node,child){
return node.appendChild(child);
});
c3kit.wire.js.node_children = (function c3kit$wire$js$node_children(node){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node.childNodes);
});
c3kit.wire.js.node_classes = (function c3kit$wire$js$node_classes(node){
return node.className;
});
c3kit.wire.js.node_clone = (function c3kit$wire$js$node_clone(node,deep_QMARK_){
return node.cloneNode(deep_QMARK_);
});
c3kit.wire.js.node_files = (function c3kit$wire$js$node_files(node){
return node.files;
});
c3kit.wire.js.node_height = (function c3kit$wire$js$node_height(node){
return node.clientHeight;
});
c3kit.wire.js.node_id = (function c3kit$wire$js$node_id(node){
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2(node,"id");
});
c3kit.wire.js.node_id_EQ_ = (function c3kit$wire$js$node_id_EQ_(node,id){
return c3kit.wire.js.o_set(node,"id",id);
});
c3kit.wire.js.node_text = (function c3kit$wire$js$node_text(node){
return node.innerText;
});
c3kit.wire.js.node_parent = (function c3kit$wire$js$node_parent(node){
return node.parentNode;
});
c3kit.wire.js.node_placeholder = (function c3kit$wire$js$node_placeholder(node){
return node.placeholder;
});
c3kit.wire.js.node_remove_child = (function c3kit$wire$js$node_remove_child(node,child){
return node.removeChild(child);
});
c3kit.wire.js.node_remove_class = (function c3kit$wire$js$node_remove_class(node,class$){
return node.classList.remove(class$);
});
c3kit.wire.js.node_scroll_left = (function c3kit$wire$js$node_scroll_left(node){
return node.scrollLeft;
});
c3kit.wire.js.node_scroll_top = (function c3kit$wire$js$node_scroll_top(node){
return node.scrollTop;
});
c3kit.wire.js.node_size = (function c3kit$wire$js$node_size(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.clientWidth,node.clientHeight], null);
});
c3kit.wire.js.node_style = (function c3kit$wire$js$node_style(node){
return node.style;
});
c3kit.wire.js.node_value = (function c3kit$wire$js$node_value(node){
return node.value;
});
c3kit.wire.js.node_width = (function c3kit$wire$js$node_width(node){
return node.clientWidth;
});
c3kit.wire.js.page_href = (function c3kit$wire$js$page_href(){
return window.location.href;
});
c3kit.wire.js.page_hash = (function c3kit$wire$js$page_hash(){
return window.location.hash;
});
c3kit.wire.js.page_pathname = (function c3kit$wire$js$page_pathname(){
return window.location.pathname;
});
c3kit.wire.js.page_reload_BANG_ = (function c3kit$wire$js$page_reload_BANG_(){
return window.location.reload();
});
c3kit.wire.js.page_title = (function c3kit$wire$js$page_title(){
return document.title;
});
c3kit.wire.js.page_title_EQ_ = (function c3kit$wire$js$page_title_EQ_(title){
return (document.title = title);
});
c3kit.wire.js.post_message = (function c3kit$wire$js$post_message(window,message,target_domain){
return window.postMessage(cljs.core.clj__GT_js(message),target_domain);
});
c3kit.wire.js.print_page = (function c3kit$wire$js$print_page(){
return window.print();
});
c3kit.wire.js.query_selector = (function c3kit$wire$js$query_selector(selector){
return document.querySelector(selector);
});
c3kit.wire.js.register_post_message_handler = (function c3kit$wire$js$register_post_message_handler(handler){
return window.addEventListener("message",handler);
});
c3kit.wire.js.register_storage_handler = (function c3kit$wire$js$register_storage_handler(handler){
return window.addEventListener("storage",handler);
});
c3kit.wire.js.remove_local_storage = (function c3kit$wire$js$remove_local_storage(key){
return localStorage.removeItem(key);
});
c3kit.wire.js.screen_size = (function c3kit$wire$js$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.width,screen.height], null);
});
c3kit.wire.js.set_local_storage = (function c3kit$wire$js$set_local_storage(key,value){
return localStorage.setItem(key,value);
});
c3kit.wire.js.timeout = (function c3kit$wire$js$timeout(millis,f){
return setTimeout(f,millis);
});
c3kit.wire.js.uri_encode = (function c3kit$wire$js$uri_encode(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24914 = arguments.length;
var i__4737__auto___24915 = (0);
while(true){
if((i__4737__auto___24915 < len__4736__auto___24914)){
args__4742__auto__.push((arguments[i__4737__auto___24915]));

var G__24916 = (i__4737__auto___24915 + (1));
i__4737__auto___24915 = G__24916;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
return encodeURIComponent(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,stuff));
}));

(c3kit.wire.js.uri_encode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.js.uri_encode.cljs$lang$applyTo = (function (seq24913){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24913));
}));

c3kit.wire.js.window_close_BANG_ = (function c3kit$wire$js$window_close_BANG_(){
return window.close();
});
c3kit.wire.js.window_open = (function c3kit$wire$js$window_open(url,window_name,options_string){
return window.open(url,window_name,options_string);
});
c3kit.wire.js.node_bounds = (function c3kit$wire$js$node_bounds(node){
var rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y,rect.width,rect.height], null);
});
/**
 * Return a hashmap of cookie names and their values.
 */
c3kit.wire.js.cookies = (function c3kit$wire$js$cookies(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.string.blank_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24917_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__24917_SHARP_,"=");
}))),clojure.string.split.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.doc_cookie(),"; "));
});
/**
 * Resolves a value into a DOM node.
 *   Possible values:
 *  - string id       - id of the node
 *  - string selector - CSS selector to find the node
 *  - node            - anything else is assumed to be the node
 */
c3kit.wire.js.resolve_node = (function c3kit$wire$js$resolve_node(thing){
if(typeof thing === 'string'){
var or__4126__auto__ = c3kit.wire.js.element_by_id(thing);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return c3kit.wire.js.query_selector(thing);
}
} else {
return thing;
}
});
c3kit.wire.js.ancestor_where = (function c3kit$wire$js$ancestor_where(pred,node){
while(true){
if((node == null)){
return null;
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(node) : pred.call(null,node)))){
return node;
} else {
var G__24918 = pred;
var G__24919 = node.parentElement;
pred = G__24918;
node = G__24919;
continue;

}
}
break;
}
});
c3kit.wire.js.ancestor_QMARK_ = (function c3kit$wire$js$ancestor_QMARK_(ancestor,node){
return cljs.core.boolean$(c3kit.wire.js.ancestor_where((function (p1__24920_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ancestor,p1__24920_SHARP_);
}),node));
});
/**
 * Give an event the nod, as if saying: Good job, your work is done.
 */
c3kit.wire.js.nod = (function c3kit$wire$js$nod(e){
return e.preventDefault();
});
/**
 * Return function to suppress browser event with nod and call the supplied function with args.
 */
c3kit.wire.js.nod_n_do = (function c3kit$wire$js$nod_n_do(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24923 = arguments.length;
var i__4737__auto___24924 = (0);
while(true){
if((i__4737__auto___24924 < len__4736__auto___24923)){
args__4742__auto__.push((arguments[i__4737__auto___24924]));

var G__24925 = (i__4737__auto___24924 + (1));
i__4737__auto___24924 = G__24925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nod(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nod_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nod_n_do.cljs$lang$applyTo = (function (seq24921){
var G__24922 = cljs.core.first(seq24921);
var seq24921__$1 = cljs.core.next(seq24921);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24922,seq24921__$1);
}));

/**
 * Nip the event in the bud, before it causes any trouble.
 */
c3kit.wire.js.nip = (function c3kit$wire$js$nip(e){
return e.stopPropagation();
});
/**
 * Return function to suppress browser event with nip and call the supplied function with args.
 */
c3kit.wire.js.nip_n_do = (function c3kit$wire$js$nip_n_do(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24928 = arguments.length;
var i__4737__auto___24929 = (0);
while(true){
if((i__4737__auto___24929 < len__4736__auto___24928)){
args__4742__auto__.push((arguments[i__4737__auto___24929]));

var G__24930 = (i__4737__auto___24929 + (1));
i__4737__auto___24929 = G__24930;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nip(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nip_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nip_n_do.cljs$lang$applyTo = (function (seq24926){
var G__24927 = cljs.core.first(seq24926);
var seq24926__$1 = cljs.core.next(seq24926);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24927,seq24926__$1);
}));

/**
 * Nix an event: Stop what you're doing and get the hell out.
 */
c3kit.wire.js.nix = (function c3kit$wire$js$nix(e){
c3kit.wire.js.nip(e);

return c3kit.wire.js.nod(e);
});
/**
 * Return function to suppress browser event with nix and call the supplied function with args.
 */
c3kit.wire.js.nix_n_do = (function c3kit$wire$js$nix_n_do(var_args){
var args__4742__auto__ = [];
var len__4736__auto___24933 = arguments.length;
var i__4737__auto___24934 = (0);
while(true){
if((i__4737__auto___24934 < len__4736__auto___24933)){
args__4742__auto__.push((arguments[i__4737__auto___24934]));

var G__24935 = (i__4737__auto___24934 + (1));
i__4737__auto___24934 = G__24935;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nix(e);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(a_fn,args);
});
}));

(c3kit.wire.js.nix_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nix_n_do.cljs$lang$applyTo = (function (seq24931){
var G__24932 = cljs.core.first(seq24931);
var seq24931__$1 = cljs.core.next(seq24931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24932,seq24931__$1);
}));

/**
 * Tell the browser to load the given URL, with full HTTP request/response process.
 */
c3kit.wire.js.redirect_BANG_ = (function c3kit$wire$js$redirect_BANG_(url){
return (window.location = url);
});
/**
 * Resolved the node and focus.
 *   Options: {:preventScroll true ;; default is false
 *          :focusVisible true}  ;; default may be false 
 */
c3kit.wire.js.focus_BANG_ = (function c3kit$wire$js$focus_BANG_(var_args){
var G__24937 = arguments.length;
switch (G__24937) {
case 1:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__24938 = thing;
var G__24938__$1 = (((G__24938 == null))?null:c3kit.wire.js.resolve_node(G__24938));
if((G__24938__$1 == null)){
return null;
} else {
return G__24938__$1.focus();
}
}));

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__24939 = thing;
var G__24939__$1 = (((G__24939 == null))?null:c3kit.wire.js.resolve_node(G__24939));
if((G__24939__$1 == null)){
return null;
} else {
return G__24939__$1.focus(cljs.core.clj__GT_js(options));
}
}));

(c3kit.wire.js.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.blur_BANG_ = (function c3kit$wire$js$blur_BANG_(thing){
var G__24941 = thing;
var G__24941__$1 = (((G__24941 == null))?null:c3kit.wire.js.resolve_node(G__24941));
if((G__24941__$1 == null)){
return null;
} else {
return G__24941__$1.blur();
}
});
c3kit.wire.js.click_BANG_ = (function c3kit$wire$js$click_BANG_(thing){
var G__24942 = thing;
var G__24942__$1 = (((G__24942 == null))?null:c3kit.wire.js.resolve_node(G__24942));
if((G__24942__$1 == null)){
return null;
} else {
return G__24942__$1.click();
}
});
/**
 * True if the element is the document's activeElement.
 */
c3kit.wire.js.active_QMARK_ = (function c3kit$wire$js$active_QMARK_(thing){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.js.active_element(),c3kit.wire.js.resolve_node(thing));
});
/**
 * True if the element is not the document's activeElement.
 */
c3kit.wire.js.inactive_QMARK_ = (function c3kit$wire$js$inactive_QMARK_(thing){
return (!(c3kit.wire.js.active_QMARK_(thing)));
});
c3kit.wire.js.add_listener = (function c3kit$wire$js$add_listener(var_args){
var G__24944 = arguments.length;
switch (G__24944) {
case 3:
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$3 = (function (node,event,listener){
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$4(node,event,listener,null);
}));

(c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$4 = (function (node,event,listener,options){
if(cljs.core.truth_(node)){
return node.addEventListener(event,listener,(cljs.core.truth_(options)?cljs.core.clj__GT_js(options):null));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.js",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-listener to nil node"], null);
}),null)),null,(25),null);
}
}));

(c3kit.wire.js.add_listener.cljs$lang$maxFixedArity = 4);

c3kit.wire.js.remove_listener = (function c3kit$wire$js$remove_listener(var_args){
var G__24947 = arguments.length;
switch (G__24947) {
case 3:
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$3 = (function (node,event,listener){
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$4(node,event,listener,null);
}));

(c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$4 = (function (node,event,listener,options){
if(cljs.core.truth_(node)){
return node.removeEventListener(event,listener,(cljs.core.truth_(options)?cljs.core.clj__GT_js(options):null));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.wire.js",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remove-listener to nil node"], null);
}),null)),null,(26),null);
}
}));

(c3kit.wire.js.remove_listener.cljs$lang$maxFixedArity = 4);

c3kit.wire.js.add_doc_listener = (function c3kit$wire$js$add_doc_listener(event,handler){
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$3(document,event,handler);
});
c3kit.wire.js.remove_doc_listener = (function c3kit$wire$js$remove_doc_listener(event,handler){
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$3(document,event,handler);
});
c3kit.wire.js.__GT_query_value = (function c3kit$wire$js$__GT_query_value(v){
if((v instanceof Date)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return v;
}
});
c3kit.wire.js.__GT_query_string = (function c3kit$wire$js$__GT_query_string(params){
return cljs_http.client.generate_query_string((c3kit.wire.js.update_vals.cljs$core$IFn$_invoke$arity$2 ? c3kit.wire.js.update_vals.cljs$core$IFn$_invoke$arity$2(params,c3kit.wire.js.__GT_query_value) : c3kit.wire.js.update_vals.call(null,params,c3kit.wire.js.__GT_query_value)));
});
c3kit.wire.js.encode_url = (function c3kit$wire$js$encode_url(root,params){
var G__24949 = root;
if(cljs.core.seq(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24949),"?",c3kit.wire.js.__GT_query_string(params)].join('');
} else {
return G__24949;
}
});
c3kit.wire.js.download = (function c3kit$wire$js$download(var_args){
var G__24951 = arguments.length;
switch (G__24951) {
case 2:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2 = (function (url,filename){
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3(url,filename,cljs.core.PersistentArrayMap.EMPTY);
}));

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3 = (function (url,filename,params){
var a = document.createElement("a");
var url__$1 = c3kit.wire.js.encode_url(url,params);
(a.href = url__$1);

(a.download = filename);

return a.click();
}));

(c3kit.wire.js.download.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.download_data = (function c3kit$wire$js$download_data(data,content_type,filename){
var blob = (new Blob(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,content_type], null))));
var url = URL.createObjectURL(blob);
c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2(url,filename);

return c3kit.wire.js.timeout((100),(function (){
return URL.revokeObjectURL(url);
}));
});
c3kit.wire.js.copy_to_clipboard_fallback = (function c3kit$wire$js$copy_to_clipboard_fallback(text){
var textarea = document.createElement("textarea");
var body = document.body;
(textarea.textContent = text);

body.appendChild(textarea);

var selection = document.getSelection();
var range = document.createRange();
range.selectNode(textarea);

selection.removeAllRanges();

selection.addRange(range);

document.execCommand("copy");

selection.removeAllRanges();

return body.removeChild(textarea);
});
c3kit.wire.js.copy_to_clipboard = (function c3kit$wire$js$copy_to_clipboard(text){
var temp__5802__auto__ = navigator.clipboard;
if(cljs.core.truth_(temp__5802__auto__)){
var clipboard = temp__5802__auto__;
return clipboard.writeText(text);
} else {
return c3kit.wire.js.copy_to_clipboard_fallback(text);
}
});
c3kit.wire.js.begin_path_BANG_ = (function c3kit$wire$js$begin_path_BANG_(ctx){
return ctx.beginPath();
});
c3kit.wire.js.stroke_BANG_ = (function c3kit$wire$js$stroke_BANG_(ctx){
return ctx.stroke();
});
c3kit.wire.js.fill_BANG_ = (function c3kit$wire$js$fill_BANG_(ctx){
return ctx.fill();
});
c3kit.wire.js.line_width_EQ_ = (function c3kit$wire$js$line_width_EQ_(ctx,w){
return (ctx.lineWidth = w);
});
c3kit.wire.js.stroke_color_EQ_ = (function c3kit$wire$js$stroke_color_EQ_(ctx,color){
return (ctx.strokeStyle = color);
});
c3kit.wire.js.fill_color_EQ_ = (function c3kit$wire$js$fill_color_EQ_(ctx,color){
return (ctx.fillStyle = color);
});
c3kit.wire.js.font_EQ_ = (function c3kit$wire$js$font_EQ_(ctx,font){
return (ctx.font = font);
});
c3kit.wire.js.text_align_EQ_ = (function c3kit$wire$js$text_align_EQ_(ctx,align){
return (ctx.textAlign = align);
});
c3kit.wire.js.close_path_BANG_ = (function c3kit$wire$js$close_path_BANG_(ctx){
return ctx.closePath();
});
c3kit.wire.js.move_to_BANG_ = (function c3kit$wire$js$move_to_BANG_(ctx,p__24953){
var vec__24954 = p__24953;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24954,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24954,(1),null);
return ctx.moveTo(x,y);
});
c3kit.wire.js.line_to_BANG_ = (function c3kit$wire$js$line_to_BANG_(ctx,p__24957){
var vec__24958 = p__24957;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958,(1),null);
return ctx.lineTo(x,y);
});
c3kit.wire.js.fill_rect_BANG_ = (function c3kit$wire$js$fill_rect_BANG_(ctx,p__24961,p__24962){
var vec__24963 = p__24961;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963,(1),null);
var vec__24966 = p__24962;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24966,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24966,(1),null);
return ctx.fillRect(x1,y1,x2,y2);
});
c3kit.wire.js.stroke_rect_BANG_ = (function c3kit$wire$js$stroke_rect_BANG_(ctx,p__24969,p__24970){
var vec__24971 = p__24969;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24971,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24971,(1),null);
var vec__24974 = p__24970;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24974,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24974,(1),null);
return ctx.strokeRect(x1,y1,x2,y2);
});
c3kit.wire.js.fill_text_BANG_ = (function c3kit$wire$js$fill_text_BANG_(ctx,text,p__24977){
var vec__24978 = p__24977;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(1),null);
return ctx.fillText(text,x,y);
});
c3kit.wire.js.scroll_into_view = (function c3kit$wire$js$scroll_into_view(var_args){
var G__24982 = arguments.length;
switch (G__24982) {
case 1:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2(thing,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$behavior,"smooth"], null));
}));

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__24983 = c3kit.wire.js.resolve_node(thing);
if((G__24983 == null)){
return null;
} else {
return G__24983.scrollIntoView(cljs.core.clj__GT_js(options));
}
}));

(c3kit.wire.js.scroll_into_view.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.scroll_to_top = (function c3kit$wire$js$scroll_to_top(){
return window.scrollTo(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$behavior,"smooth",cljs.core.cst$kw$top,(0)], null)));
});
c3kit.wire.js.console_log = cljs.core.partial.cljs$core$IFn$_invoke$arity$1(console.log);
