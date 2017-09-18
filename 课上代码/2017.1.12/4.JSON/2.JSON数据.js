// JSON格式和语法上是按照JS对象的格式
//所以说JSON类型的字符串能够很好地转化成JS对象

// 重要的写法：
//（1）数据为 key->value存储
//（2）数据间用逗号隔开
//（3）大括号保存的是对象
//（4）中括号保存的是数组
{

	"student":[
		{"name":"weiwei"},
		{"name":"zhangyan"},
		{"name":"laochi"}


	],
	"teacher":"WJ"

}


{
    
    "result": {
        "sk": {  /*当前实况天气*/
            "temp": "21",  /*当前温度*/
            "wind_direction": "西风",  /*当前风向*/
            "wind_strength": "2级",  /*当前风力*/  
            "humidity": "4%",  /*当前湿度*/
            "time": "14:25"  /*更新时间*/
       	     }
       }
} 