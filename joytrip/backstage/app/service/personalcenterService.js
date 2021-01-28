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
class personalcenterService extends Service {
	async updateavatar() {
		const file = this.ctx.request.files[0];
		const toFileName = "/public/userAvatar/" + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		let url = "http://localhost:9999" + toFileName;
		let id = this.ctx.request.body.id;
		let sql = "update user set avatar=? where id=?";
		let res = await this.ctx.app.mysql.query(sql, [url,id]);
		let sql2 = "select nickname from user where id=?";
		let res2 = await this.ctx.app.mysql.query(sql2, [id]);
		if (res.affectedRows === 1) {
			return {
				status: 1,
				avatar: url,
				msg: "修改成功",
				nickname: res2[0].nickname
			};
		} else {
			return {
				status:0,
				msg: "服务器异常，修改失败"
			}
		}
	}
	
	async changepwd() {
		let id = this.ctx.request.body.id;
		let oldpassword = this.ctx.request.body.oldpassword;
		let newpassword = this.ctx.request.body.newpassword;
		
		let selectdbpwd = "select password from user where id=?";
		let r = await this.ctx.app.mysql.query(selectdbpwd, [id]);
		if (r[0].password === oldpassword) {
			let sql = "update user set password=? where id=?";
			let res = await this.ctx.app.mysql.query(sql, [newpassword, id]);
			if (res.affectedRows === 1) {
				return {
					status: 1,
					msg: "修改成功"
				};
			} else {
				return {
					status: 0,
					msg: "服务器异常，修改失败"
				};
			}
		} else {
			return {
				status: 0,
				msg: "旧密码错误"
			};
		}
	}
	
	async changenickname() {
		let id = this.ctx.request.body.id;
		let nickname = this.ctx.request.body.nickname;
		let sql = "update user set nickname=? where id=?";
		let res = await this.ctx.app.mysql.query(sql, [nickname, id]);
		if (res.affectedRows === 1) {
			return {
				status: 1,
				msg: "修改成功"
			};
		} else {
			return {
				status: 0,
				msg: "服务器异常，修改失败"
			};
		}
	}
	
	async petvlrelease() {
		let user_id = this.ctx.request.body.user_id;
		let time = this.ctx.request.body.time;
		let content = this.ctx.request.body.content;
		
		let s = "insert into travelnotes(user_id,time,content) values(?,?,?)";
		let r = await this.ctx.app.mysql.query(s, [user_id,time,content]);
		if (r.affectedRows === 1) {
			let sql = "select * from travelnotes where user_id=?";
			let res = await this.ctx.app.mysql.query(sql, [user_id]);
			return {
				status: 1,
				res
			};
		} else {
			return {
				status: 0,
				msg: "发布失败"
			}
		}
	}
	
	async petvldelnote() {
		let id = this.ctx.request.query.id;
		let user_id = this.ctx.request.query.user_id;
		let s = "delete from travelnotes where id=?";
		let r = await this.ctx.app.mysql.query(s, [id]);
		if (r.affectedRows === 1) {
			let sql = "select * from travelnotes where user_id=?";
			let res = await this.ctx.app.mysql.query(sql, [user_id]);
			return res;
		} else {
			return {
				status: 0,
				msg: "删除失败"
			};
		}
	}
	
	async gettravelnotes() {
		let user_id = this.ctx.request.query.user_id;
		let sql = "select * from travelnotes where user_id=?";
		let res = await this.ctx.app.mysql.query(sql, [user_id]);
		return res;
	}
	
	async submitfdb() {
		let user_id = this.ctx.request.body.user_id;
		let time = this.ctx.request.body.time;
		let content = this.ctx.request.body.content;
		
		let s = "insert into feedback(user_id,time,content) values(?,?,?)";
		let r = await this.ctx.app.mysql.query(s, [user_id,time,content]);
		if (r.affectedRows === 1) {
			return {
				status: 1,
				msg: "反馈已收到，我们会仔细阅读您的宝贵反馈"
			};
		} else {
			return {
				status: 0,
				msg: "反馈失败"
			}
		}
	}

	async pcogetorderinfo() {
		let user_id = this.ctx.request.query.id;
		let sql1 = "select * from hotelorder where user_id=?";
		let hotellist = await this.ctx.app.mysql.query(sql1, [user_id]);
		let sql2 = "select * from airorder where user_id=?";
		let ticketlist = await this.ctx.app.mysql.query(sql2, [user_id]);
		// return 1;
		return {
			hotellist,
			ticketlist
		};
	}
	
	async delticketorder() {
		let id = this.ctx.request.query.id;
		let tikcet_id = this.ctx.request.query.tikcet_id;
		let user_id = this.ctx.request.query.user_id;
		
		
		let sql1 = "select * from airorder where id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [id]);
		let acount = res1[0].acount;
		
		let sql2 = "delete from airorder where id=?";
		let res2 = await this.ctx.app.mysql.query(sql2, [id]);
		
		let sql3 = "select * from airplan where id=?";
		let res3 = await this.ctx.app.mysql.query(sql3, [tikcet_id]);
		let domainair = res3[0].domainair;
		domainair = domainair + acount;
		
		let sql4 = "update airplan set domainair=? where id=?";
		let res4 = await this.ctx.app.mysql.query(sql4, [domainair, tikcet_id]);
		
		if (res2.affectedRows === 1 && res4.affectedRows === 1) {
			let sql5 = "select * from airorder where user_id=?";
			let ticketlist = await this.ctx.app.mysql.query(sql5, [user_id]);
			return {
				status: 1,
				msg: "删除成功",
				ticketlist
			};
			
		} else {
			return {
				status: 0,
				msg: "服务器异常，删除失败"
			};
		}
	}
	
	async delhotelorder() {
		let id = this.ctx.request.query.id;
		let user_id = this.ctx.request.query.user_id;
		
		let sql1 = "delete from hotelorder where id=?";
		let res1 = await this.ctx.app.mysql.query(sql1, [id]);
		
		if (res1.affectedRows === 1) {
			let sql2 = "select * from hotelorder where user_id=?";
			let hotellist = await this.ctx.app.mysql.query(sql2, [user_id]);
			return {
				status: 1,
				msg: "删除成功",
				hotellist
			}
		} else {
			return {
				status: 0,
				msg: "服务器异常，删除失败"
			}
		}
	}
	
}

module.exports = personalcenterService;