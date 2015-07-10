class Logger {
	
	constructor(public prefix : string = "info: "){
		
	}
	
	public log(msg : string){
		console.log(`${this.prefix}${msg});
	}
}