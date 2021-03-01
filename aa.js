//验证this问题

var  o = {
    user:"追梦子",
    fn : function(){
         console.log(this.user);
    }
}

o.fn();