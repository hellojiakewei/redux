##### this绑定在构造函数中提升效率
##### key值问题
##### redux
###### redux 三个基本原则
- store必须是唯一的
- 只有store能改变自己的内容，不是reducer更新的
- reducer 必须是个纯函数 给定固定的输入就会有固定的输出
> action 拆分为了防止定义的type发生错误
> actionCreate 是为了将来业务逻辑增多的时候，避免业务员出现混乱，另一方面也为了测试友好