
const {createApp} = Vue;

const dt = luxon.DateTime;

createApp({
    
    data(){
        return{

            filter: "",

            now: "",

            msg: "",

            selector: 0,

            fakeSelector : 0,

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        }
    },

    methods: {
        moveSelector(index){
            this.selector = index;
        },

        addNewMessage(){
            if (this.msg !== ""){
                console.log("charizard scelgo te!!!");
    
                this.now = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
    
                this.fakeSelector = this.selector;
    
                const newMsg = {
                    date: this.now,
                    message: this.msg,
                    status: 'sent',
                };
    
                this.contacts[this.fakeSelector].messages.push(newMsg);
    
                this.msg = "";
    
                this.now = "";
    
                setTimeout(this.botAnswer, 1000);
            }
        },

        botAnswer(){
            console.log("io invece scelgo pikatchu!!!");

            this.now = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);

            const newMsg = {
                date: this.now,
                message: 'lasciami stare o chiamo le guardie',
                status: 'received',
                // perch?? ho settato flag a FALSE solo qui e mi funziona a tutti? ...boh...
                flagHiddenMenu: false,
                flagDeleteMsg: false,
            };

            this.contacts[this.fakeSelector].messages.push(newMsg);

            this.now = "";

            this.fakeSelector = 0;
        },

        showHiddenMenu(element){
            for(let i = 0; i < this.contacts.length; i++) {
                for(let j = 0; j < this.contacts[i].messages.length; j++){
                    if(this.contacts[i].messages[j].flagHiddenMenu === true){

                        this.contacts[i].messages[j].flagHiddenMenu = !this.contacts[i].messages[j].flagHiddenMenu;
                    }
                }
            }

            element.flagHiddenMenu = !element.flagHiddenMenu;
        },

        deleteAllHiddenMenu(){
            for(let i = 0; i < this.contacts.length; i++) {
                for(let j = 0; j < this.contacts[i].messages.length; j++){
                    if(this.contacts[i].messages[j].flagHiddenMenu === true){

                        this.contacts[i].messages[j].flagHiddenMenu = !this.contacts[i].messages[j].flagHiddenMenu;
                    }
                }
            }
        },

        deleteMsg(element){
            element.message = "";
        },
    },



}).mount("#app");