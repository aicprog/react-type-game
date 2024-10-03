export const sharedStyles = {
	primary: '#e16365', //primary color of application
};

export const lightTheme = {
	bgColor: '#f9f9f9', //main background of application
	surface: '#f9f9f9', //what goes on the surface of the background
	secondary: '#f0f4f8', //secondary color of application
	onBackground: '#333', //contrasting color of background (i.e. text)
	onSurface: '', //contrasing color of surface
	onPrimary: '', //contrasting color of primary
	onSecondary: '#333', //contrasting color of secondary
	...sharedStyles,
};
export const darkTheme = {
	bgColor: '#333333', //main background of application
	surface: '#f9f9f9', //what goes on the surface of the background
	secondary: '#3d3c3c', //secondary color of application
	onBackground: '#f9f9f9', //contrasting color of background (i.e. text)
	onSurface: '', //contrasing color of surface
	onPrimary: '', //contrasting color of primary
	onSecondary: '#f9f9f9', //contrasting color of secondary
	...sharedStyles,
};

export const themes = {
	light: lightTheme,
	dark: darkTheme,
};
