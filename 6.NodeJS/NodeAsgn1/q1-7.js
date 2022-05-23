var strftime=require("strftime");
var es_ES={
    days:["Monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
    shortdays:["mon","tue","wed","thurs","fri","sat","sun"],
    months:["january","february","march","april","may","june","july","august","september","october","november","december"],
    shortmonths:["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],
    AM: "AM",
    PM: "PM",
    am: "am",
    pm: "pm",
}
var strftimeES=strftime.localize(es_ES)
console.log(strftimeES("%A de %d %B de %Y, %H:%M:%S"))