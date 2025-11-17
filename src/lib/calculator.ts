// basic arithmetic helpers
export function add(a:number,b:number){return a+b}
export function sub(a:number,b:number){return a-b}
export function mul(a:number,b:number){return a*b}
export function div(a:number,b:number){if(b===0) throw new Error("DIV_BY_ZERO"); return a/b}
