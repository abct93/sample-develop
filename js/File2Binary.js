(()=>{function n(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,i=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw i}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}onmessage=function(t){if(t.data){var r,e,o={size:t.data.size};(r=t.data,e=new FileReader,new Promise((function(n,t){e.onerror=function(){e.abort(),t("Unknown error occurred during reading the file")},e.onload=function(){console.log("onload"),n(e.result)},e.readAsArrayBuffer(r)}))).then((function(t){for(var r="",e=new Uint8Array(t),a=0;16*a<e.length;a++){var i,c="",u=16*a,f=n(e.slice(u,Math.min(e.length,u+16)));try{for(f.s();!(i=f.n()).done;)c+=" "+i.value.toString(16).toUpperCase().padStart(2,"0")}catch(n){f.e(n)}finally{f.f()}var l=u.toString(16).toUpperCase().padStart(8,"0");r+=c="".concat(l,":").concat(c,"\n")}o.binary=r,o.success=!0})).catch((function(n){o.cause=n,o.success=!1})),postMessage(o)}else postMessage("")}})();(()=>{function n(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,i=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw i}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}onmessage=function(t){if(t.data){var r,e,o={size:t.data.size};(r=t.data,e=new FileReader,new Promise((function(n,t){e.onerror=function(){e.abort(),t("Unknown error occurred during reading the file")},e.onload=function(){console.log("onload"),n(e.result)},e.readAsArrayBuffer(r)}))).then((function(t){for(var r="",e=new Uint8Array(t),a=0;16*a<e.length;a++){var i,c="",u=16*a,f=n(e.slice(u,Math.min(e.length,u+16)));try{for(f.s();!(i=f.n()).done;)c+=" "+i.value.toString(16).toUpperCase().padStart(2,"0")}catch(n){f.e(n)}finally{f.f()}var l=u.toString(16).toUpperCase().padStart(8,"0");r+=c="".concat(l,":").concat(c,"\n")}o.binary=r,o.success=!0})).catch((function(n){o.cause=n,o.success=!1})),postMessage(o)}else postMessage("")}})();