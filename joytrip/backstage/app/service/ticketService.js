const Service = require("egg").Service;

class ticketService extends Service {
	async getAddressByStart(departure) {
		let sql = 'select * from airplan where departure=? limit 12';
		let res = await this.ctx.app.mysql.query(sql, [departure]);
		return res;
	}
	async getDataBySome(depature, destination, page) {
		let sql = 'select * from airplan where departure=? and destination=?';
		let res = await this.ctx.app.mysql.query(sql, [depature, destination]);
		let len = res.length;
		sql = 'select * from airplan where departure=? and destination=? limit ?,8';
		res = await this.ctx.app.mysql.query(sql, [depature, destination, (page - 1) * 8]);
		return {
			data: res,
			len: len
		}
	}
	async bookticket() {
		let id = this.ctx.request.body.id;
		let user_id = this.ctx.request.body.user_id;
		let tikcet_id = id;
		let round = this.ctx.request.body.round;
		let child = this.ctx.request.body.child;
		let acount = this.ctx.request.body.acount;
		
		let s1 = "select * from airplan where id=?";
		let r1 = await this.ctx.app.mysql.query(s1, [id]);
		let t = r1[0];
		let domainair = t.domainair; // 数量
		let destination = t.destination; // 目的地
		let departure = t.departure; // 出发点
		let ddate = t.ddata; // 出发时间
		let adate = t.adate; // 到达时间
		let price = t.price; // 单价
		let aprice = price;
		let asum = price * acount; // 总价
		
		if (domainair < acount) {
			return {
				status: 0,
				msg: "余票数量不足,剩余：" + domainair + "张"
			};
		} else {
			let sql1 = "update airplan set domainair=? where id=?";
			let sql2 = "insert into airorder(tikcet_id,departure,destination,round,ddate,adate,child,aprice,user_id,acount,asum) values(?,?,?,?,?,?,?,?,?,?,?)";
			domainair = domainair - acount;
			let res1 = await this.ctx.app.mysql.query(sql1, [domainair,id]);
			let res2 = await this.ctx.app.mysql.query(sql2, [tikcet_id,departure,destination,round,ddate,adate,child,aprice,user_id,acount,asum]);
			if (res1.affectedRows === 1 && res2.affectedRows === 1) {
				return {
					status: 1,
					msg: "订票成功"
				};
			} else {
				return {
					status: 0,
					msg: "服务器异常，订票失败"
				};
			}
		}
	}
}

module.exports = ticketService;
