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
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "WorksForYouFeed_viewer",
    "type": "Viewer",
    "metadata": {
      "connection": [{
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": ["me", "followsAndSaves", "notifications"]
      }]
    },
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "for_sale",
      "type": "Boolean",
      "defaultValue": true
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "Me",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "followsAndSaves",
        "storageKey": null,
        "args": null,
        "concreteType": "FollowsAndSaves",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": "notifications",
          "name": "__WorksForYou_notifications_connection",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "for_sale",
            "variableName": "for_sale",
            "type": "Boolean"
          }, {
            "kind": "Literal",
            "name": "sort",
            "value": "PUBLISHED_AT_DESC",
            "type": "ArtworkSorts"
          }],
          "concreteType": "FollowedArtistsArtworksGroupConnection",
          "plural": false,
          "selections": [{
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
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowedArtistsArtworksGroupEdge",
            "plural": true,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "FollowedArtistsArtworksGroup",
              "plural": false,
              "selections": [v0, {
                "kind": "ScalarField",
                "alias": null,
                "name": "href",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "summary",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "artists",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "published_at",
                "args": [{
                  "kind": "Literal",
                  "name": "format",
                  "value": "MMM DD",
                  "type": "String"
                }],
                "storageKey": "published_at(format:\"MMM DD\")"
              }, {
                "kind": "LinkedField",
                "alias": null,
                "name": "artworksConnection",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [{
                  "kind": "FragmentSpread",
                  "name": "ArtworkGrid_artworks",
                  "args": null
                }]
              }, {
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [{
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "resized",
                  "storageKey": "resized(height:80,width:80)",
                  "args": [{
                    "kind": "Literal",
                    "name": "height",
                    "value": 80,
                    "type": "Int"
                  }, {
                    "kind": "Literal",
                    "name": "width",
                    "value": 80,
                    "type": "Int"
                  }],
                  "concreteType": "ResizedImageUrl",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }]
                }, {
                  "kind": "ScalarField",
                  "alias": "__id",
                  "name": "id",
                  "args": null,
                  "storageKey": null
                }]
              }, {
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
          }]
        }]
      }, v0]
    }]
  };
}();

node.hash = '4a5f6fe1600a373f7271a88baf13d9cd';
var _default = node;
exports.default = _default;
//# sourceMappingURL=WorksForYouFeed_viewer.graphql.js.map