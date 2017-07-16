/**
 * Created by bastienGirschig on 28/04/2017.
 */

/**
 * Returns true if at least one of the elements in arr1 exists in arr2
 * @returns {boolean}
 */
module.exports.arraysIntersect = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++) if (arr2.indexOf(arr1[i]) != -1) return true;
  return false
};

/**
 * returns the first element in sourceArr that also exists in arr2
 * @param {array} sourceArr order matters
 * @param {array} arr2 order does not matter
 * @returns {*}
 */
module.exports.getFirstIntersect = function(sourceArr,arr2){
  for (let i=0;i<sourceArr.length;i++){
    let item = sourceArr[i];
    if(arr2.indexOf(item)>=0) return item
  }
  return null
};

/**
 * Generates an url with the given parameters
 * @param baseUrl (eg. www.google.com)
 * @param parameters an object containing the parameters to add to the url
 * @returns {string}
 */
module.exports.makeUrl = function(baseUrl, parameters={}) {
  let result = baseUrl;
  let paramString = Object.keys(parameters).map((key)=>{
    return parameters[key] == null ? null : key+"="+parameters[key];
  }).filter((item)=>{
    return item!=null;
  }).join("&");
  if (paramString.length>0) result += "?" + paramString;
  return result
};

module.exports.deg2rad = Math.PI / 180;