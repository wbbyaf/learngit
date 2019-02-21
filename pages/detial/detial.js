Page({
  data: {
    img:[
      "../../image/camore.png"
    ]
  },
  onLoad() {
    dd.getStorage({
      key: 'taskId',
      success: function(res) {
        dd.alert({content: '任务编码成：' + res.data.taskId});
      },
      fail: function(res){
        dd.alert({content: res.errorMessage});
      }
    });
  },
  upimg:function(){
    dd.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        let img= res.apFilePaths[0];
        let imgarray=this.data.img;
        imgarray.push(img);
        console.log(imgarray);
        this.setData({
          img:imgarray
        })
      },
    });
  },
  lookimg:function(){
    dd.previewImage({
      current: 0,
      urls: this.data.img,
    });
  }
});
