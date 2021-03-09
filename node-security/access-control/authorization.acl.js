const ACL = require("acl2");
const acl = new ACL(new ACL.memoryBackend());
// guest is allowed to view blogs
acl.allow("guest", "blogs", "view");
// check if the permission is granted
acl.isAllowed("joed", "blogs", "view", (err, res) => {
  if (res) {
    console.log("User joed is allowed to view blogs");
  }
});
