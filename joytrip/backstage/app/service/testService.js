const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

/* sql语句:
insert into students(name,stuno,sex,class_id) values('金文刚',4073,'男',1);
delete from students where name='xmj';
update course set name='web全栈' where name='c++';
select id from user where id=?;
 */
class testService extends Service {
	async test() {
		/* const file = this.ctx.request.files[0];
		const toFileName = "/public/test/" + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);
		let url = "http://localhost:9999" + toFileName; */
		
		return "OK";
	}
}

module.exports = testService;