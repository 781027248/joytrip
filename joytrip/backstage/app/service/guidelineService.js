const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class guidelineService extends Service {
	//显示攻略
	async showstrategy() {
		const sql = "select * from guidelinestratege";
		let list = await this.ctx.app.mysql.query(sql, []);
		// console.log(list);
		return list;
	}
	//修改点赞
	async addone() {
		const sql = "update guidelinestratege set adds=adds+1 where id=?";
		let r = await this.ctx.app.mysql.query(sql, [this.ctx.request.body.adds]);
		return r.affectedRows;
	}
	//提交评论
	async views() {
		// date_format(now(),'%Y')
		const sql = "insert into guildelineviews(view,times) values(?,?)";
		let date = new Date();
		let view = this.ctx.request.body.view;
		let r = await this.ctx.app.mysql.query(sql, [view,date]);
		console.log(r);
		return r.affectedRows;
	}
	//显示评论
	async showsviews() {
		const sql = "select * from guildelineviews";
		let list = await this.ctx.app.mysql.query(sql, []);
		// console.log(list);
		return list;
	}
}
module.exports = guidelineService;