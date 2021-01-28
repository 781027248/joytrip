const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
/* affectedRows */
class publicService extends Service {
	async regist() {
		let username = this.ctx.request.body.username;
		let nickname = this.ctx.request.body.nickname;
		let password = this.ctx.request.body.password;
		
		let s = "select id from user where username=?";
		let r = await this.ctx.app.mysql.query(s, [username]);
		if (r.length != 0) {
			return {
				status: 0,
				msg: "该账号已存在"
			};
		} else {
			let sql = "insert into user(username,nickname,password) values(?,?,?)";
			let res = await this.ctx.app.mysql.query(sql, [username,nickname,password]);
			if (res.affectedRows == 1) {
				let avatar = "http://localhost:9999/public/userAvatar/userdefaultavatar.png";
				let sql2 = "select id from user where username=?";
				let res2 = await this.ctx.app.mysql.query(sql2, [username]);
				let id = res2[0].id;
				return {
					status: 1,
					msg: "注册成功",
					avatar,
					id,
					nickname
				};
			} else {
				return {
					status: 0,
					msg: "注册失败"
				};
			}
		}
	}
	
	async login() {
		let username = this.ctx.request.body.username;
		let password = this.ctx.request.body.password;
		
		let sql = "select * from user where username=?";
		let res = await this.ctx.app.mysql.query(sql, [username]);
		if (res[0].password === password) {
			
			if (res[0].avatar != null) {
				return {
					status: 1,
					id: res[0].id,
					nickname: res[0].nickname,
					avatar: res[0].avatar
				};
			} else {
				let avatar = "http://localhost:9999/public/userAvatar/userdefaultavatar.png";
				return {
					status: 1,
					id: res[0].id,
					nickname: res[0].nickname,
					avatar
				};
			}
			
		} else {
			return {
				status: 0,
				msg: "密码错误"
			};
		}
	}
	
	async getuserinfo() {
		let id = this.ctx.request.query.id;
		let sql = "select * from user where id=?";
		let res = await this.ctx.app.mysql.query(sql, [id]);
		if (res[0].avatar == null) {
			let avatar = "http://localhost:9999/public/userAvatar/userdefaultavatar.png";
			return {
				nickname: res[0].nickname,
				avatar
			};
		} else {
			return {
				nickname: res[0].nickname,
				avatar: res[0].avatar
			};
		}
	}
	
}
/* affectedRows */
module.exports = publicService;