import $ from 'jquery'

$(document).ready(() => {

    $('body').append('<div class="button-container"></div>');
    $('.button-container').append('<button class="button generate">Generate Die</button>');
    $('.button-container').append('<button class="button Roll">Roll Dice</button>');
    $('.button-container').append('<button class="button Sum">Sum Dice</button>');
    $('.button-container').append('<button class="button show">Show Die Values</button>')
    $('.button-container').after('<div class="container"></div>')

    $('.generate').click(() => {
        new Die(0, 0);
    })

    $('.Sum').click(() => {
        let text_array: any[] = [];
        div_array.forEach((element) => {
            let text = $(element).text();
            text_array.push(parseInt(text, 10))
        })
        let sum = text_array.reduce((a, b) => a + b);
        alert(`The sum of the die is ${sum}`);
    })


    $('.show').mousedown(() => $('.target').show());
    $('.show').mouseup(() => $('.target').hide());

})

let div_array: any[] = [];

class Die {
    // public div: JQuery;
    public div: JQuery;

    constructor(public index: number, public value: number) {
        this.div = $('<div></div>');
        $(this.div).addClass("val");
        div_array.push(this.div);

        this.roll();

        $('.Roll').click(() => this.roll());

        $(this.div).click(() => this.roll());

        $(this.div).dblclick(() => {
            this.index = div_array.indexOf(this.div);
            div_array.splice(this.index, 1);
            $(this.div).remove();
        })

        $('.container').append(this.div);
    }

    roll() {
        this.value = randVal(7, 1);
        $(this.div).html(`<span class="target">${this.value}</div>`)
        // backImg(this.value, this.div);
    }

}

let randVal = (Max: number, Min: number) => Math.floor(Math.random() * (Max - Min)) + Min;

// let backImg = (Val:number, div:JQuery) => {
//     switch (Val) {
//         case 1:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-1')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-1')
//             }
//             break;

//         case 2:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-2')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-2')
//             }
//             break;

//         case 3:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-3')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-3')
//             }
//             break;

//         case 4:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-4')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-4')
//             }
//             break;

//         case 5:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-5')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-5')
//             }
//             break;

//         case 6:
//             d_class = $(div).attr('class').split(' ')[1];
//             if (d_class == undefined) {
//                 $(div).addClass('d-6')
//             } else {
//                 $(div).removeClass(d_class);
//                 $(div).addClass('d-6')
//             }
//             break;
//     }
// }