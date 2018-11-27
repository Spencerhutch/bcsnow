const scrapeIt = require('scrape-it')

const URL = 'https://cypressmountain.com/downhill-conditions-and-cams'

module.exports = {
  snowfall: async () => {
    return await fetchSnowfall()
  }

}

fetchSnowfall = async () => {
  const { data } = await scrapeIt(URL, {
    conditions: {
      listItem: '.content .flex_snowLocations .box_sides4',
      data: {
        snowfall: '.text_48 span',
        time: '.text_11'
      }
    }
  })

  return data
}