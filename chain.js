class chain {
constructor(bodyA,bodyB){
    var c_option={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        lenght:5
    }

     this.chain = Constraint.create(c_option)
    World.add(world,this.chain)   
}
display(){
    var pA=this.chain.bodyA.position
    var pB=this.chain.bodyB.position
    strokeWeight(3)
    line(pA.x,pA.y,pB.x,pB.y)
}

}