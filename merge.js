"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(collection_1, collection_2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        }
        else {
            result.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }
    return result;
}
exports.default = merge;
