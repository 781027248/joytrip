const Controller = require("egg").Controller;

class ticketController extends Controller {
	async getAddressByStart() {
        let departure = this.ctx.request.query.departure;
		let res = await this.ctx.service.ticketService.getAddressByStart(departure);
		this.ctx.response.body = res;
	}
	async getDataBySome(){
		let depature = this.ctx.request.query.depature;
		let destination = this.ctx.request.query.destination;
		let page = this.ctx.request.query.page;
		let res = await this.ctx.service.ticketService.getDataBySome(depature,destination,page);
		this.ctx.response.body = res;
	}
	async bookticket() {
		let res = await this.ctx.service.ticketService.bookticket();
		this.ctx.response.body = res;
	}
}

module.exports = ticketController;