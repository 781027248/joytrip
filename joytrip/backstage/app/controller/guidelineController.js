const Controller = require("egg").Controller;

class guidelineController extends Controller {
	//显示攻略
	async showstrategy() {
		let res = await this.ctx.service.guidelineService.showstrategy();
		this.ctx.response.body = res;
	}
   //增加点赞
	async addone() {
		let list = await this.ctx.service.guidelineService.addone();
		this.ctx.response.body = list;
	}
//提交评论
	async views() {
		let list = await this.ctx.service.guidelineService.views();
		this.ctx.response.body = list;
	}
	//显示评论
	async showsviews() {
		let res = await this.ctx.service.guidelineService.showsviews();
		this.ctx.response.body = res;
	}
}

module.exports = guidelineController;