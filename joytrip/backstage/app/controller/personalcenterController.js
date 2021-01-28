const Controller = require("egg").Controller;

class personalcenterController extends Controller {
	async updateavatar() {
		let res = await this.ctx.service.personalcenterService.updateavatar();
		this.ctx.response.body = res;
	}
	async changepwd() {
		let res = await this.ctx.service.personalcenterService.changepwd();
		this.ctx.response.body = res;
	}
	async changenickname() {
		let res = await this.ctx.service.personalcenterService.changenickname();
		this.ctx.response.body = res;
	}
	async petvlrelease() {
		let res = await this.ctx.service.personalcenterService.petvlrelease();
		this.ctx.response.body = res;
	}
	async petvldelnote() {
		let res = await this.ctx.service.personalcenterService.petvldelnote();
		this.ctx.response.body = res;
	}
	async gettravelnotes() {
		let res = await this.ctx.service.personalcenterService.gettravelnotes();
		this.ctx.response.body = res;
	}
	async submitfdb() {
		let res = await this.ctx.service.personalcenterService.submitfdb();
		this.ctx.response.body = res;
	}
	async pcogetorderinfo() {
		let res = await this.ctx.service.personalcenterService.pcogetorderinfo();
		this.ctx.response.body = res;
	}
	async delhotelorder() {
		let res = await this.ctx.service.personalcenterService.delhotelorder();
		this.ctx.response.body = res;
	}
	async delticketorder() {
		let res = await this.ctx.service.personalcenterService.delticketorder();
		this.ctx.response.body = res;
	}
	
}

module.exports = personalcenterController;