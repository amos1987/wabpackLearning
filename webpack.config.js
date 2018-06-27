// JavaScript Document
const path=require('path');
const uglify=require('uglifyjs-webpack-plugin');
const htmlPlugin=require('html-webpack-plugin');
  
module.exports={
	entry:{
		entry:'./src/entery.js',
		entry2:'./src/entery2.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js',	
	},
	module:{
		rules:[
			{test:/\.css$/,
			 use:['style-loader','css-loader']
			 //第二种写法
			 // loader:['style-loader','css-loader']
			 //第三种写法
			 /* use:[{ 
			 	  loader:style-loader',	
			 },{   
			 	  loader:css-loader',	
			 }]*/
			 },
		]
    
	},  
	plugins:[
		new uglify,
		new htmlPlugin({
		minify:{removeAttributeQuotes:true},
		hash:true,
		template:'./src/index.html'			  
		}),
	],
	devServer:{
		contentBase:path.resolve(__dirname,'dist'),
		host:'192.168.31.242',
		compress:true,
		port:5555,//sss
		
	}	
	
}