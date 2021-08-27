var countries = {
    "Taiwan": {
        "Jumbotron":
        {
            newJumbotronImg: { backgroundImage: `url(${require('./../images/Taiwan_Jumbotron.jpg')})` },
            newHeaderStyle: { color: 'purple', textAlign: "center", opacity: "0.7" },
            newHeaderText: "Taiwan Waiting For You !!!"
        }
        ,
        "TourPackage": [
            {
                img: { backgroundImage: `url(${require('./../images/Taiwan_1.png')})` },
                adText: "8D7N FABULOUS LOVE IN TAIWAN",
                tips: "From $748 Click to Enter!!"
            },
            {
                img: { backgroundImage: `url(${require('./../images/Taiwan_2.png')})` },
                adText: "6D5N WALTZING THROUGH TAIWAN",
                tips: "From $928"
            },
            {
                img: { backgroundImage: `url(${require('./../images/Taiwan_3.png')})` },
                adText: "6D5N CAPTIVATING TAIWAN",
                tips: "From $768"
            },
            {
                img: { backgroundImage: `url(${require('./../images/Taiwan_4.png')})` },
                adText: "8D7N ENCHANTING TAIWAN",
                tips: "From $938"
            },]
    },
    "Thailand": {
        "Jumbotron":
        {
            newJumbotronImg: { backgroundImage: `url(${require('./../images/Thai_Jumbotron.jpg')})` },
            newHeaderStyle: { color: 'lightblue', textAlign: "center" },
            newHeaderText: "Welcome to Thailand !!!"
        }
        ,
        "TourPackage": [
            {
                img: { backgroundImage: `url(${require('./../images/Thai_1.png')})` },
                adText: "5D4N CHIANG MAI CHIANG RAI + 2N BANGKOK FREE & EASY",
                tips: "From $500 Click to Enter!!"

            },
            {
                img: { backgroundImage: `url(${require('./../images/Thai_2.png')})` },
                adText: "5D4N BANGKOK UDON THANI RED LOTUS - LAOS",
                tips: "From $400"
            },
            {
                img: { backgroundImage: `url(${require('./../images/Thai_3.png')})` },
                adText: "5D4N BANGKOK KHAO KHO - SEA OF CLOUDS",
                tips: "From $400"
            },]
    }
}

var fetchAllCountries = (info) => {
    var tmp = []
    Object.values(countries).map((item) => {
        tmp = [...tmp, ...item[info]]
    })
    return tmp
}

// module.exports = 
export default {
    fetchJumbotronImg : (destinationName ) => {
        return countries[destinationName]["Jumbotron"]
     },
    
    fetchTourPacakges : (destinationName) => {
        if( destinationName === 'All')
            return fetchAllCountries("TourPackage")
        return countries[destinationName]["TourPackage"]
    },

    countryExist : (destinationName) =>{
        return countries[destinationName]
    }
}