const Service = require("egg").Service;


class customTourService extends Service {
	async customTour(name,phone) {
		const sql = "insert into customTour(name,phone) values(?,?)";
		let r = await this.ctx.app.mysql.query(sql,[name,phone]);
		return r;
	}
}

module.exports = customTourService;