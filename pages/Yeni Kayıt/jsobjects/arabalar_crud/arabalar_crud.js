export default {
	myVar1: [],
	myVar2: {},
	
	async create_araba (marka,model,yil) {
		
		
		console.log(marka,model,yil);
		create_arac_query.run({marka,model,yil});
		
		
		
	},
	
	
	
}