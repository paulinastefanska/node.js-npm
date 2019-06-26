var os = require('os');

function timeConver(uptime) {

	var hour = parseInt(uptime / 3600); //uptime / 3600 seconds = hours
	var restSecond = parseInt(uptime % 3600); //qty of the rest seconds from hours (% - modulo = the rest from '/')
	var minute = parseInt(restSecond / 60); //rest seconds / 60 seconds = minutes
	var second = parseInt(restSecond % 60); //rest seconds
	var restSecond = parseInt(uptime % 3600); //qty of the rest seconds from hours (% - modulo = the rest from '/')
	
  if (minute > 0) {
    if (hour > 0) {
      return (hour + " hrs " + minute + " min " + second + " sec");
    } else {
      return (minute + " min " + second + " sec");
    }
  	} else {
    	return (second + " sec");
  	}
}

exports.timeConver = timeConver;