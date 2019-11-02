"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "ArtistRecommendations_artist",
    "type": "Artist",
    "metadata": {
      "connection": [{
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": ["related", "artists"]
      }]
    },
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 3
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": ""
    }, {
      "kind": "LocalArgument",
      "name": "min_forsale_artworks",
      "type": "Int",
      "defaultValue": 7
    }],
    "selections": [v0, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "related",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistRelatedData",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": "artists",
        "name": "__ArtistRecommendations_artists_connection",
        "storageKey": null,
        "args": [{
          "kind": "Variable",
          "name": "min_forsale_artworks",
          "variableName": "min_forsale_artworks",
          "type": "Int"
        }],
        "concreteType": "ArtistConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [v0, {
              "kind": "FragmentSpread",
              "name": "RecommendedArtist_artist",
              "args": null
            }, v1, {
              "kind": "ScalarField",
              "alias": null,
              "name": "__typename",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "endCursor",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
          }]
        }]
      }]
    }, v1]
  };
}();

node.hash = '9e7938b6ba634599de75bdc87be9c6eb';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistRecommendations_artist.graphql.js.map