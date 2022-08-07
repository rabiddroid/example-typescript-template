import { greeting } from "../actions";


describe('validate action methods', () => {

    it('returns valid greetings', () => {

        expect(greeting()).toEqual('hello world!');

    })

});