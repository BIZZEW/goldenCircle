/*by zhuhy*/
summerready = function() {
		initPage();
}
//判断是否存在json的key
function objIsEmpty(obj) {
		if (obj != undefined && obj != null && obj != "") {
				return false;
		} else {
				return true;
		}
};
//判断是否为空
function isEmpty(obj) {
		if ( typeof obj == "undefined" || obj == null || obj == "" || obj.trim() == "") {
				return true;
		} else {
				return false;
		}
}

var vue = null;

function initPage() {
		vue = new Vue({
				el : '#index',
				data : {
				},
				methods : {
						// 返回
						goback : function() {
								roads.confirmClose();
						},
						langFunk : function(strTag) {
								var langCode = isEmpty(summer.getStorage('lang')) ? 1 : summer.getStorage('lang');
								return lang.getStr(langCode, strTag);
						},
				},
				watch : {
				},
				mounted : function() {
						// 加载数据...
						this.$nextTick(function() {

						})
				}
		})
}