//搜狗自定义指令
//----qqget
this.$ajax({
  method: 'get',
  url: '',
  params: {

  }
}).then(res=>{
  console.log(res)
}).catch(error =>{
  console.log(error.response)
});
//---- qqpost
this.$ajax({
  method: 'post',
  url: '',
  data: {

  }
}).then(res=>{
  console.log(res)
}).catch(error =>{
  console.log(error.response)
});

//----qqtbd
headers:{'Content-Type':'application/x-www-form-urlencoded'}
//----qqtjs
headers:{'Content-Type':'application/json'}