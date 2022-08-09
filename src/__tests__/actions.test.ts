
import { nanoid } from 'nanoid';
import { greeting } from '../actions.js';


describe('validate action methods', () => {

    it('returns valid greetings', () => {

        expect(greeting()).toEqual('hello world!');


    })


    test('pass random number to function', () => {

        const randomId = nanoid();

        console.log(randomId);


    })

});