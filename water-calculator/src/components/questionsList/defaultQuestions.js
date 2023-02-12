export const defaultQuestions = [
    {
        title: 'Zadejte vaši váhu',
        type: 'input',
        label:"Váha (číselně)",
        name: 'vaha'
    },
    {
        title: 'Vyberte si vaši kategorii',
        type: 'radio',
        name: 'kategorie',
        options: [{value: 110, label: 'Kojenec'}, {value: 95, label: 'Dítě 1-3 roky'}, {value: 75, label: 'Dítě 4-6 let'}, {value: 60, label: 'Dítě 7-9 let'}, {value: 40, label: 'Dítě od 10 let'}, {value: 35, label: 'Dospělý'}]
    },
    {
        title: 'Máte nadváhu?',
        type: 'radio',
        name: 'nadvaha',
        options: [{value: 0, label: 'Mám vcelku optimální váhu'}, {value: 250, label: 'Mám do 10 kg nadváhy'}, {value: 500, label: 'Mám do 20 kg nadváhy'}, {value: 750, label: 'Mám do 30 kg nadváhy'}, {value: 1000, label: 'Mám do 40 kg nadváhy'}, {value: 1250, label: 'Mám do 50 kg nadváhy'}]
    },
    {
        title: 'Plánujete dnes pohybovou aktivitu?',
        type: 'radio',
        name: 'pohyb',
        options: [{value: 400, label: 'Čeká mě 30 min aktivity'}, {value: 1200, label: 'Čeká mě 90 min aktivity'}, {value: 1600, label: 'Čeká mě 120 min aktivity'}, {value: 2000, label: 'Čeká mě 150 min aktivity'}, {value: 2400, label: 'Čeká mě 180 min aktivity'}]
    },
    {
        title: 'Pijete kávu?',
        type: 'radio',
        name: 'kava',
        options: [{value: 150, label: 'Denně piju 1 kávu'}, {value: 300, label: 'Denně piju 2 kávy'}, {value: 450, label: 'Denně piju 3 kávy'}, {value: 600, label: 'Denně piju 4 kávy'}]
    },
    {
        title: 'Jaké je dnes počasí?',
        type: 'radio',
        name: 'pocasi',
        options: [{value: 10, label: 'Dnes je venku horké počasí'}, {value: 0, label: 'Není horko'}]
    },
]