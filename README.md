# Savaari Assignment

## Task:

1.	Print the Browser's Resolution

2.	URL (HTML or PHP) will also be executed on Desktop Browser ; if the request is coming from Desktop browser then the code can display "DESKTOP BROWSER NOT SUPPORTED"

3.	If the resolution of the browser window is lesser than or equal to 320 x  480  then load the following image on the browser window: http://www.alphasavaari.com/tmp_sitemap/04_320x480.jpg

4.	If the resolution of the browser window is greater than 320 x  480 but lesser than 480 x  960 then load the following image on the browser window: http://www.alphasavaari.com/tmp_sitemap/03_480x960.jpg

5.	If the resolution of the browser window is greater than 480 x  960 but lesser than 720 x 1280 then load the following image on the browser window: http://www.alphasavaari.com/tmp_sitemap/02_720x1280.jpg

6.	If the resolution of the browser window is greater than 720 x 1280 then load the following image on the browser window: http://www.alphasavaari.com/tmp_sitemap/01_1080x1920.jpg

### Added Features

* Browser resolution detection both during loading and resize. This feature is done via Javascript.
* Loading screen.
* User agent detection, wheather the user is using mobile or desktop, or any other (like curl).
* Width based media quwery
