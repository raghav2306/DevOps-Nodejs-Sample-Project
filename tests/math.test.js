"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/math");
describe("Math Utils", () => {
    test("adds two numbers", () => {
        expect((0, math_1.add)(3, 2)).toBe(5);
    });
    test("subtracts two numbers", () => {
        expect((0, math_1.subtract)(5, 3)).toBe(2);
    });
});
