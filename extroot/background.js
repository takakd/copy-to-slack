!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);class n{constructor(e){this.webhookPath="","object"==typeof e&&e.webhookPath&&(this.webhookPath=e.webhookPath)}get webhookUrl(){return this.webhookPath?"https://hooks.slack.com/services/"+this.webhookPath:""}validate(){let e={};return this.webhookPath?this.webhookPath.match(/^(?!(http|\/))[a-zA-Z0-9/]+/)||(e.webhookPath="Enter a correct URL."):e.webhookPath="Enter a Slack Webhook URL for sending message.",e}}class r{constructor(e){this.chrome=e}async getOptions(){return new Promise(e=>{this.chrome.storage.sync.get(["hoge"],t=>{const o=new n(t.hoge);e(o)})})}async setOptions(e){return new Promise((t,o)=>{e instanceof n!=!1?this.chrome.storage.sync.set({hoge:e},()=>{t(!0)}):o("wrong instanceof")})}async contextMenuOnClickedCallback(e){if(!("fuga"===e.menuItemId))return;let t="";const o=["selectionText","linkUrl","srcUrl","pageUrl","frameUrl"];for(const n of o)if(e[n]){t=e[n];break}if(!t)return void console.log("no contents");const n=await this.getOptions();this.sendRequestToSlackApi(t,n.webhookUrl)}addContextMenu(){this.chrome.contextMenus.onClicked.addListener(this.contextMenuOnClickedCallback.bind(this));this.chrome.contextMenus.create({id:"fuga",type:"normal",title:"Send to Slack",contexts:["all"],visible:!0})}async sendRequestToSlackApi(e,t){const o={text:e};return await fetch(t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(o)}).then(e=>e.text()).then(e=>e)}}chrome.runtime.onInstalled.addListener((function(){new r(chrome).addContextMenu()}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay1vcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnNvcmVkdG9zbGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkN1cnNvcmVkVG9TbGFja09wdGlvbiIsImNvbnN0cnVjdG9yIiwidmFsdWVzIiwidGhpcyIsIndlYmhvb2tQYXRoIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJtYXRjaCIsIkN1cnNvcmVkVG9TbGFjayIsImNocm9tZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RvcmFnZSIsInN5bmMiLCJyZXN1bHQiLCJyZWplY3QiLCJzZXQiLCJpbmZvIiwibWVudUl0ZW1JZCIsIm1lc3NhZ2UiLCJvcmRlckxpc3QiLCJvcmRlciIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwiZ2V0T3B0aW9ucyIsInNlbmRSZXF1ZXN0VG9TbGFja0FwaSIsIndlYmhvb2tVcmwiLCJhZGRDb250ZXh0TWVudSIsImNvbnRleHRNZW51cyIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwiY29udGV4dE1lbnVPbkNsaWNrZWRDYWxsYmFjayIsImlkIiwidHlwZSIsInRpdGxlIiwiY29udGV4dHMiLCJ2aXNpYmxlIiwidGV4dCIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLHNDQzVFOUMsTUFBTUMsRUFLWEMsWUFBWUMsR0FDVkMsS0FBS0MsWUFBYyxHQUVHLGlCQUFYRixHQUNMQSxFQUFNLGNBQ1JDLEtBQUtDLFlBQWNGLEVBQU0sYUFTL0IsaUJBQ0UsT0FBS0MsS0FBS0MsWUF4QjRCLG9DQTJCRkQsS0FBS0MsWUFGaEMsR0FXWEMsV0FDRSxJQUFJQyxFQUFTLEdBUWIsT0FOS0gsS0FBS0MsWUFFRUQsS0FBS0MsWUFBWUcsTUFBTSxpQ0FDakNELEVBQU0sWUFBa0Isd0JBRnhCQSxFQUFNLFlBQWtCLGlEQUtuQkEsR0M3QkksTUFBTUUsRUFNbkJQLFlBQVlRLEdBQ1ZOLEtBQUtNLE9BQVNBLEVBT2hCLG1CQUNFLE9BQU8sSUFBSUMsUUFBU0MsSUFDbEJSLEtBQUtNLE9BQU9HLFFBQVFDLEtBQUtoQyxJQUFJLENBMUJoQixRQTBCK0JpQyxJQUMxQyxNQUFNN0IsRUFBUSxJQUFJZSxFQUFzQmMsRUFBTSxNQUM5Q0gsRUFBUTFCLE9BVWQsaUJBQWlCQSxHQUNmLE9BQU8sSUFBSXlCLFFBQVEsQ0FBQ0MsRUFBU0ksS0FDdkI5QixhQUFpQmUsSUFBMEIsRUFJL0NHLEtBQUtNLE9BQU9HLFFBQVFDLEtBQUtHLElBQUksQ0FBRSxLQUFjL0IsR0FBUyxLQUNwRDBCLEdBQVEsS0FKUkksRUFBTyxzQkFlYixtQ0FBbUNFLEdBRWpDLEtBcERrQixTQW1Ea0JBLEVBQUtDLFlBRXZDLE9BR0YsSUFBSUMsRUFBVSxHQUNkLE1BQU1DLEVBQVksQ0FDaEIsZ0JBQ0EsVUFDQSxTQUNBLFVBQ0EsWUFFRixJQUFLLE1BQU1DLEtBQVNELEVBQ2xCLEdBQUlILEVBQUtJLEdBQVEsQ0FDZkYsRUFBVUYsRUFBS0ksR0FDZixNQUdKLElBQUtGLEVBRUgsWUFEQUcsUUFBUUMsSUFBSSxlQUlkLE1BQU1DLFFBQWdCckIsS0FBS3NCLGFBQzNCdEIsS0FBS3VCLHNCQUFzQlAsRUFBU0ssRUFBUUcsWUFNOUNDLGlCQUVFekIsS0FBS00sT0FBT29CLGFBQWFDLFVBQVVDLFlBQ2pDNUIsS0FBSzZCLDZCQUE2QnhDLEtBQUtXLE9BS3pDQSxLQUFLTSxPQUFPb0IsYUFBYXZDLE9BQU8sQ0FDOUIyQyxHQTNGZ0IsT0E0RmhCQyxLQUFNLFNBQ05DLE1BQU8sZ0JBQ1BDLFNBTGUsQ0FBQyxPQU1oQkMsU0FBUyxJQVNiLDRCQUE0QkMsRUFBTVgsR0FFaEMsTUFBTVksRUFBTyxDQUFFRCxLQUFNQSxHQUVyQixhQUFhRSxNQUFNYixFQUFZLENBQzdCYyxPQUFRLE9BQ1JDLE1BQU8sV0FDUEMsUUFBUyxDQUdQLGVBQWdCLHFDQUVsQkosS0FBTUssS0FBS0MsVUFBVU4sS0FFcEJPLEtBQU1DLEdBQVFBLEVBQUlULFFBQ2xCUSxLQUFNUCxHQUFTQSxJQ25JdEI5QixPQUFPdUMsUUFBUUMsWUFBWWxCLGFBQVksV0FDekIsSUFBSXZCLEVBQWdCQyxRQUM1Qm1CIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNsYWNrV2ViaG9va0NvbW1vbkhvc3RQYXRoID0gXCJodHRwczovL2hvb2tzLnNsYWNrLmNvbS9zZXJ2aWNlcy9cIjtcblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXJzb3JlZFRvU2xhY2tPcHRpb24ge1xuICAvKipcbiAgICogUmVwcmVzZW50cyBhIG9wdGlvbnMgaW4gZXh0ZW5zaW9uLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlcykge1xuICAgIHRoaXMud2ViaG9va1BhdGggPSBcIlwiO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmICh2YWx1ZXNbXCJ3ZWJob29rUGF0aFwiXSkge1xuICAgICAgICB0aGlzLndlYmhvb2tQYXRoID0gdmFsdWVzW1wid2ViaG9va1BhdGhcIl07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNsYWNrIFdlYmhvb2sgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBTbGFjayBXZWJob29rIFVSTC5cbiAgICovXG4gIGdldCB3ZWJob29rVXJsKCkge1xuICAgIGlmICghdGhpcy53ZWJob29rUGF0aCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTbGFja1dlYmhvb2tDb21tb25Ib3N0UGF0aCArIHRoaXMud2ViaG9va1BhdGg7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgb3B0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIGVycm9yIG1lc3NhZ2UgaWYgbm90IHZhbGlkLCBlbXB0eSBvdGhlcndpc2UuXG4gICAqICBFYWNoIG1lc3NhZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGtleS5cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcblxuICAgIGlmICghdGhpcy53ZWJob29rUGF0aCkge1xuICAgICAgZXJyb3JzW1wid2ViaG9va1BhdGhcIl0gPSBcIkVudGVyIGEgU2xhY2sgV2ViaG9vayBVUkwgZm9yIHNlbmRpbmcgbWVzc2FnZS5cIjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLndlYmhvb2tQYXRoLm1hdGNoKC9eKD8hKGh0dHB8XFwvKSlbYS16QS1aMC05L10rLykpIHtcbiAgICAgIGVycm9yc1tcIndlYmhvb2tQYXRoXCJdID0gXCJFbnRlciBhIGNvcnJlY3QgVVJMLlwiO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXJzb3JlZFRvU2xhY2tPcHRpb24gfSBmcm9tIFwiLi9jdXJzb3JlZHRvc2xhY2stb3B0aW9uXCI7XG5cbi8qKlxuICogUGVyc2lzdGVuY2Ugb3B0aW9ucyBrZXkuXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5jb25zdCBPcHRpb25zS2V5ID0gXCJob2dlXCI7XG5cbi8qKlxuICogQ29udGV4dE1lbnVJZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuY29uc3QgQ29udGV4dE1lbnVJZCA9IFwiZnVnYVwiO1xuXG4vKipcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yZWRUb1NsYWNrIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBDdXJzb3JlZFRvU2xhY2tcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjaHJvbWUgQVBJXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjaHJvbWUpIHtcbiAgICB0aGlzLmNocm9tZSA9IGNocm9tZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gb3B0aW9ucyByZXR1cm5lZCBpZiBpdCByZXNvbHZlZC5cbiAgICovXG4gIGFzeW5jIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtPcHRpb25zS2V5XSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBDdXJzb3JlZFRvU2xhY2tPcHRpb24ocmVzdWx0W09wdGlvbnNLZXldKTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCBoYXMgcGVyc2lzdGVuY2Ugb3B0aW9ucy5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gcmV0dXJucyBib29sIGlmIGl0IHJlc29sdmVkLlxuICAgKi9cbiAgYXN5bmMgc2V0T3B0aW9ucyh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDdXJzb3JlZFRvU2xhY2tPcHRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgIHJlamVjdChcIndyb25nIGluc3RhbmNlb2ZcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbT3B0aW9uc0tleV06IHZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbnRleHRNZW51cy5vbkNsaWNrZWQgY2FsbGJhY2suXG4gICAqXG4gICAqIHRoaXMgaXMgdXNlZCBieSBhZGRDb250ZXh0TWVudSgpIGZ1bmN0aW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvY29udGV4dE1lbnVzI2V2ZW50LW9uQ2xpY2tlZH1cbiAgICovXG4gIGFzeW5jIGNvbnRleHRNZW51T25DbGlja2VkQ2FsbGJhY2soaW5mbykge1xuICAgIGNvbnN0IGlzTXlFdmVudCA9IENvbnRleHRNZW51SWQgPT09IGluZm8ubWVudUl0ZW1JZDtcbiAgICBpZiAoIWlzTXlFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBvcmRlckxpc3QgPSBbXG4gICAgICBcInNlbGVjdGlvblRleHRcIixcbiAgICAgIFwibGlua1VybFwiLFxuICAgICAgXCJzcmNVcmxcIixcbiAgICAgIFwicGFnZVVybFwiLFxuICAgICAgXCJmcmFtZVVybFwiLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlckxpc3QpIHtcbiAgICAgIGlmIChpbmZvW29yZGVyXSkge1xuICAgICAgICBtZXNzYWdlID0gaW5mb1tvcmRlcl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdubyBjb250ZW50cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICB0aGlzLnNlbmRSZXF1ZXN0VG9TbGFja0FwaShtZXNzYWdlLCBvcHRpb25zLndlYmhvb2tVcmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjb250ZXh0IG1lbnUuXG4gICAqL1xuICBhZGRDb250ZXh0TWVudSgpIHtcbiAgICAvLyBhZGQgb25DbGlja2VkIGNhbGxiYWNrLlxuICAgIHRoaXMuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoXG4gICAgICB0aGlzLmNvbnRleHRNZW51T25DbGlja2VkQ2FsbGJhY2suYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICAvLyBjb25zdCBjb250ZXh0cyA9IFtcInBhZ2VcIiwgXCJzZWxlY3Rpb25cIiwgXCJsaW5rXCIsIFwiZWRpdGFibGVcIiwgXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIl07XG4gICAgY29uc3QgY29udGV4dHMgPSBbXCJhbGxcIl07XG4gICAgdGhpcy5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICBpZDogQ29udGV4dE1lbnVJZCxcbiAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICB0aXRsZTogXCJTZW5kIHRvIFNsYWNrXCIsXG4gICAgICBjb250ZXh0czogY29udGV4dHMsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB0byBTbGFjayBBUEkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFByb3BlcnRpZXMgb2YgcG9zdCBib2R5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gd2ViaG9va1VybCBTbGFja1dlYmhvb2tVcmxcbiAgICovXG4gIGFzeW5jIHNlbmRSZXF1ZXN0VG9TbGFja0FwaSh0ZXh0LCB3ZWJob29rVXJsKSB7XG4gICAgLy8gYnVpbGQgZGF0YVxuICAgIGNvbnN0IGJvZHkgPSB7IHRleHQ6IHRleHQgfTtcblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh3ZWJob29rVXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gTk9URTogU2xhY2sgV2ViaG9vayBkb2VzIG5vdCBzdXBwb3J0IHByZWZsaWdodC5cbiAgICAgICAgLy8gaHR0cHM6Ly9hcGkuc2xhY2suY29tL3dlYlxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4oKGJvZHkpID0+IGJvZHkpO1xuICB9XG59XG4iLCJpbXBvcnQgQ3Vyc29yZWRUb1NsYWNrIGZyb20gXCIuL2N1cnNvcmVkdG9zbGFja1wiO1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGN0cyA9IG5ldyBDdXJzb3JlZFRvU2xhY2soY2hyb21lKTtcbiAgY3RzLmFkZENvbnRleHRNZW51KCk7XG5cbiAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe2NvbG9yOiAnIzNhYTc1Nyd9LCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb2xvciBpcyBncmVlbi5cIik7XG4gIC8vIH0pO1xuICAvLyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQucmVtb3ZlUnVsZXModW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50Lm9uUGFnZUNoYW5nZWQuYWRkUnVsZXMoW3tcbiAgLy8gICAgICAgICBjb25kaXRpb25zOiBbbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7XG4gIC8vICAgICAgICAgICAgIHBhZ2VVcmw6IHtob3N0RXF1YWxzOiAnZGV2ZWxvcGVyLmNocm9tZS5jb20nfSxcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgICAgIF0sXG4gIC8vICAgICAgICAgYWN0aW9uczogW25ldyBjaHJvbWUuZGVjbGFyYXRpdmVDb250ZW50LlNob3dQYWdlQWN0aW9uKCldXG4gIC8vICAgICB9XSk7XG4gIC8vIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9