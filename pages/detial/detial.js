Page({
  data: {
    img:[
      "../../image/camore.png"
    ]
  },
  onLoad() {
  
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
