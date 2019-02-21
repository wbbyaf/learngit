Page({
  data: {
    authCode:"",
    userId:"",
    userTypeCode:"",
    userRoleCode:"",
    pointstate:[{hasTask:"ture",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3},{hasTask:"ture",taskStatus:4},{hasTask:"false",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3},{hasTask:"ture",taskStatus:1},{hasTask:"ture",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3},{hasTask:"ture",taskStatus:4},{hasTask:"false",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3},{hasTask:"false",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:1},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3},{hasTask:"false",taskStatus:1},{hasTask:"ture",taskStatus:2},{hasTask:"ture",taskStatus:3}],
    tasklist:[{taskId:1254256,taskName:"任务就是你任务就是你任务就是你",taskStatus:2,taskStatusName:"未开始",desc:"任务描述入仓1500件，都是合格的任务描述入仓1500件，都是合格的任务描述入仓1500件，都是合格的"},{taskId:5698210,taskName:"第二个任务第二个任务第二个任务第二个任务",taskStatus:3,taskStatusName:"未生产",desc:"任务描述入仓1000件，都是合格的任务描述入仓15件，都是合格的任务描述入仓0件，都是合格的"}],
    nowtime:"",
    movestart:0,
    movestarty:0,
    activity:0,
    year: 0,
    month: 0,
    day:0,
    week:0,
    date: [ '一', '二', '三', '四', '五', '六','日'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    tgString:"甲乙丙丁戊己庚辛壬癸", 
    dzString:"子丑寅卯辰巳午未申酉戌亥", 
    numString:"一二三四五六七八九十", 
    monString:"正二三四五六七八九十冬腊", 
    weekString:"日一二三四五六",
    sx:"鼠牛虎兔龙蛇马羊猴鸡狗猪", 
    cYear:0,
    cMonth:0,
    cDay:0, 
    CalendarData :new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5,0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95), 
    madd:new Array(0,31,59,90,120,151,181,212,243,273,304),
  },
  onLoad: function () {
    // dd.navigateTo({
    //   url: "/pages/detial/detial"
    // })//t.alicdn.com/t/gettime
    let _this=this;
    // dd.httpRequest({
    //     url: "http://t.alicdn.com/t/gettime",   // 自己配置的接口
    //     method: 'get',
    //     dataType: 'jsonp',
    //     success: function(res) {
    //       let js=res.data.slice(18,28);
    //       let data=new Date(js*1000);
    //       console.log(data);
    //       _this.setData({
    //         nowtime: data
    //       })
    //     },
    //     fail: function(res) {
    //         console.log("httpRequestFail",res)
    //     }
    // });
    dd.getAuthCode({
        success:(res)=>{
            _this.setData({
                authCode:res.authCode
            })
            console.log(res)
            dd.httpRequest({
                url: "https://acs.wapa.taobao.com/gw/mtop.taobao.imf.isv.login/1.0/",   // 自己配置的接口
                method: 'POST',
                data: {
                    corpId:"ding4ccf801cff7fd7d835c2f4657eb6378f",
                    requestAuthCode: res.authCode,
                },
                dataType: 'json',
                success: function(res) {
                    console.log('success',res)
                    let userId = res.data.result.userId;
                    let userTypeCode = res.data.result.userTypeCode;
                    let userRoleCode = res.data.result.userRoleCode;
                    _this.setData({
                        userId:userId,
                        userTypeCode:userTypeCode,
                        userRoleCode:userRoleCode
                    })
                },
                fail: function(res) {
                    console.log("httpRequestFail",res)
                },
                complete: function(res) {
                }

            });
        },
        fail: (err)=>{
            console.log('getAuthCodeFail',JSON.stringify(err))
        }
    })
    //定义阳历全局变量
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let week = now.getDay()-1;
    this.dateInit();
    let calendar = this.showCal(); 
    console.log(calendar);
    this.setData({
      year: year,
      month: month,
      day: day,
      week: this.data.date[week],
      isToday: '' + year + month + now.getDate()
    })
  },
  setpoint:function (year,month) {
    let dayNums = new Date(year, (month+1), 0).getDate();                //获取目标月有多少天
    console.log("月数",dayNums);
    let userId=this.data.userId;
    let userTypeCode=this.data.userTypeCode;
    let userRoleCode=this.data.userRoleCode;
    let startDate=year + '-' + (month) + '-' + 1;
    let endDate=year + '-' + (month) + '-' + dayNums;
    console.log("开始",startDate,endDate);
    dd.httpRequest({
                url: "",   // 自己配置的接口
                method: 'POST',
                data: {
                    startDate:startDate,
                    endDate:endDate,
                    userId:userId,
                    userTypeCode:userTypeCode,
                    userRoleCode:userRoleCode,
                },
                dataType: 'json',
                success: function(res) {
                    console.log('success',res)
                    let date = res.data.date;
                    let hasTask = res.data.hasTask;
                    let taskStatus = res.data.taskStatus;
                    _this.setData({
                        userId:userId,
                        userTypeCode:userTypeCode,
                        userRoleCode:userRoleCode
                    })
                },
                fail: function(res) {
                    console.log("httpRequestFail",res)
                },
                complete: function(res) {
                }

            });
  },
  clickpoint:function (data) {
    let clickdata = data;                //获取目标月有多少天
    // console.log("月数",dayNums);
    let userId=this.data.userId;
    let userTypeCode=this.data.userTypeCode;
    let userRoleCode=this.data.userRoleCode;
    dd.httpRequest({
                url: "",   // 自己配置的接口
                method: 'POST',
                data: {
                    date:clickdata,
                    userId:userId,
                    userTypeCode:userTypeCode,
                    userRoleCode:userRoleCode,
                },
                dataType: 'json',
                success: function(res) {
                    console.log('success',res)
                    let taskId = res.data.date;
                    let taskName = res.data.hasTask;
                    let taskStatus = res.data.taskStatus;
                    let taskStatusName = res.data.taskStatus;
                    let desc = res.data.taskStatus;
                    _this.setData({
                        userId:userId,
                        userTypeCode:userTypeCode,
                        userRoleCode:userRoleCode
                    })
                },
                fail: function(res) {
                    console.log("httpRequestFail",res)
                },
                complete: function(res) {
                }

            });
  },
  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = [];                        //需要遍历的日历数组数据
    let arrLen = 0;                            //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();     //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + '/' + (month + 1) + '/' + 1).getDay()-1;     //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate();      //获取目标月有多少天
    let obj = {};
    let num = 0;
    let clickdata=year + '-' + (month + 1) + '-' +new Date().getDate();
    this.clickpoint(clickdata);//初始化任务列表
    this.setpoint(year,month);
    // if (month+1 > 11) {
    //   nextYear = year + 1;
    //   dayNums = new Date(nextYear/nextMonth/ 0).getDate();
    // }
    if(startWeek==-1){
      startWeek=6;
    }
    arrLen = startWeek + dayNums;
    console.log(arrLen)
    let pointstate=this.data.pointstate;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5,
          hasTask: pointstate[num-1].hasTask,
          taskStatus:  pointstate[num-1].taskStatus
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })
    console.log(dateArr);
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  timeclick:function(e){//时间点击函数
    console.log(e);
    let dataset=e.currentTarget.dataset.date;
    let year = this.data.year;
    let month = this.data.month;
    let day=e.currentTarget.dataset.day;
    let week=new Date(year + ',' + month + ',' + day).getDay()-1;
    if(week==-1){
      week=6;
    }
    console.log(week);
    this.setData({
      day:day,
      week:this.data.date[week],
      activity:dataset
    })
    let clickdata=year + '-' + month + '-' +day;
    console.log(clickdata)
    this.clickpoint(clickdata);//重新渲染任务列表
  },
  TouchStart:function(e){//滑动函数
    let movestart=e.touches[0].pageX;
    let movestarty=e.touches[0].pageY;
    this.setData({
      movestart:movestart,
      movestarty:movestarty
    })
  },  
  TouchEnd:function(e){
    let moveend=e.changedTouches[0].pageX;
    let moveendy=e.changedTouches[0].pageY;
    let movestart=this.data.movestart;
    let movestarty=this.data.movestarty;
    let movelength=movestart-moveend;
    let movelengthy=movestarty-moveendy;
    if(movelength>10&&Math.abs(movelength)>Math.abs(movelengthy)){
      let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
      let month = this.data.month > 11 ? 0 : this.data.month;
      let week=new Date(year + ',' + (month + 1) + ',' + 1).getDay()-1
      if(week==-1){
        week=6;
      }
      this.setData({
        year: year,
        month: (month + 1),
        day:1,
        week:this.data.date[week]
      })
      this.dateInit(year, month);
    }else if(movelength<-10&&Math.abs(movelength)>Math.abs(movelengthy)){
      //全部时间的月份都是按0~11基准，显示月份才+1
      let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
      let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
      let week=new Date(year + ',' + (month + 1) + ',' + 1).getDay()-1
      if(week==-1){
        week=6;
      }
      this.setData({
        year: year,
        month: (month + 1),
        day:1,
        week:this.data.date[week]
      })
      this.dateInit(year, month);
    }
  },
  LinkDetial:function(e){
    let taskId=e.currentTarget.dataset.taskId
    console.log(taskId);
    dd.setStorage({
      key: 'taskId',
      data: {taskId: taskId},
      success: function() {
        dd.navigateTo ({
          url: "/pages/detial/detial"
        })
      }
    });
  },
/*获取当前农历*/
showCal:function (){ 
let D=new Date(); 
let yy=D.getFullYear(); 
let mm=D.getMonth()+1; 
let dd=D.getDate(); 
let ww=D.getDay(); 
let ss=parseInt(D.getTime() / 1000); 
if (yy<100) yy="19"+yy; 
return this.GetLunarDay(yy,mm,dd); 
}, 
GetBit:function(m,n){ 
return (m>>n)&1; 
}, 
//农历转换 
e2c:function (){ 
  let TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]); 
  let total,m,n,k; 
  let isEnd=false; 
  let tmp=TheDate.getYear();
  let madd=this.data.madd;
  let CalendarData=this.data.CalendarData;
  if(tmp<1900){ 
    tmp+=1900; 
  } 
  total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38; 

  if(TheDate.getYear()%4==0&&TheDate.getMonth()>1) { 
    total++; 
  } 
  for(m=0;;m++){ 
    k=(CalendarData[m]<0xfff)?11:12; 
    for(n=k;n>=0;n--){ 
      if(total<=29+this.GetBit(CalendarData[m],n)){ 
      isEnd=true; break; 
    } 
      total=total-29-this.GetBit(CalendarData[m],n); 
    } 
    if(isEnd) break; 
  } 
  let cYear=1921 + m; 
  let cMonth=k-n+1; 
  let cDay=total; 
  if(k==12){ 
    if(cMonth==Math.floor(CalendarData[m]/0x10000)+1){ 
      cMonth=1-cMonth; 
    } 
    if(cMonth>Math.floor(CalendarData[m]/0x10000)+1){ 
      cMonth--; 
    } 
  }
  this.setData({
    cYear:cYear,
    cMonth:cMonth,
    cDay:cDay
  }) 
},
GetcDateString:function (){
  let cYear=this.data.cYear;
  let cMonth=this.data.cMonth;
  let cDay=this.data.cDay;
  let monString=this.data.monString;
  let numString=this.data.numString;
let tmp=""; 
/*显示农历年：（ 如：甲午(马)年 ）*/
/*tmp+=tgString.charAt((cYear-4)%10); 
tmp+=dzString.charAt((cYear-4)%12); 
tmp+="("; 
tmp+=sx.charAt((cYear-4)%12); 
tmp+=")年 ";*/
if(cMonth<1){ 
  tmp+="(闰)"; 
  tmp+=monString.charAt(-cMonth-1); 
}else{ 
  tmp+=monString.charAt(cMonth-1); 
} 
tmp+="月"; 
tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"三十")); 
if (cDay%10!=0||cDay==10){ 
  tmp+=numString.charAt((cDay-1)%10); 
} 
return tmp; 
}, 
GetLunarDay:function (solarYear,solarMonth,solarDay){ 
//solarYear = solarYear<1900?(1900+solarYear):solarYear; 
if(solarYear<1921 || solarYear>2020){ 
  return ""; 
  }else{ 
    solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11; 
    this.e2c(solarYear,solarMonth,solarDay); 
    return this.GetcDateString(); 
  } 
}
})