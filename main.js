app.post('/main.js', (req, res) => {
    rappers
        .push()
        // .then((result) => {
        // 	res.redirect('/')
        // })
        .catch((error) => console.error(error))
})

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois',
    },
    unknown: {
        age: 0,
        birthname: 'unknown',
        birthLocation: 'unknown',
    },
}
