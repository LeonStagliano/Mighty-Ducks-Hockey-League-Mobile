const { createApp } = Vue

createApp({
    data() {
        return {
            events: [
                {
                    type: `event`,
                    date: new Date(`August 04, 2022`),
                    month: `AUGUST`,
                    day: `04`,
                    title: `MDHL Fundraiser`
                },
                {
                    type: `event`,
                    date: new Date(`August 16, 2022`),
                    month: `AUGUST`,
                    day: `16`,
                    title: `Season Kick-off: Meet the Teams`
                },
                {
                    id: `0901U1U4`,
                    type: `match`,
                    date: new Date(`September 01, 2022`),
                    month: `SEPTEMBER`,
                    day: `01`,
                    time: `9:30 am`,
                    location: `AJ Katzenmaier`,
                    map: ``,
                    team1: `U1`,
                    team2: `U4`,
                    status: ``
                },
                {
                    id: `0901U3U2`,
                    type: `match`,
                    date: new Date(`September 01, 2022`),
                    month: `SEPTEMBER`,
                    day: `01`,
                    time: `1:00 pm`,
                    location: `Greenbay`,
                    map: ``,
                    team1: `U3`,
                    team2: `U2`,
                    status: ``
                },
                {
                    id: `0908U5U6`,
                    type: `match`,
                    date: new Date(`September 08, 2022`),
                    month: `SEPTEMBER`,
                    day: `08`,
                    time: `9:30 am`,
                    location: `Howard A. Yeager`,
                    map: ``,
                    team1: `U5`,
                    team2: `U6`,
                    status: ``
                },
                {
                    id: `0908U6U1`,
                    type: `match`,
                    date: new Date(`September 08, 2022`),
                    month: `SEPTEMBER`,
                    day: `08`,
                    time: `1:00 pm`,
                    location: `Marjorie P. Hart`,
                    map: ``,
                    team1: `U6`,
                    team2: `U1`,
                    status: ``
                },
                {
                    id: `0915U2U4`,
                    type: `match`,
                    date: new Date(`September 15, 2022`),
                    month: `SEPTEMBER`,
                    day: `15`,
                    time: `9:30 am`,
                    location: `North`,
                    map: ``,
                    team1: `U2`,
                    team2: `U4`,
                    status: ``
                },
                {
                    id: `0915U3U5`,
                    type: `match`,
                    date: new Date(`September 15, 2022`),
                    month: `SEPTEMBER`,
                    day: `15`,
                    time: `1:00 pm`,
                    location: `AJ Katzenmaier`,
                    map: ``,
                    team1: `U3`,
                    team2: `U5`,
                    status: ``
                },
                {
                    id: `0922U1U3`,
                    type: `match`,
                    date: new Date(`September 22, 2022`),
                    month: `SEPTEMBER`,
                    day: `22`,
                    time: `9:30 am`,
                    location: `South`,
                    map: ``,
                    team1: `U1`,
                    team2: `U3`,
                    status: ``
                },
                {
                    id: `0922U2U6`,
                    type: `match`,
                    date: new Date(`September 22, 2022`),
                    month: `SEPTEMBER`,
                    day: `22`,
                    time: `1:00 pm`,
                    location: `Howard A. Yeager`,
                    map: ``,
                    team1: `U2`,
                    team2: `U6`,
                    status: ``
                },
                {
                    id: `0929U4U5`,
                    type: `match`,
                    date: new Date(`September 29, 2022`),
                    month: `SEPTEMBER`,
                    day: `29`,
                    time: `9:30 am`,
                    location: `Greenbay`,
                    map: ``,
                    team1: `U4`,
                    team2: `U5`,
                    status: ``
                },
                {
                    id: `1006U2U5`,
                    type: `match`,
                    date: new Date(`October 06, 2022`),
                    month: `OCTOBER`,
                    day: `06`,
                    time: `9:30 am`,
                    location: `Marjorie P. Hart`,
                    map: ``,
                    team1: `U2`,
                    team2: `U5`,
                    status: ``
                },
                {
                    id: `1006U1U6`,
                    type: `match`,
                    date: new Date(`October 06, 2022`),
                    month: `OCTOBER`,
                    day: `06`,
                    time: `1:00 pm`,
                    location: `South`,
                    map: ``,
                    team1: `U1`,
                    team2: `U6`,
                    status: ``
                },
                {
                    id: `1008U3U4`,
                    type: `match`,
                    date: new Date(`October 08, 2022`),
                    month: `OCTOBER`,
                    day: `08`,
                    time: `9:30 am`,
                    location: `Howard A. Yeager`,
                    map: ``,
                    team1: `U3`,
                    team2: `U4`,
                    status: ``
                },
                {
                    id: `1008U5U1`,
                    type: `match`,
                    date: new Date(`October 08, 2022`),
                    month: `OCTOBER`,
                    day: `08`,
                    time: `1:00 pm`,
                    location: `Greenbay`,
                    map: ``,
                    team1: `U5`,
                    team2: `U1`,
                    status: ``
                },
                {
                    id: `1020U6U3`,
                    type: `match`,
                    date: new Date(`October 20, 2022`),
                    month: `OCTOBER`,
                    day: `20`,
                    time: `9:30 am`,
                    location: `North`,
                    map: ``,
                    team1: `U6`,
                    team2: `U3`,
                    status: ``
                },
                {
                    id: `1020U2U4`,
                    type: `match`,
                    date: new Date(`October 20, 2022`),
                    month: `OCTOBER`,
                    day: `20`,
                    time: `1:00 pm`,
                    location: `Marjorie P. Hart`,
                    map: ``,
                    team1: `U2`,
                    team2: `U4`,
                    status: ``
                },
                {
                    id: `1027U3U1`,
                    type: `match`,
                    date: new Date(`October 27, 2022`),
                    month: `OCTOBER`,
                    day: `27`,
                    time: `9:30 am`,
                    location: `AJ Katzenmaier`,
                    map: ``,
                    team1: `U3`,
                    team2: `U1`,
                    status: ``
                },
                {
                    id: `1027U5U6`,
                    type: `match`,
                    date: new Date(`October 27, 2022`),
                    month: `OCTOBER`,
                    day: `27`,
                    time: `1:00 pm`,
                    location: `Howard A. Yeager`,
                    map: ``,
                    team1: `U5`,
                    team2: `U6`,
                    status: ``
                }
            ],
            missionExpanded: false,
            visionExpanded: false,
            generalInfoExpanded: false,
            menu: "",
            selectOptions: false,
            games: [],
            gamesFiltered: [],
            selectedTeam: "All",
            showFinisheds: false,
            horaActual: new Date()
        }
    },
    created() {
        this.catchGames()
        this.gamesFiltered = this.games
        this.setGameStatus()


    },
    methods: {
        expandAccordion: function (accordionElement) {
            if (accordionElement === `mission`) {
                this.missionExpanded === false ? this.missionExpanded = true : this.missionExpanded = false
            }
            if (accordionElement === `vision`) {
                this.visionExpanded === false ? this.visionExpanded = true : this.visionExpanded = false
            }
            if (accordionElement === `generalInfo`) {
                this.generalInfoExpanded === false ? this.generalInfoExpanded = true : this.generalInfoExpanded = false
            }
        },
        showOptions: function () {
            this.selectOptions === false ? this.selectOptions = true : this.selectOptions = false
        },
        catchGames: function () {
            this.games = this.events.filter(event => event.type === `match`)
        },
        teamToFilter: function (team) {
            this.selectedTeam = team
            this.selectOptions = false
        },
        setGameStatus: function () {
            this.games.forEach(game => {
                if (this.horaActual > game.date) {
                    game.status = `Finished`
                }
                else {
                    game.status = `To Play`
                }
            })
        }

    },
    computed: {
        filter: function () {
            this.gamesFiltered = this.games.filter(game => {
                return (this.selectedTeam === game.team1 || this.selectedTeam === game.team2 || this.selectedTeam === `All`)
            })
        }
    }
}).mount('#app')