import { expect, test } from 'vitest'
import { tokenizer } from './tokenizer'


test("tokenizer", () => {
    const code = `(add 2 (substract 4 2))`

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
    expect(tokenizer(code)).toEqual(tokens)
})


test("paren", () => {
    const code = `(`

    const tokens = [
        { type: "paren", value: "(" },
    ]
    expect(tokenizer(code)).toEqual(tokens)
})

test("name", () => {
    const code = `add`
    const tokens = [
        { type: "name", value: "add" },
    ]
    expect(tokenizer(code)).toEqual(tokens)
})


test("number", () => {
    const code = `123`
    const tokens = [
        { type: "number", value: "123" },
    ]
    expect(tokenizer(code)).toEqual(tokens)
})


test("(add 12 3)", () => {
    const code = `(add 12 3)`
    const tokens = [
        { type: "paren", value: "(" },
        { type: "name", value: "add" },
        { type: "number", value: "12" },
        { type: "number", value: "3" },
        { type: "paren", value: ")" },
    ]
    expect(tokenizer(code)).toEqual(tokens)
})
