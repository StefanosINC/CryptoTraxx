const expect = require('chai').expect;
const user = require('../Controller/userController');


describe('createUser', () => {
    it('should return data if success', (req, res) => {
        const req = {
            userName: "a",
            passWord: "b",
            firstName: "c",
            lastName: "d",
            email: "e"
        };
        user.createUser(req);
        let result = res.should.equal(201);
        console.log(result);



    });
    it('return 400 if error creating user', () => {

    })
})