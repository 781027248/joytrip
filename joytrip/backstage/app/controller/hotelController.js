const Controller = require('egg').Controller;
class hotelController extends Controller {
    async getHotelArr(){
        let destination = this.ctx.request.query.destination;
        let result = await this.ctx.service.hotelService.getHotelArr(destination);
        this.ctx.response.body = result;
    }
    async gethotelArrByType(){
        let type = this.ctx.request.query.type;
        let destination = this.ctx.request.query.destination;
        let result = await this.ctx.service.hotelService.gethotelArrByType(type,destination);
        this.ctx.response.body = result;
    }
	async bookhotel() {
		let res = await this.ctx.service.hotelService.bookhotel();
		this.ctx.response.body = res;
	}
	
}
module.exports = hotelController;