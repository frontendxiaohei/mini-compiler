export type Token = {
    type: "paren" | "name" | "number" | string
    value: string
}


const nameRegex = /[a-z]/i
const numberRegex = /[0-9]/
const spaceRegex = /\s/


export function tokenizer(code: string) {
    let tokens: Token[] = []
    let current = 0

    while (current < code.length) {
        let char = code[current]
        if (char === "(") {
            tokens.push({ type: "paren", value: "(" })
            current++
            continue
        }
        if(spaceRegex.test(char)) {
            current++
            continue
        }
        if (char === ")") {
            tokens.push({ type: "paren", value: ")" })
            current++
            continue
        }
        if (nameRegex.test(char)) {
            let name = ""
            while (nameRegex.test(char) && current < code.length) {
                name += char
                char = code[++current]
            }
            tokens.push({ type: 'name', value: name })
            continue
        }

        if (numberRegex.test(char)) {
            let number = ""
            while (numberRegex.test(char) && current < code.length) {
                number += char
                char = code[++current]
            }
            tokens.push({ type: 'number', value: number })
            continue
        }
    }
    return tokens

}