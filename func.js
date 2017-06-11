const _ = require('ramda');
//Functions
let get = _.curry((property, object) => object[property]);
let getName = _.map(get('name'));
let find = (str) => _.compose(_.contains(str), getName);
let getcode = _.curry((chr) => chr.charCodeAt(0));
let toCode = _.compose(_.map(getcode), _.split(""));
let hash = _.reduce(_.multiply, 1);
let check = _.curry((cond, data) => cond(data) ? data : []);

function main() {
    let data = [{name: 'Mark Cuban'}, {name: 'Donald Knuth'}, {name: 'Edgard Dijkstra'}, {name: 'Alonzo Church'}, {name: 'Haskell Curry'}];
    console.log(
        _.compose(
            _.map(hash),
            _.map(toCode),
            getName,
            check(find('Mark Cuban'))
        )(data)
    );
}

main()
