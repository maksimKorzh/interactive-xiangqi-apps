
UBB = `[DhtmlXQ_ver]www_dpxq_com[/DhtmlXQ_ver][DhtmlXQ_init]500,350[/DhtmlXQ_init]`;
var DhtmlXQimgpath=(location.hostname=='localhost'||location.hostname=='192.168.0.2')?('http://'+location.hostname+'/hldcg/search/'):('http://www.dpxq.com/DhtmlXQ_www_dpxq_com/');
var isBIG5='';
var PVer='1911201600';
var REOK=checkRegExp();
if (REOK) {function getvar(v) {var r=new RegExp('\\[(DhtmlXQ_'+v+')\\](.*?)\\[\\/\\1\\]','i');var s=UBB.match(r);return s?s[2].replace(/\|\|/gi,'\r\n'):'';}}
else {function getvar(v) {var r=new RegExp('\\[(DhtmlXQ_'+v+')\\](.*)\\[\\/\\1\\]','i');var s=UBB.match(r);return s?s[2].split('[/DhtmlXQ_'+v+']')[0].replace(/\|\|/gi,'\r\n'):'';}}
function Xnc_KEvent(Xnc_K) {if (allowLR) {if (Xnc_K==39) gotonum('Next'); else if (Xnc_K==37) gotonum('Prev');}}
function checkRegExp() {try{new RegExp('.+?');return '?';}catch(e){return '';}}
var TT=[Number(new Date()),0,0,0,0,0];
var CSS1=document.compatMode=='CSS1Compat'?true:false;
var fz,fzt,w0,h0,p0,lh,aHeight,tWidth,sMnum;
var fdbs,hm,wm,MessFunc='',ViewUrl='',ErrNum=0;
var P90,D400,RBE,RBES,RBT,POK,sMI,pMI,nnum,lnum,move,cnum,vnum,P,SN5,tree,TongYu=true;
var fnum,xqtitle,hits,refer,MoveDIV,VarDIV,cText,sText,sText1,Mscroll;
var allowLR,isTurn,timer,canauto,isMirror,CSS,pClick,pCid,isJieQi,isOld,CVer='';
var xmlok,LiveUpMove,LiveMove,LiveMoveLen,LiveID,LiveAdmin,AllowLive,Livetime,Livetimer,AllowAdd,LiveComment,isAddMove,BPos,LiveF5,LiveF5Time,LiveF5Index,LiveF5Title;
var NoFile=(self.name.substr(0,6)=='NoFile'||window==top)?true:false;
try {SN5=parent.document.body;SN5=self.name.substr(5);} catch(e) {NoFile=true;TongYu=false;}
var B='8979695949392919097717866646260600102030405060708012720323436383';
var tQZ='\u8F66\u9A6C\u76F8\u4ED5\u5E05\u4ED5\u76F8\u9A6C\u8F66\u70AE\u70AE\u5175\u5175\u5175\u5175\u5175\u8F66\u9A6C\u8C61\u58EB\u5C06\u58EB\u8C61\u9A6C\u8F66\u70AE\u70AE\u5352\u5352\u5352\u5352\u5352';
var iQZ='r1r2r3r4r5r4r3r2r1r6r6r7r7r7r7r7b1b2b3b4b5b4b3b2b1b6b6b7b7b7b7b7';
if (!DhtmlXQimgpath) var DhtmlXQimgpath='';if (!ads_dpxq) var ads_dpxq='';if (!isMXQ) var isMXQ=false;if (!ads_board) var ads_board='\u695A\u3000\u3000\u3000\u6CB3\u3000\u3000\u3000\u6C49\u3000\u3000\u3000\u754C';
var isSP=(NoFile)?false:((parent.location.pathname.search(/^\/hldcg\/search(\/?$|\/(index|mini)\.asp$)/gi)==0)?true:false);
var SURL=location.hostname;SURL='http://'+((SURL=='localhost'||SURL=='192.168.0.2')?SURL:'www.dpxq.com')+(location.pathname.indexOf('/m/')==0?'/m':'')+'/hldcg/search/';
if (!UBB) var UBB=unconv(NoFile?self.name:(isSP&&parent.UBBS[SN5])?parent.UBBS[SN5]:$P(SN5).innerHTML);
var UBB=unconv(UBB).replace(/[\r\n]*(\[\/DhtmlXQ_\w+\])[\r\n]*/gi,'$1\r\n').replace(/[\r\n]*(\[DhtmlXQ_\w+\])[\r\n]*/gi,'\r\n$1').match(new RegExp('\\[(DhtmlXQ_\\w+)\\].+'+REOK+'\\[\\/\\1\\]','gi'));
UBB=(UBB==null)?('[DhtmlXQ_ver]www_dpxq_com'+isBIG5+'[/DhtmlXQ_ver]\r\n[DhtmlXQ_init]500,350[/DhtmlXQ_init]'):(UBB.join('\r\n')).replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&nbsp;/gi,' ');
var NS=getBrowser();
var WIN=getWinVer();
var ZHCN=(navigator.systemLanguage||navigator.language).toLowerCase()=='zh-cn'?1:0;
var IMGPATH=(isSP?parent.IMGPATH:DhtmlXQimgpath).substr(0,100);
if (IMGPATH!='') IMGPATH=(IMGPATH+'/').replace(/[\/\\]+$/gi,'/');
if (!viewtype) var viewtype=isSP?parent.VIEWTYPE:getvar('viewtype');
var VIMG=viewtype=='img'?1:0;
var RT=isSP?('\\u'+'00FF-\\u'+'FFFF'):'';
var diyimg=isSP?parent.DIYIMG:getvar('diyimg');
var r=new RegExp('^[\\w\\-\\.'+RT+']+(\\/[\\w\\-\\.'+RT+']+)*,[0127](,[01]){4}(,(00|[2-7]\\d)){2}(,\\-?\\d{1,4})*$','gi');
if (!VIMG||diyimg.search(r)==-1) diyimg='';
var song=((WIN.w9x&&!ZHCN)||WIN.other||WIN.w95)?false:true;
var imgQiZi=(isBIG5||VIMG||WIN.other||WIN.w95||NS.other||(!WIN.wxp&&!WIN.mobile&&(!ZHCN||!NS.IE)))?true:false;
var baseQiZi=(NS.IE>=8||NS.Firefox>=3||NS.Opera>=11||NS.Chrome||NS.Safari||NS.WebKit||NS.Gecko||WIN.mobile||document.documentMode>=0)?true:false;
var BGIMG='',BDIMG='',CPIMG='',LNIMG='',CLIMG='',QZIMG=[],rQZ=[],bQZ=[];
var UWD,USPACE,qznum=0,qzasbg=1,qclimg=0,qpbdxy='',qplnxy='',qpclxy='',qzxy=[0,0,0,0,0,0];
var bgColor='#9CF',bdColor='#666',blColor='#9DF',brColor='#FFF',qbColor='#666',qpColor='#eed3b3',qgColor='#666',bxColor='#FFF',bsColor='#316ac5';
var diyclr=isSP?parent.DIYCLR:getvar('diyclr');getCLR();
var NOBD=qbColor=='transparent'?1:0;
var CNTW=isBIG5?'zhtw/':'zhcn/';
var qzimg,qztxt;
var MingLiU=isBIG5?1:0;
var FF=getFont();
var PF=(MingLiU&&(NS.IE>=9))?3:((NS.IE>0&&NS.IE<9)?2:1);
var qpzb=getQPZB();
var qzdx,qgdx;
var wDevice,hDevice;
var sfont,smvtv,sdivs,sdiv19;
var wTitle=getFdbs(diyimg==''?2.20:2.99);
var CSSTEXT=document.body.style.cssText;
if (!Mobile) var Mobile=false;

initWH(fdbs);
firstHTML();

function $(o){return document.getElementById(o);}
function $P(o){return parent.document.getElementById(o);}
function firstHTML()
{
  var s='html{overflow:hidden;height:100%;}body{overflow:hidden;height:100%;background-color:transparent;margin:0;padding:0;border:0;'+sfont+'}a:link,a:active,a:visited{text-decoration:none;color:#000;}a:hover{text-decoration:underline;}#DhtmlXQ{position:absolute;text-align:center;left:0;top:0;height:100%;width:'+(isSP?'100%':(wm+'px'))+';}#message{position:relative;margin:'+(Mobile?'116px':wTitle==240?'48.33%':wTitle==350?'33.14%':'23.20%')+' auto 0;padding:2px 2px 0;width:+'+(CSS1?80:82)+'%;border:2px solid #0f0;background-color:#f4fcf3;}#messdiv{width:100%;line-height:1.3333;color:#00f;text-align:center;overflow:hidden;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;word-break:break-all;}.messbtn{'+sfont+'font-size:1em;line-height:1.25;'+(NS.IE?'padding-top:2px':'border-width:1px')+';}';
  var c=document.createElement('style');
  var d=document.createElement('div');
  c.type='text/css';
  document.getElementsByTagName('head').item(0).appendChild(c); // IE5 yao xian append zai cssText
  if (c.styleSheet) c.styleSheet.cssText=s; else c.appendChild(document.createTextNode(s));
  c='<div id="webdings" style="font-family:WebDings;font-size:12px;line-height:14px;">n</div><div><span id="U0" style="display:inline-block;">m&nbsp;m</span><span id="U1" style="display:inline-block;">m m</span></div>';
  s='<div id="message"><div style="width:100%;overflow:hidden;"><div style="float:left;width:1px;margin-left:-1px;height:6.67em;"></div><div id="messdiv">DongPing DhtmlXQ ChessBoard Loading.....<br>Powered By dpxq.com hldcg Ver '+PVer+c+'</div></div><div style="margin:6px;text-align:center;"><button class="messbtn" style="margin-right:20%;" onclick="clickYES()">&nbsp;\u786E \u5B9A&nbsp;</button><button class="messbtn" onclick="clickNO()">&nbsp;\u53D6 \u6D88&nbsp;</button></div></div>';
  d.id='DhtmlXQ';
  d.innerHTML=s+'<div id="divs" style="'+sdivs+'overflow:hidden;"></div><div id="divsave" style="'+sdivs+'display:none;overflow:auto;"></div>';
  document.body.appendChild(d);
}
function initWH(fdbs)
{
  qzimg=iQZ.match(/../g);
  qztxt=tQZ.split('');
  qgdx=parseInt(25*fdbs);
  fz=parseInt(12*fdbs);
  if(isBIG5) fz=[12,12,13,15,15,15,15,15,15,15,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23][fz-12];
  else{      fz=[12,12,14,14,16,16,18,18,18,18,18,18,18,18,26,26,26,26,26,26,26,26,26,26,26][fz-12];if(fz==18&&!song)fz=16;}
  lh=parseInt(16*fdbs);
  w0=parseInt(500*fdbs);
  if (w0%2==1) w0--;
  h0=Math.round(w0*7/10);
  p0=parseInt(4*fdbs);
  hm=parseInt(h0/3);
  wm=Math.round(w0*wTitle/500);
  if (wTitle==240) wm=wm-wm%2;
  if (VIMG) getIMG(); else getTXT();
  if (Mobile)
  {
	  wDevice=document.documentElement.clientWidth;   // \u8BBE\u5907\u5BBD\u5EA6
	  hDevice=document.documentElement.clientHeight;  // \u8BBE\u5907\u9AD8\u5EA6
	  if (NS.IE) {wDevice=320;hDevice=500;}
	  w0=wDevice;h0=hDevice;wm=w0;fz=14;lh=18;hm=parseInt(h0/3);
  }
  sfont='font-size:'+fz+'px;line-height:'+lh+'px;'+FF;
  smvtv='white-space:nowrap;white-space:pre;overflow:hidden;line-height:'+(lh-PF)+'px;padding-top:'+PF+'px;border:0;margin:0;cursor:default;'+(WIN.mobile?'font-family:monospace;':'');
  sdivs='position:absolute;left:0;top:0;text-align:left;width:100%;height:100%;'+bgColor+BGIMG;
  sdiv19='position:absolute;overflow:hidden;'+qgColor+'font-size:1px;line-height:1px;';
}
function getInfo()
{
  var s='',i=$('m_0_n').offsetWidth,FDBS=(''+(fdbs-0+0.001)).substr(0,4),Opera=NS.Opera?('[Opera'+NS.Opera+']'):'';
  var t=wTitle,w=Math.round(FDBS*t),h=Math.round(t==240?w*35/24:t==350?w:w*7/10);
  s+='\u9875\u9762:'+(TT[1]-TT[0])+'ms\n';
  s+='\u68CB\u76D8:'+(TT[3]-TT[2])+'ms\n';
  s+='\u68CB\u8C31:'+(TT[5]-TT[4])+'ms\n';
  s+='\u7248\u672C:'+PVer+CVer+'\n';
  s+='\u663E\u793A:'+(Mobile?'\u624B\u673A':VIMG?'\u56FE\u5F62':'\u6587\u672C')+'\n';
  s+='\u500D\u6570:'+FDBS+' '+(t==350?'\u65E0\u6CE8\u89E3\u53D8\u7740':(t==240?'\u53EA\u57FA\u672C\u68CB\u76D8':''))+'\n';
  s+='\u5BBD\u5EA6:'+(Mobile?wDevice:w)+'px\n';
  s+='\u9AD8\u5EA6:'+(Mobile?(parseInt($('btn_search').style.top)+parseInt($('btn_search').style.height)+'px '+hDevice):h)+'px\n';
  s+='\u6587\u5B57:'+fz+'px\n';
  s+='\u9898\u5B57:'+fzt+'px '+$('div1').style.fontSize+'\n';
  s+='\u9898\u9AD8:'+$('div1').clientHeight+'px\n';
  s+='\u68CB\u683C:'+qgdx+'px\n';
  s+='\u68CB\u5B50:'+qzdx+'px '+(imgQiZi?(qznum+'\u56FE\u5F62'):baseQiZi?'dataURL':UWD?'WebDings':'\u5B8B\u4F53')+'\n';
  s+='\u7CFB\u7EDF:'+(WIN.w95?'Win95':WIN.w9x?'Win9X':WIN.w2000?'Win2000':(WIN.wxp==1)?'WinXP':WIN.wxp?'WinXP+':WIN.mobile?'Mobile':'other')+'\n';
  s+='\u8BED\u8A00:'+(ZHCN?'':'\u975E')+'\u7B80\u4F53\u4E2D\u6587\n';
  s+='\u6D4F\u89C8:'+(NS.IE?('IE '+NS.IE+Opera):NS.Firefox?('Firefox '+NS.Firefox+Opera):NS.Chrome?('Chrome '+NS.Chrome):NS.Safari?('Safari '+NS.Safari):NS.Opera?('Opera '+NS.Opera):NS.WebKit?('WebKit '+NS.WebKit):NS.Gecko?('Gecko '+NS.Gecko+Opera):'other')+'\n';
  s+='\u6A21\u5F0F:'+(CSS1?'CSS1Compat':'BackCompat')+'\n';
  s+='\u7A7A\u683C:'+(USPACE?'\u7A7A\u683C':'&nbsp;')+'\n';
  s+='\u6570\u5BBD:'+(Mobile?'1.5':'2')+'*fz'+(sMnum==''?'=':(Mobile?1.5:2)*fz<i?'<':'>')+i+'px\n';
  s+='\u6587\u4EF6:NoFile='+NoFile+'\n';
  s+='\u540C\u57DF:TongYu='+TongYu+'\n';
  s+='\u641C\u7D22:isSP='+isSP+'\n';
  s+='\u6B63\u5219:'+(REOK?'':'\u4E0D')+'\u652F\u6301.+?\n';
  s+='\u683C\u5F0F:'+(isOld?'\u65E7':'\u65B0')+'\n';
  s+='\u4EE3\u7801:'+(DhtmlXQimgpath==''?'\u540CHTML\u6587\u4EF6':DhtmlXQimgpath)+'\n';
  if (imgQiZi)
  {
	  s+='\u56FE\u7247:'+(IMGPATH==''?'\u540CHTML\u6587\u4EF6':IMGPATH)+'\n';
	  s+='\u524D\u7F00:'+CNTW+'\n';
	  if (VIMG)
	  {
		  s+='\u80CC\u666F:'+BGIMG.split('(')[1].split(')')[0]+'\n';
		  s+='\u6CE8\u89E3:'+CPIMG.split('(')[1].split(')')[0]+'\n';
		  s+='\u68CB\u76D8:'+BDIMG.split('(')[1].split(')')[0]+'\n';
		  if (qpbdxy) s+='\u504F\u79FB:'+qpbdxy.split(':')[1].split(';')[0]+'\n';
		  s+='\u683C\u7EBF:'+LNIMG.split('(')[1].split(')')[0]+'\n';
		  if (qplnxy) s+='\u504F\u79FB:'+qplnxy.split(':')[1].split(';')[0]+'\n';
		  if (CLIMG) {s+='\u70B9\u51FB:'+CLIMG.split('(')[1].split(')')[0]+'\n';
		  if (qpclxy) s+='\u504F\u79FB:'+qpclxy.split(':')[1].split(';')[0]+'\n';}
	  }
	  if (qznum==7)
	  {
		  h=[0,1,2,3,4,9,11];
		  for(i=1;i<8;i++) s+='\u7EA2'+tQZ.charAt(h[i-1])+':'+QZIMG[i]+'\n';
		  for(i=11;i<18;i++) s+='\u9ED1'+tQZ.charAt(16+h[i-11])+':'+QZIMG[i]+'\n';
	  }
	  else if (qznum==2)
	  {
		  s+='\u7EA2\u65B9:'+QZIMG[0]+'\n';
		  s+='\u9ED1\u65B9:'+QZIMG[1]+'\n';
		  if (diyimg=='')
		  {
			  s+='\u7EA2\u5706:'+QZIMG[2]+'\n';
			  s+='\u9ED1\u5706:'+QZIMG[3]+'\n';
		  }
	  }
	  else s+='\u68CB\u5B50:'+QZIMG[0]+'\n';
  }
  if (FDBS!='1.00'||t!=500) s+='[DhtmlXQ_zoom]'+FDBS+'.'+t+'[/DhtmlXQ_zoom]\n';
  if (VIMG) s+='[DhtmlXQ_viewtype]img[/DhtmlXQ_viewtype]\n';
  var diy=UBB.match(new RegExp('\\[(DhtmlXQ_diy'+(VIMG?'\\w+':'clr')+')\\].+'+REOK+'\\[\\/\\1\\]','gi'));
  if (diy!=null) s+=diy.join('\n');
  if (Mobile) alert(s);
  else if ($('sourceText').style.display=='') sText.value=s;
  else cText.value=s;
  sText1.value=s;
  if (t!=500) {$('copytext').value=s;copycode($('copytext'));}
}
function getCLR()
{
  var P=(diyclr+',,,,,,,,,').split(',');
  r=/^(#([\dA-F]{3}){1,2}|[A-Z]{3,})$/gi;
  if (P[0].search(r)!=-1) bgColor=P[0];
  if (P[1].search(r)!=-1) bdColor=P[1];
  if (P[2].search(r)!=-1) blColor=P[2];
  if (P[3].search(r)!=-1) brColor=P[3];
  if (P[4].search(r)!=-1) qbColor=P[4];
  if (P[5].search(r)!=-1) qpColor=P[5];
  if (P[6].search(r)!=-1) qgColor=P[6];
  if (P[7].search(r)!=-1) bxColor=P[7];
  if (P[8].search(r)!=-1) bsColor=P[8];
  P='background-color:';
  bgColor=P+bgColor+';';
  bdColor=P+bdColor+';';
  blColor=P+blColor+';';
  brColor=P+brColor+';';
  qbColor=P+qbColor+';';
  qpColor=P+qpColor+';';
  qgColor=P+qgColor+';';
  bxColor=P+bxColor+';';
}
function getIMG()
{
  var P;
  if (diyimg!='')
  {
	  P=(diyimg+',0,0,0,0,0,0,0,0,0,0,0,0').split(',');
	  diyimg=P[0];
	  qznum=P[1]-0;
	  qzasbg=P[2]-0;
	  qclimg=P[3]-0;
	  if (P[4]==0) qpzb=[['',''],['',''],['',''],['','']];
	  if (P[5]==0) ads_board='';
	  if (P[6]!='00') qzdx=P[6]-0;
	  if (P[7]!='00') qgdx=P[7]-0;
	  qpbdxy='background-position:'+P[8]+'px '+P[9]+'px;';
	  qplnxy='background-position:'+P[10]+'px '+P[11]+'px;';
	  qpclxy='background-position:'+P[12]+'px '+P[13]+'px;';
	  qzxy=[P[14]-0,P[15]-0,P[16]-0,P[17]-0,P[18]-0,P[19]-0];
	  CNTW=(diyimg+'/').replace(/_\/$/gi,'_');
  }
  if (qgdx<25) qgdx=25;
  if (qgdx>75) qgdx=75;
  if (diyimg=='')
  {
	  if (qgdx>55) qgdx=55;
	  if (qgdx%2==0) qgdx--;
	  qzdx=qgdx-1;
  }
  if (qzdx>qgdx) qzdx=qgdx;
  var diyurl=isSP?parent.DIYURL:(diyimg==''?'':getvar('diyurl'));
  P=(diyurl+',,,,,,,,,,,,,,,,,,').split(',');
  var i,j,r=new RegExp('^[\\w\\-\\.'+RT+']+(\\/[\\w\\-\\.'+RT+']+)*\\.(gif|png|jpg|bmp)$','gi');
  for (i=0;i<P.length;i++)
  {
	  if (P[i].search(r)!=-1) P[i]=IMGPATH+CNTW+P[i];
	  else P[i]='';
  }
  if (P[0]!='') BGIMG='background-image:url('+P[0]+');';
  else BGIMG='background-image:url('+IMGPATH+CNTW+'bg_00.gif);';
  if (P[1]!='') CPIMG='background-image:url('+P[1]+');';
  else CPIMG='background-image:url('+IMGPATH+CNTW+'cp_00.gif);';
  if (P[2]!='') BDIMG='background-image:url('+P[2]+');'+qpbdxy;
  else BDIMG='background-image:url('+IMGPATH+CNTW+'bd_'+qgdx+'.gif);'+qpbdxy;
  if (P[3]!='') LNIMG='background-image:url('+P[3]+');'+qplnxy;
  else LNIMG='background-image:url('+IMGPATH+CNTW+'ln_'+qgdx+'.gif);'+qplnxy;
  if (P[4]!='') CLIMG='background-image:url('+P[4]+');'+qpclxy;
  else CLIMG='background-image:url('+IMGPATH+CNTW+'cl_'+qgdx+'.gif);'+qpclxy;
  CPIMG+='background-attachment:fixed;';
  LNIMG+='background-repeat:no-repeat;';
  CLIMG+='background-repeat:no-repeat;';
  if (qclimg==0) CLIMG='';
  var diyiqz=isSP?parent.DIYIQZ:(diyimg==''?'':getvar('diyiqz'));
  if (qznum==0) qznum=fdbs==1?7:2;
  if (qznum==7)
  {
	  for (i=5;i<19;i++)
	  {
		  if (P[i]!='') QZIMG[i-(i<12?4:1)]=P[i];
		  else QZIMG[i-(i<12?4:1)]=IMGPATH+CNTW+(i<12?('r'+(i-4)):('b'+(i-11)))+'_'+qzdx+'.gif';
	  }
  }
  else if (qznum==2)
  {
	  if (diyimg=='')
	  {
		  j=parseInt(16*fdbs);
		  j+=j%2;
	  }
	  else
	  {
		  j=qzdx;
		  if (diyiqz.search(/^([rb][1-7]){32}$/gi)!=-1) qzimg=diyiqz.match(/../g);
	  }
	  if (P[5]!='') QZIMG[0]=P[5];
	  else QZIMG[0]=IMGPATH+CNTW+'r8_'+j+'.gif';
	  if (P[6]!='') QZIMG[1]=P[6];
	  else QZIMG[1]=IMGPATH+CNTW+'b8_'+j+'.gif';
	  if (P[7]!='') QZIMG[2]=P[7];
	  else QZIMG[2]=IMGPATH+CNTW+'r0_'+qgdx+'.gif';
	  if (P[8]!='') QZIMG[3]=P[8];
	  else QZIMG[3]=IMGPATH+CNTW+'b0_'+qgdx+'.gif';
  }
  else
  {
	  if (P[5]!='') QZIMG[0]=P[5];
	  else QZIMG[0]=IMGPATH+CNTW+'rb_'+qzdx+'.gif';
	  if (diyiqz.search(/^(0[1-9]|1[0-4]){32}$/gi)!=-1) iQZ=diyiqz;
	  else iQZ='0102030405040302010606070707070708091011121110090813131414141414';			 
	  qzimg=iQZ.match(/../g);
  }
}
function getFont()
{
  var F=['\u5B8B\u4F53,\u65B0\u5B8B\u4F53,SimSun,NSimSun,\'MS Song\'','\u7EC6\u660E\u4F53,\u65B0\u7EC6\u660E\u4F53,MingLiU,PMingLiU'];
  if (isBIG5&&WIN.wxp==2)
  {
	  var s=document.createElement('span');
	  s.style.display='inline-block';
	  s.style.fontFamily=F[1];
	  s.style.fontSize='12px';
	  s.innerHTML='\u8C61 \u68CB';
	  document.body.appendChild(s);
	  if (s.scrollWidth!=30) MingLiU=0; //no MingLiU font
	  document.body.removeChild(s);
  }
  return 'font-family:'+(isBIG5?(F[1]+',SimSun,NSimSun;'):(F[0]+',MingLiU,PMingLiU;'));
}
function getTXT()
{
  IMGPATH=DhtmlXQimgpath;
  if (qgdx>55) qgdx=55;
  if (qgdx<25) qgdx=25;
  if (qgdx%2==0) qgdx--;
  qzdx=qgdx-1;
  qznum=fdbs==1?7:2;
  if (imgQiZi)
  {
	  if (qznum==7) {for (var i=1;i<18;i++) QZIMG[i]=IMGPATH+CNTW+(i<11?'r':'b')+i%10+'_'+qzdx+'.gif';}
	  else
	  {
		  var j=parseInt(16*fdbs);j+=j%2;
		  QZIMG[0]=IMGPATH+CNTW+'r8_'+j+'.gif';
		  QZIMG[1]=IMGPATH+CNTW+'b8_'+j+'.gif';
		  QZIMG[2]=IMGPATH+CNTW+'r0_'+qgdx+'.gif';
		  QZIMG[3]=IMGPATH+CNTW+'b0_'+qgdx+'.gif';
	  }
  }
}
function getFdbs(m)
{
  var w=isSP?((''+(parent.ZOOM+0.001)).substr(0,4)+'.500'):getvar('zoom');
  if (w.search(/^[12]\.\d\d\.(50|35|24)0$/gi)!=-1)
  {
	  fdbs=w.substr(0,4)-0;
	  if (fdbs>m) fdbs=m;
	  return w.substr(5)-0;
  }
  w=getvar('init');fdbs=1;
  if (w.search(/^\d+,\d+$/gi)==-1) return 500;
  w=w.split(',');var h=w[1]-0;w=w[0]-0;
  if (h>350)
  {
	  if (h==Math.round(w)) {fdbs=h/350;w=350;}
	  else if (h==Math.round(w*7/10)) {fdbs=h/350;w=500;}
	  else if (h==Math.round(w*35/24)) {fdbs=h/350;w=240;}
	  if (fdbs>m) fdbs=m;
  }
  if (fdbs==1) w=(w<350)?240:((w<500)?350:500);
  return w;
}
function getQPZB()
{
  var q=[];
  q[4]='\u4E5D\u516B\u4E03\u516D\u4E94\u56DB\u4E09\u4E8C\u4E00';
  q[5]='\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19';
  q[6]=q[4].split('').reverse().join('');
  q[7]=q[5].split('').reverse().join('');
  q[0]=[q[4],q[5]];
  q[1]=[q[6],q[7]];
  q[2]=[q[7],q[6]];
  q[3]=[q[5],q[4]];
  return q;
}
function showalert(sMag,sUrl,sLine,sFunc)
{
  MessFunc='';
  var sp=sMag.split('|');
  if (sp.length>1) {sMag=sp[0];MessFunc=sp[1];}
  if (!!sUrl)
  {
	  ErrNum++;
	  if (ErrNum>1) return false;
	  var a=sUrl.indexOf('dpxq.com');
	  var b=sUrl.indexOf(location.hostname);
	  if ((a>0&&a<15)||(b>0&&b<10)) sMag=('\u9519\u8BEF:'+sMag+' \u884C\u53F7:'+sLine+'<br><nobr>\u7F51\u5740:'+sUrl+'</nobr><br>\u8BF7\u6309Ctrl+F5\u5237\u65B0,\u5237\u65B0\u65E0\u6548\u8BF7\u62A5\u9519: <nobr><a target="_blank" href="tencent://message/?uin=88081492&Site=DhtmlXQ.'+location.hostname+'&Menu=yes"><img border="0" SRC="http://wpa.qq.com/pa?p=1:88081492:16" alt="\u70B9\u51FB\u8FD9\u91CC\u53D1\u6D88\u606F" /></a></nobr>');
	  else return false;
  }
  $('messdiv').innerHTML=sMag;
  $('message').style.zIndex=3;
  return true;
}
function Ch40(s) {return USPACE?s.replace(/&nbsp;/gi,' '):s;}
function clickYES() {eval(MessFunc);MessFunc='';clickNO();}
function clickNO() {$('message').style.zIndex=0;$('messdiv').innerHTML='';}
function ls(x,y)
{
  var i,s='',l=qgdx;
  for (i=-l;i<l;i++) s+=('<div style="'+sdiv19+'width:1px;height:1px;left:'+(x+i)+'px;top:'+(y+i)+'px;"></div><div style="'+sdiv19+'width:1px;height:1px;left:'+(x+i)+'px;top:'+(y-i)+'px;"></div>');
  return s;
}
function lz(x,y,m)
{
  var s='',t=2,l=5;
  if (m!=2) s+=ld((x-t-l),(y-t-l),0,0,l)+ld((x-t-l),(y+t),1,0,l);
  if (m!=3) s+=ld((x+t),(y-t-l),0,1,l)+ld((x+t),(y+t),1,1,l);
  return s;
}
function ld(x,y,a,b,l)
{
  return '<div style="'+sdiv19+'left:'+x+'px;top:'+y+'px;width:'+(l+1)+'px;height:'+(l+1)+'px;"><div style="'+sdiv19+'width:'+l+'px;height:'+l+'px;top:'+a+'px;left:'+b+'px;'+qpColor+'"></div></div>';
}
function getBrowser()
{
  var s,b=navigator.userAgent.toLowerCase();
  var IE=0,Fi=0,Ch=0,Op=0,Sa=0,We=0,Ge=0,ot=0;
  if (s=b.match(/msie (\d+(\.\d+)?)/)) {IE=document.documentMode;IE=(IE>=5?IE:s[1])-0;}
  else if (s=b.match(/chrome\/(\d+(\.\d+)?)/)) Ch=s[1]-0;
  else if (s=b.match(/firefox\/(\d+(\.\d+)?)/)) Fi=s[1]-0;
  else if (s=b.match(/trident\/(\d+(\.\d+)?)/)) {s=b.match(/rv:(\d+(\.\d+)?)/);IE=(s[1]-11.0>0)?(s[1]-0):11;}
  else if (s=b.match(/opera.(\d+(\.\d+)?)/)) {if(s[1]-9.8==0){if(s=b.match(/version.(\d+(\.\d+)?)/)) Op=s[1]-0;else Op=9.8;}else Op=s[1]-0;}
  else if (s=b.match(/safari/)) {if(s=b.match(/version\/(\d+\.\d)(\.\d)?\s+safari/)) Sa=s[1]-0;else Sa=1;}
  else if (s=b.match(/webkit/)) We=1;
  else if (s=b.match(/gecko/)) Ge=1;
  else ot=1;
  if (IE||Fi||Ge) {if (s=b.match(/opera.(\d+(\.\d+)?)/)) Op=s[1]-0;else if (window.opera&&opera.version) Op=opera.version()-0;}
  return {IE:IE,Firefox:Fi,Chrome:Ch,Safari:Sa,Opera:Op,WebKit:We,Gecko:Ge,other:ot};
}
function getWinVer()
{
  var b=navigator.userAgent;
  var w95=0,w9x=0,w20=0,wxp=0,mob=0,oth=0;
  if (b.search(/Win(dows)? ?(95|NT 4)/gi)>=0) w95=1;
  else if (b.search(/Win(dows)? ?(98|me|9x)/gi)>=0) w9x=1;
  else if (b.search(/Win(dows)? ?(NT 5\.0|2000)/gi)>=0) w20=1;
  else if (b.search(/Win(dows)? ?(NT 5|XP|2003)/gi)>=0) wxp=1;
  else if (b.search(/Win(dows)? ?(NT ([6-9]|\d\d))/gi)>=0) wxp=2;
  else if (b.search(/(Phone|iP[oa]d|Android|ios|mobile)/gi)>=0) mob=1;
  else if (navigator.platform.search(/Win(dows)?/gi)>=0) wxp=3;
  else oth=1;
  return {w95:w95,w9x:w9x,w2000:w20,wxp:wxp,mobile:mob,other:oth};
}
function cDIV(x,y,w,h,p,s,f,t)
{
  if (x!=='') x='left:'+x+'px;';
  if (y!=='') y='top:'+y+'px;';
  if (w!=='') w='width:'+w+'px;';
  if (h!=='') h='height:'+h+'px;';
  if (p!=='') p='position:'+((p==0)?'absolute;':'relative;');
  return '<div style="'+p+x+y+w+h+s+'" '+f+'>'+((t=='head')?'':(t+'</div>'));
}
function dataURLQZ()
{
  var t;
  t='gAAAACH5BAEAAAAALAAAAAA2ADYAAAT0EMhJaw1ikGK6KcQgBFZpnuUxeGzLDgcqywLn3m4hzPyE2LhgS9dDJRTC5E2RKFoOQKXUE3NKFtNsi2FlaL8ebs8LLotl2LL6bDqo34ZqKRGFawvNEtKuVpQQfHAIFnWBdxUChnA7E4WKWQUTbo9vVSuUagMSmHAAAZxvGKBqGaNlGqZgG6lfjqyvsLGyZa6zHiC2QiG5QSK8OCO/NyTCLhKXxQaaAJPJcrWxkROJxYyNwtIU1LzWFHu2fnO8eSm2gyhksGwn6anr6KzvaKbyM1Cc51YSR49M+hY/+BD5Z6KGmoEEUajQAiOhEwwaooAQQeJfBAA7';
  rQZ[55]='R0lGODlhNgA2AOMAAOzStPS2nPSahPR+bPRyZPQ+NPwCBPSqjPSijOy+pPRmVPSSfPSKdAAAAICA'+t;
  bQZ[55]='R0lGODlhNgA2AOMAAOzStMy2nKyahIx+bHxyZEQ+NAQCBLyqjLSijNS+pHRmVKSSfJyKdAAAAICA'+t;
  for (t=29;t<55;t+=2) {rQZ[t]=rQZ[55];bQZ[t]=bQZ[55];}
  t='AICAgCH5BAEAAAAALAAAAAAwADAAAATcEMhJqwxskGK6OcQgIFZpnkCQcF7rGoUSoHQVDG+eD3ONJrpgTuErIRbCpKtAKkoaB6W0xXAyplhPtXbNerenrvd7QkTH3kPTgkSPCyWgG02kBObzngSHRw8md31uPXKCY3Ushl5wgYpjCAKOaAJ8klkall4bmVmJnJ+goaKCnqMvBQSmQSGqOiKtOSOwLySlrXAACrMedY2zepWtf4C7ehKFpnUVbaO4FmamaxZioGAm1JnWYZ/aKAxnjt00R4pMThXIbsrndsGXxuw2K1Mx8PEmAZSbHiAi0j4RAAA7';
  rQZ[27]='R0lGODlhMAAwAOMAAOzStOzGpPSijPSKdPRyZPRWTPwCBPQ+NOy+pPSahPSSfPRmVPSqjPSylAAA'+t;
  bQZ[27]='R0lGODlhMAAwAOMAAOzStNzGpLSijJyKdHxyZFxWTAQCBEQ+NNS+pKyahKSSfHRmVLyqjMSylAAA'+t;
  t='AAAAACH5BAEAAAAALAAAAAAkACQAAASUEMhJZRCDlF3IMEEljtSBcGiKHGQLJGcqo0jiVsqsp8otabvghnADCoVEkvGIHOWY0B4lAa0WbJOY9YiYHLZVFkALFnYD5eolDcWwmZn3cSmv2+/4Kj3fGfBTH38oIIIcIWR5XQBfggJZf4oSVHxYE093AyN7aUmadZ1Kb6Atl1uZPpKIZpWoEiZcjq0jF3EcHiA+EQA7';
  rQZ[25]='R0lGODlhJAAkAOMAAOzStOy+pPSijPR+bPRmVPwCBPSahPSqjPRWTPSylPSKdAAAAICAgAAAAAAA'+t;
  bQZ[25]='R0lGODlhJAAkAOMAAOzStNS+pLSijIx+bHRmVAQCBKyahLyqjFxWTMSylJyKdAAAAICAgAAAAAAA'+t;
  rQZ[16]='R0lGODlhdgAQAIAAAPwCBPz+/CH5BAEAAAAALAAAAAB2ABAAAAL9hB+nluvaQHwM2jWnxKg/DQXg9THieXIVgjZZBGaqt63em37t7lK2LbuxSLRa0ZhI8oxM33HW1MCIvV9z0+OJkFhV0HkZfa1aZnVLylam62Hsp0WnS0fp0IRaKePdPjdZsxNI5TNWZBcGaLb2xqEG1AU4VQVHEZeDsxT4qKdI1OY36UKpODZCB1XYxjl49cY5SdPSWglmdUsnGZJH+1TKBQp8czlLnLdXNlqrd/saHNsHjYjrIGZLa8qcCiz66yds8okqnnsY1iyk3erp2fFSDWZd6L2YjrxE+dnuiiR2ivtP1qFZvVSdkuKvWDhL/+RdAxckYLWG25zsgwegAAA7';
  bQZ[16]='R0lGODlhdgAQAIAAAAQCBPz+/CH5BAEAAAAALAAAAAB2ABAAAAL0hB+nluva2IMvLhst2rI6PXUeEJSmeUFnmX4Thqxi1oJkuObsjbc8R3GNOrDZTZdIIk/DpubJWNKEH9rOKEnWgsCRrdg9/sDfF0lJ5LJADbCIWg5Do8iYlKn9vcVtWZu71xW3N8fjNugz9pfFt7Eoxnhx9yZFqBgWSHmm1me0OPVoRhViGBOlh5qpWDl1hvIH0yqa2OPaeYWZSpfn0zqHqHK3ZqtTerpZCEjxqRZptStcSyuKhqw5CujLAduMTaprI5ThO+x9vTmWzgb+Pa1rCpscmqunHYnJq/wNPLReJhwKyrgKOdi1yxVulj5VCtfRU0ivAAA7';
  rQZ[18]='R0lGODlhhAASAIAAAPwCBPz+/CH5BAEAAAAALAAAAACEABIAAAL+hI95oZ3sIoxt0ndrto7jy4Xbtygi4llqRwWuR6LG9Na1jGvAWca7/+vNcqFbx4a8wXy8JIM3ZJIgqwUyKsxkdTmsNwiOVrtisTP8DIOhZOEyJU2qqW14kL4up5sPp4v7ZlI39UFjd1eGmPjEqLTFFkNDBqnyt3OF2HiGx9lDt1ciOSnhZzlHiAaKk6bW2qmYiSUp+qj19VjK+qPqOVi42OsWWksEwmKLt0s8tqX4CrvmOJRr0/Jr7CyLyXz7mpycV2yLQv2ySx0re90tmK38DWvq2iZxrAUeHswu5R6u295MXj0uI059AWeH1rx1/4bNWHIJG8BjCqNVQ3PpTD4gX5DeQWwG5JYJbhUR3hM5D8amcSxDShz30R7Mlq0yFAAAOw==';
  bQZ[18]='R0lGODlhhAASAIAAAAQCBPz+/CH5BAEAAAAALAAAAACEABIAAAL+hI95oZ3sIoxt0ndr3lZ1jXyW6HxLiHnoCaabYUJTQNf2+Ny0y/NdvIIFTQBcSIfcEYNCFrOpKjGR0OLx1kxipRTSc6bdVZ8omROKY/zOVrKL6GWr1XK2/WS2zlZ0+rC3hMY1FSX418Ji5qeXMleEtffVdTi25hOGFwYpFJfIuBfJiVeiWXcIJDFY2AaTJ8oK6hQ7pvpVSjIS2kNYZWTImAWYAffSlgtsufo2p8UKawNby9E4HPyYJebmjKGk6pvMrCkmDh3e7Hr9uUs7Gn02C6YdKM3OJROJTuxN6b6ofHdB37Rt2cD4k9SLn6uDr/5VQwQCX0FnecjlU2EkWRkbegE5HtG2DeCkO2tiUBFYLFXKkA9TzoM4MGUBADs=';
}
function initboard(FDBS)
{
  if (FDBS>=1&&FDBS<=2.99&&fdbs!=FDBS)
  {
	  fdbs=(''+FDBS).substr(0,4)-0;
	  clearInterval(Livetime);
	  clearInterval(timer);
	  initWH(fdbs);
	  document.body.style.cssText=CSSTEXT+';font-size:'+fz+'px;line-height:'+lh+'px;';
  }
  var stxt='word-wrap:break-word;word-break:break-all;resize:none;outline:none;padding-left:1px;';
  var blue=((NS.IE||NS.Chrome||NS.Safari||NS.Firefox>=52)?'':['-o-','-khtml-','-ms-','-webkit-','-moz-','',''].join('user-select:none;'))+'" onselectstart="return false;';
  TT[2]=Number(new Date());
  var ps=parseInt(2*fdbs);
  var w1=Math.round(w0*48/100)-p0*2;
  if (w1%2==1) w1--;
  var h1=parseInt(h0*0.84);
  if (h1%2==1) h1--;
  if (fdbs==1) h1=293;
  var x1=p0;
  var y1=parseInt((h0-h1)/2);
  var b1=parseInt(3*fdbs);
  var p1=parseInt(3*fdbs);
  var bw1=parseInt(5*fdbs);
  var bh1=parseInt(2*fdbs);
  var w2=h0-p0-p0-w1-ps;
  var ln=16;
  var bh=parseInt(18*fdbs)+4;
  if (bh>37) bh=37;
  var bsp=parseInt(2*fdbs)-1;
  var by=h0-bh-y1-Math.max(Math.floor((y1-bh)/2),p0);
  var thh=Math.max(Math.round((h1-ln*lh-2)/2),lh+4);
  var fzy,lht,lhy,pty,ptt,i,j,s;
       if (qgdx<=25) {s=[16,20,32,40];}
  else if (qgdx<=27) {s=[16,20,34,41];}
  else if (qgdx<=29) {s=[18,23,38,44];}
  else if (qgdx<=31) {s=[18,23,40,47];}
  else if (qgdx<=33) {s=[26,31,42,49];}
  else if (qgdx<=35) {s=[26,31,44,51];}
  else if (qgdx<=37) {s=[26,31,48,56];}
  else if (qgdx<=39) {s=[26,31,50,58];}
  else if (qgdx<=41) {s=[28,33,54,63];}
  else if (qgdx<=43) {s=[28,33,56,65];}
  else if (qgdx<=45) {s=[28,33,58,67];}
  else if (qgdx<=47) {s=[30,35,60,69];}
  else if (qgdx<=49) {s=[32,39,64,74];}
  else if (qgdx<=51) {s=[34,40,66,76];}
  else if (qgdx<=53) {s=[34,40,68,78];}
  else if (qgdx<=55) {s=[36,42,70,81];}
  else {s=[36,42,70,81];}
  fzt=s[0];lht=s[1];fzy=s[2];lhy=s[3];
  if (!song&&fzt==18) {fzt=16;lht=20;}
  if (NS.Firefox>=3||NS.Gecko) {ptt='1221222222222222';pty='3332332322333433';}
  else if (NS.Firefox>=2) {ptt='2221222222222222';pty='3221222322332324';}
  else if (NS.Opera) {ptt='2222222222222222';pty='3333333433344444';if(!ZHCN&&WIN.wxp){ptt='1211222212222222';pty='2210111101111112';}}
  else if (NS.Safari||NS.Chrome||NS.WebKit) {ptt='2222222222222222';pty='3232233333334444';}
  else {ptt='1111111111111111';pty='1121111111111111';}
  var ptopy,ptopt,PNG,PT,PL,PW;
  qzimg[32]='<div style="position:absolute;top:0;left:0;width:'+(qgdx-(qgdx-qzdx)%2)+'px;height:'+(qgdx-(qgdx-qzdx)%2)+'px;'+(CLIMG==''?'background-color:#0F0;':CLIMG)+'"></div>';
  qztxt[32]=qzimg[32];
  if (imgQiZi)
  {
	  var tqizi='<div style="position:absolute;top:'+parseInt((qgdx-qzdx)/2)+'px;left:'+parseInt((qgdx-qzdx)/2)+'px;width:'+qzdx+'px;height:'+qzdx+'px;';
	  j=parseInt(16*fdbs);j+=j%2;
  }
  else if (NS.IE) {if (!(UWD>=0)) UWD=baseQiZi?0:(($('webdings').scrollHeight-14>0)&&(NS.IE>=7||qgdx>30||!window.screen.fontSmoothingEnabled))?1:0;}
  if ((!NS.IE)||WIN.mobile) {if (!(USPACE>=0)) USPACE=($('U0').scrollWidth-$('U1').scrollWidth==0)?0:1;}
  if (!(UWD>=0)) UWD=0;
  if (!(USPACE>=0)) USPACE=0;
  for (i=0;i<32;i++)
  {
	  if (imgQiZi)
	  {
		  if (qznum==7)
		  {
			  PNG=QZIMG[qzimg[i].replace('r','0').replace('b','1')-0];
			  if ((NS.IE==6||NS.IE==5.5)&&PNG.search(/\.png$/gi)!=-1) qzimg[i]=tqizi+'"><div style="position:absolute;width:'+qzdx+'px;height:'+qzdx+'px;top:0;left:0;overflow:hidden;"><div style="position:absolute;width:'+(qzdx-qzxy[0])+'px;height:'+(qzdx-qzxy[1])+'px;top:'+qzxy[1]+'px;left:'+qzxy[0]+'px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+PNG+'\',sizingMethod=\'crop\');"></div></div></div>';
			  else qzimg[i]=tqizi+'background-image:url('+PNG+');background-position:'+qzxy[0]+'px '+qzxy[1]+'px;"></div>'; 
		  }
		  else if (qznum==2&&diyimg=='')
		  {
			  qzimg[i]=tqizi+'background-image:url('+QZIMG[i<16?2:3]+');"><div style="position:absolute;width:'+j+'px;height:'+j+'px;top:'+(qzdx-j)/2+'px;left:'+(qzdx-j)/2+'px;background-image:url('+QZIMG[i<16?0:1]+');background-position:-'+((qzimg[i].charAt(1)-1)*(j+1))+'px 0px;"></div></div>';
		  }
		  else
		  {
			  if (qznum==2)
			  {
				  PNG=QZIMG[i<16?0:1];
				  PL=qzxy[i<16?0:3]-(qzimg[i].charAt(1)-1)*(qzdx+qzxy[i<16?2:5]);
				  PT=qzxy[i<16?1:4];
				  PW=7*(qzdx+qzxy[i<16?2:5])-PT;
			  }
			  else
			  {
				  PNG=QZIMG[0];
				  PL=qzxy[0]-(qzimg[i]-1)*(qzdx+qzxy[2]);
				  PT=qzxy[1];
				  PW=14*(qzdx+qzxy[2])-PT;
			  }
			  if ((NS.IE==6||NS.IE==5.5)&&PNG.search(/\.png$/gi)!=-1) qzimg[i]=tqizi+'"><div style="position:absolute;width:'+qzdx+'px;height:'+qzdx+'px;top:0;left:0;overflow:hidden;"><div style="position:absolute;width:'+PW+'px;height:'+(qzdx-PT)+'px;top:'+PT+'px;left:'+PL+'px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+PNG+'\',sizingMethod=\'crop\');"></div></div></div>';
			  else qzimg[i]=tqizi+'"><div style="position:absolute;width:'+qzdx+'px;height:'+qzdx+'px;top:0;left:0;background-image:url('+PNG+');background-position:'+PL+'px '+PT+'px;"></div></div>';
		  }
	  }
	  else
	  {
		  if (baseQiZi) dataURLQZ();
		  ptopy=pty.charAt((qgdx-25)/2)-0;
		  ptopt=ptt.charAt((qgdx-25)/2)-0;
		  if (baseQiZi) tqizi='<div style="position:absolute;top:0px;left:0px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;"><img style="width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;" src="data:image/gif;base64,'+(i<16?rQZ[qgdx]:bQZ[qgdx])+'" /></div>';
		  else if (UWD) tqizi='<div style="left:0px;top:'+((' 29 31 35 39 45 49 55'.indexOf(''+qgdx)>0)?-1:0)+'px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;position:absolute;font-size:'+(qgdx-1)+'px;line-height:'+(qgdx)+'px;color:#'+((i<16)?'f':'0')+'00;font-family:WebDings;">n</div>';
		  else          tqizi='<div style="left:'+(qgdx-1-fzy)/2+'px;top:'+((qgdx-1-fzy)/2-ptopy)+'px;width:'+fzy+'px;position:absolute;font-size:'+fzy+'px;line-height:'+(lhy)+'px;color:#'+((i<16)?'f':'0')+'00;">\u25CF</div>';
		  if (baseQiZi&&(fzt==16||fzt==18)) tqizi+='<div style="position:absolute;width:'+fzt+'px;height:'+fzt+'px;top:'+(qgdx-1-fzt)/2+'px;left:'+(qgdx-1-fzt)/2+'px;overflow:hidden;"><img style="position:absolute;left:-'+((qzimg[i].charAt(1)-1)*(fzt+1))+'px;" src="data:image/gif;base64,'+((i<16?rQZ[fzt]:bQZ[fzt]))+'" /></div>';
		  else tqizi+='<div style="top:'+((qgdx-1-fzt)/2-((qztxt[i]=='\u5175'&&fzt>=26)?1:0)-ptopt)+'px;left:0px;width:'+(qgdx-1)+'px;text-align:center;position:absolute;color:#fff;font-size:'+fzt+'px;line-height:'+lht+'px;">'+qztxt[i]+'</div>';
		  qztxt[i]=tqizi;
	  }
  }
  tWidth=wm-p0*2;
  aHeight=h0;
  var pHeight,pWidth,DIVS=$('divs');
  if ((NoFile&&!TongYu)||isSP) aHeight=Math.max(h0,document.body.clientHeight||document.documentElement.clientHeight);
  else
  {
	  var ww=false;
	  if (!Mobile&&window!=top)
	  {
		  if (NoFile&&TongYu) {if (!(fdbs==1&&wTitle==500)) ww=parent.document.getElementsByName(self.name)[0];}
		  else ww=$P('id_'+SN5);
	  }
	  if (ww)
	  {
		  aHeight=Math.max(h0,parseInt(DIVS.clientHeight));
		  if (aHeight<(h0+6+lh*2)) aHeight=h0;
		  else if (aHeight<w0) aHeight=h0+6+lh*2;
		  pWidth=(ww.style.width||ww.width);
		  pHeight=(ww.style.height||ww.height);
		  if (pWidth!='100%'&&parseInt(pWidth)!=wm) {ww.style.width=wm+'px';}
		  if (pHeight!='100%'&&parseInt(pHeight)!=aHeight) {ww.style.height=aHeight+'px';}
	  }
  }
  var tx=(w1-qgdx*8)/2;
  var ty=(h1-qgdx*9-1)/2;
  if (Mobile)
  {
  // \u624B\u673A\u7248\u5F00\u59CB
  wDevice=document.documentElement.clientWidth;  // she bei kuan du
  hDevice=document.documentElement.clientHeight; // she bei gao du
  if (wDevice<320) wDevice=320;                  // mo ren 320px
  if (NS.IE) {wDevice=320;hDevice=500;}
  //         heng  ping shu  ping
  // ipad    1024 * 704 768 * 960
  // iphone4 480  * 268 320 * 416
  // iphone5 568  * 268 320 * 504

  fzt=16;
  var wMargin=2;                                 // zhao fa qu bian kuang kuan du
  var fzMove=14;                                 // zhao fa zi ti da xiao
  var lhMove=18;                                 // zhao fa zi ti hang gao

  var hMove=lhMove*3;                            // zhao fa qu gao du
  var wMove=99;                                  // zhao fa qu kuan du
  var xMove=wMargin;                             // zhao fa qu x zuo biao
  var yMove=wMargin;                             // zhao fa qu y zui biao

  var hVar=hMove;                                // bian zhao qu gao du
  var wVar=96;                                   // bian zhao qu kuan du
  var xVar=xMove+wMove+wMargin;                  // bian zhao qu zuo biao
  var yVar=wMargin;                              // bian zhao qu x zuo biao

  var hComm=hMove;                               // zhu jie qu gao du
  var wComm=wDevice-wMargin*4-wMove-wVar;        // zhu jie qu kuan du
  var xComm=xMove+wMove+wMargin+wVar+wMargin;    // zhu jie qu x zuo biao
  var yComm=wMargin;                             // zhu jie qu y zuo biao

  var hTitle=hDevice<458?30:36;                  // biao ti gao du
  var wTitle1=wDevice-wMargin*2;                 // biao ti kuan du
  var xTitle=wMargin;                            // biao ti x zuo biao
  var yTitle=hMove+wMargin;                      // biao ti y zuo biao

  var hqgdx=Math.floor((hDevice-yTitle-hTitle-hTitle*2+3-wMargin*2)/10);
  var wqgdx=Math.floor((wDevice-wMargin*2)/9);
  qgdx=Math.min(hqgdx-1+hqgdx%2,wqgdx-1-wqgdx%2);
  qgdx=qgdx<29?29:qgdx>55?55:qgdx;

       if (qgdx==25) {qzdx=16;}
  else if (qgdx==27) {qzdx=20;}
  else if (qgdx==29) {qzdx=20;}
  else if (qgdx==31) {qzdx=22;}
  else if (qgdx==33) {qzdx=22;}
  else if (qgdx==35) {qzdx=24;}
  else if (qgdx==37) {qzdx=24;}
  else if (qgdx==39) {qzdx=26;}
  else if (qgdx==41) {qzdx=26;}
  else if (qgdx==43) {qzdx=28;}
  else if (qgdx==45) {qzdx=28;}
  else if (qgdx==47) {qzdx=30;}
  else if (qgdx==49) {qzdx=30;}
  else if (qgdx==51) {qzdx=32;}
  else if (qgdx==53) {qzdx=32;}
  else if (qgdx==55) {qzdx=36;}

  var hBoardMargin=Math.floor((hDevice-yTitle-hTitle-hTitle*2+3-10*qgdx)/2); // qi pan shang xia kong bai
  hBoardMargin=hBoardMargin<wMargin?wMargin:hBoardMargin>6?6:hBoardMargin;
  var wBoard=wDevice;                            // qi pan qu kuan du
  var hBoard=10*qgdx+2*hBoardMargin;             // qi pan qu gao du
  var xBoard=0;                                  // qi pan qu x zuo biao
  var yBoard=yTitle+hTitle;                      // qi pan qu y zuo biao
  var wBoardImg=9*qgdx+2;                        // qi pan tu pian kuan du
  var hBoardImg=10*qgdx+2;                       // qi pan tu pian gao du
  var xBoardImg=Math.round((wBoard-wBoardImg)/2);// qi pai tu pian x zuo biao = liang ce kong bai
  var yBoardImg=hBoardMargin;                    // qi pan tu pian y zuo biao
  var wBoardClick=9*qgdx-1;                      // qi pan dian ji qu yu kuan du
  var hBoardClick=10*qgdx-1;                     // qi pan dian ji qu yu gao du
  var xBoardClick=1;                             // qi pan dian ji qu yu x zuo biao
  var yBoardClick=1;                             // qi pan dian ji qu yu y zuo biao

  var hBtn=hTitle;                               // an niu qu gao du
  var wBtn=wDevice;                              // an niu qu kuan du
  var xBtn=0;                                    // an niu qu x zuo biao
  var yBtn=yBoard+hBoard;                        // an niu qu y zuo biao
  var mBtn=3;                                    // an niu qu margin
  var lhBtn=hBtn-2-mBtn*2;                       // an niu wen zi hang gao

  // if (NS.IE>0&&NS.IE<8) lhBtn=22;
  var hSource=yTitle+hTitle-wMargin*2;
  var wSource=wDevice-wMargin*2;
  var xSource=wMargin;
  var ySource=wMargin;

  var hSearch=hBtn-mBtn+((hDevice-(yBoard+hBoard+hTitle*2-mBtn)==1)?1:0);

  var wbtn0=64;
  var wbtn1=Math.floor((wBtn-wbtn0-mBtn*7)/5);wbtn0=wBtn-wbtn1*5-mBtn*7;
  var wbtn3=wDevice>=360?64:32;
  var wbtn2=Math.floor((wSource-wbtn3-wMargin*5)/5);wbtn3=wSource-wbtn2*5-wMargin*5;
  var yBtn2=Math.floor((hSource+hComm-lhBtn)/2)-mBtn;
  var wbtn4=Math.floor((wVar-2*wMargin)/3);
  var wbtn5=Math.max(wComm-wbtn0-wMargin,fzMove*5);
  var QZ='0_8 \u8F66 1_7 \u9A6C 2_6 \u76F8 3_5 \u4ED5 4 \u5E05 9_10 \u70AE 11_12_13_14_15 \u5175 16_24 \u8F66 17_23 \u9A6C 18_22 \u8C61 19_21 \u58EB 20 \u5C06 25_26 \u70AE 27_28_29_30_31 \u5352'.split(' ');
  var btn=sfont+'cursor:pointer;text-align:center;font-size:14px;line-height:'+(NS.IE==8?lhBtn+2:(NS.IE==7||NS.IE==6)?lhBtn:lhBtn-2)+'px;padding:0;border:1px solid #888888;background-color:#ccc;-webkit-appearance:none;height:30px;';

  s='';
  // \u6807\u9898
  s+=('<div id="div1" style="position:absolute;overflow:hidden;top:'+yTitle+'px;left:'+xTitle+'px;width:'+wTitle1+'px;height:'+hTitle+'px;text-align:center;font-size:16px;line-height:'+hTitle+'px;white-space:nowrap;background-color:#9cf;">\u5C4F\u5E55\u9AD8'+screen.height+'\u5C4F\u5E55\u5BBD'+screen.width+'\u8BBE\u5907\u9AD8'+window.screen.availHeight+'\u8BBE\u5907\u5BBD'+wDevice+'</div>');
  //s+=('<div id="divrbe" style="position:absolute;overflow:hidden;top:'+yTitle+'px;left:'+xTitle+'px;width:'+wTitle1+'px;height:'+hTitle+'px;text-align:center;font-size:16px;line-height:'+hTitle+'px;white-space:nowrap;background-color:#fff;"></div>');
  s+=('<div id="divrbe" style="position:absolute;overflow:hidden;top:'+(yTitle+wMargin)+'px;left:'+xTitle+'px;width:'+wTitle1+'px;height:'+(hTitle-wMargin*2)+'px;text-align:center;font-size:16px;line-height:'+(hTitle-wMargin*2)+'px;white-space:nowrap;display:none;background-color:#fff;"></div>');
  // \u68CB\u76D8
  s+=('<div id="divboard" style="position:absolute;overflow:hidden;top:'+yBoard+'px;left:'+xBoard+'px;width:'+wDevice+'px;height:'+hBoard+'px;background-image:url(./zhcn/bd_55.gif)">');
  s+=('<div style="position:absolute;overflow:hidden;left:'+xBoardImg+'px;top:'+yBoardImg+'px;width:'+wBoardImg+'px;height:'+hBoardImg+'px;background-image:url(./zhcn/ln_'+qgdx+'.gif);">');
  s+=('<div style="position:absolute;overflow:hidden;left:'+xBoardClick+'px;top:'+yBoardClick+'px;width:'+wBoardClick+'px;height:'+hBoardClick+'px;">');
  qzimg='0102030405040302010606070707070701020304050403020106060707070707'.match(/../g);
  for (i=0;i<32;i++)
  {
	  qzimg[i]='<div id="z'+i+'" style="position:absolute;top:'+(9*qgdx)+'px;left:'+(10*qgdx)+'px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;background-image:url(./zhcn/'+(i<16?'r':'b')+'0_'+(NS.IE&&NS.IE<9?qgdx:55)+'.gif);background-size:contain;"><div style="position:absolute;top:'+parseInt((qgdx-1-qzdx)/2)+'px;left:'+parseInt((qgdx-1-qzdx)/2)+'px;width:'+qzdx+'px;height:'+qzdx+'px;background-image:url(./zhcn/'+(i<16?'r':'b')+'8_'+qzdx+'.gif);background-position:-'+((qzimg[i]-1)*(qzdx+1))+'px 0;"></div></div>';
  }
  s+='<div id="z32" style="position:absolute;top:'+(9*qgdx)+'px;left:'+(10*qgdx)+'px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;background-color:#0F0;"></div>';
  s+=qzimg.join('');
  for (i=0;i<10;i++)
  {
	  for (j=0;j<9;j++) s+=('<div style="position:absolute;top:'+(i*qgdx)+'px;left:'+(j*qgdx)+'px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;" onclick="getMove(\''+j+i+'\');"></div>');
  }
  s+='</div></div></div>';
  // \u5E95\u90E8\u6309\u94AE
  s+=('<div id="btn_play" style="position:absolute;overflow:hidden;top:'+yBtn+'px;left:'+xBtn+'px;height:'+hBtn+'px;width:'+wBtn+'px;text-align:center;background-color:#9CF;">');
  s+='<input type="button" onclick="gotonum(\'First\')" style="'+btn+'width:'+wbtn1+'px;margin:'+mBtn+'px 0 0px 0px;" value="\u5F00\u5C40" />';
  s+='<input type="button" onclick="gotonum(\'Prev\')" style="'+btn+'width:'+wbtn1+'px;margin:'+mBtn+'px 0 0px '+mBtn+'px;" value="\u540E\u9000" />';
  s+='<input type="button" onclick="gotonum(\'Next\')" style="'+btn+'width:'+wbtn1+'px;margin:'+mBtn+'px 0 0px '+mBtn+'px;" value="\u524D\u8FDB" />';
  s+='<input type="button" onclick="gotonum(\'Last\')" style="'+btn+'width:'+wbtn1+'px;margin:'+mBtn+'px 0 0px '+mBtn+'px;" value="\u7EC8\u5C40" />';
  s+='<input type="button" id="autoplay" style="'+btn+'width:'+wbtn1+'px;margin:'+mBtn+'px 0 0px '+mBtn+'px;" onclick="AutoPlay()" value="\u81EA\u52A8" />';
  s+='<input type="button" id="shownow" style="'+btn+'width:'+wbtn0+'px;margin:'+mBtn+'px 0 0px '+mBtn+'px;" value="0/0" />';
  s+='</div>';
  s+=('<div id="btn_search" style="position:absolute;overflow:hidden;top:'+(yBtn+hBtn)+'px;left:'+xBtn+'px;height:'+hSearch+'px;width:'+wBtn+'px;text-align:center;background-color:#9CF;">');
  s+='<input type="button" onclick="EditSave()" style="'+btn+'width:'+wbtn1+'px;margin:0 0 0 0;" value="\u4FDD\u5B58" />';
  s+='<input type="button" id="turn_Board" onclick="turnBoard()" style="'+btn+'width:'+wbtn1+'px;margin:0 0 0 '+mBtn+'px;" value="\u65CB\u8F6C" />';
  s+='<input type="button" id="mirror_Board" onclick="mirrorBoard()" style="'+btn+'width:'+wbtn1+'px;margin:0 0 0 '+mBtn+'px;" value="\u5BF9\u79F0" />';
  s+='<input type="button" onclick="SearchP(\'tree\')" style="'+btn+'width:'+wbtn1+'px;margin:0 0 0 '+mBtn+'px;" value="\u53D8\u7740" />';
  s+='<input type="button" onclick="SearchP(\'next\')" style="'+btn+'width:'+wbtn1+'px;margin:0 0 0 '+mBtn+'px;" value="\u5BF9\u5C40" />';
  s+='<input type="button" id="showsource" onclick="ViewOther()" style="'+btn+'width:'+wbtn0+'px;margin:0 0 0 '+mBtn+'px;" value="\u5BFC\u51FA" />';
  s+='</div>';
  // \u7740\u6CD5
  s+=('<div id="btn_comm" style="'+sfont+'display:none;position:absolute;overflow:hidden;top:'+yComm+'px;left:0;padding:0;margin:0;height:'+hComm+'px;width:'+wDevice+'px;border:0;background-color:#9cf;">');
  s+=('<div style="position:absolute;overflow:hidden;bottom:0px;left:'+xBtn+'px;height:'+hBtn+'px;width:'+wDevice+'px;text-align:left;background-color:#9CF;">');
  s+='<input type="button" onclick="getInfo()" style="'+btn+'width:'+(wMove-wMargin-fzMove*5)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u6211" />';
  s+='<input type="button" onclick="TXTtoDhtmlXQ(cText)" style="'+btn+'width:'+(fzMove*5)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u6DFB\u52A0\u7740\u6CD5" />';
  s+='<input type="button" onclick="DelMove()" style="'+btn+'width:'+(wbtn4)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u5220" />';
  s+='<input type="button" onclick="UpMove()" style="'+btn+'width:'+(wVar-wbtn4*2-wMargin*2)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u5347" />';
  s+='<input type="button" onclick="DownMove()" style="'+btn+'width:'+(wbtn4)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u964D" />';
  s+='<button id="e_comm" onclick="EditComment(cText)" style="'+btn+'width:'+(wbtn5)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;">\u4FEE\u6539\u6CE8\u89E3</button>';
  s+='<input type="button" onclick="hideCOMM('+hComm+','+hBtn+','+xComm+','+wComm+')" style="'+btn+'width:'+(wComm-wbtn5-wMargin)+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;" value="\u6536\u56DE" />';
  s+='</div>';
  s+='</div>';
  s+=('<div style="position:absolute;background-color:#9cf;height:'+hMove+'px;top:'+yMove+'px;left:0;width:'+wDevice+'px;"></div>');
  s+=('<div id="m_scroll" style="position:absolute;overflow:auto;overflow-x:hidden;background-color:#fff;height:'+hMove+'px;top:'+yMove+'px;left:'+xMove+'px;width:'+wMove+'px;">');
  s+=('<div id="m_text" style="padding-top:0px;'+blue+'">');
  s+=('<div id="move_0" onclick="gotonum(0)" style="'+smvtv+'background-color:'+bsColor+';color:#fff;" nowrap><span id="m_0_n" style="display:inline-block;">===</span><span id="m_0_m">\u68CB\u5C40\u5F00\u59CB</span><span id="m_0_c"> </span><span id="m_0_v"> </span></div>');
  s+=('</div></div>');
  // \u53D8\u7740
  s+=('<div id="v_scroll" style="position:absolute;overflow:auto;overflow-x:hidden;background-color:#fff;height:'+hMove+'px;top:'+yVar+'px;left:'+xVar+'px;width:'+wVar+'px;">');
  s+=('<div id="v_text" style="padding-top:0px;'+blue+'"></div>');
  s+=('</div>');
  // \u6CE8\u89E3
  s+=('<div id="c_scroll" style="position:absolute;overflow:hidden;background-color:#fff;height:'+hMove+'px;top:'+yComm+'px;left:'+xComm+'px;width:'+wComm+'px;">');
  s+=('<textarea id="c_text" readonly="readonly" onclick="zoomCOMM('+lhMove+','+hBtn+')" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" style="'+sfont+stxt+'overflow:auto;padding:0;margin:0;height:100%;width:'+wComm+'px;border:0;"></textarea>');
  s+=('</div>');
  // \u65B0\u53D8
  s+=('<div id="v_addnew" style="display:none;position:absolute;overflow:auto;overflow-x:hidden;background-color:#fff;height:'+hMove+'px;top:'+yMove+'px;left:'+xMove+'px;width:'+(wMove+wMargin+wVar)+'px;"></div>');
  // \u5BFC\u51FA
  s+=('<div id="sourceText" style="display:none;position:absolute;overflow:hidden;top:'+ySource+'px;left:'+xSource+'px;width:'+wSource+'px;height:'+hSource+'px;background-color:#9CF;">');
  s+=('<textarea id="source_Text" readonly="readonly" onclick="this.readOnly=false" onblur="this.readOnly=true" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" style="'+sfont+stxt+'padding:0;margin:0;width:'+wSource+'px;height:'+hComm+'px;border:0;background-color:#fff;position:absolute;top:0;left:0;"></textarea>');
  s+='<div id="sourceButton1" style="position:absolute;top:'+yBtn2+'px;left:0;text-align:left;">';
  s+='<input type="button" onclick="copyTEXT()" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 0;font-size:12px;" value="\u590D\u5236\u6587\u672C" />';
  s+='<input type="button" onclick="copyUBB()" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u590D\u5236UBB" />';
  s+='<input type="button" onclick="copysurl(1)" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u590D\u5236\u7F51\u5740" />';
  s+='<input type="button" onclick="copyFENTEXT()" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u590D\u5236FEN" />';
  s+='<input type="button" onclick="getBinit(\'xqqb\')" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u7C98\u8D34FEN" />';
  s+='<input type="button" onclick="hideButton(1)" style="'+btn+'width:'+wbtn3+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u6B8B\u5C40'+(wDevice>=360?'\u8BBE\u7F6E':'')+'" />';
  s+='</div>';
  // \u5C0F\u68CB\u5B50
  s+=('<div id="source_Qizi" style="'+sfont+'display:none;position:absolute;top:0;left:0;padding:0;margin:0;width:'+wSource+'px;height:'+hComm+'px;border:0;background-color:#fff;padding-left:0;word-wrap:break-word;resize:none;outline:none;">');
  s+='<div style="margin:1px;font-size:16px;line-height:26px;">\u6DFB\u52A0\u68CB\u5B50:<br>\u6DFB\u52A0\u68CB\u5B50:</div>';
  for (i=0;i<14;i++) s+='<div style="position:absolute;display:inline-block;top:'+(i<7?1:28)+'px;left:'+(75+i%7*35)+'px;width:24px;height:24px;background-image:url(./zhcn/'+(i<7?'r':'b')+'0_'+(NS.IE&&NS.IE<9?25:55)+'.gif);background-size:contain;cursor:pointer;text-align:center;color:#fff;font-size:16px;line-height:24px;" onclick="addQizi(\''+QZ[i*2]+'\')">'+QZ[i*2+1]+'</div>';
  s+='</div>';
  s+='<div id="sourceButton2" style="display:none;position:absolute;top:'+yBtn2+'px;left:0;">';
  s+='<input type="button" onclick="setBinit()" style="'+btn+'width:'+(wbtn2*3+wMargin*2)+'px;margin:'+mBtn+'px 0 0 0;font-size:12px;" value="\u5F53\u524D\u5C40\u9762\u8BBE\u4E3A\u521D\u59CB" />';
  s+='<input type="button" onclick="setBinit(2)" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u6E05\u7A7A\u68CB\u76D8" />';
  s+='<input type="button" onclick="setBinit(3)" style="'+btn+'width:'+wbtn2+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u65B0\u5C40" />';
  s+='<input type="button" onclick="hideButton(2)" style="'+btn+'width:'+wbtn3+'px;margin:'+mBtn+'px 0 0 '+wMargin+'px;font-size:12px;" value="\u590D\u5236'+(wDevice>=360?'\u6309\u94AE':'')+'" />';
  s+='</div>';
  s+=('</div>');
  // \u6267\u884C\u51FD\u6570\u9700\u8981\u7684
  s+='<span style="display:none;"><span id="rside"></span><span id="mside"></span><span id="bside"></span><span id="livevartxt"></span><span id="livetimediv"></span></span>';
  var si='';
  if (aHeight<(yBtn+hBtn+hBtn-mBtn)) aHeight=yBtn+hBtn+hBtn-mBtn;
  // \u624B\u673A\u7248\u7ED3\u675F
  }
  else
  {
  // \u7535\u8111\u7248\u5F00\u59CB
  // title+board
  s=cDIV(p0,0,tWidth,'',0,"overflow:hidden;text-align:center;white-space:nowrap;padding-top:2px;line-height:"+(y1-2)+"px;",'id="div1"','');
  s+=('<div style="position:absolute;top:'+y1+'px;left:'+x1+'px;width:'+w1+'px;height:'+h1+'px;">');
  s+=cDIV(0,0,w1,h1,0,qbColor+(NOBD?BDIMG:''),'','');
  s+=cDIV(1,1,w1-2,h1-2,0,((VIMG&&NOBD)?'':(qpColor+BDIMG)),'','');
  if (VIMG)
  {
	  if (LNIMG) s+=cDIV(tx-(qgdx+1)/2,ty-(qgdx+1)/2,qgdx*9+2,qgdx*10+2,0,LNIMG,'','');
  }
  else
  {
	  s+=cDIV(tx-b1-p1,ty-b1-p1,qgdx*8+1+p1*2+b1*2,qgdx*9+1+p1*2+b1*2,0,qgColor,'','');
	  s+=cDIV(tx-p1,ty-p1,qgdx*8+1+p1*2,qgdx*9+1+p1*2,0,qpColor,'','');
	  s+=cDIV(tx-p1,ty-p1,qgdx*8+1+p1*2,qgdx*9+1+p1*2,0,qpColor,'','');
	  s+=cDIV(tx,ty,8*qgdx+2,9*qgdx+2,0,bxColor,'','');
	  s+=cDIV(tx,ty,8*qgdx+1,9*qgdx+1,0,qgColor,'','head');
	  for (i=0;i<9;i++)
	  {
		  if (i==4) s+=cDIV(1,i*qgdx+1,8*qgdx-1,qgdx-1,0,bxColor,'','head')+cDIV(1,1,8*qgdx-2,qgdx-2,0,qpColor,'','')+'</div>';
		  else for (j=0;j<8;j++) s+=cDIV(j*qgdx+1,i*qgdx+1,qgdx-1,qgdx-1,0,bxColor,'','head')+cDIV(1,1,qgdx-2,qgdx-2,0,qpColor,'','')+'</div>';
	  }
	  s+=('</div>');
	  s+=('<div id="div19" style="position:absolute;top:'+ty+'px;left:'+tx+'px;">');
	  s+=ls(qgdx*4,qgdx);
	  s+=ls(qgdx*4,qgdx*8);
	  s+=lz(0,qgdx*3,2)+lz(qgdx*2,qgdx*3)+lz(qgdx*4,qgdx*3)+lz(qgdx*6,qgdx*3)+lz(qgdx*8,qgdx*3,3);
	  s+=lz(qgdx,qgdx*2)+lz(qgdx*7,qgdx*2);
	  s+=lz(0,qgdx*6,2)+lz(qgdx*2,qgdx*6)+lz(qgdx*4,qgdx*6)+lz(qgdx*6,qgdx*6)+lz(qgdx*8,qgdx*6,3);
	  s+=lz(qgdx,qgdx*7)+lz(qgdx*7,qgdx*7);
	  s+=('</div>');
  }
  var zb=(fz>12&&fz<20)?((isBIG5)?15:16):fz;
  var zh=zb+zb%2;
  var bsy=parseInt((h1-qgdx*10-zh*2)/4);
  var msy=parseInt(ty+4*qgdx+2);
  var rsy=ty+9*qgdx+(ty-bsy-zh-1);
  s+=cDIV(tx-zh/2+2,bsy,qgdx*10,'',0,'font-size:'+zb+'px;letter-spacing:'+(qgdx-zh)+'px;','id="bside"',qpzb[0][1]);
  s+=cDIV(1,1,w1-2,'',0,'font-size:'+zb+'px;line-height:'+(thh-2)+'px;display:none;text-align:center;padding-top:1px;border-bottom:1px solid '+qbColor.replace(/^.*(#.+)$/gi,'$1')+';background-color:#FFF;','id="divrbe"','');
  s+=cDIV(tx+2,msy,qgdx*8-2,qgdx-3,0,'overflow:hidden;text-align:center;line-height:'+(qgdx-1)+'px;','id="mside"',ads_board);
  s+=cDIV(tx-zh/2+1,rsy,qgdx*10,'',0,'font-size:'+zb+'px;letter-spacing:'+(qgdx-zh)+'px;','id="rside"',qpzb[0][0]);
  s+=cDIV((w1-qgdx*9+1)/2,(h1-qgdx*10)/2,qgdx*9,qgdx*10+2,0,'overflow:hidden;','','head');
  for (i=32;i>=0;i--) s+=('<div id="z'+i+'" style="left:'+(10*qgdx)+'px;top:'+(9*qgdx)+'px;position:absolute;width:'+qgdx+'px;height:'+qgdx+'px;">'+(imgQiZi?qzimg[i]:qztxt[i])+'</div>');
  rQZ[0]=baseQiZi?('<img style="width:'+qgdx+'px;height:'+qgdx+'px;" src="data:image/gif;base64,R0lGODlhCgAKAIAAAP///wAAACH5BAEAAAAALAAAAAAKAAoAAAIIhI+py+0PYysAOw==">'):'';
  if (baseQiZi)
  {
	  for (i=0;i<10;i++)
	  {
		  for (j=0;j<9;j++) s+=('<div style="position:absolute;top:'+(i*qgdx)+'px;left:'+(j*qgdx)+'px;width:'+(qgdx-1)+'px;height:'+(qgdx-1)+'px;" ondblclick="showClick('+j+','+i+')" onclick="getMove(\''+j+i+'\')">'+rQZ[0]+'</div>');
	  }
  }
  else
  {
	  s+=('<table style="position:absolute;top:0;left:0;" cellspacing="0" cellpadding="0">');
	  for (i=0;i<10;i++)
	  {
		  s+=('<tr>');
		  for (j=0;j<9;j++) s+=('<td style="width:'+qgdx+'px;height:'+qgdx+'px;font-size:1px;line-height:1px;" ondblclick="showClick('+j+','+i+')" onclick="getMove(\''+j+i+'\')">'+rQZ[0]+'</td>');
		  s+=('</tr>');
	  }
	  s+=('</table>');
  }
  s+=('</div>');
  var bw=parseInt((w2+bsp)/3)-bsp;
  if (bw%2==1) bw++;
  var bs=sfont+'padding-left:0;padding-right:0;margin:0;position:absolute;line-height:'+(bh-(((NS.IE>=5&&NS.IE<8&&!(NS.IE==5&&!baseQiZi))||(MingLiU&&NS.IE>8))?4:6))+'px;top:'+by+'px;width:'+bw+'px;height:'+bh+'px;'+(NS.IE?'':'border-width:1px;')+(WIN.mobile?'background-color:#ccc;-webkit-appearance:none;':'');
  s+=('<input type="button" style="'+bs+'left:0;" onclick="gotonum(\'First\')" value="\u5F00\u5C40">');
  s+=('<input type="button" style="'+bs+'left:'+(bw+bsp)+'px;" onmouseup="gotonum(\'Prev\')" value="\u540E\u9000">');
  s+=('<input type="button" style="'+bs+'left:'+(2*bw+2*bsp)+'px;" onmouseup="gotonum(\'Next\')" value="\u524D\u8FDB">');
  s+=('<input type="button" style="'+bs+'left:'+(3*bw+3*bsp)+'px;" onclick="gotonum(\'Last\')" value="\u7EC8\u5C40">');
  s+=('<input type="button" style="'+bs+'left:'+(4*bw+4*bsp)+'px;width:'+(w1-bw-(bw+bsp)*4-bsp)+'px;border-style:solid;border-color:'+bgColor.substr(17)+';border-right:0;background-color:transparent;color:#00f;" onfocus="this.blur()" id="shownow" value="0/0">');
  s+=('<input type="button" style="'+bs+'left:'+(w1-bw)+'px;" id="autoplay" onclick="AutoPlay()" value="\u81EA\u52A8">');
  s+=cDIV(w1-bw,by+bh-lh*13-4,bw,lh*13+6,0,'display:none;overflow:hidden;'+bdColor,'id="autotime"','head');
  s+=cDIV(1,1,bw-2,lh*13+4,0,'line-height:'+lh+'px;background-color:#fff;text-align:center;','','<div style="height:3px;font-size:3px;line-height:3px;"></div><a href="javascript:turnBoard();">\u65CB \u8F6C</a><br><a href="javascript:mirrorBoard();">\u5BF9 \u79F0</a><br><a href="javascript:EditSave()">\u4FDD \u5B58</a><br><a href="javascript:void(0)" onclick="copyUBB()">\u590D \u5236</a><br><a href="javascript:void(0)" onclick="getInfo()">\u4FE1 \u606F</a><br><a href="javascript:Autotimer(8000)">8.0\u79D2</a><br><a href="javascript:Autotimer(5000)">5.0\u79D2</a><br><a href="javascript:Autotimer(3000)">3.0\u79D2</a><br><a href="javascript:Autotimer(2000)">2.0\u79D2</a><br><a href="javascript:Autotimer(1000)">1.0\u79D2</a><br><a href="javascript:Autotimer(500)">0.5\u79D2</a><br><a href="javascript:Autotimer(200)">0.2\u79D2</a><br><a href="javascript:Autotimer(100)">0.1\u79D2</a>');
  s+=('</div></div>');
  // move
  var typ=NS.IE?('padding-top:'+PF+'px;line-height:'+(thh-PF)+'px;'):('line-height:'+(thh)+'px;');
  var sty=' spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" ';
  s+=('<div style="'+((wTitle==240)?'display:none;':'')+'position:absolute;top:'+y1+'px;left:'+(x1+w1+ps)+'px;">');
  s+=cDIV(0,0,w2,h1,0,bdColor,'','');
  s+=cDIV(1,1,w2-2,h1-2,0,blColor,'','');
  s+=cDIV(1,thh,w2-2,ln*lh+2,0,brColor,'','');
  s+=cDIV(6,1,w2-7,'',0,typ,'','\u68CB\u8C31\u5E8F\u5217\u3000[<a href="javascript:HideMove();" id="hidemove">\u9690\u85CF</a>]');
  s+=cDIV(2,thh+1,w2-3,ln*lh,0,'overflow:auto;overflow-x:hidden;'+CPIMG,'id="m_scroll"','head');
  s+=('<div id="m_text" style="height:'+(ln*lh+1)+'px;'+blue+'">');
  s+=('<div id="move_0" onmouseup="gotonum(0)" style="'+smvtv+'background-color:'+bsColor+';color:#fff;" nowrap><span id="m_0_n" style="display:inline-block;">====</span><span id="m_0_m">\u68CB\u5C40\u5F00\u59CB</span><span id="m_0_c"> </span><span id="m_0_v"> </span></div>');
  s+=('</div>');
  s+=('</div>');
  s+=('<input type="button" style="'+bs+'left:0;" value="\u65CB\u8F6C" id="turn_Board" onclick="turnBoard()">');
  s+=('<input type="button" style="'+bs+'left:'+(bw+bsp)+'px;" value="\u5BF9\u79F0" id="mirror_Board" onclick="mirrorBoard()">');
  s+=('<input type="button" style="'+bs+'left:'+(2*bw+2*bsp)+'px;width:'+(w2-bw*2-2*bsp)+'px;" value="\u4FDD\u5B58" onclick="EditSave()">');
  s+=('</div>');
  var scw=16;
  // comm+var
  var w3=w0-p0-(x1+w1+ps+w2+ps);
  var ch=(ln-4)*lh-thh;
  s+=('<div style="'+((wTitle!=500)?'display:none;':'')+'position:absolute;top:'+y1+'px;left:'+(x1+w1+ps+w2+ps)+'px;">');
  s+=cDIV(0,0,w3,h1,0,bdColor,'','');
  s+=cDIV(1,1,w3-2,h1-2,0,blColor,'','');
  s+=cDIV(1,thh,w3-2,ch,0,brColor,'','');
  s+=cDIV(6,1,w3-7,'',0,typ,'','\u6CE8\u89E3 <a href="javascript:TXTtoDhtmlXQ(cText)">\u6DFB\u52A0\u7740\u6CD5</a> <a href="javascript:EditComment(cText)" id="e_comm">\u4FEE\u6539\u6CE8\u89E3</a>');
  s+=cDIV(2,thh+1,w3-3,ch-2,0,'overflow:hidden;'+CPIMG,'id="c_scroll"','head');
  s+=('<textarea id="c_text" '+sty+' style="'+sfont+stxt+'position:absolute;left:2px;top:0;height:'+(ch-2)+'px;overflow-y:scroll;border:0;width:'+(w3-5)+'px;padding:0;margin:0;background-color:transparent;" onblur="allowLR=true;" onfocus="allowLR=false;" ondblclick="this.select();"></textarea>');
  s+=('</div>');
  s+=cDIV(6,thh+ch+((NS.IE&&NS.IE<9)?1:0),w3-7,'',0,typ,'','<span id="livevartxt">\u53D8\u7740(\u5355\u51FB\u9009\u62E9)</span>\u3000<a href="javascript:UpMove()" title="\u63D0\u5347\u5F53\u524D\u53D8\u7740">\u5347</a><a href="javascript:DownMove()" title="\u964D\u4F4E\u5F53\u524D\u53D8\u7740">\u964D</a><a href="javascript:DelMove()" title="\u5220\u9664\u672C\u6B65\u540E\u7740\u6CD5\u6216\u5B50\u53D8\u7740\u6811">\u5220</a>');
  s+=cDIV(6,thh+ch+((NS.IE&&NS.IE<9)?1:0),w3-7-3*fzt,'',0,typ,'id="livetimediv"','');
  s+=cDIV(1,thh+ch+thh,w3-2,4*lh+2,0,brColor,'','');
  s+=cDIV(2,thh+ch+thh+1,w3-3,4*lh,0,'overflow:auto;overflow-x:hidden;'+CPIMG,'id="v_scroll"','head');
  s+=('<div id="v_text" style="height:'+(4*lh+1)+'px;'+blue+'">'+ads_dpxq+'</div>');
  s+=('</div>');
  s+=cDIV(1,thh+ch+thh,w3-2,4*lh+2,0,'overflow:auto;overflow-x:hidden;background-color:#fff;display:none;'+CPIMG,'id="v_addnew"','');
  s+=('<input type="button" style="'+bs+'left:0;" value="'+((TongYu&&location.hostname.indexOf('dpxq')!=-1)?'\u7EA2\u5305':'\u7814\u7A76')+'" id="showmini" onclick="ViewMini()">');
  s+=('<input type="button" style="'+bs+'left:'+(bw+bsp)+'px;" value="\u5BFC\u51FA" id="showsource" onclick="ViewSource()">');
  s+=('<input type="button" style="'+bs+'left:'+(2*bw+2*bsp)+'px;width:'+(w3-bw*2-2*bsp)+'px;color:#f00;" value="\u68CB\u8C31\u641C\u7D22" id="showsearch" onclick="ViewSearch()">');
  s+=('</div>');
  // source
  var w4=w2+w3+ps;
  var ha=1;ch=ch-ha*lh;
  var si=' style="'+sfont+'padding-left:0;padding-right:0;height:'+lh+'px;width:'+(parseInt(fz*1.5)+(CSS1?1:3))+'px;margin-left:2px;border:1px solid #7F9DB9;" ';
  var ZFB=' <a href="javascript:ViewZFB(0)" style="color:#F00;">\u9886\u53D6\u652F\u4ED8\u5B9D\u7EA2\u5305</a> <a href="javascript:ViewZFB(1)" style="color:#F00;">\u6253\u8D4F\u52A8\u6001\u68CB\u76D8\u4F5C\u8005</a>';
  s+=('<div id="sourceText" style="position:absolute;display:none;top:'+y1+'px;left:'+(x1+w1+ps)+'px;">');
  s+=cDIV(0,0,w4,h1,0,bdColor,'','');
  s+=cDIV(1,1,w4-2,h1-2,0,blColor,'','');
  s+=cDIV(1,thh,w4-2,ch,0,brColor,'','');
  s+=cDIV(6,1,w4-7,'',0,typ,'','\u5BFC\u5165\u5BFC\u51FA'+ZFB);
  s+=('<textarea id="source_Text" '+sty+' style="'+sfont+stxt+'position:absolute;left:2px;top:'+(thh+1)+'px;width:'+(w4-3)+'px;height:'+(ch-2)+'px;'+CPIMG+'overflow-y:scroll;border:0;padding:0;margin:0;background-color:transparent;" onblur="allowLR=true;" onfocus="allowLR=false;" ondblclick="this.select();"></textarea>');
  s+=cDIV(6,thh+ch+((NS.IE&&NS.IE<9)?1:0),w4-7,'',0,typ,'','<a href="javascript:void(0)" onclick="copycode(sText)" style="color:#f00">\u590D\u5236\u4EE3\u7801</a> <a href="javascript:setBinit(1)">\u5C06\u5DE6\u4FA7\u5C40\u9762\u8BBE\u4E3A\u5F00\u59CB</a> <a href="javascript:setBinit(2)" style="color:#f00">\u6E05\u7A7A\u68CB\u76D8</a> <a href="javascript:setBinit(3)">\u65B0\u5C40</a>');
  s+=cDIV(1,thh+ch+thh,w4-2,(4+ha)*lh+2,0,brColor,'','');
  s+=cDIV(2,thh+ch+thh+1,w4-3,(4+ha)*lh,0,'overflow:auto;overflow-x:hidden;'+CPIMG,'','head');
  s+=('<div style="position:absolute;left:4px;top:1px;">');
  s+=('\u5BFC\u51FA\u4EE3\u7801:<a href="javascript:getUBB()">UBB</a> <a href="javascript:getFLASH(0)" style="color:#f00">FLASH</a> <a href="javascript:getHTML()">HTM</a> <a href="javascript:getJAVA()">JAVA</a> <a href="javascript:getIFRAME()">FRAME</a> <a href="javascript:TreeSet(1)" style="color:#f00">\u6587\u672C</a>');
  s+=('<br>\u5BFC\u51FA\u4EE3\u7801:<a href="javascript:getFLASH(4)"><span style="color:#F00">\u65B0\u6D6A</span>\u7F51\u6613</a> <a href="javascript:getFLASH(1)">\u641C\u72D0</a> <a href="javascript:getFLASH(2)" style="color:#F00">QQ\u7A7A\u95F4</a> <a href="javascript:getFLASH(3)">\u5E38\u89C1\u8BBA\u575B</a>');
  s+=('<br>\u5BFC\u51FA\u5C40\u9762:<a href="javascript:getIMGTEXT()">\u6F14\u64AD\u5BA4</a> <a href="javascript:getANIGIF()">GIF\u52A8\u753B</a> <a href="javascript:getFENTEXT()">\u68CB\u8F6FFEN\u4E32</a> <a href="javascript:getXQSJTEXT()">\u4E16\u5BB6</a>');
  s+=('<br>\u5BFC\u5165\u5C40\u9762:<a href="javascript:getBinit(\'xqstudio\')">\u6F14\u64AD\u5BA4\u68CB\u56FE</a> <a href="javascript:getBinit(\'xqqb\')">\u8C61\u68CB\u8F6F\u4EF6FEN\u4E32</a> <a href="javascript:getBinit(\'xqsj\')">\u4E16\u5BB6</a>');
  s+=('<br>\u6DFB\u52A0\u68CB\u5B50:<span id="addred"><a href="javascript:addQizi(\'0_8\')" style="color:#F00;">\u8F66</a><a href="javascript:addQizi(\'1_7\')" style="color:#F00;">\u9A6C</a><a href="javascript:addQizi(\'9_10\')" style="color:#F00;">\u70AE</a><a href="javascript:addQizi(\'11_12_13_14_15\')" style="color:#F00;">\u5175</a><a href="javascript:addQizi(\'2_6\')" style="color:#F00;">\u76F8</a><a href="javascript:addQizi(\'3_5\')" style="color:#F00;">\u4ED5</a><a href="javascript:addQizi(\'4\')" style="color:#F00;">\u5E05</a></span> <a href="javascript:addQizi(\'16_24\')">\u8F66</a><a href="javascript:addQizi(\'17_23\')">\u9A6C</a><a href="javascript:addQizi(\'25_26\')">\u70AE</a><a href="javascript:addQizi(\'27_28_29_30_31\')">\u5352</a><a href="javascript:addQizi(\'18_22\')">\u8C61</a><a href="javascript:addQizi(\'19_21\')">\u58EB</a><a href="javascript:addQizi(\'20\')">\u5C06</a>');
  }
  // \u7535\u8111\u7248\u7ED3\u675F

  s+=('<form id="treetxt" action="" name="treetxt" style="display:none;background-color:#fff;position:absolute;top:0;left:0;">');
  s+=('\u70B9\u94FE\u63A5\u8BBE\u7F6E\u53D8\u7740\u6587\u672C\u53C2\u6570--><a href="javascript:getTEXT(1)" style="color:#00f">\u786E\u8BA4\u5BFC\u51FA</a> <a href="javascript:TreeSet(0)" style="color:#f00">\u8FD4\u56DE</a>');
  s+=('<br>\u5BFC\u51FA\u5185\u5BB9:<span id="nstart2"></span><a href="javascript:TreeSet(\'nstart\',0);" id="nstart0" style="color:#00f">\u25CE \u5168\u90E8</a> <a href="javascript:TreeSet(\'nstart\',1);" id="nstart1">\u25CE\u5F53\u524D\u5C40\u9762</a> <a href="javascript:getTEXT(\'\');" id="nstart3">\u25CE\u7B80\u5355\u6587\u672C</a>');
  s+=('<br>\u5BFC\u51FA\u683C\u5F0F:<span id="stype3"></span><a href="javascript:TreeSet(\'stype\',1);" id="stype1" style="color:#00f">\u25CE \u6807\u51C6</a> <a href="javascript:TreeSet(\'stype\',0);" id="stype0">\u25CE\u5206\u79BB\u6A21\u5F0F</a> <a href="javascript:TreeSet(\'stype\',2);" id="stype2">\u25CE\u7D27\u51D1\u6A21\u5F0F</a>');
  s+=('<br>\u6BCF\u884C\u5217\u6570:<span id="col0"></span><a href="javascript:TreeSet(\'col\',1);" id="col1" style="color:#00f">\u25CE \u4E00\u5217</a> <a href="javascript:TreeSet(\'col\',2);" id="col2">\u25CE\u6BCF\u884C\u4E8C\u5217</a> <a href="javascript:TreeSet(\'col\',3);" id="col3">\u25CE\u6BCF\u884C\u4E09\u5217</a>');
  s+=('<br>\u70B9\u51FB\u76F8\u5E94\u5BFC\u51FA\u683C\u5F0F\u94FE\u63A5\u7136\u540E\u70B9\u786E\u8BA4\u5BFC\u51FA\u5373\u53EF');
  s+=('<br>\u6CE8\u89E3\u884C\u9996<input type="text" name="zhustr" value="0"'+si+'> \u7740\u6CD5\u884C\u9996<input type="text" name="lspace" value="4"'+si+'> \u7740\u6CD5\u884C\u5C3E<input type="text" name="rspace" value="0"'+si+'>');
  s+=('<br>\u56DE\u5408\u5185\u5DE6<input type="text" name="lpad" value="1"'+si+'> \u56DE\u5408\u5185\u53F3<input type="text" name="rpad" value="1"'+si+'> \u56DE\u5408\u4E4B\u95F4<input type="text" name="mspace" value="3"'+si+'>');
  s+=('<br>\u6CE8\u89E3\u6807\u793A<input type="text" name="zhujie" value="*"'+si+'> \u53D8\u7740\u6807\u793A<input type="text" name="bianzhao" value="B"'+si+'> \u53D8\u7740\u5C42\u6570<input type="text" name="maxdepth" value="999"'+si+'>');
  s+=('<br>\u6E05\u9664\u7A7A\u9879<input type="text" name="delempty" value="1"'+si+'> \u7740\u6570\u8BB0\u6570<input type="text" name="istwo" value="0"'+si+'> \u6309\u5C42\u7F16\u53F7<input type="text" name="bianhao" value="1"'+si+'>');
  s+=('<br><input type="hidden" name="nstart" value="0"><input type="hidden" name="stype" value="1"><input type="hidden" name="col" value="1">');
  s+=('</form>');
  if (!Mobile) s+=('</div></div></div>');
  // search
  s+=('<div id="searchText" style="position:absolute;display:none;top:'+y1+'px;left:'+(x1+w1+ps)+'px;">');
  s+=cDIV(0,0,w4,h1,0,bdColor,'','');
  s+=cDIV(1,1,w4-2,h1-2,0,blColor,'','');
  s+=cDIV(1,thh,w4-2,ln*lh+2,0,brColor,'','');
  s+=cDIV(6,1,w4-7,'',0,typ,'','\u68CB\u8C31\u641C\u7D22'+ZFB);
  s+=cDIV(2,thh+1,w4-3,ln*lh,0,''+CPIMG,'id="search_Text"',getSEARCH());
  s+=('</div>');
  // other
  var oldOpera=!WIN.mobile&&NS.Opera>0&&NS.Opera<9.5?1:0;
  s+=('<div id="div16" style="'+(Mobile?'display:none;':'')+'position:absolute;top:'+(h0+3)+'px;left:'+p0+'px;text-align:left;height:'+(lh*2+3)+'px;width:'+tWidth+'px;overflow:hidden;"></div>');
  i='<div id="psText" style="'+(Mobile?'display:none;':'')+'position:absolute;';
  if (!NS.IE||CSS1) i+=('top:'+(h0+lh*2+6)+'px;bottom:'+(CSS1&&!oldOpera?(p0+4):p0)+'px;left:'+p0+'px;">'); //IE6 hu lue bottom
  else i+=('top:0;left:0;height:100%;padding:'+(h0+lh*2+6)+'px '+p0+'px '+p0+'px '+p0+'px;">');
  i+=('<div style="position:'+(CSS1?'absolute':'relative')+';width:'+tWidth+'px;height:100%;">');
  i+=('<textarea id="showText" style="position:absolute;top:0;left:0;'+sfont+stxt+'padding:'+(oldOpera?'0':'1px 0px 1px 2px')+';overflow-y:scroll;background-color:#fff;height:'+(CSS1&&NS.IE==6&&!NS.Opera?(document.body.clientHeight-(h0+lh*2+6+p0+4)+'px'):'100%')+';width:'+(tWidth-(CSS1&&!oldOpera?4:0))+'px;border-width:1px;margin:0;'+CPIMG+'" '+sty+' onblur="allowLR=true;" onfocus="allowLR=false;" ondblclick="this.select();"></textarea>');
  i+=('</div></div>');
  if (!NS.IE||CSS1) s+=i; else s=i+s;
  s+=('<form target="DhtmlXQ_dpxq" style="display:none;" name="DhtmlXQ_search" id="DhtmlXQ_search" method="post" action="'+SURL+'index.asp"><textarea name="ubb"></textarea><input type="text" name="s"><input type="text" name="f"></form>');
  s+=('<div style="position:absolute;top:0;left:0;width:1px;height:1px;overflow:hidden;"><textarea style="border:0;background-color:transparent;" id="copytext"></textarea></div>');
  if (!isSP&&pHeight!='100%'&&window!=top) DIVS.style.height=aHeight+'px';
  DIVS.innerHTML=s;
  if (CSS1&&window.onerror==null) window.onerror=showalert;
  if (CSS1&&NS.IE==6&&!NS.Opera) DIVS.onresize=fixsText;
  if (typeof(sMnum)!='string')
  {
	  sMnum=$('m_0_n').scrollWidth;
	  sMnum=(sMnum==0||sMnum==fz*(Mobile?1.5:2))?'':'display:inline-block;text-align:right;width:'+Math.max(sMnum,fz*(Mobile?1.5:2))+'px;';
  }
  TT[3]=Number(new Date());
}
function fixsText() {$('showText').style.height=document.body.clientHeight-(h0+lh*2+6+p0+4)+'px';}
var zoomCOMMok=0;
function zoomCOMM(lhMove,hBtn)
{
  var h=lhMove*10;
  if (zoomCOMMok!=0) {cText.readOnly=false;return;}
  $('m_scroll').style.height=h+'px';
  $('v_scroll').style.height=h+'px';
  $('c_scroll').style.height=h+'px';
  $('btn_comm').style.height=h+hBtn+'px';
  $('btn_comm').style.display='';
  zoomCOMMok=2;
}
function hideCOMM(hComm,hBtn,xComm,wComm)
{
  if (zoomCOMMok==1)
  {
	  $('btn_comm').style.display='none';
	  $('btn_comm').style.height=hComm+'px';
	  cText.readOnly=true;
	  if (isAddMove)
	  {
		  $('e_comm').innerHTML='\u4FEE\u6539\u6CE8\u89E3';
		  isAddMove=false;
		  ShowCommentText();
	  }
	  zoomCOMMok=0;
  }
  else if (zoomCOMMok!=0)
  {
	  $('m_scroll').style.height=hComm+'px';
	  $('v_scroll').style.height=hComm+'px';
	  $('c_scroll').style.height=hComm+'px';
	  $('btn_comm').style.height=hComm+hBtn+'px';
	  zoomCOMMok=1;
  }
}
function ViewOther()
{
  $('sourceText').style.display=($('sourceText').style.display==''?'none':'');
  $('showsource').value=($('showsource').value=='\u5BFC\u51FA'?'\u9690\u85CF':'\u5BFC\u51FA');
}
function hideButton(ty)
{
  $('sourceButton'+(3-ty)).style.display='';
  $('sourceButton'+ty).style.display='none';
  $('source_Qizi').style.display=ty==2?'none':'';
}
function copyTEXT()
{
  getTEXT(1);copycode(sText);
}
function copyFENTEXT()
{
  getFENTEXT();copycode(sText);
}
function Conv_Ver2(S,MP)
{
  if (!MP)
  {
	  var r=new RegExp('\\[DhtmlXQ_movelist\\](.+'+REOK+')\\[\\/DhtmlXQ_movelist\\]','i');
	  MP=S.match(r);
	  if (MP==null) return S;
	  else MP=MP[0].replace(r,'$1').replace(/[^A-Za-z0-9]/gi,'');
}
  if (MP.search(/\d{4}\w\w[XYZ]\w\d{4}/i)!=-1) MP=MP.replace(/(\w{6}[XYZ])/gi,'|$1').substr(1).split('|');
  else return S;
  var M=['0_1'],MOVE=[''],i,l,M1,M2,MI=0,MII=[],MIJ=0;
  l=MP.length;
  for (i=0;i<l;i++)
  {
	  M1=MP[i].substr(0,4);
	  M2=parseInt(MP[i].substr(8),10);
	  if (i==M2) {MIJ++;MOVE[MI]+=M1;}
	  else {MI++;M[MI]=(M2>0&&MII[M2].split('_')[0]==MII[M2-1].split('_')[0])?MII[M2]:M[MII[M2].split('_')[0]];MIJ=parseInt(MII[M2].split('_')[1],10);MOVE[MI]=M1;}
	  MII[i]=MI+'_'+MIJ;
	  S=S.replace('[DhtmlXQ_comment'+(i+1)+']','[DhtmlXQ_comment'+MII[i]+']').replace('[/DhtmlXQ_comment'+(i+1)+']','[/DhtmlXQ_comment'+MII[i]+']');
  }
  for (i=M.length-1;i>=0;i--) M[i]='[DhtmlXQ_move_'+M[i]+'_'+i+']'+MOVE[i]+'[/DhtmlXQ_move_'+M[i]+'_'+i+']';
  S=S.replace(/DhtmlXQ_comment0\]/gi,'DhtmlXQ_comment0_0]').replace(new RegExp('\\[DhtmlXQ_(comment\\d+|move\\w+)\\].*'+REOK+'\\[\\/DhtmlXQ_\\1\\]','gi'),'')+M.join('\r\n');
  isOld=1;
  return S;
}
function fixmove(m)
{
  var a=m.indexOf(']')+1;
  var b=m.lastIndexOf('[');
  var c=m.substring(a,b).match(/(\d{4})+/gi);
  if (!c) return '';
  else return m.substr(0,a)+c.join('')+m.substr(b);
}
function initdata()
{
  TT[4]=Number(new Date());
  clearInterval(Livetime);
  clearInterval(timer);
  showClick(10,9);
  if ($('divsave')) $('divsave').style.display='none';
  $('autoplay').value='\u81EA\u52A8';
  $('turn_Board').style.color='';
  $('mirror_Board').style.color='';
  $('v_addnew').style.display='none';
  Mscroll=$('m_scroll');
  MoveDIV=$('m_text');
  VarDIV=$('v_text');
  sText=$('source_Text');
  sText1=$('showText');
  cText=$('c_text');
  // initvar
  initPOK();
  if (getvar('hidemove')) HideMove();
  ViewUrl=getvar('viewurl');
  refer='';pClick='';pCid=-1;cnum=32;nnum=0;fnum=0;lnum=0;isJieQi=0;
  allowLR=true;isTurn=false;canauto=true;LiveAdmin=false;LiveID=0;CSS=true;isMirror=false;isAddMove=false;BPos=[];AllowAdd=32;
  sMI='0_1_0'.split(' ');
  pMI='0_1_0'.split(' ');
  D400=[];D400[1000]='';
  P90=new Array(101).join('99').match(/99/gi);
  P=[fixP99((getvar('binit').replace(/\D/gi,'9')+B).substr(0,64))];
  RBT='';RBE=['u'+chkP64(P[0],0)];
  hits=getvar('hits');
  if (hits!='') hits='\u6D4F\u89C8 '+hits+' \u6B21';
  var i,j,r,x,y,t='',MM=Mobile;
  move=getvar('movelist').replace(/[^A-Za-z0-9]/gi,'');
  r=new RegExp('\\[(DhtmlXQ_move_\\d+_\\d+_\\d+)\\].+'+REOK+'\\[\\/\\1\\]','gi');
  if ((/\D/.test(move))||(!r.test(UBB))) UBB=Conv_Ver2(UBB,move);
  if (!isOld)
  {
	  UBB=UBB.replace(/\[(\/?)DhtmlXQ_comment(\d+)\]/gi,'[$1DhtmlXQ_comment0_$2]');
	  UBB=UBB.replace(/\[(\/?)DhtmlXQ_movelist\]/gi,'[$1DhtmlXQ_move_0_1_0]');
	  if (']['.replace(/.+/,fixmove)=='') UBB=UBB.replace(r,fixmove);
	  else
	  {
		  var UBBM=UBB.match(r)||'';
		  for (i=0;i<UBBM.length;i++)
		  {
			  x=UBBM[i].indexOf(']')+1;
			  y=UBBM[i].substr(1,x-2);
			  UBBM[i]=UBBM[i].substring(x,UBBM[i].indexOf('[/'+y+']')).match(/\d{4}/g);
			  UBBM[i]=UBBM[i]?('['+y+']'+UBBM[i].join('')+'[/'+y+']'):'';
		  }
		  if (UBBM) UBB=UBB.replace(r,'')+'\r\n'+UBBM.join('\r\n');
	  }
  }
  if (UBB.search(/\[DhtmlXQ_move_0_1_0\]\d*\[\/DhtmlXQ_move_0_1_0\]/i)==-1) UBB+='\r\n[DhtmlXQ_move_0_1_0][/DhtmlXQ_move_0_1_0]';
  move=fixP99(getvar('move_0_1_0'));
  lnum=parseInt(move.length/4);
  fnum=parseInt(getvar('firstnum'),10);
  if (isNaN(fnum)) fnum=0;
  if (lnum>999) lnum=999;
  if (fnum>lnum) fnum=lnum;
  if (fnum<0) fnum=0;
  for (i=0;i<=31;i++)
  {
	  x=P[0].charAt(i*2)-0;
	  y=P[0].charAt(i*2+1)-0;
	  if (x==9) cnum--;
	  $('z'+i).style.left=(x*qgdx)+((x==9)?qgdx:0)+'px';
	  $('z'+i).style.top=(y*qgdx)+'px';
	  P90[x*10+y]=i;
  }
  if (PVer<getvar('pver')) xqtitle=('\u8BF7[<a href="http://www.dpxq.com/hldcg/dhtmlxq/" target="_black" style="color:#f00">\u70B9\u6B64\u4E0B\u8F7D</a>]\u6700\u65B0\u68CB\u76D8\u652F\u6301\u6587\u4EF6 <a href="javascript:getInfo()">\u7248\u672C\u4FE1\u606F</a>');
  else xqtitle=getvar('title').replace(/</g,'&lt;');
  var tw=xqtitle.replace(/[^\x00-\xff]/gi,'xx').length;
  if (Mobile) {if (tw*8+4>wDevice) {tw=(tw*7+4>wDevice-4)?12:14;$('div1').style.fontSize=tw+'px';}}
  else $('div1').style.fontSize=((wTitle==240||tw*(fzt/2)>tWidth)?fz:fzt)+'px';
  $('div1').innerHTML=xqtitle;
  MoveDIV.innerHTML='<div id="move_0" onmouseup="gotonum(0)" style="'+smvtv+'background-color:'+bsColor+';color:#fff;" nowrap><span id="m_0_n" style="'+sMnum+'">'+(MM?'':'=')+'===</span><span id="m_0_m">\u68CB\u5C40\u5F00\u59CB</span><span id="m_0_c">'+havecomment(0,0)+'</span><span id="m_0_v"> </span></div>';
  var c_m=getMovelistString(move,P[0],1);
  setRBE(RBT,1);
  for (i=1,j=0;i<=lnum;i++)
  {
	  sMI[i]='0_1_0';
	  pMI[i]='0_1_0';
	  t+=('\r\n<div id="move_'+i+'" style="'+smvtv+'" onmouseup="gotonum('+i+')" nowrap><span id="m_'+i+'_n" style="'+sMnum+'">');
	  if (i%2==1) {j++;t+=(j>=100)?(j+(MM?'':'.')):((j>=10)?((MM?'':'&nbsp;')+j+'.'):((MM?'':'&nbsp;')+'&nbsp;'+j+'.'));}
	  else t+=((MM?'':'&nbsp;')+'&nbsp;&nbsp;&nbsp;');
	  t+=('</span><span id="m_'+i+'_m">'+c_m.substr(i*4-4,4)+'</span><span id="m_'+i+'_c">'+havecomment(0,i)+'</span><span id="m_'+i+'_v">'+havevar(0,i)+'</span></div>');
  }
  MoveDIV.innerHTML+=Ch40(t);
  var f=ViewUrl.match(/f=\d{1,3}[_\d]*/gi);
  gotoMI((f!=null)?f[0].substr(2):(''+fnum),1);
  showRBE(0);
  if (NoFile)
  {
	  if (!Mobile&&location.href.search(/(live|room)=yes/gi)!=-1) refer=$('refer').innerHTML;
	  else if (document.referrer)
	  {
		  refer=document.referrer;
		  if (refer!='') refer=URLEscape(refer.replace(/(\w:\/+[^\/]+)(\/.*)?/gi,'$1')+'/\r\n'+refer);
	  }
  }
  else
  {
	  refer=parent.location.href;
	  if (refer.search(/\/hldcg\/chess\/(view\.htm|live\/[mnu]_\d+\.html)/gi)!=-1)
	  {
		  refer=$P('refer').innerHTML;
	  }
	  else
	  {
		  if (refer.search(/dhtml\w{3}\.asp\?f=.+/gi)!=-1) refer=parent.parent.location.href;
		  refer=URLEscape(location.protocol+'//'+location.hostname+'/\r\n'+refer);
	  }
  }
  if (refer=='') refer=getvar('refer');
  if (refer=='') refer=URLEscape('http://www.dpxq.com/\r\nhttp://www.dpxq.com/hldcg/search/');
  var div16=$('div16');
  if (getvar('class').search(/^[\u5BF9\u5C0D]\u5C40\u76F4\u64AD$/gi)==0) {div16.innerHTML=getvar('livetext');sText1.value='';LiveMain();}
  else {$('livevartxt').innerHTML='\u53D8\u7740(\u5355\u51FB\u9009\u62E9)';$('livetimediv').innerHTML='';div16.innerHTML=getrefer();if (aHeight>=w0||isSP||window==top) {getTEXT(getvar('txttype'));}}
  if (isSP) {var l=parent.UBBS.length;if(l>=10)parent.UBBS[l-10]='';parent.UBBS[l]=UBB;}
  TT[5]=Number(new Date());
}
function conv_ev(ev)
{
  var ev=ev.match(/\d\d/gi),i;
  if (ev==null) return '';
  if (isMirror&&isTurn) {for (i=0;i<ev.length;i++) if (ev[i]<'90') ev[i]=''+ev[i].substr(0,1)+(9-ev[i].substr(1));}
  else if (isMirror) {for (i=0;i<ev.length;i++) if (ev[i]<'90') ev[i]=''+(8-ev[i].substr(0,1))+ev[i].substr(1);}
  else if (isTurn) {for (i=0;i<ev.length;i++) if (ev[i]<'90') ev[i]=(189-ev[i]).toString().substr(1);}
  return ev.join('');
}
function CP(p)
{
  var b=p.match(/\d\d/gi),a=p.match(/\d\d/gi);
  if (b[0]<b[8])  {a[8]=b[0];a[0]=b[8];}
  if (b[1]<b[7])  {a[7]=b[1];a[1]=b[7];}
  if (b[2]<b[6])  {a[6]=b[2];a[2]=b[6];}
  if (b[3]<b[5])  {a[5]=b[3];a[3]=b[5];}
  if (b[9]<b[10]) {a[10]=b[9];a[9]=b[10];}
  if (b[16]>b[24]) {a[24]=b[16];a[16]=b[24];}
  if (b[17]>b[23]) {a[23]=b[17];a[17]=b[23];}
  if (b[18]>b[22]) {a[22]=b[18];a[18]=b[22];}
  if (b[19]>b[21]) {a[21]=b[19];a[19]=b[21];}
  if (b[25]>b[26]) {a[26]=b[25];a[25]=b[26];}
  return a.slice(0,11).join('')+b.slice(11,16).sort().reverse().join('')+a.slice(16,27).join('')+b.slice(27,32).sort().join('');
}
function showClick(x,y)
{
  $('z32').style.left=x*qgdx+'px';
  $('z32').style.top=y*qgdx+'px';
}
function getMove(ev,ui)
{
  ev=fixP99(ev);
  var p,i,r,m,ms,c=ev.split('');
  p=conv_ev(getpos(1)).replace(/(\d\d)/gi,'$1_');
  if (AllowAdd<32)
  {
	  if (p.indexOf(ev)>=0) showalert('\u6B64\u5904\u6709\u68CB\u5B50');
	  else {p=p.split('_');p[AllowAdd]=ev;p=p.join('');DrawPOS(p);setBinit();AllowAdd=32;}
	  return;
  }
  CSS=false;
  if (ev.length==4) {ms=pClick.substr(4);pClick=ev;}
  else if (ev.length==2) pClick+=conv_ev(ev);
  else return;
  if (pCid>=0) {showClick(10,9);pCid=-1;}
  if (pClick.length%4==2)
  {
	  ev=pClick.substr(pClick.length-2);
	  pCid=p.indexOf(ev);
	  if (pCid>0) pCid=pCid/3;
	  if (pCid>=0) showClick(c[0],c[1]);
	  else pClick=pClick.replace(/\d\d$/gi,'');
	  return;
  }
  var PT=pClick.replace(/^.*(\d{4})$/gi,'$1');
  var s1='_'+PT.substr(0,2)+'_';
  var s2='_'+PT.substr(2,2)+'_';
  if (s1==s2) {pClick=pClick.replace(/^(.*)\d{4}$/gi,'$1');return;}
  var move_ev=(pClick.length>4||isMXQ)?'':getMovelistString(PT,P[nnum]);
  if (move_ev!=''&&((LiveID<=0)||(LiveID>0&&(LiveAdmin||ev.length==4))))
  {
	  if (nnum==lnum)
	  {
		  lnum++;
		  move+=PT;
		  sMI[lnum]=sMI[nnum];
		  pMI[lnum]=sMI[nnum];
		  getMovelistString(PT,P[nnum],nnum+1);
		  setRBE(RBT,nnum+1);
		  if (!$('move_'+lnum))
			  MoveDIV.innerHTML+=Ch40('\r\n<div id="move_'+lnum+'" style="'+smvtv+'" onmouseup="gotonum('+lnum+')" nowrap><span id="m_'+lnum+'_n" style="'+sMnum+'">'+((nnum%2==0)?((nnum<18?('&nbsp;'+(Mobile?'':'&nbsp;')):(nnum<198?(Mobile?'':'&nbsp;'):''))+(nnum/2+1)+(Mobile&&nnum>=198?'':'.')):(Mobile?'   ':'    ')).replace(/ /gi,'&nbsp;')+'</span><span id="m_'+lnum+'_m">'+move_ev+'</span><span id="m_'+lnum+'_c">&nbsp;</span><span id="m_'+lnum+'_v">&nbsp;</span></div>');
		  r=new RegExp('\\[(DhtmlXQ_move_'+sMI[nnum]+')\\](\\d*)\\[\\/\\1\\]','i');
		  UBB=UBB.replace(r,'[$1]$2\$MOVE[/$1]').replace('$MOVE',PT);
		  UpData();
		  if (NS.Safari&&nnum<14) Mscroll.scrollTop=0;
		  gotonum('Next');
		  LiveMovePost('move$$$'+move);
	  }
	  else if (PT==move.substr(nnum*4,4)) gotonum('Next');
	  else if (PT==getvar('move_'+pMI[nnum+1]).substr((nnum-pMI[nnum+1].split('_')[1])*4+4,4))
	  {
		  gotonum('Next');
		  if (sMI[nnum]!=pMI[nnum]) get_movetext(pMI[nnum],pMI[nnum]);
	  }
	  else
	  {
		  r=new RegExp('\\[DhtmlXQ_move_('+pMI[nnum+1].split('_')[2]+'_'+(nnum+1)+'_\\d+)\\](\\d{4})\\d*\\[\\/DhtmlXQ_move_\\1\\]','gi');
		  m=UBB.match(r)||'';
		  for (i=0;i<m.length;i++)
		  {
			  if (m[i].replace(r,'$2')==PT)
			  {
				  gotonum('Next');
				  if (sMI[nnum]!=m[i].replace(r,'$1')) get_movetext(pMI[nnum],m[i].replace(r,'$1'));
			  }
		  }
	  }
	  if (CSS) return;
	  if (ev.length==4)
	  {
		  r=new RegExp('\\[(DhtmlXQ_move_\\d+_\\d+_(\\d+))\\]\\d*\\[\\/\\1\\]','gi');
		  m=UBB.match(r).join('\n').replace(r,'0000000000$2_').replace(/0+(\d{10})_/gi,'$1').split('\n').sort();
		  p=m.length-1;
		  if (m[p]==p) i=p+1;
		  else for (i=0;i<=p;i++)	if (i!=m[i]-0) break;
		  m=pMI[nnum+1].split('_')[2]+'_'+(nnum+1)+'_'+i;
		  if (ui==0) UBB='[DhtmlXQ_move_'+m+']'+ev+'[/DhtmlXQ_move_'+m+']\r\n'+UBB;
		  else UBB+='\r\n[DhtmlXQ_move_'+m+']'+ev+'[/DhtmlXQ_move_'+m+']';
		  UpData();
		  gotonum('Next');
		  get_movetext(pMI[nnum],m);
		  if (ui==0) UpMove();
		  MoveAdd(ms);
	  }
	  else
	  {
		  VarAdd(PT,move_ev);
		  if (LiveAdmin) showalert('<span><br>\u53D1\u73B0\u7740\u6CD5\u4E0E\u539F\u7740\u6CD5\u4E0D\u540C<br>\u786E\u5B9A\uFF1D\u6309\u7167\u65B0\u7740\u6CD5\u66F4\u65B0<br>\u53D6\u6D88\uFF1D\u7EE7\u7EED\u63A8\u6F14\u4E0D\u66F4\u65B0</span>|getMove("'+PT+'")');
	  }
  }
  if (!CSS)
  {
	  p='_'+p;
	  if (p.indexOf(s2)>=0) p=p.replace(s2,'_99_').replace(s1,s2);
	  else p=p.replace(s1,s2);
	  DrawPOS(p.replace(/_/gi,''));
	  if (isSP) auto_search();
  }
}
function MoveAdd(ms)
{
  ms=fixP99(ms).match(/\d{4}/gi);
  if (ms!=null) ms=ms.join('');
  else return;
  var i,j,t='',nNUM=nnum;
  var MM=Mobile;
  var nsMI=sMI[nnum];
  var c_m=getMovelistString(ms,P[nnum],nnum+1);
  setRBE(RBT,nnum+1);
  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_move_'+nsMI+')\\](\\d*)\\[\\/\\1\\]','i'),'[$1]$2\$MOVE[/$1]').replace('$MOVE',ms);
  UpData();
  move+=ms;
  lnum=nnum+ms.length/4;
  for (i=nnum+1,j=(nnum+nnum%2)/2;i<=lnum;i++)
  {
	  sMI[i]=nsMI;
	  pMI[i]=nsMI;
	  t+=('\r\n<div id="move_'+i+'" style="'+smvtv+'" onmouseup="gotonum('+i+')" nowrap><span id="m_'+i+'_n" style="'+sMnum+'">');
	  if (i%2==1) {j++;t+=(j>=100)?(j+(MM?'':'.')):((j>=10)?((MM?'':'&nbsp;')+j+'.'):((MM?'':'&nbsp;')+'&nbsp;'+j+'.'));}
	  else t+=((MM?'':'&nbsp;')+'&nbsp;&nbsp;&nbsp;');
	  t+=('</span><span id="m_'+i+'_m">'+c_m.substr((i-1-nnum)*4,4)+'</span><span id="m_'+i+'_c">&nbsp;</span><span id="m_'+i+'_v">&nbsp;</span></div>');
  }
  MoveDIV.innerHTML+=Ch40(t);
  gotonum('Last');
  showRBE(nNUM);
}
function VarAdd(m,cm)
{
  var p=NS.IE>0&&NS.IE<=8?'padding-top:2px;':'';
  var l='line-height:'+(NS.IE>0&&NS.IE<=8?'1.2;':'1;');
  var r='<table width="100%" height="100%" cellspacing="2" cellpadding="0"><tr><td style="background-color:'+bsColor+';text-align:center;'+p+'"><a href="javascript:getMove(\''+m+'\')" style="'+sfont+l+'color:#ff0;">\u70B9\u6B64\u589E\u52A0\u53D8\u7740'+cm+'</a></td></tr><tr><td style="background-color:'+bsColor+';text-align:center;'+p+'"><a href="javascript:getMove(\''+m+'\',0)" style="'+sfont+l+'color:#ff0;">\u589E\u52A0\u65B0\u53D8\u7740\u5E76\u8BBE\u4E3A\u4E3B\u53D8</a></td></tr></table>';
  $('v_addnew').innerHTML=r;
  $('v_addnew').style.display='';
}
function auto_search()
{
  if ($P('auto_search')) eval($P('auto_search').value);
  if ($P('auto_getpos')) eval($P('auto_getpos').value);
}
function UpData()
{
  if (NoFile) self.name='NoFile_[DhtmlXQiFrame]'+UBB+'[/DhtmlXQiFrame]';
  else if (isSP&&parent.UBBS[SN5]) parent.UBBS[SN5]=UBB;
  else $P(SN5).innerHTML=UBB;
}
function gotoMI(gMI,t)
{
  gMI=gMI.split('_');
  var m=[];
  var ti,nNUM,pmi=0,r,i=0;
  if (gMI.length>1)
  {
	  r=new RegExp('\\[(DhtmlXQ_move_('+gMI[1]+'_'+gMI[2]+'_'+gMI[3]+'))\\]\\d+\\[\\/\\1\\]','i');
	  m[0]=UBB.match(r);
	  while (m[i])
	  {
		  m[i]=m[i][0].replace(r,'$2');
		  if (m[i]=='0_1_0') r='ok';
		  if (i==999||m[i].search(/(\d+)_\d+_\1$/gi)!=-1) break;
		  r=new RegExp('\\[(DhtmlXQ_move_(\\d+_\\d+_'+m[i].split('_')[0]+'))\\]\\d+\\[\\/\\1\\]','i');
		  i++;
		  m[i]=UBB.match(r);
	  }
  }
  if (sMI[nnum]!='0_1_0'&&r=='ok') // in tree
  {
	  i=100;nNUM=nnum;pmi=pMI[nNUM];m='|'+m.join('|')+'|';
	  do
	  {
		  ti=m.indexOf('|'+pmi+'|');
		  if (ti>=0)
		  {
			  gotonum(nNUM);
			  get_movetext(pmi,pmi);
			  m=(m.substring(1,ti)+'|'+pmi).split('|');
			  pmi=(101-i)+' '+pmi;
			  nNUM='_';
			  break;
		  }
		  nNUM=pmi.split('_')[1]-0;
		  pmi=pMI[nNUM];
		  i--;
	  } while (nNUM>1&&i>1)
	  if (nNUM!='_') {pmi=0;gotonum(1);get_movetext('0_1_0','0_1_0');}
  }
  if (r=='ok') for(i=m.length;i>0;i--) {gotonum(m[i-1].split('_')[1]);get_movetext(m[i],m[i-1]);}
  gotonum((gMI[0]>lnum)?lnum:gMI[0]);
  if (gMI.length==9)
  {
	  if (gMI[4]) turnBoard();
	  if (gMI[5]) mirrorBoard();
	  gMI[6]=gMI[6].replace(/\D/gi,'');
	  if (gMI[6].length>=4) {r=getMovelistString(gMI[6].substr(0,4),P[nnum]);if(r!=''){VarAdd(gMI[6].substr(0,4),r);pClick=gMI[6].match(/(\d{4})+/gi)[0];}};
	  if (gMI[8].length==64) {
		  if (gMI[7]!='') {
			  if (gMI[7].length==3) {showClick(gMI[7].substr(0,1),gMI[7].substr(2));}
			  else if (gMI[7]<32) {pCid=gMI[7];pClick+=gMI[8].substr(pCid*2,2);}
		  }
		  CSS=false;DrawPOS(gMI[8]);
	  }
  }
  if (t&&gMI[0]>0) setTimeout('M_GOTO(nnum,nnum,1)',10);
  return pmi;
}
function gotonum(num,v)
{
  canauto=false;
  var onum=nnum;
  AllowAdd=32;
  if (num=='Next') Next();
  else if (num=='Prev') Prev();
  else if (num=='Last')
  {
	  if (lnum-nnum>cnum) CSS=false;
	  while (nnum<lnum) Next();
  }
  else if (num=='First')
  {
	  num=(nnum>fnum)?fnum:0;
	  if (nnum-num>cnum) CSS=false;
	  while (nnum>num) Prev();
  }
  else if (nnum<num)
  {
	  if (num-nnum>cnum) CSS=false;
	  while (nnum<num) Next();
  }
  else if (nnum>num)
  {
	  if (nnum-num>cnum) CSS=false;
	  while (nnum>num) Prev();
  }
  M_GOTO(nnum,onum);
  if (!CSS) {CSS=true;DrawPOS(P[nnum]);pClick='';if(pCid>=0){showClick(10,9);pCid=-1;}}
  $('shownow').value=nnum+'/'+lnum;
  ShowCommentText();
  ShowVarText(v);
  canauto=true;
  if (isSP&&nnum>0) auto_search();
}
function M_GOTO(n,o,t)
{
  var mn=Mobile?3:16;
  if (n==o&&!t) return;
  $('move_'+o).style.backgroundColor='';
  $('move_'+o).style.color='';
  $('move_'+n).style.backgroundColor=bsColor;
  $('move_'+n).style.color='#FFF';
  if (o>n) {if ((Mscroll.scrollTop>(n-2)*lh)||(Mscroll.scrollTop<(n-mn)*lh)) Mscroll.scrollTop=(n-1)*lh;}
  else {if ((Mscroll.scrollTop<(n-(mn-2))*lh)||(Mscroll.scrollTop>(n-1)*lh)) Mscroll.scrollTop=(n-(mn-2))*lh;}
}
function ShowCommentText()
{
  if (isAddMove) return;
  var rbe=RBE[nnum].substr(1);
  var c=CLS(getvar('comment'+(sMI[nnum].split('_'))[2]+'_'+nnum));
  if (nnum==0&&c=='') c=CLS(getvar('other'));
  if (rbe)
  {
	  if (isJieQi&&rbe.slice(-2)=='\u4F4D\u9519') rbe='';
	  else
	  {
		  $('divrbe').innerHTML='<span style="color:#f0f">\u7B2C'+nnum+'\u7740\uFF1A'+rbe+'</span>';
		  $('divrbe').style.display='';
	  }
  }
  if (!rbe) $('divrbe').style.display='none';
  if (c=='') c=rbe;
  cText.value=c+(Mobile?'':'\n\n\n\n\n\n\n\n\n\n');
  if (LiveAdmin) sText1.value=c;
  cText.scrollTop=0;
}
function ShowVarText(ov)
{
  var MM=Mobile,o=1,n=1;
  if (nnum==0) {VarDIV.innerHTML=ads_dpxq;$('v_scroll').scrollTop=0;}
  else
  {
	  var vend=Ch40('&nbsp;&nbsp;&nbsp;<--');
	  var p=pMI[nnum].split('_');
	  var m=getvar('move_'+pMI[nnum]).substr((nnum-p[1])*4,4);
	  var t='<div id="var_'+pMI[nnum]+'" '+(SURL=='www.dpxq.com'?'':('title="'+(nnum+'_'+pMI[nnum]+' '+pMI[nnum])+'" '))+'style="'+smvtv+'" onclick="get_movetext(\''+pMI[nnum]+'\',\''+pMI[nnum]+'\')" nowrap><span id="v_'+pMI[nnum]+'_n" style="'+sMnum+'">'+(MM?'':'&nbsp;')+'&nbsp;1.</span><span id="v_'+pMI[nnum]+'_m">'+getMovelistString(m,P[nnum-1])+(MM?'':'&nbsp;')+'</span><span id="v_'+pMI[nnum]+'_c">'+havecomment(p[2],nnum)+'</span><span style="color:#fff;">'+vend+'</span></div>';
	  var mi,i;
	  var r=new RegExp('\\[(DhtmlXQ_move_('+p[2]+'_'+nnum+'_[1-9]\\d*))\\](\\d{4})\\d*\\[\\/\\1\\]','gi');
	  var s=UBB.match(r)||'';
	  for (i=1;i<=s.length;i++)
	  {
		  m=s[i-1].replace(r,'$3');
		  mi=s[i-1].replace(r,'$2');
		  t+=('\r\n<div id="var_'+mi+'" '+(SURL=='www.dpxq.com'?'':('title="'+(nnum+'_'+mi+' '+pMI[nnum])+'" '))+'style="'+smvtv+'" onclick="get_movetext(\''+pMI[nnum]+'\',\''+mi+'\')" nowrap><span id="v_'+mi+'_n" style="'+sMnum+'">');
		  if (MM) t+=((i==2&&s.length>2)?'+':(i<9?'&nbsp;':''))+(i+1)+(i<99?'.':'');
		  else t+=(i<9?'&nbsp;&nbsp;':(i<99?'&nbsp;':''))+(i+1)+'.';
		  t+=('</span><span id="v_'+mi+'_m">'+getMovelistString(m,P[nnum-1])+(MM?'':'&nbsp;')+'</span><span id="v_'+mi+'_c">'+havecomment((mi.split('_'))[2],nnum)+'</span><span style="color:#fff;">'+vend+'</span></div>');
		  if (mi==sMI[nnum]) n=i+1;
		  if (mi==ov) o=i+1;
	  }
	  if (!ov) {VarDIV.innerHTML=Ch40(t);$('v_addnew').style.display='none';}
	  var v=$('var_'+sMI[nnum]);
	  if (v==null) {$('v_scroll').scrollTop=0;return;}
	  ov=$('var_'+ov);
	  if (ov!=null)
	  {
		  ov.style.backgroundColor='';
		  ov.style.color='';
	  }
	  v.style.backgroundColor=bsColor;
	  v.style.color='#FFF';
	  var VS=$('v_scroll').scrollTop;
	  if (Mobile) {$('v_scroll').scrollTop=(n>2)?(n-2)*lh:0;}
	  else if (o>n) {if (VS>(n-2)*lh||VS<(n-3)*lh) $('v_scroll').scrollTop=(n-2)*lh;}
	  else {if (VS<(n-3)*lh||VS>(n-2)*lh) $('v_scroll').scrollTop=(n-3)*lh;}
  }
}
function fixP99(mp)
{
  return mp.replace(/(\d\d)/gi,'_$1').replace(/_9[0-8]/gi,'_99').replace(/_/gi,'');
}
function get_movetext(npMI,nsMI,up)
{
  var MM=Mobile;
  var nNUM=(nnum==0)?1:nnum;
  if (nsMI==sMI[nNUM]) return;
  var n=nsMI.split('_');
  var p=npMI.split('_');
  var m=getvar('move_'+nsMI).match(/\d{4}/gi);
  if (m==null) return;
  m=m.join('');
  if (nsMI==pMI[nNUM]) m=m.substr((nNUM-n[1])*4);
  var ovNUM=up==2?0:sMI[nNUM];
  canauto=false;
  Prev();
  move=(move.substr(0,nnum*4)+fixP99(m)).match(/\d{4}/gi).join('');
  var c_m=MoveDIV.innerHTML.match(/[^\x00-\xff]{4}/gi).join('').substr(0,nNUM*4)+getMovelistString(m,P[nnum],nnum+1);
  setRBE(RBT,nnum+1);
  var i,t='',j=parseInt(nNUM/2);
  lnum=move.length/4;
  for (i=nNUM;i<=lnum;i++)
  {
	  sMI[i]=nsMI;
	  pMI[i]=(i==nNUM)?npMI:nsMI;
	  t+=('\r\n<div id="move_'+i+'" style="'+smvtv+'" onmouseup="gotonum('+i+')" nowrap><span id="m_'+i+'_n" style="'+sMnum+'">');
	  if (i%2==1) {j++;t+=(j>=100)?(j+(MM?'':'.')):((j>=10)?((MM?'':'&nbsp;')+j+'.'):((MM?'':'&nbsp;')+'&nbsp;'+j+'.'));}
	  else t+=((MM?'':'&nbsp;')+'&nbsp;&nbsp;&nbsp;');
	  t+=('</span><span id="m_'+i+'_m">'+c_m.substr(i*4,4)+'</span><span id="m_'+i+'_c">'+havecomment(n[2],i)+'</span><span id="m_'+i+'_v">'+havevar((i==nNUM)?p[2]:n[2],i)+'</span></div>');
  }
  sMI=sMI.slice(0,lnum+1);
  pMI=pMI.slice(0,lnum+1);
  if (up!=1) MoveDIV.innerHTML=MoveDIV.innerHTML.replace(/<\/div>\s*<div/gi,'</div>\r\n<div').match(/<div.+<\/div>/gi).slice(0,nNUM).join('\r\n')+Ch40(t);
  canauto=true;
  gotonum('Next',ovNUM);
  showRBE(nNUM);
}
function havecomment(nMI,nNUM)
{
  return (UBB.search(new RegExp('\\[(DhtmlXQ_comment'+nMI+'_'+nNUM+')\\].+'+REOK+'\\[\\/\\1\\]','gi'))==-1)?Ch40('&nbsp;'):'*';
}
function havevar(nMI,nNUM)
{
  return (UBB.search(new RegExp('\\[(DhtmlXQ_move_'+nMI+'_'+nNUM+'_[1-9]\\d*)\\]\\d+\\[\\/\\1\\]','gi'))==-1)?Ch40('&nbsp;'):'m';
}
function HideMove()
{
  MoveDIV.style.visibility=(MoveDIV.style.visibility=='hidden')?'inherit':'hidden';
  $('hidemove').innerHTML=($('hidemove').innerHTML=='\u9690\u85CF')?'\u663E\u793A':'\u9690\u85CF';
}
function DP(p,z)
{
  if (z>=0&&z<=31)
  {
	  p=conv_ev((100+p).toString().substr(1)).split('');
	  $('z'+z).style.left=p[0]*qgdx+(p[0]==9?qgdx:0)+'px';
	  $('z'+z).style.top=p[1]*qgdx+'px';
  }
}
function Prev()
{
  if ((nnum>0)&&(nnum<=lnum))
  {
	  nnum--;
	  var o=move.substr(nnum*4+2,2)-0;
	  var n=move.substr(nnum*4,2)-0;
	  P90[n]=P90[o];
	  if (CSS) DP(n,P90[o]);
	  if (D400[nnum+1]!=null)
	  {
		  if (CSS) DP(o,D400[nnum+1]);
		  P90[o]=D400[nnum+1];
		  D400[nnum+1]=null;
		  cnum++;
	  }
	  else
		  P90[o]=99;
  }
}
function Next()
{
  if ((nnum>=0)&&(nnum<lnum))
  {
	  var o=move.substr(nnum*4,2)-0;
	  var n=move.substr(nnum*4+2,2)-0;
	  var p=P[nnum].match(/\d\d/gi);
	  nnum++;
	  if (P90[n]!=99)
	  {
		  D400[nnum]=P90[n];
		  if (CSS) DP(99,D400[nnum]);
		  p[D400[nnum]]=99;
		  cnum--;
	  }
	  P90[n]=P90[o];
	  p[P90[o]]=(100+n).toString().substr(1);
	  P[nnum]=p.join('');
	  if (CSS) DP(n,P90[o]);
	  P90[o]=99;
  }
}
function AutoPlay()
{
  if ($('autoplay').value=='\u81EA\u52A8')
  {
	  if (Mobile) Autotimer(1000);
	  else
	  {
		  $('autotime').style.display='';
		  setTimeout('$("autotime").style.display="none";',3000);
	  }
  }
  else
  {
	  $('autoplay').value='\u81EA\u52A8';
	  clearInterval(timer);
  }
}
function Autotimer(AutoHZ)
{
  timer=setInterval('StopPlay();',AutoHZ);
  $('autoplay').value='\u505C\u6B62';
  if (!Mobile) $('autotime').style.display='none';
}
function StopPlay()
{
  if ((nnum<lnum)&&canauto) gotonum('Next');
  else
  {
	  clearInterval(timer);
	  $('autoplay').value='\u81EA\u52A8';
  }
}
function DrawPOS(p,t)
{
  var i;
  p=conv_ev(p).split('');
  for (i=0;i<32;i++)
  {
	  $('z'+i).style.left=p[i*2]*qgdx+(p[i*2]>8?qgdx:0)+'px';
	  $('z'+i).style.top=p[i*2+1]*qgdx+'px';
  }
  if (pCid>=0) showClick(p[pCid*2]-(p[pCid*2]>8?-1:0),p[pCid*2+1]);
  if (t==1) setBinit(1);
}
function turnBoard()
{
  canauto=false;
  var t=isTurn,m=isMirror;
  isTurn=true;isMirror=false;
  $('turn_Board').style.color=(t)?'':'#f00';
  DrawPOS(getpos(1));
  isTurn=(t)?false:true;
  isMirror=m;
  t=qpzb[(isTurn?1:0)*2+(isMirror?1:0)];
  $('bside').innerHTML=t[1];
  $('rside').innerHTML=t[0];
  canauto=true;
}
function mirrorBoard()
{
  canauto=false;
  var t=isTurn,m=isMirror;
  isTurn=false;isMirror=true;
  $('mirror_Board').style.color=(m)?'':'#f00';
  DrawPOS(getpos(1));
  isMirror=(m)?false:true;
  isTurn=t;
  t=qpzb[(isTurn?1:0)*2+(isMirror?1:0)];
  $('bside').innerHTML=t[1];
  $('rside').innerHTML=t[0];
  canauto=true;
}
function ViewSource()
{
  getUBB();
  $('sourceText').style.display=($('sourceText').style.display=='none'?'':'none');
  $('showsource').value=($('showsource').value=='\u5BFC\u51FA'?'\u9690\u85CF':'\u5BFC\u51FA');
  hideSearch();
}
function ViewSearch()
{
  var s1='\u68CB\u8C31\u641C\u7D22',s2='\u9690\u85CF\u641C\u7D22',t=$('showsearch').value;
  $('zfbhb').style.display='none';
  $('zfbsq').style.display='none';
  $('zfbse').style.display='';
  $('searchText').style.display=t==s1?'':'none';
  $('showsearch').value=t==s1?s2:s1;
  hideSource();
}
function hideSearch()
{
  $('searchText').style.display='none';
  $('showsearch').value='\u68CB\u8C31\u641C\u7D22';
}
function hideSource()
{
  $('sourceText').style.display='none';
  $('showsource').value='\u5BFC\u51FA';
}
function fixScroll() {if (this.scrollTop!=0) this.scrollTop=0;}
function copycode(obj,t)
{
  var m='\u590D\u5236\u6210\u529F\uFF0C\u53EF\u7C98\u8D34\u5C40\u9762\u5230\u8F6F\u4EF6\u4E2D\uFF0C\u6216\u53D1\u8868\u68CB\u8C31\u5230\u7F51\u7AD9\u8BBA\u575B\u4E2D<br>\u975EIE\u6838\u5FC3\u6D4F\u89C8\u5668\u5982\u679C\u6CA1\u6709\u590D\u5236\u6210\u529F\u8BF7\u81EA\u5DF1\u7528\u9F20\u6807\u6216\u952E\u76D8\u590D\u5236';
  var s=obj.value.split(/\r?\n\r?\n/gi);
  s=(s.length>1)?s[1]:s[0];
  if (window.clipboardData&&NS.IE>5) window.clipboardData.setData("Text",s);
  else
  {
	  if (NS.Safari) {if ($('divs').onscroll==null) $('divs').onscroll=fixScroll;}
	  var cc=true;
	  obj.value=s;
	  try
	  {
		  obj.focus();
		  obj.select();
		  cc=document.execCommand("Copy");
		  if (cc!==false) cc=true;
	  }
	  catch(e) {cc=false;}
	  if (!cc)
	  {
		  showalert('<textarea rows="2" style="width:98%;margin-top:1px;word-wrap:break-word;resize:none;outline:none;left:1%;" id="CtrlC" value=""></textarea><br>\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u81EA\u52A8\u590D\u5236'+(wTitle==240?'<br>':'')+'\u8BF7\u9F20\u6807\u53F3\u952E\u6216\u6309Ctrl+C\u590D\u5236');
		  $('CtrlC').value=s;
		  setTimeout("if($('CtrlC')){$('CtrlC').focus();$('CtrlC').select();}",500);
		  return;
	  }
  }
  if (!t) showalert(m);
  else if (t!=1) showalert(t);
}
function getpos(t)
{
  var p=[],i,s='';
  for (i=0;i<32;i++) {p[i]=$('z'+i);p[i]=parseInt(p[i].style.left)/qgdx+''+parseInt(p[i].style.top)/qgdx;if(p[i]-90>=10)p[i]=p[i]-10+'';}
  if (t) return p.join('');
  if (isTurn) {for (i=0;i<32;i++) if (p[i]<90) p[i]=(''+(189-p[i])).substr(1);}
  return p;
}
function checkDIY()
{
  var d=parent.search_diy.document.s;
  if (!d) {showalert('\u8BF7\u5237\u65B0[<a href="javascript:parent.show(3)" style="color:#f00;">\u9AD8\u7EA7\u641C\u7D22</a>]\u9875\u4FEE\u590D\u6B64\u95EE\u9898');d=0;}
  return d;
}
function SearchP(t,r)
{
  var p=getpos().join('');
  if (Mobile) {location.href='search.asp?p='+p+t;return;}
  if (isNaN(r)) r='';
  if (isSP) {var d=checkDIY();if(d){d.e.value='';d.p.value=p+t;d.result.value=r;d.submit();}}
  else PostData('&p='+p+t+'&result='+r,'');
}
function SearchEPOS(t)
{
  var p=getpos().join('');
  if (isSP) {var d=checkDIY();if(d){d.e.value='';d.p.value=p+t;d.owner.value='u';d.submit();}}
  else PostData('&owner=u&p='+p+t,'');
}
function SearchE(r)
{
  var p=getpos(),i;
  if (isNaN(r)) r='';
  var n=[1,2,4,5,0,5,4,2,1,3,3,6,6,6,6,6,7,8,10,11,0,11,10,8,7,9,9,12,12,12,12,12];
  var t='0000000000000'.split('');
  for (i=0;i<32;i++){if (p[i]<90) t[n[i]]++;}
  t=t.join('8').substr(2);
  if (isSP) {var d=checkDIY();if(d){d.e.value=t;d.result.value=r;d.submit();}}
  else PostData('&e='+t+'&result='+r,'');
}
function SearchRB(s,r)
{
  var rb=g_rb(getvar(s))[1].replace(/ /gi,'+');
  if (isNaN(r)) r='';
  if (isSP) {var d=checkDIY();if(d){d.red.value=rb;d.black.value=rb;d.result.value=r;d.submit();}}
  else PostData('&red='+rb.replace(/\+/gi,'%2B')+'&black='+rb.replace(/\+/gi,'%2B')+'&result='+r,'');
}
function CLS(s)
{
  return s.replace(/(^\s*|\s*$)/gi,'');
}
function g_rb(rbt)
{
  var rbteam='';
  var rbname='';
  var rblevel='';
  if (rbt=='red')
  {
	  rbteam=CLS(getvar('redteam'));
	  rbname=CLS(getvar('redname'));
	  rblevel=CLS(getvar('redlevel'));
	  if (rbteam==''&&rbname==''&&rblevel=='') rbt=CLS(getvar('red'));
	  else rbt='';
  }
  else if (rbt=='black')
  {
	  rbteam=CLS(getvar('blackteam'));
	  rbname=CLS(getvar('blackname'));
	  rblevel=CLS(getvar('blacklevel'));
	  if (rbteam==''&&rbname==''&&rblevel=='') rbt=CLS(getvar('black'));
	  else rbt='';
  }
  var rbstr=rbt==''?'':rbt.replace(/(\w) (\w)/gi,'$1_hldcg_$2').split(/ +/gi);
  if (rbstr.length==3)
  {
	  rbteam=rbstr[0];
	  rbname=rbstr[1];
	  rblevel=rbstr[2].match(/\(.+\)/gi);
	  if (rblevel==null) rblevel=rbstr[2];
	  else rblevel=rblevel[0].replace(/\((.*)\)/gi,'$1');
  }
  if (rbstr.length==2)
  {
	  if (rbstr[1].search(/.+\((.*)\)/gi)!=-1)
	  {
		  rbstr[1]=rbstr[1].match(/.+\((.*)\)/gi)[0];
		  rbteam=rbstr[0];
		  rbname=rbstr[1].replace(/\((.*)\)$/gi,'');
		  rblevel=rbstr[1].replace(/.+\((.*)\)/gi,'$1');
	  }
	  else if (rbstr[1].search(/\((.*)\)/gi)!=-1)
	  {
		  rbstr[1]=rbstr[1].match(/\((.*)\)/gi)[0];
		  rbteam='';
		  rbname=rbstr[0];
		  rblevel=rbstr[1].replace(/\((.*)\)/gi,'$1');
	  }
	  else
	  {
		  rbteam=rbstr[0];
		  rbname=rbstr[1];
		  rblevel='';
	  }
  }
  if (rbstr.length==1)
  {
	  if (rbstr[0].search(/.+\((.*)\)/gi)!=-1)
	  {
		  rbstr[0]=rbstr[0].match(/.+\((.*)\)/gi)[0];
		  rbteam='';
		  rbname=rbstr[0].replace(/\((.*)\)$/gi,'');
		  rblevel=rbstr[0].replace(/.+\((.*)\)/gi,'$1');
	  }
	  else
	  {
		  rbteam='';
		  rbname=rbstr[0];
		  rblevel='';
	  }
  }
  rbname=CLS(rbname.replace(/_hldcg_/gi,' ')).replace(/\+/gi,' ');
  rbteam=CLS(rbteam.replace(/_hldcg_/gi,' ')).replace(/\+/gi,' ');
  rblevel=CLS(rblevel.replace(/_hldcg_/gi,' ')).replace(/\+/gi,' ');
  return [rbteam,rbname,rblevel];
}
function getSEARCH()
{
  var s='<div id="zfbhb" style="margin:2px;position:absolute;"></div><div id="zfbsq" style="margin:2px;position:absolute;"></div>';
  s+='<div id="zfbse" style="margin:2px;position:absolute;">';
  s+='<a href="javascript:SearchE()">\u641C\u7D22\u4E0E\u5F53\u524D\u5B50\u529B\u76F8\u540C\u5BF9\u5C40</a>\u3000<a href="javascript:SearchE(2)">\u7EA2\u80DC</a>\u3000<a href="javascript:SearchE(0)">\u9ED1\u80DC</a>\u3000<a href="javascript:SearchE(1)">\u548C\u68CB</a><br>';
  s+='<a href="javascript:SearchP(\'next\')">\u641C\u7D22\u4E0E\u5F53\u524D\u5C40\u9762\u76F8\u540C\u5BF9\u5C40</a>\u3000<a href="javascript:SearchP(\'next\',2)">\u7EA2\u80DC</a>\u3000<a href="javascript:SearchP(\'next\',0)">\u9ED1\u80DC</a>\u3000<a href="javascript:SearchP(\'next\',1)">\u548C\u68CB</a><br>';
  s+='<a href="javascript:SearchP(\'tnew\')">\u641C\u7D22\u5F53\u524D\u5C40\u9762\u7684\u53D8\u7740\u7EDF\u8BA1</a>\u3000<a href="javascript:SearchP(\'tnew\',2)">\u7EA2\u80DC</a>\u3000<a href="javascript:SearchP(\'tnew\',0)">\u9ED1\u80DC</a>\u3000<a href="javascript:SearchP(\'tnew\',1)">\u548C\u68CB</a><br>';
  s+='<a href="javascript:SearchRB(\'red\')">\u641C\u7D22\u7EA2\u65B9\u68CB\u624B\u7684\u6240\u6709\u5BF9\u5C40</a>\u3000<a href="javascript:SearchRB(\'red\',2)">\u80DC\u5C40</a>\u3000<a href="javascript:SearchRB(\'red\',0)">\u8D1F\u5C40</a>\u3000<a href="javascript:SearchRB(\'red\',1)">\u548C\u5C40</a><br>';
  s+='<a href="javascript:SearchRB(\'black\')">\u641C\u7D22\u9ED1\u65B9\u68CB\u624B\u7684\u6240\u6709\u5BF9\u5C40</a>\u3000<a href="javascript:SearchRB(\'black\',2)">\u80DC\u5C40</a>\u3000<a href="javascript:SearchRB(\'black\',0)">\u8D1F\u5C40</a>\u3000<a href="javascript:SearchRB(\'black\',1)">\u548C\u5C40</a><br>';
  s+='<a href="javascript:getFENTEXT(\'coffeecc\')">\u4E0E\u8F6F\u4EF6\u5BF9\u5F08</a>\u3000<a href="javascript:SearchEPOS(\'1009\')">\u67E5\u627E\u540C\u578B\u5C40</a>\u3000<a href="javascript:getFENTEXT(\'Paiendgame\')">\u641C\u7D22\u5F53\u524D\u6B8B\u5C40\u89E3\u6CD5</a><br>';
  s+='<div style="color:#00f;margin-bottom:12px;">\u4EE5\u4E0A\u94FE\u63A5\u5747\u53EF\u70B9\u51FB\u641C\u7D22\uFF0C\u90E8\u5206\u529F\u80FD\u4EC5\u4F1A\u5458\u53EF\u7528</div>';
  s+='\u3000\u3000\u68CB\u8C31\u4ED3\u5E93\uFF0C\u767E\u4E07\u68CB\u8C31\uFF0C\u662F<span style="color:#f00;">\u6781\u5F3A\u5927\u7684\u8C61\u68CB\u5F00<br>\u5C40\u5E93</span>\uFF0C\u53EF\u8F85\u52A9\u6162\u68CB\u5F00\u5C40\uFF0C\u7814\u7A76\u68CB\u8C31\u548C\u5BF9\u624B\u8D44\u6599<br><a href="http://www.dpxq.com/hldcg/shop/vip.htm" target="_blank" style="color:#00f;">\u767E\u4E07\u68CB\u8C31\uFF0C\u63A2\u7D22\u5E03\u5C40\u6DF1\u5C42\u53D8\u5316\uFF01\u6253\u8C31\u590D\u76D8\uFF0C\u5206<br>\u6790\u81EA\u5DF1\u5BF9\u5C40\u5F97\u5931\uFF01\u53D8\u7740\u7EDF\u8BA1\uFF0C\u5F08\u5929\u780D\u4EBA\u6700\u4F73\u5E2E<br>\u51F6\uFF01VIP\u4F1A\u5458\u6BCF\u5E74100\u5143\u62163000\u70B9\uFF0C\u5F08\u5929\u4E1C\u90AA\u8054<br>\u7CFB<span style="color:#f00;">\u7535\u8BDD13898991761 QQ:88081492 \u65FA\u65FA:hldcg</span></a>';
  s+='<br>\u52A8\u6001\u68CB\u76D8\u751F\u6210\u9875\u9762 <a href="http://www.dpxq.com/hldcg/dhtmlxq/" target="_blank" style="color:#00f;">http://dhtmlxq.dpxq.com</a><br><a href="http://www.dpxq.com/" style="color:#00f;" target="_blank">\u4E2D\u56FD\u8C61\u68CB\u68CB\u8C31\u4ED3\u5E93 - \u4E1C\u840D\u8C61\u68CB\u7F51</a> <a href="http://www.dpxq.com/hldcg/share/" style="color:#f00;" target="_blank">\u8C61\u68CB\u8C31\u5927\u5168</a></div>';
  return s;
}
function EditSave()
{
  PostData('','&isSave=yes');
}
function getANIGIF()
{
  PostData('&anigif=ok','');
}
function ViewZFB(s)
{
  var dpxq='http://'+(location.hostname=='localhost'?'localhost':'www.dpxq.com')+'/hldcg/images/';
  $('zfbse').style.display='none';
  $('zfbsq').style.display='none';
  $('zfbhb').style.display='none';
  var h=parseInt($('search_Text').style.height)-4;
  var zfb=s!=1?'zfbhb':'zfbsq';
  if ($(zfb).innerHTML.length<10) $(zfb).innerHTML='<img src="'+dpxq+zfb+'.png" style="height:'+h+'px;" />';
  $(zfb).style.display='';
  $('searchText').style.display='';
  $('showsearch').value='\u9690\u85CF\u641C\u7D22';
  hideSource();
}
function ViewMini(s)
{
  if (LiveID>0&&!isSP) {LiveShow();return;}
  if ($('showmini').value=='\u7EA2\u5305') {ViewZFB(0);return;}
  if (s!=1) {showalert('\u786E\u5B9E\u9700\u8981\u5F00\u65B0\u7A97\u53E3\u7814\u7A76\u4E48\uFF1F\u70B9\u53D6\u6D88\u53EF\u76F4\u63A5\u5728\u68CB\u76D8\u4E0A\u8D70\u68CB|ViewMini(1)');return;}
  var n='mini'+parseInt(Math.random()*1000000);
  window.open('',n,'width=506,height=376,resizable=yes,location=yes,status=yes');
  PostData('mini',n);
}
function getViewURL()
{
  var z32xy=parseInt($('z32').style.left)/qgdx+'0'+parseInt($('z32').style.top)/qgdx;
  return nnum+'_'+sMI[nnum]+((isTurn)?'_1':'_')+((isMirror)?'_1':'_')+'_'+pClick+'_'+(pCid>=0?pCid:(z32xy>='900'?'':z32xy))+((CSS)?'_':('_'+conv_ev(getpos(1))));
}
function PostData(s,f)
{
  document.DhtmlXQ_search.ubb.value=conv(get_arg());
  document.DhtmlXQ_search.s.value='?site='+location.hostname+s;
  document.DhtmlXQ_search.f.value=getViewURL()+f;
  document.DhtmlXQ_search.action=SURL+((s=='mini')?'mini.asp':'index.asp');
  document.DhtmlXQ_search.target=(s=='mini')?f:'DhtmlXQ_dpxq';
  document.DhtmlXQ_search.submit();
}
function get_arg()
{
  return ('[DhtmlXQ]\r\n[DhtmlXQ_ver]www_dpxq_com'+isBIG5+'[/DhtmlXQ_ver]\r\n[DhtmlXQ_init]500,350[/DhtmlXQ_init]\r\n[DhtmlXQ_binit]'+P[0]+'[/DhtmlXQ_binit]\r\n'+UBB.replace(/DhtmlXQ_move_0_1_0/gi,'DhtmlXQ_movelist').replace(/DhtmlXQ_comment0_/gi,'DhtmlXQ_comment').replace(new RegExp('\\[(DhtmlXQ_(refer|generator|viewtype|diy\\w+|hidemove|txttype|price|hidden|viewurl|liveadmin|livetext|ver|init|binit|zoom))\\].*'+REOK+'\\[\\/\\1\\]','gi'),'')+'\r\n[DhtmlXQ_refer]'+refer+'[/DhtmlXQ_refer]\r\n[DhtmlXQ_generator]'+getvar('generator').replace(/<[\x00-\xff][^>]*>/gi,'')+'[/DhtmlXQ_generator]\r\n[/DhtmlXQ]').replace(/[\r\n]+/gi,'\r\n').replace(/</gi,'\\'+'u003C').replace(/>/gi,'\\'+'u003E').replace(/&/gi,'\\'+'u0026').replace(/'/gi,'\\'+'u0027').replace(/"/gi,'\\'+'u0022');
}
function copyUBB()
{
  if (wTitle!=500||$('sourceText').style.display=='none') {$('copytext').value=get_arg();copycode($('copytext'));return;}
  sText.value=get_arg();
  copycode(sText);
}
function getUBB()
{
  sText.value=get_arg();
}
function getJAVA()
{
  sText.value='<applet codebase="http://www.dpxq.com/java/" width="500" height="350" code="DhtmlXQ.class" MAYSCRIPT><param name="UBB" value="'+get_arg().replace(/(\[\/?DhtmlXQ)\]/g,'$1JAVA]').replace(/[\r\n]/gi,'')+'"></param></applet>';
}
function getHTML()
{
  var ID=parseInt(Math.random()*10000);
  sText.value='<div id="dhtmlxq_'+ID+'" style="display:none;">\r\n'+get_arg().replace(/(\[\/?DhtmlXQ)\]/g,'$1HTML]')+'\r\n\u68CB\u8C31\u7531<a href="http://www.dpxq.com/hldcg/dhtmlxq/" target="_blank">http://www.dpxq.com/hldcg/dhtmlxq/</a>\u751F\u6210\r\n</div>\r\n<iframe src="/DhtmlXQ_www_dpxq_com/DhtmlXQ_www_dpxq_com'+isBIG5+'.htm" name="name_dhtmlxq_'+ID+'" id="id_dhtmlxq_'+ID+'" width="500" height="350" frameborder="0" scrolling="no"></iframe>';
}
function getIFRAME()
{
  sText.value='<iframe src="http://www.dpxq.com/DhtmlXQ_www_dpxq_com/DhtmlXQ_www_dpxq_com'+isBIG5+'.htm" frameborder="0" scrolling="no" width="500" height="350" style="width:500px;height:350px;" name="NoFile_'+get_arg().replace(/(\[\/?DhtmlXQ)\]/g,'$1iFrame]').replace(/[\r\n]/gi,'')+'"></iframe>';
}
function getFLASH(t)
{
  var s0='\u3000\u3000\u672C\u4EE3\u7801\u53EF\u5728\u652F\u6301FLASH\u7684';
  var s2='\u4E0A\u53D1\u5E03FLASH\u52A8\u6001\u68CB\u76D8';
  var s1='\r\n\u3000\u3000\u5E38\u89C1\u8C61\u68CB\u7F51\u7AD9\u90FD\u5DF2\u5B89\u88C5DhtmlXQ\u52A8\u6001\u68CB\u76D8\u663E\u793A\u652F\u6301\uFF0C\u8BF7\u60A8\u5BFC\u51FAUBB\u4EE3\u7801\u53D1\u8868\u68CB\u8C31\r\n\r\n';
  var f1='http://'+(getvar('class').search(/^[\u5BF9\u5C0D]\u5C40\u76F4\u64AD$/gi)==0?'live':'www')+'.dpxq.com/DhtmlXQ_www_dpxq_com/DhtmlXQ.swf';
  if (t==2||t==4) {sText.value=s0+(t==2?'\u817E\u8BAFQQ\u7A7A\u95F4':'\u65B0\u6D6A\u535A\u5BA2\u6216\u7F51\u6613\u535A\u5BA2')+s2+'\uFF0C\u8BF7\u4F7F\u7528\u6E90\u4EE3\u7801\u65B9\u5F0F\u53D1\u8868'+s1+'<embed src="'+f1+'" width="500" height="350" quality="high" wmode="transparent" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" FlashVars="DhtmlXQ='+get_arg().replace(/(\[\/?DhtmlXQ)\]/g,'$1FLASH]').replace(/[\r\n]/gi,'')+'" />';return;}
  var s=ViewUrl.match(/owner=[mnuw]\&id=[1-9](\d{1,8})?/gi);
  if (!s) {showalert("\u53EA\u6709\u4E1C\u840D\u68CB\u8C31\u4ED3\u5E93\u4E2D\u7684\u68CB\u8C31\u624D\u53EF\u5BFC\u51FAFLASH\u4EE3\u7801\uFF0C\u8BF7\u6CE8\u518C\u5E76\u767B\u9646\u68CB\u8C31\u4ED3\u5E93");return;}
  s=f1+'?DhtmlXQ='+s[0].substr(6).replace('&id=','')+'.swf';
  if (t==0) sText.value=s0+'\u4EFB\u610F\u7AD9\u70B9\u4F7F\u7528\r\n\u65B0\u6D6A\u535A\u5BA2\uFF0C\u641C\u72D0\u8BBA\u575B\uFF0CQQ\u7A7A\u95F4\uFF0CDVBBS\u52A8\u7F51\u3001PHPWind\u3001Discuz\u7B49\u5E38\u89C1\u8BBA\u575B\u53EF\u70B9\u51FB\u76F8\u5E94\u94FE\u63A5\u76F4\u63A5\u5BFC\u51FA\u7B26\u5408\u8981\u6C42\u7684FLASH\u4EE3\u7801'+s1+s;
  else if (t==1) sText.value=s0+'\u641C\u72D0\u8BBA\u575B'+s2+'\uFF0C\u5982\u8981\u5728\u641C\u72D0\u535A\u5BA2\u53D1\u8868\uFF0C\u8BF7\u63D0\u53D6FLASH\u5730\u5740\u5F53\u4F5C\u89C6\u9891\u6765\u53D1\u8868'+s1+'[media '+s+' width=500 height=350]';
  else if (t==3) sText.value=s0+'\u535A\u5BA2\u8BBA\u575B'+s2+'\uFF0C\u5982\u8BBA\u575B\u652F\u6301HTML\uFF0C\u4E5F\u53EF\u5BFC\u51FA[\u65B0\u6D6A]\u683C\u5F0F\u7684FLASH\u4EE3\u7801\u6765\u53D1\u8868'+s1+'[flash=500,350]'+s+'[/flash]';
}
function getTEXT(v)
{
  var i,j;
  var stype=1;
  var col=1;
  var nStart=0;
  var nsMI='0_1_0';
  var nNUM=0;
  var nP=P[nNUM];
  var pRBE=RBE.join('\n');
  var depth=0;
  var Maxdepth=999;
  var Lspace='    ';
  var Mspace='   ';
  var Rspace='';
  var Lpad=' ';
  var Rpad=' ';
  var Zhustr='';
  var Zhujie='*';
  var Bianzhao='B';
  var DelEmpty=1;
  var isTwo='';
  var Bianhao=0;
  var S='          ';
  if (v==1||v==2)
  {
	  var T=document.treetxt;
	  stype=T.stype.value-0;
	  col=T.col.value-0;
	  nStart=T.nstart.value-0;
	  if (nStart==2) {nsMI=sMI[nnum];nNUM=nsMI.split('_')[1]-1;}
	  else if (nStart==1) {nsMI=sMI[nnum];nNUM=nnum;}
	  nP=P[nNUM];
	  depth=0;
	  Maxdepth=T.maxdepth.value-0;
	  Lspace=S.substr(0,T.lspace.value-0);
	  Mspace=S.substr(0,T.mspace.value-0);
	  Rspace=S.substr(0,T.rspace.value-0);
	  Lpad=S.substr(0,T.lpad.value-0);
	  Rpad=S.substr(0,T.rpad.value-0);
	  Zhustr=S.substr(0,T.zhustr.value);
	  Zhujie=T.zhujie.value;
	  Bianzhao=T.bianzhao.value;
	  DelEmpty=T.delempty.value-0;
	  isTwo=(T.istwo.value==0)?'':'....';
	  Bianhao=(T.bianhao.value==0)?0:1;
  }
  else if (v.search(/^\d\d\d\d\d\w*$/gi)!=-1)
  {
	  v=v.split('');
	  stype=v[0]-0;
	  col=v[1]-0;
	  Lpad=S.substr(0,v[2]-0);
	  Rpad=S.substr(0,v[3]-0);
	  Mspace=S.substr(0,v[4]-0);
  }
  else v='';
  if (col<1||col>3) col=1;
  var Maxpad=[];
  Maxpad[0]='movelist'+Lpad+Zhujie+Bianzhao;
  Maxpad[col*2-1]=(Maxpad[0]+Rspace).length;
  if (col>1)
  {
	  Maxpad[col*2-2]=(Maxpad[0]+Rpad+   isTwo).length+Maxpad[col*2-1];
	  Maxpad[col*2-3]=(Maxpad[0]+Mspace+'....').length+Maxpad[col*2-2];
  }
  if (col==3)
  {
	  Maxpad[2]=(Maxpad[0]+Rpad+   isTwo).length+Maxpad[3];
	  Maxpad[1]=(Maxpad[0]+Mspace+'....').length+Maxpad[2];
  }
  Maxpad[0]=0;
  var r=getvar('redrating');r=(r==0)?'':r;
  var b=getvar('blackrating');b=(b==0)?'':b;
  var R_tnl=g_rb('red');
  var B_tnl=g_rb('black');
  var R_name=CLS((R_tnl[0]+' '+R_tnl[1]+' ('+R_tnl[2]+')').replace(/\(\s*\)/gi,''));
  var B_name=CLS((B_tnl[0]+' '+B_tnl[1]+' ('+B_tnl[2]+')').replace(/\(\s*\)/gi,''));
  var t='\u6807\u9898: '+getvar('title')+'\r\n\u5206\u7C7B: '+getvar('class')+'\r\n\u8D5B\u4E8B: '+getvar('event')+'\r\n\u8F6E\u6B21: '+getvar('round')+'\r\n\u5E03\u5C40: '+getvar('open')+'\r\n\u7EA2\u65B9: '+R_name+'\r\n\u9ED1\u65B9: '+B_name+'\r\n\u7ED3\u679C: '+getvar('result').replace('\u7EA2\u80DC','\u7EA2\u65B9\u80DC').replace('\u9ED1\u80DC','\u9ED1\u65B9\u80DC')+'\r\n\u65E5\u671F: '+getvar('date').replace(/^(\d{2,4})\-(\d?\d)\-(\d?\d)( +[\d\- \:]+)?$/gi,'$1.$2.$3$4')+'\r\n\u5730\u70B9: '+getvar('place')+'\r\n\u7EC4\u522B: '+getvar('group')+'\r\n\u53F0\u6B21: '+getvar('table')+'\r\n\u88C1\u5224: '+getvar('judge')+'\r\n\u8BB0\u5F55: '+getvar('record')+'\r\n\u8BC4\u8BBA: '+getvar('remark')+'\r\n\u4F5C\u8005: '+getvar('author')+'\r\n\u5907\u6CE8: '+getvar('other')+'\r\n';
  t=(t+'\u7ED3\u675F\u65B9\u5F0F: '+getvar('endtype')+'\r\n\u8BB0\u65F6\u89C4\u5219: '+getvar('timerule')+'\r\n\u7EA2\u65B9\u7528\u65F6: '+getvar('redtime')+'\r\n\u9ED1\u65B9\u7528\u65F6: '+getvar('blacktime')+'\r\n\u7EA2\u7B49\u7EA7\u5206: '+r+'\r\n\u9ED1\u7B49\u7EA7\u5206: '+b+'\r\n\u68CB\u5C40\u7C7B\u578B: '+getvar('type')+'\r\n\u68CB\u5C40\u6027\u8D28: '+getvar('gametype')+'\r\n\u7EA2\u65B9\u56E2\u4F53: '+R_tnl[0]+'\r\n\u7EA2\u65B9\u59D3\u540D: '+R_tnl[1]+'\r\n\u7EA2\u65B9\u7B49\u7EA7: '+R_tnl[2]+'\r\n\u9ED1\u65B9\u56E2\u4F53: '+B_tnl[0]+'\r\n\u9ED1\u65B9\u59D3\u540D: '+B_tnl[1]+'\r\n\u9ED1\u65B9\u7B49\u7EA7: '+B_tnl[2]+'\r\n\u68CB\u8C31\u4E3B\u4EBA: '+getvar('owner')+'\r\n\u68CB\u8C31\u4EF7\u503C: '+getvar('price')+'\r\n\u6D4F\u89C8\u6B21\u6570: '+getvar('hits')+'\r\n\u6765\u6E90\u7F51\u7AD9: '+unescape(getvar('refer')).split('\r')[0]).replace(/<[\x00-\xff][^>]*>/gi,'')+'\r\n \r\n';
  if (DelEmpty) t=t.replace(/[^\x00-\xff]{2,4}\: \r\n/gi,'');
  var s=' \r\n\u68CB\u8C31\u7531 http://www.dpxq.com/ \u751F\u6210';
  var f=(CP(P[nNUM])==B)?'':('\u521D\u59CB\u5C40\u9762:\r\n'+getIMGTEXT(nNUM)+' \r\n');
  if (v=='')
  {
	  var m=MoveDIV.innerHTML.replace(/<[^>]*>|\r|\n/gi,'').replace(/(&(nb|en)sp;|\u2002)/gi,' ');
	  m=(Mobile)?m.substr(9).replace(/(.{9,18})/gi,'$1\r\n'):m.substr(10).replace(/(.{10,20})/gi,'$1\r\n');
	  sText.value=(CLS(t+f)==''&&m!='')?(m+s):((t+f+m+s).replace(/^\s*/gi,''));
	  if (wTitle==500) m=m.replace(/(.*)\r\n(.*)\r\n/gi,'$1  $2\r\n');
	  sText1.value=(CLS(t+f)==''&&m!='')?(m+s):(t+f+m+s).replace(/^\s*/gi,'');
  }
  else
  {
	  tree=[];
	  tree[0]='';
	  RBES='';
	  getTree(nsMI,depth,nNUM,nP,pRBE,Maxdepth,stype,col,Lspace,Rspace,Mspace,Lpad,Rpad,Zhujie,Bianzhao,Zhustr,Maxpad,isTwo,Bianhao);
	  RBES=CLS((RBES+'\n').replace(/[rb][\r\n]+/gi,''));RBES=(RBES.length<3)?'':('\n\n\u7740\u6CD5\u9519\u8BEF\u8BF7\u68C0\u67E5\n'+RBES);
	  var tnum=tree.length;
	  tree=tree.join('');
	  var temp=tree.match(/\u3010\u53D8\{\$\d+\}\-\{\$\d+\}\-\d+\u3011/gi);
	  if (temp!=null)
	  {
		  temp=temp.join('').replace(/\u3010\u53D8\{\$(\d+)\}\-\{\$\d+\}\-\d+\u3011/gi,'|/\\\{\\\$ $1\\\}/gi').substr(1).replace(/ /gi,'').split('|');
		  for (i=0;i<temp.length;i++) tree=tree.replace(eval(temp[i]),i);
		  var result=getvar('result');
		  if (nsMI=='0_1_0') tree=tree.replace('\u3010\u53D80-0-1\u3011','\u3010\u4E3B\u53D8'+((result=='')?'':': ')+result+'\u3011');
		  else tree=tree.replace(/\u3010\u53D80\-\{\$(\d+)\}\-\d+\u3011/i,'\u3010\u526F\u56FE\u4E3B\u53D8\u3011');
		  tree=tree.replace(/.*\u7B2C [\d ]{3} (\u56DE\u5408[\u7EA2\u9ED1]|\u7740)\: \u6709\[\u53D8\{\$\d+\}\-\d+\-\d+.+\r\n/gi,'');
		  if (stype!=0&&(i<=21||(i<=100&&v==2)))
		  {
			  var bz=('\u4E3B'+unescape('606162636465666768696A6B6C6D6E6F70717273'.replace(/(..)/gi,'%u24$1'))).split('');
			  var cNumber='_+1234567890-=QWERTYUIOP{}qwertyuiop[]ASDFGHJKL:|asdfghjkl;~ZXCVBNM<>?zxcvbnm,.';
			  if (i>21) {for (j=21;j<=99;j++) {bz[j]='<span style="font-family:cNumber2">'+cNumber.substr(j-21,1)+'</span>';}}
			  if (isTwo!='') tree=tree.replace(/\u3010\u53D8(\d+)\-(\d+)\-(\d+)\u3011/gi,'\u53D8{$1}\u63A5\u53D8{$2}\u7B2C$3\u7740');
			  else tree=tree.replace(/\u3010\u53D8(\d+)\-(\d+)\-(\d+)\u3011/gi,'\u53D8{$1}\u63A5\u53D8{$2}\u7B2C$3\u56DE\u5408');
			  tree=tree.replace(/.*\u7B2C [\d ]{3} (\u56DE\u5408[\u7EA2\u9ED1]|\u7740)\: \u6709\[\u53D8\d+\-\d+\-\d+.+\r\n/gi,'');
			  for (j=0;j<i;j++) {tree=tree.replace(new RegExp('\\{'+j+'\\} ?','gi'),bz[j]);}
			  tree=tree.replace(/\u63A5\u53D8\u4E3B/gi,'\u63A5\u4E3B\u53D8');
		  }
		  else tree=tree.replace(/\{\d+(\}\{\d+)*\}/gi,Bianzhao);
		  tree=tree.replace(/\r\n(\s?\r\n)+/gi,'\r\n\r\n').replace(/\r\n\s?\r\n/gi,'\r\n \r\n');
		  result=UBB.match(/\[(DhtmlXQ_move_\d+_\d+_\d+)\]\d+\[\/\1\]/gi);
		  if (v==1) showalert('<div id="cNumDIV" style="text-align:center;">\u672C\u68CB\u8C31['+getvar('title')+']\u5171\u542B'+result.length+'\u4E2A\u53D8\u7740\uFF0C\u672C\u6B21\u5BFC\u51FA'+i+'\u4E2A['+tnum+'\u5C42]\u53D8\u7740'+((result.length>i)?('\uFF0C\u8FD8\u6709'+(result.length-i)+'\u4E2A\u53D8\u7740\u672A\u80FD\u5BFC\u51FA'):'')+'</div>'+(i>21?'<a href="javascript:void(0)" onclick="getTEXT(2)">\u70B9\u6B64\u590D\u5236\u53EF\u7C98\u8D34\u5230word\u4E2D\u7684\u5E26\u5708\u6570\u5B57\u6587\u672C\uFF0C\u7535\u8111\u89C2\u770B\u9700\u5B89\u88C5cNumber2\u5B57\u4F53</a>':''));
	  }
	  else {tree='';i=100;}
	  var c=getvar('comment0_0').replace(/(^\s*)|(\s*$)/gi,'').replace(/^\u3000*/gi,'').replace(/[\r\n]+/gi,'||').replace(/\s*\|\|\s*/gi,'||'+Zhustr).replace(/\|\|/gi,'\r\n');
	  if (c!='') c='    '+c+'\r\n';
	  r=(t+f+c+tree.replace(/    \{([rnbakcp\d]{1,9}\/){9}[rnbakcp\d]{1,9}( [rb])?\}\r\n/gi,'')+s).replace(/^\s*/gi,'')+RBES;
	  if (v!=2||i<=21)
	  {
		  sText.value=r;
		  sText1.value=r;
	  }
	  if (v==2)
	  {
		  $('cNumDIV').innerHTML='<iframe name="cNumCOPY" style="width:98%;height:'+(CSS1?32:34)+'px;border:1px solid #ccc;margin:3px auto;" frameborder="0" marginwidth="0" marginheight="0"></iframe><br><span id="cNumSPAN"></span>';
		  cNumCOPY.document.open();
		  cNumCOPY.document.writeln('<html><body style="'+FF+'white-space:pre-wrap;word-wrap:break-word;word-break:break-all;"></body></html>');
		  cNumCOPY.document.close();
		  if (NS.IE) cNumCOPY.document.body.contentEditable=true;
		  else cNumCOPY.document.designMode="on";
		  cNumCOPY.document.body.innerHTML=(USPACE?r:r.replace(/  /gi,'\u3000').replace(/\r\n /gi,'<br>&nbsp;')).replace(/\r\n/gi,'<br>');
		  cNumCOPY.focus();
		  var cc=true;
		  try
		  {
			  cc=cNumCOPY.document.execCommand("SelectAll");
			  cc=cNumCOPY.document.execCommand("copy");
		  }
		  catch(e) {cc=false;}
		  $('cNumSPAN').innerHTML=(cc?'\u590D\u5236\u6210\u529F\uFF0C\u8BF7\u7ACB\u5373\u7C98\u8D34\u5230word\u4E2D\u4FDD\u5B58':'\u975EIE\u6838\u5FC3\u6D4F\u89C8\u5668\uFF0C\u8BF7\u6309Ctrl+C\u590D\u5236');
	  }
	  if (isSP)
	  {
		  r=parent.search_end_pos.$('imgs');
		  if (r) r.innerHTML=(t+f+c+tree+s).replace(/^\s*/gi,'').replace(/  /gi,'\u3000').replace(/\r\n /gi,'<br>&nbsp;').replace(/\r\n/gi,'<br>');
	  }
  }
}
function TreeSet(t,d)
{
  var i;
  if (t==0) document.treetxt.style.display='none';
  else if (t==1) {document.treetxt.style.display='';getTEXT('');}
  else
  {
	  document.treetxt.elements[t].value=d;
	  for (i=0;i<4;i++) $(t+i).style.color='';
	  $(t+d).style.color='#00f';
  }
}
function getTree(nsMI,depth,nNUM,nP,pRBE,Maxdepth,stype,col,Lspace,Rspace,Mspace,Lpad,Rpad,Zhujie,Bianzhao,Zhustr,Maxpad,isTwo,Bianhao)
{
  if (nNUM>999||depth>=Maxdepth) return;
  var n=nsMI.split('_');
  var M=getvar('move_'+nsMI);
  if (M==''&&nsMI=='0_1_0') M=getvar('movelist');
  M=M.match(/\d{4}/gi);
  if (M==null) return;
  M=M.slice(nNUM+1-n[1]);
  var l=M.length;
  if (l==0) return;
  var rb=''+pRBE.split('\n')[nNUM];
  var c_m=getMovelistString(M.join(''),nP,nNUM+1,rb,nsMI);
  pRBE=pRBE.split('\n').slice(0,nNUM+1).join('\n')+RBT;
  RBES+=RBT;
  var nP0=nP;
  var m='';
  var c='';
  var t='';
  var tt='';
  var r='';
  var i=0;
  var k=0;
  var j=nNUM;
  var s1='';
  var s2='';
  var Maxindex=j-(j%2);
  nP='_'+nP.replace(/(\d\d)/gi,'$1_');
  if (j%2==1) {m+='\r\n'+(((isTwo=='')?(j+j%2)/2:j)+'.  ').substr(0,4)+'\u2026\u2026\u2026\u2026'+Lpad+'  ';}
  for (i=1;i<=l;i++)
  {
	  if (j%2==0) {m+='\r\n';}
	  else m+=Rpad;
	  j++;m+=(j%2==1)?(((isTwo=='')?(j+j%2)/2:j)+'.  ').substr(0,4):((isTwo=='')?'':(j+'.  ').substr(0,4));
	  m+=c_m.substr(i*4-4,4)+Lpad;
	  r=new RegExp('\\[(DhtmlXQ_move_('+n[2]+'_'+j+'_[1-9]\\d*))\\]\\d{4}\\d*\\[\\/\\1\\]','gi');
	  t=UBB.match(r);
	  if (t!=null)
	  {
		  c+=Lspace+'*\u7B2C '+('  '+((isTwo=='')?(j+j%2)/2:j)+'  ').match(/( \d |\d\d |\d\d\d)/gi)[0]+((isTwo=='')?(' \u56DE\u5408'+((j%2==0)?'\u9ED1':'\u7EA2')):(' \u7740'))+': \u6709';
		  for (k=0;k<t.length;k++)
		  {
			  t[k]=t[k].replace(r,'$2');
			  m+='{{$'+t[k].split('_')[2]+'}}';
			  c+=((k==0)?'':'\u3001')+'[\u53D8{$'+t[k].split('_')[2]+'}-{$'+n[2]+'}-'+((isTwo=='')?(t[k].split('_')[1]-0+t[k].split('_')[1]%2)/2:t[k].split('_')[1])+']';
			  if (Bianhao==0) tt+='||'+t[k]+'|'+(depth+1)+'|'+(j-1)+'|'+nP.replace(/_/gi,'');
			  else getTree(t[k],depth+1,j-1,nP.replace(/_/gi,''),pRBE,Maxdepth,stype,col,Lspace,Rspace,Mspace,Lpad,Rpad,Zhujie,Bianzhao,Zhustr,Maxpad,isTwo,Bianhao);
		  }
		  c+='\r\n';
	  }
	  else m+=' ';
	  t=getvar('comment'+n[2]+'_'+j).replace(/(^\s*)|(\s*$)/gi,'').replace(/^\u3000*/gi,'').replace(/[\r\n]+/gi,'||').replace(/\s*\|\|\s*/gi,'||'+Zhustr);
	  if (t!='')
	  {
		  if (t.search(/^[\!\uFF01][\!\?\,\.\s\u3000\uFF01\uFF1F\uFF0C\u3002]*$/gi)!=-1) m+='!';
		  else if(t.search(/^[\?\uFF1F][\?\!\,\.\s\u3000\uFF1F\uFF01\uFF0C\u3002]*$/gi)!=-1) m+='?';
		  else if (stype==2)
		  {
			  t='$$'+t+'$$';
			  if ((t.replace(/[^\x00-\xff]/gi,'xx').length-4)>Maxpad[(j-Maxindex)%(col*2)]) m+='\r\n$\r\n$\r\n$\r\n\r\n'+Zhustr+t+'\r\n\r\n';
			  else m+=' '+((j%2==0)?Mspace:Rpad)+Zhustr+t+'\r\n\r\n';
			  Maxindex=j-(j%2);
			  if (j%2==1&&i!=l) m+=(((isTwo=='')?(j+j%2)/2:j)+'.  ').substr(0,4)+'\u2026\u2026\u2026\u2026'+Lpad+'  ';
		  }
		  else if (stype==1)
		  {
			  t='$$'+t+'$$';
			  if (i==l)
			  {
				  if ((t.replace(/[^\x00-\xff]/gi,'xx').length-4)>Maxpad[(j-Maxindex)%(col*2)]) m+='\r\n$\r\n$\r\n$\r\n\r\n'+Zhustr+t+'\r\n\r\n';
				  else m+=' '+((j%2==0)?Mspace:Rpad)+Zhustr+t+'\r\n\r\n';
			  }
			  else if (j%2==0) m+='\r\n$\r\n$\r\n$\r\n\r\n'+Zhustr+t+'\r\n';
			  else
			  {
				  m+='\r\n$\r\n$\r\n$\r\n\r\n'+Zhustr+t+'\r\n\r\n';
				  m+=(((isTwo=='')?(j+j%2)/2:j)+'.  ').substr(0,4)+'\u2026\u2026\u2026\u2026'+Lpad+'  ';
			  }
			  Maxindex=j-(j%2);
		  }
		  else
		  {
			  m+=Zhujie;
			  c+=Lspace+'*\u7B2C '+('  '+((isTwo=='')?(j+j%2)/2:j)+'  ').match(/( \d |\d\d |\d\d\d)/gi)[0]+((isTwo=='')?(' \u56DE\u5408'+((j%2==0)?'\u9ED1':'\u7EA2')):(' \u7740'))+': '+t+'\r\n';
		  }
	  }
	  else m+=' ';
	  s1='_'+M[i-1].substr(0,2)+'_';
	  s2='_'+M[i-1].substr(2,2)+'_';
	  if (nP.indexOf(s2)>=0) nP=nP.replace(s2,'_99_');
	  nP=nP.replace(s1,s2);
  }
  m+='\r\n$\r\n$\r\n$\r\n';
  m=m.replace(/(&(nb|en)sp;|\u2002)/gi,' ');
  if (col==2) m=m.replace(/(.+)\r\n(.+)\r\n/gi,'$1'+Mspace+'$2\r\n');
  else if (col==3) m=m.replace(/(.+)\r\n(.+)\r\n(.+)\r\n/gi,'$1'+Mspace+'$2'+Mspace+'$3\r\n');
  m=m.replace(/\$\$/gi,'').replace(/[ \r\n]*\$[ \r\n]+\$[ \r\n]+\$\r\n/gi,'\r\n');
  if (stype==0) c=c.replace(/\|\|/gi,'\r\n');
  else m=m.replace(/\|\|/gi,'\r\n');
  if (stype>0) m=m.replace(/(\r\n)+/gi,'\r\n');
  m=m.replace(/(.+)\r\n/gi,Lspace+'$1'+Rspace+'\r\n');
  rb=rb.charAt(0);rb=rb=='b'?'r':rb=='r'?'b':rb;
  if (nsMI!='0_1_0'||(nsMI=='0_1_0'&&P[0]!=B)) m='\r\n    {'+getFENTEXT(nP0,rb).replace(/ u$/,'')+'}'+m;
  if (!tree[depth]) tree[depth]='';
  t=(Bianhao==0)?0:depth;
  tree[t]+=' \r\n\u3010\u53D8{$'+n[2]+'}-{$'+n[0]+'}-'+((isTwo=='')?(n[1]-0+n[1]%2)/2:n[1])+'\u3011'+m+((c=='')?'':'\r\n')+c;
  if (tt==''||Bianhao==1) return;
  tt=tt.split('||');
  for (k=1;k<tt.length;k++)
  {
	  t=tt[k].split('|');
	  getTree(t[0],t[1]-0,t[2]-0,t[3],pRBE,Maxdepth,stype,col,Lspace,Rspace,Mspace,Lpad,Rpad,Zhujie,Bianzhao,Zhustr,Maxpad,isTwo,Bianhao);
  }
}
function getIMGTEXT(t)
{
  var i,t3=tQZ.split(''),p=(isNaN(t)?getpos().join(''):((''+t).search(/^\d{64}$/gi)==-1?P[t]:t)).split('');
  var t1='abababab\uFF3Cb\uFF0Fbabababaabababab\uFF0Fb\uFF3Cbabababaabababababababababaabababababababababaabaaaaaaaaaaaaaaaba'.replace(/a/gi,'\u3000').replace(/b/gi,'\u2502').match(/.{19}/gi);
  t1[5]=t1[2];t1[6]=t1[2];t1[7]=t1[0];t1[8]=t1[1];t1[9]='';
  var t2=' \u250C-aaaaaaa-\u2510 fdbbb-\u203B-bbbefdbbbbbbbefdbbbbbbbefdcccccccefdaaaaaaaefdbbbbbbbefdbbbbbbbefdbbb-\u203B-bbbef \u2514-ccccccc-\u2518 f';
  t2=t2.replace(/f/gi,'xxx').replace(/a/gi,'-\u252C-').replace(/b/gi,'-\u253C-').replace(/c/gi,'-\u2534-').replace(/d/gi,' \u251C-').replace(/e/gi,'-\u2524 ').match(/(.{3})/gi);
  for(i=0;i<32;i++){if (p[i*2]<9) t2[p[i*2+1]+''+p[i*2]-0]=(i<16?'(':'[')+t3[i]+(i<16?')':']');}
  t2=t2.join('').split('xxx');
  var s='aaaaaaaa \u9ED1\u65B9aaaaaaaa \r\naaaaaaaaaaaaaaaaaaa';
  for (i=0;i<10;i++) s+='\r\n '+t2[i]+' \r\n'+t1[i];
  s+='aaaaaaaaaaaaaaaaaaa\r\naaaaaaaa \u7EA2\u65B9aaaaaaaa \r\n';
  s=s.replace(/(  |a)/gi,'\u3000').replace(/\-\-/gi,'\u2500').replace(/\u4ED5/gi,'\u58EB');
  if (t=='xqstudio') {sText.value=s;$('copytext').value=s;copycode($('copytext'),1);}
  else if (isNaN(t)) sText.value=s;
  else return s;
}
function getFENTEXT(t,rb)
{
  var i,y=(''+t).search(/^\d{64}$/gi);
  var p=(y==-1?getpos().join(''):t).split('');
  var b=((t=='Paiendgame')?'rnebkbenrccpppppRNEBKBENRCCPPPPP':'RNBAKABNRCCPPPPPrnbakabnrccppppp').split('');
  var f='          '.replace(/ /gi,'111111111/').split('');
  for (i=0;i<32;i++) if (p[i*2]<9) f[p[i*2+1]+''+p[i*2]-0]=b[i];
  f=f.join('').substr(0,99).replace(/111111111/g,'9').replace(/11111111/g,'8').replace(/1111111/g,'7').replace(/111111/g,'6').replace(/11111/g,'5').replace(/1111/g,'4').replace(/111/g,'3').replace(/11/g,'2');
  f+=' '+(rb?rb:getRB());
  if (t=='Paiendgame')
  {
	  f=f.replace(/ r$/gi,'').replace(/ b$/gi,'0').replace(/\//gi,'')+((isTurn)?':':'');
	  if (f.replace(/[^rncp]/gi,'').length>12) showalert('<br>\u60A8\u5E94\u8BE5\u5728\u53CC\u65B9\u653B\u5B50\u5C11\u4E8E4\u4E2A\u65F6\u518D\u641C\u7D22');
	  else window.open('http://lpforth.forthfreak.net/xiangqi-js/xiangqi.htm?'+f,'DPXQ_TO_PAI','');
  }
  else if (t=='coffeecc') window.open(SURL+'coffeecc.htm#'+f,'','');
  else if (y!=-1) return f;
  else
  {
	  sText.value=f;
	  if (t!=null) {$('copytext').value=f;copycode($('copytext'),1);}
  }
}
function getXQSJTEXT(t)
{
  var b=[11,12,13,14,15,9,10,1,7,0,8,2,6,3,5,4,27,28,29,30,31,25,26,17,23,16,24,18,22,19,21,20];
  var i,s='';
  var p=getpos();
  for (i=0;i<32;i++) s+=(p[b[i]]-90>=0)?'0 ':(52+16*(p[b[i]].substr(1,1)-0)+(p[b[i]].substr(0,1)-0)+' ');
  s+='+'+getRB().toUpperCase();
  sText.value=s;
  if (t!=null) {$('copytext').value=s;copycode($('copytext'),1);}
}
function getRB()
{
  var rb=(''+RBE[nnum?nnum:1]).charAt(0);
  if (nnum) return rb=='r'?'b':'r';
  return rb=='b'?'b':'r';
}
function matchXQStudio(s)
{
  var i,t,p,tmpStr='';
  if (s.search(/[^\x00-\xFF]/gi)==-1) s=ENtoCH(s);
  s=GBtoTW(s).replace(/\(\u58EB\)/gi,'(\u4ED5)').replace(/(\r|\n|<br *\/?>)+/gi,'\n').replace(/(\-|\u2002|&(nb|en)sp;)/gi,' ');
  s=s.replace(/\u250C/gi,'(\x01').replace(/\u2518/gi,'\x01)').replace(/[^\u8F66\u9A6C\u76F8\u4ED5\u5E05\u70AE\u5175\u8C61\u58EB\u5C06\u5352\x00-\xFF]/gi,'  ').replace(/\(\x01 /gi,'\n (\u3000)').replace(/ \x01\)/gi,'(\u3000) \n');
  s=s.match(/[\(\[][^\x00-\xFF][\]\)]([\(\[][^\x00-\xFF][\]\)]| {4}){8} \n( ([\(\[][^\x00-\xFF][\]\)]| {4}){9} \n){17} ([\(\[][^\x00-\xFF][\]\)]| {4}){8}[\(\[][^\x00-\xFF][\]\)]/i);
  if (s==null) return '';
  s=(' '+s[0]+' ').split('\n');
  for (i=0;i<s.length;i=i+2) tmpStr+=(s[i].substr(1,s[i].length-2).replace(/ {4}/gi,' \u3000 ')+'||\n');
  p=tQZ.split('');
  for (i=0;i<32;i++)
  {
	  p[i]=i<16?'('+p[i]+')':'['+p[i]+']';
	  t=2000+(tmpStr.indexOf(p[i]))/3+'';
	  tmpStr=tmpStr.replace(p[i],' \u3000 ');
	  p[i]=t.substr(3,1)+t.substr(2,1);
  }
  return p.join('');
}
function matchJava(s)
{
  var i,t,p=s.match(/PARAM +NAME=['"]?position['"]? +VALUE=['"]?(([a-i][0-9]|\-\-)(,|\|)){31}([a-i][0-9]|\-\-)['"]?/gi);
  if (p==null) p=s.match(/PARAM +VALUE=['"]?(([a-i][0-9]|\-\-)(,|\|)){31}([a-i][0-9]|\-\-)['"]? +NAME=['"]?position['"]?/gi);
  if (p==null) return '';
  p=p[0].toLowerCase().match(/(([a-i][0-9]|\-\-)(,|\|)){31}([a-i][0-9]|\-\-)/gi);
  p=p[0].replace(/,|\|/gi,'').replace(/\-/gi,'0').toLowerCase().split('');
  var posold='0123456789abcdefghi';
  var posnew='9876543210012345678'.split('');
  for (i=0;i<64;i++) p[i]=posnew[posold.indexOf(p[i])];
  return p.join('');
}
function matchXQSJ(s)
{
  var i,t,p=s.match(/(\d{2,3} |0 ){32}/gi);
  if (p==null) return '';
  var b=[52,68,84,100,116,132,148,164,180,196];
  for(i=1;i<=9;i++) {for(t=0;t<=9;t++) b[i*10+t]=(1000+b[t]+i).toString().substr(1);}
  b[0]='052';b[1]='068';b[2]='084';b[99]='000';
  b=' '+b.join(' ')+' ';
  p=p[0].split(' ');
  t=[9,7,11,13,15,14,12,8,10,5,6,0,1,2,3,4,25,23,27,29,31,30,28,24,26,21,22,16,17,18,19,20];
  for(i=0;i<32;i++) p[i]=(b.indexOf(' '+('000'+p[i]).replace(/.*(.{3})/gi,'$1')+' '))/4;
  for(i=0;i<32;i++) t[i]=('00'+p[t[i]]).replace(/.*(.{2})/gi,'$1');
  return t.join('');
}
function matchXQQB(s)
{
  var i,t,p=s.match(/([rnbakcp\d]{1,9}\/){9}[rnbakcp\d]{1,9}( [rb])?/gi);
  if (p==null) return '';
  p=p[0].replace(/9/g,'111111111').replace(/8/g,'11111111').replace(/7/g,'1111111').replace(/6/g,'111111').replace(/5/g,'11111').replace(/4/g,'1111').replace(/3/g,'111').replace(/2/g,'11').substr(0,99);
  var b='rnbakabnrccpppppRNBAKABNRCCPPPPP'.split('');
  for (i=0;i<=31;i++)
  {
	  t=b[i];
	  b[i]=(200+p.indexOf(b[i])+'').substr(1).split('').reverse().join('');
	  p=p.replace(t,'1');
  }
  p=b.join('').replace(/(\d{32})(\d{32})/gi,'$2$1');
  return p;
}
function getBinit(t)
{
  var p='',s,i,ty,clip=true;
  if (typeof(window.clipboardData)!='object')
  {
	  s=sText.value;
	  clip=false;
  }
  else s=window.clipboardData.getData("Text");
  if (t=='xqsj')
  {
	  ty='\u6B63\u786E\u7684\u8C61\u68CB\u4E16\u5BB6\u5C40\u9762\u4E32';
	  p=matchXQSJ(s)
	  if (p==''&&clip) p=matchXQSJ(sText.value);
  }
  else if (t=='xqstudio')
  {
	  ty='\u6B63\u786E\u7684\u8C61\u68CB\u6F14\u64AD\u5BA4\u6587\u672C\u68CB\u56FE';
	  p=matchJava(s);
	  if (p=='') p=matchXQStudio(s);
	  if (p==''&&clip)
	  {
		  s=sText.value;
		  p=matchJava(s);
		  if (p=='') p=matchXQStudio(s);
	  }
  }
  else
  {
	  ty='\u6B63\u786E\u7684\u68CB\u8F6FFEN\u5C40\u9762\u4E32';
	  p=matchXQQB(s);
	  if (p==''&&clip) p=matchXQQB(sText.value);
  }
  if (p=='') showalert('\u8BF7'+(clip?'\u4ECE\u8F6F\u4EF6\u91CC\u590D\u5236'+ty+'\uFF0C\u6216':'')+'\u5C06'+ty+'\u7C98\u8D34\u5230\u4E0A\u9762\u7684\u6587\u672C\u6846\u5185');
  else if (clip) DrawPOS(p,1);
  else showalert("\u53D1\u73B0"+ty+"\uFF0C\u70B9\u786E\u5B9A\u5BFC\u5165\u5C40\u9762|DrawPOS('"+p+"',1)");
}
function setBinit(t)
{
  if (isTurn) turnBoard();
  if (isMirror) mirrorBoard();
  if (t==1&&!Mobile) {hideSearch();hideSource();}
  else if (t==2) DrawPOS(B.replace(/./gi,'9'));
  else if (t==3) DrawPOS(B);
  UBB=UBB.replace(new RegExp('\\[DhtmlXQ_(binit|move\\w+|comment\\w+)\\].*\\[\\/DhtmlXQ_\\1\\]','gi'),'')+'\r\n[DhtmlXQ_move_0_1_0][/DhtmlXQ_move_0_1_0]\r\n[DhtmlXQ_binit]'+getpos(1)+'[/DhtmlXQ_binit]';
  UpData();
  initdata();
}
function addQizi(z)
{
  AllowAdd=32;
  var i,p=z.split('_');
  for (i=0;i<p.length;i++)
	  if (parseInt($('z'+p[i]).style.left)==qgdx*10&&parseInt($('z'+p[i]).style.top)==qgdx*9) AllowAdd=p[i];
  if (AllowAdd==32) showalert('\u68CB\u76D8\u4E0A\u4E0D\u7F3A\u5C11\u8FD9\u79CD\u68CB\u5B50');
}
function EditComment(comm)
{
  if (isAddMove) {showalert('\u76EE\u524D\u5DF2\u9000\u51FA[\u589E\u52A0\u7740\u6CD5]\u72B6\u6001');$('e_comm').innerHTML='\u4FEE\u6539\u6CE8\u89E3';isAddMove=false;ShowCommentText();return;}
  var c=comm.value.replace(/\s+$/gi,'').replace(/  /gi,'\u3000').replace(/<\/?[a-z][^>\n]*>/gi,'').replace(/\[\/?DhtmlXQ(_\w+)?\]/gi,'').replace(/\r?\n/gi,'||');
  var m,n=sMI[nnum].split('_');
  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_comment'+n[2]+'_'+nnum+')\\].*\\[\\/\\1\\]','gi'),'');
  if (c!='') UBB+='[DhtmlXQ_comment'+n[2]+'_'+nnum+']'+c+'[/DhtmlXQ_comment'+n[2]+'_'+nnum+']';
  if ($('m_'+nnum+'_c')) $('m_'+nnum+'_c').innerHTML=havecomment(n[2],nnum);
  UpData();
  LiveMovePost('comment'+nnum+'$$$'+conv(c));
  if (nnum<1) return;
  if ($('v_'+sMI[nnum]+'_c')) $('v_'+sMI[nnum]+'_c').innerHTML=havecomment(n[2],nnum);
}
function conv(s)
{
  return unescape(escape(s).replace(/%u([0-9A-F]{4})/gi,'\\u$1'));
}
function unconv(s)
{
  return unescape(escape(s).replace(/(_|%5C|%5F|%25)u([0-9A-F]{4})/gi,'%u$2'));
}
function URLEscape(s)
{
  return escape(s).replace(/\%([8-9A-F][0-9A-F])/gi,'%u00$1');
}
function getrefer()
{
  var r=getvar('refer').split('%0D%0A');
  var rer=unescape(r[0]).replace(/<\/?\w+>/gi,'');
  var rer_url=(r.length==2)?unescape(r[1]).replace(/<\/?\w+>/gi,''):'www.dpxq.com/hldcg/search';
  rer=(rer!='')?(((rer.search(/^https?\:\/\//gi)==0)?'':'http://')+rer):'http://www.dpxq.com';
  rer_url=(rer_url!='')?(((rer_url.search(/^https?\:\/\//gi)==0)?'':'http://')+rer_url):'http://www.dpxq.com/search';
  var s='<div style="position:absolute;right:0;top:0;text-align:right;width:'+(fz*19+6)+'px;"><a href="javascript:void(0)" onclick="copysurl()">\u590D\u5236\u7F51\u5740</a>'+((isSP)?' <a href="javascript:digg(1)">\u597D\u8BC4</a> <a href="javascript:digg(-1)">\u5DEE\u8BC4</a> <a href="javascript:digg(0)">\u62A5\u9519</a> <a href="javascript:gEvent()">\u8D5B\u4E8B</a> <a href="javascript:SearchP(\'tree\')">\u53D8\u7740</a> <a href="javascript:SearchP(\'next\')">\u5BF9\u5C40</a>':'')+'</div>';
  return s+'<div style="position:absolute;left:0;top:0;overflow:hidden;text-align:left;width:'+(fz*21)+'px;"><nobr><a href="javascript:void(0)" onclick="getInfo()">\u6765\u6E90\u7F51\u7AD9</a>\uFF1A<a href="'+SURL+'gourl.asp?site='+URLEscape(rer)+'&url='+URLEscape(rer)+'" style="color:#000;" target="_blank">'+rer+'</a></nobr></div><br><nobr>\u53C2\u4E0E\u8BA8\u8BBA\uFF1A<a href="'+SURL+'gourl.asp?site='+URLEscape(rer)+'&url='+URLEscape(rer_url)+'" style="color:#000;" target="_blank">'+rer_url+'</a></nobr>';
}
function gEvent() {}
function copysurl(ty)
{
  var surl='',murl='';
  if (isSP||Mobile)
  {
	  var f='';
	  if (isMirror) f='#f='+nnum+'_'+sMI[nnum]+(isTurn?'_1':'_')+'_1';
	  else if (isTurn) f='#f='+nnum+'_'+sMI[nnum]+'_1';
	  else if (sMI[nnum]!='0_1_0') f='#f='+nnum+'_'+sMI[nnum];
	  else if (nnum>0) f='#f='+nnum;
	  var s=getvar('viewurl').match(/owner=\w\&id=\d{1,9}/gi);
	  if (s==null) showalert('\u53EA\u6709\u4E1C\u840D\u68CB\u8C31\u4ED3\u5E93\u4E2D\u4FDD\u5B58\u7684\u68CB\u8C31\u624D\u53EF\u590D\u5236\u7F51\u5740');
	  else
	  {
		  surl=s[0].replace('owner=','_').replace('&id=','_')+'.html'+f;
		  murl='http://www.dpxq.com/hldcg/search/view'+surl;
		  surl=murl+'\r\nhttp://m.dpxq.com/hldcg/search/view'+surl;
	  }
  }
  else surl=unescape(refer.split('%0D%0A')[1]);
  if (surl!='')
  {
	  var t='';
	  if (getvar('title')!='') t+='\u6807\u9898: '+getvar('title')+'\r\n';
	  if (getvar('event')!='') t+='\u8D5B\u4E8B: '+getvar('event')+'\r\n';
	  if (getvar('round')!='') t+='\u8F6E\u6B21: '+getvar('round')+'\r\n';
	  if (getvar('open')!='')  t+='\u5E03\u5C40: '+getvar('open') +'\r\n';
	  ty=(ty==1)?sText:$('copytext');
	  ty.value=surl+'\r\n'+t;
	  copycode(ty,'\u5DF2\u6210\u529F\u590D\u5236\u68CB\u8C31\u7F51\u5740\u5230\u526A\u8D34\u677F\uFF0C\u53EF\u70B9\u51FB\u4EE5\u4E0B\u7F51\u5740\u67E5\u770B'+(wTitle==500?'\u6548\u679C':'')+(wTitle==240?'\uFF0C':'<br>\u975EIE\u6838\u5FC3\u6D4F\u89C8\u5668')+'\u5982\u6CA1\u6709'+(wTitle==500?'\u590D\u5236':'')+'\u6210\u529F\u8BF7\u81EA\u5DF1\u7528\u9F20\u6807\u6216\u952E\u76D8\u590D\u5236<br><a href="'+(murl?(SURL+murl.substr(33)):surl)+'" target="_blank" style="color:#00f">'+(murl?murl:surl)+'</a>');
	  ty.scrollTop=0;
  }
}
function digg(price)
{
  showalert('\u53EA\u6709\u4E1C\u840D\u68CB\u8C31\u4ED3\u5E93\u4E2D\u4FDD\u5B58\u7684\u68CB\u8C31\u624D\u53EF\u63A8\u8350');
}
function getMovelistString(m0,p0,nNUM,rb,smi)
{
  var i,rb,rbt,mt,et,rbe='',t=99,ms='';
  var p90=new Array(101).join('99').match(/99/gi);
  if (p0=='') p0=B;
  p64=fixP99(p0).match(/\d{2}/gi);
  for (i=0;i<32;i++) {p90[p64[i]-0]=(i<10?'0':'')+i;}
  if (nNUM) rbt=rb?rb:RBE[nNUM-1];
  var m=fixP99(m0).match(/\d{4}/gi);
  if (m==null) return '';
  var ml=m.length;
  for (i=0;i<ml;i++)
  {
	  mt=m[i].match(/\d\d/gi);
	  t=p90[mt[0]-0]-0;
	  if ((t>=0)&&(t<=15)) ms+=c_move(getMoveText(m[i],p90,0));//0\u7EA2
	  else if ((t>=16)&&(t<=31)) ms+=c_move(getMoveText(m[i],p90,1));//1\u9ED1
	  else {ms+='\u7740\u6CD5\u9519\u8BEF';}
	  if (nNUM) rbt=chkMove(m[i],p90,rbt.charAt(0));
	  if (t<32) p64[t]=mt[1];
	  if ((et=p90[mt[1]-0]-0)<32) p64[et]='99';
	  p90[mt[1]-0]=p90[mt[0]-0];
	  p90[mt[0]-0]='99';
	  if (nNUM)
	  {
		  if (rbt.length==1) rbt+=chkPJS(p64.join(''),rbt);
		  if (rbt.length==1&&t>=0&&t<=31) rbt+=(POK[t][mt[1]-0]=='0')?(t<16?'\u7EA2':'\u9ED1')+tQZ.charAt(t)+'\u4F4D\u9519':'';
		  if (rbt.length>1&&smi) rbt+=' \u53D8['+smi+'] \u7B2C'+(nNUM+i)+'\u7740';
		  rbe+='\n'+rbt;
	  }
  }
  if (nNUM) RBT=rbe;
  return ms;
}
function c_move(m)
{
  //var b='\u8F66\u9A6C\u76F8\u8C61\u4ED5\u58EB\u5E05\u5C06\u70AE\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u5175\u5352\u4E00\uFF11\u4E8C\uFF12\u4E09\uFF13\u56DB\uFF14\u4E94\uFF15\u516D\uFF16\u4E03\uFF17\u516B\uFF18\u4E5D\uFF19\u524D\u4E2D\u540E\u8FDB\u9000\u5E73';
  var b='\uFF32\uFF28\uFF25\uFF25\uFF21\uFF21\uFF2B\uFF2B\uFF23\u3000\u3000\u3000\u3000\u3000\u3000\u3000\uFF30\uFF30\uFF11\uFF11\uFF12\uFF12\uFF13\uFF13\uFF14\uFF14\uFF15\uFF15\uFF16\uFF16\uFF17\uFF17\uFF18\uFF18\uFF19\uFF19\uFF0B\uFF1D\uFF0D\uFF0B\uFF0D\uFF1D';
  var s='',n,x;
  for (x=0;x<4;x++) {n=m.charCodeAt(x)-49;s+=b.charAt(n);}
  return s;
}
function getMoveText(s,p,b)
{
  var tP,m,i,I=' ';
  var t=' UW| UVW| UEGW| UEGIW||| WU| WVU| WGEU| WIGEU'.split('|');
  var f='12357532199AAAAA12468642199BBBBB';
  var r='CDEFGHIJKLMNOPQRST';
  var fC=s.charAt(0)-0;
  var fR=s.charAt(1)-0;
  var tC=s.charAt(2)-0;
  var tR=s.charAt(3)-0;
  var fP=f.charAt(p[s.substr(0,2)-0]);
  if (b==0)
  {
	  m=fP+r.charAt((8-fC)*2);
	  if ((fP=='1')||(fP=='2')||(fP=='9')||(fP=='A'))
	  {
		  for (i=0;i<=9;i++) {tP=p[fC*10+i]; if ((tP<16)&&(f.charAt(tP)==fP)) I+=i;}
		  if (I.length>=3)
		  {
			  m=t[I.length-3].charAt(I.indexOf(fR));
			  if (I.length<=4&&fP=='A')
			  {
				  p=p.join('_')+'_';
				  m+=(('|0'+p.indexOf('11_')/3+'|0'+p.indexOf('12_')/3+'|0'+p.indexOf('13_')/3+'|0'+p.indexOf('14_')/3+'|0'+p.indexOf('15_')/3+'|').match(/\|\d{2,3}/gi).join('').replace(/\|\d?(\d)\d/gi,'$1').replace(new RegExp(fC,'gi'),'').search(/(\d).*\1/gi)!=-1)?(r.charAt(16-fC*2)):fP;
			  }
			  else m+=fP;
		  }
	  }
	  if (fR==tR) m+='Z'+r.charAt((8-tC)*2);
	  else if (fR>tR)	m+='X'+r.charAt(((fP>1)&&(fP<7))?((8-tC)*2):((fR-tR-1)*2+b));
	  else m+='Y'+r.charAt(((fP>1)&&(fP<7))?((8-tC)*2):((tR-fR-1)*2+b));
  }
  else
  {
	  m=fP+r.charAt(fC*2+b);
	  if ((fP=='1')||(fP=='2')||(fP=='9')||(fP=='B'))
	  {
		  for (i=0;i<=9;i++) {tP=p[fC*10+i]; if ((tP>15)&&(tP<32)&&(f.charAt(tP)==fP)) I+=i;}
		  if (I.length>=3)
		  {
			  m=t[I.length+3].charAt(I.indexOf(fR));
			  if (I.length<=4&&fP=='B')
			  {
				  p=p.join('_')+'_';
				  m+=(('|0'+p.indexOf('27_')/3+'|0'+p.indexOf('28_')/3+'|0'+p.indexOf('29_')/3+'|0'+p.indexOf('30_')/3+'|0'+p.indexOf('31_')/3+'|').match(/\|\d{2,3}/gi).join('').replace(/\|\d?(\d)\d/gi,'$1').replace(new RegExp(fC,'gi'),'').search(/(\d).*\1/gi)!=-1)?(r.charAt(fC*2+1)):fP;
			  }
			  else m+=fP;
		  }
	  }
	  if (fR==tR) m+='Z'+r.charAt(tC*2+b);
	  else if (fR>tR)	m+='Y'+r.charAt(((fP>1)&&(fP<7))?(tC*2+b):((fR-tR-1)*2+b));
	  else m+='X'+r.charAt(((fP>1)&&(fP<7))?(tC*2+b):((tR-fR-1)*2+b));
  }
  return m;
}
function LiveMain()
{
  xmlok=0;
  LiveF5Time=60;
  LiveF5Index=60;
  LiveF5Title=0;
  LiveMove='';
  LiveUpMove='';
  LiveMoveLen=0;
  AllowLive=false;
  LiveComment=new Array(999);
  LiveAdmin=getvar('liveadmin');
  LiveID=parseInt('0'+getvar('liveid').replace(/\D/gi,''),10);
  var url=location.href.search(/(live|room)=yes/gi);
  var s='\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301xmlhttp\u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248\u672C\u6D4F\u89C8\u5668';
  try {xmlok=new ActiveXObject('Msxml2.XMLHTTP');xmlok=1;}
  catch (e0) {try {xmlok=new ActiveXObject('Microsoft.XMLHTTP');xmlok=2;}
  catch (e1) {try {xmlok=new XMLHttpRequest();xmlok=3;}
  catch (e2) {xmlok=0;showalert(s);LiveAdmin=false;return;}}}
  $('livevartxt').innerHTML=Ch40('&nbsp;\u3000\u3000\u3000\u3000\u3000\u3000&nbsp;');
  $('livetimediv').innerHTML='<a href="javascript:LiveSpeed()">\u52A0\u901F\u5237\u65B0</a> <span id="livef5time">60</span> \u79D2';
  LiveF5=$('livef5time');
  if (LiveID==0) LiveAdmin=false;
  else if (LiveAdmin=='yes')
  {
	  LiveAdmin=true;
	  LiveMoveLen=lnum;
	  LiveMove=move;
	  AllowLive=true;
  }
  else
  {
	  if (!isSP&&!Mobile)
	  {
		  $('showmini').value='\u91CD\u8FDB';
		  $('showmini').style.color='#F00';
	  }
	  LiveAdmin=false;
	  AllowLive=true;
	  LiveMoveLen=lnum;
	  LiveMove=move;
	  if (isSP||url!=-1)
	  {
		  var lother=getvar('other').match(/^\d{1,3}\.\d{1,9}/gi);
		  if (lother==null) {LiveF5Time=60;LiveF5Title=0;}
		  else
		  {
			  lother=lother[0].split('.');
			  LiveF5Time=lother[0]-0;
			  LiveF5Title=lother[1]-0;
			  if (LiveF5Time<10) LiveF5Time=10;
		  }
		  LiveF5Index=LiveF5Time+Math.ceil(10*Math.random());
		  LiveAuto();
		  return;
	  }
	  LiveShow();
  }
}
function LiveShow()
{
  clearInterval(Livetime);
  clearInterval(timer);
  var u="location.href='"+SURL.replace('www','live')+"view.asp?owner=u&id="+LiveID+"&f=999&z="+(fdbs+'.00').replace(/\.(.*)\./gi,'.$1').substr(0,4)+"."+wTitle+"&live=yes&refer="+refer+"'";
  showalert('\u76F4\u64AD\u7BA1\u7406\u5458\uFF1A'+getvar('owner')+'<br><button onclick="clickYES()" style="margin-top:'+((hm-lh*3-fzt*2-fz)/2)+'px;font-size:'+(fzt+fz)+'px;line-height:'+(fzt+fz*2)+'px;height:'+(fzt*2+fz)+'px;width:'+(tWidth*0.16+fz*12)+'px;border-width:2px;">\u8FDB\u5165\u76F4\u64AD\u5BA4</button>|'+u);
}
function LiveSpeed()
{
  if (LiveF5Index<10) return;
  LiveF5Index=LiveF5Index%10+1;
}
function LiveAuto()
{
  Livetime=setInterval('AutoLiveMove()',1000);
}
function LiveHttp()
{
  var x=false;
  if (xmlok==1) x=new ActiveXObject('Msxml2.XMLHTTP');
  else if (xmlok==2) x=new ActiveXObject('Microsoft.XMLHTTP');
  else if (xmlok==3) x=new XMLHttpRequest();
  return x;
}
function getLiveMove()
{
  LiveF5Index=LiveF5Time+Math.ceil(10*Math.random());
  if (!AllowLive) return;
  var xmlhttp=LiveHttp();
  if (!xmlhttp) return;
  xmlhttp.open('GET','/hldcg/chess/live/u_'+LiveID+'_move.html?room=yes&f='+lnum+'&rand='+Math.random(),true);
  xmlhttp.onreadystatechange=function(){if ((xmlhttp.readyState==4)||(xmlhttp.readyState=='complete')) {if(xmlhttp.status==200){LiveUpMove=xmlhttp.responseText.split('$');LiveMoveGet();}else{var t=Math.ceil(10*Math.random());if(LiveF5Time<900){LiveF5Time+=t;LiveF5Index=LiveF5Time;}cText.value=xmlhttp.status+' '+t;}}}
  xmlhttp.send(null);
}
function LiveMoveGet()
{
  if (!AllowLive) return;
  var i,ltitle,livef5=LiveUpMove[0].match(/(\.\d{1,3}){2,4}\.?$/gi),OldF5=LiveF5Time;
  if (livef5!=null)
  {
	  livef5=livef5[0].split('.');
	  LiveF5Time=(livef5[1]-0<10)?10:(livef5[1]-0);
	  if (OldF5!=LiveF5Time) LiveF5Index=LiveF5Time+Math.ceil(10*Math.random());
	  livef5[1]='';ltitle=livef5.join('')-0;
	  if (ltitle>LiveF5Title) {LiveF5Title=ltitle;$('div1').innerHTML='<a href="javascript:LiveShow()">\u6807\u9898\u6216\u7ED3\u679C\u6709\u66F4\u65B0\uFF0C\u8BF7\u70B9\u6B64\u91CD\u8FDB\u76F4\u64AD\u5BA4</a>';}
  }
  for (i=1;i<LiveUpMove.length;i=i+2) LiveComment[LiveUpMove[i]-0]=LiveUpMove[i+1];
  LiveUpMove[0]=LiveUpMove[0].match(/\d{4}/gi);
  if (LiveUpMove[0]==null)
  {
	  LiveMoveLen=0;
	  LiveMove='';
	  return;
  }
  i=0;
  while (LiveMove.substr(i*4,4)==LiveUpMove[0][i]) i++;
  if (i<LiveMoveLen)
  {
	  LiveMoveLen=i;
	  LiveMove=LiveUpMove[0].slice(0,i).join('');
  }
  else
  {
	  LiveMoveLen=LiveUpMove[0].length;
	  LiveMove=LiveUpMove[0].join('');
  }
}
function AutoLiveMove()
{
  LiveF5Index--;
  if (LiveF5Index<=0) getLiveMove();
  LiveF5.innerHTML=(LiveF5Index<10)?('0'+LiveF5Index):LiveF5Index;
  if (typeof(LiveComment[nnum])!='undefined')
  {
	  cText.value=unconv(LiveComment[nnum]).replace(/\|\|/gi,'\r\n');
	  sText1.value=cText.value;
  }
  if ((AllowLive)&&(nnum==lnum))
  {
	  if (LiveMoveLen>lnum) getMove(LiveMove.substr(nnum*4,4));
	  else if (LiveMoveLen<lnum) DelMove(LiveMoveLen);
  }
}
function LiveMovePost(s)
{
  if (LiveAdmin&&(nnum==lnum||s.substr(0,7)=='comment'))
  {
	  AllowLive=false;
	  LiveMoveLen=lnum;
	  LiveMove=move;
	  cText.value='\u6B63\u5728\u66F4\u65B0';
	  sText1.value=cText.value;
	  var postdata='id='+LiveID+'&s='+s;
	  var xmlhttp=LiveHttp();
	  if (!xmlhttp) return;
	  xmlhttp.open('POST','/hldcg/search/livepost.asp',true);
	  xmlhttp.onreadystatechange=function(){if ((xmlhttp.readyState==4)||(xmlhttp.readyState=='complete')){if(xmlhttp.status==200){var g=unconv(xmlhttp.responseText);if(g=='\u66F4\u65B0\u6210\u529F'){cText.value=g;}else{showalert(g);ShowCommentText();}sText1.value=cText.value;AllowLive=true;}}}
	  xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	  xmlhttp.send(postdata);
	  AllowLive=true;
  }
}
function UpMove()
{
  var v=VarDIV.innerHTML.replace(/<\/div>\s*<div/gi,'</div>\r\n<div');
  var r=new RegExp('<div.+var_(\\d+_\\d+_\\d+).+>.*(\\d{1,3})\\.?<\\/span>','gi');
  var s=v.match(r);
  var i,m=[];
  var l=(s==null)?0:(s.length);
  if (l<=1) return;
  for(i=0;i<l;i++)
  {
	  m[i]=s[i].replace(r,'$1');
	  if (sMI[nnum]==m[i]) break;
  }
  if (i==0) showalert('\u4E3B\u7740\u6CD5\u4E0D\u80FD\u63D0\u5347');
  else if (i==l) ;
  else if (i==1)
  {
	  s=getvar('move_'+m[0]);
	  m[0]=m[0].split('_');
	  m[2]=s.substr(0,(nnum-m[0][1])*4);
	  m[3]=s.substr((nnum-m[0][1])*4);
	  s=getvar('move_'+m[1]);
	  m[1]=m[1].split('_');
	  m[2]+=''+s;
	  r=new RegExp('\\[(DhtmlXQ_move_'+m[1][2]+'_\\d+_(\\d+))\\]\\d*\\[\\/\\1\\]','gi');
	  m[4]=UBB.match(r);
	  if (m[4]==null) m[4]='';
	  else
	  {
		  UBB=UBB.replace(r,'');
		  m[4]=eval('m[4].join("\\r\\n").replace(/DhtmlXQ_move_'+m[1][2]+'/gi,"DhtmlXQ_move_'+m[0][2]+'")');
	  }
	  UBB=eval('UBB.replace(/\\[(DhtmlXQ_comment'+m[1][2]+'(_\\d+))\\](.*'+REOK+')\\[\\/\\1\\]/gi,"[DhtmlXQ_comment\\t$2]$3[/DhtmlXQ_comment\\t$2]")');
	  l=parseInt(m[3].length/4);
	  for (i=0;i<l;i++)
	  {
		  if (i>0) UBB=eval('UBB.replace(/\\[(DhtmlXQ_move_'+m[0][2]+'(_'+(nnum+i)+'_\\d+))\\](\\d*)\\[\\/\\1\\]/gi,"[DhtmlXQ_move_'+m[1][2]+'$2]$3[/DhtmlXQ_move_'+m[1][2]+'$2]")');
		  UBB=eval('UBB.replace(/\\[(DhtmlXQ_comment'+m[0][2]+'(_'+(nnum+i)+'))\\](.*'+REOK+')\\[\\/\\1\\]/gi,"[DhtmlXQ_comment'+m[1][2]+'$2]$3[/DhtmlXQ_comment'+m[1][2]+'$2]")');
	  }
	  UBB=eval('UBB.replace(/\\[(DhtmlXQ_comment\\t(_\\d+))\\](.*'+REOK+')\\[\\/\\1\\]/gi,"[DhtmlXQ_comment'+m[0][2]+'$2]$3[/DhtmlXQ_comment'+m[0][2]+'$2]")');
	  m[0]=m[0].join('_');m[1]=m[1].join('_');
	  for (i=nnum;sMI[i]==m[1];i++) {sMI[i]=m[0];pMI[i]=m[0];}
	  if (pMI[i]==m[1])
	  {
		  m[6]=sMI[i];m[7]=sMI[i].replace(m[1].split('_')[2]+'_',m[0].split('_')[2]+'_');
		  pMI[i]=m[0];sMI[i]=m[7];
		  for (i++;(sMI[i]==m[6]);i++) {sMI[i]=m[7];pMI[i]=m[7];}
		  if (pMI[i]==m[6]) pMI[i]=m[7];
	  }
	  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_move_'+m[0]+')\\]\\d*\\[\\/\\1\\]','gi'),'[$1]\t[/$1]').replace('\t',m[2]);
	  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_move_'+m[1]+')\\]\\d*\\[\\/\\1\\]','gi'),'[$1]\t[/$1]').replace('\t',m[3]);
	  UBB=UBB+m[4];
	  UpData();
	  ShowVarText();
  }
  else
  {
	  s=getvar('move_'+m[i]);
	  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_move_'+m[i]+')\\](\\d*)\\[\\/\\1\\]','gi'),'').replace(new RegExp('\\[(DhtmlXQ_move_'+m[i-1]+')\\](\\d*)\\[\\/\\1\\]','gi'),'\t[$1]$2[/$1]').replace('\t','[DhtmlXQ_move_'+m[i]+']'+s+'[/DhtmlXQ_move_'+m[i]+']');
	  UpData();
	  ShowVarText();
  }
}
function DownMove()
{
  var v=VarDIV.innerHTML.replace(/<\/div>\s*<div/gi,'</div>\r\n<div');
  var r=new RegExp('<div.+var_(\\d+_\\d+_\\d+).+>.*(\\d{1,3})\\.?<\\/span>','gi');
  var s=v.match(r);
  var i,m=[];
  var l=(s==null)?0:(s.length);
  if (l<=1) return;
  for(i=l-1;i>=0;i--)
  {
	  m[i]=s[i].replace(r,'$1');
	  if (sMI[nnum]==m[i]) break;
  }
  if (i==-l) ;
  else if (i==l-1) showalert('\u6700\u540E\u4E00\u4E2A\u53D8\u7740\u4E0D\u80FD\u964D\u4F4E');
  else if (i==0)
  {
	  m[1]=s[1].replace(r,'$1');
	  get_movetext(m[0],m[1],1);
	  UpMove();
	  get_movetext(m[0],m[1],1);
  }
  else
  {
	  s=getvar('move_'+m[i]);
	  UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_move_'+m[i]+')\\](\\d*)\\[\\/\\1\\]','gi'),'').replace(new RegExp('\\[(DhtmlXQ_move_'+m[i+1]+')\\](\\d*)\\[\\/\\1\\]','gi'),'[$1]$2[/$1]\t').replace('\t','[DhtmlXQ_move_'+m[i]+']'+s+'[/DhtmlXQ_move_'+m[i]+']');
	  UpData();
	  ShowVarText();
  }
}
function DelMove(num)
{
  if (isNaN(num))
  {
	  if (nnum==lnum&&sMI[nnum]==pMI[nnum]) num=lnum-1;
	  else {showalert('\u771F\u7684\u8981\u5220\u9664'+((sMI[nnum]==pMI[nnum])?'\u5230\u6B64\u5C40\u9762':'\u6B64\u53D8\u7740\u5206\u652F')+'\u4E48|DelMove('+nnum+')');return;}
  }
  num=(num==lnum)?(num-1):num;
  if (num<0||num>lnum) return;
  var i,r,MI;
  AllowLive=false;
  canauto=false;
  if (sMI[nnum]!=pMI[nnum])
  {
	  DelTree(sMI[nnum]);
	  get_movetext(pMI[nnum],pMI[nnum],2);
	  UpData();
  }
  else if (MoveDIV.innerHTML.replace('move_'+(num+1),'|').split('|')[1].search(/m<\/span><\/div>/gi)!=-1)
	  setTimeout('del0()',100);
  else
  {
	  gotonum(num);
	  r=sMI[nnum].split('_')[2];
	  for (i=num+1;i<=lnum;i++) UBB=UBB.replace(new RegExp('\\[(DhtmlXQ_comment'+r+'_'+i+')\\](.*)\\[\\/\\1\\]','gi'),'');
	  lnum=nnum;
	  move=move.substr(0,nnum*4);
	  $('shownow').value=nnum+'/'+lnum;
	  MoveDIV.innerHTML=MoveDIV.innerHTML.replace(/<\/div>\s*<div/gi,'</div>\r\n<div').match(/<div.+<\/div>/gi).slice(0,nnum+1).join('\r\n');
	  sMI=sMI.slice(0,nnum+1);
	  pMI=pMI.slice(0,nnum+1);
	  r=new RegExp('\\[(DhtmlXQ_move_'+sMI[nnum]+')\\](\\d*)\\[\\/\\1\\]','gi');
	  MI=getvar('move_'+sMI[nnum]).substr(0,(nnum-(sMI[nnum].split('_')[1]-1))*4);
	  if (MI==''&&sMI[nnum]!='0_1_0') UBB=UBB.replace(r,'');
	  else UBB=UBB.replace(r,'[$1]\$MOVE[/$1]').replace('$MOVE',MI);
	  UpData();
	  LiveMovePost('move$$$'+move);
  }
  AllowLive=true;
  canauto=true;
}
function del0()
{
  showalert('\u6B64\u53D8\u662F\u4E3B\u7740\u6CD5\uFF0C\u8BF7\u5148\u5220\u9664\u672C\u6B65\u4E4B\u540E\u7684\u9644\u5C5E\u53D8\u7740');
}
function DelTree(nMI)
{
  var r=new RegExp('\\[DhtmlXQ_move_('+(nMI.split('_'))[2]+'_\\d+_[1-9]\\d*)\\]\\d*\\[\\/DhtmlXQ_move_\\1\\]','gi');
  var i,MI=UBB.match(r);
  if (MI!=null) for (i=0;i<MI.length;i++) DelTree(MI[i].replace(r,'$1'));
  r=new RegExp('\\[(DhtmlXQ_move_'+nMI+'|DhtmlXQ_comment'+nMI.split('_')[2]+'_\\d+)\\]\\d*\\[\\/\\1\\]','gi');
  UBB=UBB.replace(r,'');
}
function ENtoCH(s)
{
  s=s.replace(/(\xB3\xB5|\xDC\x87|\xA8\xAE)/gi,'\u8F66').replace(/(\xC2\xED|\xF1\x52|\xB0\xA8)/gi,'\u9A6C').replace(/(\xCF\xE0|\xAC\xDB)/gi,'\u76F8').replace(/(\xCA\xCB|\xA5\x4B)/gi,'\u4ED5').replace(/(\xCB\xA7|\x8E\x9B|\xAB\xD3)/gi,'\u5E05').replace(/(\xC5\xDA|\xAC\xB6)/gi,'\u70AE').replace(/(\xB1\xF8|\xA7\x4C)/gi,'\u5175').replace(/(\xCF\xF3|\xB6\x48)/gi,'\u8C61').replace(/(\xCA\xBF|\xA4\x68)/gi,'\u58EB').replace(/(\xBD\xAB|\x8C\xA2|\xB1\x4E)/gi,'\u5C06').replace(/(\xD7\xE4|\xA8\xF2)/gi,'\u5352');
  s=s.replace(/(\xD2\xBB|\xA4\x40)/gi,'\u4E00').replace(/(\xA3\xB1|\xA2\xB0)/gi,'\uFF11').replace(/(\xB6\xFE|\xA4\x47)/gi,'\u4E8C').replace(/(\xA3\xB2|\xA2\xB1)/gi,'\uFF12').replace(/(\xC8\xFD|\xA4\x54)/gi,'\u4E09').replace(/(\xA3\xB3|\xA2\xB2)/gi,'\uFF13').replace(/(\xCB\xC4|\xA5\x7C)/gi,'\u56DB').replace(/(\xA3\xB4|\xA2\xB3)/gi,'\uFF14').replace(/(\xCE\xE5|\xA4\xAD)/gi,'\u4E94').replace(/(\xA3\xB5|\xA2\xB4)/gi,'\uFF15').replace(/(\xC1\xF9|\xA4\xBB)/gi,'\u516D').replace(/(\xA3\xB6|\xA2\xB5)/gi,'\uFF16').replace(/(\xC6\xDF|\xA4\x43)/gi,'\u4E03').replace(/(\xA3\xB7|\xA2\xB6)/gi,'\uFF17').replace(/(\xB0\xCB|\xA4\x4B)/gi,'\u516B').replace(/(\xA3\xB8|\xA2\xB7)/gi,'\uFF18').replace(/(\xBE\xC5|\xA4\x45)/gi,'\u4E5D').replace(/(\xA3\xB9|\xA2\xB8)/gi,'\uFF19');
  s=s.replace(/(\xC7\xB0|\xAB\x65)/gi,'\u524D').replace(/(\xD6\xD0|\xA4\xA4)/gi,'\u4E2D').replace(/(\xBA\xF3|\xAB\xE1|\xA6\x5A|\xE1\xE1)/gi,'\u540E').replace(/(\xBD\xF8|\xB6\x69|\xDF\x4D)/gi,'\u8FDB').replace(/(\xCD\xCB|\xB0\x68)/gi,'\u9000').replace(/(\xC6\xBD|\xA5\xAD)/gi,'\u5E73');
  s=s.replace(/\x81\xBC/gi,'\u4F21').replace(/\xED\xBA/gi,'\u7817').replace(/\x82\x65/gi,'\u4FE5').replace(/(\xB3\x8C|\xDA\xCF)/gi,'\u7868').replace(/(\x82\xD8|\xD8\x58)/gi,'\u508C').replace(/(\xB0\xFC|\xA5\x5D)/gi,'\u5305').replace(/(\xB3\x68|\xAF\xA5)/gi,'\u7832').replace(/(\xA9\xB0|\xA2\x7A)/gi,'\u250C').replace(/(\xA9\xBC|\xA2\x7D)/gi,'\u2518');
  return s;
}
function GBtoTW(s)
{
  return s.replace(/[\u8ECA\u4F21\u7817\u4FE5\u7868]/gi,'\u8F66').replace(/[\u99AC\u508C]/gi,'\u9A6C').replace(/\u5E25/gi,'\u5E05').replace(/\u5C07/gi,'\u5C06').replace(/\u5F8C/gi,'\u540E').replace(/\u9032/gi,'\u8FDB').replace(/[\u5305\u7832]/gi,'\u70AE');
}
function TXTtoDhtmlXQ(obj)
{
  var str=obj.value;
  var i=str.match(new RegExp('\\[(DhtmlXQ_\\w+)\\].+'+REOK+'\\[\\/\\1\\]','gi'));
  if (i!=null) {UBB=unconv(i.join('\n'));initdata();return;}
  var j,msg,s0='',ms='',n=nnum,s1='<--';
  var s2='\u4ECE\u6CE8\u89E3\u4E2D\u63D0\u53D6\u7684\u7740\u6CD5\u5982\u4E0B\uFF0C\u6B64\u65F6\u53EF\u4EE5\u6839\u636E\u9700\u8981\u4FEE\u6539\u7740\u6CD5\uFF0C\u7136\u540E\u518D\u6B21\u70B9\u51FB[\u6DFB\u52A0\u7740\u6CD5]\u94FE\u63A5\uFF0C\u5C06\u81EA\u52A8\u6DFB\u52A0\u7BAD\u5934\u4E4B\u540E\u7684\u4E2D\u6587\u7740\u6CD5\u5230\u68CB\u8C31\u4E2D';
  if (isAddMove) {s0=str.split(s1);s2=s0[0];if (s0.length>1) str=s0[1];}
  else $('e_comm').innerHTML='\u8FD4\u56DE\u5E38\u6001';
  if (str.search(/[^\x00-\xFF]/gi)==-1) str=ENtoCH(str);
  var tStr='RNBAKABNRCCPPPPPrnbakabnrccppppp'.split('');
  for(i=0;i<10;i++) {BPos[i]='          '.split('');}
  for(i=0;i<32;i++) {BPos[P[nnum].substr(i*2,1)-0][P[nnum].substr(i*2+1,1)-0]=tStr[i];}
  var z=unescape('u4E00uFF11u4E8CuFF12u4E09uFF13u56DBuFF14u4E94uFF15u516DuFF16u4E03uFF17u516BuFF18u4E5DuFF191-9 u8F66u9A6Cu70AEu76F8u8C61u4ED5u58EBu8ECAu99ACu4F21u7817u4FE5u7868u508Cu5305u7832 u5E05u5C06u5E25u5C07 u5175u5352 u524Du540Eu5F8C u4E2D u4E00u4E8Cu4E09u56DBu4E94 u8FDBu9000u5E73u9032'.replace(/u/gi,'%u')).split(' ');
  var r=new RegExp('(['+z[5]+z[4]+']['+z[3]+']['+z[0]+']?|['+z[5]+z[4]+']['+z[0]+']|['+z[4]+']['+z[1]+']|['+z[2]+z[3]+z[1]+']['+z[0]+']|['+z[6]+']['+z[3]+'])['+z[7]+']['+z[0]+']','ig');
  var m=str.match(r);
  if (m==null)
  {
	  showalert('\u7BAD\u5934[<--]\u4E4B\u540E\u65E0\u6709\u6548\u4E2D\u6587\u7740\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u7C98\u8D34\u65B0\u4E2D\u6587\u7740\u6CD5\u540E\u518D\u70B9\u51FB[\u6DFB\u52A0\u7740\u6CD5]\u94FE\u63A5\u6216\u70B9\u51FB[\u8FD4\u56DE\u5E38\u6001]\u94FE\u63A5\u8FD4\u56DE\u6B63\u5E38\u72B6\u6001');
	  obj.value=s2+s1+'\r\n';isAddMove=true;
  }
  else
  {
	  obj.value=s2+s1+'\r\n'+m.join('\r\n');
	  if (!isAddMove) {isAddMove=true;return;}
	  for(i=0,j=0;i<m.length;i++)
	  {
		  msg=get_MS(m[i],(n+i)%2*2-1);
		  if (msg.length==4)
		  {
			  if (j==1) ms+=msg;
			  else if (msg==move.substr(nnum*4,4)) {gotonum('Next');if(nnum==lnum) j=1;}
			  else {getMove(msg);if(nnum==lnum) j=1;}
		  }
		  else {showalert(((msg==0)?('\u6B64\u6B65\u68CB['+m[i]+']\u4E0D\u7B26\u5408\u884C\u68CB\u89C4\u5219'):msg)+'<br>\u6B64\u65F6\u60A8\u4E5F\u53EF\u4EE5\u624B\u52A8\u8D70\u68CB\uFF0C\u5220\u6389\u9519\u8BEF\u7740\u6CD5\u518D\u7EE7\u7EED');break;}
	  }
	  if (i>0) obj.value=s2+'\r\n'+m.slice(0,i).join('\r\n')+s1+'\r\n'+m.slice(i).join('\r\n');
	  MoveAdd(ms);
  }
}
function get_MS(str,rb){
  var rb1=(rb==1)?-1:9;
  var s19='\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19\u4E5D\u516B\u4E03\u516D\u4E94\u56DB\u4E09\u4E8C\u4E00';
  str=unescape(GBtoTW(str).replace(/([1-9])/gi,'%uFF1$1'));
  if('\u524D\u4E2D\u540E'.indexOf(str.charAt(0))>-1&&'\u5175\u5352'.indexOf(str.charAt(1))>-1&&s19.indexOf(str.charAt(2))>-1) str=str.substr(0,1)+str.substr(2);
  var i,j='',k='',pos='',col='',row='',man='',reg='',fcol='',frow='',tcol='',trow='';
  if('\u524D\u4E2D\u540E\u4E00\u4E8C\u4E09\u56DB\u4E94'.indexOf(str.charAt(0))>-1&&'\u5175\u5352'.indexOf(str.charAt(1))>-1)
  {
	  man=(rb==1)?'p':'P';
	  for (i=0;i<9;i++) {if (BPos[i].join('').split(man).length>2) j+=i;}
	  if (j.length==0) return ('\u6CA1\u6709\u4EFB\u4F55\u5217'+((rb==1)?'\u9ED1\u5352':'\u7EA2\u5175')+'\u8FBE\u52302\u4E2A');
	  else if (j.length>=2)
	  {
		  if (j.length==2&&'\u4E00\u4E8C\u4E09\u56DB\u4E94'.indexOf(str.charAt(0))>-1)
		  {
			  var t=str.substr(0,1);
			  j=j.split('');
			  if (rb==-1) j=[j[1],j[0]];
			  col=[s19.charAt(j[0]-(rb==1?0:-9)),s19.charAt(j[1]-(rb==1?0:-9))];
			  var l=BPos[j[0]].join('').split(man).length;
			  if (l>4) return '\u5175\u5352\u6570\u4E0D\u5E94\u8D85\u8FC75\u4E2A';
			  if (l==4)
			  {
				  str=((t=='\u4E00'||t=='\u56DB')?'\u524D':(t=='\u4E8C'?'\u4E2D':'\u540E'))+(t=='\u56DB'||t=='\u4E94'?col[1]:col[0])+str.substr(2);
			  }
			  else
			  {
				  if (t=='\u4E00'||t=='\u4E8C') str=(t=='\u4E00'?'\u524D':'\u540E')+col[0]+str.substr(2);
				  else if (t=='\u4E09') str='\u524D'+col[1]+str.substr(2);
				  else
				  {
					  l=BPos[j[1]].join('').split(man).length;
					  if (l>4) return '\u5175\u5352\u6570\u4E0D\u5E94\u8D85\u8FC75\u4E2A';
					  if (l==4) str=((t=='\u4E09')?'\u524D':(t=='\u56DB'?'\u4E2D':'\u540E'))+col[1]+str.substr(2);
					  else if (t=='\u56DB') str='\u540E'+col[1]+str.substr(2);
					  else return '\u6B64\u6B65\u68CB['+str+']\u4E0D\u7B26\u5408\u8BB0\u8C31\u89C4\u5219';
				  }
			  }
			  j='duobing=2lie';
			  col='';
		  }
		  else return ('\u542B\u6709'+((rb==1)?'\u9ED1\u5352':'\u7EA2\u5175')+'\u81F3\u5C112\u4E2A\u7684\u7EB5\u5217\u6709'+j.length+'\u5217');
	  }
	  else
	  {
		  col=j;
		  j=BPos[col].join('').split(man);
	  }
	  if (j.length<=4)
	  {
		  if ((str.charAt(0)=='\u524D'&&rb==-1)||(str.charAt(0)=='\u540E'&&rb==1)) row=j[0].length;
		  else if ((str.charAt(0)=='\u524D'&&rb==1)||(str.charAt(0)=='\u540E'&&rb==-1)) row=9-j[j.length-1].length;
		  else if (str.charAt(0)=='\u4E2D'&&j.length==4) row=j[0].length+1+j[1].length;
		  else return 0;
	  }
	  else if (j.length==5)
	  {
		  if (str.charAt(0)=='\u4E2D'||str.charAt(0)=='\u4E94') return 0;
		  str=str.replace('\u524D','\u4E00').replace('\u540E','\u56DB');
		  k=change_cols(str.charAt(0));
		  if (rb==-1) row=j.slice(0,k).join(' ').length;
		  else if (rb==1) row=j.slice(0,5-k).join(' ').length;
	  }
	  else if (j.length==6)
	  {
		  str=str.replace('\u524D','\u4E00').replace('\u4E2D','\u4E09').replace('\u540E','\u4E94');
		  k=change_cols(str.charAt(0));
		  if (rb==-1) row=j.slice(0,k).join(' ').length;
		  else if (rb==1) row=j.slice(0,6-k).join(' ').length;
	  }
  }
  if ((row+'a')!='a') ;
  else if('\u524D\u4E2D\u540E'.indexOf(str.charAt(0))>-1&&s19.indexOf(str.charAt(1))>-1)
  {
	  j='';
	  man=(rb==1)?'p':'P';
	  col=rb1+rb*change_cols(str.charAt(1));
	  for (i=0;i<9;i++) {if (BPos[i].join('').search(new RegExp('.*'+man+'.*'+man+'.*','g'))!=-1) j+=i;}
	  if (j.length==2&&j.indexOf(col)>=0)
	  {
		  j=BPos[col].join('').split(man);
		  if ((str.charAt(0)=='\u524D'&&rb==-1)||(str.charAt(0)=='\u540E'&&rb==1)) row=j[0].length;
		  else if ((str.charAt(0)=='\u524D'&&rb==1)||(str.charAt(0)=='\u540E'&&rb==-1)) row=9-j[j.length-1].length;
		  else if (str.charAt(0)=='\u4E2D'&&j.length==4) row=j[0].length+1+j[1].length;
		  else return ('\u7B2C'+str.charAt(1)+'\u5217'+((rb==1)?'\u9ED1\u5352':'\u7EA2\u5175')+'\u6CA1\u6709\u8FBE\u52303\u4E2A');
	  }
	  else return ('\u6CA1\u6709\u53CC\u5217'+((rb==1)?'\u9ED1\u5352':'\u7EA2\u5175')+'\u8FBE\u52302\u4E2A');
  }
  else if('\u524D\u540E'.indexOf(str.charAt(0))>-1&&'\u8F66\u9A6C\u70AE\u76F8\u8C61\u4ED5\u58EB'.indexOf(str.charAt(1))>-1)
  {
	  man=change_name(str.charAt(1));
	  if (rb==1) man=man.toLowerCase();
	  for (i=0;i<9;i++) {if (BPos[i].join('').search(new RegExp('.*'+man+'.*'+man+'.*','g'))!=-1) break;}
	  if (i==9) return ('\u672A\u53D1\u73B0\u4EFB\u4F55\u5217\u6709\u4E24\u4E2A'+((rb==1)?'\u9ED1':'\u7EA2')+str.charAt(1));
	  col=i;
	  if ((str.charAt(0)=='\u524D'&&rb==-1)||(str.charAt(0)=='\u540E'&&rb==1)) row=BPos[col].join('').indexOf(man);
	  else row=BPos[col].join('').lastIndexOf(man);
  }
  else if('\u8F66\u9A6C\u70AE\u5175\u5352\u76F8\u8C61\u4ED5\u58EB\u5E05\u5C06'.indexOf(str.charAt(0))>-1&&s19.indexOf(str.charAt(1))>-1)
  {
	  man=change_name(str.charAt(0));
	  if (rb==1) man=man.toLowerCase();
	  col=rb1+rb*change_cols(str.charAt(1));
	  j=BPos[col].join('').split(man);
	  if (j.length==2) row=j[0].length;
	  else if(j.length==3&&'\u76F8\u8C61\u4ED5\u58EB'.indexOf(str.charAt(0))>-1)
	  {
		  if((str.charAt(2)=="\u8FDB"&&rb==-1)||(str.charAt(2)=="\u9000"&&rb==1)) row=9-j[2].length;
		  else row=j[0].length;
	  }
	  else return ('\u68CB\u76D8\u7B2C['+str.charAt(1)+']\u5217\u6709['+(j.length-1)+']\u4E2A'+((rb==1)?'\u9ED1':'\u7EA2')+'['+str.charAt(0)+']');
  }
  else return 0;
  col=col-0;row=row-0;fcol=col;frow=row;
  i="AaBbNnRCPKrcpk".indexOf(man);
  if(i>5)
  {
	  if(str.charAt(2)=="\u5E73") {tcol=rb1+rb*change_cols(str.charAt(3));trow=row;}
	  else {tcol=col;trow=row+((str.charAt(2)=="\u8FDB")?1:-1)*rb*change_cols(str.charAt(3));}
  }
  else if(str.charAt(2)=="\u5E73") return 0;
  else if(i>3)
  {
	  tcol=rb1+rb*change_cols(str.charAt(3));i=Math.abs(col-tcol);
	  if (i<1||i>2) return 0;
	  trow=row+((str.charAt(2)=="\u8FDB")?1:-1)*rb*(3-i);
  }
  else if(i>-1)
  {
	  tcol=rb1+rb*change_cols(str.charAt(3));i=(i>1)?2:1;
	  if (Math.abs(col-tcol)!=i) return 0;
	  trow=row+((str.charAt(2)=="\u8FDB")?1:-1)*i*rb;
  }
  if (trow>=0&&trow<=9)
  {
	  BPos[tcol][trow]=man;
	  BPos[fcol][frow]=' ';
	  return ''+fcol+frow+tcol+trow;
  }
  else return ('\u6B64\u6B65\u68CB['+str+']\u5C06\u8DD1\u51FA\u68CB\u76D8\u4E4B\u5916');
}
function chkP64(p64,rb)
{
  var i,b,c;
  p64=p64.match(/\d\d/gi);
  c=tQZ.split('');
  b='_'+p64.join('_');
  if (b.search(/(_[0-8]\d).*\1/)!=-1) return '\u68CB\u5B50\u91CD\u53E0';
  if (b.search(/_9[0-8]/)!=-1) return '\u68CB\u5B50\u8D8A\u754C';
  for (i=0;i<32;i++) {if (POK[i][p64[i]-0]=='0') {if (rb==0) isJieQi=1;return (i>15?'\u9ED1':'\u7EA2')+c[i]+'\u4F4D\u9519';}}
  return chkPJS(p64,rb);
}
function chkPJS(p64,rb)
{
  // \u68C0\u67E5\u5C06\u5E05
  if (rb!='r'&&rb!='b') return '';
  var i,b,c,z,x,y,ix,iy,pxy=[];
  z=[8,7,6,5,4,5,6,7,8,9,9,11,11,11,11,11,16,17,18,19,20,19,18,17,16,25,25,27,27,27,27,27];
  c=tQZ.replace(/(.)/gi,'\u88AB$1\u5403,').split(',');
  p=p64.split('');
  for (i=0;i<=9;i++) pxy[i]='0000000000'.split('');
  for (i=0;i<32;i++) pxy[p[i*2]][p[i*2+1]]=z[i]; pxy[9][9]='0';
  //var s='';c[0]=' \u3000';for(y=0;y<=9;y++){for(x=0;x<=9;x++)s+=c[pxy[x][y]].substr(1,1);s+='\n';}alert(s);
  var z0,zc,zm,zp,zb,zj;
  i=rb=='b'?0:16;
  z0=c[z[20-i]-0].substr(1,1);
  zc=z[0+i];
  zm=z[1+i];
  zp=z[9+i];
  zb=z[11+i];
  zx=z[2+i];
  zs=z[3+i];
  zj=z[4+i];
  x=p[(20-i)*2]-0;
  y=p[(20-i)*2+1]-0;
  if (x==9) return ''; //(rb=='b'?'\u9ED1\u5C06':'\u7EA2\u5E05')+'\u6D88\u5931';
  if (pxy[x>0?x-1:0][y]==zb||pxy[x+1][y]==zb||pxy[x][y-(rb=='b'?-1:1)]==zb) return z0+c[zb];
  if (x+1<=8&&y-1>=0) //\u53F3\u4E0A
  {
	  if (pxy[x+1][y-1]!='0')
	  {
		  if (pxy[x+1][y-1]==zs) return z0+c[zs];
	  }
	  else if (x+2<=8&&y-2>=0)
	  {
		  if (pxy[x+2][y-2]==zx) return z0+c[zx];
		  if (pxy[x+2][y-1]==zm) return z0+c[zm];
		  if (pxy[x+1][y-2]==zm) return z0+c[zm];
	  }
	  else if (x+2<=8)
	  {
		  if (pxy[x+2][y-1]==zm) return z0+c[zm];
	  }
	  else if (y-2>=0)
	  {
		  if (pxy[x+1][y-2]==zm) return z0+c[zm];
	  }
  }
  if (x+1<=8&&y+1<=9) //\u53F3\u4E0B
  {
	  if (pxy[x+1][y+1]!='0')
	  {
		  if (pxy[x+1][y+1]==zs) return z0+c[zs];
	  }
	  else if (x+2<=8&&y+2<=9)
	  {
		  if (pxy[x+2][y+2]==zx) return z0+c[zx];
		  if (pxy[x+2][y+1]==zm) return z0+c[zm];
		  if (pxy[x+1][y+2]==zm) return z0+c[zm];
	  }
	  else if (x+2<=8)
	  {
		  if (pxy[x+2][y+1]==zm) return z0+c[zm];
	  }
	  else if (y+2<=9)
	  {
		  if (pxy[x+1][y+2]==zm) return z0+c[zm];
	  }
  }
  if (x-1>=0&&y+1<=9) //\u5DE6\u4E0B
  {
	  if (pxy[x-1][y+1]!='0')
	  {
		  if (pxy[x-1][y+1]==zs) return z0+c[zs];
	  }
	  else if (x-2>=0&&y+2<=9)
	  {
		  if (pxy[x-2][y+2]==zx) return z0+c[zx];
		  if (pxy[x-2][y+1]==zm) return z0+c[zm];
		  if (pxy[x-1][y+2]==zm) return z0+c[zm];
	  }
	  else if (x-2>=0)
	  {
		  if (pxy[x-2][y+1]==zm) return z0+c[zm];
	  }
	  else if (y+2<=9)
	  {
		  if (pxy[x-1][y+2]==zm) return z0+c[zm];
	  }
  }
  if (x-1>=0&&y-1>=0) //\u5DE6\u4E0A
  {
	  if (pxy[x-1][y-1]!='0')
	  {
		  if (pxy[x-1][y-1]==zs) return z0+c[zs];
	  }
	  else if (x-2>=0&&y-2>=0)
	  {
		  if (pxy[x-2][y-2]==zx) return z0+c[zx];
		  if (pxy[x-2][y-1]==zm) return z0+c[zm];
		  if (pxy[x-1][y-2]==zm) return z0+c[zm];
	  }
	  else if (x-2>=0)
	  {
		  if (pxy[x-2][y-1]==zm) return z0+c[zm];
	  }
	  else if (y+2>=0)
	  {
		  if (pxy[x-1][y-2]==zm) return z0+c[zm];
	  }
  }
  for (ix=x+1;ix<=8;ix++)
  {
	  if (pxy[ix][y]!='0')
	  {
		  if (pxy[ix][y]==zc) return z0+c[zc];
		  else if (pxy[ix][y]==zj) return z0+c[zj];
		  for (ix=ix+1;ix<=8;ix++)
		  {
			  if (pxy[ix][y]!='0')
			  {
				  if (pxy[ix][y]==zp) return z0+c[zp];
				  ix=10;break;
			  }
		  }
	  }
  }
  for (ix=x-1;ix>=0;ix--)
  {
	  if (pxy[ix][y]!='0')
	  {
		  if (pxy[ix][y]==zc) return z0+c[zc];
		  else if (pxy[ix][y]==zj) return z0+c[zj];
		  for (ix=ix-1;ix>=0;ix--)
		  {
			  if (pxy[ix][y]!='0')
			  {
				  if (pxy[ix][y]==zp) return z0+c[zp];
				  ix=-1;break;
			  }
		  }
	  }
  }
  for (iy=y+1;iy<=9;iy++)
  {
	  if (pxy[x][iy]!='0')
	  {
		  if (pxy[x][iy]==zc) return z0+c[zc];
		  else if (pxy[x][iy]==zj) return z0+c[zj];
		  for (iy=iy+1;iy<=9;iy++)
		  {
			  if (pxy[x][iy]!='0')
			  {
				  if (pxy[x][iy]==zp) return z0+c[zp];
				  iy=10;break;
			  }
		  }
	  }
  }
  for (iy=y-1;iy>=0;iy--)
  {
	  if (pxy[x][iy]!='0')
	  {
		  if (pxy[x][iy]==zc) return z0+c[zc];
		  else if (pxy[x][iy]==zj) return z0+c[zj];
		  for (iy=iy-1;iy>=0;iy--)
		  {
			  if (pxy[x][iy]!='0')
			  {
				  if (pxy[x][iy]==zp) return z0+c[zp];
				  iy=-1;break;
			  }
		  }
	  }
  }
  return '';
}
function initPOK()
{
  var r='0000000000',s='1111111111',t='0000000001';
  var a='1111111000',b='1111100000',c='0001111111',d='0000011111';
  var f='0000000100',g='0000010001',h='0010000000',i='1000100000';
  var j='0000000101',k='0000000010',l='1010000000',m='0100000000';
  var o='0000000111',p='1110000000';
  var z=[];
  z[0]=(s+s+s+s+s+s+s+s+s+t).split(''); //\u8F66\u9A6C\u70AE
  z[1]=z[0];
  z[2]=(f+r+g+r+f+r+g+r+f+t).split(''); //\u76F8
  z[3]=(r+r+r+j+k+j+r+r+r+t).split(''); //\u4ED5
  z[4]=(r+r+r+o+o+o+r+r+r+r).split(''); //\u5E05
  z[5]=z[3];
  z[6]=z[2];
  z[7]=z[0];
  z[8]=z[0];
  z[9]=z[0];
  z[10]=z[0];
  z[11]=(a+b+a+b+a+b+a+b+a+t).split(''); //\u5175
  z[12]=z[11];
  z[13]=z[11];
  z[14]=z[11];
  z[15]=z[11];
  z[16]=z[0];
  z[17]=z[0];
  z[18]=(h+r+i+r+h+r+i+r+h+t).split('');
  z[19]=(r+r+r+l+m+l+r+r+r+t).split('');
  z[20]=(r+r+r+p+p+p+r+r+r+r).split('');
  z[21]=z[19];
  z[22]=z[18];
  z[23]=z[0];
  z[24]=z[0];
  z[25]=z[0];
  z[26]=z[0];
  z[27]=(c+d+c+d+c+d+c+d+c+t).split(''); //\u5352
  z[28]=z[27];
  z[29]=z[27];
  z[30]=z[27];
  z[31]=z[27];
  POK=z;
}
function chkMove(m,p90,rb)
{
  // p90\u6570\u7EC4 rb\u4E0A\u7740\u7EA2r\u548C\u9ED1b
  var i,mc,c,e,n,x,y,ok='_',rbt,z;
  c=tQZ.split('');
  e='CMXSJSXMCPPZZZZZCMXSJSXMCPPZZZZZ'.split('');
  n='rrrrrrrrrrrrrrrrbbbbbbbbbbbbbbbb'.split('');
  m=m.match(/\d/gi);
  var m01=m[0]+m[1],m23=m[2]+m[3],m0=m[0]-0,m1=m[1]-0,m2=m[2]-0,m3=m[3]-0;
  rbt=rb=='b'?'r':rb=='r'?'b':'u';
  if (m0==9||m2==9) return rbt+'\u8DD1\u51FA\u68CB\u76D8';
  mc=p90[m01-0]-0; //\u70B9\u5B50id
  if (mc==99) return rbt+'\u627E\u4E0D\u5230\u5B50';
  if (m01==m23) return rbt+'\u68CB\u5B50\u672A\u52A8';
  rbt=n[mc]=='b'?'b\u9ED1':'r\u7EA2';
  if (rb==n[mc]) return rbt+'\u65B9\u8FDE\u8D70';
  var fp=e[mc];
  if (fp=='C')
  {
	  for (x=m0,y=m1-1;y>=0;y--)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else if (n[z]==n[mc]) break;
		  else {ok+=''+x+y+'_';break;}
	  }
	  for (x=m0+1,y=m1;x<=8;x++)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else if (n[z]==n[mc]) break;
		  else {ok+=''+x+y+'_';break;}
	  }
	  for (x=m0,y=m1+1;y<=9;y++)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else if (n[z]==n[mc]) break;
		  else {ok+=''+x+y+'_';break;}
	  }
	  for (x=m0-1,y=m1;x>=0;x--)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else if (n[z]==n[mc]) break;
		  else {ok+=''+x+y+'_';break;}
	  }
  }
  else if (fp=='P')
  {
	  for (x=m0,y=m1-1;y>=0;y--)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else
		  {
			  for (y=y-1;y>=0;y--)
			  {
				  z=p90[x*10+y]-0;
				  if (z!=99)
				  {
					  if (n[z]==n[mc]) break;
					  else {ok+=''+x+y+'_';break;}
				  }
			  }
		  }
	  }
	  for (x=m0+1,y=m1;x<=8;x++)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else
		  {
			  for (x=x+1;x<=8;x++)
			  {
				  z=p90[x*10+y]-0;
				  if (z!=99)
				  {
					  if (n[z]==n[mc]) break;
					  else {ok+=''+x+y+'_';break;}
				  }
			  }
		  }
	  }
	  for (x=m0,y=m1+1;y<=9;y++)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else
		  {
			  for (y=y+1;y<=9;y++)
			  {
				  z=p90[x*10+y]-0;
				  if (z!=99)
				  {
					  if (n[z]==n[mc]) break;
					  else {ok+=''+x+y+'_';break;}
				  }
			  }
		  }
	  }
	  for (x=m0-1,y=m1;x>=0;x--)
	  {
		  z=p90[x*10+y]-0;
		  if (z==99) ok+=''+x+y+'_';
		  else
		  {
			  for (x=x-1;x>=0;x--)
			  {
				  z=p90[x*10+y]-0;
				  if (z!=99)
				  {
					  if (n[z]==n[mc]) break;
					  else {ok+=''+x+y+'_';break;}
				  }
			  }
		  }
	  }
  }
  else if (fp=='M')
  {
	  if (m1-2>=0&&p90[(m0)*10+(m1-1)]-0==99)
	  {
		  if (m0+1<=8) {z=''+(m0+1)+(m1-2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
		  if (m0-1>=0) {z=''+(m0-1)+(m1-2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m0+2<=8&&p90[(m0+1)*10+(m1)]-0==99)
	  {
		  if (m1+1<=9) {z=''+(m0+2)+(m1+1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
		  if (m1-1>=0) {z=''+(m0+2)+(m1-1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m1+2<=9&&p90[(m0)*10+(m1+1)]-0==99)
	  {
		  if (m0+1<=8) {z=''+(m0+1)+(m1+2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
		  if (m0-1>=0) {z=''+(m0-1)+(m1+2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m0-2>=0&&p90[(m0-1)*10+(m1)]-0==99)
	  {
		  if (m1+1<=9) {z=''+(m0-2)+(m1+1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
		  if (m1-1>=0) {z=''+(m0-2)+(m1-1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
  }
  else if (fp=='J'||fp=='Z')
  {
	  if (m0-1>=0)
	  {
		  z=''+(m0-1)+(m1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if (m0+1<=8)
	  {
		  z=''+(m0+1)+(m1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if ((m1+1<=9)&&(!(fp=='B'&&n[mc]=='r')))
	  {
		  z=''+(m0)+(m1+1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if ((m1-1>=0)&&(!(fp=='B'&&n[mc]=='b')))
	  {
		  z=''+(m0)+(m1-1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
  }
  else if (fp=='S')
  {
	  if (m0+1<=8&&m1-1>=0)
	  {
		  z=''+(m0+1)+(m1-1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if (m0+1<=8&&m1+1<=9)
	  {
		  z=''+(m0+1)+(m1+1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if (m0-1>=0&&m1+1<=9)
	  {
		  z=''+(m0-1)+(m1+1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
	  if (m0-1>=0&&m1-1>=0)
	  {
		  z=''+(m0-1)+(m1-1);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';
	  }
  }
  else if (fp=='X')
  {
	  if (m0+2<=8&&m1-2>=0)
	  {
		  if (p90[(m0+1)*10+(m1-1)]-0==99) {z=''+(m0+2)+(m1-2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m0+2<=8&&m1+2<=9)
	  {
		  if (p90[(m0+1)*10+(m1+1)]-0==99) {z=''+(m0+2)+(m1+2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m0-2>=0&&m1+2<=9)
	  {
		  if (p90[(m0-1)*10+(m1+1)]-0==99) {z=''+(m0-2)+(m1+2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
	  if (m0-2>=0&&m1-2>=0)
	  {
		  if (p90[(m0-1)*10+(m1-1)]-0==99) {z=''+(m0-2)+(m1-2);if (n[p90[z-0]-0]!=n[mc]) ok+=z+'_';}
	  }
  }
  if (ok.indexOf('_'+m23)==-1) return rbt+c[mc]+'\u8D70\u9519';
  // if (POK[mc][m23-0]=='0') return rbt+c[mc]+'\u4F4D\u9519';
  return n[mc];
}
function setRBE(s,nNUM)
{
  RBE=(RBE.slice(0,nNUM).join('\n')+s).split('\n');
}
function showRBE(nNUM)
{
  var f=(RBE.slice(nNUM).join('')).replace(/([rbu])([^rbu]+)/,'\t$2\t').split('\t');
  if (f.length>1)
  {
	  if (isJieQi&&f[1].slice(-2)=='\u4F4D\u9519') return;
	  f[2]=nNUM+f[0].length;
	  f[3]='\u7B2C'+f[2]+'\u7740\uFF1A'+f[1];
	  if (!/\S/.test(cText.value)) cText.value=f[3]+(Mobile?'':'\n\n\n\n\n\n\n\n\n\n');
	  $('divrbe').innerHTML='<a href="javascript:gotonum('+f[2]+')" style="color:#f0f;">'+f[3]+'</a>';;
	  $('divrbe').style.display='';
  }
}
function change_cols(s)
{
  s='\u4E00\uFF11\u4E8C\uFF12\u4E09\uFF13\u56DB\uFF14\u4E94\uFF15\u516D\uFF16\u4E03\uFF17\u516B\uFF18\u4E5D\uFF19'.indexOf(s);
  return 1+(s-s%2)/2;
}
function change_name(s)
{
  return 'RNCBBAAKKPP'.charAt('\u8F66\u9A6C\u70AE\u76F8\u8C61\u4ED5\u58EB\u5E05\u5C06\u5175\u5352'.indexOf(s));
}
function fixKeyDown(e)
{
  Xnc_KEvent(window.event?window.event.keyCode:e.keyCode);
}
function execLoad() {
  //document.write('');
  initboard();
  initdata();
  TT[1]=Number(new Date());
  
  // hide view elements
  document.getElementById('DhtmlXQ').hidden = true;
}
if (document.body.onkeydown==null) document.body.onkeydown=fixKeyDown;
if (!viewedit) var viewedit=false;
if (isSP||Mobile||getvar('viewurl')=='edit') document.write('<scr'+'ipt type="text/javascr'+'ipt" src="'+DhtmlXQimgpath+'DhtmlXQ_www_dpxq_com_save.js"><\/scr'+'ipt>');
else execLoad();


