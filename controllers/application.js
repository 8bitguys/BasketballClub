var ACS = require('acs').ACS;
var logger = require('acs').logger;

function index(req, res) {	  
	res.render('index', {
		title : 'Basketball Club',
		layout : 'layout',
		req : req
	});
}

function createclub(req, res) {	  
	req.session.controller = "database";
	res.render('createclub', {
		title : 'Create a basketball club',
		layout : 'layout',
		req : req
	});
}


function team(req, res) {	  
	res.render('team', {
		title : 'Team Information',
		layout : 'layout',
		req : req
	});
}

function freeagent(req, res) {	  
	res.render('freeagent', {
		title : 'Information of Player who join another team.',
		layout : 'layout',
		req : req
	});
}

function providecrt(req, res) {	  
	res.render('providecrt', {
		title : 'Create Basketball Court Information',
		layout : 'layout',
		req : req
	});
}