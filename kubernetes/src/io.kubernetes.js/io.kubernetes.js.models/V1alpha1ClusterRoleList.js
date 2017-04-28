/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ListMeta', 'io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ListMeta'), require('./V1alpha1ClusterRole'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1alpha1ClusterRoleList = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ListMeta, root.KubernetesJsClient.V1alpha1ClusterRole);
  }
}(this, function(ApiClient, V1ListMeta, V1alpha1ClusterRole) {
  'use strict';




  /**
   * The V1alpha1ClusterRoleList model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRoleList
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1alpha1ClusterRoleList</code>.
   * ClusterRoleList is a collection of ClusterRoles
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRoleList
   * @class
   * @param items {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRole>} Items is a list of ClusterRoles
   */
  var exports = function(items) {
    var _this = this;


    _this['items'] = items;


  };

  /**
   * Constructs a <code>V1alpha1ClusterRoleList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRoleList} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRoleList} The populated <code>V1alpha1ClusterRoleList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V1alpha1ClusterRole]);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ListMeta.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * Items is a list of ClusterRoles
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1alpha1ClusterRole>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Standard object's metadata.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));

