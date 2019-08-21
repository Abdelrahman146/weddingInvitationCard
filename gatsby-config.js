module.exports = {
	siteMetadata: {
		title: 'بطاقة دعوة حفل زفاف عبدالرحمن و هبة',
		author: 'Abdel Rahman',
		description: 'بطاقة دعوة وتفاصيل حفل زفاف عبدالرحمن و هبة',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				orientation: 'portrait'
			}
		}
	]
};
