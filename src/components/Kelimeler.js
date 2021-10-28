var Meyveler = [
"çilek",
"elma",
"armut",
"kiraz",
"vişne",
"mandalina",
"portakal",
"turunç",
"ayva",
"kivi",
"üzüm",
"erik",
"incir",
"hurma",
"dut",
"frambuaz",
"kavun",
"karpuz",
"kayısı",
"muz",
"şeftali"

]

function Randomkelime(){

    return Meyveler[Math.floor(Math.random() * Meyveler.length)]

}
    export{Randomkelime}