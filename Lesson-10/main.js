/**
 * Optional chaining '?.'
 * Syntax: Value?.prop || undefined
 * user?.address?.street ?? defaultValue => remove undefined
 * 
 * The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
 * works as value.prop, if value exists, otherwise (when value is undefined/null) it returns undefined.
 */
let user = {}; // user has no address
alert(user?.address?.street); // undefined (no error)
let user2 = null;
alert(user2?.address); // undefined
alert(user2?.address?.street); // undefined


/**
 * Other variants: ?.( ), ?.[ ]
 * ?.( ) is used to call a function that may not exist.
 * 
*/
let userAdmin = {
  admin() {
    alert("I am Eric");
  }
};
let userGuest = {};
userAdmin.admin?.() ; // I am Eric
userGuest.admin?.(); // nothing happens (no such method) => check function admin() có tồn tại hay không.
