const normalPerson = {
    firstName : 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName: 'Alom',
    salary: 25000,
}

// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);
// normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000); 
// heroChargeBill(3000); 
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(heroPerson, 900, 199, 14);
console.log(heroPerson.salary);