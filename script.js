const convert =()=>{
    const temp = (document.querySelector("#temp").value);
    const temp_value = document.getElementById("ip").value;
    console.log(`temp:${temp} Value:${temp_value}`);
    if(temp==='farenhite'){
        var ans=(((temp_value)-32)*(5))/9;
    }
    else{
        var ans =(((( parseFloat(temp_value))*(9)/5))+32);
    }
    if(!Number.isInteger(ans))
        ans = ans.toFixed(4);
    ans = ans.toString();
    (temp==='farenhite')?ans=ans+" *C": ans = ans + " *F";

    if(ans=='NaN *F' ||  ans=='NaN *C'){
        alert("Please enter a valid temperature value");
    }
    else
    document.getElementById('result').innerText = ans;
}