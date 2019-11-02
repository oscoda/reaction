"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query createMockNetworkLayerTestAliasQuery {
  artist(id: "banksy") {
    forSaleArtworks: artworks(filter: IS_FOR_SALE) {
      __id
    }
    notForSaleArtworks: artworks(filter: IS_NOT_FOR_SALE) {
      __id
    }
    __id
  }
}
*/
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v1 = [v0],
      v2 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "artist",
    "storageKey": "artist(id:\"banksy\")",
    "args": [{
      "kind": "Literal",
      "name": "id",
      "value": "banksy",
      "type": "String!"
    }],
    "concreteType": "Artist",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": "forSaleArtworks",
      "name": "artworks",
      "storageKey": "artworks(filter:\"IS_FOR_SALE\")",
      "args": [{
        "kind": "Literal",
        "name": "filter",
        "value": "IS_FOR_SALE",
        "type": "[ArtistArtworksFilters]"
      }],
      "concreteType": "Artwork",
      "plural": true,
      "selections": v1
    }, {
      "kind": "LinkedField",
      "alias": "notForSaleArtworks",
      "name": "artworks",
      "storageKey": "artworks(filter:\"IS_NOT_FOR_SALE\")",
      "args": [{
        "kind": "Literal",
        "name": "filter",
        "value": "IS_NOT_FOR_SALE",
        "type": "[ArtistArtworksFilters]"
      }],
      "concreteType": "Artwork",
      "plural": true,
      "selections": v1
    }, v0]
  }];
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "createMockNetworkLayerTestAliasQuery",
    "id": null,
    "text": "query createMockNetworkLayerTestAliasQuery {\n  artist(id: \"banksy\") {\n    forSaleArtworks: artworks(filter: IS_FOR_SALE) {\n      __id\n    }\n    notForSaleArtworks: artworks(filter: IS_NOT_FOR_SALE) {\n      __id\n    }\n    __id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createMockNetworkLayerTestAliasQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v2
    },
    "operation": {
      "kind": "Operation",
      "name": "createMockNetworkLayerTestAliasQuery",
      "argumentDefinitions": [],
      "selections": v2
    }
  };
}();

node.hash = '7e9f3aa22daa4f72c6a1825d9f181356';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createMockNetworkLayerTestAliasQuery.graphql.js.map