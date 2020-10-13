module.exports = function toReadable (number) {
    number = number.toString().split('');
    let otv = '';

    function returnInt(element) {
        return parseInt(element, 10);
      }

    num = number.map(returnInt)

    function whatIsNumber(e){
        if(e === 0){
            return ''
        }
        if(e === 1){
            return 'one'
        }
        if(e === 2){
            return 'two'
        }
        if(e === 3){
            return 'three'
        }
        if(e === 4){
            return 'four'
        }
        if(e === 5){
            return 'five'
        }
        if(e === 6){
            return 'six'
        }
        if(e === 7){
            return 'seven'
        }
        if(e === 8){
            return 'eight'
        }
        if(e === 9){
            return 'nine'
        }   
    }

    function whatIsNumberDec(e){
        if(e === 0){
            return ''
        }
        if(e === 2){
            return 'twenty '
        }
        if(e === 3){
            return 'thirty '
        }
        if(e === 4){
            return 'forty '
        }
        if(e === 5){
            return 'fifty '
        }
        if(e === 6){
            return 'sixty '
        }
        if(e === 7){
            return 'seventy '
        }
        if(e === 8){
            return 'eighty '
        }
        if(e === 9){
            return 'ninety '
        }   
    }

    function whatIsNumberDl(e){
        if(e ==='undefined'){
            return ''
        }
        if(e === 0){
            return 'ten'
        }
        if(e === 1){
            return 'eleven'
        }
        if(e === 2){
            return 'twelve'
        }
        if(e === 3){
            return 'thirteen'
        }
        if(e === 4){
            return 'fourteen'
        }
        if(e === 5){
            return 'fifteen'
        }
        if(e === 6){
            return 'sixteen'
        }
        if(e === 7){
            return 'seventeen'
        }
        if(e === 8){
            return 'eighteen'
        }
        if(e === 9){
            return 'nineteen'
        }   
    }


    for(let i = 0; i < number.length; i++){
        if(num.length === 3){
            otv = otv + whatIsNumber(num[0]) + ' hundred '
            num = num.splice(1);
        }

        if(num.length === 2){
            if(num[0] !== 1){
                otv = otv + whatIsNumberDec(num[0])
                num = num.splice(1);
            }
            else if(num[0] === 1){
                otv = otv + whatIsNumberDl(num[1])
                num = num.splice(2);
            }
        }
        if(num.length === 1){
            if(number.length === 1 && num[0]===0){
                otv = 'zero'
            }else{
                otv = otv + whatIsNumber(num[0])
                num = num.splice(1);
            }

        }
    }
    return otv.trim()
}

