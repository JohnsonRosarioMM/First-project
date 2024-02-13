let YourName = ""
let TheirName = ""

function submit(){
    YourName = document.getElementById("YourName").value;
    TheirName = document.getElementById("TheirName").value;
    let YourNameArr = YourName.split('');
    let TheirNameArr = TheirName.split('');
    
    let Remain = 0;
    
    if(YourNameArr.length > TheirNameArr.length){
        Remain = getRemainValue(YourNameArr,TheirNameArr);
    } else {
        Remain = getRemainValue(TheirNameArr,YourNameArr);
    }

    let relationship = getRelationship(Remain);
    
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = relationship;
}

function getRemainValue(YourNameArr,TheirNameArr){
    for (let i = 0; i < YourNameArr.length; i++){
        let common = TheirNameArr.indexOf(YourNameArr[i]);
        if(common >= 0){
            TheirNameArr[common] = 0;
            YourNameArr[i] = 0;
        }
    }
    let joinedArr = YourNameArr.concat(TheirNameArr);
    let RemainArr = [];
    for (let j = 0; j < joinedArr.length; j++){
        if (joinedArr[j] !=0) {
            RemainArr.push(joinedArr[j]);
        }
    } 
    return RemainArr.length;
}

function getRelationship(value){
    let finalnum = value % 6;

    let flames = {
        0: 'Friends',
        1: 'Love',
        2: 'Affection',
        3: 'Marriage',
        4: 'Enemies',
        5: 'Sister/Brother'
    }
    return(flames[finalnum]);
}
