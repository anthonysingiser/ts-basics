//using generics to create a simple state management function
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial
    return [
        () => val, 
        (v: T) => {
            val= v;
        },
    ];
}

//using the simpleState function with numbers
const [state1, setState1] = simpleState(10)
console.log(state1())
setState1(62)
console.log(state1())

//using the simpleState function with null and strings
const [state2, setState2] = simpleState<string | null>(null)
console.log(state2())
setState2("Hello")
console.log(state2())

interface Rank<RankItem> {
    item: RankItem
    rank: number
}

function ranker<RankItem>(
    items: RankItem[], 
    rank: (v: RankItem) => number
    ): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank)

    return ranks.map((rank) => rank.item)
}

interface Batters {
    name: string;
    avg: number;
}

const batters: Batters[] = [
    {
        name: "Castellanos",
        avg: 321,
    },
    {
        name: "Suarez",
        avg: 202,
    },
    {
        name: "Harper",
        avg: 349,
    },
];

const ranks = ranker(batters, ({ avg }) => avg | avg)
console.log(ranks)