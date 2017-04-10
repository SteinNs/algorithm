/**
 * Created by Administrator on 2017/4/5.
 */
class Dictionary{
	constructor (){
		this.items = {};
	}
	has(key){
		return key in this.items;
	}
	set(key,value){
		items[key] = value;
	}
	remove(key){
		if(this.has(key)){
			delete this.items[key];
			return true;
		}
		return false;
	}
	get(key){
		return this.has(key)?this.items[key]:undefined;
	}
	values() {
		let values = {};
		Object.keys ( this.items ).forEach ( v => {
			values.push ( this.items[ v ] );
		} );
		return values;
	}
	keys(){
		return Object.keys ( this.items );
	}
	getItems(){
		return this.items
	}
	clear () {
		this.items = {};
	}

	size () {
		return Object.keys ( this.items ).length;
	}


}

module.exports = Dictionary;