function getTime()
{
var d = new Date();
var hD = d.getHours();
var mD = d.getMinutes();

var newHD;
if(hD == 0)
{
	newHD = 12;
}
else if(hD<=12)
{
	newHD = hD;
}
else
{
	newHD = hD%12;
}
 
if(mD < 10)
{
	var formattedDate = newHD.toString() + ":" + '0' + mD.toString();
}
else
{
var formattedDate =  newHD.toString() + ":" + mD.toString();
}


jQuery(document).ready(function(){
	var ahmed = document.getElementById('ahmedH1');
	ahmed.innerHTML =  "The time is now " + ahmed.innerHTML + formattedDate;
});

setTimeout(function()
{
	var ahmed = document.getElementById('ahmedH1');
	ahmed.innerHTML =  "";
	getTime();
}, 15000);

}
getTime()



