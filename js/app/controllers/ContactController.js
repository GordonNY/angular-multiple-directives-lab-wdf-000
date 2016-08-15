function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    

    this.addContact = function () {
        var data = {
            name: this.name,
            phone: this.phoneNumber
        };
        this.contacts.push(data);

        this.name = '';
        this.phoneNumber = '';
    }

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);