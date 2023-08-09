const url = "https://restcountries.com/v3.1/all"


const loadUserData = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Benjamin',
                pic: "/favicon.ico",
                bio: "I am Ben a Tech enthusiast"
            })
        }, 2000)
    })

}
const promiseReturned = async() => {
    const value = await loadUserData()
    console.log(value)
}

promiseReturned()