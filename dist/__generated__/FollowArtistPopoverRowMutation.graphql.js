"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation FollowArtistPopoverRowMutation(
  $input: FollowArtistInput!
  $excludeArtistIds: [String]!
) {
  followArtist(input: $input) {
    artist {
      __id
      related {
        suggested(first: 1, exclude_followed_artists: true, exclude_artist_ids: $excludeArtistIds) {
          edges {
            node {
              __id
              _id
              name
              image {
                cropped(width: 45, height: 45) {
                  url
                }
                __id: id
              }
            }
          }
        }
      }
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowArtistInput!",
    "defaultValue": null
  }, {
    "kind": "LocalArgument",
    "name": "excludeArtistIds",
    "type": "[String]!",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v2 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "followArtist",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "FollowArtistInput!"
    }],
    "concreteType": "FollowArtistPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": false,
      "selections": [v1, {
        "kind": "LinkedField",
        "alias": null,
        "name": "related",
        "storageKey": null,
        "args": null,
        "concreteType": "ArtistRelatedData",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "suggested",
          "storageKey": null,
          "args": [{
            "kind": "Variable",
            "name": "exclude_artist_ids",
            "variableName": "excludeArtistIds",
            "type": "[String]"
          }, {
            "kind": "Literal",
            "name": "exclude_followed_artists",
            "value": true,
            "type": "Boolean"
          }, {
            "kind": "Literal",
            "name": "first",
            "value": 1,
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
              "selections": [v1, {
                "kind": "ScalarField",
                "alias": null,
                "name": "_id",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
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
                  "name": "cropped",
                  "storageKey": "cropped(height:45,width:45)",
                  "args": [{
                    "kind": "Literal",
                    "name": "height",
                    "value": 45,
                    "type": "Int!"
                  }, {
                    "kind": "Literal",
                    "name": "width",
                    "value": 45,
                    "type": "Int!"
                  }],
                  "concreteType": "CroppedImageUrl",
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
              }]
            }]
          }]
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "FollowArtistPopoverRowMutation",
    "id": null,
    "text": "mutation FollowArtistPopoverRowMutation(\n  $input: FollowArtistInput!\n  $excludeArtistIds: [String]!\n) {\n  followArtist(input: $input) {\n    artist {\n      __id\n      related {\n        suggested(first: 1, exclude_followed_artists: true, exclude_artist_ids: $excludeArtistIds) {\n          edges {\n            node {\n              __id\n              _id\n              name\n              image {\n                cropped(width: 45, height: 45) {\n                  url\n                }\n                __id: id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowArtistPopoverRowMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v2
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowArtistPopoverRowMutation",
      "argumentDefinitions": v0,
      "selections": v2
    }
  };
}();

node.hash = '00f75e29203f26f7db1cb195fcda5978';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowArtistPopoverRowMutation.graphql.js.map