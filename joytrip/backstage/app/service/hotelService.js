const Service = require('egg').Service;
class hotelClass extends Service {
    async getHotelArr(destination){
        let sql = 'select * from hotel where destination=?';
        let list = await this.ctx.app.mysql.query(sql,[destination]);
        return list;
    }
    async gethotelArrByType(type,destination){
        let sql = 'select * from hotel where destination=? and type=?';
        let list = await this.ctx.app.mysql.query(sql,[destination,type]);
        return list;
    }
	async bookhotel() {
		let user_id = this.ctx.request.body.user_id;
		let intime = this.ctx.request.body.intime;
		let dtime = this.ctx.request.body.dtime;
		let num = this.ctx.request.body.num;
		let hcount = this.ctx.request.body.hcount;
		let id = this.ctx.request.body.id;
		
		let s1 = "select * from hotel where id=?";
		let r1 = await this.ctx.app.mysql.query(s1, [id]);
		let destination = r1[0].destination;
		let hname = r1[0].hname;
		let hsum = r1[0].hprice * hcount;
		let emptyroom = r1[0].emptyroom;
		if (hcount > emptyroom) {
			return {
				status: 0,
				msg: "预定房间数量超过空房间数量，预定失败"
			};
		} else {
			let sql1 = "insert into hotelorder(destination,intime,dtime,num,user_id,hcount,hsum,hname) values(?,?,?,?,?,?,?,?)";
			let res1 = await this.ctx.app.mysql.query(sql1, [destination,intime,dtime,num,user_id,hcount,hsum,hname]);
			let sql2 = "update hotel set emptyroom=? where id=?";
			emptyroom = emptyroom - hcount;
			let res2 = await this.ctx.app.mysql.query(sql2, [emptyroom, id]);
			if (res1.affectedRows === 1 && res2.affectedRows === 1) {
				let sql = 'select * from hotel where destination=?';
				let list = await this.ctx.app.mysql.query(sql,[destination]);
				return {
					status: 1,
					msg: "预定成功",
					list
				};
			} else {
				return {
					status: 0,
					msg: "服务器错误，预定失败"
				};
			}
		}
	}
}
module.exports = hotelClass;