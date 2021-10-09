const exterior = (): void => {
    const ola = 'Ola'
    let mundo
    const interno = (): void => {
        mundo = 'mundo'
        console.log(`${ola} ${mundo}`)
    }
    interno()

    console.log(`${ola} ${mundo}`)
}
exterior()