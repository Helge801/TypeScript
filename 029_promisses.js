"use strict";
// Start mowing -> Pending
// complete the mowing -> Resolve
// Did not complete successfully -> Reject
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('...uploading')
    .then((res) => {
    upload = res;
    return performUpload('...compressing');
})
    .then((res) => {
    upload = res;
    return performUpload('...transfering');
})
    .then((res) => {
    transfer = res;
    return performUpload('...Image uploading completed');
});
//# sourceMappingURL=029_promisses.js.map