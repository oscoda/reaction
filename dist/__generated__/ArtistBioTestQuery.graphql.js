"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtistBioTestQuery {
  bio: artist(id: "unused") {
    ...ArtistBio_bio
    __id
  }
}

fragment ArtistBio_bio on Artist {
  biography_blurb(format: HTML, partner_bio: true) {
    text
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "unused",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "ArtistBioTestQuery",
    "id": null,
    "text": "query ArtistBioTestQuery {\n  bio: artist(id: \"unused\") {\n    ...ArtistBio_bio\n    __id\n  }\n}\n\nfragment ArtistBio_bio on Artist {\n  biography_blurb(format: HTML, partner_bio: true) {\n    text\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtistBioTestQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": "bio",
        "name": "artist",
        "storageKey": "artist(id:\"unused\")",
        "args": v0,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtistBio_bio",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtistBioTestQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": "bio",
        "name": "artist",
        "storageKey": "artist(id:\"unused\")",
        "args": v0,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "biography_blurb",
          "storageKey": "biography_blurb(format:\"HTML\",partner_bio:true)",
          "args": [{
            "kind": "Literal",
            "name": "format",
            "value": "HTML",
            "type": "Format"
          }, {
            "kind": "Literal",
            "name": "partner_bio",
            "value": true,
            "type": "Boolean"
          }],
          "concreteType": "ArtistBlurb",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
            "args": null,
            "storageKey": null
          }]
        }, v1]
      }]
    }
  };
}();

node.hash = 'f7fadd31b3f1d6d3ef89cd1911a4b0be';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistBioTestQuery.graphql.js.map