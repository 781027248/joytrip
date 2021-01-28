const Controller = require("egg").Controller;

class customTourController extends Controller {
	async customTour() {
		let name = this.ctx.request.body.name;
		let phone = this.ctx.request.body.phone;
		console.log(name)
		console.log(phone)
		let res = await this.ctx.service.customTourService.customTour(name,phone);
		this.ctx.response.body = res;
	}
}

module.exports = customTourController;