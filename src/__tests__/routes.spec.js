const supertest = require('supertest');
const app = require('../server');
const request = supertest(app)

describe("Testing home page", () => {

	it("tests the base route and returns true for status", async done => {

		const response = await request.get('/');
		
		try {
			expect(response.status).toBe(200)
			expect(response.body.message).toBe('NodeJS-Demo')

			done()
			app.close()
		} catch (e) {
			app.close()
		}
	});
});
