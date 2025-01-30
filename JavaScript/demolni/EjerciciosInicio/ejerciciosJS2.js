const nameList = [
    "Miguel Gutiérrez",
    "Antonio Banderas",
    "Lionel Messi",
    "Penélope Cruz"
]

const splitedList = nameList.map(e => e.split(' '));
const sorted = splitedList.sort((e1, e2) => {
    if(e1[1] > e2[1]){
        return 1;
    }else if(e1[1] < e2[1]){
        return -1;
    }else{
        return 0;
    }
})

splitedList.forEach(e => console.log(e));
