# React slideshow sample with BGM

This is a react slideshow sample application with BGM selector.

- Search bgm in YouTube and play it.

	


### How to use

1. Git clone this repository
1. Place your favourite pictures into `public/images/slick/`
1. Install dependencies

	```
	$ bundle install
	$ bin/yarn install
	```
	
1. Build 

	```
	$ bin/webpack
	```
	
1.  Start server

	```
	$ rails s
	```
1. Navigate your browser to `localhost:3000/`
1. Put song name into textbox and click Select button. Then, the application will start to play the matched BGM.