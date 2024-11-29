import { expect, test } from "vitest";
import { parser } from "./parser";
// 语法分析

test.skip("parser", () => {
    const tokens = [
        { type: "paren", value: "(" },
        { type: "name", value: "add" },
        { type: "number", value: "2" },
        { type: "paren", value: "(" },
        { type: "name", value: "substract" },
        { type: "number", value: "4" },
        { type: "number", value: "2" },
        { type: "paren", value: ")" },
        { type: "paren", value: ")" },
    ]

    const ast = {
        type: "Program",
        body: [
            {
                type: "CallExpression",
                name: "add",
                params: [
                    {
                        type: "NumberLiteral",
                        value: "2"
                    },
                    {
                        type: "CallExpression",
                        name: "substract",
                        params: [
                            {
                                type: "NumberLiteral",
                                value: "4"
                            },
                            {
                                type: "NumberLiteral",
                                value: "2"
                            }
                        ]
                    }
                ]
            }
        ]

    }

    expect(parser(tokens)).toEqual(ast)
})


test("number test", () => {
    const tokens = [
        { type: "number", value: "2" }
    ]

    const ast = {
        type: "Program",
        body: [
            {
                type: "NumberLiteral",
                value: "2"
            }
        ]
    }

    expect(parser(tokens)).toEqual(ast)
})