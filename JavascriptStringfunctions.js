//trinadh07
function stringequivalence(txt1,txt2){

    if(txt1==txt2){
        console.log("strings are equal");
    }
    else{
        console.log("Strings are not equal");
    }
}

function reversestring(str){
    var n;
    var rev="";
    n=str.length;
    //console.log(n)
    while(n!=0){
        rev+=(str.charAt(n-1));
        n--;
    }
    console.log(rev);
}

function alphanumeric(str){
    let res=str.match(/[^a-zA-z0-9 ]/g);
    console.log(res);
    if(res==null){
        console.log("String is a alphanumeric");
    } else{
        console.log("String contains special characters");
    }
}

function creditcardcheck(num){
    let res=num.match(/^(?:3[47][0-9]{13})$/)
    if(res!=null){
        console.log("credit card number is valid")
    }else{
        console.log("credit card number is invalid")
    }
}
stringequivalence("ram","RAM")
reversestring("suresh")
alphanumeric("this is a javascript program??")
creditcardcheck("340123452685125")
