const Controller = require("egg").Controller;

class publicController extends Controller {
	async regist() {
		let res = await this.ctx.service.publicService.regist();
		this.ctx.response.body = res;
	}
	async login() {
		let res = await this.ctx.service.publicService.login();
		this.ctx.response.body = res;
	}
	async getuserinfo() {
		let res = await this.ctx.service.publicService.getuserinfo();
		this.ctx.response.body = res;
	}
	
}

module.exports = publicController;