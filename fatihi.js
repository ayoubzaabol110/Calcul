
try{const prompt=require("prompt-sync")();
class clcul{
    add(a,b){
        const num1=prompt("donner le number de num1:");
        const num2=prompt("donner le number num2 :");
        a=Number(num1);
        b=Number(num2);
        if (isNaN(a,b)) {
            throw new error()
        }
        return  a+b;
        
    }
    Soustraction(a,b){
        const num1=prompt("donner le number de num1:");
        const num2=prompt("donner le number num2 :");
        a=Number(num1);
        b=Number(num2);
        if (isNaN(a,b)) {
            throw new error()
        }
        console.log(`Résultat : ${num1 -num2}`);
    }
    Multiplication(a,b){
        const num1=prompt("donner le number de num1:");
        const num2=prompt("donner le number num2 :");
        a=Number(num1);
        b=Number(num2);
        if (isNaN(a,b)) {
            throw new error()
        }
        console.log(`Résultat : ${a * b}`);
    }
    Division (a,b){
        const num1=prompt("donner le number de num1:");
        const num2=prompt("donner le number num2 :");
        a=Number(num1);
        b=Number(num2);
        if (isNaN(a,b)) {
            throw new error()
        }
        if (b === 0) {
            console.log("Erreur : Division par zéro.");
        } else {
            console.log(`Résultat : ${a / b}`);
        }
    }
    puissance(a,b){
        const num1=prompt("donner le number de num1:");
        const num2=prompt("donner le number num2 :");
        a=Number(num1);
        b=Number(num2);
        console.log(`Résultat : ${Math.pow(a,b)}`);
    }
racine(a){
    const num1=prompt("donner le number de num1:");
    a=Number(num1);
    if (isNaN(a)) {
        throw new error()
    }
    console.log(`Résultat : ${Math.sqrt(a)}`);
}
 factorual() {

    let n = Number(prompt("enter un nombre: "));
    if (isNaN(n)) {
        throw new error()
    }
    if (n === 0 || n === 1) {//0!=1&& 1!=1.
        return 1;
    }
    if (n < 0) {
        console.error("la foctorielle n'est pas définie pour les nombres négatifs.");
    return null;
    }
    let resultat = 1;
    let i;
    for (i = n; i >= 1; i--) {
        resultat *= i;
    }
    console.log("resultat" + "  " + resultat);
}

}

const Cl=new clcul()
while(true){
    console.log("1=Addition (+)")
    console.log("2=Soustraction (-)")
    console.log("3= Multiplication (*)")
    console.log("4=Division (/)")
    console.log("5=Puissance (^)")
    console.log("6=Racine carrée (√)")
    console.log("7=Factorielle (!)")
    console.log("8=Quiter")

    const opiration=prompt("donner le opiration:")
   
    switch(opiration){
        case "1":
            console.log(`Résultat : ${Cl.add()}`);
            break;
        case "2":
            console.log(`Résultat : ${Cl.Soustraction()}`);
           break;
        case"3":
        console.log(`Résultat : ${Cl.Multiplication()}`);
        break;
      case "4":
        console.log(`Résultat : ${Cl.Division()}`);
        break;
        case "5":
            console.log(`Résultat : ${Cl.puissance()}`);
            break;
        case "6":
            console.log(`Résultat : ${Cl.racine()}`);
            break;
            case "7":
                console.log(`Résultat : ${Cl.factorual()}`);
               break;
        case"8":
        return
        break;
            default:
               console.log("donner opiration avec le menu") 
            break;
    }
}}catch(erreor){
console.log("vous devez entrer le number ");
}