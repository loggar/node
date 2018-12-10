/**
 * module object.toStringFor Debugging
 * version 1.0.2
 * charly.loggar@gmail.com
 */
var loggarJsObjDebugStrMaker = function(obj_or_arr) {
	var str = "{";
	
	for(prop_or_index in obj_or_arr) {
		str += prop_or_index + ":" ;
		
		if(typeof obj_or_arr[prop_or_index] == "object") {
			str += loggarJsObjDebugStrMaker(obj_or_arr[prop_or_index]);
		} else {
			str += obj_or_arr[prop_or_index];
		}
		
		str += ", "
	}
	
	if(str.length > 1) {
		return str.substring(0, str.length-2) + "}"; 
	} else {
		return str + "}";
	}
}

/**
 * module logger
 * version 1.0.2
 * charly.loggar@gmail.com
 */
var logger = {
//		debug_mode : true,
//		error_mode : true,
		fn_logging_tool : null,
		prefix_debug : "[DEBUG] ",
		prefix_err : "[ERROR] ",
		typeof_logTarget : "",
		debug : function(logTarget) {
//			if(!this.debug_mode) return;
			
			this.typeof_logTarget = typeof logTarget || "";
			this.str_debug = this.prefix_debug + this.typeof_logTarget + " " + logTarget;
			
			try {
				if(this.typeof_logTarget == "object") this.str_debug += " " + loggarJsObjDebugStrMaker(logTarget);
			} catch (err) {
				this.error(err);
			}
			
			this.fn_logging_tool(this.str_debug);
			return;
		},
		error : function(e) {
//			if(!this.error_mode) return;
			this.fn_logging_tool(this.prefix_err + e);
			return;
		}
};
//logger.debug_mode = true;
//logger.error_mode = true;
logger.fn_logging_tool = logger.fn_logging_tool || console.log;
/* TEST logger
logger.debug("adf");
logger.debug(1);
logger.debug([1,2,3]);
logger.debug({a:"1", b:"2", c:"3"});
*/

module.exports = logger;

