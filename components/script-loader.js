class ScriptLoader{

    constructor(script){

        this.script=script
        this.scriptElement=document.createElement("script");
        this.head=document.querySelector("head");

    }


    load(id){
        return new Promise((resolve,reject)=>{

            this.scriptElement.src=this.script;
            this.scriptElement.setAttribute("type","module");
            this.scriptElement.setAttribute("id",`${id}`)
            this.scriptElement.onload=e=>resolve(e);
            this.scriptElement.onerror=e=>reject(e)
            this.head.appendChild(this.scriptElement);

        })
    }


}

export default ScriptLoader