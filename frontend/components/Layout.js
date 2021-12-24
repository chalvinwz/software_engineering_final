import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Software Engineering Final</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			{children}
		</>
	)
}

export default Layout
