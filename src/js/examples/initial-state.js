export default {
  app: {
    articles: [
      {
        id: 1,
        title: 'Ancient retroviruses emerged half a billion years ago : Nature News & Comment',
        url: 'http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'
      },
      {
        id: 2,
        title: '\'Chamber of Rats\': Mexican parliament renamed in Google Maps prank | World news | The Guardian',
        url: 'https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'
      },
      {
        id: 3,
        title: 'Godka Cirka - A Hole in the Sky (Trailer) on Vimeo',
        url: 'https://vimeo.com/192574852'
      },
      {
        id: 4,
        title: 'India: For the love of second-hand books | India | Al Jazeera',
        url: 'http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'
      }
    ],
    connections: [
      {
        from: 1,
        id: 1,
        name: 'Sourced by',
        to: 2
      },
      {
        from: 2,
        id: 2,
        name: 'Sourced by',
        to: 3
      },
      {
        from: 3,
        id: 3,
        name: 'Response to',
        to: 1
      },
      {
        from: 3,
        id: 4,
        name: 'Response to',
        to: 4
      }
    ]
  }
}
