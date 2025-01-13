"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdMongo = void 0;
const mongoose_1 = require("mongoose");
const validateIdMongo = (id, message) => __awaiter(void 0, void 0, void 0, function* () {
    const err = new Error();
    if (!id) {
        err.message = "you must add an id";
        throw err;
    }
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        err.message = message ? message : "the ID is wrong";
        throw err;
    }
    return;
});
exports.validateIdMongo = validateIdMongo;
