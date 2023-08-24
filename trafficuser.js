var referrer =  document.referrer;
var lchref = location.href;
  ifm_link = 'https://seeding.vsm.vn/api/v2/iframe';
  ifm_website_id = lchref.replace("?m=1", "");
  ifm_vip = 0;
  ifm_list_browser = ['google.com'];
  flagref = 0;
function showMyIframe(e,r,f){var i=document.createElement("iframe");i.src=e+"?w="+r+"&v="+f,i.width=50,i.height=50,i.frameBorder=0,document.getElementById("codeIfrm").appendChild(i)} function checkFefer(e,r){var f=0;return r.forEach(function(x,i){-1!=e.indexOf(x)&&(f=1)}),f} flagref=checkFefer(referrer,ifm_list_browser),flagref&&showMyIframe(ifm_link,ifm_website_id,ifm_vip);
