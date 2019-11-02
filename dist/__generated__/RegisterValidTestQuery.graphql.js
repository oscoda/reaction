"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query RegisterValidTestQuery {
  sale(id: "example-auction-id") {
    ...Register_sale
    __id
  }
  me {
    ...Register_me
    __id
  }
}

fragment Register_sale on Sale {
  id
  _id
  status
  __id
}

fragment Register_me on Me {
  id
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "example-auction-id",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "RegisterValidTestQuery",
    "id": null,
    "text": "query RegisterValidTestQuery {\n  sale(id: \"example-auction-id\") {\n    ...Register_sale\n    __id\n  }\n  me {\n    ...Register_me\n    __id\n  }\n}\n\nfragment Register_sale on Sale {\n  id\n  _id\n  status\n  __id\n}\n\nfragment Register_me on Me {\n  id\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "RegisterValidTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sale",
        "storageKey": "sale(id:\"example-auction-id\")",
        "args": v0,
        "concreteType": "Sale",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "Register_sale",
          "args": null
        }, v1]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "Register_me",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "RegisterValidTestQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sale",
        "storageKey": "sale(id:\"example-auction-id\")",
        "args": v0,
        "concreteType": "Sale",
        "plural": false,
        "selections": [v2, {
          "kind": "ScalarField",
          "alias": null,
          "name": "_id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "status",
          "args": null,
          "storageKey": null
        }, v1]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "Me",
        "plural": false,
        "selections": [v2, v1]
      }]
    }
  };
}();

node.hash = 'e09da6584348e9a59dfbc0da8831f992';
var _default = node;
exports.default = _default;
//# sourceMappingURL=RegisterValidTestQuery.graphql.js.map