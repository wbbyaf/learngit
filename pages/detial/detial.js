Page({
  data: {
    itemlist:[
      {taskName:"原材料到仓1",taskStatus:4,taskStatusName:"已完成",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"2018-01-20-11:21:30",swiper_w:72,img:["https://img.alicdn.com/tfs/TB1bxv2H9zqK1RjSZFjXXblCFXa-800-270.jpg","https://img.alicdn.com/tfs/TB1xKDWHYPpK1RjSZFFXXa5PpXa-800-402.jpg","https://img.alicdn.com/tfs/TB1qqL4H3HqK1RjSZFPXXcwapXa-800-314.jpg","https://img.alicdn.com/tfs/TB1bxv2H9zqK1RjSZFjXXblCFXa-800-270.jpg"]},
      {taskName:"开裁日期",taskStatus:4,taskStatusName:"已完成",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"2018-01-20-11:21:30",swiper_w:72,img:["https://img.alicdn.com/tfs/TB1bxv2H9zqK1RjSZFjXXblCFXa-800-270.jpg"]},
      {taskName:"上线生产",taskStatus:3,taskStatusName:"延期",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"2018-01-20-11:21:30",swiper_w:72,img:[]},
      {taskName:"生产组装",taskStatus:2,taskStatusName:"进行中",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"2018-01-20-11:21:30",swiper_w:72,img:[]},
      {taskName:"原材料到仓5",taskStatus:1,taskStatusName:"未开始",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"",swiper_w:72,img:[]},
      {taskName:"原材料到仓6",taskStatus:1,taskStatusName:"未开始",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"",swiper_w:72,img:[]},
      {taskName:"原材料到仓7",taskStatus:1,taskStatusName:"未开始",planFinishiTime:"2018-01-20-11:21:30",actualFinishiTime:"",swiper_w:72,img:[]}
    ],
    img:"../../image/camore.png",
    list_i:0,
  },
  onLoad() {
    let itemlist=this.data.itemlist;
    for(let i=0;i<itemlist.length;i++){
      let lenth=this.data.itemlist[i].img.length+2;
      let swiper_w=lenth*62+10;
      itemlist[i].swiper_w=swiper_w;
    }
    this.setData({
      itemlist:itemlist
    })//初次渲染滑动宽度
    dd.getStorage({
      key: 'taskId',
      success: function(res) {
        
      },
      fail: function(res){
        dd.alert({content: res.errorMessage});
      }
    });
  },
  listindex:function(tes){//获取当前点击下标
    let list_i=tes.currentTarget.dataset.index-1;
    this.setData({
      list_i:list_i
    })
  },
  upimg:function(){//上传图片
    let _this=this;
    setTimeout(function(){
      let i=_this.data.list_i;
      dd.chooseImage({
        count: 1,
        success: (res) => {
          let img= res.apFilePaths[0];
          let imgarray=_this.data.itemlist[i].img;
          let lenth=_this.data.itemlist[i].img.length+2;
          imgarray.push(img);
          let swiper_w=lenth*62+10;
          let itemlist=_this.data.itemlist;
          itemlist[i].img=imgarray;
          itemlist[i].swiper_w=swiper_w;
          _this.setData({
            itemlist:itemlist
          })
        },
      });
    }, 300)
  },
  lookimg:function(res){//查看图片
    let _this=this;
    setTimeout(function(){
      let i=_this.data.list_i;
      let t=res.currentTarget.dataset.index;
      dd.previewImage({
        current:0,
        urls: _this.data.itemlist[i].img,
      });
    },300)
  }
});
