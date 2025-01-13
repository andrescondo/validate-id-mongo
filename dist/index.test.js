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
const index_1 = require("./index");
test('validateIdMongo should throw an error if ID is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect((0, index_1.validateIdMongo)('invalid-id')).rejects.toThrow('the ID is wrong');
}));
test('validateIdMongo should not throw an error if ID is valid', () => __awaiter(void 0, void 0, void 0, function* () {
    yield expect((0, index_1.validateIdMongo)('507f1f77bcf86cd799439011')).resolves.not.toThrow();
}));
