/**********************************
Class Name:  Simple Harmonic Motion (SHM) 简谐运动
Property:
    * A => 幅角
    * w => 角速度
    * da => 幅值偏移量
    * dact => 角偏移
Method:
    * value() => 获取值
***********************************/
class SHM {

    //构造器
    constructor(A, w, da, dact) {
        this.A = A;
        this.w = w;
        this.da = da || 0;
        this.dact = dact || 0;

    }

    value(t) {
        return this.A * Math.sin(this.w * t + this.dact) + this.da;
    }
}



