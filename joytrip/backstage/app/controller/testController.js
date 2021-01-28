const Controller = require("egg").Controller;

class testController extends Controller {
	async test() {
		let res = await this.ctx.service.testService.test();
		this.ctx.response.body = res;
	}
}

module.exports = testController;