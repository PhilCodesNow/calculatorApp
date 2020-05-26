const currentFunction = [];
let $readout = '';

////// make clear function 
const $equals = ()=>{
    $equal = $('.equals').on('click', (event)=>{
        let $add = '';
        for(let i = 0; i < currentFunction.length; i++){
            $add = $add + currentFunction[i];
        }
        console.log(eval($add));
        $('.readout').text(eval($add));
    })
}
$equals();





const $calculate = () =>{
    $num = $('.calc button').not('.equals').not('.clear').on('click', (event) =>{
        $selected = $(event.currentTarget).text();
        $readout = $readout + $(event.currentTarget).text();
        $('.readout').text($readout);
        currentFunction.push($selected);
        console.log(currentFunction);
    })
}

$calculate();

const $clear = () =>{
    $clear = $('.clear').on('click', (event) =>{
        currentFunction = [];00
        0
        $('.readout').text('0');
    })
}


$clear();
