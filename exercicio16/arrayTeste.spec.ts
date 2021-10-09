import { capitalizar } from "./arrayTeste";

describe("teste", () => {
    test("capitalizar", () => {
        expect(capitalizar('OLA')).toBe('Ola')
    })
})